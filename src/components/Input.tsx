import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    display: flex;
    align-items: center;

    > span {
      margin-right: 16px;
      white-space: nowrap
    }

    > input {
      display: block;
      width: 100%;
      height: 44px;
      background: none;
      border: none;
    }
`

type Props = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = (props)=>{
  const {label, children,...rest} = props;
  return (
    <Label>
      <span>{props.label}</span>
      {/*受控组件*/}
      {/*<input type="text" placeholder="在这里添加备注"*/}
      {/*       value={note} onChange={(e) => setNote(e.target.value)}/>*/}
      {/*非受控组件*/}
      {/*<input type={props.type} placeholder={props.placeholder}*/}
      {/*       defaultValue={props.defaultValue}*/}
      {/*        onBlur={props.onBlur}/>*/}
      <input {...rest}/>
    </Label>
  )
}

export {Input}

