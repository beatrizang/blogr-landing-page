const btnProduct = document.getElementById('btn__product');
const btnCompany = document.getElementById('btn__company');
const btnConnect = document.getElementById('btn__connect');

const productSub = document.getElementById('product__submenu');
const companySub = document.getElementById('company__submenu');
const connectSub = document.getElementById('connect__submenu');

let productShow = false;
let companyShow = false;
let connectShow = false;

btnProduct.addEventListener('click',()=>{
    if(!productShow){
        productSub.style.display = "block";
        productShow = true;
    }
    else{
        productSub.style.display = "none";
        productShow = false;
    }
})

btnCompany.addEventListener('click',()=>{
    if(!companyShow){
        companySub.style.display = "block";
        companyShow = true;
    }
    else{
        companySub.style.display = "none";
        companyShow = false;
    }
})

btnConnect.addEventListener('click',()=>{
    if(!connectShow){
        connectSub.style.display = "block";
        connectShow = true;
    }
    else{
        connectSub.style.display = "none";
        connectShow = false;
    }
})


