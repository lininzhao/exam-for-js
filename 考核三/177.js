//编写一个函数，随机返回 6 位数字验证码。
function f(num){
    var code=parseInt(Math.random()*Math.pow(10,6));
    console.log(code);
}
f();