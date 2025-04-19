import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import Loading from "./Loading";

const SocialLogin = () => {
    const { user, loading, googleLogin, githubLogin } = useContext(AuthContext);

    if (loading) return <Loading />
    if (user) return <div></div>
    return (
        <div>
            <h2 className="mb-5 font-semibold text-xl">Login With</h2>
            <div className='*:w-full space-y-3'>
                <button className="btn btn-outline btn-info" onClick={googleLogin}><FaGoogle />Login with Google</button>
                <button className="btn btn-outline" onClick={githubLogin}><FaGithub />Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;