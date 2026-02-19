import fs from "fs";

const writeFileSyncCustom = (path, data) => {
    try {
        fs.writeFileSync(path, data);
        console.log("Success");
    } catch (error) {
        console.error("unable writing");
    }
}
const readfileSync=(path)=>{
    try{
        const data=fs.readfileSync Path,"utf-8";

    }
    catch{
        console.log("unavlibale");
    }
}


const appendToFile = (path, data) => {
    try {
        fs.appendFileSync(path, data);
        console.log("Append successful");
    } catch (err) {
        console.error("Append failed:", err.message);
    }
};

appendToFile("log.txt", "Hello\n");
writeFileSyncCustom("sample.txt", "Hello from Node.js");
