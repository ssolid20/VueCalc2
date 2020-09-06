var spawn = require('child_process').spawn

exports.handler= function(event,context,callback){
    /*let x = Object.keys(event.body).toString()*/
    let x = event.body
    console.log(x + ' ' +  'goes to python')
    var py = spawn('python', ['2.py'])
    var data = x
    var dataString = '';
    py.stdout.on('data', function(data){
        dataString += data.toString();
    });
    py.stdout.on('end', function(){
        console.log('Result=',dataString)
        if (dataString == '') {dataString = "Couldn't regonise problem or there are no solutions, try again"}
        callback(null,{
            statusCode:200,
            headers:{
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Headers':'Origin ,X-Requested-With,Content-Type,Accept'
            },
            body:dataString.toString()
        })
        /*res.json(dataString)
        res.end()*/
        dataString='';
    });
    py.stdin.write(JSON.stringify(data));
    py.stdin.end();

}