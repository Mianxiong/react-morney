import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from '../../components/Input';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 14px 16px;
  font-size: 14px;
`;

type Props = {
  value: string;
  onChange: (value: string) => void;
}

const NoteSection: React.FC<Props> = (props) => {
  const note = props.value
  //非受控组件
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      props.onChange(e.target.value);
  };
  return (
    <Wrapper>
      <Input label="备注" type="text" value={note}
             onChange={onChange} placeholder="在这里添加备注">
        {/*<span>备注</span>*/}
        {/*<input type="text" placeholder="在这里添加备注"*/}
        {/*ref={refInput}*/}
        {/*defaultValue={note}*/}
        {/*onBlur={onBlur}/>*/}
      </Input>
    </Wrapper>
  );
};
export {NoteSection};