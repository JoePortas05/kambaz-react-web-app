import { Link } from "react-router-dom";
import ProtectedSignedout from "./ProtectedSignedout";
import ProtectedSignedin from "./ProtecedSignedin";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation">
      <ProtectedSignedout>
        <Link to={`/Kambaz/Account/Signin`}> Signin </Link> <br />
        <Link to={`/Kambaz/Account/Signup`}> Signup </Link> <br />
      </ProtectedSignedout>
      <ProtectedSignedin>
        <Link to={`/Kambaz/Account/Profile`}> Profile </Link> <br />
      </ProtectedSignedin>
    </div>
  );
}
