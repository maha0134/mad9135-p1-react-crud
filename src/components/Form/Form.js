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
  const stores = [
    "Dollarama",
    "Loblaw",
    "Walmart",
    "SuperStore",
    "Toys R Us",
    "Other",
  ];
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
      <select name="storeName" required>
        <option defaultValue="">Select a Store</option>
        {stores.map((store, index) => {
          if (item && "id" in item) {
            // if (item.selectedIndex - 1 === index)
            return (
              <option
                defaultValue={store}
                selected={item.selectedIndex - 1 === index}
              >
                {store}
              </option>
            );
          }
          return <option defaultValue={store}>{store}</option>;
        })}
      </select>
      <label htmlFor="storeName" className="screen-reader-text">
        Store Name
      </label>
      <input
        type="text"
        name="quantity"
        placeholder="Enter quantity"
        defaultValue={item && "id" in item ? item.quantity : ""}
      />
      <label htmlFor="quantity" className="screen-reader-text">
        How many
      </label>
      <div className="form-buttons">
        <button type="submit" className="btn form-btn">
          Save Item
        </button>
        {item && "id" in item ? (
          <button
            type="reset"
            onClick={cancelButtonClicked}
            className="cancel-btn"
          >
            Cancel
          </button>
        ) : (
          <Link to="/home">Cancel</Link>
        )}
      </div>
    </form>
  );
}
