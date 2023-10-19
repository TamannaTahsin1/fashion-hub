import { useContext } from "react";
import { AuthContext } from "../../Components/Providers/AuthProvider";
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext)
    const handleSocialLogin = (media) =>{
        media()
        .then(res => res.json())
    }
  return (
    <div>
      <div className='divider'>continue with</div>
      <div className='text-center'>
        <button
          onClick={() =>handleSocialLogin(googleLogin)}
          className='btn bg-slate-200 text-black font-bold'>
          <FcGoogle></FcGoogle> Log in with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
