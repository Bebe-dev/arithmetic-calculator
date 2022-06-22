var opr = prompt("Choose your operator")
var num1 = parseInt(prompt("Enter your first number"))
var num2 = parseInt(prompt("Enter your second number"))

if(opr == "+"){
  console.log(num1 + num2)
}else if(opr == "-"){
  console.log(num1 - num2)
}else if(opr == "/"){
  console.log(num1 / num2)
}else if(opr == "*"){
  console.log(num1 * num2)
}