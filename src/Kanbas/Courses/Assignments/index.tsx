import ModulesControls from "./AssiModulesControls";
import LessonControlButtons from "./AssiHeadControlButtons";
import { BsGripVertical } from "react-icons/bs";
import AssiControlButtons from "./AssiControlButtons";
import { PiNotebookLight } from "react-icons/pi";
import { RiArrowDropDownFill } from "react-icons/ri";
import React from 'react';

import './SearchBar.css';
import './Elips.css';

import { NavLink } from "react-router-dom";
export default function Assignments() {
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
                            <li className="wd-lesson list-group-item p-3 ps-1">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3 text-secondary" />
                                        <PiNotebookLight className="me-2 fs-3 text-success" />
                                        <div>
                                            <NavLink to="/Kanbas/Courses/1234/Assignments/123"
                                                className="text-decoration-none"
                                                style={{ color: 'black' }}>
                                                A1</NavLink>
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
                            <li className="wd-lesson list-group-item p-3 ps-1">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3 text-secondary" />
                                        <PiNotebookLight className="me-2 fs-3 text-success" />
                                        <div>
                                            <NavLink to="/Kanbas/Courses/1234/Assignments/123"
                                                className="text-decoration-none"
                                                style={{ color: 'black' }}>
                                                A2</NavLink>
                                            <div className="text-secondary" style={{ fontSize: '0.8rem' }}>
                                                <span style={{ color: 'red' }}>Multiple Modules</span> ｜Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <AssiControlButtons />
                                    </div>
                                </div>
                            </li>
                            <li className="wd-lesson list-group-item p-3 ps-1">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3 text-secondary" />
                                        <PiNotebookLight className="me-2 fs-3 text-success" />
                                        <div>
                                            <NavLink to="/Kanbas/Courses/1234/Assignments/123"
                                                className="text-decoration-none"
                                                style={{ color: 'black' }}>
                                                A3</NavLink>
                                            <div className="text-secondary" style={{ fontSize: '0.8rem' }}>
                                                <span style={{ color: 'red' }}>Multiple Modules</span> ｜Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <AssiControlButtons />
                                    </div>
                                </div>
                            </li>
                            <li className="wd-lesson list-group-item p-3 ps-1">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3 text-secondary" />
                                        <PiNotebookLight className="me-2 fs-3 text-success" />
                                        <div>
                                            <NavLink to="/Kanbas/Courses/1234/Assignments/123"
                                                className="text-decoration-none"
                                                style={{ color: 'black' }}>
                                                A4</NavLink>
                                            <div className="text-secondary" style={{ fontSize: '0.8rem' }}>
                                                <span style={{ color: 'red' }}>Multiple Modules</span> ｜Not available until May 27 at 12:00am | Due Jun 4 at 11:59pm | 100 pts
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <AssiControlButtons />
                                    </div>
                                </div>
                            </li>
                            <li className="wd-lesson list-group-item p-3 ps-1">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-3 text-secondary" />
                                        <PiNotebookLight className="me-2 fs-3 text-success" />
                                        <div>
                                            <NavLink to="/Kanbas/Courses/1234/Assignments/123"
                                                className="text-decoration-none"
                                                style={{ color: 'black' }}>
                                                A5</NavLink>
                                            <div className="text-secondary" style={{ fontSize: '0.8rem' }}>
                                                <span style={{ color: 'red' }}>Multiple Modules</span> ｜Not available until Jun 4 at 12:00am | Due Jun 11 at 11:59pm | 100 pts
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <AssiControlButtons />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul> </div>
        </div>
    );
}