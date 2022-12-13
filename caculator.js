let height1 = document.getElementById('height')
let weight1 = document.getElementById('weight')
let cal = document.getElementById('cal')

function caculate(height, weight) {
    if(height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
        alert('No Caculate');
    } else{
        height = height/100
        let bmi = weight/Math.pow(height, 2);
        return bmi;
    }
}

cal.onclick = function result() {
    let height = height1.value;
    let weight = weight1.value;
    let bmi = caculate(height, weight);
    if(bmi < 16){
        alert('Gầy Cấp Độ III')
    } else if(bmi >= 16 && bmi < 17){
        alert('Gầy Cấp Độ II')
    } else if(bmi >= 17 && bmi < 18.5){
        alert('Gầy Cấp Độ I')
    } else if(bmi >= 18.5 && bmi < 25){
        alert('Bình Thường')
    } else if(bmi >= 25 && bmi < 30){
        alert('Thừa Cân')
    } else if(bmi >= 30 && bmi < 35){
        alert('Béo Phì Cấp Độ I')
    } else if(bmi >= 35 && bmi < 40){
        alert('Béo Phì Cấp Độ II')
    } else if(bmi > 40){
        alert('Béo Phì Cấp Độ III')
    }
}