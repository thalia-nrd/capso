import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FrameRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    async function redirect() {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}/frame`,
          { credentials: 'include' }
        );

        const frames = await res.json();

        if (frames.length > 0) {
          navigate(`/frame/${frames[0].id}`);
        } else {
          console.warn('No frames found');
        }
      } catch (err) {
        console.error('Failed to load frames', err);
      }
    }

    redirect();
  }, [navigate]);

  return null;
};

export default FrameRedirect;