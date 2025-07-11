interface ImportMetaEnv {
  readonly VITE_SPOTIFY_CLIENT_ID: string;
  readonly VITE_SPOTIFY_CLIENT_SECRET: string;
  readonly VITE_SPOTIFY_REFRESH_TOKEN: string;
  readonly VITE_MAPTILER_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
