import './Tours.css'
import { Link } from "react-router-dom";
import Tour from "./Tour/Tour";
function Tours (props) {
   let jData = props.jData
   return (<>
    <div id='cardC'>
    {
    jData.map(x=>{

      return(
       <div id='mCard'>
         <Link to={`/city/${x.id}`}>
           <Tour name={x.name} image={x.image} keys={x.id} />
         </Link>
       </div>
      )
    })
    }
    </div> </>
  )
}
export default Tours;


