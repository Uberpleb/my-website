var myImage = document.querySelector('img')

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/met-dev-1.png') {
    myImage.setAttribute ('src' , 'images/met-dev-2.png');
  } else {
    myImage.setAttribute ('src' , 'images/met-dev-1.png')
  }
}
