let weightJs = Number(prompt("Nhập sô cân nặng (kg): "));
let heightJs = Number(prompt("Nhập sô chiều cao (m): "));
let BMI = (weightJs /(heightJs * heightJs)).toFixed(2) ;
if (BMI<=18.5){
    alert(`Với chiều cao ${heightJs}m, cân nặng ${weightJs}kg thì chỉ số BMI sẽ là ${BMI} vậy bạn thuộc loại "Cân nặng thấp (Gầy)"- WHO`);
}
else if ( BMI >= 18.5 && BMI <= 24.9){
    if(BMI <= 22.9){
        alert(`Với chiều cao ${heightJs}m, cân nặng ${weightJs}kg thì chỉ số BMI sẽ là ${BMI} vậy bạn thuộc loại "Cân nặng Bình thường" - WHO & IDI & WPRO`);
    }
    else{
        alert(`Với chiều cao ${heightJs}m, cân nặng ${weightJs}kg thì chỉ số BMI sẽ là ${BMI} .Vậy bạn thuộc loại "Cân nặng Bình thường" - WHO và "Tiền béo phì" - IDI & WPRO`);
    }
}
else if (BMI >= 23 && BMI <= 29.9){
    if(BMI<= 24.9){
        alert(`Với chiều cao ${heightJs}m, cân nặng ${weightJs}kg thì chỉ số BMI sẽ là ${BMI} vậy bạn thuộc loại "Tiền béo phì" - WHO & IDI & WPRO`);
    }
    else{
        alert(`Với chiều cao ${heightJs}m, cân nặng ${weightJs}kg thì chỉ số BMI sẽ là ${BMI} vậy bạn thuộc loại "Tiền béo phì" - WHO và "Béo phì độ I" - IDI & WPRO`);
    }
}
else if (BMI >= 25 && BMI <= 34.9){
    if(BMI <= 29.9){
        alert(`Với chiều cao ${heightJs}m, cân nặng ${weightJs}kg thì chỉ số BMI sẽ là ${BMI} vậy bạn thuộc loại "Béo phì độ I" - WHO & IDI & WPRO`);
    }
    else{
        alert(`Với chiều cao ${heightJs}m, cân nặng ${weightJs}kg thì chỉ số BMI sẽ là ${BMI} vậy bạn thuộc loại "Béo phì độ I" - WHO và "Béo phì độ II" - IDI & WPRO`);
    }   
}
else if (BMI >= 30 && BMI <= 39.9){
    if(BMI < 35){
        alert(`Với chiều cao ${heightJs}m, cân nặng ${weightJs}kg thì chỉ số BMI sẽ là ${BMI} vậy bạn thuộc loại "Béo phì độ I" - WHO và "Béo phì độ II" - IDI & WPRO `);
    }
    else{
        alert(`Với chiều cao ${heightJs}m, cân nặng ${weightJs}kg thì chỉ số BMI sẽ là ${BMI} vậy bạn thuộc loại "Béo phì độ II" - WHO & IDI & WPRO`);
    }
}
else  { 
    alert(`Với chiều cao ${heightJs}m, cân nặng ${weightJs}kg thì chỉ số BMI sẽ là ${BMI} vậy bạn thuộc loại "Béo phì độ III" -WHO`);
}
