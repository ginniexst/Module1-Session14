let table = document.getElementById("table");
let del = document.getElementsByClassName("deleteRow");

for (let btn of del) {
    btn.onclick = function() {
        table.deleteRow(0);
    };
};
