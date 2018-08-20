$(function() {
    let $forgot = $('#forgotEmail');
    let $send = $('#send');
    $send.click(function() {
        if ($forgot.val().length >= 1) {
            alert("ok");
        }
        else {
            alert("please, enter your email");
        }
    });
});

