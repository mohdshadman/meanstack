$(document).ready(function(){
    $('button').click(takeInput);
});
function takeInput(){
    var fullName="Welcome "+initCap($('#firstName').val())+" "+initCap($('#secondName').val());
    $('#msg').html(fullName);
}