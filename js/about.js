let users = [
    { surname: "Berger", firsname: "Whitney", age: 22 },
    { surname: "Nagy", firsname: "Árpád", age: 33 },
    { surname: "Kiss", firsname: "Bence", age: 44 },
    { surname: "Doe", firsname: "John", age: 55 },
    { surname: "Jack", firsname: "Vadölő", age: 32 },
    { surname: "Banderas", firsname: "Antonio", age: 45 },
    { surname: "Fehér", firsname: "Péter", age: 54 },
    { surname: "Piros", firsname: "Gizella", age: 12 },
];

let tableBody = document.querySelector("#userTable tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};

let createButtonGroup = parent => {
    let group = document.createElement("div");
    group.className = "btn-group";

    let btnInfo = document.createElement("button");
    btnInfo.className = "btn-info btn";
    btnInfo.innerHTML = '<i class="fas fa-sync-alt"></i>'; 

    let btnDanger = document.createElement("button");
    btnDanger.className = "btn-danger btn";
    btnDanger.innerHTML = '<i class="fas fa-trash-alt"></i>'; 
    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
}

for (let k in users) {
    let tr = document.createElement("tr");
    createTD(parseInt(k)+1, tr)
    for (let value of Object.values(users[k])) {
        createTD(value, tr);
    }
    createButtonGroup(tr);
    tableBody.appendChild(tr);
};