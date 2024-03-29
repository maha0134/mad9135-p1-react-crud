import "./listView.css";
import ListItem from "../ListItem/ListItem";
import { useList } from "../../context/listContext";
import { Link } from "react-router-dom";

export default function ListView() {
  const [list] = useList();

  return (
    <div className="container">
      <Link to="/addItem" className="btn">
        Add
      </Link>
      {list.length === 0 && <h2 className="no-items">Please add some items</h2>}
      {list.length > 0 && (
        <ul className="unstyled-list">
          {list.map((item, index) => (
            <ListItem
              key={item.name + parseInt(item.id)}
              item={item}
              index={index}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
