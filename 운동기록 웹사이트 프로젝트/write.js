//변수설정하기,dom불러오기
let time=0;
const watch=document.querySelector(".Stopwatch .time h1");
let realtimenumber;
let hour, min, sec;
//글자입력해주는함수
function timer(){
    watch.innerText=realtimestring();
}
//시작함수
function start(){
    time++;
    timer();
    stop();
    realtimenumber=setTimeout(start,1000);
}
//정지함수
function stop(){
    clearTimeout(realtimenumber);
}
//리셋함수
function reset(){
    stop();
    watch.innerText="00:00:00";
    time=0;
}
//time문자열로 만들기
function realtimestring(){
    hour=String(Math.floor(time/3600));
    min=String(Math.floor(time/60));
    sec=String(time%60);

    return hour.padStart(2,"0") + ":" + min.padStart(2,"0") + ":" + sec.padStart(2,"0");
}




//버튼 클릭시 새로운 행 추가
function rowplus(){
    const newone = document.getElementById('doit');
    const newrow = newone.insertRow();
        const cell0=newrow.insertCell();
        cell0.innerHTML = '<input type="text">';

        for(i=0; i<document.getElementsByTagName('th').length-1; i++){
            const cell1 = newrow.insertCell();
            cell1.innerHTML = '무게<input type="text"></br>횟수<input type="text">';
            }
        
    }

//버튼 클릭시 새로운 열 추가
index=5
function colplus() {
        const table = document.getElementById('doit');
        const line =document.getElementById("doittr");
        const newcol = document.createElement("th");
        newcol.innerHTML=`${index}SET`;
        line.appendChild(newcol);
        index++;
        
        for(i=1; i<table.rows.length; i++){
            
            const Cell1 = table.rows[i].insertCell(-1);
            Cell1.innerHTML = '무게<input type="text"></br>횟수<input type="text">';
            }
        }

//버튼 클릭시 새로운 저장문구 뜨고 내용삭제
const nothing = document.getElementById("blank")

function save(){
    alert("저장되었습니다!")
    
}
  


