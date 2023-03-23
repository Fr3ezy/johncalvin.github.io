// Script Pre-load
document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector( 
        "body").style.visibility = "hidden"; 
        document.querySelector( 
        "#pre-loader").style.visibility = "visible"; 
    } else { 
        document.querySelector( 
        "#pre-loader").style.display = "none"; 
        document.querySelector( 
        "body").style.visibility = "visible"; 
    } 
}; 