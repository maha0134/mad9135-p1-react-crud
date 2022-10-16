import "./listItem.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
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
          <h3>{item.name}</h3>
          <h4>{item.storeName}</h4>
          <p>{item.quantity}</p>
          <button onClick={editButtonClicked}>
            <AiFillEdit className="icon-edit" />
          </button>
          <button onClick={openModal}>
            <AiFillDelete className="icon-del" />
          </button>
        </li>
      </>
    );
  }
}
