// let getCode= ()=>{
//     let randomCode = Math.floor(Math.random()*16777215);
//     console.log(randomCode);
//     // document.getElementById("input").innerHTML=randomCode;
//     // document.getElementById("input").innerText=randomCode;
//     document.getElementById("input").innerHTML=randomCode;

// }

// document.getElementById("click").addEventListener(
//     "click",
//     getCode
// )
// //initial call.
// getCode();

let getColor=()=>{
 
    let getcode = Math.floor(Math.random()*16777215);
    // console.log(getcode);
    let getColor = "#" + getcode.toString(10);
    // console.log(getColor);
    // document.body.style.backgroundColor = getColor;
    // document.getElementById("input").innerText=getColor;
    document.getElementById("text").innerText=getcode;
    // inputs[0].value = Math.floor((getColor));
    console.log(getcode)

    
    }
        document.getElementById("click").addEventListener(
            "click",
            getColor
        )
      
    getColor();
    