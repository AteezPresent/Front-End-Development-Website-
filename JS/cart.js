//* Add to Cart*//
//* Reffrenced from https://codepen.io/chrisachinga/pen/MWwrZLJ?editors=0010*//
id="Latte".addItemToCart = function(name, price, count) {
for(var item in cart){
    if(cart[item].name === name) {
        cart[item].count ++;
        saveCart ();
        return;
    }
}
var item = new Item(name, price, count);
cart.push(item);
saveCart();
}



   

    
    
    