//메인영역에 소개부분 불러오기
const Text1=document.querySelector("main h1");
//소개에 넣을 글귀 지정
const Content=['Record Your Excercise'];
//글자분리
let index=0;
let content1=Content[index].split("")

//타이핑함수
function typing(){
    //길이가 0이면 한글자씩 입력
    if(content1.length!==0){
        Text1.textContent += content1.shift()
        setTimeout(typing,150)}
    //0이 아니면 삭제함수호출    
    else{
        setTimeout(delete1,150)}
    }
//삭제함수    
function delete1(){
    content1.pop();
    Text1.textContent=content1.join("")
    //길이가 0이아니면 지우기
    if(content1.length!==0){
        setTimeout(delete1,150)
    //길이가 0이면 글귀 다시 불러오기    
    }else{index=0
        content1=Content[index].split('')
        typing()}
    }
    
        
typing()