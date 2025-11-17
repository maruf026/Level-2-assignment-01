function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
}


function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }

  return 0;
}


class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}


function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  let filteredItems = items.filter((item) => item.rating >= 4);
  return filteredItems;
}


function filterActiveUsers(
  users: { id: number; name: string; email: string; isActive: boolean }[]
): { id: number; name: string; email: string; isActive: boolean }[] {
  let activeUser = users.filter((user) => user.isActive === true);
  return activeUser;
}


interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
function printBookDetails(bookDetails: Book) {
  console.log(
    `Title: ${bookDetails.title}, Author: ${bookDetails.author}, Published: ${
      bookDetails.publishedYear
    }, Available: ${bookDetails.isAvailable ? "Yes" : "No"}`
  );
}


function getUniqueValues<T>(array1: T[], array2: T[]): T[] {
  let uniqueValues: T[] = [];
  let index = 0;

  for (let i = 0; i < array1.length; i++) {
    let isPresent = false;

    for (let j = 0; j < uniqueValues.length; j++) {
      if (array1[i] === uniqueValues[j]) {
        isPresent = true;
        break;
      }
    }

    if (!isPresent) {
      uniqueValues[index] = array1[i];
      index++;
    }
  }
    for (let i = 0; i < array2.length; i++) {
    let isPresent = false;

    for (let j = 0; j < uniqueValues.length; j++) {
      if (array2[i] === uniqueValues[j]) {
        isPresent = true;
        break;
      }
    }

    if (!isPresent) {
      uniqueValues[index] = array2[i];
      index++;
    }
  }
  return uniqueValues;
}


function calculateTotalPrice(
  products: {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
  }[]
): number {
  let totalPrice = products.reduce((total, product) => {
    let totalItems = product.price * product.quantity;
    if (product.discount !== undefined) {
      totalItems = totalItems - (totalItems * product.discount) / 100;
    }
    return totalItems + total;
  }, 0);
  return totalPrice;
}
