import { Link } from "react-router-dom";
import * as db from "./Database";
import "./dashboard.css"; 
export default function Dashboard() {
    const courses = db.courses;
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                       <div className="wd-dashboard-course col " style={{ width: "300px" }} key={course._id}>
                       <div className="card rounded-3 overflow-hidden h-100 shadow-sm">
                           <img src={course.image} className="card-img-top" alt={course.name} />
                           <div className="card-body d-flex flex-column justify-content-between">
                               <h5 className="wd-dashboard-course-title card-title text-primary">
                                   {course.name}
                               </h5>
                               <p className="wd-dashboard-course-text card-text">
                                   {course.description}
                               </p>
                               <Link to={`/Kanbas/Courses/${course._id}/Home`} className="wd-btn-nd">
                                   Go
                               </Link>
                           </div>
                       </div>
                   </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

