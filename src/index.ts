function isLeapYear(year:number):boolean{
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}

const year:number= 2020;

console.log( `El año ${year} es bisiesto? ${isLeapYear(year)}`);