import { Link, useNavigate } from "react-router-dom";
import { useList } from "../../context/listContext";
import "./form.css";
export default function Form({ item }) {
  const [
    list,
    newViewOpen,
    toggleView,
    saveButtonClicked,
    editItemIndex,
    itemClicked,
    cancelButtonClicked,
  ] = useList();
  return (
    <form onSubmit={saveButtonClicked}>
      <input
        type="text"
        name="name"
        placeholder="Enter product name"
        defaultValue={item && "id" in item ? item.name : ""}
        required
      />
      <label htmlFor="name" className=".screen-reader-text ">
        Product Name
      </label>
      <input
        type="text"
        name="storeName"
        placeholder="Enter store name"
        defaultValue={item && "id" in item ? item.storeName : ""}
        required
      />
      <label htmlFor="name" className=".screen-reader-text">
        Store Name
      </label>
      <input
        type="text"
        name="quantity"
        placeholder="Enter quantity"
        defaultValue={item && "id" in item ? item.quantity : ""}
      />
      <label htmlFor="name" className=".screen-reader-text">
        How many
      </label>
      <button type="submit">Save Item</button>
      {item && "id" in item ? (
        <button type="reset" onClick={cancelButtonClicked}>
          Cancel
        </button>
      ) : (
        <Link to="/home">Cancel</Link>
      )}
    </form>
  );
}
