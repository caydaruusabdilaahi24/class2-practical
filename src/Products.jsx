import React from "react";
function Product(props){
    return(
        <>
        <div style={{border:"1px solid black",
             width:"200px",
              margin:"20px", 
              height:"150px", 
              borderRadius:"10px",
               display:"inline-block",
               padding:"20px", 
               color:"blue"}}>
        <p>{props.naame}</p>
        <h2>{props.Produc}</h2>
        <h3>{props.value}</h3>

        <button style={{margin:"10px", width:"200px", backgroundColor:"blue", color:"white" }}>View product</button>
        </div>
        </>
    )
}
export default Product