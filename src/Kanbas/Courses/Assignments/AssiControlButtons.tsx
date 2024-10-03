import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./AssiGreenCheckmark";

export default function AssiControlButtons() {
    return (
        <div className="float-end">
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-5" />
        </div>
    );
}
