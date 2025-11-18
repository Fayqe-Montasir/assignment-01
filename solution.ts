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


class Person {
    name : string;
    age : number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
     getDetails() {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }

}


const filterByRating = (data: { title: string, rating: number }[]) => {
    return data.filter((item) => item.rating >= 4);
}


