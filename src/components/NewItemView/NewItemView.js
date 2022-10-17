import Form from "../Form/Form";
export default function NewItemView({ item }) {
  if (item) {
    return <Form item={item} />;
  } else {
    return (
      <>
        <h2>Please enter the following details:</h2>
        <Form />
      </>
    );
  }
}
