
let userInfo=document.querySelector("#user_info");
let userData=document.querySelector("#user");
let links=document.querySelector("#links");
 if (localStorage.getItem("username")){
    links.remove()
  
    userInfo.style.display ="flex"
    userData.innerHTML=localStorage.getItem("username")

 }


 let logOutBtn = document.querySelector("#logout")
logOutBtn.addEventListener("click", function (){
    localStorage.clear();
 
    setTimeout(() => {
        window.location = "login.html";
    } , 1500)
})

  

//////////////////////////////////////////////////////



let iconCart = document.querySelector('.iconCart');
let cart = document.querySelector('.cart');
let container = document.querySelector('.container');
let close = document.querySelector('.close');

iconCart.addEventListener('click', function(){
    if(cart.style.right == '-100%'){
        cart.style.right = '0';
        container.style.transform = 'translateX(-300px)';
       navbar.style.transform = 'translateX(-300px)';
    }else{
        cart.style.right = '-100%';
        container.style.transform = 'translateX(0)';
    }
})
close.addEventListener('click', function (){
    cart.style.right = '-100%';
    container.style.transform = 'translateX(0)';
})


// const addDataToCart = () => {
//     localStorage.setItem('listCart', JSON.stringify( listCart ));
//     }


let products = null;
// get data from file json
fetch('product.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();
})

//show datas product in list 
function addDataToHTML(){
    // remove datas default from HTML
    let listProductHTML = document.querySelector('.listProduct');
  
    // add new datas
    if(products != null) // if has data
    {
        products.forEach(product => {
           
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
         let isDisabled=   localStorage.getItem('addCart_${product.id}')==='true';
            newProduct.innerHTML = 
            `<img src="${product.image}" alt="">
            <h2>${product.name}</h2>
            <h2>${product.title}</h2>
            <div class="price">$${product.price}
           
            <button class="addCart" id="addCart_${product.id}" onclick="addCart(${product.id},this)"${isDisabled ? 'disabled style="background-color:black;"':''}>Add To Cart</button>
            <button class="addFav"   onclick="addFav(${product.id},this)"><i class="far fa-heart fav addFav"></i> </button>
           `;
           
            listProductHTML.appendChild(newProduct);
          

        });
    }
}






let listCart = [];

function checkCart() {
  const localStorageValue = localStorage.getItem('listCart');
  if (localStorageValue) {
    listCart = JSON.parse(localStorageValue);
  } else {
    listCart = [];
  }
}

checkCart();

const addCartToMemory = () => {
    localStorage.setItem('listCart', JSON.stringify(listCart));

    }
    
   
addCartToHTML();
function addCart($idProduct,button){
  
    let productsCopy = JSON.parse(JSON.stringify(products));

        
    //// If this product is not in the cart
    if(!listCart[$idProduct]) 
    {
        listCart[$idProduct] = productsCopy.filter(product => product.id == $idProduct)[0];
        listCart[$idProduct].quantity = 1;
        button.disabled=true;
button.style.backgroundColor="black";
localStorage.setItem('addCart_${$idProduct}','true');

    }else{
        //If this product is already in the cart.
        //I just increased the quantity
        listCart[$idProduct].quantity++;
       
    }
   
    // document.cookie = "listCart=" + JSON.stringify(listCart) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
    
    addCartToMemory ();
    addCartToHTML();
    addDataToCart ();
  

}
// function disableCartButtons(){
//     products.forEach( product=>{
//             const button=document.getElementsByClassName('addCart${product.id}');
//             if(localStorage.getItem('cartButton${product.id}')){
//                 button.disabled=true;
//                 button.style.backgroundColor="black";
//             }else{
//                 button.disabled=false;
//                 button.style.backgroundColor="";
//             }
//         }
//     )
//     addCartToMemory ();
//     addCartToHTML();
// }
// disableCartButtons();

function addCartToHTML(){
    // clear data default
    let listCartHTML = document.querySelector('.listCart');
    listCartHTML.innerHTML = '';
    // let cartButtons=document.querySelectorAll('.addCart');
    // cartButtons.forEach(button=>{button.addEventListener('click',function(){
    //     this.classList.toggle('active');
    // })})
    // localStorage.setItem('cartButtons',true);
    let totalHTML = document.querySelector('.totalQuantity');
    let totalQuantity = 0;
    // if has product in Cart
    if(listCart){
        listCart.forEach(product => {
            if(product){
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML = 
                    `<img src="${product.image}">
                    <div class="content">
                        <div class="name">${product.name}</div>
                        <div class="price">$${product.price} / 1 product</div>
                    </div>
                    <div class="quantity">
                        <button  onclick="changeQuantity(${product.id}, '-')">-</button>
                        <span class="value">${product.quantity}</span>
                        <button onclick="changeQuantity(${product.id}, '+')">+</button>
                    </div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
            
            }
          
        })
      
    }
    
    totalHTML.innerText = totalQuantity;

}

function changeQuantity($idProduct, $type){
    switch ($type) {
        case '+':
            listCart[$idProduct].quantity++;
            break;
        case '-':
            listCart[$idProduct].quantity--;

            // if quantity <= 0 then remove product in cart
            if(listCart[$idProduct].quantity <= 0){
                delete listCart[$idProduct];
            }
            break;
    
        default:
            break;
    }
 
    // reload html view cart
    addCartToMemory ();
    addCartToHTML();
    addDataToCart ();
   
}





let  favBoxs  = [];

function checkFavCart() {
  const localStorageValue = localStorage.getItem('favBoxs');
  if (localStorageValue) {
    favBoxs  = JSON.parse(localStorageValue);
  } else {
    favBoxs  = [];
  }
}
checkFavCart();

const addFavToMemory = () => {
    localStorage.setItem('favBoxs', JSON.stringify(favBoxs));
    }
function addFav($idProduct ,button){
    button.disabled=true;
button.style.backgroundColor="black"
    let productsCopy1 = JSON.parse(JSON.stringify(products));
    //// If this product is not in the cart
    if(!favBoxs [$idProduct]) 
    {
        favBoxs [$idProduct] = productsCopy1.filter(product => product.id == $idProduct)[0];
        favBoxs [$idProduct].quantity = 1;
    }else{
        //If this product is already in the cart.
        //I just increased the quantity
        favBoxs [$idProduct].quantity++;
    }
    
    // document.cookie= "favBoxs =" + JSON.stringify(favBoxs ) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
    addFavToMemory();
    addFavToHTML();
}
addFavToHTML()

function addFavToHTML(){
    // clear data defaulet favButtons=document.querySelectorAll('.addFav');
 
    let favButtons=document.querySelectorAll('.addFav');
    favButtons.forEach(button=>{button.addEventListener('click',function(){
        this.classList.toggle('active');
    })})
    let FavHTML = document.querySelector('.favBoxs');
    // FavHTML.innerHTML = '';
    // let favButtons=document.querySelectorAll('.addFav');
    let totalHTML = document.querySelector('.totalQuantity');
    let totalQuantity = 0;
    // favButtons.forEach(button=>{button.addEventListener('click',function(){
    //     this.classList.toggle('active');
    // })})

    let favButtons1=document.querySelectorAll('.favBoxs.quantity1 button');
    favButtons1.forEach(button=>{button.classList.add('active');
        
    });
    // if has product in Cart
    if(favBoxs ){
        favBoxs .forEach(product => {
            if(product){
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML = 
                    `<img src="${product.image}">
                    <div class="content">
                        <div class="name">${product.name}</div>
                        <div class="price">$${product.price} / 1 product</div>
                    </div>
                    <div class="quantity1">
                        <button  onclick="changeQuantity(${product.id}, '-')">-</button>
                        <span class="value">${product.quantity}</span>
                        <button onclick="changeQuantity(${product.id}, '+')">+</button>
                    </div>`;
                    // FavHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
            }
        })
    }
    // totalHTML.innerText = totalQuantity;

    // let favButtons1=document.querySelectorAll('.favBoxs.quantity1 button');
    //             favButtons1.forEach(button=>{button.classList.add('active');
                    
    //             });
}


////////////////////////////////////////