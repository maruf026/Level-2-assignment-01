01 : What is the use of the keyof keyword in TypeScript? Provide an example.

>> keyof এর মাধ্যমে আমরা কোন type বা interface এ থাকা key property গুলো পেতে পারি । যেমন যদি কোনো object type এ keyof ব্যবহার করি, তাহলে সেই অবজেক্টের সব key কে একটি টাইপ হিসেবে পাবো।
যেমন :  type Product = {
  name: string;
  price: number;
  inStock: boolean;
};
type ProductKeys = keyof Product;


02: Provide an example of using union and intersection types in TypeScript.

>> Union type (|) : যদি একাধিক type থাকে, তাহলে value  যেকোনো একটি type হতে পারে।
 যেমন : function input(value: string | number) {
  return value.toString();
}
এখানে value string ও হতে পারে number ও হতে পারে

>> Intersection type (&): যদি একাধিক type থাকে, তাহলে value অবশ্যই সবগুলো type হতে হবে।
যেমন: type Person = {
  name: string;
};

type Employee = {
  id: number;
};

type Staff = Person & Employee;

const staff1: Staff = {
  name: "Abdur Rahman",
  id: 10,
};
