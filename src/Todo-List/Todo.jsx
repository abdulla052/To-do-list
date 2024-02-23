import { useState } from "react";
import style from "./Todo.module.css";

const Todo = () => {
  const [list, setList] = useState([
    {
      text: "Your todo list",
      check: false,
    },
    { text: "Another todo", check: false },
  ]);

  const [newList, setNewList] = useState("");

  function handleInputChange(e) {
    setNewList(e.target.value);
  }

  function handleAddTodo() {
    let stringWithoutWhitespaces = newList.replace(/\s+/g, " ").trim();

    if (stringWithoutWhitespaces) {
      setList((l) => [...l, { text: stringWithoutWhitespaces, check: false }]);

      setNewList("");
    }
  }

  function handleDeleteTodo(i) {
    setList(() => list.filter((_, index) => index !== i));
  }

  function moveToUp(i) {
    if (i !== 0) {
      const temp = list[i];

      const newList = [...list];

      newList[i] = newList[i - 1];
      newList[i - 1] = temp;

      setList(newList);
    }
  }

  function moveToDown(i) {
    if (i !== list.length - 1) {
      const temp = list[i];

      const newList = [...list];

      newList[i] = newList[i + 1];
      newList[i + 1] = temp;

      setList(newList);
    }
  }

  function isChecked(index) {
    const newList = list.map((item, i) => {
      if (i === index) {
        return { ...item, check: !item.check };
      }
      return item;
    });
    setList(newList);
  }

  return (
    <>
      <div className={style.container}>
        <h1 className={style.heading}>To-Do-List</h1>
        <div className={style.inputingContainer}>
          <input
            className={`${style.inputTodo} inputTodo`}
            value={newList}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddTodo();
              }
            }}
            type="text"
            placeholder="Add todo to your list"
          />
          <button className={style.addBtn} onClick={handleAddTodo}>
            Add
          </button>
        </div>

        <ul className={style.listContainer}>
          {list.map((e, i) => (
            <li className={style.listLine} key={i}>
              <div className={style.leftOfList}>
                <div
                  className={`${style.doneCircle} ${
                    e.check ? style.isChecked : ""
                  }`}
                  onClick={() => isChecked(i)}
                >
                  {e.check ? "✓" : ""}
                </div>
                {e.text}
              </div>

              <div className={style.listBtnsContainer}>
                <button
                  className={`${style.listBtns} ${style.deleteBtn}`}
                  onClick={() => handleDeleteTodo(i)}
                >
                  Delete
                </button>
                <button
                  className={`${style.listBtns} ${style.orderBtn}`}
                  onClick={() => moveToUp(i)}
                >
                  👆
                </button>
                <button
                  className={`${style.listBtns} ${style.orderBtn}`}
                  onClick={() => moveToDown(i)}
                >
                  👇
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
