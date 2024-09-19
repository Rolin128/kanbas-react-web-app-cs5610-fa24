export default function Modules() {
    return (
        <div>
            <button id="wd-modules-collapse-all">Collapse All</button>
            <button id="wd-modules-view-progress">View Progress</button>
            <select id="wd-modules-public-all" >
                <option value="public all">Public All</option>
            </select>
            <button id="wd-modules-module">+Module</button><br></br>
            <ul id="wd-modules">
                <li className="wd-module">
                    <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>

                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">READING</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                                <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User</li>
                            </ul>

                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">SLIDES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to Web Development
                                </li>
                                <li className="wd-content-item">Introduction to Web Development</li>
                                <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                                <li className="wd-content-item">Creating a React Application</li>
                            </ul>

                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 1, Lecture 2- Formatting User Interfaces with HTML</div>
            
                </li>
            </ul>
        </div>
    );
}