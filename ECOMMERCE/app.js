const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Breville Impress",
        price: 879.99,
        colors: [
            {
                code: "lightgray",
                img: "./img/img/brevilleimpress-removebg-preview.png",
            },
            {
                code: "black",
                img: "./img/img/black-brev-impress.png",
            },
        ],
    },
    {
        id: 2,
        title: "Breville Express",
        price: 699.99,
        colors: [
            {
                code: "lightgray",
                img: "./img/img/brevexp-removebg-preview.png",
            },
            {
                code: "black",
                img: "./img/img/black-brev-express.png",
            },
        ],
    },
    {
        id: 3,
        title: "Capresso Café TS",
        price: 179.99,
        colors: [
            {
                code: "lightgray",
                img: "./img/img/capressocafe-removebg-preview.png",
            },
        ],
    },
    {
        id: 4,
        title: "Breville Bambino Plus",
        price: 299.99,
        colors: [
            {
                code: "lightgray",
                img: "./img/img/brevbambino-removebg-preview.png",
            },
            {
                code: "black",
                img: "./img/img/black-bambino.png",
            },
        ],
    },
    {
        id: 5,
        title: "De'Longhi Nespresso VertuoPlus Deluxe",
        price: 139.99,
        colors: [
            {
                code: "black",
                img: "./img/img/nespresso-removebg-preview.png"
            },
            {
                code: "lightgray",
                img: "./img/img/white-nespresso.png"
            },
        ],
    },
];

let chosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item,index)=> {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // change the chosen product
        chosenProduct = products[index]

        //change texts of currentProduct
        currentProductTitle.textContent = chosenProduct.title
        currentProductPrice.textContent = "$" + chosenProduct.price
        currentProductImg.src = chosenProduct.colors[0].img

        //assign new colors

        currentProductColors.forEach((color,index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = chosenProduct.colors[index].img
    });
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=> {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=> {
    payment.style.display="flex"
})

close.addEventListener("click",()=> {
    payment.style.display="none"
})