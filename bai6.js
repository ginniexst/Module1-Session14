let input = document.getElementById("userInput");
let itemList = document.createElement("ul");
let btn = document.getElementById("addBtn");


addBtn.onclick = function() {
    itemList.innerHTML = itemList.innerHTML + `<li>${input.value}</li>`;
    document.getElementById("listedItems").appendChild(itemList);
    input.value = "";
}