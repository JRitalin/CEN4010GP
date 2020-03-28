$('document').ready(function(){
    $('#content').append(
        '<div class = "card">'+
            '<article class = "card-body">'+
            '<form id="login-form" class="modal">'+
            '<label for="email">Enter your email:</label>'+ 
            '<input type="email" id="email" name="email">'+
            '<br>'+
            '<label for="pwd">Password:</label>'+
            '<input type="password" id="pwd" name="pwd">'+
            '<button type="submit" class="signup">Sign Up</button>'+
            '</form>'+
            '<div class="g-signin2 float-right" data-onsuccess="onSignIn"></div>'+
            '<a href = "#login-form" class = "float-right btn btn-outline-primary id" rel="modal:open"> Sign up </a>' +
            '<h4 class = "card-title mb-4 mt-1" > Sign in </h4>'+
             '<form>'+
             '<div class = "form-group" >'+
             '<label> Your email </label>'+ 
             '<input name = "" class = "form-control" placeholder = "Email" type = "email">'+
            '</div>'+
            '<div class ="form-group">'+
            '<a class ="float-right" href = "#"> Forgot? </a>'+
            '<label> Your password </label>'+
            '<input class= "form-control" placeholder = "******" type = "password">'+
            '</div>'+
            '<div class = "form-group">'+
            '<div class = "checkbox">'+
            '<label><input type = "checkbox"> Save password </label>' +
            '</div>'+
            '</div>'+
            '<div class = "form-group">'+
            '<button type="submit" class="btn btn-primary btn-block"> Login </button>'+ 
            '</div>'+
            '</form> </article> </div>'
    );
});

// this comment is for testing

// Google Script for sign in button
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }