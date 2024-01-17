import classes from "../TodoList/todoList.module.css";
// Создаю функцию отрисовки данных куда передаю спомошю props параметры:
export const TodoList = ({ id, todo, completed, userId, onDelete }) => {
  const deleteToDoTask = () => {
    onDelete(id);
  };

  return (
    <div className={classes.todoListWrapper}>
      {/* Создаем и в него через props опракидиваем значения что пришло нам с fetchAllToDose */}
      <p className={classes.todoListId}>ID:{id}</p>
      <p className={classes.todoListTodo}>DESCRIPTION:{todo}</p>
      <p className={classes.todoListCompleted}>{completed}</p>
      <p className={classes.todoListUserId}>USERID:{userId}</p>
      <button className={classes.btntodoListDone} onClick={deleteToDoTask}>
        Done
      </button>
    </div>
  );
};
