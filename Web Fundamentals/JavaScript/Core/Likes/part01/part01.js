var likesNumber= 0;
var likesCount = document.querySelector("#likesnum");

function AddLikes() {
    likesNumber++;
    likesCount.innerText = likesNumber + " Like(s)";
    console.log(likesNumber)
}
