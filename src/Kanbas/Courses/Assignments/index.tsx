import ModulesControls from "./AssiModulesControls";
import LessonControlButtons from "./AssiHeadControlButtons";
import { BsGripVertical } from "react-icons/bs";
import AssiControlButtons from "./AssiControlButtons";
import { PiNotebookLight } from "react-icons/pi";
import { RiArrowDropDownFill } from "react-icons/ri";
import React from 'react';
import { useParams } from "react-router";
import * as db from "../../Database";

import './SearchBar.css';
import './Elips.css';

import { Link, NavLink } from "react-router-dom";
export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;
    return (
        <div id="wd-assignments">
            <div>
                <div className="mt-4 mb-5">
                    <ModulesControls />
                </div>
                <ul id="wd-assignments-content" className="list-group rounded-0">
                    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="fs-3" />
                                <RiArrowDropDownFill className="fs-3" />
                                ASSIGNMENTS
                            </div>
                            <div>
                                <LessonControlButtons />
                            </div>
                        </div>
                        <ul className="wd-lessons list-group rounded-0">
                            {assignments
                                .filter((assignment) => assignment.course === cid)
                                .map((assignment) => (
                                    <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <BsGripVertical className="me-2 fs-3 text-secondary" />
                                                <PiNotebookLight className="me-2 fs-3 text-success" />
                                            
                                                <div>
                                                    <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                                        className="text-decoration-none"
                                                        style={{ color: 'black' }}>
                                                        {assignment.title}</Link>
                                                    <div className="text-secondary" style={{ fontSize: '0.8rem' }}>
                                                        <span style={{ color: 'red' }}>Multiple Modules</span> ｜Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts
                                                    </div>
                                                </div>
                                         
                                            </div>
                                            <div>
                                                <AssiControlButtons />
                                            </div>
                                        </div>
                                    </li>
                                ))}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}