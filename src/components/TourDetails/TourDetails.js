import './TourDetails.css'
import { useParams } from "react-router";
import { useState } from "react";
const data = require('../../data/db.json')


const TourDetails = ()=>{
    let {id} = useParams() 
    const [readMore , setReadMore] = useState(false)

    return (
      <div id='tour'>
        {
          data.map(x=>{
            
            if(id===x.id){
                return(
                  <div id='card'>
                  <p id='main'>{x.name}</p>
                  <img src={x.image} />
                  <p>{x.price}</p>
                  <div>
                    {
                     
                     readMore? <>
                     <p>{x.info}</p>
                     <button onClick={()=>setReadMore(false)}>show less</button></>
                     :
                     <>
                     <p>{(x.info).substring(0,200)}</p> 
                     <button onClick={()=>setReadMore(true)}>shoe more</button>
                     </>

                    }

                  </div>
                  </div>  
                ) 
            }
           })
        }

      </div>
    )
}
export default TourDetails;