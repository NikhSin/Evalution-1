//store the products array in localstorage as "products"
var data=JSON.parse(localStorage.getItem("data"))||[]

function Product(t,d,p,i){
 this.type=t;
 this.description=d;
this.price=p;
this.image=i;
}

document.querySelector("#products").addEventListener("submit",storeproduct)

function storeproduct(){
let form=document.querySelector("#products")
let type=form.type.value
let description=form.desc.value
let price=form.price.value
let image=form.image.value
let global=new Product(type,description,price,image)
data.push(global)
localStorage.setItem("data",JSON.stringify(data))
}