
var port = 'http://localhost:8081/rpm/servlet/PhoneServlet';

function setCookie(name,value,iDay){
    var str = name + '='+ JSON.stringify(value.result) +';path=/';
    //如果传入了过期天数
    if(iDay){
        var oDate = new Date();
        oDate.setDate(oDate.getDate()+iDay);
        str += ';expires='+oDate;
    }
    document.cookie = str;
}

function getCookie(name){
    var arr = document.cookie.split('; ');
    for(var i = 0; i < arr.length;i++){
        var arr2 = arr[i].split('=');
        if(name == arr2[0]){
            return arr2[1];
        }
    }

    return '';
}

function removeCookie(name){
    setCookie(name,'zns',-2)
}

var paramData={};

/**
*获取通用参数.
*
*/
function getCommonParams(resultStr){
	var result = eval(resultStr);
	//paramData.currentuserid = result.user_id;
	//paramData.S_organno = result.org_region;
	//paramData.org_region = result.org_region;
	//paramData.role_id = result.role_id;
	//paramData.organname = result.organname;
	paramData.currentuserid = "860030013";
	paramData.cust_id = "860030013";
	paramData.S_organno = "86003";
	paramData.org_region = "86003";
	paramData.role_id = "0013";
	paramData.organname = "organname";
	return paramData;
}

/**
*替换所有字符.
*value 要替换字符的字符串对象
*str 要被替换的字符
*str1 要被替换成为的字符
*/
function replaceAll(value, str, str1){
	return value.replace(new RegExp(str,"gm"),str1);
}

/**
*替换所有字符.
*value 要替换字符的字符串对象
*str 要被替换的字符
*str1 要被替换成为的字符
*/
function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null){
		 return unescape(r[2]); 
	 }
	 return null;
}