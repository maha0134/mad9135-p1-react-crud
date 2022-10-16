import Form from "../Form/Form";
export default function NewItemView({ item }) {
  if (item) {
    return <Form item={item} />;
  } else {
    return <Form />;
  }
}
