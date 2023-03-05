import { useEffect, useState } from "react";

export default () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      return new Promise((res) => {
        fetch("https://jsonplaceholder.typicode.com/users").then((foo) => {
          foo.json().then((bar) => {
            console.log("test");
            setUsers(bar);
            res();
          });
        });
      });
    })();
  }, []);

  if (users.length === 0) return <></>;

  return (
    <div style={{ background: "grey", padding: 20, marginBottom: 5 }}>
      Last employee is{" "}
      <span
        dangerouslySetInnerHTML={{
          __html: `<strong>${users[users.length - 1].name}</strong>`
        }}
      ></span>
    </div>
  );
};
