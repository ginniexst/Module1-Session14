let table = document.getElementById("table");
let addBtn = document.getElementById("addRow");

addBtn.onclick = function() {
    let row = table.insertRow();
    console.log(row);
    for (let i = 0; i < 3; i++) {
        let cell = row.insertCell(i);
        cell.innerHTML = `Cell ${i+1} row ${row.rowIndex+1}`
    }
};