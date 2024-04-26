import { MdOutlineMoreVert } from "react-icons/md";

export default function MoreMenu({ menuItems = [] }) {
  return (
    <div className="dropdown">
      <button className="dropbtn">
        <MdOutlineMoreVert size={40} />
      </button>
      <div className="dropdown-content">
        {menuItems.map((item, i) => {
          return <a key={i}>{item}</a>;
        })}
      </div>
    </div>
  );
}
