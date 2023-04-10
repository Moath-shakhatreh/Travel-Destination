import './Tour.css'
function Tour (props){
    function doSomthing (){
        console.log('hi *-*')
    }
    return (
     <>
     <div id='card1'>
      <p>{props.name}</p> 
      <img src={props.image} alt={props.name}/>
      </div>     
     </>

    )
}
export default Tour;
