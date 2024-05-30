// let listCart = [];
// function checkCart(){
//         var cookieValue = document.cookie
//         .split('; ')
//         .find(row => row.startsWith('listCart='));
//         if(cookieValue){
//             listCart = JSON.parse(cookieValue.split('=')[1]);
//         }
// }


let listCart = [];

function checkCart() {
  const localStorageValue = localStorage.getItem('listCart');
  if (localStorageValue) {
    listCart = JSON.parse(localStorageValue);
  } 
}
const addCartToMemory = () => {
    localStorage.setItem('listCart', JSON.stringify(listCart));
    }

checkCart();
addCartToHTML();
function addCartToHTML(){
    // clear data default
    let listCartHTML = document.querySelector('.returnCart .list');
    listCartHTML.innerHTML = '';

    let totalQuantityHTML = document.querySelector('.totalQuantity');
    let totalPriceHTML = document.querySelector('.totalPrice');
    let totalQuantity = 0;
    let totalPrice = 0;
    // if has product in Cart
    if(listCart){
        listCart.forEach(product => {
            if(product){
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML = 
                    `<img src="${product.image}"alt="image" width="100px;" >
                    <div class=" content">

                        <div class="name ">${product.name}</div>
                        
                        <div class="price" width="100px;" >$${product.price}</div>
                       
                    </div>
                <div class="quantity">
                <div><button class="product_min1"  onclick="changeQuantity(${product.id}, '-')">-</button> </div>
                  
                    <span class="quantity-span">${product.quantity}
                    </span>
                   
                    <div> <button class="product_min" onclick="changeQuantity(${product.id}, '+')">+</button> </div>
                </div>
                <div class="product_remove">
                <button class="delete-button product_remove" onClick="removeFromCart(${product.id})">Remove</button>
               </div>
                    
                   `;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
                totalPrice = totalPrice + (product.price * product.quantity);
            }
        })
    }
    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = '$' + totalPrice;
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
    // save new data in cookie
    // document.cookie = "listCart=" + JSON.stringify(listCart) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
    addCartToMemory ();
    // reload html view cart
    addCartToHTML();
    
}

function removeFromCart(id){
    delete listCart[id];
    addCartToMemory ();
    addCartToHTML();
}


  
 




/////////////////////////////////////////////////////////////////////


// let favBoxs = [];
// function checkFavCart(){
//         var cookieFavValue = document.cookie
//         .split('; ')
//         .find(row => row.startsWith('favBoxs='));
//         if(cookieFavValue){
//             favBoxs = JSON.parse(cookieFavValue.split('=')[1]);
//         }
// }


// checkFavCart();

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
addFavToHTML();
function addFavToHTML(){
    // clear data default
    let FavHTML = document.querySelector('.returnCart .list1');
    FavHTML.innerHTML = '';
    let favButtons=document.querySelectorAll('.addFav');
    favButtons.forEach(button=>{button.addEventListener('click',function(){
        this.classList.toggle('active');
    })})

    // let favButtons1=document.querySelectorAll('.favBoxs.quantity1 button');
    //             favButtons1.forEach(button=>{button.classList.add('active');
                    
    //             });
    // let totalQuantityHTML = document.querySelector('.totalQuantity');
    // let totalPriceHTML = document.querySelector('.totalPrice');
    // let totalQuantity = 0;
    // let totalPrice = 0;
    // if has product in Cart
    if( favBoxs){
        favBoxs.forEach(product => {
            if(product){
                
                let newFav = document.createElement('div');
                newFav.classList.add('item');
                newFav.innerHTML = 
                    `<img src="${product.image}"alt="image" width="100px;" >
                    <div class=" content">

                        <div class="name ">${product.name}</div>
                        
                        <div class="price" width="100px;" >$${product.price}</div>
                   
                    </div>
                 
                    <button class="addFav1 "  onClick="removeFromFav (${product.id})"><i class="fas fa-heart" style="color: red;"></i> </button>
                    
                    `;
                    FavHTML.appendChild( newFav);
                // totalQuantity = totalQuantity + product.quantity;
                // totalPrice = totalPrice + (product.price * product.quantity);
            }
        })
    }
    // totalQuantityHTML.innerText = totalQuantity;
    // totalPriceHTML.innerText = '$' + totalPrice;

    // let favButtons1=document.querySelectorAll('.favBoxs.quantity1 button');
    //             favButtons1.forEach(button=>{button.classList.add('active');
                    
    //             });
}


function removeFromFav(id){
    delete favBoxs[id];
    addFavToMemory ();
    addFavToHTML();
}

// if(document.readyState== 'loading'){
//     document.addEventListener('DOMContentLoaded',ready)
// }else
// {
//     ready();

// }



// function addFavToHTML(){
//     // clear data default
//     let FavHTML = document.querySelector('.returnCart .list1');
//     FavHTML.innerHTML = '';

//     let totalQuantityHTML = document.querySelector('.totalQuantity');
//     let totalPriceHTML = document.querySelector('.totalPrice');
//     let totalQuantity = 0;
//     let totalPrice = 0;
//     // if has product in Cart
//     if( favBoxs){
//         favBoxs.forEach(product => {
//             if(product){
//                 let newFav = document.createElement('div');
//                 newFav.classList.add('item');
//                 newFav.innerHTML = 
//                     `
//          <div id="carouselExampleCaptions" class="carousel slide " on>
//          <div class="carousel-indicators"> 
//          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${product.image}" class="active"
//         aria-current="true" aria-label="Slide 1"></button> </div>
//          <div class="carousel-inner ">
//      <div class="carousel-item active "> 
//      <img src="${product.image}"alt="image" width="100px;" >
//     <div class=" content">

                       
//     <div class="name ">${product.name}</div>
                        
//                         <div class="price" width="100px;" >$${product.price}</div>
                   
//                     </div>
                 
//                     <button class="addFav1"  onclick="addFav(${product.id})"><i class="far fa-heart fav "></i> </button>
//                     </div>
//                     </div> 
//                     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//                     <span class="carousel-control-prev-icon" aria-hidden="true">${product.id}</span>
//                     <span class="visually-hidden">Previous</span>
//                   </button>
//                   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//                     <span class="carousel-control-next-icon" aria-hidden="true">${product.id}</span>
//                     <span class="visually-hidden">Next</span>
//                   </button>
//                     </div>  `;
//                     FavHTML.appendChild( newFav);
//                 // totalQuantity = totalQuantity + product.quantity;
//                 // totalPrice = totalPrice + (product.price * product.quantity);
//             }
//         })
//     }
//     totalQuantityHTML.innerText = totalQuantity;
//     totalPriceHTML.innerText = '$' + totalPrice;
// }




// function changeQuantity1($idProduct, $type){
//     switch ($type) {
//         case '+':
//             favBoxs[$idProduct].quantity++;
//             break;
//         case '-':
//             favBoxs[$idProduct].quantity--;

//             // if quantity <= 0 then remove product in cart
//             if(favBoxs[$idProduct].quantity <= 0){
//                 delete favBoxs[$idProduct];
//             }
//             break;
    
//         default:
//             break;
//     }
//     // save new data in cookie
//     document.cookie = "favBoxs=" + JSON.stringify(favBoxs) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
//     // reload html view  cart
//     addFavToHTML();
// }
//////////////////////////////////////////
