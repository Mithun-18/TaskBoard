import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../../constants";
import useAuth from "../../providers/auth_provider";

export default function LogOut() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  function onSuccess() {
    navigate(LOGIN_ROUTE);
  }
  return (
    <button
      className="task-board-button"
      onClick={() => {
        logout(onSuccess);
      }}
    >
      LOGOUT
    </button>
  );
}
