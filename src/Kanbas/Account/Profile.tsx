import { Link } from "react-router-dom";
export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h3>Profile</h3>
            <input id="wd-profile-username" value="alice" placeholder="username"
                className="form-control mb-2" />
            <input id="wd-profile-password" placeholder="password" value="123"
                className="form-control mb-2" />
            <input id="wd-first-name" placeholder="First Name" value="Alice"
                className="form-control mb-2" />
            <input id="wd-last-name" value="Wonderland" placeholder="Last Name"
                className="form-control mb-2" />
            <div className="mb-3">
                <input type="date" id="wd-until" className="form-control" defaultValue="mm/dd/yyyy" />
            </div>
            <input id="wd-email" value="alice@wonderland" type="email"
                className="form-control mb-2" />
            <select id="wd-role" className="form-select mb-3">
                <option value="USER">USER</option>
                <option selected value="ADMIN">ADMIN</option>
                <option selected value="FACULTY">FACULTY</option>
                <option selected value="STUDENT">STUDENT</option>
            </select>
            <button className="btn btn-danger w-100 d-flex justify-content-center align-items-center" style={{ height: '40px' }}>
                <Link to="/Kanbas/Account/Signin" className="text-white text-decoration-none">
                    Signout
                </Link>
            </button>
        </div>


    );
}