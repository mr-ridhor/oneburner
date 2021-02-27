const express = require('express');
const path = require ('path');

const app =express();

app.use(express.static('./dist/oneburner'));

app.get('/*', (res,req)=>
    res.sendFile('index.html', {root: 'dist/oneburner/'}),

);

app.listen(process.env.PORT || 8080)
