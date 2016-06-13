 function shuang(obj){
       var box=$(".case",obj)[0];
       var imgss=$(".tu",obj);
       var dianss=$(".dians",obj);
       var left1=$(".le",obj)[0];
       var right1=$(".re",obj)[0];
       var width1=parseInt(getStyle(imgss[0],"width"));
       var a=0;
       var b=0;
       var move3=function (){
        b=a+1;
       if(b>=imgss.length){
          b=0;
       }
       imgss[b].style.left=width1+"px";
       animate(imgss[a],{left:-width1},500);
       animate(imgss[b],{left:0},500);
       a=b;
       for(var i=0;i<dianss.length;i++){
        dianss[i].style.background="#6E6E6E";
       } 
       dianss[a].style.background="#D50B53";  
       
       }
       var move4=function (){
        b=a-1;
       if(b<0){
        b=imgss.length-1;
       }
       imgss[b].style.left=-width1+"px";
       animate(imgss[a],{left:width1},500);
       animate(imgss[b],{left:0},500);
       a=b;
       for(var i=0;i<dianss.length;i++){
        dianss[i].style.background="#6E6E6E";
       } 
       dianss[a].style.background="#D50B53";  
       
       }
      for(var i=0;i<dianss.length;i++){
        dianss[i].index=i;
        dianss[i].onclick=function(){
          if(this.index>a){
          for(var j=0;j<imgss.length;j++){
          dianss[j].style.background="#6E6E6E";
        }
           dianss[this.index].style.background="#D50B53";
          imgss[this.index].style.left=width1+"px";
         animate(imgss[a],{left:-width1},500);
         animate(imgss[this.index],{left:0},500);
         a=this.index;
        }else if(this.index<a){
          for(var j=0;j<imgss.length;j++){
          dianss[j].style.background="#6E6E6E";
        }
           dianss[this.index].style.background="#D50B53";
          imgss[this.index].style.left=-width1+"px";
         animate(imgss[a],{left:width1},500);
         animate(imgss[this.index],{left:0},500);
         a=this.index;
        }else{
          return;
        }
      }
       left1.onmouseover=function(){
      left1.style.background="#E5004F";
    }
    left1.onmouseout=function(){
      left1.style.background="#333";
      left1.style.opacity=0.8;
    }
     right1.onmouseover=function(){
      right1.style.background="#E5004F";
    }
    right1.onmouseout=function(){
      right1.style.background="#333";
      right1.style.opacity=0.8;
    }
        left1.onclick=function(){
          move4();
        }
        right1.onclick=function(){
          move3();
        }
      }
   }










   function jiedian(obj){
   	    var tian=$(".zongtu",obj)[0];  //大盒子
		var lunbo=$(".lunbo",obj)[0];   //放图片的盒子
		var imgss=$(".tian",obj);   //所有图片的集合
		var jian=$(".jj",obj)[0];  //左边的按钮
		var tou=$(".tou",obj)[0];  //右边的按钮
		var flag=true;     //flag为真
		// var y=setInterval(move2,2000);  //时间函数
		function move2(){   
			var first=getFirst(lunbo);   //第一个盒子
			animate(lunbo,{left:-160},300,function(){    //向左 移动一个宽度
				lunbo.appendChild(first);   //把第一个对象插到最后
				lunbo.style.left=0;	
			})
		}
		function move1(){   
			var first=getFirst(lunbo);   //第一个盒子
			var last=getLast(lunbo);
			animate(lunbo,{left:-160},300,function(){    //向左 移动一个宽度
				lunbo.insertBefore(last,first);   //把第一个对象插到最后
				lunbo.style.left=0;	
			})
		}
		// window.onmouseover=function(){  //鼠标经过清除
		// 	clearInterval(y);
		// }
		// window.onmouseout=function(){   //鼠标离开继续动
		// 	y=setInterval(move2,2000);
		// }
		jian.onclick=function(){  
			move2();
		}
		tou.onclick=function(){
			move1();
		}

   }