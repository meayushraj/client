import React from "react";
import UploadVideo from "../Upload/uploadvideo";
import { Dropdown, SplitButton } from "react-bootstrap";
import { UploadImageAction } from "../Actions/actions";
import UploadImageVaishnav from "../Upload/UploadImageVaishnav";
const TaskList = (props) => {
  const [count, setCount] = React.useState(0);
  return props.taskList.map((val, idx) => {
    let projectName = `projectName-${idx}`,
      task = `task-${idx}`,
      taskNotes = `taskNotes-${idx}`,
      taskStatus = `taskStatus-${idx}`;

    return (
      <tr key={val.index}>
        <td>
          <input
            type="number"
            name="VideoNumber"
            data-id={idx}
            id={projectName}
            placeholder="Video Number"
            className="form-control "
            style={{ width: "70px" }}
          />
        </td>
        <td>
          <input
            type="text"
            name="VideoName"
            id={task}
            data-id={idx}
            className="form-control "
            placeholder="Video Name"
            style={{ width: "250px" }}
          />
        </td>
        <td>
          <SplitButton
            key="right"
            id={`dropdown-button-drop-right`}
            drop="right"
            variant="success"
            title="ADD Matreials"
          >
            <button onClick={(e) => e.stopPropagation()}>
              <UploadVideo title="Upload Video" />
            </button>
            <hr />
            <button>Add Notes</button>
            <hr />
            <button onClick={(e) => e.stopPropagation()}>
              add Assignments
            </button>
            <hr />
          </SplitButton>
        </td>

        <td>
          {idx === 0 ? (
            <button
              onClick={() => {
                props.add();
                setCount(count + 1);
              }}
              type="button"
              className="btn btn-primary text-center"
            >
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
            </button>
          ) : (
            <button
              className="btn btn-danger"
              onClick={() => props.delete(val)}
            >
              <i className="fa fa-minus" aria-hidden="true"></i>
            </button>
          )}
        </td>
      </tr>
    );
  });
};
export default TaskList;
