import {useState} from 'react';

//自定义Hook
const useTags = ()=>{
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行'])
  return {
    tags: tags,
    setTags: setTags
  }
}
export {useTags}