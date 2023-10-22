// local reviews data
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
            "https://img.freepik.com/free-photo/mid-shot-woman-counselor-office_23-2148759171.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
            "https://img.freepik.com/free-photo/side-view-woman-posing-chair_23-2149915943.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
            "https://img.freepik.com/free-photo/elegant-man-office-businessman-white-shirt-man-works-with-laptop_1157-39238.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
            "https://img.freepik.com/free-photo/young-woman-with-brown-hair-exudes-confidence-generated-by-ai_24640-82432.jpg?size=626&ext=jpg&ga=GA1.1.1491322341.1697913675&semt=ais",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

// select items

const reviewsData = [];

let index = 0;

const display = () => {

    let displayHtml = reviews.map((v) => {

        return`  <article class="review">
        <div class="img-container">
        <img src="${v.img}" 
        id="person-img" alt="" />
    </div>
        <h4 id="author">${v.name}</h4>
        <p id="job">${v.job}</p>
        <p id="info">
           ${v.text}
        </p>
        
    </article>`
    })

    document.getElementById("author").innerHTML = reviews[index].name;
    document.getElementById("job").innerHTML = reviews[index].job;
    document.getElementById("person-img").innerHTML = reviews[index].img;
    document.getElementById("info").innerHTML = reviews[index].text;

    document.getElementsByClassName("container").innerHTML = displayHtml.join("")
}


const next = () => {

    if (index > reviews.length) {

        index = 0;
    }
    else {
        index = index + 1;
    }
    display();
}

const previous = () => {

    if (index > reviews.length) {

        index = 0;
    }
    else {
        index = index - 1;
    }
    display();
}