import "./listView.css";
import ListItem from "../ListItem/ListItem";
import { useList } from "../../context/listContext";

export default function ListView() {
  const [list] = useList();

  return (
    <>
      {list.length === 0 && <p>Please add some items</p>}
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
    </>
  );
}
