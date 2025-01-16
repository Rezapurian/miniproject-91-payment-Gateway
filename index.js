let tColorA = document.querySelector("#tColorA"),
  tColorB = document.querySelector("#tColorB"),
  tColorC = document.querySelector("#tColorC"),
  iconA = document.querySelector(".fa-credit-card"),
  iconB = document.querySelector(".fa-building-columns"),
  iconC = document.querySelector(".fa-wallet"),
  cDetails = document.querySelector(".card-details");
let regexAZ = /[a-zA-Z]/;

function doFun() {
  tColorA.style.color = "#adff2f";
  tColorB.style.color = "#444";
  tColorC.style.color = "#444";
  iconA.style.color = "#adff2f";
  iconB.style.color = "#aaa";
  iconC.style.color = "#aaa";
  cDetails.style.display = "block";
}

function doFunA() {
  tColorA.style.color = "#444";
  tColorB.style.color = "#adff2f";
  tColorC.style.color = "#444";
  iconA.style.color = "#aaa";
  iconB.style.color = "#adff2f";
  iconC.style.color = "#aaa";
  cDetails.style.display = "none";
}

function doFunB() {
  tColorA.style.color = "#444";
  tColorB.style.color = "#444";
  tColorC.style.color = "#adff2f";
  iconA.style.color = "#aaa";
  iconB.style.color = "#aaa";
  iconC.style.color = "#adff2f";
  cDetails.style.display = "none";
}

let cNumber = document.querySelector("#number");
cNumber.addEventListener("keyup", (e) => {
  let num = cNumber.value;

  let newValue = "";
  num = num.replace(/\s/g, "");
  for (let i = 0; i < num.length; i++) {
    if (i % 4 === 0 && i > 0) {
      newValue = newValue.concat(" ");
    }
    newValue = newValue.concat(num[i]);
  }
  cNumber.value = newValue;
  let ccNum = document.querySelector("#c-number");
  if (regexAZ.test(num)) {
    ccNum.style.border = "1px solid #ff0000";
  } else if (num.length < 16) {
    ccNum.style.border = "1px solid #ff0000";
  } else {
    ccNum.style.border = "1px solid #adff2f";
  }
});

let eDate = document.querySelector("#e-date");
eDate.addEventListener("keyup", (e) => {
  let newInput = eDate.value;

  if (e.which !== 8) {
    let numChars = e.target.value.length;
    if (numChars === 2 && !e.target.value.includes("/")) {
      let thisVal = e.target.value;
      thisVal += "/";
      e.target.value = thisVal;
    }
  }

  if (regexAZ.test(newInput)) {
    eDate.style.border = "1px solid #ff0000";
  } else if (newInput.length < 5) {
    eDate.style.border = "1px solid #ff0000";
  } else {
    eDate.style.border = "1px solid #adff2f";
  }
});

let cvv = document.querySelector("#cvv");
cvv.addEventListener("keyup", (e) => {
  let elen = cvv.value;
  let cvvBox = document.querySelector("#cvv-box");

  if (regexAZ.test(elen)) {
    cvvBox.style.border = "1px solid #ff0000";
  } else if (elen.length < 3) {
    cvvBox.style.border = "1px solid #ff0000";
  } else {
    cvvBox.style.border = "1px solid #adff2f";
  }
});
