import "../styles/login.css"

function login(navegando){
    
const loginContainer = document.createElement("section")
loginContainer.classList.add("loginContainer")
const loginSection = document.createElement("div")
loginSection.classList.add("loginSection")

const loginEstructure = `
<div class="loader">
        <div></div>
        <div></div>
        <div></div>
</div>
<div class="modalLogin">
  <form class="modalLoginForm">
      <h2>Login</h2>
      <div class="loginInfContainer">
        <img src="../../assets/user.png" class="formSpan"></img>
        <input type="text" placeholder="platzi@example.com" class="input input-email">
      </div>
      <div class="loginInfContainer">
        <img src="../../assets/candado-abierto.png" class="formSpan"></img>
        <input type="password" placeholder="*********" class="input input-password">
      </div>
      
      <button class="modalFormButton">Sign In</button>
  </form>
</div>
<nav>
    <img class="logoGameShop" src="../../assets/logoGameAncho.png" alt="logoGameShop">
    <img class="iconLogin" src="../../assets/user.png" alt="iconLogin">
</nav>
<div class="loginBodyContainer">
    <div class="imgLoginBodyContainer">
        <img class="ballImgLogin imgLoginBody" src="../../assets/ballMario.png" alt="ballImage">
        <img class="marioImgLogin imgLoginBody" src="../../assets/Mario.png" alt="marioImage">
    </div>
</div>
<div class="loginFooter">
    <p>Copyright© 2023 | Created by <a href="https://github.com/ElesisIzanami">Franz Cristhians Minaya</a></p>
</div>
` 
loginSection.innerHTML =loginEstructure
loginContainer.appendChild(loginSection)

const iconLogin = loginContainer.querySelector('.iconLogin')
const imgLoginBodyContainer = loginContainer.querySelector('.imgLoginBodyContainer')

const modalLogin = loginContainer.querySelector('.modalLogin')

iconLogin.addEventListener('click',()=>{
    console.log("HOLA xD")
    imgLoginBodyContainer.classList.add("blur-out-expand")
    modalLogin.classList.add("modalLoginActive")
    navegando("./shop")
})

return loginContainer
}

export default login;