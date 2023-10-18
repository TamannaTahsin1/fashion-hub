import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = e =>{
    e.preventDefault()
    const form = e.target;
    console.log(form.name.value, form.email.value, form.password.value)
  }
  return (
    <div>
      <div className='hero min-h-screen bg-base-200'>
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
