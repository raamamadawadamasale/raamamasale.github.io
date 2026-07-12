// RAAMA CART SYSTEM


let cart = JSON.parse(localStorage.getItem("raamaCart")) || [];


// CART COUNT UPDATE

function updateCartCount(){

let count = 0;

cart.forEach(item=>{
count += item.quantity;
});


let cartNumber = document.getElementById("cart-count");


if(cartNumber){

if(count > 0){

cartNumber.style.display="flex";
cartNumber.innerHTML=count;

}
else{

cartNumber.style.display="none";

}

}

}



// ADD TO CART

function addToCart(name,price,quantity){


let exist = cart.find(item=>item.name===name && item.price===price);



if(exist){

exist.quantity += quantity;

}
else{


cart.push({

name:name,
price:price,
quantity:quantity

});


}



localStorage.setItem(
"raamaCart",
JSON.stringify(cart)
);



updateCartCount();



alert(name+" added to cart");

}




// BUY NOW

function buyNow(name,price,quantity){


addToCart(name,price,quantity);


window.location.href="checkout.html";


}


// PAGE LOAD

updateCartCount();






// SHOW CART PAGE


function showCart(){


    let box=document.getElementById("cart-items");
    
    
    if(!box) return;
    
    
    
    let total=0;
    // SHOW CART PAGE


function showCart(){


    let box=document.getElementById("cart-items");
    
    
    if(!box) return;
    
    
    
    let total=0;
    
    
    box.innerHTML="";
    
    
    
    cart.forEach((item,index)=>{
    
    
    total += item.price * item.quantity;
    
    
    
    box.innerHTML += `
    
    
    <div class="cart-item">
    
    
    <h3>${item.name}</h3>
    
    
    <p>
    Price : ₹${item.price}
    </p>
    
    
    <p>
    Quantity : ${item.quantity}
    </p>
    
    
    
    <button onclick="removeCart(${index})">
    
    REMOVE
    
    </button>
    
    
    
    </div>
    
    
    `;
    
    
    
    });
    
    
    
    document.getElementById("cart-total").innerHTML=
    
    "Total : ₹"+total;
    
    
    
    }
    
    
    
    
    
    function removeCart(index){
    
    
    cart.splice(index,1);
    
    
    localStorage.setItem(
    
    "raamaCart",
    
    JSON.stringify(cart)
    
    );
    
    
    showCart();
    
    updateCartCount();
    
    
    }
    
    
    
    
    
    
    function checkout(){
    
    
    window.location.href="checkout.html";
    
    
    }
    
    
    
    
    document.addEventListener(
    
    "DOMContentLoaded",
    
    function(){
    
    
    showCart();
    
    
    }
    
    );
    
    box.innerHTML="";
    
    
    
    cart.forEach((item,index)=>{
    
    
    total += item.price * item.quantity;
    
    
    
    box.innerHTML += `
    
    
    <div class="cart-item">
    
    
    <h3>${item.name}</h3>
    
    
    <p>
    Price : ₹${item.price}
    </p>
    
    
    <p>
    Quantity : ${item.quantity}
    </p>
    
    
    
    <button onclick="removeCart(${index})">
    
    REMOVE
    
    </button>
    
    
    
    </div>
    
    
    `;
    
    
    
    });
    
    
    
    document.getElementById("cart-total").innerHTML=
    
    "Total : ₹"+total;
    
    
    
    }
    
    
    
    
    
    function removeCart(index){
    
    
    cart.splice(index,1);
    
    
    localStorage.setItem(
    
    "raamaCart",
    
    JSON.stringify(cart)
    
    );
    
    
    showCart();
    
    updateCartCount();
    
    
    }
    
    
    
    
    
    
    function checkout(){
    
    
    window.location.href="checkout.html";
    
    
    }
    
    
    
    
    document.addEventListener(
    
    "DOMContentLoaded",
    
    function(){
    
    
    showCart();
    
    
    }
    
    );