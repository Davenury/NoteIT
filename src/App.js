import './App.css';
import {NotesComponent} from "./components/NotesComponent";
import {CustomFormComponent} from "./components/CustomFormComponent";

const baseURL = "https://polsourcetask.davenury.repl.co/"

function App() {
  return (
    <div className="App">
        <CustomFormComponent
            note = {null}
            actionUrl = {baseURL + "create_note"}
        />
        <NotesComponent baseUrl={baseURL} />
    </div>
  );
}

export default App;
