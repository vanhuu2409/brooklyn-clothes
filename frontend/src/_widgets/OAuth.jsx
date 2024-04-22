import { useDispatch } from "react-redux";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { loginSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { app } from "../firebase/firebase";
import { handleUserApiPost } from "../services/api.jsx";

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOnClickGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const { user } = result;
      // const res = await fetch("/api/auth/google", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     name: user.displayName,
      //     email: user.email,
      //     photo: user.photoURL,
      //   }),
      // });
      // const data = await res.json();
      const data = await handleUserApiPost(
        `${import.meta.env.VITE_API_URL}/api/auth/google`,
        {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        }
      );
      dispatch(loginSuccess(data)) & toast.success("Login Success");
      navigate("/");
    } catch (error) {
      console.log("Could not sign with Google:", error);
    }
  };
  return (
    <button
      type='button'
      onClick={handleOnClickGoogle}
      className='hover:bg-opacity-100 group/signin hover:border-black-4 bg-opacity-60 bg-neutral-200 inline-flex items-center justify-center w-full gap-2 px-5 py-4 mt-4 text-black transition-all translate-y-0 border'
    >
      <span className=' text-sm font-bold tracking-tight'>
        {/* {loading ? "Loading..." : "Sign In"} */}
        Continue with <span className='text-red-700'>Google</span>
      </span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={3}
        stroke='currentColor'
        className='group-hover/signin:rotate-0 w-4 h-4 transition-all -rotate-45'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
        />
      </svg>
    </button>
  );
};

export default OAuth;
