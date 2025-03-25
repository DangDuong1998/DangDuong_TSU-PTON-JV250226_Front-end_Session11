let weightJs = Number(prompt("Nhập sô cân nặng (kg): "));
let heightJs = Number(prompt("Nhập sô chiều cao (m): "));
let BMI = (weightJs /(heightJs * heightJs)).toFixed(2) ;

let WHO = "";
let IDI = "";
if(BMI < 18.5){
    WHO = "Cân nặng thấp (gầy)"
}
else if(BMI <= 24.9){
    WHO = "Bình thường"
}
else if(BMI <= 29.9){
    WHO = "Tiền béo phì"
}
else if(BMI <= 34.9){
    WHO = "Béo phì độ I"
}
else if(BMI <= 39.9){
    WHO = "Béo phì độ II"
}
else {
    WHO = "Béo phì độ III"
}


if(BMI <= 18.5){

}
else if(BMI >= 18.5 && BMI <= 22.9){
    IDI = "Bình thường"
}
else if(BMI <= 24.9){
    IDI = "Tiền béo phì"
}
else if(BMI <= 29.9){
    IDI = "Béo phì độ I"
}
else {
    IDI = "Béo phì độ II"
}

if (WHO === IDI){
    alert(`Với chiều cao ${heightJs}m, cân nặng ${weightJs}kg thì chỉ số BMI sẽ là ${BMI} vậy bạn thuộc loại "${WHO}" - WHO & IDI & WPRO`)
}
else if(IDI ===""){
    alert(`Với chiều cao ${heightJs}m, cân nặng ${weightJs}kg thì chỉ số BMI sẽ là ${BMI} vậy bạn thuộc loại "${WHO}" - WHO`)
}
else{
    alert(`Với chiều cao ${heightJs}m, cân nặng ${weightJs}kg thì chỉ số BMI sẽ là ${BMI} .Vậy bạn thuộc loại "${WHO}" - WHO và "${IDI}" - IDI & WPRO`)
}
