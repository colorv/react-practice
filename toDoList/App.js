import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }

    // 직접적으로 state를 수정하는것은 좋지않다.
    // toDos.push(toDo);
    // setToDos(toDos);

    // [6, food]
    // [6, ...food]
    setToDos((currentArray) => [toDo, ...toDos]);
    setToDo("");
  };
  const onClick = (index) => {
    const newArray = toDos.filter((toDo, toDoIndex) => toDoIndex !== index);
    console.log(newArray);
    setToDos(newArray);
  };

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write to do..."
        ></input>
        <button type="submit">Add To Do</button>
        <hr />
        <ul>
          {toDos.map((todo, index) => (
            <li key={index}>
              {todo} <button onClick={() => onClick(index)}>x</button>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
