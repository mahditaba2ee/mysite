

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');

    

function csrfSafeMethod(method) {
// these HTTP methods do not require CSRF protection
return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
beforeSend: function(xhr, settings) {
    if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
        xhr.setRequestHeader("X-CSRFToken",csrftoken);
    }
}
});


var checkemail=false
var checkphone = false
var checkusername = false
var checkpassword = false





var username = document.getElementById('username')
var password = document.getElementById('password')
var password2 = document.getElementById('password2')
var email = document.getElementById('email')
var phone = document.getElementById('phone')
var emailHelp =document.getElementById('emailHelp')
var phonehelp =document.getElementById('phonehelp')
var check = document.getElementById('check');
var usernamehelp=document.getElementById('usernamehelp');
var passwordhelp=document.getElementById('passwordhelp');
var register=document.getElementById('register');
var login = document.getElementById('login')
var type = document.getElementById('type')
var message = document.getElementById('message')
login.classList.remove('active')
register.classList.add('active')
check.checked=false;

email.value="";
phone.value='';
username.value=""
password.value='';
password2.value='';



function checkbox(){
   
    if (check.value == 1){
        password.type = 'password'
        password2.type = 'password'

        check.value = 0;
        return;
    }
    if (check.value == 0){
        
        password.type = 'text'
        password2.type = 'text'

        check.value = 1;
        return;
    }
}

button.classList.add('active');
function delete1(){
    username.value='';
    password.value='';
    
}









var valueemail = email.value
function ch(){
    var valueemail = email.value
    $.post('/accounts/check/email/',{
        
        email:valueemail,
    
    },function(data){
        console.log(data)
        console.log(data['emailexist'])
        if(data['emailexist'] =="1"){
        emailHelp.innerHTML='?????????? ???????? ?????? ???????? ???????? '


        }
        if(data['emailexist'] =="0"){
        emailHelp.innerHTML='?????????? ???????? ??????.'
        checkemail = true

        }
        if(data['emailexist'] =="2"){
            emailHelp.innerHTML='?????????? ???????? ?????? ???????? ?????????? ???????? ??????'
    
            }
    
    })
}

function phonechanche(){
    var valuephone = phone.value
    $.post('/accounts/check/phone/',{
        
        phone:valuephone,
    
    },function(data){
        console.log(data)
        console.log(data['phoneexist'])
        if(data['phoneexist'] =="1"){
            phonehelp.innerHTML="?????????? ???? ???? ???????? ???????? ???????? ??????????"


        }
        if(data['phoneexist'] =="0"){
            phonehelp.innerHTML="?????????? ???????? ??????"
            checkphone = true
       

        }
        if(data['phoneexist'] =="2"){
            phonehelp.innerHTML="?????????? ???????? ?????? ?????? ?????? ?????? ???????? ???? ???????? ???????? ???????????? ????????"
    
            }
    
    })
    

}


function usernamechange(){
    var valueusername = username.value
    console.log(valueusername)
    if (valueusername.length>=5){

    $.post('/accounts/check/username/',{
        
        username:valueusername,
    
    },function(data){
        console.log(data)
        console.log(data['usernameexist'])
        if(data['usernameexist'] =="1"){
            
            usernamehelp.innerHTML = '?????? ???????????? ?????????????? ??????'

        }
        if(data['usernameexist'] =="0"){
            usernamehelp.innerHTML = '?????? ???????????? ???????? ??????'
            checkusername = true
           
       

        }
        if(data['usernameexist'] =="2"){
            usernamehelp.innerHTML = '?????? ???????????? ???????? ?????????? ???????? ??????'
    
    
            }
    
    })}
    else{
        usernamehelp.innerHTML = '?????? ???????????? ???????? 5 ?????????? ????????'
        
    }
    

}

function password2change(){
    valuepassword = password.value
    valuepassword2 = password2.value
    if (valuepassword == valuepassword2){

        if (valuepassword.length>=8){
        passwordhelp.innerHTML='?????? ?????? ??????'
        checkpassword=true

        }
        else{
        passwordhelp.innerHTML='?????? ???????? ???? 8 ?????? ??????'

        }
    }  
    else{
        passwordhelp.innerHTML='?????????? ?????????? ???? ????????????'
    }

}



function sighon(btn){
    
    if (checkemail && checkpassword && checkphone && checkusername){
        $.post('/accounts/register',{
            email:email.value,
            phone:phone.value,
            username:username.value,
            password:password.value,
            password2:password2.value,
            type : btn.dataset.type
        
        },function(data){
            console.log(data)
        
        }
        )

    }
    else{
        message.hidden=false
        message.innerHTML='?????????????? ?????? ???? ?????????? ????????'
}
}





function btn_sumbit(btn){
    alert('2')
    $.post('/accounts/register',{
        
        btnsumbit:2,
    
    },function(data){
console.log(data)
    })
}



