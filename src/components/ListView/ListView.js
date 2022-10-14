import "./listView.css";
import ListItem from "../ListItem/ListItem";
import { useList } from "../../context/listContext";
import NewItemView from "../NewItemView/NewItemView";

export default function ListView() {
  const [list, viewOpen, addNewItem] = useList();
  return (
    <>
      <button className="btn" onClick={addNewItem}>
        Add
      </button>
      {!viewOpen && list.length == 0 && <p>Please add some items</p>}
      {!viewOpen && list.length > 0 && (
        <ul className="unstyled-list">
          {list.map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </ul>
      )}
      {viewOpen && <NewItemView />}
    </>
  );
}
