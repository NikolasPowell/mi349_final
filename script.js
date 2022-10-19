/*function enlargeImg() {
    var newerImg = document.getElementById("furniture")
    newerImg = newerImg.width * 2;
    newerImg = newerImg.heigt * 2;
}

function enlargeImg2() {
    var newerImg = document.getElementById("furniture2")
    newerImg = newerImg.width * 2;
    newerImg = newerImg.heigt * 2;
}*/

var image = document.getElementsById('image');

var imageClose = document.getElementsById('image-close');
imageClose.addEventListener('click', function() {
    image.style.display = "none";
});

document.addEventListener('click', function (e) {
    if (e.target.className.indexOf('furniture') !== -1) {
        var img = e.target;
        var imageContent = document.getElementsById("image-content");
        var imageCaption = document.getElementsById("image-caption");
        image.style.display = "block";
        imageContent.src = img.src;
        imageCaption.innerHTML = img.alt;
    }
});
