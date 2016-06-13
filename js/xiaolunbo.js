function jiedian(obj){
    var hehe=$(".zongtu",obj)[0];
    var xr=$(".jj",obj)[0]; 
    var xl=$(".tou",obj)[0];
    var width=$(".lunbo")[0].offsetWidth;
    // console.log(width);
    var flag1=true;
    function move5(){
      if(!flag1){
        return;
      }
      flag1=false;
      var first=getFirst(hehe);
      animate(hehe,{left:-width},500,function(){
        hehe.appendChild(first);
        hehe.style.left=0;
        flag1=true;
      })
    }
    function move6(){
      if(!flag1){
        return;
      }
      flag1=false;
      var first=getFirst(hehe);
      var last=getLast(hehe);
      insertBefore(last,first);
      hehe.style.left=-width+"px";
      animate(hehe,{left:0},500,function(){
        flag1=true;
      });
    }
    xr.onclick=function(){
      move6();
    }
    xl.onclick=function(){
      move5();
    }
  }