import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-signin-screen">
      <h1>Profile</h1>
      <Form.Control
        id="wd-username"
        placeholder="username"
        defaultValue="alice"
        className="mb-2"
      />
      <br />
      <Form.Control
        id="wd-password"
        placeholder="password"
        type="password"
        defaultValue="123"
        className="mb-2"
      />
      <br />
      <Form.Control
        id="wd-first-name"
        placeholder="First Name"
        defaultValue="Alice"
        className="mb-2"
      />
      <Form.Control
        id="wd-last-name"
        placeholder="Last Name"
        defaultValue="Wonderland"
        className="mb-2"
      />
      <Form.Control
        id="wd-dob"
        defaultValue="2000-01-01"
        type="date"
        className="mb-2"
      />
      <Form.Control
        id="wd-email"
        type="email"
        defaultValue="alice@wonderland.com"
        className="mb-2"
      />
      <Form.Select id="wd-role" defaultValue="User" className="mb-3">
        <option>User</option>
        <option>Faculty</option>
        <option>Student</option>
      </Form.Select>
      <Link
        id="wd-signin-btn"
        to="/Kambaz/Account/Signin"
        className="btn btn-danger w-100 mb-2"
      >
        Signout{" "}
      </Link>
      <br />
    </div>
  );
}
