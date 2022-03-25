let bInput = document.querySelector('#bangInput');
let eInput = document.querySelector('#engInput');
let mInput = document.querySelector('#mathInput');
let sInput = document.querySelector('#scienceInput');
let resultBtn = document.querySelector('#result');
let avg = document.querySelector('#average');
let gradeing = document.querySelector('#grade');
let setBan = 0;
let setEng = 0;
let setMath = 0;
let setScince = 0;


resultBtn.addEventListener('click',()=>{
    bInput.textContent = bInput.value;
    setBan = Number(bInput.value);
    eInput.textContent = eInput.value;
    setEng = Number(eInput.value);
    mInput.textContent = mInput.value;
    setMath = Number(mInput.value);
    sInput.textContent = sInput.value;
    setScince = Number(sInput.value);
    
    let subArr = [setBan,setEng,setMath,setScince];
    console.log(subArr);

    function calculate(arr){
        let sum = 0;
        let count = 0;

        for(i = 0; i <arr.length; i++){
            sum +=arr[i]

            if(arr[i]){
                count++
            }
        }
        let average = sum / count;
        console.log(average);

        avg.innerHTML = average;
        
        if(average < 60){
            gradeing.innerHTML = 'Fail'
        }else if(average >= 60 && average < 70){
            gradeing.innerHTML = 'B+'
        }else if(average >= 70 && average < 80){
            gradeing.innerHTML = 'A-'
        }else if(average >= 80 && average <= 100){
            gradeing.innerHTML = 'A+'
        }else{
            gradeing.innerHTML = 'NOt A NUMBER'
        }
    }
    calculate(subArr)
})