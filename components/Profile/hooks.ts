import { useState, useEffect } from "react";
import useUserStore from "@/stores/userStore";
import HttpService from "@/service/httpService";
import { GoogleProfile } from "./profile.types";

interface UseProfileReturn {
  profile: GoogleProfile | null;
  loading: boolean;
  error: string | null;
}

export const useProfile = (): UseProfileReturn => {
  const { accessToken } = useUserStore();
  const [profile, setProfile] = useState<GoogleProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGoogleProfile = async () => {
      try {
        if (!accessToken) {
          throw new Error("No access token available");
        }

        const response = await HttpService.google.getProfile();
        setProfile(response.data);
      } catch (err) {
        console.error("Profile fetch error:", err);
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    if (accessToken) {
      fetchGoogleProfile();
    } else {
      setError("No authentication token available");
      setLoading(false);
    }
  }, [accessToken]);

  return { profile, loading, error };
};
