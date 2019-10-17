function form(callback,_data){
    var data_file = "http://localhost:3000/ajax/form";
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

    http_request.open("POST", data_file, true);
    // http_request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    http_request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    
    http_request.send(JSON.stringify(_data));
    
}
export default form;