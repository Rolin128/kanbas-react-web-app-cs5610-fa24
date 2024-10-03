import { Routes, Route, Navigate } from "react-router";
import AccountNavigation from "./Navigation";
import Profile from "./Profile";
import Signup from "./Signup";
import Signin from "./Signin";
export default function Account() {
    return (
        <div id="wd-account-screen" className="d-flex gap-4">
            <div className="d-none d-md-block">
                <AccountNavigation />
            </div>
            <div className="row">
                <Routes>
                    <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
                    <Route path="/Signin" element={<Signin />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/Signup" element={<Signup />} />
                </Routes>
            </div>
        </div>
    );
}