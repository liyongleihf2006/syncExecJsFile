/**
 * Created by LiYonglei on 2017/3/22.
 */
document.querySelector("#fromPage").value=fromPage;
var fromJs="我是动态js中定义的变量,我是在页面中使用js填充到文本域的";
document.querySelector("#btn").addEventListener("click",function(){
    document.querySelector("#click").value="按钮被点击了!";
})