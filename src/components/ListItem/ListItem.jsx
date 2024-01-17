import './ListItem.css'
import { useEffect, useState } from 'react';

export default function ListItem(props) {

  const [info, setInfo] = useState({})


  const detailsHandler =()=>{
    props.clickListItem(info)
  }

  useEffect(()=>{
    setInfo({
      id: props.id,
      name: props.name
    })
  },[])


  return (
    <li className='list-item' onClick={detailsHandler}>{props.name}</li>
  )
}
