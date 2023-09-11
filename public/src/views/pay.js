import "../styles/pay.css"


function pay(navegateTo) {
    const payContainer = document.createElement('section');
    payContainer.classList.add('container-pay');
    const paySection = document.createElement("div")
    paySection.classList.add("containerInner-pay")

    const payEstructure=`<h1>PAY WELCOME</h1>`;

    paySection.innerHTML=payEstructure;

    payContainer.appendChild(paySection);

    return payContainer
}

export default pay