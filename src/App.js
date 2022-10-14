import AppHeader from "./components/AppHeader/AppHeader";
import "./App.css";
import ListView from "./components/ListView/ListView";
import { ListProvider } from "./context/listContext";

function App() {
  return (
    <ListProvider>
      <div className="App">
        <AppHeader />
        <ListView />
      </div>
    </ListProvider>
  );
}

export default App;
