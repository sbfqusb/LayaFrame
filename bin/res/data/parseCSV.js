var fs = require("fs");
var path = require("path")

var root = path.join(__dirname)  
console.log(root);
var filelist = new Array();
readDirSync(root)
function readDirSync(path){  
    var pa = fs.readdirSync(path);  
    pa.forEach(function(ele,index){  
        var info = fs.statSync(path+"/"+ele)      
        if(info.isDirectory()){  
            //console.log("dir: "+ele)  
            readDirSync(path+"/"+ele);  
        }else{  
            if (getdir(ele)==="csv") {
            	filelist.push(ele) 
            }
        }     
    })  
}  


for (var i = 0; i < filelist.length; i++) {
	readCSV(filelist[i]);
}

function readCSV(file) {
	// body...
	console.log("csv:" + file);
	fs.readFile(file, function (err, data) {
	    var table = new Array();
	    if (err) {
	        console.log(err.stack);
	        return;
	    }

	    ConvertToTable(data, function (table) {
	        console.log(table);
	    })
	});
	console.log("程序执行完毕");
}

function ConvertToTable(data, callBack) {
    data = data.toString();
    var table = new Array();
    var rows = new Array();
    var name = new Array();
    var type = new Array();
    let ObjectRe = "";
    rows = data.split("\r\n");
    for (var i = 0; i < rows.length; i++) {
    	if (i === 1) {
    		let typeArr = rows[i].split("\t")
    		name = typeArr;
    		console.log(name);
    	}else if (i === 2) {
    		var typeArr = rows[i].split("\t")
    		type = typeArr
    	}else
    	{
    		var dataArray = rows[i].split("\t")
    		if (i>2 && dataArray.length === type.length) {
    			let rowArray = new Array();
	    		for (var j = 0; j < dataArray.length; j++) {
	    			if (type[j] === "number") {
	    				rowArray.push(parseInt(dataArray[j]));
	    			} else {
	    				rowArray.push(dataArray[j]);
	    			}
	    			
	    		}
	    		table.push(rowArray);
    		}
    	}
        
    }
    for (var i = 0; i < table.length; i++) {
    	table[i]
    }
    callBack(table);
}

//获取后缀名
function getdir(url){
    var arr = url.split('.');
    var len = arr.length;
    return arr[len-1];
}

// 写入到filelisttxt文件
function writeFile(data){
    var data = data.join("\n");
    fs.writeFile(filePath+"/"+"filelist.txt",data+'\n',function(err){
        if(err) throw err;
        console.log("写入成功");
    });
}