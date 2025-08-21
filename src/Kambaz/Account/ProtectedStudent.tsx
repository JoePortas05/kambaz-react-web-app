import { useSelector } from "react-redux";
export default function ProtectedStudent({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const role = currentUser.role;
  if (currentUser && role === "STUDENT") {
    return children;
  } else {
    return null;
  }
}
