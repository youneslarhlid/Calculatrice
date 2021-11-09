let history = document.getElementById('history');
function solve(v){
    
    para = document.createElement('p');
    data = v + " = " + eval(v);
    para.innerText = data;
    history.appendChild(para);

    return eval(v);
}

function perc(v){
    para = document.createElement('p');
    data = v + " %= " + v/100 ;
    para.innerText = data;
    history.appendChild(para);

    return v/100;
}