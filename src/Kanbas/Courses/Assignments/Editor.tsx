export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name"><strong>Assignment Name</strong></label>
            <br />
            <br />
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea
                id="wd-description"

                style={{ width: '140%', height: '150px' }} 
            >
                The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br />
            <br />

            <table style={{ display: 'inline-block' }}>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>

                <tr>
                    <br></br>
                </tr>

                <tr>

                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="assignments">ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <br></br>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-grade">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-grade">
                            <option value="percentage">Percentage</option>
                            <option value="points">Points</option>
                            <option value="letter_grade">Letter Grade</option>
                            <option value="gpa_scale">GPA Scale</option>
                            <option value="complete_incomplete">Complete/Incomplete</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <br></br>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission">
                            <option value="online">Online</option>
                        </select>

                        <tr>
                            <br></br>
                            Online Entry Options
                        </tr>
                        <div>
                            <input type="checkbox" id="text_entry" />
                            <label htmlFor="text_entry">Text Entry</label><br />
                            <input type="checkbox" id="website_url" />
                            <label htmlFor="website_url">Website URL</label><br />
                            <input type="checkbox" id="media_recordings" />
                            <label htmlFor="media_recordings">Media Recordings</label><br />
                            <input type="checkbox" id="student_annotation" />
                            <label htmlFor="student_annotation">Student Annotation</label><br />
                            <input type="checkbox" id="file_uploads" />
                            <label htmlFor="file_uploads">File Uploads</label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <br></br>
                </tr>

                <tr>
                    <td align="center" valign="top" colSpan={2}>
                        <label htmlFor="wd-assign">Assign Assign to</label>

                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input id="wd-assign" value="Everyone" />
                    </td>
                </tr>
                <tr>
                    <br></br>
                </tr>
                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-due">Due</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input id="wd-due" type="date" value="2024-05-13" />
                    </td>
                </tr>
                <tr>
                    <br></br>
                </tr>
                <tr>
                    <td></td>
                    <td align="right" valign="top" colSpan={2}>
                        <table style={{ display: 'inline-block' }}>
                            <tr>
                                <td>
                                    <label htmlFor="wd-available-from">Available from</label>

                                </td>

                                <td>
                                    <label htmlFor="wd-until">Until</label>

                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input id="wd-available-from" type="date" value="2024-05-06" />

                                </td>
                                <td>
                                    <input id="wd-until" type="date" value="2024-05-20" />

                                </td>
                            </tr>

                        </table>

                    </td>
                </tr>
            </table>

            <br />
            <div style={{ textAlign: 'right' }}>
                <button style={{ marginRight: '10px' }}>Cancel</button>
                <button>Save</button>
            </div>
        </div>
    );
}
