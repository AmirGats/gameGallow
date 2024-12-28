const words = [
  {
    word: "программирование",
    hint: "IT",
  },
  {
    word: "клавиатура",
    hint: "IT пианино",
  },
  {
    word: "лев",
    hint: "хищник",
  },
  {
    word: "свет",
    hint: "лампочка",
  },
  {
    word: "борец",
    hint: "боевые искусства",
  },
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let word_misterio = words[getRandomInt(words.length)];
let word = word_misterio.word; // ->загаданное слово
let hint = word_misterio.hint; // ->подсказка
hint__block.innerHTML = hint;

console.log(word);

for (let i = 0; i < word.length; i++) {
  word__inner.innerHTML += `<div class='word__misterio'></div> `;
}

let count_error = 0;

let alfavit = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

for (let i = 0; i < 33; i++) {
  let letter = `
    <button data-is-click = "0">${alfavit[i].toUpperCase()}</button>
    `;
  keyboard.innerHTML += letter;
}

let human = [head__man, body__man, foot__man];


function victory() {
  let all_word_misterio = document.querySelectorAll(".word__misterio");
  let datchik = true
  all_word_misterio.forEach((element) => {
    if (element.innerText.length == 0) {
        datchik = false
      return false;
    }
  });
  if(datchik){
  return true;
  }
}

document.addEventListener("click", function (event) {
  let element = event.target;
  if (element.dataset.isClick == "0") {
    let all_word_misterio = document.querySelectorAll(".word__misterio");
    let btn_letter = element.innerText;
    let datchik = false;
    element.dataset.isClick = "1";
    for (let i = 0; i < word.length; i++) {
      if (btn_letter == word[i].toUpperCase()) {
        all_word_misterio[i].innerText = btn_letter;
        datchik = true;
      }
    }
    if (!datchik) {
      human[count_error].style.opacity = "1";
      count_error++;
      if (count_error == 3) {
        setTimeout(() => alert("game over"), 100);
        setTimeout(() => this.location.reload(), 1500)
      }
    } else {
      let isVictory = victory();

      if (isVictory) {
        setTimeout(() => alert("Victory"), 10)
        setTimeout(() => this.location.reload(), 1000)
      }
    }
  }
});
