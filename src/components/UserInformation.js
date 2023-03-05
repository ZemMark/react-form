import { useEffect } from "react";

let renderCount = 1;

const Component = ({ data }) => {
  useEffect(() => renderCount++);

  if (!data.age) return null;

  return (
    <div>
      {data.age < 18 ? (
        <span style={{ color: "red" }}>
          You are too young to be our employee
        </span>
      ) : (
        <span style={{}}>You are old enough :)</span>
      )}
      <small> ({renderCount})</small>
    </div>
  );
};

export default Component;
