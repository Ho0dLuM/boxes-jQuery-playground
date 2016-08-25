$(document).ready(function() {
    console.log('ready!');
  //Solutions to Exercise 2
  Locate secretBox and change background-color to white. Add <h1>Secret Box</h1>
  $('#secretBox').css({'background-color': '#FFFFFF'}).append('<h1>Secret Box' + '</h1>');
  //Remove class from targeted divs under id="row1", changed to class="box boxType3"
  $('#row1 > div').removeClass().addClass('box boxType3');
  //Make last row, last box disappear
  $('#row4 > div:last-child').remove();
  //Change red backgroud to white
  $('div.box.boxType1').css({'background-color': '#FFFFFF'});
  //First 2 divs in second row, remove all styling.
  $('#row2 > div:first-child').removeClass();
  $('#row2 > div:nth-child(2)').removeClass();
  //All div inside container, not secret and not row, set width to 2
  $('div:not(".row, #secretBox")').css({'width': '2px'});
});
//Solutions to exercise 3
  $(function() {
    $('#container').click(function(event) {
      var offset = $(this).offset();
      var mouseX = (event.pageX - offset.left);
      var mouseY = (event.pageY - offset.top);
      console.log("X: " + mouseX + "  Y: " + mouseY);
    });
  });

  $(function() {
    $('div.box.boxType1').append('<a href="#">Galvanize</a>');
  });

  $(function() {
    $('a').on('click', function() {
      alert('You cannot ever leave this page!');
    });
  });

  $(function() {
    $('div.box').on('click', function() {
      $(this).append('<a class="image" href="#"><img src="http://placekitten.com/100/100"/></a>');
    });
  });

  $(function() {
    $('div a').on('click', function() {
      $('a.image').remove();
    });
  });
  //this one gave me trouble. couldn't get the clicks to work properly.
  $(function() {
    $('div.box').on('click', function() {
      if($(this !== '<img class="image" src="http://placekitten.com/100/100"/>')) {
      $(this).append('<img src="http://placekitten.com/100/100"/>');
    } else {
      $('div.box' === '<img class="image" src="http://placekitten.com/100/100"/>')
        $('img').remove();
    };
  });
});
