const fs = require("fs");
const path = require("path");
module.exports = {
    loadData: (filenameJSON = "productsDataBase") => {
        const pathJSON = path.join(__dirname, `./${filenameJSON}.json`);
        const dataJson = fs.readFileSync(pathJSON, "utf-8");
        const dataJS = JSON.parse(dataJson);
        return dataJS;
    },
    saveData: (data,filenameJSON) =>{
        const pathJSON = path.join(__dirname, `./${filenameJSON}.json`)
        const dataString = JSON.stringify(data, null, 3);
        fs.writeFileSync(pathJSON, dataString, "utf-8");
    },
};