import React, {useState, useEffect} from "react";


// use useEfect hook to 
export default function SignOutForm({conditionalRender}){

    console.log(conditionalRender)
    const [signOut, setSignOut] = useState(false);

    
    return (
        <div> 
            <button onClick={()=> conditionalRender()}>Sign me out</button>
        </div>
    )
}