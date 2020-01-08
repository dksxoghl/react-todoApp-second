import React, { CSSProperties } from 'react';
import { Todo } from '../modules/todos';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
type TodoItemProps = {
    todo: Todo;
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
}
interface Idone {

    done: boolean
}
const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffe2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
    ${Remove} {
      display: initial;
    }
  
`;

const CheckCircle = styled.div<Idone>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
        props.done &&
        css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div<Idone>`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
        props.done &&
        css`
      color: #ced4da;
    `}
`;

function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
    const handleToggle = () => {
        onToggle(todo.id);
    }
    const handleRemove = () => {
        onRemove(todo.id);
    }
    //onClick={handleToggle} 
    return (
        <TodoItemBlock>
           
                {/* <input type="checkbox" onClick={handleToggle}></input> */}
                <CheckCircle onClick={handleToggle} done={todo.done}>{todo.done && <MdDone />}</CheckCircle>
                <Text done={todo.done}>
                    {todo.text}
                </Text>
                {
                    todo.done ? <Remove>
                        <MdDelete onClick={handleRemove} />
                    </Remove> : null
                }
        </TodoItemBlock>
    );
}
// function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
//     const textStyle: CSSProperties = {
//         textDecoration: todo.done ? 'line-through' : 'none'
//     }
//     const removeStyle: CSSProperties = {
//         marginLeft: 8,
//         color: 'red'
//     }
//     const handleToggle = () => {
//         onToggle(todo.id);
//     }
//     const handleRemove = () => {
//         onRemove(todo.id);
//     }
//     //onClick={handleToggle} 
//     return (
//         <TodoItemBlock>
//         <div>
//             <input type="checkbox" onClick={handleToggle}></input>
//             <span  style={textStyle}>
//                 {todo.text}
//             </span>
//             {
//                 todo.done?  <span onClick={handleRemove} style={removeStyle}>
//                 (X)
//             </span> : null
//             }
//             {/* <span onClick={handleRemove} style={removeStyle}>
//                 (X)
//             </span> */}
//         </div> 
//         </TodoItemBlock>
//     );
// }

// export default TodoItem;
export default React.memo(TodoItem);