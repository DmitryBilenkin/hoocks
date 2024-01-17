import './Details.css'

import { useEffect, useState } from 'react'

export default function Details(props) {

    const [detailsData, setDetailsData] = useState(null)
    const [load, setLoad] = useState(true)

    const onClickHandler =()=>{
        props.hiddenDetalisHandler()
    }

    async function fetchDetails (id){ 
        try{
            const resp = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
            const data =  await resp.json()
            setDetailsData(prev => prev = data)
            setLoad(false)
        } catch(e) {
            console.error(e)
        }     
      }
    
    useEffect(()=>{
        setLoad(true)
        fetchDetails(props.info.id) 
    },[props.info.id])

  return (
    <>      
        {!load ? 
            <div className='details-container'>
                <div className='details__img-wrapper'>
                    <img className='details__img'src={detailsData.avatar} alt={'avatar'}/>
                </div>                
                <div className='details__item'>{detailsData.name}</div>
                <div className='details__item'>{`City: ${detailsData.details.city}`}</div>
                <div className='details__item'>{`Company: ${detailsData.details.company}`}</div>
                <div className='details__item'>{`Position: ${detailsData.details.position}`}</div>
                <div className='details__btn-hidden' onClick={onClickHandler} >X</div>
            </div>
        :
            <div>Loading...</div>            
        }        
    </>     
  )
}
