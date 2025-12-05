// src/components/SpotifyConnect.tsx
export default function SpotifyConnect() {
  return (
    <button
      onClick={() => {
        const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
        window.location.href = `${apiUrl}/auth/spotify/login`;
      }}
    >
      Connect Spotify
    </button>
  );
}
