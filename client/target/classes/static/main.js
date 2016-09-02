var authCode = null;
var credential = "Basic "+btoa("acme:acmesecret");
var token = null;

var getAuthCode = function (authCode) {
    $.ajax({
        type: 'post',
        url: 'http://localhost:8081/oauth/token',
        beforeSend: function (request)
        {
            console.log(credential);
            request.setRequestHeader("Authorization", credential);
        },
        data: {
            'grant_type' : 'authorization_code',
            'client_id' : 'acme',
            'redirect_uri' : 'http://127.0.0.1:8080/authCode',
            'code' : authCode
        },
        success: function(res){
            token = res.access_token;
            $("#token").text(token);
        }
    });
}


$(document).ready(function () {
    $("#button-getAuthCode").click(function () {
        window.location.replace("http://localhost:8081/oauth/authorize?response_type=code&client_id=acme&redirect_uri=http://127.0.0.1:8080/authCode");
    });

    authCode = $('#auth-code').text();

    $("#button-getAccessToken").click(function() {
        getAuthCode(authCode);
    });

});

