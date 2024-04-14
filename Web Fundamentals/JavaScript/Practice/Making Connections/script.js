var JaneDoe = document.querySelector("#Jane-doe-01")
var UserNameOne = document.querySelector("#user-001")
var UserNameTwo = document.querySelector("#user-002")
var Connection = document.querySelector("#connec")
var YourConnections = document.querySelector("#connect")
var ConnectionNum  = 2
var ConnectionNumber = 500


function NameChange() {
    JaneDoe.innerText = "Jolyne Kujo";
}

function hide() {
    UserNameOne.remove();
    ConnectionNum--;
    ConnectionNumber++;
    Connection.innerText = ConnectionNum;
    YourConnections.innerText = ConnectionNumber + "+";
}
function hidehide() {
    UserNameTwo.remove();
    ConnectionNum--;
    Connection.innerText = ConnectionNum;
    ConnectionNumber++;
    YourConnections.innerText = ConnectionNumber + "+";
}
