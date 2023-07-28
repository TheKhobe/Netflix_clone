// $('#toggle_message').click(function() {
//  var value = $('#toggle_message').attr('value');
//  $('#message').toggle('fast');

//  if (value == 'Hide') {
//   $('#toggle_message').attr('value', 'Show');
//  } else if(value == 'Show') {
//   $('#toggle_message').attr('value', 'Hide');
//  }
// })
$(document).ready(function(){
 $("#flip").click(function(){
  $("#panel").slideToggle("slow");
   $("#panel-1").slideUp();
   $("#panel-2").slideUp();
  $("#panel-3").slideUp();
   $("#panel-4").slideUp();
    $("#panel-5").slideUp();
 });
  $("#flip-1").click(function(){
  $("#panel-1").slideToggle("slow");
  $("#panel").slideUp("slow");
  $("#panel-2").slideUp();
  $("#panel-3").slideUp();
   $("#panel-4").slideUp();
    $("#panel-5").slideUp();
 });
  $("#flip-2").click(function(){
  $("#panel-2").slideToggle("slow");
   $("#panel-1").slideUp();
   $("#panel").slideUp();
   $("#panel-3").slideUp();
     $("#panel-4").slideUp();
    $("#panel-5").slideUp();
 });
  $("#flip-3").click(function(){
  $("#panel-3").slideToggle("slow");
  $("#panel").slideUp("slow");
   $("#panel-1").slideUp();
    $("#panel-2").slideUp();
    $("#panel-4").slideUp();
    $("#panel-5").slideUp();
 });
  $("#flip-4").click(function(){
  $("#panel-4").slideToggle("slow");
  $("#panel").slideUp("slow");
   $("#panel-1").slideUp();
    $("#panel-2").slideUp();
    $("#panel-3").slideUp();
    $("#panel-5").slideUp();
 });
  $("#flip-5").click(function(){
  $("#panel-5").slideToggle("slow");
  $("#panel").slideUp("slow");
   $("#panel-1").slideUp();
    $("#panel-2").slideUp();
    $("#panel-4").slideUp();
    $("#panel-3").slideUp();
 });
});