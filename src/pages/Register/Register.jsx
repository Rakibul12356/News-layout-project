import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
    const {createUser}=useContext(AuthContext)
    const handleRegister = e =>{
        e.preventDefault()
      console.log(e.currentTarget);
      const form = new FormData(e.currentTarget);
      console.log(form.get('email'))
      const email = form.get('email')
      const name = form.get('name')
      const photo = form.get('photo')
      const password = form.get('password')
     console.log(email,password,name,photo)
     createUser(email,password)
     .then(result=>{
        console.log(result.user)
     })
     .catch(error=>{
        console.error(error)
     })
    }
    return (
        <div>
            <Navbar></Navbar>
           <div>
                <h2 className="text-3xl my-10 text-center font-bold">Register your account</h2>
                <form onSubmit={handleRegister}  className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text"
                        name="name" placeholder="Your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text"
                        name="photo" placeholder="Photo Url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                        name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password"
                        name="password"
                         className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4">Already have an account? <Link className="text-red-500" to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;