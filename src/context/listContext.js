import { useContext, createContext, useState, useEffect } from "react";
const ListContext = createContext();

function ListProvider(props) {
  const [list, setList] = useState([]);
  const key = "shop";
  const [editItemIndex, setEditItemIndex] = useState(null);

  //retrieve list, if it exists, from local storage
  useEffect(() => {
    const fetch = JSON.parse(localStorage.getItem(key));
    if (fetch) setList(fetch);
  }, []);

  function saveButtonClicked(ev) {
    const form = ev.target;
    const listItem = {
      name: form.name.value,
      storeName: form.storeName.value,
      selectedIndex: form.storeName.selectedIndex,
      quantity: form.quantity.value ? form.quantity.value : 1,
    };
    if (editItemIndex === null) {
      //saving a new form
      listItem.id = list.length;
      list.push(listItem);
    } else {
      //saving an edit form
      const index = Number(editItemIndex);
      listItem.id = index;
      list[index] = listItem;
      setEditItemIndex(null);
    }
    setList(list);
    localStorage.setItem(key, JSON.stringify(list));
  }

  function deleteButtonClicked(index) {
    const newList = [...list];
    newList.splice(index, 1);
    newList.forEach((item, index) => {
      item.id = index;
    });
    localStorage.setItem(key, JSON.stringify(newList));
    setList(newList);
  }

  function editButtonClicked(ev) {
    const li = ev.currentTarget.closest("li");
    setEditItemIndex(Number(li.dataset.id));
  }
  function cancelButtonClicked() {
    setEditItemIndex(null);
  }

  return (
    <ListContext.Provider
      value={[
        list,
        saveButtonClicked,
        editItemIndex,
        editButtonClicked,
        cancelButtonClicked,
        deleteButtonClicked,
      ]}
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
