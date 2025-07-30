import { useSelector } from "react-redux";
export default function ProtectedFaculty({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const role = currentUser.role;
  if (currentUser && role === "FACULTY") {
    return children;
  } else {
    return null;
  }
}
