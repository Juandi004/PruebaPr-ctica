function isLeapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}
var year = 2020;
console.log("El a\u00F1o ".concat(year, " es bisiesto? ").concat(isLeapYear(year)));
