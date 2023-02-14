import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';
type newRecordItem = {
  tagIds: number[]
  note: string
  category: '+' | '-'
  amount: number
}
type RecordItem = newRecordItem & {
  createdAt: string // ISO 8601
}


const useRecords = ()=> {
  const [records, setRecords] = useState<RecordItem[]>([])

  useEffect(()=>{
    setRecords((JSON.parse(window.localStorage.getItem('records') || '[]')))
  },[])
  useUpdate(()=>{
    window.localStorage.setItem('records', JSON.stringify(records))
  },[records])
  const addRecord = (newRecord: newRecordItem) => {
    const record = {...newRecord,createdAt:(new Date()).toISOString()}
    setRecords([...records, record])
  }

  return {records,addRecord}
}

export  {useRecords}

