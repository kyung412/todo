
/* eslint-disable react/prop-types */
import { useState } from 'react';
/**
 * TodoItem 컴포넌트
 * - 개별 할 일을 렌더링하고 수정, 완료 상태 변경, 삭제 기능을 제공
 * - 등록 시간(time)을 표시
 */
const TodoItem = ({ todo, updateTodo, toggleComplete, deleteTodo }) => { //수정상태 관리
  const [isEditing, setIsEditing] = useState(false);    //현재 수정 중인지 여부
  const [editText, setEditText] = useState(todo.text);  //수정 중인 텍스트 상태

  /**
   * 수정 동작을 처리하는 함수
   * - 수정 중인 상태에서 "등록" 버튼을 누르면 updateTodo 호출
   * - 수정 상태를 토글하여 "수정"과 "등록" 모드 전환
   */
  const handleEdit = () => {               
    if (isEditing && editText.trim()) { //수정 중이며 입력값이 유효한 경우
      updateTodo(todo.id, editText);    //부모 컴포넌트의 updateTodo 호출
    }
    setIsEditing(!isEditing);           //수정 상태 토글
  };

  return (
    <li>
      {/* 체크박스 : 완료 상태를 토글 */}
      <input
        type="checkbox"
        checked={todo.completed}                  //완료 상태 반영
        onChange={() => toggleComplete(todo.id)}  //클릭 시 완료 상태 반영
      />

      {/* 수정시 input 표시*/}
      {isEditing ? (
        //1. 수정 상태일 때 입력 필드 표시
        <div>
          <input
            type="text"
            value={editText}                              //수정 중인 텍스트 상태
            onChange={(e) => setEditText(e.target.value)} //입력값 변경시 상태 업데이트
          />
          <small style={{ display: 'block', color: 'gray' }}>
            등록 시간: {todo.time}
          </small>
          {todo.updatedTime && (
            <small style={{ display: 'block', color: 'gray' }}>
              마지막 수정 시간: {todo.updatedTime}
            </small>
          )}
          </div>
        


      ) : (

        //2. 수정 상태가 아닐때 텍스트 표시
        <div>
          <span
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} //완료된 항목은 취소선 적용
        >
          {todo.text}
          </span>

          <small style={{ display: 'block', color: 'gray' }}>
            등록 시간: {todo.time}
          </small>
          {todo.updatedTime && (
          <small style={{ display: 'block', color: 'gray' }}>
            마지막 수정 시간: {todo.updatedTime}
          </small>
        )}
        </div>
      )}

      {/* 수정/등록 버튼*/}
      <button onClick={handleEdit}> {isEditing ? '등록' : '수정'}</button>

      {/* 삭제 버튼 */}
      <button onClick={() => deleteTodo(todo.id)}>삭제</button>
    </li>
  );
};

export default TodoItem;