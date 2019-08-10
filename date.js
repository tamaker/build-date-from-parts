function getFileDate() {
    currDateObj = new Date();
    currDateMon = currDateObj.getMonth();
    currDateDat = currDateObj.getDate();
    currDateYear = currDateObj.getFullYear();

    if (currDateMon.toString().length == 1) {
        currDateMon = '0' + currDateMon;
    }
    if (currDateDat.toString().length == 1) {
        currDateDat = '0' + currDateDat;
    }
    return currDateMon + '-' + currDateDat + '-' + currDateYear;
}

console.log(getFileDate());
