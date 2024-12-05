
/* eslint-disable react/prop-types */
import TodoItem from './TodoItem';
import "./css/TodoList.module.css";

/**
 * TodoList 컴포넌트
 * - todos 배열을 순회하며 각 할 일을 TodoItem 컴포넌트로 렌더링
 * - 각 할 일에 대해 수정, 완료 토글, 삭제 기능 전달
 */
const TodoList = ({ todos, updateTodo, toggleComplete, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}                   //고유 키로 id 전달
          todo={todo}                     //개별 할 일 데이터 전달
          time={todo.time}                //time 전달
          updateTodo={updateTodo}         //수정 함수 전달
          toggleComplete={toggleComplete} //완료 상태 토글 함수 전달
          deleteTodo={deleteTodo}         //삭제 함수 전달
        />
      ))}
    </ul>
  );
};

export default TodoList;