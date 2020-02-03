
function rate(index) {
    if (index == 1) {
        document.getElementById("star1").className = "fa fa-star checked";
        document.getElementById("star2").className = "fa fa-star checked";
        document.getElementById("star3").className = "fa fa-star checked";
        document.getElementById("star4").className = "fa fa-star checked";
        document.getElementById("star5").className = "fa fa-star checked";
    }
    if (index == 2) {
        document.getElementById("star6").className = "fa fa-star checked";
        document.getElementById("star7").className = "fa fa-star checked";
        document.getElementById("star8").className = "fa fa-star checked";
        document.getElementById("star9").className = "fa fa-star checked";
        document.getElementById("star10").className = "fa fa-star checked";
    }
    if (index == 3) {
        document.getElementById("star11").className = "fa fa-star checked";
        document.getElementById("star12").className = "fa fa-star checked";
        document.getElementById("star13").className = "fa fa-star checked";
        document.getElementById("star14").className = "fa fa-star checked";
        document.getElementById("star15").className = "fa fa-star checked";
    }
    if (index == 4) {
        document.getElementById("star16").className = "fa fa-star checked";
        document.getElementById("star17").className = "fa fa-star checked";
        document.getElementById("star18").className = "fa fa-star checked";
        document.getElementById("star19").className = "fa fa-star checked";
        document.getElementById("star20").className = "fa fa-star checked";
    }
    if (index == 5) {
        document.getElementById("star21").className = "fa fa-star checked";
        document.getElementById("star22").className = "fa fa-star checked";
        document.getElementById("star23").className = "fa fa-star checked";
        document.getElementById("star24").className = "fa fa-star checked";
        document.getElementById("star25").className = "fa fa-star checked";
    }
    if (index == 6) {
        document.getElementById("star26").className = "fa fa-star checked";
        document.getElementById("star27").className = "fa fa-star checked";
        document.getElementById("star28").className = "fa fa-star checked";
        document.getElementById("star29").className = "fa fa-star checked";
        document.getElementById("star30").className = "fa fa-star checked";
    }
}


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function closebuy() {
    content = document.getElementById("buy-container");
    content.style = "display: none;";
}

function showbuy(productName, productPrice) {
    content = document.getElementById("buy-container");
    content.style = "display: flex;";
    
    nameDisplay = document.getElementById("itemName");
    nameDisplay.innerHTML = productName;
    
    priceDisplay = document.getElementById("itemPrice");
    priceDisplay.innerHTML = productPrice;

    userDisplay = document.getElementById("user");
    username = localStorage.getItem('email');
    userDisplay.innerHTML = "Usuário : " + username;
}