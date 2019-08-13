import http from 'http';
import express from 'express';
import reload from 'reload';
import router from './routes/route';

const app = express();
const port = 3000;

app.use('/',router);

var server = http.createServer(app);

reload(app).then(function(reloadReturned){
    console.log('reload');
    server.listen(port, () => {
        console.log('Express listening on port', port);
    });
});
