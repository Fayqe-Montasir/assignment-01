function formatValue(value : string | number | boolean ) : string | number | boolean {

    if(typeof value === "string"){
        return value.toUpperCase()
    } 
    else if(typeof value === "number"){
        return (10* value)
    }
     else {
        return !value
    }
}
console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));

