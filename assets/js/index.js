$(function (){
    $('#btni').on('click',function (){
        $.ajax({
            url:port,
            data:{class:"userSignOn",actorname:"860030013",password:"123456"},
            dataType:'json',
            cache:false,
            success:(r)=>{
                if (r.status){
                    //r = JSON.stringify(r.result);
                    setCookie('home',r,1);//设置过期时间
                    window.open('shouye.html','_self');//跳转到首页
                }else{
                    alert(r.message);
                }
            },error:(r)=>{
                alert('用户名或者密码错误！');
            }

        });

    });
});