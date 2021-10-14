const socket=io();

$('#chatting').hide();

$('#send-btn').click(function(){
 const msgText=$('#inp-msg').val();
 socket.emit('send_msg',{
    msg:msgText
 });
 $('#inp-msg').val("");
});

socket.on('recieved_msg',(data)=>{
  $('#chat').append(`<li><strong>${data.user}</strong> : ${data.msg}</li>`);
  $("#chat").stop().animate({ scrollTop: $("#chat")[0].scrollHeight}, 1000);
});

$('#login-btn').click(function(){
 const user=$('#login-inp').val();
 socket.emit('login',{
    user:user
 });
 $('#login-inp').val("");
 $('#login').hide();
 $('#chatting').show();
})
