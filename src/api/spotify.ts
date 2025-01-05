import { Buffer } from 'buffer';

import type { SpotifyNowPlaying, SpotifyTopTracks } from './spotifyTypes';

const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const refresh_token = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }).toString(),
  });

  const data = (await response.json()) as { access_token: string };
  return data;
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return (await response.json()) as SpotifyNowPlaying;
};

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();

  const response = await fetch(
    `${TOP_TRACKS_ENDPOINT}?time_range=short_term&limit=10`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  return (await response.json()) as SpotifyTopTracks;
};
