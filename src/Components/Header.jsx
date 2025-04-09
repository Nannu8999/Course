function Header() {

    const orgLogo = '/animation/orglogo.gif'
    return (
        <nav className="text-white position-relative container-fluid " style={{ backgroundColor: "gray" }}>
            <div className="container-fluid d-flex justify-content-between align-items-center ">
                <h4 className="mb-0"><img style={{ height: '50px', width: '100%' }} src={orgLogo} /></h4>
                <h5 className="mb-0">Profile</h5>
            </div>
        </nav>
    )
}

export default Header;