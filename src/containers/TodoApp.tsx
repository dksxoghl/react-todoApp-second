import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from '../modules';
import { addTodo, toggleTodo, removeTodo } from '../modules/todos';
import TodoInsert from '../components/TodoInsert'
import TodoList from '../components/TodoList';
import styled from 'styled-components';
import TodoHead from '../components/TodoHead'

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function TodoApp() {
    const todos= useSelector((state: RootState)=>state.todos);
    const dispatch=useDispatch();
    const onInsert=(text:string)=>{
        dispatch(addTodo(text));
    }
    const onToggle=(id:number)=>{
        dispatch(toggleTodo(id));
    }
    const onRemove=(id:number)=>{
        dispatch(removeTodo(id));
    }

  return (
    <>
     <TodoTemplateBlock>
       <TodoHead todos={todos}></TodoHead>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}></TodoList>
      </TodoTemplateBlock>
    </>
  );
}

export default TodoApp;
//<>  >>??