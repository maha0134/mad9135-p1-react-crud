import "./listItem.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { useList } from "../../context/listContext";
import { useState } from "react";
import NewItemView from "../NewItemView/NewItemView";
import Modal from "react-modal";
Modal.setAppElement("#root");
export default function ListItem({ item, index }) {
  const [
    list,
    saveButtonClicked,
    editItemIndex,
    editButtonClicked,
    cancelButtonClicked,
    deleteButtonClicked,
  ] = useList();
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  if (editItemIndex === index) {
    return <NewItemView item={item} />;
  } else {
    return (
      <>
        <Modal isOpen={modalIsOpen}>
          <div>
            <h3>Are you sure you want to delete this item ?</h3>
            <button
              onClick={() => {
                deleteButtonClicked(index);
                closeModal();
              }}
            >
              Yes
            </button>
            <button onClick={closeModal}>No</button>
          </div>
        </Modal>
        <li data-id={index}>
          <div className="details">
            <h3>{item.name}</h3>
            <h4>{item.storeName}</h4>
          </div>
          <p>{item.quantity}</p>
          <div className="li-buttons">
            <button onClick={editButtonClicked} className="icon-edit">
              <GrEdit />
            </button>
            <button onClick={openModal} className="icon-del">
              <MdDelete />
            </button>
          </div>
        </li>
      </>
    );
  }
}
