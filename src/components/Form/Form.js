import "./form.css";
export default function Form({ id }) {
  return (
    <form>
      <input type="text" name="name" placeholder="Enter product name" />
      <label htmlFor="name" className=".screen-reader-text ">
        Product Name
      </label>
      <input type="text" name="storeName" placeholder="Enter store name" />
      <label htmlFor="name" className=".screen-reader-text">
        Store Name
      </label>
      <input type="text" name="quantity" placeholder="Enter quantity" />
      <label htmlFor="name" className=".screen-reader-text">
        How many
      </label>
      <button type="submit">Save Item</button>
    </form>
  );
}
