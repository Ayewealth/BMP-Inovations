import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import AuthContext from '../../context/AuthContext'
import { useContext } from "react";
const SignupForm = () => {
    const { registerUser } = useContext(AuthContext)
    return (
        <div className="form__div">
            <div className="form__img">
                <video
                    muted
                    autoPlay
                    loop
                    src="/images/Final-Shot-5.mp4"
                >
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="right">
                <div className="right__inner">
                    <div className="right__top">
                        <h3>Create an account</h3>
                        <p>Experience super fast and reliable services</p>
                    </div>
                    <form onSubmit={registerUser}>
                        <input type="text" name='name' placeholder="Fullname" />
                        <input type="email" name='email' placeholder="Email" />
                        <input type="text" name='password' placeholder="Password" />
                        <button type="submit">Create account</button>
                    </form>
                    <div className="form__design" />
                    <div className="right__bottom">
                        <button><FcGoogle /> Continue with Google</button>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupForm