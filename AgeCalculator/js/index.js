//const buttonForm = document.querySelector('.button-form')
const form = document.querySelector('#form')

const date = new Date();
const dateMonth = (date.getMonth() + 1);
const dateDay = date.getDate();
const dateYear = date.getFullYear();


form.addEventListener('submit', (e) =>{
    e.preventDefault();  
    const formDay = e.target.querySelector('.days')
    const formMonth = e.target.querySelector('.month')
    const formYear = e.target.querySelector('.year')
    
    const day = Number(formDay.value)
    const month = Number(formMonth.value)
    const year = Number(formYear.value)
    
    if(month > 12 || !month){
        formMonth.classList.add('invalid')
        return
    }else{
        formMonth.classList.remove('invalid')
    }

    if(!day){
        formDay.classList.add('invalid')
        return
    }else{
        formDay.classList.remove('invalid')
    }

    if(!year){
        formYear.classList.add('invalid')
        return
    }else{
        formYear.classList.remove('invalid')
    }

    const resultDay = calcDay(day)
    const resutMonth = calcMonth(month)
    const resultYear = verifyYears(month,year)
    
    ReturnValue(`${resultDay}, ${resutMonth}, ${resultYear}`)
})


function calcDay(day){
    if(day > dateDay){
        return day - dateDay
    }else{
        return dateDay - day
    }
}

function calcMonth(month){
    
    if(month > dateMonth){
        return month - dateMonth
    }else{
        return dateMonth - month
    }
}

function verifyYears(month,year){
    if (month > dateMonth){
        return  dateYear - year - 1 ;
    }else{
        return dateYear - year  ;
    }
}


function creatH2(){
    const h2 = document.createElement(h2)
    return h2
}

function ReturnValue(msg){
    const resultado = document.querySelector('.result')
    resultado.innerHTML = msg;   
}


function daysInMonth(mes, ano) {
    var data = new Date(ano, mes, 0);
    return data.getDate();
}












