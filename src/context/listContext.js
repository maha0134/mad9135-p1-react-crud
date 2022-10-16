import { useContext, createContext, useState, useEffect } from "react";
const ListContext = createContext();

function ListProvider(props) {
  const [list, setList] = useState([]);
  const key = "shop";
  const [viewOpen, setViewOpen] = useState(false);
  useEffect(() => {
    const fetch = JSON.parse(localStorage.getItem(key));
    if (fetch) setList(fetch);
  }, []);

  function addNewItem() {
    setViewOpen(true);
  }

  function saveItem(ev) {
    ev.preventDefault();
    const form = ev.target;
    const listItem = {
      name: form.name.value,
      storeName: form.storeName.value,
      quantity: form.quantity.value,
    };

    list.push(listItem);
    setList(list);
    localStorage.setItem(key, JSON.stringify(list));
    setViewOpen(false);
  }

  function editItem() {}

  return (
    <ListContext.Provider
      value={[list, viewOpen, addNewItem, saveItem, editItem]}
      {...props}
    />
  );
}

function useList() {
  const context = useContext(ListContext);
  if (!context) throw new Error("Issue with the Provider");
  return context;
}

export { ListProvider, useList };
