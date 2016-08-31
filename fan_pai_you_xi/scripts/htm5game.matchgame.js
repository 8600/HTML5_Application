

var neusoft={};
neusoft.matchingGame={};
var i=0;
neusoft.matchingGame.cardWidth=document.body.clientHeight/7;//牌宽
neusoft.matchingGame.cardHeight=120;
neusoft.matchingGame.deck=
    [
        "cardAK","cardAK",
        "cardAQ","cardAQ",
        "cardAJ","cardAJ",
        "cardBK","cardBK",
        "cardBQ","cardBQ",
        "cardBJ","cardBJ",
        "cardAK","cardAK",
        "cardAQ","cardAQ",
    ]
//随机排序函数，返回-1或1
function shuffle()
{
    //Math.random能返回0~1之间的数
    return Math.random()>0.5 ? -1 : 1
}
//  翻牌功能的实现
function selectCard() {
    var $fcard=$(".card-flipped");
    //翻了两张牌后退出翻牌
    if($fcard.length>1)
    {
        return;
    }
    //alert($(this).data("pattern"));
    $(this).addClass("card-flipped");
//    若翻动了两张牌，检测一致性
    var $fcards=$(".card-flipped");
    if($fcards.length==2)
    {
       // checkPattern($fcards);
        setTimeout(function(){
        checkPattern($fcards);},700);
    }
}
//检测2张牌是否一致
function checkPattern(cards)
{
    var pattern1 = $(cards[0]).data("pattern");
    var pattern2 = $(cards[1]).data("pattern");
    $(cards).removeClass("card-flipped");
    if(pattern1==pattern2)
    {
        $(cards).addClass("card-removed").bind("webkitTransitionEnd",function(){$(this).remove();});
        i+=2;
        if(i>15){
        		alert("恭喜获胜！");
        		location.reload();
        }
    }
}