import { useEffect, useState, memo } from "react";

export default () => {
  const [users, setUsers] = useState([]);

  window.submitForm = (name) => {
    alert("Submiting form for " + name);
    users[users.length - 1].name += " (*)"; // mark the previous employee
    users.push({ name: name });
    setUsers(users);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((foo) => {
      foo.json().then((bar) => {
        setUsers(bar);
      });
    });
  }, []);

  if (users.length === 0) return <></>;

  return (
    <div style={{ background: "yellow", marginTop: 5 }}>
      <h4 style={{ margin: 0, marginBottom: 20, textDecoration: "underline" }}>
        List of users
      </h4>
      <div>
        {users.map((d, index) => (
          <Name data={d} />
        ))}
      </div>
    </div>
  );
};

export const Name = memo(({ data }) => {
  return <li>{data.name}</li>;
});
