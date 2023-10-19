import { useContext } from "react";
import { AuthContext } from "../../Components/Providers/AuthProvider";


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
          className='btn btn-primary text-white'>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
