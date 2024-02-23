import { useState } from "react";

const MyComponent = (props) => {
  const [list, setList] = useState(["Orange", "Banana", "Apple"]);

  function handleAddToListClick(e) {
    const newItem = document.querySelector(".input-item").value;

    document.querySelector(".input-item").value = "";
    setList((i) => [...i, newItem]);
  }

  function handleRemoveFromListClick(index) {
    setList(list.filter((_, i) => i !== index));
  }

  return (
    <>
      <h1>List of {props.name}</h1>
      <ul>
        {list.map((e, i) => (
          <li
            onClick={() => handleRemoveFromListClick(i)}
            key={i}
            style={{ cursor: "crosshair" }}
          >
            {e}
          </li>
        ))}
      </ul>

      <input
        className="input-item"
        type="text"
        placeholder="Add to your list"
      />
      <button onClick={handleAddToListClick}>Add</button>
    </>
  );
};

MyComponent.defaultProps = {
  name: "Food",
};

export default MyComponent;
