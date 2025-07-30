import { useSelector } from "react-redux";
export default function ProtectedSignedout({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser) {
    return null;
  } else {
    return children;
  }
}
