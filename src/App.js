import AppHeader from "./components/AppHeader/AppHeader";
import "./App.css";
import ListView from "./components/ListView/ListView";
import { ListProvider } from "./context/listContext";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import NewItemView from "./components/NewItemView/NewItemView";

function App() {
  return (
    <ListProvider>
      <div className="App">
        <AppHeader />
        <Routes>
          <Route path="/home" element={<ListView />} />
          <Route path="/addItem" element={<NewItemView />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </ListProvider>
  );
}

export default App;
