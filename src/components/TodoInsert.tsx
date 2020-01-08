import React, { useState, ChangeEvent, FormEvent, useCallback } from 'react';
import styled, { css } from 'styled-components';

type TodoInsertProps = {
    onInsert: (text: string) => void;
}
const InsertFormPositioner = styled.div`
  width: 100%;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 32px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 80%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;
const Button = styled.button`
  color: black;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  padding: 0.5rem;
  font-size: 1rem;
  width:20%
  color:grey;
  font-weight: 600;
  `;
function TodoInsert({ onInsert }: TodoInsertProps) {
    const [value, setValue] = useState('');
    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, []); // 컴포넌트가 처음 렌더링 될 때만 함수 생성
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        onInsert(value);
        setValue('');
    }
    return (
        <InsertFormPositioner>
            <InsertForm onSubmit={onSubmit}>
                <Input autoFocus value={value} placeholder="할 일을 입력해주세요~"
                    onChange={onChange}
                ></Input>
                <Button type="submit">등록</Button>
            </InsertForm>
        </InsertFormPositioner>
    );
}
// function TodoInsert({ onInsert }: TodoInsertProps) {
//     const [value, setValue] = useState('');
//     const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
//         setValue(e.target.value);
//     },[]); // 컴포넌트가 처음 렌더링 될 때만 함수 생성
//     const onSubmit = (e: FormEvent) => {
//         e.preventDefault();
//         onInsert(value);
//         setValue('');

//     }
//     return (
//         <form onSubmit={onSubmit}>
//             <input autoFocus value={value} placeholder="할일을 입력하시오"
//                 onChange={onChange}
//             ></input>
//             <button type="submit">등록</button>
//         </form>

//     );
// }
export default React.memo(TodoInsert);

//memo 왜안되지