import "./listItem.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useList } from "../../context/listContext";
export default function ListItem({ item }) {
  const [,,,,editItem] = useList()
  return (
    <li>
      <h3>{item.name}</h3>
      <h4>{item.storeName}</h4>
      <p>{item.quantity}</p>
      <AiFillDelete className="icon-del" onClick={editItem}/>
      <AiFillEdit className="icon-edit" />
    </li>
  );
}
