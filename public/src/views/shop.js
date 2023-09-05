import "../styles/shop.css";
import { mmorpg, racing } from '../lib/data';

function shop(navegateTo) {

  const email = localStorage.getItem('email');

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
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Others</a>
        </li>
      </ul>
    </div>

    <div class="navbar-right">
      <ul>
        <li class="navbar-email">${email}</li>
        <li class="navbar-shopping-car">
          <img src="../../assets/icons/icon_shopping_cart.svg" alt="shopping cart">
          <div class="shopping-car-count"></div>
        </li>
      </ul>
    </div>

    <div class="mobile-menu inactive">
      <ul>
        <li>
          <a href="/">CATEGORIES</a>
        </li>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Racing</a>
        </li>
        <li>
          <a href="/">Electronics</a>
        </li>
        <li>
          <a href="/">Furnitures</a>
        </li>
        <li>
          <a href="/">Toys</a>
        </li>
        <li>
          <a href="/">Other</a>
        </li>
      </ul>
  
      <ul>
        <li>
          <a href="/">My orders</a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
      </ul>
  
      <ul>
        <li>
          <a href="/" class="email">platzi@example.com</a>
        </li>
        <li>
          <a href="/" class="sign-out">Sign out</a>
        </li>
      </ul>
    </div>
  </nav>
  
  <div class="selectContainer">
    <select class="selectButton">
      <option value="menor_a_mayor">Menor a Mayor Precio</option>
      <option value="mayor_a_menor">Mayor a Menor Precio</option>
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

  //nav//
  const navRacingButton =shopSection.querySelector('.navRacingButton');
  const navAllButton =shopSection.querySelector('.navAllButton');
  const navMmorpgButton =shopSection.querySelector('.navMmorpgButton');

  const menuHam =shopSection.querySelector('.menuHam');
  const mobileMenu =shopSection.querySelector('.mobile-menu');
  const shoppingCar =shopSection.querySelector('.navbar-shopping-car');
  const countShoppingCart =shopSection.querySelector('.shopping-car-count');

  const shoppingCarContainer =shopSection.querySelector('.shoppingCarContainer');
  const cardsContainer =shopSection.querySelector('.cards-container');


  //Product Detail//
  const productDetailContainer =shopSection.querySelector('.productDetailContainer');
  const productDetailButtonClose =shopSection.querySelector('.productDetailButtonClose');
  const productDetailImg =shopSection.querySelector('.productDetailImg');
  const productDetailPrice =shopSection.querySelector('.productDetailPrice');
  const productDetailName =shopSection.querySelector('.productDetailName');
  const productDetailDescription =shopSection.querySelector('.productDetailDescription');

  //shopping cart my Orders//
  const ordersCartContainers =shopSection.querySelector('.ordersCartContainers');
  const totalAmount= shopSection.querySelector('.total-amount');

  menuHam.addEventListener('click',()=>{
    const isShoppingCarContainerClosed = shoppingCarContainer.classList.contains('inactive');
    if(!isShoppingCarContainerClosed){
      shoppingCarContainer.classList.add("inactive");
  }
    mobileMenu.classList.toggle("inactive")

  })

  navRacingButton.addEventListener('click',(e)=>{
    e.preventDefault()
    cardsContainer.innerHTML=""
    renderProducts(racing);
    cardsContainer.classList.remove('opacity')
    productDetailContainer.classList.add("inactive"); 
  })

  navAllButton.addEventListener('click',(e)=>{
    e.preventDefault()
    cardsContainer.innerHTML=""
    renderProducts(mmorpg);
    renderProducts(racing);
    cardsContainer.classList.remove('opacity')
    productDetailContainer.classList.add("inactive"); 
  })

  navMmorpgButton.addEventListener('click',(e)=>{
    e.preventDefault()
    cardsContainer.innerHTML=""
    renderProducts(mmorpg); 
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
    //cardsContainer.classList.remove('opacity')
    shoppingCarContainer.classList.toggle("inactive")
    
    
  })
  
  productDetailButtonClose.addEventListener('click',()=>{
    productDetailContainer.classList.add("inactive");
   
    cardsContainer.classList.remove('opacity')
  })

let arrayProductCart=[]

function renderProducts(arr){
  arr.forEach( (product) => {
  //CREATE CARDS --MAIN CONTAINER

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

renderProducts(mmorpg);


  
  const price = localStorage.getItem('precio');

  
  /* const h1 = document.createElement('h1');
  h1.textContent = `Bienvenido, ${email}${price}`; */

  shopContainer.appendChild(shopSection);
  
  return shopContainer;
}

export default shop;