export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Assignment group</label>
          </td>
          <td>
            <select id="wd-group" defaultValue="ASSIGNMENTS">
              <option>ASSIGNMENTS</option>
              <option>EXAMS</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Display grade as</label>
          </td>
          <td>
            <select id="wd-group" defaultValue="Percentage">
              <option>Percentage</option>
              <option>Number</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Submission type</label>
          </td>
          <td>
            <select id="wd-group" defaultValue="Online">
              <option>Online</option>
              <option>Physical</option>
              <option>None</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Online entry options</label>
          </td>
          <td>
            <br></br>
            <label>
              <input type="checkbox" /> Text Entry
            </label>
            <br></br>
            <label>
              <input type="checkbox" /> Website URL
            </label>
            <br></br>
            <label>
              <input type="checkbox" /> Media Recordings
            </label>
            <br></br>
            <label>
              <input type="checkbox" /> Student Annotations
            </label>
            <br></br>
            <label>
              <input type="checkbox" /> File Uploads
            </label>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Assign Assign to</label>
          </td>
          <td>
            <input defaultValue="Everyone"></input>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Due</label>
          </td>
          <td>
            <input type="date" defaultValue="2025-07-08"></input>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Available from</label>
          </td>
          <td>
            <input type="date" defaultValue="2025-07-08"></input>
          </td>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Until</label>
          </td>
          <td>
            <input type="date" defaultValue="2025-07-08"></input>
          </td>
        </tr>
        <tr>
          <td>
            <button type="button">Cancel</button>
            <button type="button">Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
