var show = true;

function createGallery() {
    var containerNew = document.getElementById("container");
    var cardColumn = document.createElement("div");
    cardColumn.className = "card-deck";
    //cardColumn.style.columnGap="5vw";
    //cardColumn.style.marginTop="5vh";
    //cardColumn.style.marginBottom="5vh";
    containerNew.appendChild(cardColumn);
    for (var index = 1; index <= data.length; index++) {
        var newCard = document.createElement("div");
        newCard.className = "card";
        newCard.id="galleryCard"+data[index - 1].id;
        cardColumn.appendChild(newCard);
        var newImg = document.createElement("img");
        newImg.className = "card-img-top";
        newImg.id = "img" + data[index - 1].id;
        newImg.src = data[index - 1].pic;
        newCard.appendChild(newImg);
        var cardBody = document.createElement("div");
        cardBody.className = "card-body";
        newCard.appendChild(cardBody);
        var newMotto = document.createElement("p");
        newMotto.className = "card-text text-center";
        newMotto.innerHTML = data[index - 1].motto;
        cardBody.appendChild(newMotto);
        var btn = document.createElement("div");
        btn.className = "btn btn-danger btn-lg btn-block";
        btn.id = data[index - 1].id;
        btn.innerHTML = "&#9829";
        btn.onclick = function (e) {
            var newCard = document.createElement("div");
            newCard.id = "FavID" + this.id;
            newCard.className = "card";
            var containerFav = document.getElementById("favGallery");
            containerFav.appendChild(newCard);
            var newImg = document.createElement("img");
            newImg.className = "card-img-top";
            newImg.id = "img" + this.id;
            newImg.src = data[this.id - 1].pic;
            newCard.appendChild(newImg);
            var cardBody = document.createElement("div");
            cardBody.className = "card-body";
            newCard.appendChild(cardBody);
            var newMotto = document.createElement("p");
            newMotto.className = "card-text text-center";
            newMotto.textContent = data[this.id - 1].motto;
            cardBody.appendChild(newMotto);
            var name = document.createElement("p");
            name.textContent = "Name: " + data[this.id - 1].name;
            cardBody.appendChild(name);
            var age = document.createElement("p");
            age.textContent = "Age: " + data[this.id - 1].age;
            cardBody.appendChild(age);
            var location = document.createElement("p");
            location.textContent = "Location: " + data[this.id - 1].location;
            cardBody.appendChild(location);
            var hobbies = document.createElement("p");
            hobbies.textContent = "Hobbies: " + data[this.id - 1].hobbies;
            cardBody.appendChild(hobbies);
            var btnRemove = document.createElement("div");
            btnRemove.className = "btn btn-success";
            btnRemove.id = data[this.id - 1].id;
            btnRemove.textContent = "Unlike";
            btnRemove.onclick = function (e) {
                var add = document.getElementById("galleryCard" + this.id);
                add.style.display="block";
                add.scrollIntoView();
                var remove = document.getElementById("FavID" + this.id);
                remove.remove();
            }
            cardBody.appendChild(btnRemove);
            newCard.scrollIntoView(); 
            var remove = document.getElementById("galleryCard" + this.id);
            remove.style.display="none";

        }
        newCard.appendChild(btn);
    }
}
function createFooter() {
    var footer = document.createElement("footer");
    var footer_text = document.createElement("p");
    footer.style.border = "solid yellow";
    footer.style.height = "8vh";
    footer_text.innerHTML = "Date Me";
    footer_text.style.textAlign = "center";
    footer_text.style.fontSize = "20pt";
    document.querySelector('body').appendChild(footer);
    footer.appendChild(footer_text);
}
$(document).ready(function () {
    createGallery();
    createFooter();
    //var container = document.querySelector("card-columns");
    var gender = document.getElementById("gender");
    var female = document.getElementById("female");
    var male = document.getElementById("male");
    var ages = document.getElementById("ages");
    var ages20 = document.getElementById("ages20");
    var ages30 = document.getElementById("ages30");
    $(".card-deck").sortable();
    female.onclick = function (e) {
        for (var index = 1; index <= data.length; index++) {
            var remove = document.getElementById("galleryCard" + index);
            if(data[index-1].gender=="male"){
                remove.style.display="none";
            }
            else if (data[index-1].gender=="female"){
                remove.style.display="block";
            }
        }
    }
    gender.onclick = function (e) {
        for (var index = 1; index <= data.length; index++) {
            var remove = document.getElementById("galleryCard" + index);
            remove.style.display="block";   
        }
    }
    male.onclick = function (e) {
        for (var index = 1; index <= data.length; index++) {
            var remove = document.getElementById("galleryCard" + index);
            if(data[index-1].gender=="female"){
                remove.style.display="none";
            }
            else if (data[index-1].gender=="male"){
                remove.style.display="block";
            }
        }
    }
    ages.onclick = function (e) {
        for (var index = 1; index <= data.length; index++) {
            var remove = document.getElementById("galleryCard" + index);
            remove.style.display="block";   
        }
    }
    ages20.onclick = function (e) {
        for (var index = 1; index <= data.length; index++) {
            var remove = document.getElementById("galleryCard" + index);
            if(Number(data[index-1].age)>=20 && Number(data[index-1].age)<=30){
                remove.style.display="block";
            }
            else{
                remove.style.display="none";
            }
               
        }
    }
    ages30.onclick = function (e) {
        for (var index = 1; index <= data.length; index++) {
            var remove = document.getElementById("galleryCard" + index);
            if(Number(data[index-1].age)>=31 && Number(data[index-1].age)<=40){
                remove.style.display="block";
            }
            else{
                remove.style.display="none";
            }
               
        }
    } 
});