const products = [
  {
    id: 'rec43w3ipXvP28vog',
    title: 'high-back bench',
    company: 'ikea',
    image:
      'https://img.freepik.com/free-vector/wooden-furniture_1308-40575.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais',
    price: 9.99,
  },
  {
    id: 'rec4f2RIftFCb7aHh',
    title: 'albany table',
    company: 'marcos',
    image:
      'https://img.freepik.com/premium-photo/wooden-rustic-table-window-decoration_742252-3436.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais',
    price: 79.99,
  },
  {
    id: 'rec4f2RIftFCb7aHh',
    title: 'albany table',
    company: 'marcos',
    image:
      'https://img.freepik.com/premium-photo/empty-white-plant-pot-table_230311-24760.jpg?w=360',
    price: 788.99,
  },
  {
    id: 'rec4f2RIftFCb7aHh',
    title: 'albany table',
    company: 'marcos',
    image:
      'https://img.freepik.com/free-vector/many-types-wooden-furnitures-illustration_1308-2694.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais',
    price: 1279.99,
  },
  {
    id: 'rec8kkCmSiMkbkiko',
    title: 'accent chair',
    company: 'caressa',
    image:
      'https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129804.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais',
    price: 25.99,
  },
  {
    id: 'recBohCqQsot4Q4II',
    title: 'wooden table',
    company: 'caressa',
    image:
      'https://img.freepik.com/free-photo/home-workspace-minimalistic-design_23-2148991464.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais',
    price: 45.99,
  },
  {
    id: 'recDG1JRZnbpRHpoy',
    title: 'dining table',
    company: 'caressa',
    image:
      'https://img.freepik.com/free-photo/four-person-table-front-window-restaurant_140725-2513.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais',
    price: 6.99,
  },
  {
    id: 'recNWGyP7kjFhSqw3',
    title: 'sofa set',
    company: 'liddy',
    image:
      'https://img.freepik.com/free-vector/modern-lounge-attic-with-wooden-ceiling-beam-windows-roo_1441-4007.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais',
    price: 69.99,
  },
  {
    id: 'recZEougL5bbY4AEx',
    title: 'modern bookshelf',
    company: 'marcos',
    image:
      'https://img.freepik.com/free-photo/room-interior-design_23-2148899489.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais',
    price: 8.99,
  },
  {
    id: 'recjMK1jgTb2ld7sv',
    title: 'emperor bed',
    company: 'liddy',
    image:
      'https://img.freepik.com/premium-photo/golden-room_839169-5690.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais ',
    price: 21.99,
  },
  {
    id: 'recmg2a1ctaEJNZhu',
    title: 'utopia sofa',
    company: 'marcos',
    image:
      'https://img.freepik.com/free-photo/comfortable-sofa-illuminated-by-modern-electric-lamps-generated-by-ai_188544-11703.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais',
    price: 39.95,
  },
  {
    id: 'recvKMNR3YFw0bEt3',
    title: 'entertainment center',
    company: 'liddy',
    image:
      'https://img.freepik.com/premium-photo/inflatable-colored-playground_693425-8383.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais',
    price: 29.98,
  },
  {
    id: 'recxaXFy5IW539sgM',
    title: 'albany sectional',
    company: 'ikea',
    image:
      'https://img.freepik.com/free-vector/huge-building_1308-84295.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais',
    price: 10.99,
  },
  {
    id: 'recyqtRglGNGtO4Q5',
    title: 'leather sofa',
    company: 'liddy',
    image:
      'https://img.freepik.com/free-photo/modern-industrial-luxury-style-living-room-interior-with-leather-couch-golden-lamp-houseplants_53876-128128.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais',
    price: 9.99,
  },
];





display = (data) => {

  const value = data.map((v) => {
    return `<article class="product">
    <img src="${v.image}" class="product-img img"/>
    <footer>
      <h5 class="product-name">${v.title}</h5>
      <h5 class="product-name">${v.company}</h5>
      <span class="product-price">${v.price}</span>
    </footer>
  </article>
`})


  let company = products.map((a) => {

    return a.company;

  }).reduce((v, c) => {

    if (!v.includes(c)) {
      v.push(c)
    }
    return v;

  }, [])


  let button = company.map((a) => {

    return `<button type="button" class="company-btn" id = "btn"  onclick="filterCompany('${a}')">${a}</button>`
  })

  document.getElementById("companies").innerHTML = button.join("")

  document.getElementById("products").innerHTML = value.join("");

}

display(products);


filterCompany = (company) => {

  const filterData = products.filter((v) => {
    return v.company === company
  })

  display(filterData);

}

myFunction = (e) => {

  const searchCompany = products.filter((v) => {

    return v.title.includes(e.target.value);
  })

  display(searchCompany);
}

ascending = () => {

  const ascending = products.sort((a, b) => {

    if (a.price > b.price) {
      return 1
    }
    else {
      return -1;
    }
  })

  display(ascending);
}

dscending = () => {

  const dscending = products.sort((a, b) => {

    if (a.price < b.price) {
      return 1
    }
    else {
      return -1
    }
  })
  display(dscending);
}

