import { useLocation, useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAssignment } from "./reducer";


export default function AssignmentAdd() {
    const dispatch = useDispatch();
    const router = useNavigate();

    const { cid } = useParams();
    const { pathname } = useLocation();
    const aid = pathname.split("/").pop();

    const [assignment, setAssignment] = useState({
        course: cid,
        title: '',
        description: '',
        points: 100,
        due: '',
        available: '',
        until: ''
    });

    const handleChange = (e: any) => {
        const value = e.target.value;
        setAssignment({ ...assignment, [e.target.name]: value });
    };

    const handleAddAssignment = () => {
        dispatch(addAssignment(assignment));
        router(`/Kanbas/Courses/${cid}/Assignments`);
    }

    const handleCancel = () => {
        router(`/Kanbas/Courses/${cid}/Assignments`);
    };

    if (!assignment) {
        return <div>Assignment not found</div>;
    }

    return (
        <div id="wd-assignments-add" className="container mt-5">
            <div className="mb-4">
                <label htmlFor="wd-assignment-name-o" className="form-label">Assignment Name</label>
                <input id="wd-assignment-name-copy" className="form-control" name="title" placeholder="Assignment Name" value={assignment.title} onChange={handleChange} />
            </div>
            <div className="mb-4">
                <textarea id="wd-assignment-description-copy" className="form-control" rows={10} cols={60}
                    style={{
                        height: '400px'
                    }} onChange={handleChange} name="description" value={assignment.description}>
                </textarea>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="wd-points" className="form-label float-md-end">Points</label>
                </div>
                <div className="col-md-6">
                    <input id="wd-points-copy" className="form-control" onChange={handleChange} name="points"
                        value={assignment.points} />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="wd-assi-group" className="form-label float-md-end">Assignment Group</label>
                </div>
                <div className="col-md-6">
                    <select id="wd-assi-group-copy" className="form-select">
                        <option value="midterm">MIDTERM</option>
                        <option value="final">FINAL</option>
                        <option selected value="assignment">ASSIGNMENT</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3 ">
                <div className="col-md-6">
                    <label htmlFor="wd-display-grade" className="form-label float-md-end">Display Grade as</label>
                </div>
                <div className="col-md-6">
                    <select id="wd-display-grade-copy" className="form-select">
                        <option value="point">Point</option>
                        <option value="gpa">GPA</option>
                        <option selected value="per">Percentage</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3 ">
                <div className="col-md-6">
                    <label className="form-label float-md-end">Submission Type</label>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <select id="sub-type-copy" className="form-select mb-3">
                                <option value="paper">On Paper</option>
                                <option selected value="online">Online</option>
                            </select>

                            <div>
                                <label className="form-label fw-bold">Online Entry Options</label>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-text-entry-copy" />
                                    <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-website-url-copy" checked />
                                    <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-media-recording-copy" />
                                    <label className="form-check-label" htmlFor="wd-media-recording">Media Recordings</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-student-annotation-copy" />
                                    <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-file-uploads-copy" />
                                    <label className="form-check-label" htmlFor="wd-file-uploads">File Uploads</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row mb-3 ">
                <div className="col-md-6">
                    <label className="form-label float-md-end">Assign</label>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="wd-assign-to" className="form-label fw-bold">Assign to</label>
                                <input id="wd-assign-to-copy" className="form-control" defaultValue="Everyone" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="wd-due" className="form-label fw-bold">Due</label>
                                <input type="date" id="wd-due-copy" className="form-control" value={assignment.due} name="due" onChange={handleChange} />
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="wd-available-from" className="form-label fw-bold">Available from</label>
                                    <input type="date" id="wd-available-from-copy" className="form-control" value={assignment.available} name="available" onChange={handleChange} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="wd-until" className="form-label fw-bold">Until</label>
                                    <input type="date" id="wd-until-copy" className="form-control" value={assignment.until} name="until" onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-9">
                    <div className="d-flex justify-content-end">
                        <button
                            type="button"
                            className="btn btn-light me-2"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleAddAssignment}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}


