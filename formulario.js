let users = [];

function addRow() {
    const cc = document.getElementById("CC").value;
    const name = document.getElementById("Name").value;
    const age = document.getElementById("Age").value;
    const mobile = document.getElementById("Mobile").value;
    const email = document.getElementById("Email").value;
    const city = document.getElementById("city").value;
    const dept = document.getElementById("department").value;
    const date = document.getElementById("Born_date").value;
    const foto = document.getElementById("Foto").value;
    const error = document.getElementById("error");

    if(cc === "" || name === "" || age === "" || mobile === "" || email === "" || city === "" || dept === "" || date === "" || foto === ""){
        error.innerText = "Llene todos los espacios";
    }
    else{
        for (let i = 0; i < users.length; i++) {
            if (cc === users[i].cc) {
                error.innerText = "Cédula ya registrada, compruebe el dato nuevamente";
                return;
            }
        }
    
        
        const newUser = { cc, name, age, mobile, email, city, dept, date, foto };
        users.push(newUser);
    
        const table = document.getElementById("users").getElementsByTagName("tbody")[0];
        const newRow = table.insertRow();
        newRow.insertCell(0).innerText = name;
        newRow.insertCell(1).innerText = cc;
        newRow.insertCell(2).innerText = age;
        newRow.insertCell(3).innerText = mobile;
        newRow.insertCell(4).innerText = email;
        newRow.insertCell(5).innerText = city;
        newRow.insertCell(6).innerText = dept;
        newRow.insertCell(7).innerText = date;
        newRow.insertCell(8).innerText = foto;
    
        const edit = document.createElement("button")
        edit.innerText = "Editar"
        edit.addEventListener("click", () => {
            editRow(newRow, newUser);
        })
        newRow.insertCell(9).appendChild(edit)
    
        const deleteBt = document.createElement("button")
        deleteBt.innerText = "Eliminar"
        deleteBt.addEventListener("click", () => {
            deleteRow(newRow, cc);
        })
        newRow.insertCell(10).appendChild(deleteBt)
    
    
        error.innerText = "Añadido exitosamente.";
    
        document.getElementById("form").reset();
    }
    }
   

function editRow(row, user){
      document.getElementById("Name").value = user.name;
      document.getElementById("CC").value = user.cc;
      document.getElementById("Age").value = user.age;
      document.getElementById("Mobile").value = user.mobile;
      document.getElementById("Email").value = user.email;
      document.getElementById("city").value = user.city;
      document.getElementById("department").value = user.dept;
      document.getElementById("Born_date").value = user.date;

      deleteRow(row, user.cc)
}

function deleteRow(row, cc){
    users = users.filter(user => user.cc !== cc);
    row.remove();
}

function searchCC(cc){
    var table = document.getElementById("users");
    var rows = table.rows;
    for (var i = rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }

    for(let i = 0;i< users.length; i++){
        if(cc === users[i].cc){
            const table = document.getElementById("users").getElementsByTagName("tbody")[0];
            const newRow = table.insertRow();
            newRow.insertCell(0).innerText = users[i].name;
            newRow.insertCell(1).innerText = users[i].cc;
            newRow.insertCell(2).innerText = users[i].age;
            newRow.insertCell(3).innerText = users[i].mobile;
            newRow.insertCell(4).innerText = users[i].email;
            newRow.insertCell(5).innerText = users[i].city;
            newRow.insertCell(6).innerText = users[i].dept;
            newRow.insertCell(7).innerText = users[i].date;
            newRow.insertCell(8).innerText = users[i].foto;

            const edit = document.createElement("button")
        edit.innerText = "Editar"
        edit.addEventListener("click", () => {
            editRow(newRow, users[i]);
        })
        newRow.insertCell(9).appendChild(edit)
    
        const deleteBt = document.createElement("button")
        deleteBt.innerText = "Eliminar"
        deleteBt.addEventListener("click", () => {
            deleteRow(newRow, users[i].cc);
        })
        newRow.insertCell(10).appendChild(deleteBt)

        error.innerText = "Usuario hayado"
        }
        else{
            error.innerText = "Usuario no encontrado"
        }
    }
}

function searchName(name){
    var table = document.getElementById("users");
    var rows = table.rows;
    for (var i = rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }

    for(let i = 0;i< users.length; i++){
        if(name === users[i].name){
            const table = document.getElementById("users").getElementsByTagName("tbody")[0];
            const newRow = table.insertRow();
            newRow.insertCell(0).innerText = users[i].name;
            newRow.insertCell(1).innerText = users[i].cc;
            newRow.insertCell(2).innerText = users[i].age;
            newRow.insertCell(3).innerText = users[i].mobile;
            newRow.insertCell(4).innerText = users[i].email;
            newRow.insertCell(5).innerText = users[i].city;
            newRow.insertCell(6).innerText = users[i].dept;
            newRow.insertCell(7).innerText = users[i].date;
            newRow.insertCell(8).innerText = users[i].foto;

            const edit = document.createElement("button")
        edit.innerText = "Editar"
        edit.addEventListener("click", () => {
            editRow(newRow, users[i]);
        })
        newRow.insertCell(9).appendChild(edit)
    
        const deleteBt = document.createElement("button")
        deleteBt.innerText = "Eliminar"
        deleteBt.addEventListener("click", () => {
            deleteRow(newRow, users[i].cc);
        })
        newRow.insertCell(10).appendChild(deleteBt)

        error.innerText = "Usuario hayado"
        }
        else{
            error.innerText = "Usuario no encontrado"
        }
    }
}
function searchCity(city){
    var table = document.getElementById("users");
    var rows = table.rows;
    for (var i = rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }

    for(let i = 0;i< users.length; i++){
        if(city === users[i].city){
            const table = document.getElementById("users").getElementsByTagName("tbody")[0];
            const newRow = table.insertRow();
            newRow.insertCell(0).innerText = users[i].name;
            newRow.insertCell(1).innerText = users[i].cc;
            newRow.insertCell(2).innerText = users[i].age;
            newRow.insertCell(3).innerText = users[i].mobile;
            newRow.insertCell(4).innerText = users[i].email;
            newRow.insertCell(5).innerText = users[i].city;
            newRow.insertCell(6).innerText = users[i].dept;
            newRow.insertCell(7).innerText = users[i].date;
            newRow.insertCell(8).innerText = users[i].foto;

            const edit = document.createElement("button")
        edit.innerText = "Editar"
        edit.addEventListener("click", () => {
            editRow(newRow, users[i]);
        })
        newRow.insertCell(9).appendChild(edit)
    
        const deleteBt = document.createElement("button")
        deleteBt.innerText = "Eliminar"
        deleteBt.addEventListener("click", () => {
            deleteRow(newRow, users[i].cc);
        })
        newRow.insertCell(10).appendChild(deleteBt)

        error.innerText = "Usuario hayado"
        }
        else{
            error.innerText = "Usuario no encontrado"
        }
    }
}
function searchDepto(depto){
    var table = document.getElementById("users");
    var rows = table.rows;
    for (var i = rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }

    for(let i = 0;i< users.length; i++){
        if(depto === users[i].dept){
            const table = document.getElementById("users").getElementsByTagName("tbody")[0];
            const newRow = table.insertRow();
            newRow.insertCell(0).innerText = users[i].name;
            newRow.insertCell(1).innerText = users[i].cc;
            newRow.insertCell(2).innerText = users[i].age;
            newRow.insertCell(3).innerText = users[i].mobile;
            newRow.insertCell(4).innerText = users[i].email;
            newRow.insertCell(5).innerText = users[i].city;
            newRow.insertCell(6).innerText = users[i].dept;
            newRow.insertCell(7).innerText = users[i].date;
            newRow.insertCell(8).innerText = users[i].foto;

            const edit = document.createElement("button")
        edit.innerText = "Editar"
        edit.addEventListener("click", () => {
            editRow(newRow, users[i]);
        })
        newRow.insertCell(9).appendChild(edit)
    
        const deleteBt = document.createElement("button")
        deleteBt.innerText = "Eliminar"
        deleteBt.addEventListener("click", () => {
            deleteRow(newRow, users[i].cc);
        })
        newRow.insertCell(10).appendChild(deleteBt)

        error.innerText = "Usuario hayado"
        }
        else{
            error.innerText = "Usuario no encontrado"
        }
    }
}

function rechargeTable() {
    var table = document.getElementById("users");
    var tbody = table.getElementsByTagName("tbody")[0];
  
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }

    users.forEach(function(user) {
      var row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.cc}</td>
        <td>${user.age}</td>
        <td>${user.mobile}</td>
        <td>${user.email}</td>
        <td>${user.city}</td>
        <td>${user.dept}</td>
        <td>${user.date}</td>
        <td><img src="${user.foto}" style="width:50px;height:50px;"></td>
        <td><button onclick="editRow(this.parentNode,'${user}')">Editar</button></td>
        <td><button onclick="deleteRow(this.parentNode,'${user.cc}')">Eliminar</button></td>
      `;
      tbody.appendChild(row);
    });
  }
  