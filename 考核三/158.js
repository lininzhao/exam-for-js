//有一家超市，出售苹果和草莓。其中苹果 8 元/斤，草莓 13 元/斤。 现在顾客 A 在超市购买了若干斤苹果和草莓，需要计算一共多少钱？ 请编写函数，对于 A 购买的水果斤数 (水果斤数为大于等于 0 的整数)，计算并返回所购买商品的总价。

var kgBerry=parseInt(prompt('请输入草莓购买斤数'));
var kgApple=parseInt(prompt('请输入苹果购买斤数'));
function price(kgBerry,kgApple){
    if(kgApple>=0 && kgBerry>=0 ){
        var cost=kgApple*8+kgBerry*13;
        console.log(cost);
    }
}
price(kgBerry,kgApple);