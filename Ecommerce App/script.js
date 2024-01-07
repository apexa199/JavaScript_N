

const carts = [];   //add the product in cart 

let Products = [];    // whole array 

const fetchProduct = () => {

  fetch("https://fakestoreapi.com/products")
    .then(y => y.json())
    .then(y => {

      Products = y;
      display(y);
    })
}

const display = (data) => {

  let displayHtml = data.map((v, index) => {

    return (`<div class ="col-3  card-deck">
                <div class="card mb-3" id ="container">
                    <img src="${v.image}" class="card-img-top add" alt="...">
                    <div class="card-body">
                    <h5 class="card-title title-add">${v.title}</h5>
                    <p class="card-text overflow12">${v.description}</p>
                    <p class="card-text">price : <b>${v.price}</b></p>
                    <a href="#" class="btn btn-primary" onclick="addProduct(${index})">Add to Cart</a>
                    </div>
                 </div>
                 </div>`)

  })
  document.getElementById("display").innerHTML = displayHtml.join("");
}

const addProduct = (myindex) => {

  const selectedProduct = Products[myindex];

  const findProduct = carts.find((v) => {

    return v.item.id === selectedProduct.id
  })

  if (!findProduct) {

    carts.push({ item: selectedProduct, count: 1 });
  }
  else {
    findProduct.count = findProduct.count + 1;
  }

  let p = carts.reduce((pre, curr) => {

    return pre + curr.item.price * curr.count;

  }, 0)

  console.log(carts)
  console.log(p)
}

const searchValue = (e) => {

  let filterData = Products.filter((v) => {

    let selectedCat = document.getElementById("searchCategary").value; 

    switch (selectedCat) {
    
      case "start":

        return v.title.startsWith(e.target.value);

      case "end":

        return v.title.endsWith(e.target.value);

      case "content":

        return v.title.includes(e.target.value);

        

    }
  })

  display(filterData);
}

const asc = () => {

  const ascending = Products.sort((a , b) => 
  
  a.price - b.price)

  display(ascending)
}

const dsc = () => {

  const desending = Products.sort((a ,b) => 

     b.price -  a.price
)
  display(desending)
}