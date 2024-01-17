import { useEffect, useState } from "react";
import classes from "../Todo/todo.module.css";
import { TodoList } from "../TodoList/TodoList";

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

  // Создал функцию которая удолает пост по его ид:
  const handleDeleteTodo = (id) => {
    const updateTodos = allTodos.filter((todo) => todo.id !== id);
    setAllTodos(updateTodos);
  };

  return (
    <div className={classes.todoWrapper}>
      {/* возрошаем наш useState: allTodos уже с данными из fetch и спомошю map опракидиваем уже в отрисовку на сайте */}
      {allTodos.map((todo) => (
        // бером функчию TodoList где key снимает ошибку а  через spred operator опракидиваем данные {...todo}.
        <TodoList key={todo.id} {...todo} onDelete={handleDeleteTodo} />
      ))}
    </div>
  );
};
