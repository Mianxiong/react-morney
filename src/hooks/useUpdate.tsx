import {useEffect, useRef} from 'react';

const useUpdate = (fn:()=>void,deps:any[])=>{
  const count = useRef(0);
  useEffect(() => {
    count.current += 1;
  });//每次render
  useEffect(() => {
    if (count.current > 1) {
      fn();
    }
  }, deps); // 每次修改都是一个新的对象才行
}
export {useUpdate}
