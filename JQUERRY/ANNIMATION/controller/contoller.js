$(document).ready(function(){
    $('#b1').click(function(){
      $('img').fadeOut(2000);  
    });
    $('#b2').click(function(){
        $('img').fadeIn(2000);
    });    
  $('#b3').click(function(){
      $('img').hide('slow','linear');
  });  

$('#b4').click(function(){
    $('img').show('slow','linear');
});
$('#b5').click(function(){
    $('img').fadeToggle(2000);
});
$('#b6').click(function(){
    $('img').slideUp(2000);
});
$('#b7').click(function(){
    $('img').slideDown(3000);
});

$('#b8').click(function(){
    $('img').animate({
        left:'550px',
        opacity:'.5',
        height:'350px',
        width:'650px'
    
    });
var img=$('img');
    img.animate({height:'400px',opacity:'.4'},'slow');
    img.animate({width:'500px',opacity:'.8'},'slow');
    img.animate({height:'100px',opacity:'.4'},'slow');
    img.animate({width:'100px',opacity:'.8'},'slow');

});
$('#b9').click(function(){
    $('img').width('898px');
    $('img').height('701px');    
    $('img').show('slow','linear'); 

});

});