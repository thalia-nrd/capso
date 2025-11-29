// src/components/SpotifyConnect.jsx
export default function SpotifyConnect() {
  return (
    <button onClick={() => window.location.href = "http://localhost:5000/auth/spotify/login"}>
      Connect Spotify
    </button>
  );
}