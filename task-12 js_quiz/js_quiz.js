const questions = [
    {   
       "Id":"Qusetion-1",
      "questionText": "What is a closure in JavaScript?",
      "options": [{id:1, label:' A function that returns a value'}, {id:2, label:'A block of code inside a function'}, {id:3, label:'A function that has access to variables from its outer scope'},{id:4,label:'A function with no parameters'}],
      "correctAnswer": "A function that has access to variables from its outer scope"
    },
    { 
      "Id":"Qusetion-2",
      "questionText": "What is the 'this' keyword in JavaScript used for?",
      "options": ["To refer to the current HTML element", "To declare a new variable", "To call a function", "To refer to the current object or context"],
      "correctAnswer": "To refer to the current object or context"
    },
    { 
      "Id":"Qusetion-3",
      "questionText": "What is the purpose of the 'JSON' object in JavaScript?",
      "options": ["To format dates", "To manipulate images", "To parse and stringify JSON data", "To create web pages"],
      "correctAnswer": "To parse and stringify JSON data"
    },
    { 
      "Id":"Qusetion-4",
      "questionText": "Which built-in JavaScript function is used to add elements to the end of an array?",
      "options": ["push()", "add()", "append()", "concat()"],
      "correctAnswer": "push()"
    },
    { 
      "Id":"Qusetion-5",
      "questionText": "In JavaScript, what is the 'NaN' value used to represent?",
      "options": ["Not a Name", "Not a Number", "No Available Nodes", "Not a Null"],
      "correctAnswer": "Not a Number"
    },
    {
      "Id":"Qusetion-6",
      "questionText": "What does the 'setTimeout' function in JavaScript do?",
      "options": ["Clears the screen", "Waits for user input", "Delays the execution of a function", "Triggers an immediate callback"],
      "correctAnswer": "Delays the execution of a function"
    },
    {
      "Id":"Qusetion-7",
      "questionText": "Which operator is used for strict equality comparison in JavaScript?",
      "options": ["==", "===", "!=", "!=="],
      "correctAnswer": "==="
    },
    {
      "Id":"Qusetion-8",
      "questionText": "What is the purpose of the 'document.querySelector()' method in JavaScript?",
      "options": ["To select the first element that matches a CSS selector", "To create a new HTML document", "To add an event listener", "To update the DOM"],
      "correctAnswer": "To select the first element that matches a CSS selector"
    },
    {
      "Id":"Qusetion-9",
      "questionText": "What is the JavaScript event that is fired when an HTML form is submitted?",
      "options": ["onSubmit", "onClick", "onLoad", "onChange"],
      "correctAnswer": "onSubmit"
    },
    {
      "Id":"Qusetion-10",
      "questionText": "What is the purpose of the 'parseInt()' function in JavaScript?",
      "options": ["To parse a floating-point number", "To convert a string to an integer", "To calculate a mathematical expression", "To round a number"],
      "correctAnswer": "To convert a string to an integer"
    }
  ]


//   window.addEventListener('contextmenu',(e)=>{
//     e.preventDefault()
// })

  let questopnData = [];

  let index = 0;

  const display = () => {

    let displayHtml = questions.map((v,index) => {

        return(` <article class="review" >
        <h4 id="id">${v.Id}</h4>
        <p id="question">${v.questionText}</p>
        <p id="options">${id}</p>
        <input type="text" id="inputValue"/>
        
        <!-- prev next buttons-->
        <div class="button-container">
            <button class="prev-btn" onclick="previous()">
                <i class="fas fa-chevron-left"></i>
            </button>
            <button class="next-btn" onclick="next();">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
        <!-- random button -->
        <button class="random-btn">Submit</button>
    </article>`)
    })
    document.getElementById("id").innerHTML = questions[index].Id;
    document.getElementById("question").innerHTML = questions[index].questionText;
    document.getElementById("options").innerHTML= questions[index].options;

    document.getElementsByClassName("container").innerHTML = displayHtml.join("");
  }

  const next = () => {
    
    if(index > questions.length){

        index = 0;
    }
    else{
        index = index + 1;
    }
    display();
  }

  const previous = () => {

    if(index > questions.length){

        index = 0;
        
    }
    else{
        index = index  - 1;
    }
    display();
  }

  const dataStore = () => {

  let p = JSON.parse(localStorage.getItem("questions")) || [];

 let b = JSON.parse(localStorage.getItem("answer")) || [];

 let obj = {
    "questionText":document.getElementById("question").innerText,
    "correctAnswer":document.getElementById("an")
 }



  }