/*var myHeading = document.querySelector('h1');
myHeading.textContent = 'Торты Евгении';*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cake.png') {
      myImage.setAttribute ('src','images/cake2.png');
    } else {
      myImage.setAttribute ('src','images/cake.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Cakes is cool, ' + myName;
  }

 /* if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Cakes is cool, ' + storedName;
  }

  myButton.onclick=function () {
      setUserName ();
  }*/