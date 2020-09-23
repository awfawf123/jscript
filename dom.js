let days = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일',];
 //let nums = ['1','2','3','4','5','6','7'];
let dates = [];
function loadPage(){
    let $table = document.createElement("table");
    $table.setAttribute('border', '1');
    let $tr = document.createElement("tr");
    for(let day of days){
        let $th = document.createElement("th");
        let text = document.createTextNode(day);
        $tr.appendChild($th);
        $th.appendChild(text);
        
    }
    $table.appendChild($tr);//요일

    $tr = document.createElement("tr");
    for(let i =1; i<=31; i++){
        dates.push[i];
        
    }
    //1 2 3 4 5 6 7 8 9 10 11  a 배열에 담긴 데이터 
    //0 1 2 3 4 5 6 7 8 9 10   b index넘버
    dates.forEach(function(a,b){
        if(b%7==0){
            $tr = document.createElement("tr");
            $table.appendChild($tr);
        }
        $td = document.createElement("td");
        $text =document.createTextNode(a);
        $td.appendChild(text);
        $tr.appendChild($td);
    })
    
    //  $table.appendChild($tr);
    //  $tr = document.createElement("tr");
    // for(let num of nums){
    //     let $td = document.createElement("td");
    //     let text1 = document.createTextNode(num);
    //     $tr.appendChild($td);   
    //     $td.appendChild(text1);
    // }
     $table.appendChild($tr);
     document.getElementById("bdy").appendChild($table);

    

}
