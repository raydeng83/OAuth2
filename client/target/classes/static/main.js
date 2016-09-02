var url="http://127.0.0.1:8081/oauth/authorize";

//var getAuthCode = function () {
//    $.ajax({
//        type: 'get',
//        url: url,
//        data: {
//            'response_type' : 'code',
//            'client_id' : 'acme',
//            'redirect_uri' : 'http://example.com'
//        },
//        success: function(res){
//            console.log(res);
//        }
//    });
//}

$(document).ready(function() {
    $("#button-getAuthCode").click(function() {
        window.location.replace("http://localhost:8081/oauth/authorize?response_type=code&client_id=acme&redirect_uri=http://127.0.0.1:8080/authCode");
    });
});

