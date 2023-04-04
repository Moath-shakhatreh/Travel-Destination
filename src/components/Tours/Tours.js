// import App from "../../App";
import Tour from "./Tour/Tour";
function Tours (props) {
   let jData = props.jData
   return (<>
    {
    jData.map(x=>{
      return <Tour name={x.name} image={x.image} keys={x.id} />
    })
    } </>
   )
}
export default Tours;


