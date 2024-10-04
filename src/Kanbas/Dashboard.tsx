import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    <div className="wd-dashboard-course co" style={{ width: "270px" }}>
                        <div className="card h-100 rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/lessonA.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title text-primary">
                                        CS5450 12631 Web Development
                                    </h5>
                                    <h5 className="card-subtitle mb-2 text-body-secondary">CS5450.12631.202410</h5>
                                    <h6 className="wd-dashboard-course-title card-text text-body-secondary">
                                        202410_1 Fall 2024 Term
                                    </h6>
                                    <br />
                                    <button className="btn btn-primary "> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col " style={{ width: "270px" }}>
                        <div className="card h-100 rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/lessonB.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title text-primary">
                                        CS5001 23145 Intensive Foundations 
                                    </h5>
                                    <h5 className="card-subtitle mb-2 text-body-secondary">
                                        CS5001.23145.202110</h5>
                                    <h6 className="wd-dashboard-course-title card-text text-body-secondary">
                                        202410_1 Fall 2024 Term
                                    </h6><br />
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card h-100 rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/lessonc.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title text-primary">
                                        CS5008 21342 Data Structure
                                    </h5>
                                 
                                    <h5 className="card-subtitle mb-2 text-body-secondary">
                                        CS5008.21342.112410</h5>
                                    <h6 className="wd-dashboard-course-title card-text text-body-secondary">
                                        202410_1 Spring 2024 Term
                                    </h6><br />

                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card h-100 rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/lessond.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title text-primary">
                                        CS6140 126 Machine Learning
                                    </h5>
                                    <h5 className="card-subtitle mb-2 text-body-secondary">
                                        CS6140.126.202410</h5>
                                    <h6 className="wd-dashboard-course-title card-text text-body-secondary">
                                        202410_1 Spring 2024 Term
                                    </h6><br />

                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card h-100 rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/lessonf.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title text-primary">
                                        CS5500 13456 Software Engineering
                                    </h5>
                                    <h5 className="card-subtitle mb-2 text-body-secondary">
                                        CS5500.13456.202410</h5>
                                    <h6 className="wd-dashboard-course-title card-text text-body-secondary">
                                        202410_1 Fall 2024 Term
                                    </h6><br />

                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card h-100 rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/lessonm.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title text-primary">
                                        CS4300 21345 Software Engineering
                                    </h5>                                   
                                    <h5 className="card-subtitle mb-2 text-body-secondary">
                                        CS4300.21345.202410</h5>
                                    <h6 className="wd-dashboard-course-title card-text text-body-secondary">
                                        202410_1 Fall 2024 Term
                                    </h6><br />

                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card h-100 rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/lessonB.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title text-primary">
                                        CS5800 15627 Algorithm 
                                    </h5>
                                    <h5 className="card-subtitle mb-2 text-body-secondary">
                                        CS5800.15627.202410</h5>
                                    <h6 className="wd-dashboard-course-title card-text text-body-secondary">
                                        202410_1 Fall 2024 Term
                                    </h6><br />

                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                        <div className="card h-100 rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/lessonf.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title text-primary">
                                        CS5700 26173 Computer Networks 
                                    </h5>
                                    <h5 className="card-subtitle mb-2 text-body-secondary">
                                        CS5700.26173.202410</h5>
                                    <h6 className="wd-dashboard-course-title card-text text-body-secondary">
                                        202310_1 Fall 2023 Term
                                    </h6><br />

                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div></div>

    );
}

