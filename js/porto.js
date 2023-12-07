// Script Pre-load
document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector( 
        "body").style.visibility = "hidden"; 
        document.querySelector(
        "body").style.overflowX = "hidden";
        document.querySelector( 
        "#pre-loader").style.visibility = "visible"; 
    } else { 
        document.querySelector(
        "body").style.overflowX = "hidden";
        document.querySelector( 
        "body").style.visibility = "visible"; 
        document.querySelector( 
        "#pre-loader").style.display = "none"; 
    } 
}; 