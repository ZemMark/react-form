import { useEffect, useState, memo } from "react";

export default () => {
  const [users, setUsers] = useState([]);

window.submitForm = (name) => {
  setUsers(users => {
    const lastUser = users[users.length - 1];
    const updatedLastUserName = `${lastUser.name} (*)`;
    const updatedUsers = [
      ...users.slice(0, -1),
      { name: updatedLastUserName },
      { name }
    ];
    return updatedUsers;
  });
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
          <Name data={d} key={index} />
        ))}
      </div>
    </div>
  );
};

export const Name = memo(({ data }) => {
  return <li>{data.name}</li>;
});
