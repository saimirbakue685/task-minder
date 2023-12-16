/* 
 * Filename: sophisticated_code.js
 * Description: Complex code demonstrating a sophisticated JavaScript algorithm
 */

// Function to calculate the factorial of a number (recursive implementation)
function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// Function to generate the Fibonacci sequence up to a given number (iterative implementation)
function fibonacci(limit) {
  let sequence = [0, 1];

  for (let i = 2; i <= limit; i++) {
    let next = sequence[i - 1] + sequence[i - 2];
    sequence.push(next);
  }

  return sequence;
}

// Function to sort an array of numbers in ascending order using bubble sort algorithm
function bubbleSort(arr) {
  let len = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    len--;
  } while (swapped);

  return arr;
}

// Object representing a shape with common properties and methods
class Shape {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }

  area() {
    throw new Error("Method 'area' must be implemented by subclasses");
  }
}

// Subclass of Shape representing a rectangle
class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

// Example usage of the above code
let fact = factorial(5);
console.log("Factorial of 5:", fact);

let fibSeq = fibonacci(10);
console.log("Fibonacci sequence upto 10:", fibSeq);

let unsortedArr = [9, 3, 7, 2, 1, 5, 4, 6, 8];
console.log("Unsorted array:", unsortedArr);
let sortedArr = bubbleSort(unsortedArr);
console.log("Sorted array:", sortedArr);

let rect = new Rectangle("blue", 4, 6);
console.log("Rectangle area:", rect.area());
console.log("Rectangle color:", rect.getColor());
