import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";
import { getMenus } from "../ApiCall";

function SideBar() {
    const [hovered, setHovered] = useState(false);
    const [menus, setMenus] = useState([]);
    const bgVideo = "/animation/sideBarBg.mp4";

    useEffect(() => {
        const fetchMenus = async () => {
            const menuData = await getMenus();
            setMenus(menuData);
        };
        fetchMenus();
    }, []);

    return (
        <div
            className="position-relative text-white d-flex flex-column h-100"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                backgroundColor: "#0d6efd", // fallback color
                width: hovered ? "250px" : "80px",
                transition: "width 0.3s ease",
                overflow: "hidden",
                padding: "10px",
            }}
        >
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                style={{ zIndex: 0 }}
            >
                <source src={bgVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark Overlay */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: 1 }}
            ></div>

            {/* Sidebar Content */}
            <div className="position-relative" style={{ zIndex: 2 }}>
                <ul className="list-unstyled w-100 m-0">
                    {menus.length > 0 ? (
                        menus.map((menu) => (
                            <li key={menu.id} className="py-2 d-flex align-items-center">
                                <i className={`${menu.icon} me-2`}></i>
                                {hovered && (
                                    <NavLink
                                        to={menu.path}
                                        className="text-white text-decoration-none"
                                    >
                                        {menu.title}
                                    </NavLink>
                                )}
                            </li>
                        ))
                    ) : (
                        <li className="text-center">No menus</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default SideBar;
