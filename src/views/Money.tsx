import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategorySection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {useRecords} from '../hooks/useRecords';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = '-' | '+'

const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
}

const CategoryWrapper = styled.div`
  background: #c4c4c4;
`

function Money() {
  const [selected, setSelected] = useState(defaultFormData);
  const {addRecord} = useRecords()
  type Selected = typeof selected
  const onChange = (obj: Partial<Selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };
  const submit = ()=>{
    if(addRecord(selected)) {
      alert('保存成功')
      setSelected(defaultFormData)
    }
  }
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setSelected({
  //       ...selected,
  //       amount: 2000
  //     });
  //   },3000)
  // },[])
  return (
    <MyLayout scrollTop={9999}>
      <TagsSection value={selected.tagIds}
                   onChange={tagIds => onChange({tagIds: tagIds})}>
      </TagsSection>
      <NoteSection value={selected.note} onChange={note => {
        onChange({
          note: note
        });
      }}/>
      <CategoryWrapper>
        <CategorySection value={selected.category} onChange={category => {
          onChange({
            category: category
          });
        }}/>
      </CategoryWrapper>
      <NumberPadSection value={selected.amount} onChange={amount => {
        onChange({
          amount: amount
        });
      }} onOk={submit}/>
    </MyLayout>
  );
}

export default Money;
