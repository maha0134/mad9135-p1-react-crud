import "./listItem.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useList } from "../../context/listContext";
import NewItemView from "../NewItemView/NewItemView";
export default function ListItem({ item }) {
  const [
    list,
    newViewOpen,
    toggleView,
    saveNewItem,
    editItemIndex,
    itemClicked,
  ] = useList();

  if (editItemIndex == item.id) {
    return <NewItemView item={item} />;
  } else {
    return (
      <li data-id={item.id} onClick={itemClicked}>
        <h3>{item.name}</h3>
        <h4>{item.storeName}</h4>
        <p>{item.quantity}</p>
        <AiFillEdit className="icon-edit" />
        <AiFillDelete className="icon-del" />
      </li>
    );
  }
}
