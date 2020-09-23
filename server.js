
let ex = require('express');
let app = ex();
var Algebrite = require('algebrite')
NODE_ENV='production'
var compression = require('compression');
var helmet = require('helmet');
var cors = require("cors");
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(ex.json())
app.listen(4000);
/*app.use(ex.static(path.join(__dirname, 'dist')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});*/
//var dataString = '';
//process.env.PORT || 5000;
/*
app.use(ex.urlencoded({ extended: false }));
app.post('/', (req, res) => {
    let x = Object.keys(req.body).toString()
    console.log(x + ' ' +  'goes to python')
    var spawn = require('child_process').spawn
    var py = spawn('python3', ['2.py'])
    var data = x
    var dataString = '';
    py.stdout.on('data', function(data){
        dataString += data.toString();
    });
    py.stdout.on('end', function(){
        console.log('Result=',dataString)
        if (dataString == '') {dataString = "Couldn't regonise problem or there are no solutions, try again"}
        res.json(dataString)
        res.end()
        dataString='';
    });
    py.stdin.write(JSON.stringify(data));
    py.stdin.end();
})
https://github.com/davidedc/Algebrite/tree/51d40342210d7b4dc574bc1a27fcf28613eb624c
*/
app.use(ex.urlencoded({ extended: false }));
app.post('/', (req, res) => {
    let x = Object.keys(req.body).toString()
    console.log(x)
    let dataString =''
    try{dataString = Algebrite.eval(`${x}`).toString()} 
    catch(err) {dataString = "Couldn't regonise problem or there are no solutions, try again"}
    res.json(dataString)
    res.end()

})