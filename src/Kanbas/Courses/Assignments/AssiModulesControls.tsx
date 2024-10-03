import { FaPlus } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa';
export default function ModulesControls() {
    return (
        <div id="Assignment-top-buttons" className="text-nowrap">
            <div className="d-flex justify-content-end align-items-center">
                <div id="wd-search-assignment" className="search-bar">
                    <FaSearch className="search-icon" />
                    <input className="search-input" type="text" placeholder="Search..." />
                </div>
                <button id="wd-add-assignment-group" className="btn btn-lg wd-btn-secondary me-1 float-end">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Group</button>
                <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-end">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment</button>     
            </div>    
        </div>
    );
}