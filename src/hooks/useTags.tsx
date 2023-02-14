import {useEffect, useRef, useState} from 'react';
import {createId} from '../lib/createId';
import {useUpdate} from './useUpdate';

const defaultTags = [

];
//自定义Hook
const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if(localTags.length === 0) {
      localTags = [
        {id: createId(), name: '衣'}, {id: createId(), name: '食'},
        {id: createId(), name: '住'}, {id: createId(), name: '行'}
      ]
    }
    setTags(localTags)
  }, []); //parse,字符串变成对象。第一次渲染，aftermounted
  useUpdate(()=>{
    window.localStorage.setItem('tags', JSON.stringify(tags))
  },[tags])
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, obj: { name: string }) => {
    setTags(tags.map(tag =>
      tag.id === id ? {id, name: obj.name} : tag
    ));
    // const index = findTagIndex(id);
    // // 深拷贝 tags 得到 tagsClone
    // const tagsClone = JSON.parse(JSON.stringify(tags))
    // tagsClone.splice(index,1,{id:id,name:obj.name})
    // setTags(tagsClone)
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
    // const index = findTagIndex(id)
    // const tagsClone = JSON.parse(JSON.stringify(tags))
    // tagsClone.splice(index,1)
    // setTags(tagsClone)
  };
  const addTag = () => {
    const tagName = window.prompt('新标签的名称为');
    if (tagName !== null && tagName !== '') {
      setTags([...tags, {id: createId(), name: tagName}]);
    }
  };
  return {
    tags: tags,
    setTags: setTags,
    findTag: findTag,
    updateTag: updateTag,
    findTagIndex: findTagIndex,
    deleteTag: deleteTag,
    addTag: addTag
  };
};
export {useTags};