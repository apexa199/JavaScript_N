const data = [
    {
     "name": "Donald Schimmel Jr.",
     "Status": "Active",
     "id": "1"
    },
    {
     "name": "Dr. Chester Schamberger",
     "Status": "Active",
     "id": "2"
    },
    {
     "name": "Candace Veum",
     "Status": "Active",
     "id": "3"
    },
    {
     "name": "Gilberto Waters",
     "Status": "Active",
     "id": "4"
    },
    {
     "name": "Betty Baumbach",
     "Status": "Active",
     "id": "5"
    },
    {
     "name": "Andres Hamill",
     "Status": "Active",
     "id": "6"
    },
    {
     "name": "Margie Jerde",
     "Status": "Active",
     "id": "7"
    },
    {
     "name": "Luis Parker",
     "Status": "Active",
     "id": "8"
    },
    {
     "name": "Angel Ortiz IV",
     "Status": "Active",
     "id": "9"
    },
    {
     "name": "Michael Moen",
     "Status": "Active",
     "id": "10"
    },
    {
     "name": "Olga Klein",
     "Status": "Active",
     "id": "11"
    },
    {
     "name": "Brian Romaguera",
     "Status": "Active",
     "id": "12"
    },
    {
     "name": "Miss Tracy Herman",
     "Status": "Active",
     "id": "13"
    },
    {
     "name": "Mrs. Malcolm Becker",
     "Status": "Active",
     "id": "14"
    },
    {
     "name": "Roberto Torphy",
     "Status": "Active",
     "id": "15"
    },
    {
     "name": "Jack Carroll",
     "Status": "Active",
     "id": "16"
    },
    {
     "name": "Leo Ferry",
     "Status": "Active",
     "id": "17"
    },
    {
     "name": "Calvin Bradtke",
     "Status": "Active",
     "id": "18"
    },
    {
     "name": "Miguel Roberts",
     "Status": "Active",
     "id": "19"
    },
    {
     "name": "Edward Block",
     "Status": "Active",
     "id": "20"
    }
   ]        


const dispaly = () => {

    let a = data.map((v) => {

        return(`  <tr>
        <td>${v.id}</td>
        <td>${v.name}</td>
        <td class="text-success font-weight-bold" id="active">${v.Status}</td>       
      </tr> `)
    })
    document.getElementById("dis").innerHTML = a.join("");
}
dispaly()


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
