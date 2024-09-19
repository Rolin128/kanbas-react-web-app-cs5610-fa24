import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5>
                                CS1234 React JS
                            </h5>
                        </div>
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Full Stack software developer
                    </p>
                    <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5>
                                CS5001 Intensive Foundations
                            </h5>
                        </div>
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Intensive Foundations of CS
                    </p>
                    <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5>
                                CS5004 OOD
                            </h5>
                        </div>
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Object-Oriented Design
                    </p>
                    <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5>
                                CS5008 Data Structure
                            </h5>
                        </div>
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Data Structure and Algorithm
                    </p>
                    <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5>
                                CS5500 Software Engineering 
                            </h5>
                        </div>
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Found of Software Engineering
                    </p>
                    <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5>
                                CS5800 Algorithm
                            </h5>
                        </div>
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Algorithm
                    </p>
                    <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                        to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5>
                                CS5700 Computer Networks
                            </h5>
                        </div>
                    </Link>
                    <p className="wd-dashboard-course-title">
                        Computer Networks
                    </p>
                    <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                </div>

             
            </div>
        </div >
    );
}