// letras y numeros
let letras = document.getElementById("letras");
let numeros = document.getElementById("numeros");

// botones
let botonA1 = document.getElementById("btnA1");
let botonB2 = document.getElementById("btnB2");
let botonC3 = document.getElementById("btnC3");
let botonD4 = document.getElementById("btnD4");
let botonE5 = document.getElementById("btnE5");
let botonF6 = document.getElementById("btnF6");
let botonG7 = document.getElementById("btnG7");
let botonH8 = document.getElementById("btnH8");
let botonI9 = document.getElementById("btnI9");
let botonJ0 = document.getElementById("btnJ0");

const btnA1 = () => {
  if (letras.innerHTML == "") {
    letras.innerHTML = "A";
  } else if (letras.innerHTML == "ABCDEFGHIJ") {
    if (numeros.innerHTML == "") {
      numeros.innerHTML = "1";
    }
  }
};

const btnB2 = () => {
  if (letras.innerHTML == "A") {
    letras.innerHTML += "B";
  } else if (letras.innerHTML == "ABCDEFGHIJ") {
    if (numeros.innerHTML == "1") {
      numeros.innerHTML += "2";
    } else {
      alert("faltan numeros");
    }
  } else {
    alert("faltan letras");
  }
};

const btnC3 = () => {
  if (letras.innerHTML == "AB") {
    letras.innerHTML += "C";
  } else if (letras.innerHTML == "ABCDEFGHIJ") {
    if (numeros.innerHTML == "12") {
      numeros.innerHTML += "3";
    } else {
      alert("faltan numeros");
    }
  } else {
    alert("faltan letras");
  }
};

const btnD4 = () => {
  if (letras.innerHTML == "ABC") {
    letras.innerHTML += "D";
  } else if (letras.innerHTML == "ABCDEFGHIJ") {
    if (numeros.innerHTML == "123") {
      numeros.innerHTML += "4";
    } else {
      alert("faltan numeros");
    }
  } else {
    alert("faltan letras");
  }
};

const btnE5 = () => {
  if (letras.innerHTML == "ABCD") {
    letras.innerHTML += "E";
  } else if (letras.innerHTML == "ABCDEFGHIJ") {
    if (numeros.innerHTML == "1234") {
      numeros.innerHTML += "5";
    } else {
      alert("faltan numeros");
    }
  } else {
    alert("faltan letras");
  }
};

const btnF6 = () => {
  if (letras.innerHTML == "ABCDE") {
    letras.innerHTML += "F";
  } else if (letras.innerHTML == "ABCDEFGHIJ") {
    if (numeros.innerHTML == "12345") {
      numeros.innerHTML += "6";
    } else {
      alert("faltan numeros");
    }
  } else {
    alert("faltan letras");
  }
};

const btnG7 = () => {
  if (letras.innerHTML == "ABCDEF") {
    letras.innerHTML += "G";
  } else if (letras.innerHTML == "ABCDEFGHIJ") {
    if (numeros.innerHTML == "123456") {
      numeros.innerHTML += "7";
    } else {
      alert("faltan numeros");
    }
  } else {
    alert("faltan letras");
  }
};

const btnH8 = () => {
  if (letras.innerHTML == "ABCDEFG") {
    letras.innerHTML += "H";
  } else if (letras.innerHTML == "ABCDEFGHIJ") {
    if (numeros.innerHTML == "1234567") {
      numeros.innerHTML += "8";
    } else {
      alert("faltan numeros");
    }
  } else {
    alert("faltan letras");
  }
};

const btnI9 = () => {
  if (letras.innerHTML == "ABCDEFGH") {
    letras.innerHTML += "I";
  } else if (letras.innerHTML == "ABCDEFGHIJ") {
    if (numeros.innerHTML == "12345678") {
      numeros.innerHTML += "9";
    } else {
      alert("faltan numeros");
    }
  } else {
    alert("faltan letras");
  }
};

const btnJ0 = () => {
  if (letras.innerHTML == "ABCDEFGHI") {
    letras.innerHTML += "J";
  } else if (letras.innerHTML == "ABCDEFGHIJ") {
    if (numeros.innerHTML == "123456789") {
      numeros.innerHTML += "0";
    } else {
      alert("faltan numeros");
    }
  } else {
    alert("faltan letras");
  }
};

botonA1.onclick = function () {
  btnA1();
};

botonB2.onclick = function () {
  btnB2();
};

botonC3.onclick = function () {
  btnC3();
};

botonD4.onclick = function () {
  btnD4();
};

botonE5.onclick = function () {
  btnE5();
};

botonF6.onclick = function () {
  btnF6();
};

botonG7.onclick = function () {
  btnG7();
};

botonH8.onclick = function () {
  btnH8();
};

botonI9.onclick = function () {
  btnI9();
};

botonJ0.onclick = function () {
  btnJ0();
};
