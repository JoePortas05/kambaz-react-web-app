import { useSelector } from "react-redux";
export default function ProtectedSignedin({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser) {
    return children;
  } else {
    return null;
  }
}
