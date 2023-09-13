const btnProduct = document.getElementById('btn__product');
const btnCompany = document.getElementById('btn__company');
const btnConnect = document.getElementById('btn__connect');

const productSub = document.getElementById('product__submenu');
const companySub = document.getElementById('company__submenu');
const connectSub = document.getElementById('connect__submenu');

const arrowProduct = document.getElementById('arrow_product');
const arrowCompany = document.getElementById('arrow_company');
const arrowConnect = document.getElementById('arrow_connect');

const btnMenu = document.getElementById('btn-menu');
const nav = document.getElementById('header-left');

let productShow = false;
let companyShow = false;
let connectShow = false;

let menuShow = false;

btnProduct.addEventListener('click',()=>{
    if(!productShow){
        productSub.style.display = "block";
        companySub.style.display = "none";
        connectSub.style.display = "none";
        productShow = true;
        arrowProduct.style.transform = 'rotate(180deg)';
    }
    else{
        productSub.style.display = "none";
        productShow = false;
        arrowProduct.style.transform = 'rotate(0deg)';
    }
})

btnCompany.addEventListener('click',()=>{
    if(!companyShow){
        companySub.style.display = "block";
        productSub.style.display = "none";
        connectSub.style.display = "none";
        companyShow = true;
        arrowCompany.style.transform = 'rotate(180deg)';
    }
    else{
        companySub.style.display = "none";
        companyShow = false;
        arrowCompany.style.transform = 'rotate(0deg)';
    }
})

btnConnect.addEventListener('click',()=>{
    if(!connectShow){
        connectSub.style.display = "block";
        productSub.style.display = "none";
        companySub.style.display = "none";
        connectShow = true;
        arrowConnect.style.transform = 'rotate(180deg)';
    }
    else{
        connectSub.style.display = "none";
        connectShow = false;
        arrowConnect.style.transform = 'rotate(0deg)';
    }
});

btnMenu.addEventListener('click', ()=>{
    if(!menuShow){
        nav.style.display = "flex";
        menuShow = true;
    }
    else{
        nav.style.display = "none";
        menuShow = false;
    }
});


