var students =[];

students.push("김현동");
students.push("김현동");//새로운요소 뒤에 추가
students[1] = "김도은";  //주소값 추가
students.unshift("김다희"); //앞쪽에 추가
//김다희,김현동,김도은 (현재순서)

//students.pop(); // 뒤에서 제거
//students.shift();// 앞에서 제거


students.splice(1, 0, "이광호", "동광희");
for(student of students){
    console.log(student);
}

console.log("----------------------------");
var newStud = students.slice(1,3); //첫index, 두번 index
for(student of newStud){
    console.log(student);
}
console.log("----------------------------");
students.sort();
for(student of students){
    console.log(student);
}
var numbers = [4,6,2,9,1,10,100];
numbers.sort(function(a,b){
    console.log(a,b);
    return a-b; //-값 => 오름차순
});
for(num of numbers){
    console.log(num );
}