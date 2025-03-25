let weightJs = Number(prompt("Nhập sô cân nặng (kg): "));
let heightJs = Number(prompt("Nhập sô chiều cao (m): "));
let BMI = (weightJs /(heightJs * heightJs)).toFixed(2) ;
if (BMI<=18.5){
    alert(`Với chiều cao ${heightJs}m, cân nặng ${weightJs}kg thì chỉ số BMI sẽ là ${BMI} vậy bạn thuộc loại "Cân nặng thấp (Gầy)"`)
}
else if ( BMI >= 18.5 && BMI <= 24.9 || BMI >= 18.5 && BMI <= 22.9){
    alert(`Với chiều cao ${heightJs}m, cân nặng ${weightJs}kg thì chỉ số BMI sẽ là ${BMI} vậy bạn thuộc loại "Cân nặng Bình thường"`)
}
else if (BMI >= 25 && BMI <= 29.8 || BMI >= 23 && BMI <= 24.9){
    alert(`Với chiều cao ${heightJs}m, cân nặng ${weightJs}kg thì chỉ số BMI sẽ là ${BMI} vậy bạn thuộc loại "Tiền béo phì"`)
}
else if (BMI >= 30 && BMI <= 34.9 || BMI >= 25 && BMI <= 29.9){
    alert(`Với chiều cao ${heightJs}m, cân nặng ${weightJs}kg thì chỉ số BMI sẽ là ${BMI} vậy bạn thuộc loại "Béo phì độ I"`)
}
else if (BMI >= 30){
    alert(`Với chiều cao ${heightJs}m, cân nặng ${weightJs}kg thì chỉ số BMI sẽ là ${BMI} vậy bạn thuộc loại "Béo phì độ II"`)
}
else  { //>=40
    alert(`Với chiều cao ${heightJs}m, cân nặng ${weightJs}kg thì chỉ số BMI sẽ là ${BMI} vậy bạn thuộc loại "Béo phì độ III"`)
};