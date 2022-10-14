import "./listItem.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
export default function ListItem({ item }) {
  return (
    <li>
      <h3>{item.name}</h3>
      <h4>{item.storeName}</h4>
      <p>{item.quantity}</p>
      <AiFillDelete className="icon-del" />
      <AiFillEdit className="icon-edit" />
    </li>
  );
}
