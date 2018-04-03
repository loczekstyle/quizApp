var xhr = new XMLHttpRequest(),
    data = null;

xhr.open("GET", "data/data.json", true);

xhr.onreadystatechange = function() {
  if(xhr.status === 200 && xhr.readyState === 4) {
    data = JSON.parse( xhr.responseText );
  }
}

xhr.send();

// interakcja z uzytkownikiem

document.querySelectorAll(".navigate")[0].addEventListener("click", function() {
  console.log("Cofam pytanie!");
}, false);

document.querySelectorAll(".navigate")[1].addEventListener("click", function() {
  console.log("Daje nastepne pytanie!");
}, false);

document.querySelector(".ans").addEventListener("click", function(e) {
}, false)

// TESTY

// Pobieramy elementy html

var quest = document.querySelector("h2"),
    ans = document.querySelectorAll(".ans-aa"),
    ansView = document.querySelector(".view-ans"),
    currentNumber = 0;



function generateQuest() {
    quest.textContent = data[currentNumber].question;
    currentNumber++;
}

function generateAns() {

}

function check() {

}

function generateViewQuest(len) {
    var el,
        frag = document.createDocumentFragment();

    for( var i = 0; i < len; i++) {
      el = document.createElement("div");
      el.className = "view-single";
      frag.appendChild(el);
    }
    ansView.appendChild(frag);
}

generateViewQuest(10);
