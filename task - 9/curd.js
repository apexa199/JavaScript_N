
const saveInfo = () => {

   let indexToEdit = document.getElementById("index").value;

   let myitem = JSON.parse(localStorage.getItem("contactInfo")) ?? [];

   let obj = {
      "fname": document.getElementById("fname").value,
      "lname": document.getElementById("lname").value,
      "email": document.getElementById("email").value,
      "number": document.getElementById("number").value,
      "type": document.getElementById("type").value,
   }

   if (indexToEdit == "-1") 
   {
      myitem.push(obj);
   }
   else 
   {
      myitem[indexToEdit] = obj;
   }
   document.getElementById("index").value = "-1";

   localStorage.setItem("contactInfo", JSON.stringify(myitem));

   display();
}

const display = () => {

   let myitem = JSON.parse(localStorage.getItem("contactInfo")) ?? [];

   displayInfo(myitem);

}
const displayInfo = (myitem) => {

   let value = myitem.map((v, index) => {

      return (`<tr><td>${v.fname}</td><td>${v.lname}</td><td>${v.email}</td><td>${v.number}</td><td>${v.type}</td><td>
      <button  class="btn btn-success" onclick="editData(${index})">Edit Data</button></td><td><button class="btn btn-success" onclick ="deleteData(${index})">Delete Data</button></td></tr>`)
   })

   document.getElementById("tabledata").innerHTML = value.join(" ");
}

const deleteData = (index) => {

   let myitem = JSON.parse(localStorage.getItem("contactInfo")) ?? [];

   myitem.splice(index, 1);

   localStorage.setItem("contactInfo", JSON.stringify(myitem));

   display();

}

const editData = (index) => {

   let myitem = JSON.parse(localStorage.getItem("contactInfo")) ?? [];

   document.getElementById("fname").value = myitem[index].fname,
      document.getElementById("lname").value = myitem[index].lname,
      document.getElementById("email").value = myitem[index].email,
      document.getElementById("number").value = myitem[index].number,
      document.getElementById("type").value = myitem[index].type,

      document.getElementById("index").value = index,

      display();
}
const search = (e) => {

   let myitem = JSON.parse(localStorage.getItem("contactInfo")) ?? [];

   let searchTerm = document.getElementById("Search").value;

   let filterData = myitem.filter((v) => {

      return v.fname.includes(searchTerm) || v.lname.includes(searchTerm) || v.email.includes(searchTerm) || v.number.includes(searchTerm) || v.type.includes(type);
   })

   displayInfo(filterData);
}


display();

