import "../styles/shop.css";
import { data} from '../lib/data';



function shop(navegateTo) {

  const userName = localStorage.getItem('userName');

  const shopContainer = document.createElement('section');
  shopContainer.classList.add('container-shop')
  const shopSection = document.createElement("div")
  shopSection.classList.add("containerInner-shop")

  const shopEstructure = 
  `
  <nav class="navShop">
    <img src="../../assets/icons/icon_menu.svg" alt="menu" class="menuHam">

    <div class="navbar-left">
      <img src="../../assets/logoGameAncho.png" alt="logo" class="nav-logo-shop">

      <ul>
        <li>
          <a class="navAllButton">All</a>
        </li>
        <li>
          <a class="navMmorpgButton">Mmorpg</a>
        </li>
        <li>
          <a class="navRacingButton">Racing</a>
        </li>
      </ul>
    </div>

    <div class="navbar-right">
      <ul>
        <li class="navbar-email">${userName}</li>
        <li class="navbar-shopping-car">
          <img src="../../assets/icons/icon_shopping_cart.svg" alt="shopping cart">
          <div class="shopping-car-count"></div>
        </li>
      </ul>
    </div>

    <div class="mobile-menu inactive">
      <ul>
        <li>
          <a>CATEGORIES</a>
        </li>
        <li>
          <a class="mobilAllButton">All</a>
        </li>
        <li>
          <a class="mobilRacingButton">Racing</a>
        </li>
        <li>
          <a class="mobilMmorpgButton">Mmorpg</a>
        </li>
      </ul>
      <ul>
        <li>
          <a class="mobilMyOrdersButton">My orders</a>
        </li>
      </ul>
  
      <ul>
        <li>
          <a class="email">${userName} 😆🎮</a>
        </li>
        <li>
          <a href="/" class="sign-out">Sign out</a>
        </li>
      </ul>
    </div>
  </nav>
  
  <div class="selectContainer">
    <label for="" class="labelSearch">
      <img src="../../assets/icons/search.png">
      <input class="inputSearch" type="text" placeholder="search to game">
    </label>
    <select class="selectButton">
      <option>Sort by :</option>
      <option value="lowest_to_higuest">Price from Lowest to Highest</option>
      <option value="higuest_to_lowest">Price from Highest to Lowest</option>
    </select>
  </div>
  
  <div class="shoppingContainer">
    <aside class="shoppingCarContainer inactive">
        <div class="title-container">
          <img src="../../assets/icons/right-arrow.png" alt="arrow">
          <p class="title">My order</p>
        </div>
    
        <div class="my-order-content">
            <div class="ordersCartContainers"></div>
            <div class="order">
              <p>Total</p>
              <p class="total-amount">$ 0</p>
            </div>

            <button class="buttonGoPay">
                Go Pay         
            </button>
        </div>    
    </aside>
    
    <aside class="productDetailContainer inactive">
      <div class="productDetailButtonClose">
        <img src="../../assets/icons/close-button.png" alt="close">
      </div>
      <img class="productDetailImg" alt="bike">
      <div class="productDetail">
        <p class="productDetailPrice"></p>
        <p class="productDetailName"></p>
        <p class="productDetailDescription"></p>
        <button class="productDetailAddButton">
          <img class="iconAddCart" src="../../assets/icons/carrito.png" alt="add to cart">
          Add to cart
        </button>
      </div>
    </aside> 
    <section class="main-container">
      <div class="cards-container"></div>
    </section>
  </div>
  `
  shopSection.innerHTML= shopEstructure;
  //mobilMenu Selectors//
  const mobilAllButton =shopSection.querySelector('.mobilAllButton');
  const mobilRacingButton =shopSection.querySelector('.mobilRacingButton');
  const mobilMmorpgButton =shopSection.querySelector('.mobilMmorpgButton');
  const mobilMyOrdersButton =shopSection.querySelector('.mobilMyOrdersButton');

  mobilAllButton.addEventListener('click',()=>{
    stateCardContainer="stateAll"
    renderProducts(data);
    cardsContainer.classList.remove('opacity')
    productDetailContainer.classList.add("inactive"); 
    mobileMenu.classList.add('inactive')
  })

  mobilRacingButton.addEventListener('click',()=>{
    stateCardContainer="stateRacing"
    renderProducts(data);
    cardsContainer.classList.remove('opacity')
    productDetailContainer.classList.add("inactive"); 
    mobileMenu.classList.add('inactive')
  })

  mobilMmorpgButton.addEventListener('click',()=>{
    stateCardContainer="stateMmorpg"
    renderProducts(data);
    cardsContainer.classList.remove('opacity')
    productDetailContainer.classList.add("inactive"); 
    mobileMenu.classList.add('inactive')
  });

  mobilMyOrdersButton.addEventListener('click',()=>{
    const isproductDetailClosed = productDetailContainer.classList.contains('inactive');
    const cardsContainerOpacity =cardsContainer.classList.contains('opacity')
      if(!isproductDetailClosed || !cardsContainerOpacity){
        productDetailContainer.classList.add("inactive");
        cardsContainer.classList.add('opacity')
    }else{  
      cardsContainer.classList.toggle("opacity")
    }
    shoppingCarContainer.classList.toggle("inactive")     
    mobileMenu.classList.add('inactive')
  });
  


  //nav selectors//
  const navRacingButton =shopSection.querySelector('.navRacingButton');
  const navAllButton =shopSection.querySelector('.navAllButton');
  const navMmorpgButton =shopSection.querySelector('.navMmorpgButton');

  const menuHam =shopSection.querySelector('.menuHam');
  const mobileMenu =shopSection.querySelector('.mobile-menu');
  const shoppingCar =shopSection.querySelector('.navbar-shopping-car');
  const countShoppingCart =shopSection.querySelector('.shopping-car-count');

  const shoppingCarContainer =shopSection.querySelector('.shoppingCarContainer');
  const cardsContainer =shopSection.querySelector('.cards-container');

  

  //Product Detail selectors//
  const productDetailContainer =shopSection.querySelector('.productDetailContainer');
  const productDetailButtonClose =shopSection.querySelector('.productDetailButtonClose');
  const productDetailImg =shopSection.querySelector('.productDetailImg');
  const productDetailPrice =shopSection.querySelector('.productDetailPrice');
  const productDetailName =shopSection.querySelector('.productDetailName');
  const productDetailDescription =shopSection.querySelector('.productDetailDescription');

  //shopping cart my Orders selectors//
  const ordersCartContainers =shopSection.querySelector('.ordersCartContainers');
  const buttonGoPay =shopSection.querySelector('.buttonGoPay');
  const totalAmount= shopSection.querySelector('.total-amount');

  let stateCardContainer="stateMmorpg"
  let arrayProductCart=[]
  let totalFinal =[]

  menuHam.addEventListener('click',()=>{
    const isShoppingCarContainerClosed = shoppingCarContainer.classList.contains('inactive');
    if(!isShoppingCarContainerClosed){
      shoppingCarContainer.classList.add("inactive");
  }
    mobileMenu.classList.toggle("inactive")
    cardsContainer.classList.remove("opacity")

  })

  navRacingButton.addEventListener('click',(e)=>{
    e.preventDefault()
    stateCardContainer="stateRacing"
    renderProducts(data);
    cardsContainer.classList.remove('opacity')
    productDetailContainer.classList.add("inactive"); 
  })

  navAllButton.addEventListener('click',(e)=>{
    e.preventDefault()
    cardsContainer.innerHTML=""
    stateCardContainer="stateAll"
    renderProducts(data);
   
    cardsContainer.classList.remove('opacity')
    productDetailContainer.classList.add("inactive"); 
  })

  navMmorpgButton.addEventListener('click',(e)=>{
    e.preventDefault()
    cardsContainer.innerHTML=""
    stateCardContainer="stateMmorpg"
    renderProducts(data); 
    cardsContainer.classList.remove('opacity')
    productDetailContainer.classList.add("inactive");   
  })

  shoppingCar.addEventListener('click',()=>{
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isproductDetailClosed = productDetailContainer.classList.contains('inactive');
    const cardsContainerOpacity =cardsContainer.classList.contains('opacity')
      if(!isMobileMenuClosed || !isproductDetailClosed || !cardsContainerOpacity){
        mobileMenu.classList.add("inactive");
        productDetailContainer.classList.add("inactive");
        cardsContainer.classList.add('opacity')
    }else{  
      cardsContainer.classList.toggle("opacity")
    }
    shoppingCarContainer.classList.toggle("inactive")    
  })
  
  productDetailButtonClose.addEventListener('click',()=>{
    productDetailContainer.classList.add("inactive");  
    cardsContainer.classList.remove('opacity')
  })



//RENDER CARDS --MAIN CONTAINER//
function renderProducts(arr){
  cardsContainer.innerHTML=""
  let filteredArray=[];

  if (stateCardContainer==='stateMmorpg'){
    filteredArray = arr.filter(element => element.type === 'mmorpg');
  }
  if (stateCardContainer==='stateRacing'){
    filteredArray = arr.filter(element => element.type === 'racing');
  }
  if (stateCardContainer==='stateAll'){
    filteredArray = arr;
  }
    
  filteredArray.forEach( (product) => { 
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

      const productCardImg = document.createElement('img');
      productCardImg.setAttribute('src',product.image);
      productCardImg.classList.add('product-image');

      const productCardInfo = document.createElement('div');
      productCardInfo.classList.add('product-info');
   
      const productCardInfoDiv = document.createElement('div');
      productCardInfoDiv.classList.add('product-info-div');

          const productPrice = document.createElement('p');
          productPrice.innerText = '$ ' + product.price;
          
          const productName = document.createElement('p');
          productName.innerText = product.name;

      const iconAddCart = document.createElement('img');
      iconAddCart.classList.add("iconAddCart");
      iconAddCart.setAttribute('src','../../assets/icons/carrito.png');
      iconAddCart.addEventListener("click",()=>{
        console.log("boton add car")
          renderMyOrder(product);
      });                
            
      productCardInfoDiv.appendChild(productPrice);
      productCardInfoDiv.appendChild(productName);
      productCardInfo.appendChild(productCardInfoDiv);
      productCardInfo.appendChild(iconAddCart);    
      productCard.appendChild(productCardImg);
      productCard.appendChild(productCardInfo);   
      cardsContainer.appendChild(productCard);       

      productCardImg.addEventListener('click',()=>{
          productDetailContainer.classList.remove('inactive')   
          productDetailImg.setAttribute('src',product.image)
          productDetailPrice.innerText="$ "+product.price
          productDetailName.innerText=product.name
          productDetailDescription.innerText=product.description

          productDetailContainer.classList.add("blur-in-expand");

          productDetailContainer.classList.remove('inactive');
          shoppingCarContainer.classList.add('inactive');
          mobileMenu.classList.add("inactive");
          cardsContainer.classList.add("opacity");
      });
  });
}

renderProducts(data);

///INPUT and SELECT///
const inputSearch = shopSection.querySelector('.inputSearch');
inputSearch.addEventListener('keyup',(e)=>{
  const keyword= e.target.value;
  const dataFilterSearch= data.filter((game) => {
    return game.name.toLowerCase().includes(keyword.toLowerCase());
  });
  renderProducts(dataFilterSearch)
})

const selectButton = shopSection.querySelector('.selectButton');

function filterPriceMenor(data){
  const sortPriceMenor = data.sort((a, b) => a.price - b.price);
  return sortPriceMenor;
}

function filterPriceMayor(data){
  const sortPriceMayor = data.sort((a, b) => b.price - a.price);
  return sortPriceMayor;
}

selectButton.addEventListener('change',()=>{
    productDetailContainer.classList.add("inactive");
    shoppingCarContainer.classList.add('inactive'); 
    cardsContainer.classList.remove("opacity");
    mobileMenu.classList.add("inactive");

    if (selectButton.value === "lowest_to_higuest" && stateCardContainer){
      const dataFilterMenor= filterPriceMenor(data);
      renderProducts(dataFilterMenor)
    }
    else if (selectButton.value === "higuest_to_lowest" && stateCardContainer){
      const dataFilterMayor= filterPriceMayor(data);
      renderProducts(dataFilterMayor)
    }else{
      renderProducts(data)
    }
  })


function renderMyOrder(product){
  const ordersCartBox = document.createElement('div')
  ordersCartBox.classList.add('shopping-cart')

  const imgMyOrder = document.createElement("img");
  imgMyOrder.setAttribute("src", product.image);
  imgMyOrder.classList.add('shopping-cart-img')

  const productNameMyOrder = document.createElement("p");
  productNameMyOrder.innerHTML =  product.name;

  const productPriceMyOrder = document.createElement("p");
  productPriceMyOrder.innerHTML = "$ "+ product.price;
  
  const imgIconDelete = document.createElement("img");
  imgIconDelete.setAttribute("src", "../../assets/icons/borrar.png");
  imgIconDelete.classList.add('closeIcon')

  ordersCartBox.appendChild(imgMyOrder);
  ordersCartBox.appendChild(productNameMyOrder);
  ordersCartBox.appendChild(productPriceMyOrder);
  ordersCartBox.appendChild(imgIconDelete);
  ordersCartContainers.appendChild(ordersCartBox);

  /*---- Actualizamos la cantidad de productos y sumamos el resultado.*/
  
  console.log("totalAmount: ",totalAmount)
  totalAmount.innerHTML = '$ 0.00'
   
  countShoppingCart.innerHTML = ordersCartContainers.childElementCount;

  totalAmount.innerHTML = Number(totalAmount.innerHTML.substring(1)) + product.price;
  arrayProductCart.push(Number(totalAmount.innerHTML));

  totalAmount.innerHTML ="$ "+ sumProducts(arrayProductCart);
  console.log("arrayProductCart",arrayProductCart)
  console.log(sumProducts(arrayProductCart))

  totalFinal.push(sumProducts(arrayProductCart))
  if(totalFinal.length>1){
      totalFinal.shift()
  }

  console.log("totalFinal SUMANDO++++++++",totalFinal)

   ///Elimina producto de My Order* y actualiza eldato en el carrito///
   
   imgIconDelete.addEventListener("click", ()=>{
      console.log("eliminando")
      ordersCartBox.remove();
      countShoppingCart.innerHTML=ordersCartContainers.childElementCount;

      const getTotalsArray = document.querySelectorAll(".total-amount");// nodo o lista de los elementos con esa clase

      const getTotalNumber = Number(getTotalsArray[0].innerHTML.substring(1));//getTotal[0].innerHTML = totalAmount.innerHTML
     
      let totalRest= getTotalNumber - product.price;
      getTotalsArray[0].innerHTML = "$ " + (getTotalNumber - product.price);

      totalFinal.push(totalRest)
      totalFinal.shift()
      console.log("totalFinal RESTANDO--------: ",totalFinal)
      
      arrayProductCart.pop(); 
    
  })
  
}

function sumProducts(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
  }
  return sum;
}

buttonGoPay.addEventListener('click',()=>{

  console.log("viajando")
  console.log("totalFinal desde GOPAY",totalFinal)
  navegateTo('/pay')
 

})

  
  

  
  /* const h1 = document.createElement('h1');
  h1.textContent = `Bienvenido, ${email}${price}`; */

  shopContainer.appendChild(shopSection);
  
  return shopContainer;
}

export default shop;