import "../styles/shop.css";

function shop(navegateTo) {
  const shopContainer = document.createElement("section");
  const email = localStorage.getItem('email');
  const price = localStorage.getItem('precio');
console.log("userNAME",email)
  const h2 = document.createElement("h2");
  h2.textContent="HOLA SOY H2"
  
  const h1 = document.createElement('h1');
  h1.textContent = `Bienvenido, ${email}${price}`;

  shopContainer.append(h1,h2);
  
  return shopContainer;
}

export default shop;