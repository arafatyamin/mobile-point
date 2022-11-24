import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignUp now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          
          <input type="text" placeholder="full name" className="input input-bordered rounded-full" required/>
        </div>
        <div className="form-control">
          
          <input type="email" placeholder="email" className="input input-bordered rounded-full" required/>
        </div>
        <div className="form-control">
          <input type="password" placeholder="password" className="input input-bordered rounded-full" required/>
          
        </div>
        <div className="form-control">
          <input type="file" placeholder="image" className="input " required/>
        </div>
        <label className="label">
            <Link to=''className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        <div className="form-control mt-6">
          <button className="btn btn-primary">signup</button>
        </div>
        <label className="label">
            <Link to='/login' className="label-text-alt link link-hover text-xl">login now</Link>
          </label>
      </div>
    </div>
  </div>
</div>
    );
};

export default SignUp;