import ModulesControls from "./AssiModulesControls";
import LessonControlButtons from "./AssiHeadControlButtons";
import { BsGripVertical } from "react-icons/bs";
import AssiControlButtons from "./AssiControlButtons";
import { PiNotebookLight } from "react-icons/pi";
import { RiArrowDropDownFill } from "react-icons/ri";
import React, { useState } from 'react';
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./reducer";
import ProtectedContent from '../../Account/ProtectedContent';



import './SearchBar.css';
import './Elips.css';

import { Link, NavLink } from "react-router-dom";
export default function Assignments() {
    const { cid, aid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const cidAssignments = assignments.filter((assignment: any) => assignment.course === cid);

    const dispatch = useDispatch();

    return (
        <div id="wd-assignments">
            <div>
                <div className="mt-4 mb-5">
                    <ModulesControls
                        cid={cid!}
                    />
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
                            {cidAssignments
                                .filter((assignments: any) => assignments.course === cid)
                                .map((assignments: any) => (
                                    <li key={assignments._id} className="wd-lesson list-group-item p-3 ps-1">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <BsGripVertical className="me-2 fs-3 text-secondary" />
                                                <PiNotebookLight className="me-2 fs-3 text-success" />
                                                <div>
                                                    <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignments._id}`}
                                                        className="text-decoration-none"
                                                        style={{ color: 'black' }}>
                                                        {assignments.title}</Link>
                                                    <div className="text-secondary" style={{ fontSize: '0.8rem' }}>
                                                        <span style={{ color: 'red' }}>Multiple Modules</span> ｜<b>not available until</b> {assignments.available} | <b>Due</b> {assignments.due} | 100 pts
                                                    </div>
                                                </div>

                                            </div>
                                            <div>
                                                <AssiControlButtons assignmentId={assignments._id}
                                                    deleteAssignment={(assignmentId) => {
                                                        dispatch(deleteAssignment(assignmentId));
                                                    }} />
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