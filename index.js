'use strict';

$(document).ready(init);

var imageArray = ['/assets/one.jpg','/assets/two.jpg','/assets/three.jpg','/assets/four.jpg','/assets/five.jpg','/assets/six.jpg','/assets/seven.jpg','/assets/eight.jpg','/assets/nine.jpg'];

function init(){
  $('td').click(flip);
}
function flip(){
  var randomGenerator = _.sample(imageArray);
  $(this).css('background-image', 'url(' + randomGenerator + ' )');
  
}
