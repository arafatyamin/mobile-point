import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider'

const SignUp = () => {
  const {createUser, updateUserProfile} = useContext(AuthContext)

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.files[0];

        const formData = new FormData()
        formData.append('image', image)

        const url = "https://api.imgbb.com/1/upload?key=21faedf05bc7952fab40f5291fa76110"

        fetch(url,{
            method: 'POST',
            body: formData,
        })
        .then(res => res.json())
        .then(data => {
            // create user
            createUser (email, password)
            .then(result => {
                updateUserProfile (name, data.data.display_url)
                .then(result => {
                    console.log(result)
                    toast.success('Update Profile Success')
                })
                .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.error(err))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignUp now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <input name="name" type="text" placeholder="full name" className="input input-bordered rounded-full" required/>
        </div>
        <div className="form-control">
          <input name="email" type="email" placeholder="email" className="input input-bordered rounded-full" required/>
        </div>
        <div className="form-control">
          <input name="password" type="password" placeholder="password" className="input input-bordered rounded-full" required/>
        </div>
        <div className="form-control">
          <input name="image" type="file" placeholder="image" className="input " required/>
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
      </form>
    </div>
  </div>
</div>
    );
};

export default SignUp;