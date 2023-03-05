import { AddNewUser } from "./components/addnewuser";
import Header from "./components/Header";
import USERLIST from "./components/UserList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div>
        <Header name={"User foo"} />
      </div>
      <div>
        <AddNewUser />
      </div>
      <div>
        <USERLIST />
      </div>
    </div>
  );
}
