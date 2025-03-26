let aInput = Number(prompt("Mời bạn nhập vào số a"));
let bInput = Number(prompt("Mời bạn nhập vào số b"));
let cInput = prompt("Mời bạn nhập vào các phép tính (+, -, *, /)");
let dOutput;
if (cInput === "+"){
    dOutput = aInput + bInput;
    alert(`Kết quả của phép tính trên: a + b = ${dOutput}`);
}
else if (cInput === "-"){
    dOutput = aInput - bInput;
    alert(`Kết quả của phép tính trên: a - b = ${dOutput}`);
}
else if (cInput === "*"){
    dOutput = aInput * bInput;
    alert(`Kết quả của phép tính trên: a * b = ${dOutput}`);
}
else if (cInput === "/"){
    dOutput = aInput / bInput;
    alert(`Kết quả của phép tính trên: a / b = ${dOutput}`);
}
else {
    alert("Chịu thôi!!!!");
}

