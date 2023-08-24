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
})

return loginContainer
}

export default login;
