/*
* name;
*/
// interface BasePacket{
//     defines:any[][];
// }

interface IC2S_Ping {
    defines: (string | number)[][];
    Ping: number;
}
let C2S_Ping = new BasePacket(
    [
        ["Ping", DataType.UINT32]
    ]
)

interface ICS_LoginPacket {
    defines: (string | number)[][];
    LoginStr: string;
}
let CS_LoginPacket = new BasePacket(
    [
        ["LoginStr", DataType.STRING]
    ]
)



// let CS_LoginPacket = {
//     defines: [
//         ["LoginStr", DataType.STRING]
//     ],
// }

interface ISC_LoginResultPacket {
    defines: (string | number)[][];
    errcode: number;
    errmsg: string;
    userid: number;
    usergrp: number;
    username: string;
}

let SC_LoginResultPacket = {
    defines: [
        ["errcode", DataType.UINT32],
        ["errmsg", DataType.STRING],
        ["userid", DataType.UINT32],
        ["usergrp", DataType.UINT32],
        ["username", DataType.STRING]
    ]
}



interface ISC_RegResult {
    defines: (string | number)[][];
    errcode: number;
    errmsg: string;
    userid: number;
    username: string;
    userpwd: string;
}
let SC_RegResult = {
    defines: [
        ["errcode", DataType.UINT32],
        ["errmsg", DataType.STRING],
        ["userid", DataType.UINT32],
        ["username", DataType.STRING],
        ["userpwd", DataType.STRING]
    ]
}

interface ISC_LoginReply {
    defines: (string | number)[][];
    appid: number;
    username: string;
    verifycode: string;
    port: number;
    gameserverip: string;
}
let SC_LoginReply = {
    defines: [
        ["appid", DataType.UINT32],
        ["userid", DataType.UINT32],
        ["username", DataType.STRING],
        ["verifycode", DataType.STRING],
        ["port", DataType.UINT16],
        ["gameserverip", DataType.STRING],
    ]
}

interface ICS_LoginGame {
    defines: (string | number)[][];
    appid: number;
    userid: number
    username: string;
    verifycode: string;
    port: number;
    gameserverip: string;
}
let CS_LoginGame = {
    defines: [
        ["appid", DataType.UINT32],
        ["userid", DataType.UINT32],
        ["username", DataType.STRING],
        ["verifycode", DataType.STRING],
        ["port", DataType.UINT16],
        ["gameserverip", DataType.STRING],
    ]
}
