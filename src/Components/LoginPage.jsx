import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const images = [
    "/Images/andrew-neel-cckf4TsHAuw-unsplash.jpg",
    "/Images/kobu-agency-7okkFhxrxNw-unsplash.jpg",
    "/Images/morgan-harper-nichols-OMXPrCAhxrE-unsplash.jpg",
    "/Images/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg",
    "/Images/tim-mossholder-WE_Kv_ZB1l0-unsplash.jpg",
];

function LoginPage() {


    const [image, setImage] = useState(images[0]);
    const indexRef = useRef(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            indexRef.current = (indexRef.current + 1) % images.length;
            setImage(images[indexRef.current]);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const handleLogin = () => {
        localStorage.setItem("auth", "true");
        navigate('/dashboard');
    }

    return (
        <div className="container-fluid">
            <div className="row min-vh-100">
                {/* Left Side (Rotating Images) */}
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <img src={image} className="w-100 h-100 object-fit-cover" alt="Login Background" />
                </div>

                {/* Right Side (Login Form) */}
                <div className="col-md-6 d-flex align-items-center justify-content-center" style={{ backgroundColor: "lightgray" }}>
                    <form className="p-4 border rounded shadow" style={{ backgroundColor: "white" }}>
                        <div>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                                <li>
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" required />
                                </li>
                                <li>
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" required />
                                </li>
                                <li>
                                    <button type="submit" onClick={handleLogin} className="btn btn-primary w-100 mt-3">
                                        Submit
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
