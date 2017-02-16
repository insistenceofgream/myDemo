function calc(btn){
  //找到当前按钮旁边的span
  var span=btn.parentNode//td
              .getElementsByTagName("span")[0];  
  //获取span的内容转为整数，保存在n中
  var n=parseInt(span.innerHTML);
  //如果当前按钮的内容是+
    //n+1
  //否则,如果n>1
    //n-1
  n+=btn.innerHTML=="+"?1:
                    n>1?-1:
                        0;
  span.innerHTML=n;//将n保存回span的内容中
/*修改小计*/
  var tds=btn.parentNode.parentNode.children;
  var price=parseFloat(tds[1].innerHTML.substr(1));
  tds[3].innerHTML="¥"+(price*n).toFixed(2);

  /*计算总计*/
  var tds=document.querySelectorAll("#data>tbody td:last-child");
  for(var i=0,total=0;i<tds.length;i++){
    total+=parseFloat(tds[i].innerHTML.slice(1));
  }
  document.querySelector("#data>tfoot td:last-child").innerHTML="¥"+total.toFixed(2);
}

