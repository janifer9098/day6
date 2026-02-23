const fs = require('fs');

const filePath = 'data.json';

// READ FILE
function readFile() {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

// WRITE FILE
function writeFile(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4));
}

// CREATE
function create(id, name, age) {
    const data = readFile();
    data.push({ id, name, age });
    writeFile(data);
    console.log("Record Created");
}

// READ
function read() {
    const data = readFile();
    console.log(data);
}

// UPDATE
function update(id, newName, newAge) {
    const data = readFile();

    const index = data.findIndex(item => item.id === id);
    if (index !== -1) {
        data[index].name = newName;
        data[index].age = newAge;
        writeFile(data);
        console.log("Record Updated");
    } else {
        console.log("Record Not Found");
    }
}

// DELETE
function remove(id) {
    let data = readFile();

    const newData = data.filter(item => item.id !== id);
    writeFile(newData);
    console.log("Record Deleted");
}

// TESTING
create(2, "Aman", 30);
read();

update(2, "Aman Singh", 31);
read();

remove(2);
read();




