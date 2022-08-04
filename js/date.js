
$(function(){
    var today = getTodayType1();
    console.log(today);
});

function getTodayType1() {
    var date = new Date();
    return date.getFullYear() + ("0"+(date.getMonth()+1).slice(-2)) + ("0"+date.getDate()).slice(-2) + ;
}
