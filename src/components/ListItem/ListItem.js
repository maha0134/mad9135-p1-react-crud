import "./listItem.css";
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { useList } from "../../context/listContext";
import { useState } from "react";
import NewItemView from "../NewItemView/NewItemView";
import Modal from "react-modal";
Modal.setAppElement("#root");
export default function ListItem({ item, index }) {
  const [, , , editItemIndex, editButtonClicked, deleteButtonClicked] =
    useList();
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const modalStyle = {
    content: {
      display: "flex",
      justifyContent: "center",
      fontSize: "1.5rem",
      padding: "1rem",
      margin: "auto",
      maxWidth: "40rem",
      textAlign: "center",
      maxHeight: "25rem",
    },
  };
  if (editItemIndex === index) {
    return <NewItemView item={item} />;
  } else {
    return (
      <>
        <Modal isOpen={modalIsOpen} style={modalStyle}>
          <div className="Modal">
            <h3>Are you sure you want to delete this item ?</h3>
            <div className="buttons">
              <button
                className="btn"
                onClick={() => {
                  deleteButtonClicked(index);
                  closeModal();
                }}
              >
                Yes
              </button>
              <button onClick={closeModal} className="btn">
                No
              </button>
            </div>
          </div>
        </Modal>
        <li data-id={index}>
          <div className="details">
            <h2>{item.name}</h2>
            <h3>{item.storeName}</h3>
          </div>
          <p>{item.quantity}</p>
          <div className="li-buttons">
            <button
              onClick={editButtonClicked}
              className="icon-edit"
              aria-label="Edit"
            >
              <GrEdit />
            </button>
            <button
              onClick={openModal}
              className="icon-del"
              aria-label="Delete"
            >
              <MdDelete />
            </button>
          </div>
        </li>
      </>
    );
  }
}
