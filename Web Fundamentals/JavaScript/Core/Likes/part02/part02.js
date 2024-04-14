console.log("page loading...");

// index     0  1   2
var likes = [9, 12, 9];
var spans = [
    document.querySelector("#like-01"),
    document.querySelector("#like-02"),
    document.querySelector("#like-03")
];

function like(id) {
    likes[id]++;
    spans[id].innerHTML = likes[id] + "like(s)";
}