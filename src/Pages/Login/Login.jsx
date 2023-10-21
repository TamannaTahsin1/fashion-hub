import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Components/Providers/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const {signIn} = useContext(AuthContext)
  const location = useLocation()
  console.log(location)
  const navigate = useNavigate()
  const handleLogin = e =>{
    e.preventDefault ()
    console.log(e.currentTarget)
    const form =new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    console.log(email, password)
    // create a new user
    signIn(email, password)
    .then(result => {
      console.log(result.user)
      toast.success('Successfully Logged in!',
      {
        icon: '👏',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })
            // navigate user after login
            navigate(location?.state ? location.state : '/')
    })     
  }
  return (
    <div>
      <div className='hero h-[80vh] bg-base-200'>
        <div className='hero-content flex-col '>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>Login now!</h1>
          </div>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <form onSubmit={handleLogin} className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Name</span>
                </label>
                <input
                  name='name'
                  type='text'
                  placeholder='Name'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  name='email'
                  type='email'
                  placeholder='email'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  name='password'
                  type='password'
                  placeholder='password'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control mt-6'>
                <button className='btn btn-primary'>Login</button>
              </div>
              <p className='p-4'>
                Do not have an account?
                <Link
                  className='text-pink-700 font-semibold ml-2'
                  to='/register'>
                  Register
                </Link>
              </p>
              <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
