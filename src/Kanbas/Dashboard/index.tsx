import { useState } from "react";
import { Link } from "react-router-dom";
import { addEnrollment, removeEnrollment } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import "./Dashboard.css";
import ProtectedContent from "../Account/ProtectedContent";


export default function Dashboard(
    { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }: {
        courses: any[];
        course: any;
        setCourse: (course: any) => void;
        addNewCourse: (courseId: string) => void;
        deleteCourse: (course: any) => void;
        updateCourse: () => void;
    }) {

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const dispatch = useDispatch();

    const [allCoursesList, setAllCoursesList] = useState(false);
    const [titleText, setTitleText] = useState('Enrolled Courses');
    const handleButtonClick = () => {
        setAllCoursesList(!allCoursesList);
        setTitleText(allCoursesList ? 'Enrolled Courses' : 'Published Courses');
    };

    const enrolledCourses = enrollments
        .filter((enrollment: any) => enrollment.user === currentUser._id)
        .map((enrollment: any) => enrollment.course);

    const coursesFilter = allCoursesList ? courses : courses.filter(course => enrolledCourses.includes(course._id));

    const renderFacultySection = () => (
        <><h1 id="wd-dashboard-title" className="wd-faculty-left-margin">
            Dashboard
        </h1>
            <hr />
            <h2 id="wd-dashboard-published" className="wd-faculty-left-margin">
                Published Courses ({coursesFilter.length})
            </h2>
            <hr />
            <h5 className="wd-faculty-left-margin">New Course
                <button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={() => {
                        const courseId = new Date().getTime().toString()
                        addNewCourse(courseId);
                        dispatch(addEnrollment({ courseId: courseId, userId: currentUser._id }));
                    }}>Add</button>
                <button className="btn btn-warning float-end me-2"
                    onClick={updateCourse} id="wd-update-course-click">
                    Update
                </button><br />
            </h5>
            <input value={course.name} className="form-control mb-2"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <textarea value={course.description} className="form-control"
                onChange={(e) => setCourse({ ...course, description: e.target.value })} />
            <hr />
        </>
    );

    const renderStudentSection = () => (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h1 id="wd-dashboard-student-title">
                    Dashboard
                </h1>
                <button id="wd-st-click-enrollments-course-button" className="btn btn-primary me-2"
                    onClick={handleButtonClick}>
                    {allCoursesList ? 'Show Enrollments' : 'Show All Courses'}
                </button>
            </div>
            <hr />
            <h2 id="wd-dashboard-student-courses-condition">
                {titleText}({coursesFilter.length})
            </h2>
        </div>
    );

    const courseCards = coursesFilter.map((course) => {
        const isEnrolled = enrolledCourses.includes(course._id);
        return (
            <div className="col " style={{ width: "300px" }} key={course._id}>
                <div className="card">
                    <img
                        src={course.image} className="card-img-top" alt={course.name}
                    />
                    <div className="card-body">
                        <h5 className="wd-dashboard-course-title card-title text-primary">
                            {course.name}
                        </h5>
                        <p className="wd-dashboard-course-text card-text">
                            {course.description}
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary ">
                                Go
                            </Link>
                            {currentUser.role === 'STUDENT' && (
                                isEnrolled ? (
                                    <button id="wd-unenroll-course-button" className="btn btn-danger" onClick={(event) => {
                                        event.preventDefault()
                                        dispatch(removeEnrollment({ courseId: course._id, userId: currentUser._id }))
                                    }}>
                                        Unenroll
                                    </button>
                                ) : (
                                    <button id="wd-enroll-course-button" className="btn btn-success" onClick={(event) => {
                                        event.preventDefault()
                                        dispatch(addEnrollment({ courseId: course._id, userId: currentUser._id }))
                                    }}>
                                        Enroll
                                    </button>
                                )
                            )}
                            {currentUser.role === 'FACULTY' && (
                                <><button id="wd-edit-course-button"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setCourse(course)
                                    }}
                                    className="btn btn-warning me-2" style={{ marginLeft: 'auto' }} >
                                    Edit
                                </button>
                                    <button onClick={(event) => {
                                        event.preventDefault();
                                        deleteCourse(course._id);
                                    }} className="btn btn-danger" id="wd-delete-course-button">
                                        Delete
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        );
    });

    return (
        <div>
            <ProtectedContent
                facultyContent={renderFacultySection()}
                studentContent={renderStudentSection()}
            />
            <div className="row row-cols-1 row-cols-md-5 g-4">
                {courseCards}
            </div>
        </div>
    );
}
