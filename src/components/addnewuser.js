import { useMemo, useState } from "react";
import UserInformation from "./UserInformation";

export const AddNewUser = () => {
  const [age, setAge] = useState(null);
  const [newName, setName] = useState("");

  const doSomething = (d) => {
    setName(d.target.value);
  };

  const foo = () => {
    if (age < 18) {
      alert("You are not old enough to be our employee");
    } else {
      window.submitForm(newName);
    }
  };

  const userData = { age };

  return (
    <div style={{ background: "#2ab92a", padding: 20 }}>
      <input type="text" onChange={doSomething} placeholder="Type your name" />
      <input
        type="number"
        onChange={(d) => setAge(d.target.value)}
        placeholder="Type your age"
      />
      <button onClick={foo}>Submit form</button>
      <UserInformation data={userData} />
    </div>
  );
};
