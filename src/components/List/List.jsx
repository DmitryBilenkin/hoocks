import './List.css'
import ListItem from '../ListItem/ListItem';
import { useState, useEffect } from 'react';


function List(props) {

  const [listData, setListData] = useState([]);
  const urlListGET = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'

  async function fetchList (url){
    const resp = await fetch(url)
    const data =  await resp.json()
    setListData(prev => prev = data) 
  }

  useEffect(()=>{
    fetchList(urlListGET)   
  }, [])

  return (  
    <ul className='list'>
      {listData.map((item => <ListItem key={item.id} id={item.id} name={item.name} clickListItem={props.clickListItem} />)) }
    </ul>    
  )
}

export default List;
