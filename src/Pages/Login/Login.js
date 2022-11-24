import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <input type="email" placeholder="email" className="input input-bordered rounded-full" />
        </div>
        <div className="form-control">
          <input type="password" placeholder="password" className="input input-bordered rounded-full" />
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
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;