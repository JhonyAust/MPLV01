import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../../features/userSlice';
import { useNavigate } from 'react-router-dom';
import { ImGooglePlus } from "react-icons/im";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      console.log(result);
      console.log(data);
      navigate('/');
    } catch (error) {
      console.log('could not sign in with google', error);
    }
  };
  return (
    <button
      onClick={handleGoogleClick}
      type='button'
      className='bg-[#B33D2E] text-white p-3 text-sm uppercase hover:opacity-95 w-full '
    >
     <div className="flex justify-center">
        <ImGooglePlus size={22} className="mr-2 text-white" />
        <span>Continue with Google</span>
      </div>
    </button>
  );
}
