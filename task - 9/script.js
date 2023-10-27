
const saveInfo = () => {

let myitem = JSON.parse(localStorage.getItem("contactInfo")) ?? [];

   let obj = {
      "fname":document.getElementById("fname").value,
      "lname":document.getElementById("lname").value,
      "email":document.getElementById("email").value,
      "number":document.getElementById("number").value,
      "type":document.getElementById("type").value,
   }
   myitem = push(obj);

   localStorage.setItem("contactInfo",JSON.stringify(myitem));
}

const display = () => {

   let myitem = JSON.parse(localStorage.getItem("contactInfo")) ?? [];

   let value = myitem.map((v, index) => {

      return (`<tr><td>${v.fname}</td><td>${v.lname}</td><td>${v.email}</td><td>${v.number}</td><td>${v.type}</td><td>
      <button  class="btn btn-success" onclick="editData('${index}')">Edit Data</button></td><td><button class="btn btn-success" onclick ="deleteData('${index}')">Delete Data</button></td></tr>`)
   })

   document.getElementById("tabledata").innerHTML = value.join(" ");
}

const deleteData = (index) => {

   let myitem = JSON.parse(localStorage.getItem("contactInfo")) ?? [];

   myitem.splice[index, 1];

   localStorage.setItem("contactInfo", JSON.stringify(myitem));

   display();

}

display();

