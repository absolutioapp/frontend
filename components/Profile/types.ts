export interface GoogleProfile {
  names?: Array<{
    displayName: string;
  }>;
  photos?: Array<{
    url: string;
  }>;
}
