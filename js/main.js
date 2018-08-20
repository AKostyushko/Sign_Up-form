$(function() {
    let $sign = $('.form-submit-singUp');
    $sign.click(function() {
        $('#signUp').css('display','block');
        $('#login').css('display','none');
    });
    let $signUp = $('.login-form__singUp');
    $signUp.click(function() {
        let $name = $('.signUp-form__name').val();
        let $email = $('.signUp-form__email').val();
        let $pass = $('.signUp-form__password').val();
        let $pass2 = $('.signUp-form__password2').val();
        alert("test: " + $name + "," + $email + "," + $pass + "," + $pass2);
        let user = {};
        user.name = $name;
        user.email = $email;
        alert("Your account: " + user.name + ", " + user.email);
    });

});

