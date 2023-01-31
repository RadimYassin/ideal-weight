import { useState } from "react";
import man from "./img/manfoto.png";
import womman from "./img/womanfoto.png";
function App() {

  const [value,setValue]=useState('')
  const [taile,setTail]=useState('')
  const [msg,setMsg]=useState('')
  const [result,setResult]=useState('')
  const handelsubmit=(e)=>{
    e.preventDefault()

     taile >150 || taile =='' ? setMsg('') :setMsg('error')
    
      if (value=='femme' &&  taile >150 ) {
        setResult((taile-100)-(taile-150)/2.5)
      }else if (value=="homme" &&  taile >150){
        setResult((taile-100)-(taile-150)/4)
      }else{
       console.log("erore");
      }
  }
  
  return (
    <div className="App">
        <form onSubmit={handelsubmit}>
      taile ( cm):<input  value={taile} onChange={(e)=>setTail(e.target.value)} type={'text'} /><br/>
       {msg}
        Genre :
        <input onChange={e=>setValue(e.target.value)} value={value} / ><br/>
         {value=='' ? <img style={{width:"100px"}} src={man} />:
                      value =='femme'? <img style={{width:"100px"}} src={womman} />: 
                       <img style={{width:"100px"}} src={man} />}
       
   <br/>
        
       point ideal :{result && `${result} kg`} {isNaN(taile) && "tail doit etre un entie"}<br/>

       <button >calculer</button>

        </form>
    </div>
  );
}

export default App;
