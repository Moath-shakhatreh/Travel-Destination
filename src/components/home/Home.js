import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";
function Home (props){
    const jData=props.jData;
    
    return (<>
    <Header/>
    {
    jData.map(x=>{
       return <Tours name={x.name} image={x.image} />
    })
    }
    <Footer/>
    </>
)}
export default Home;
