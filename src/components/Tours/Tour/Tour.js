import  { useState } from 'react';
function Tour (props){
    function doSomthing (){
        console.log('hi *-*')
    }
    return (
    <a onClick={doSomthing} href="/city/:id">
    <p>{props.name}</p>
    <p>ID={props.keys}</p> 
    <img src={props.image}/>
    </a>

    )
}
export default Tour;
