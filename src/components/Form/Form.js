import { Link, useNavigate } from "react-router-dom";
import { useList } from "../../context/listContext";
import "./form.css";
export default function Form({ item }) {
  const [
    list,
    saveButtonClicked,
    editItemIndex,
    itemClicked,
    cancelButtonClicked,
  ] = useList();
  const navigate = useNavigate();
  function formSubmitted(ev) {
    ev.preventDefault();
    saveButtonClicked(ev);
    navigate("/home");
  }
  return (
    <form onSubmit={formSubmitted}>
      <input
        type="text"
        name="name"
        placeholder="Enter product name"
        defaultValue={item && "id" in item ? item.name : ""}
        required
      />
      <label htmlFor="name" className="screen-reader-text ">
        Product Name
      </label>
      {/* <input
        type="text"
        name="storeName"
        placeholder="Enter store name"
        defaultValue={item && "id" in item ? item.storeName : ""}
        required
      /> */}

      <select name="storeName" required>
        <option value="">Select a Store</option>
        <option value="Dollarama">Dollarama</option>
        <option value="Loblaw">Loblaw</option>
        <option value="Walmart">Walmart</option>
        <option value="SuperStore">SuperStore</option>
        <option value="Toys R US">Toys R US</option>
        <option value="Other">Other</option>
      </select>
      <label htmlFor="name" className="screen-reader-text">
        Store Name
      </label>
      <input
        type="text"
        name="quantity"
        placeholder="Enter quantity"
        defaultValue={item && "id" in item ? item.quantity : ""}
      />
      <label htmlFor="name" className="screen-reader-text">
        How many
      </label>
      <div className="form-buttons">
        <button type="submit" className="btn form-btn">
          Save Item
        </button>
        {item && "id" in item ? (
          <button type="reset" onClick={cancelButtonClicked}>
            Cancel
          </button>
        ) : (
          <Link to="/home">Cancel</Link>
        )}
      </div>
    </form>
  );
}
