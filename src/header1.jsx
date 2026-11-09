import React from "react";
function Headerr(){
    return(
        <>
        <div style={{background:"blue", color:"white", width:"100%", height:"80px", display:"flex", textAlign:"center", justifyContent:"space-between"}}>
            <h1>Mini mart.</h1>
            <nav style={{color:"blaxk"}}>
            <a href="#">Home</a>
            <a href="#">product</a>
            <a href="#">about</a>
              </nav>
        </div>
        </>
    )
}
export default Headerr;