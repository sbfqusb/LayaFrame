"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var root = path.join(__dirname);
root = "csv";
var outPath = "../bin/res/data";
console.log("root:" + root);
var filelist = new Array();
readDirSync(root);
function readDirSync(path) {
    var pa = fs.readdirSync(path);
    pa.forEach(function (ele, index) {
        var info = fs.statSync(path + "/" + ele);
        if (info.isDirectory()) {
            //console.log("dir: "+ele)  
            readDirSync(path + "/" + ele);
        }
        else {
            if (getExtName(ele) === "csv") {
                filelist.push(path + "/" + ele);
            }
        }
    });
    processCSV();
}
function processCSV() {
    for (var i = 0; i < filelist.length; i++) {
        readCSV(filelist[i]);
    }
}
function readCSV(file) {
    // body...
    console.log("csv:" + file);
    fs.readFile(file, function (err, data) {
        if (err) {
            console.log(err.stack);
            return;
        }
        ConvertToTable(getFileName(file), data, function (value) {
            console.log(value);
            writeFile(outPath + "/" + getFileName(file) + ".json", value);
        });
    });
}
function ConvertToTable(filename, data, callBack) {
    data = data.toString();
    var table = new Array();
    var rows = new Array();
    var name = new Array();
    var type = new Array();
    var ObjectRe = "";
    rows = data.split("\r\n");
    for (var i = 0; i < rows.length; i++) {
        if (i === 1) {
            var typeArr = rows[i].split("\t");
            name = typeArr;
        }
        else if (i === 2) {
            var typeArr = rows[i].split("\t");
            type = typeArr;
        }
        else {
            var dataArray = rows[i].split("\t");
            if (i > 2 && dataArray.length === type.length) {
                var rowArray = new Array();
                for (var j = 0; j < dataArray.length; j++) {
                    if (type[j] === "number") {
                        rowArray.push(parseInt(dataArray[j]));
                    }
                    else {
                        rowArray.push(dataArray[j]);
                    }
                }
                table.push(rowArray);
            }
        }
    }
    var resultObj = {};
    for (var i = 0; i < table.length; i++) {
        var item = table[i];
        resultObj[item[0]] = {};
        for (var index = 0; index < item.length; index++) {
            var element = item[index];
            resultObj[item[0]][name[index]] = element;
        }
    }
    var ss = JSON.stringify(resultObj);
    callBack(ss);
}
//获取后缀名
function getExtName(url) {
    var arr = url.split('.');
    var len = arr.length;
    return arr[len - 1];
}
function getBaseName(url) {
    var arr = url.split('.');
    var len = arr.length;
    return arr[0];
}
function getFileName(url) {
    var baseName = getBaseName(url);
    var index = baseName.lastIndexOf("/");
    var subStr = baseName.substr(index + 1);
    console.log(subStr);
    return subStr;
}
// 写入到filelisttxt文件
function writeFile(filename, data) {
    fs.writeFile(filename, data, function (err) {
        if (err)
            throw err;
        console.log(filename + "写入成功");
    });
}
//# sourceMappingURL=parseCSV.js.map