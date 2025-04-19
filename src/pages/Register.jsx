import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Loading from "../components/Loading";

const Register = () => {
    const { createUser, updateUser, loading, setLoading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get("name")
        const photourl = formData.get("photourl")
        const email = formData.get("email")
        const password = formData.get("password")

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
        const photoUrlRegex = /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|bmp|svg)$/i;


        if(name.length < 4) {
            setError({...error, name: "Name should be at least 4 characters"})
            return
        }

        if(!photoUrlRegex.test(photourl)) {
            setError({...error, photourl: "Invalid url : URL need to start with http/https and have valid file type"});
            return
        }
        if(!emailRegex.test(email)) {
            setError({...error, email: "Invalid email"});
            return
        }
        if(!passwordRegex.test(password)) {
            setError({...error, password: "Invalid Password"})
            return
        }

        createUser(email, password)
        .then(() => {
            updateUser({displayName: name, photoURL: photourl})
            .then(() => navigate(location.state || "/"))
        })
        .catch(err => {
            setLoading(false);
            alert(err.message)
        })
    }
    return (
        <div className="mt-24 flex items-center justify-center">
            <div className="bg-white p-10 m-5 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-10">Register your account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control mb-6">
                        <label className="label mb-[15px]">
                            <span className="label-text font-semibold">Your name</span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter your your name"
                            className="input input-bordered bg-[#F3F3F3] w-full p-5"
                            required
                        />
                        {error.name && <p className="text-red-500">{error.name}</p>}
                    </div>
                    <div className="form-control mb-6">
                        <label className="label mb-[15px]">
                            <span className="label-text font-semibold">Photo URL</span>
                        </label>
                        <input
                            name="photourl"
                            type="text"
                            placeholder="Enter your photo url"
                            className="input input-bordered bg-[#F3F3F3] w-full p-5"
                            required
                        />
                        {error.photourl && <p className="text-red-500">{error.photourl}</p>}
                    </div>
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
                        {loading ? <Loading /> : "Register"}
                    </button>
                </form>
                <p className="text-center text-sm mt-4">
                    Already Have An Account?{' '}
                    <Link to="/auth/login" className="text-red-500 font-semibold">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;