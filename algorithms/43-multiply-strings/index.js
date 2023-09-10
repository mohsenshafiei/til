const addStrings = (num1, num2) => {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry > 0) {
    const digit1 = i >= 0 ? parseInt(num1[i], 10) : 0;
    const digit2 = j >= 0 ? parseInt(num2[j], 10) : 0;

    const sum = digit1 + digit2 + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;

    i--;
    j--;
  }

  return result;
};

const multiply = (num1, num2) => {
  if (num1 === "0" || num2 === "0") return "0"; // consolidated the 0 check
  if (num1 === "1") return num2;
  if (num2 === "1") return num1;

  let res = [];
  let i = num1.length - 1;

  for (; i >= 0; i--) {
    let tempResult = "";
    let carry = 0;

    for (let padding = 0; padding < num1.length - 1 - i; padding++) {
      tempResult = "0" + tempResult;
    }

    for (let j = num2.length - 1; j >= 0 || carry > 0; j--) {
      const digit1 = parseInt(num1[i], 10);
      const digit2 = j >= 0 ? parseInt(num2[j], 10) : 0;

      const product = digit1 * digit2 + carry;
      carry = Math.floor(product / 10);
      tempResult = (product % 10) + tempResult;
    }

    res.push(tempResult);
  }

  const total = res.reduce((acc, curr) => addStrings(acc, curr), "0");
  return total;
};

// Test
console.log(multiply("123", "456")); // Expected output: "56088"
