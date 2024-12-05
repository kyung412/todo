
/* eslint-disable react/prop-types */
import { useState } from 'react';
import style from "../css/TodoInput.module.css";

/**
 * TodoInput 컴포넌트
 * - 사용자가 새로운 할 일을 입력하고 추가하는 역할
 * - 입력 필드와 추가 버튼으로 구성
 */
const TodoInput = ({ addTodo }) => {
  const [input, setInput] = useState(''); //입력값 상태 관리

  /**
   * 할 일 추가 함수
   * - 입력값이 공백이 아닌 경우 App 컴포넌트의 addTodo 호출
   * - 추가 후 입력 필드 초기화
   */
  const handleAdd = () => {
    if (input.trim()) { //입력값이 공백이 아니면
      addTodo(input); //부모 컴포넌트의 addTodo 호출
      setInput(''); //입력 필드 초기화
    }
  };

  /**
   * Enter 키 입력 감지
   * - 사용자가 Enter 키를 누르면 handleAdd 함수 호출
   */
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAdd(); //Enter키를 누를 때만 실행
  };

  return (
    <div className={style.container}>
      {/* 입력 필드 */}
      <input
        type="text"
        value={input}                               //입력값 상태와 연결
        onChange={(e) => setInput(e.target.value)} //입력값 변경시 상태 업데이트 
        onKeyDown={handleKeyDown}                  //Enter 키 입력 처리
        placeholder="오늘 해야하는 일을 등록해 주세요🔥"
        className={style.todoInput}                
      />
      <button onClick={handleAdd}> 할 일 등록 </button>
    </div>
  );
};

export default TodoInput;