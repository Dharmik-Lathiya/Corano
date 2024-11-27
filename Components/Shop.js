const sil1 = {
  img: "Assets/s1.jpg",
  Name: "Silver Chain For Men",
  Dec: "This Is Silver",
  Price: 2000,
};
const sil2 = {
  img: "Assets/s2.jpg",
  Name: "Silver Chain For Men",
  Dec: "This Is Silver",
  Price: 2000,
};
const sil3 = {
  img: "Assets/s3.jpg",
  Name: "Silver Chain For Men",
  Dec: "This Is Silver",
  Price: 2000,
};

const gold1 = {
  img: "Assets/g1.jpg",
  Name: "Gold Chain For Men",
  Dec: "This Is Gold",
  Price: 2000,
};
const gold2 = {
  img: "Assets/g2.jpg",
  Name: "Gold Chain For Men",
  Dec: "This Is Gold",
  Price: 2000,
};
const gold3 = {
  img: "Assets/g3.webp",
  Name: "Gold Chain For Men",
  Dec: "This Is Gold",
  Price: 2000,
};

const Dai1 = {
  img: "Assets/d1.jpg",
  Name: "Daimand Chain For Men",
  Dec: "This Is Daimand",
  Price: 2000,
};
const Dai2 = {
  img: "Assets/d2.jpg",
  Name: "Daimand Chain For Men",
  Dec: "This Is Daimand",
  Price: 2000,
};
const Dai3 = {
  img: "Assets/d3.jpg",
  Name: "Daimand Chain For Men",
  Dec: "This Is Daimand",
  Price: 2000,
};

var silver = [];
silver.push(sil1, sil2, sil3, sil1, sil2, sil3);

var gold = [];
gold.push(gold1, gold2, gold3, gold1, gold2, gold3);

var Daimand = [];
Daimand.push(Dai1, Dai2, Dai3, Dai1, Dai2, Dai3);

let content = document.getElementById("ProductsDisplay");
let DiscriptedProducts = document.getElementById("ProductsDescriptedMode");
let smallProductsIcon = document.getElementById("smallproducts");

var selectValue;

function handleProductChange(value) {
  if (value === "silver") {
    Selectsilver();
    selectValue = value;
  } else if (value === "Diamond") {
    Selectdai();
    selectValue = value;
  } else if (value === "gold") {
    Selectgold();
    selectValue = value;
  }
  console.log("LastValue", selectValue);
}

content.addEventListener("load", Selectsilver());

DiscriptedProducts.addEventListener("click", () => {
  console.log("Global", selectValue);
  DiscriptedProducts.style.color = "var(--hover)";
  smallProductsIcon.style.color = "black";
  content.innerHTML = " ";
  var arr=[];
    if(selectValue==="Diamond"){
        for(let i=0;i<Daimand.length;i++){
         arr[i]=Daimand[i];
        }
    }
    else if(selectValue==="gold"){
      for(let i=0;i<gold.length;i++){
        arr[i]=gold[i];
        }
    }
    else{
      for(let i=0;i<silver.length;i++){
        arr[i]=silver[i];
        }
    }

   smallProductsIcon.addEventListener("click",()=>{
    DiscriptedProducts.style.color = "black";
  smallProductsIcon.style.color = "var(--hover)";
     if(selectValue==="Diamond"){
      Selectdai();
     }
     else if(selectValue==="gold"){
      Selectgold();
     }
     else{
      Selectsilver();
     }
    })

  for (let i = 0; i < arr.length; i++) {
    let p = document.createElement("p");
    p.innerHTML = `<div class="container-fluid my-4">
    <div class="row">
        <div class="col-12 mb-4">
            <div class="card h-100 shadow-sm">
                <div class="row g-0">
                    <div class="col-12 col-md-4">
                        <img src="${arr[i].img}" class="img-fluid rounded-start w-200" alt="Product Name" style="height: 200px; object-fit: cover;">
                    </div>
                    <div class="col-12 col-md-8">
                        <div class="card-body w-100">
                            <h5 class="card-title mb-2">${arr[i].Name}</h5>
                            <p class="text-primary fw-bold mb-3">$${arr[i].Price}</p>
                            <p class="card-text text-muted mb-3">${arr[i].Dec}</p>
                            <div class="d-flex">
                                <button class="btn btn-primary btn-sm w-100 w-md-auto">Add to Cart</button>
                                <button class="btn btn-outline-secondary btn-sm w-100 w-md-auto"><i class="fas fa-heart"></i> Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
    content.appendChild(p);
  }

});

function Selectsilver() {
  let content = document.getElementById("ProductsDisplay");
  DiscriptedProducts.style.color = "black";
  smallProductsIcon.style.color = "var(--hover)";
  content.innerHTML = " ";
  for (let i = 0; i < silver.length; i++) {
    let p = document.createElement("p");
    p.innerHTML = `<div class="col-12 col-sm-6 col-md-4 mb-4">
            <div class="product-card">
                <img src="${silver[i].img}" alt="${silver[i].Name}">
                <h5>${silver[i].Name}</h5>
                <p>${silver[i].Dec}</p>
                <div class="price">$${silver[i].Price}</div>
                <div class="product-card-buttons mt-2">
                    <div><button class="addtocart">Add To Cart</button></div>
                    <div><button class="shopnow">Shop Now</button></div>
                </div>
            </div>
        </div>`;
    content.appendChild(p);
  }
}

function Selectdai() {
  let content = document.getElementById("ProductsDisplay");
  DiscriptedProducts.style.color = "black";
  smallProductsIcon.style.color = "var(--hover)";
  content.innerHTML = " ";
  for (let i = 0; i < Daimand.length; i++) {
    let p = document.createElement("p");
    p.innerHTML = `<div class="col-12 col-sm-6 col-md-4 mb-4">
            <div class="product-card">
                <img src="${Daimand[i].img}" alt="${Daimand[i].Name}">
                <h5>${Daimand[i].Name}</h5>
                <p>${Daimand[i].Dec}</p>
                <div class="price">$${Daimand[i].Price}</div>
            </div>
        </div>`;
    content.appendChild(p);
  }
}

function Selectgold() {
  let content = document.getElementById("ProductsDisplay");
  DiscriptedProducts.style.color = "black";
  smallProductsIcon.style.color = "var(--hover)";
  content.innerHTML = " ";
  for (let i = 0; i < gold.length; i++) {
    let p = document.createElement("p");
    p.innerHTML = `<div class="col-12 col-sm-6 col-md-4 mb-4">
            <div class="product-card">
                <img src="${gold[i].img}" alt="${gold[i].Name}">
                <h5>${gold[i].Name}</h5>
                <p>${gold[i].Dec}</p>
                <div class="price">$${gold[i].Price}</div>
            </div>
        </div>`;
    content.appendChild(p);
  }
  content = " ";
}
