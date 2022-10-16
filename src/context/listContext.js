import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ListContext = createContext();

function ListProvider(props) {
  const [list, setList] = useState([]);
  const key = "shop";
  const [newViewOpen, setNewViewOpen] = useState(false);
  const [editItemIndex, setEditItemIndex] = useState(null);

  //retrieve list, if it exists, from local storage
  useEffect(() => {
    const fetch = JSON.parse(localStorage.getItem(key));
    if (fetch) setList(fetch);
  }, []);

  function toggleView() {
    setNewViewOpen(!newViewOpen);
  }

  function saveButtonClicked(ev) {
    const form = ev.target;
    const listItem = {
      name: form.name.value,
      storeName: form.storeName.value,
      quantity: form.quantity.value ? form.quantity.value : 0,
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

  function editButton(ev) {
    const li = ev.currentTarget;
    setEditItemIndex(li.dataset.id);
  }

  function deleteButton(ev) {}

  function itemClicked(ev) {
    if (ev.target.closest(".icon-edit")) editButton(ev);
    if (ev.target.closest(".icon-del")) deleteButton(ev);
  }
  function cancelButtonClicked() {
    setEditItemIndex(null);
  }

  return (
    <ListContext.Provider
      value={[
        list,
        newViewOpen,
        toggleView,
        saveButtonClicked,
        editItemIndex,
        itemClicked,
        cancelButtonClicked,
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
