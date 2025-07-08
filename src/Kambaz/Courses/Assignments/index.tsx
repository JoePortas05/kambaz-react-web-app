export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments" id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>{" "}
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a
            href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A1 - ENV + HTML
          </a>{" "}
          <div>
            Multiple Modules | Not Available until July 9th at 12:00 AM | Due
            July 11th at 11:59 PM | 100 Points
          </div>
        </li>

        <li className="wd-assignment-list-item">
          <a
            href="#/Kambaz/Courses/1234/Assignments/124"
            className="wd-assignment-link"
          >
            A2 - CSS + BOOTSTRAP
          </a>{" "}
          <div>
            Multiple Modules | Not Available until July 11th at 12:00 AM | Due
            July 13th at 11:59 PM | 100 Points
          </div>
        </li>

        <li className="wd-assignment-list-item">
          <a
            href="#/Kambaz/Courses/1234/Assignments/125"
            className="wd-assignment-link"
          >
            A3 - JAVASCRIPT + REACT
          </a>{" "}
          <div>
            Multiple Modules | Not Available until July 13th at 12:00 AM | Due
            July 15th at 11:59 PM | 100 Points
          </div>
        </li>
      </ul>
    </div>
  );
}
