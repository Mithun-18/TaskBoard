import { MdOutlineMoreVert } from "react-icons/md";
import HandleClickNavigate from "../../../component/core/HandleClickNavigate";
import { LOGIN_ROUTE } from "../../../constants";
import useAuth from "../../../providers/auth_provider";

export default function MoreMenu({ menuItems = [] }) {
  const { logout } = useAuth();
  return (
    <div className="dropdown">
      <button className="dropbtn">
        <MdOutlineMoreVert size={42} />
      </button>
      <div className="dropdown-content">
        {menuItems.map((item, i) => {
          return <a key={i}>{item}</a>;
        })}
      </div>
    </div>
  );
}
