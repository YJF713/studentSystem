// 配置文件，需要重新登陆 。设置默认规则。
function first_login_YESORNO(){
    if(localStorage.length==0) return;
    var first=localStorage.getItem('FIRST');

    alert("重新登陆");
    if(first){
        return true;
    }else{
        return false;
    }
}