export default function list(callback){
    var data_file = "http://localhost:3000/ajax/list";
    var http_request = new XMLHttpRequest();

    http_request.onreadystatechange = function() {
        if ( http_request.readyState === 4 ) {
            if( http_request.status === 200 ){
                var data = JSON.parse(http_request.response);
                callback(data);
            }
        }else{
        }
    }

    http_request.open("GET", data_file, true);
    http_request.send();
}
