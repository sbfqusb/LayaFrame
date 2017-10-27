import * as fs from 'fs';
import * as path from 'path';

let root = path.join(__dirname)
root = "csv";
let outPath = "../bin/res/data"
console.log("root:" + root);
let filelist = new Array();
readDirSync(root)
function readDirSync(path) {
	let pa = fs.readdirSync(path);
	pa.forEach(function (ele, index) {
		let info = fs.statSync(path + "/" + ele)
		if (info.isDirectory()) {
			//console.log("dir: "+ele)  
			readDirSync(path + "/" + ele);
		} else {
			if (getExtName(ele) === "csv") {
				filelist.push(path + "/" + ele)
			}
		}
		
	})
	processCSV();
}


function processCSV() {
	for (let i = 0; i < filelist.length; i++) {
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

		ConvertToTable(getFileName(file),data, function (value) {
			console.log(value);
			writeFile(outPath+"/"+getFileName(file)+".json",value);
		})
	});
}

function ConvertToTable(filename,data, callBack) {
	data = data.toString();
	let table = new Array();
	let rows = new Array();
	let name = new Array();
	let type = new Array();
	let ObjectRe = "";
	rows = data.split("\r\n");
	for (let i = 0; i < rows.length; i++) {
		if (i === 1) {
			let typeArr = rows[i].split("\t")
			name = typeArr;
		} else if (i === 2) {
			let typeArr = rows[i].split("\t")
			type = typeArr
		} else {
			let dataArray = rows[i].split("\t")
			if (i > 2 && dataArray.length === type.length) {
				let rowArray = new Array();
				for (let j = 0; j < dataArray.length; j++) {
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


	let resultObj = {};
	for (let i = 0; i < table.length; i++) {
		let item: Array<any> = table[i];
		resultObj[item[0]] = {}
		for (let index = 0; index < item.length; index++) {
			let element = item[index];
			resultObj[item[0]][name[index]] = element;
		}
	}

	if (filename === "ui") {
		PareUI(resultObj);
	}
	
	let ss = JSON.stringify(resultObj);
	callBack(ss);
}

function PareUI(object:Object){
	console.log(object);
	for (let key in object) {
		if (object.hasOwnProperty(key)) {
			let element = object[key];
			let arr:Array<string> = (element["Texture"] as string).split(",");
			let ObjList:Array<Object> = new Array<Object>();
            for (let index = 0; index < arr.length; index++) {
                let resArray = {};
                let element = arr[index];
                resArray["url"] = element;
                resArray["type"] = "atlas";
                ObjList.push(resArray);
			}
			element["Texture"] = ObjList;
			
		}
	}
}
//获取后缀名
function getExtName(url) {
	let arr = url.split('.');
	let len = arr.length;
	return arr[len - 1];
}

function getBaseName(url) {
	let arr = url.split('.');
	let len = arr.length;
	return arr[0];
}

function getFileName(url){
	let baseName:string = getBaseName(url);
	let index = baseName.lastIndexOf("/");
	let subStr = baseName.substr(index+1);
	console.log(subStr);
	return subStr;
}

// 写入到filelisttxt文件
function writeFile(filename, data: string) {
	fs.writeFile(filename, data, function (err) {
		if (err) throw err;
		console.log(filename+"写入成功");
	});
}