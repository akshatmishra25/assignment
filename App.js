import React from "react";
import Card from "../src/components/Card";
import "./App.css";
//used props in notes



function App(){

    return (
    <div className="wrapper">
        <Card 
            img = "https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            title = "Your everyday movie experience" 
            description = "Recommendations for ever and ever"  

        />
        
    </div> 
    )
}

export default App;