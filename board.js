class Board {
    constructor(boardNo, title, content, writer) {
        this._boardNo = boardNo;
        this._title = title;
        this._content = content;
        this._writer = writer;
    }
    get boardNo() {
        return this._boardNo;
    }
    set boardNo(boardNo) {
        this._boardNo = boardNo;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get content() {
        return this._content;
    }
    set content(content) {
        this._content = content;
    }
    get writer() {
        return this._writer;
    }
    set writer(writer) {
        this._writer = writer;
    }
} // end of class
let boardDB = []; // 배열 선언
boardDB.push(new Board(1, '자바스크립트', '웹언어', '최재영'));//배열에 값 넣어주기
boardDB.push(new Board(2, '자바', '컴파일러', '김현동'));
boardDB.push(new Board(3, '오라클', '데이터베이스', '허성준'));

let titles = ['checkbox', 'boardNo', 'title', 'content', 'writer', 'button']; //제목 생성
let table, tr, td, text, checkbox, button;

//title 생성
function createTitle() { 
    // 제목 행 추가
    tr = document.createElement('tr');
    //제목 하나씩생성 
    for (let field of titles) { 
        td = document.createElement('th');
        //checkbox일때 칸추가
        if (field === 'checkbox') { 
            checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            //checkbox칸 전체선택
            checkbox.onchange = function(){
                let chks = document.querySelectorAll('td input[type="checkbox"')
                console.log(chks);
                for(let i=0; i<chks.length; i++){
                    chks[i].checked = this.checked; // checked = true / false
                }            
            }
            td.append(checkbox);
            //field값이 버튼일때
        } else if (field === 'button') {
            //button열 제목설정
            td.append('상세보기');
        //나머지
        } else {
            text = document.createTextNode(field);
            td.append(text);
        }
        tr.append(td);
    }
    return tr;
}
//list 가져오기
function getBoardList() {
    
    table = document.createElement("table");//테이블 생성
    table.setAttribute('border', '1');
    table.setAttribute('id', 'tbl');
    table.append(createTitle()); // 타이틀 row

    //데이터 영역
    boardDB.forEach(function (obj, idx) {
        tr = document.createElement('tr');
        tr.setAttribute('id', obj.boardNo);
        table.append(tr);


        for (let field of titles) {
            td = document.createElement('td');
            if (field === 'checkbox') {
                checkbox = document.createElement('input');
                checkbox.setAttribute('type', 'checkbox');

                checkbox.onchange = function(){
                   synchCheckbox();
                }
                //상세보기 버튼
                checkbox.onclick = function () {
                    let id = this.parentNode.parentNode.id;
                    console.log(getBoard(id));
                    let board = getBoard(id);
                    document.getElementById('boardNo').value = board.boardNo;
                    document.getElementById('title').value = board.title;
                    document.getElementById('content').value = board.content;
                    document.getElementById('writer').value = board.writer;

                }
                td.append(checkbox);
            } else if (field === 'button') {
                button = document.createElement('button');
                button.innerHTML = '상세보기';
                td.append(button);
                
                   button.onclick = showDetail;
                

            } else {
                text = document.createTextNode(obj[field]);
                td.append(text);
            }
            tr.append(td);
        }
    });
    document.getElementById("main").append(table); 
}


//자료 추가
function insertData() {
    let boardNo = document.getElementById('boardNo').value;
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    let writer = document.getElementById('writer').value;

    boardDB.push(new Board(boardNo, title, content, writer));

    let tbl = document.getElementById('tbl');
    tr = document.createElement('tr');
    tr.setAttribute('id',boardNo); 
    //체크박스 부분
    td = document.createElement('td');
    checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    td.append(checkbox);
    tr.append(td);
    //게시글번호
    td = document.createElement('td');
    td.append(boardNo);
    tr.append(td);
    //제목
    td = document.createElement('td');
    td.append(title);
    tr.append(td);
    //내용
    td = document.createElement('td');
    td.append(content);
    tr.append(td);
    //작성자
    td = document.createElement('td');
    td.append(writer);
    tr.append(td);
    //상세보기버튼
    td = document.createElement('td');
    button = document.createElement('button');
    button.innerHTML= '상세보기';
    button.onclick = showDetail;
    td.append(button);
    tr.append(td);

    tbl.append(tr);

    console.log(tbl);
}

function getBoard(id) {
    let oneBoard;
    for (let board of boardDB) {
        if (board.boardNo == id) {
            //oneBoard = new Board(board.boardNo,board,title,board.content,board.writer);
            oneBoard = board;
        }
    }
    return oneBoard;

}

function showDetail(){
    //id값 찾아서 변수에 담아준 뒤 불러옴 
    let id = this.parentNode.parentNode.id;
    console.log(this.parentNode.parentNode);
     let board = getBoard(id);
     document.getElementById('boardNo').value = board.boardNo;
     document.getElementById('title').value = board.title;
     document.getElementById('content').value = board.content;
     document.getElementById('writer').value = board.writer;
}
//수정
function updateData(){
    //element 정보 가지고 옴
    let boardNo = document.getElementById('boardNo').value;
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    let writer = document.getElementById('writer').value;

    // 배열에서 수정
    for(let i =0; i<boardDB.length; i++){
        if(boardDB[i].boardNo == boardNo){
            boardDB[i] = new Board(boardNo, title, content, writer);// 보드 생성자 선언
            break;
        }
    }
    console.log('break');
    //화면에서 출력
    let trs = document.querySelectorAll('#tbl tr[id]');//table id가 tbl. table안에 tr태그 찾아서 id값(<tr id = 'i'>);
    for (let i = 0; i<trs.length; i++){
        console.log(trs[i].id, boardNo)
        if(trs[i].id == boardNo){
            trs[i].children[2].innerHTML = title;
            trs[i].children[3].innerHTML = content;
            trs[i].children[4].innerHTML = writer;
            break;
        }
    }
    
    

}
//전체선택 checkbox와 각 데이터별 checkbox 동기
function synchCheckbox(){
    // 1) checkall true로 가정 데이터영역에 있는 값중 하나라도 false면 체크 풀림
    let th_ckb = document.querySelectorAll('th input[type="checkbox"]'); //th 밑에있는 input값
    let td_ckb = document.querySelectorAll('td input[type="checkbox"]');

   // console.log(th_ckb[0].checked);

    th_ckb[0].checked = true;
    for(let i=0; i<td_ckb.length; i++){
        if(!td_ckb[i].checked){ //check 해제 되어있는 부분
            th_ckb[0].checked = false;
            break;
        }
    }
}

function deleteChecked(){
    //화면에서 삭제
    let checkedNo = []; 
    let chks = document.querySelectorAll('td input[type="checkbox"]');
    for(let i=0; i<chks.length; i++){
        if(chks[i].checked == true){
            checkedNo.push(chks[i].parentNode.parentNode.id);
            chks[i].parentNode.parentNode.remove();
        }
    }
    //배열에서 삭제
    checkedNo.forEach(function(obj,idx){
        for(let i=0; i<boardDB.length; i++){
            if(boardDB[i].boardNo == obj){
                boardDB.splice(i, 1);
                break;
            }
        }
    });
}