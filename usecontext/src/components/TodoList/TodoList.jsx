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
