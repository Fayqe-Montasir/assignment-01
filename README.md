### 1.What are some differences between interfaces and types in TypeScript?
Interfaces are mainly used to describe the structure of objects in a clean, object-oriented style.
Types are more flexible; they can describe objects, unions, primitives, and even complex type combinations.
 **Key Differences**
- Purpose and Flexibility
Interfaces focus mainly on object structures.
Types can define many things like unions, functions, primitives, or object shapes.
- Extending or Inheriting
Interfaces use `extends` to inherit properties from other interfaces.
Types use `&` (intersection) to combine multiple types into one.
- Declaration Merging
Interfaces support declaration merging — if an interface is declared twice, TypeScript merges them.
Types do not support merging — declaring a type twice will throw an error.
- Union Types
Interfaces cannot create union types.
Types can easily create union types using the `|` operator.
- Use Cases
Use interfaces when defining object shapes, especially in class-based systems.
Use types when you need flexibility like unions, intersections, or transforming types.
Examples
Interface Example
Type Example
```ts
interface User {
  name: string;
  age: number;
}
ts
type User = {
  name: string;
  age: number;
};
```
 Both define the same structure but behave differently when extended or merged.
**Final Thoughts**
Interfaces are clean, simple, and perfect for object-oriented designs.
Types are powerful, flexible, and ideal for advanced type manipulation.
Understanding both helps you write professional, scalable, and maintainable TypeScript code.

### 2. What is the use of the keyof keyword in TypeScript? Provide an example.
Ans:- keyof creates a union type of all keys from an object type. It helps with type-safe property access. It is commonly used with generics for reusable and safe utility functions.

### 3.Explain the difference between any, unknown, and never types in TypeScript.
**`any`**
* Accepts any value.
* You can do anything with it.
* No type safety.

**`unknown`**
* Accepts any value, BUT
* You must check the type before using it.

**`never`**
* Represents no value.
* Used for functions that never return or unreachable code.





