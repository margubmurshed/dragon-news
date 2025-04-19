import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Loading from "../components/Loading";

const Login = () => {
    const { emailPassLogin, loading, setLoading } = useContext(AuthContext);
    const [error, setError] = useState({})
    const location = useLocation();
    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get("email")
        const password = formData.get("password")

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;

        if(!emailRegex.test(email)) {
            setError({...error, email: "Invalid email"});
            return
        }
        if(!passwordRegex.test(password)) {
            setError({...error, password: "Invalid Password"})
            return
        }

        setError({})

        emailPassLogin(email, password)
            .then(() => {
                navigate(location.state || "/")
            })
            .catch(error => {
                setLoading(false);
                alert(error.message)
            })
    }
    return (
        <div className="mt-24 flex items-center justify-center">
            <div className="bg-white p-10 m-5 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-10">Login your account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control mb-6">
                        <label className="label mb-[15px]">
                            <span className="label-text font-semibold">Email address</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter your email address"
                            className="input input-bordered bg-[#F3F3F3] w-full p-5"
                            required
                        />
                         {error.email && <p className="text-red-500">{error.email}</p>}
                    </div>
                    <div className="form-control mb-6">
                        <label className="label mb-[15px]">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered bg-[#F3F3F3] w-full p-5"
                            required
                        />
                         {error.password && <p className="text-red-500">{error.password}</p>}
                    </div>
                    <button type="submit" className="btn btn-neutral w-full" disabled={loading}>
                        {loading ? <Loading /> : "Login"}
                    </button>
                </form>
                <p className="text-center text-sm mt-4">
                    Don't Have An Account?{' '}
                    <Link to="/auth/register" state={location.state} className="text-red-500 font-semibold">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;