import React from 'react';
import { Todo } from '../modules/todos';
import TodoItem from './TodoItem';
import styled from 'styled-components';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  font-size: 1rem;
color:grey;
`;
type TodoListProps = {
  todos: Todo[],
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}


function TodoList({ todos, onToggle, onRemove }: TodoListProps) {
  if (todos.length === 0) return <TodoListBlock><p>등록된 일이 없습니다.</p></TodoListBlock>
  return (
    <TodoListBlock>
      <div>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove}></TodoItem>
        ))}
      </div>
    </TodoListBlock>
  );
}

export default React.memo(TodoList);
//?