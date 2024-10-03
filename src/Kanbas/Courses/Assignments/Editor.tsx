
export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container mt-5">
            <div className="mb-4">
                <label htmlFor="wd-assignment-name-o" className="form-label">Assignment Name</label>
                <input id="wd-assignment-name-o" className="form-control" value="A1" />
            </div>
            <div className="mb-4">
                <textarea id="wd-assignment-description" className="form-control"
                    style={{
                        height: '400px'
                    }}>
                    {`The assignment is available online.

Submit a link to the landing page of your Web application running on Netlify.
                
The landing page should include the following:
                    
- Your full name and section
                    
- Links to each of the lab assignments
                    
- Link to the Kanbas application
                    
- Links to all relevant source code repositories
                    
The Kanbas application should include a link to navigate back to the landing page.`}
                </textarea>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="wd-points" className="form-label float-end">Points</label>
                </div>
                <div className="col-md-6">
                    <input id="wd-points" className="form-control" value={100} />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="wd-assi-group" className="form-label float-end">Assignment Group</label>
                </div>
                <div className="col-md-6">
                    <select id="wd-assi-group" className="form-select">
                        <option value="midterm">MIDTERM</option>
                        <option value="final">FINAL</option>
                        <option selected value="assignment">ASSIGNMENT</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="wd-display-grade" className="form-label float-end">Display Grade as</label>
                </div>
                <div className="col-md-6">
                    <select id="wd-display-grade" className="form-select">
                        <option value="point">Point</option>
                        <option value="gpa">GPA</option>
                        <option selected value="per">Percentage</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label className="form-label float-end">Submission Type</label>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <select id="sub-type" className="form-select mb-3">
                                <option value="paper">On Paper</option>
                                <option selected value="online">Online</option>
                            </select>

                            <div>
                                <label className="form-label fw-bold">Online Entry Options</label>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-text-entry" />
                                    <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-website-url" checked />
                                    <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-media-recording" />
                                    <label className="form-check-label" htmlFor="wd-media-recording">Media Recordings</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
                                    <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-file-uploads" />
                                    <label className="form-check-label" htmlFor="wd-file-uploads">File Uploads</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row mb-3">
                <div className="col-md-6">
                    <label className="form-label float-end">Assign</label>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="wd-assign-to" className="form-label fw-bold">Assign to</label>
                                <input id="wd-assign-to" className="form-control" defaultValue="Everyone" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="wd-due" className="form-label fw-bold">Due</label>
                                <input type="date" id="wd-due" className="form-control" defaultValue="2024-05-13" />
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="wd-available-from" className="form-label fw-bold">Available from</label>
                                    <input type="date" id="wd-available-from" className="form-control" defaultValue="2024-05-06" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="wd-until" className="form-label fw-bold">Until</label>
                                    <input type="date" id="wd-until" className="form-control" defaultValue="2024-05-20" />
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
                        <button className="btn btn-light me-2">Cancel</button>
                        <button className="btn btn-danger">Save</button>
                    </div>
                </div>
            </div>

        </div>
    );
}


