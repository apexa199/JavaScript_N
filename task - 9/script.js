
 saveData = () => {

    let a = { 
        firstName: "apexa",
         lastName: "kamani", 
         email: "ape@123", 
         number: "012245673" };

    localStorage.setItem("personInfo", JSON.stringify(a));
    let tableData = document.querySelectorAll(".form-control");

    let data = localStorage.getItem("personInfo");
    data = JSON.parse(data);
    let store = "";

     data.map((value, index) => { store +=

         (`<tr>
               <td>${value.firstName}</td> 
                <td>${value.lastName}</td>
                <td>${value.email}</td>
                <td>${value.number}</td>
                <button btn onclick="editData(${index})">Update</button>
             <button onclick="deleteData(${index})" >Delete</button>
                </tr>`)
             })
         document.getElementById("tabledata").innerHTML += store;   
}
saveData()

