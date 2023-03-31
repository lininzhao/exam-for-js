//编写一个函数，返回当前日期时间，格式参考 "2023-03-30 17:15"。
function date() {
    var year = new Date().getFullYear();
    var month = new Date().getMonth() + 1; 
    if (month < 10) {
        month = '0' + month;
    }
    var day = new Date().getDate();
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    console.log(`${year}-${month}-${day} ${hours}:${minutes}`);
}
date();


