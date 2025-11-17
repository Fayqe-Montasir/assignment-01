function formatValue(value : string | number | boolean ) : string | number | boolean {

    if(typeof value === "string"){
        return value.toUpperCase();
    } 
    else if(typeof value === "number"){
        return (10 * value);
    }
     else {
        return !value;
    }
}

console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));


function getLength(value : string | any[] ) : number { 
    if(typeof value === "string"){
    return value.length;
    } 
    else if (Array.isArray(value)){
        return value.length;
    }else{
        return 0;
    }
}

console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));