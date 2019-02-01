let previous = document.getElementById('back');
let table = document.getElementById('addParty');
let row = table.insertRow(0);
let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);
let cell3 = row.insertCell(2);
let addParty = document.querySelector('.partySubmit');
let partyLogo = document.querySelector('.partyLogo');
let partyName = document.querySelector('.partyName');
let partyAddress = document.querySelector('.partyAddress');


previous.onclick = function () {
    window.history.back();
}

addParty.onclick = function () {
   
    cell1.innerHTML = partyLogo;
    cell2.innerHTML = partyName;
    cell3.innerHTML = partyAddress;
}