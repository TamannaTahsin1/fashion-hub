import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Components/Providers/AuthProvider";
// import { toast } from "react-toastify";
import Swal from "sweetalert2";
import toast from "react-hot-toast";


const Register = () => {
  // error
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");
  // for show password
  const [showPassword, setShowPassword] = useState();
  // calling context api
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    // get field values
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,photo, email, password);
    // for password validation
    if (password.length < 6) {
      toast.error("Password should be at least 6 characters")
      return;
    } 
    else if (!/^[a-zA-Z0-9._%+-]/.test(password)) {
      toast.error("Password should be at least 6 characters")
      return;
    }
    // reset success and error
    setRegisterError("");
    setRegisterSuccess("");
    // create a new user
    createUser(email, password)
    .then((result) => {
      console.log(result.user);
      Swal.fire({
        title: 'Success!',
        text: 'User Created Successfully!',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
      // new user has been created  
      const user = {name, email}
      fetch('http://localhost:5000/user',{
        method:'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data =>{
        if(data.insertedId){
          Swal.fire({
            title: 'Success!',
            text: 'User added to the database',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })
    });
  };
  return (
    <div>
      <div className='hero h-[80vh] bg-base-200'>
        <div className='hero-content flex-col'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>Register now!</h1>
          </div>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <form onSubmit={handleRegister} className='card-body'>
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
                  <span className='label-text'>Photo URL</span>
                </label>
                <input
                  name='photo'
                  type='text'
                  placeholder='Photo URL'
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
                <div className='relative'>
                <input
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  placeholder='password'
                  className='input input-bordered w-full'
                  required
                />
                <span className='absolute top-4 right-2' onClick={ () => setShowPassword(!showPassword)}>
                    {
                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                    }
                </span>
                    <div className='pt-4'>
                    <input type="checkbox" name="terms" id="terms" />
                <label className='ml-2' htmlFor="terms">Accept our terms and conditions</label>
                    </div>
                </div>
              </div>
              <label className='label'>
                {registerError && (
                  <p className='text-red-600'>{registerError}</p>
                )}
                {registerSuccess && (
                  <p className='text-green-600'>{registerSuccess}</p>
                )}
              </label>
              <div className='form-control mt-6'>
                <button className='btn btn-primary'>Register</button>
              </div>
              <p className='p-4'>
                Already have an account?
                <Link className='text-pink-700 font-semibold ml-2' to='/login'>
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
