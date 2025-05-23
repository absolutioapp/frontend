import React from "react";
import { useCheckToken } from "@/hooks/useCheckToken";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  useCheckToken();

  return <>{children}</>;
}
