import './Home.css'
import Tours from "../Tours/Tours";
function Home (props){
    const jData=props.jData;
    
    return (<div id='home'>
    
    <Tours jData={jData} />
    
    </div>
)}
export default Home;
