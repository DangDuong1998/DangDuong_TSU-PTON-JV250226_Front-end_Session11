let namNhuan ;
let booleanNamNhuan = false;
while(booleanNamNhuan==false){
    namNhuan= Number(prompt("Nhập năm cần kiểm tra "));
    if (namNhuan % 4 === 0 &&  namNhuan % 100 !== 0) {
        alert(`${namNhuan} là năm nhuận`);
        booleanNamNhuan = true;
    }
    else if(namNhuan % 400 === 0 &&  namNhuan % 100 === 0) {
        alert(`${namNhuan} là năm nhuận`);
        booleanNamNhuan = true;
    }
    else if(namNhuan % 100 === 0 && namNhuan % 400 !== 0) {
        alert(`${namNhuan} không phải là năm nhuận`);
    }
    else{
        alert(`${namNhuan} không phải là năm nhuận, xin hãy nhập lại`);
    }
}