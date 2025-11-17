01 : What is the use of the keyof keyword in TypeScript? Provide an example.

>> keyof এর মাধ্যমে আমরা কোন type বা interface এ থাকা key property গুলো পেতে পারি । যেমন যদি কোনো object type এ keyof ব্যবহার করি, তাহলে সেই অবজেক্টের সব key কে একটি টাইপ হিসেবে পাবো।
যেমন :  type Product = {
  name: string;
  price: number;
  inStock: boolean;
};
type ProductKeys = keyof Product;



