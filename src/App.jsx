import './App.css';
import List from './components/List/List';
import Details from './components/Details/Details';
import { useState } from 'react';


function App() {
  const [infoApp, setInfoApp] = useState({})
  const [hidden, setHidden] = useState(true)

  const clickListItem =(info)=>{
      setInfoApp(prev=> prev=info)
      setHidden(prev => prev = false) 
  }

  const hiddenDetalisHandler =()=>{
    setHidden(prev => prev = true)
    setInfoApp(prev=> prev={})
  }

  console.log(infoApp)

  return (  
    <div className="App">
      <List clickListItem={clickListItem} />
      {!hidden && <Details info={infoApp} hiddenDetalisHandler={hiddenDetalisHandler}/>}      
    </div>
  );
}

export default App;
