import { useEffect, useState } from "react";

// Создаю функцию отрисовки данных куда передаю спомошю props параметры:
export const TodoList = ({ id, todo, completed, userId }) => {
  return (
    <div>
      <p>ID:{id}</p>
      <p>DESCRIPTION:{todo}</p>
      <p>{completed}</p>
      <p>USERID:{userId}</p>
    </div>
  );
};

// cаздаем function Todo
export const Todo = () => {
  // Исползуем hook useState в каторый будет приходит массив обектов.
  const [allTodos, setAllTodos] = useState([]);
  // Исползуем хоок useEffect Для fetchinga данных:
  useEffect(() => {
    // Исползуем async await c блокам try{} catch {} для fetch наших данных спомошю Get запроса:
    const fetchAllTodos = async () => {
      try {
        const response = await fetch("https://dummyjson.com/todos");
        const data = await response.json();
        setAllTodos(() => [...data.todos]);
        console.log(data.todos);
      } catch (error) {
        console.log("Unable to show data:", error);
      }
    };
    // вызываем наш запрос:
    fetchAllTodos();
    // по умалчанию делаем пустои массив
  }, []);

  return (
    <div>
      {/* возрошаем наш useState: allTodos уже с данными из fetch и спомошю map опракидиваем уже в отрисовку на сайте */}
      {allTodos.map((todo) => (
        // бером функчию TodoList где key снимает ошибку а  через spred operator опракидиваем данные {...todo}.
        <TodoList key={todo.id} {...todo} />
      ))}
    </div>
  );
};