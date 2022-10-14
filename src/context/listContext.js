import { useContext, createContext, useState, useEffect } from "react";
const ListContext = createContext();

function ListProvider(props) {
  const [list, setList] = useState([]);
  const key = "shop";
  const [viewOpen, setViewOpen] = useState(false);
  useEffect(() => {
    const fetch = localStorage.getItem(key);
    if (fetch) setList(fetch);
  }, []);
  function addNewItem() {
    setViewOpen(true);
    // const name =
  }

  return (
    <ListContext.Provider value={[list, viewOpen, addNewItem]} {...props} />
  );
}

function useList() {
  const context = useContext(ListContext);
  if (!context) throw new Error("Issue with the Provider");
  return context;
}

export { ListProvider, useList };
