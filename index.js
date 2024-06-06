var currentvalue=1;
document.getElementById('qua').innerHTML=currentvalue;

function decrement(){
    if(currentvalue > 1)
        {
            (currentvalue=currentvalue - 1);
        document.getElementById('qua').innerHTML=currentvalue;
}
}


var currentvalue1=1;
document.getElementById('qua1').innerHTML=currentvalue;

function decrement1(){
    if(currentvalue1 > 1)
        {
            (currentvalue1=currentvalue1 - 1);
        document.getElementById('qua1').innerHTML=currentvalue1;
}
}

var currentvalue3=1;
document.getElementById('qua3').innerHTML=currentvalue3;

function decrement3(){
    if(currentvalue3 > 1)
        {
            (currentvalue3=currentvalue3 - 1);
        document.getElementById('qua3').innerHTML=currentvalue3;
}
}

var cart =0;


// var icon = document.querySelector('.ri-shopping-cart-line');
//  icon.addEventListener("click",function(){
//    window.location.href="./div.html";
//  });



//  var pratik = document.getElementById('ani');
//  var rushi = document.getElementById('ru');



//  var mainDiv = document.querySelector('.main');
//  var productCart = document.querySelector('.productCart');
//  var product = document.querySelector('.product')
//  var appendDiv = document.querySelector('.append-div');

 
//  function saveContent() {
//      localStorage.setItem('appendDivHTML', appendDiv.outerHTML);
//  }
 
//  productCart.addEventListener('click', () => {
//      saveContent();
//      location.href = "div.html";
//  });
 

var cartButton = document.querySelector('.cart');
var nwDiv = document.querySelector('.produ');

cartButton.addEventListener("click", function() {
    nwDiv.classList.toggle('pro');
})

function addtocart(){
  
    var mainClass = document.querySelector('.main-right.right-first').parentElement.cloneNode(true);

    
    document.getElementById("proj").appendChild(mainClass);
}




 var appendDiv = document.querySelector('.append-div');
 var clone = appendDiv.cloneNode(true);
 CSSMathProduct.appendChild(clone);