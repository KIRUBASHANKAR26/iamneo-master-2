import { MdWorkOutline } from "react-icons/md";

export default function PanelNav() {
  return (
    <div className="panel-nav">
      <div className="left-option">
        <p>
          {" "}
          <MdWorkOutline /> Jobs {">"} Full-Stack Engineer
        </p>
        <button>View Job Details</button>
      </div>
      <div className="right-option">
        <div className="drop-menu">
          <select name="candidate">
            <option value="add candidate">Add Candidate </option>
          </select>
          <select
            name="published"
            style={{
              backgroundColor: "#191E4D",
              color: "#fff",
              borderRadius: "3px",
            }}
          >
            <option value="published">Published </option>
          </select>
        </div>
      </div>
    </div>
  );
}
