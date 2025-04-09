import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";


function Layout() {

    const bgVideo = '/animation/bgVideo.mp4';
    return (
        <div className="d-flex flex-column min-vh-100">

            {/* Header */}
            <Header />

            {/* Sidebar + Main Content */}
            <div className="d-flex flex-grow-1">

                {/* Sidebar (always visible, responsive width) */}
                <div className="d-none d-md-block">
                    <SideBar />
                </div>

                {/* Main Content */}
                <main className="flex-grow-1 p-3 position-relative" style={{ minHeight: '100vh', overflow: 'hidden' }}>
                    {/* Background Video */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                        style={{ zIndex: -1 }}
                    >
                        <source src={bgVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Content */}
                    <div className="position-relative" style={{ zIndex: 1 }}>
                        <Outlet />
                    </div>
                </main>

            </div>

            {/* Footer */}
            <footer className="bg-secondary text-white text-end p-2">
                <small>Powered by Naveen</small>
            </footer>

        </div >
    );
}


export default Layout;
