var readFile=require("./n8_readfile.js")
module.exports={
    readhtml:function(request,response){
        response.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        function recall(data){
            response.write(data);
            response.end('')
        }
        readFile.readhtml('./views/n8_readhtml.html',recall)
    },
    readimg:function(request,response){
        response.writeHead(200,{"content-type":"image/jpg"});
        function recall(data){
            response.write(data,'binary');
            response.end('');
        }
        readFile.readimgs('./img/fish.png',recall)
    }
}