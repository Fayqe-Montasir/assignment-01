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


const filterActiveUsers = (data: {id: number, name: string, email: string, isActive: boolean }[]) => {
    return data.filter((item) => item.isActive);
}


interface Book {
    title : string;
    author: string;
    publishedYear: number;
    isAvailable?: boolean;
}
const printBookDetails = (book: Book) =>{
    console.log(`Title: ${book.title}, Author: ${book.author}, Published : ${book.publishedYear} , Available : ${book.isAvailable ? "Yes" : "No"}`)
}


type ArrayType  = (number | string)[]
const getUniqueValues = (arr1: ArrayType, arr2: ArrayType): ArrayType => {
    const result: ArrayType = [];

    function exists(value: number | string): boolean {
        for (let i = 0; i < result?.length; i++) {
            if (result[i] === value) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (!exists(arr1[i])) {
            result.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!exists(arr2[i])) {
            result?.push(arr2[i]);
        }
    }

    return result;
}


interface IProduct {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}
const calculateTotalPrice = (products: IProduct[]): number => {
  return products
    .map(product => {
      const totalPrice = product.price * product.quantity;
      const finalPrice = product.discount ? totalPrice * (1 - product.discount / 100) : totalPrice;
      return finalPrice;
    })
    .reduce((sum, price) => sum + price, 0);
};
