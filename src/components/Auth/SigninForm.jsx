import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import AuthContext from '../../context/AuthContext';
import { useContext } from "react";

const SigninForm = () => {
    const { loginUser } = useContext(AuthContext);

    return (
        <div className="form__div">
            <div className="form__img">
                <video
                    muted
                    autoPlay
                    loop
                    src="https://cdn.dribbble.com/users/8779526/screenshots/16963725/media/e7f7f6d0372b9c6d9bda7ca43b3164f6.mp4"
                >
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="right">
                <div className="right__inner">
                    <div className="right__top">
                        <h3>Hey, hello 👋</h3>
                        <p>Experience super fast and reliable services</p>
                    </div>
                    <form onSubmit={loginUser}>
                        <input type="email" name='email' placeholder="Email" />
                        <input type="text" name='password' placeholder="Password" />
                        <button type="submit">Login</button>
                    </form>
                    <div className="form__design" />
                    <div className="right__bottom">
                        <button><FcGoogle /> Continue with Google</button>
                        <p>Don't have an account? <Link to="/register">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SigninForm;
