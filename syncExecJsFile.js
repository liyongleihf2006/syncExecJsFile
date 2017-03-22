/**
 * Created by LiYonglei on 2017/3/22.
 *
 * 同步执行js文件
 * note: 并不会将js文件放入到页面当中而是直接执行,
 *      并且在chrome等浏览器中调试的时候Sources中是看不到使用该方法加载的文件的,
 *      因此倘若想要调试该文件请使用 debugger 或其他方式来获取该文件
 * @param filePath 文件路径
 */
function syncExecJsFile(filePath){
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET',filePath,false);
    httpRequest.onreadystatechange = function(){
        if (httpRequest.readyState === XMLHttpRequest.DONE||httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                /*
                * 没错,这里使用的就是人神共愤的eval方法,但是jquery的源码中也是这样子搞的 - -
                * */
                window[ "eval" ].call( window, httpRequest.responseText );
            }
        }
    };
    httpRequest.send();
}