import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
  const {signIn} = useContext(AuthContext)

  const handleSignIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
    .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
  }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignIn} className="card-body">
        <div className="form-control">
          <input name="email" type="email" placeholder="email" className="input input-bordered rounded-full" />
        </div>
        <div className="form-control">
          <input name="password" type="password" placeholder="password" className="input input-bordered rounded-full" />
          <label className="label">
            <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <label className="label">
            <Link to='/signup' className="label-text-alt link link-hover text-xl">signup now</Link>
          </label>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;