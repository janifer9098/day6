import fs from "fs/promises";
const writefile=()=>{
    fs.writefile=async(path,data)=>{
        try{
            await fs.writefile( Path,data);
            console.log("wretten");

        }
        catch{
            console.log("unable to write");
        }
    }
}
const readfile=()=>{
    fs.readfile=async(path)=>{
        try{
             fs.readfile( Path,'utf-8');
            console.log(data);

        }
        catch(error){
            console.log("unable to read");
        }
    }
}
const appendfile=()=>{
    fs.appendfile=async(path)=>{
        try{
             fs.appendfile( Path,'utf-8');
            console.log(data);

        }
        catch(error){
            console.log("unable to read");
        }
    }
}
console.log("before append")
appendfile("/exp2.txt","data append successfully")
Console.log("after append")

Console.log("after read")
 readfile("/exp2.txt")
Console.log("after read")


Console.log("after write")


writefile("./exp.txt","written through sync fun()")
Console.log("after write")