import "../styles/shop.css";

function shop(navegateTo) {
  const shopContainer = document.createElement('section');
  shopContainer.classList.add('Container')
  const shopSection = document.createElement("div")
  shopSection.classList.add("loginSection")

  const shopEstructure = 
  `
  <nav class="navShop">
    <img src="../../assets/icon_menu.svg" alt="menu" class="menuHam">

    <div class="navbar-left">
      <img src="../../assets/logoGameAncho.png" alt="logo" class="nav-logo-shop">

      <ul>
        <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/">Clothes</a>
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
          <a href="/">Others</a>
        </li>
      </ul>
    </div>

    <div class="navbar-right">
      <ul>
        <li class="navbar-email">platzi@example.com</li>
        <li class="navbar-shopping-cart">
          <img src="../../assets/icon_shopping_cart.svg" alt="shopping cart">
          <div class="shopping-cart-count"></div>
        </li>
      </ul>
    </div>

    <div class="desktop-menu inactive" >
        <ul>
          <li>
            <a href="/" class="title">My orders</a>
          </li>
    
          <li>
            <a href="/">My account</a>
          </li>
    
          <li>
            <a href="/">Sign out</a>
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
          <a href="/">Clothes</a>
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
  `
  shopSection.innerHTML= shopEstructure;

  
  
  
  
  
  
  
  
  
  
  
  
  
  const email = localStorage.getItem('email');
  const price = localStorage.getItem('precio');

  const h2 = document.createElement("h2");
  h2.textContent="HOLA aSOY H2"
  
  const h1 = document.createElement('h1');
  h1.textContent = `Bienvenido, ${email}${price}`;

  shopContainer.appendChild(shopSection);
  
  return shopContainer;
}

export default shop;