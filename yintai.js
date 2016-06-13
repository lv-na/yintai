$(function(){
	var hover=$(".hover");
	var down=$(".down");
	for(var i=0;i<hover.length;i++){
		hover[i].index=i;
		hover[i].onmouseover=function(){
			down[this.index].style.display="block"

		}
		hover[i].onmouseout=function(){
			down[this.index].style.display="none"
		}
	}





var shop=$(".shop")
   var side=$(".side")
   for (var i = 0; i < shop.length; i++) {
   	shop[i].index=i;
   	shop[i].onmouseover=function(){
   		side[this.index].style.display="block"
   	}
   	shop[i].onmouseout=function(){
   		side[this.index].style.display="none"
   	}
   }
   for (var i = 0; i < side.length; i++) {
   		side[i].index=i;
   	side[i].onmouseover=function(){
   		side[this.index].style.display="block"
   	}
   	side[i].onmouseout=function(){
   		side[this.index].style.display="none"
   	}
   };



var rightType=document.querySelectorAll(".son");
	// var righta=$(".tab-a");
	var xxk=document.querySelectorAll(".show");
	for(var i=0;i<rightType.length;i++){
		rightType[i].index=i;
		xxk[i].style.zIndex=0;
		rightType[i].onmouseover=function(){
			// righta[this.index].style.display="block";
			xxk[this.index].style.zIndex=1;
		}
		rightType[i].onmouseout=function(){
			// righta[this.index].style.display="none";
			xxk[this.index].style.zIndex=0;
		}
	}
	for(var i=0;i<xxk.length;i++){
		xxk[i].index=i;
		xxk[i].onmouseover=function(){
			// righta[this.index].style.display="block";
			xxk[this.index].style.zIndex=1;
		}
		xxk[i].onmouseout=function(){
			// righta[this.index].style.display="none";
			xxk[this.index].style.zIndex=0;
		}
	}


    var xia=$(".xia");
    console.log(xia.length)
    for(var i=0;i<xia.length;i++){
    	jiedian(xia[i]);
    }




	var r=document.querySelectorAll(".men");
	// var righta=$(".tab-a");
	var k=document.querySelectorAll(".closh");
	for(var i=0;i<r.length;i++){
		r[i].index=i;
		k[i].style.zIndex=0;
		r[i].onmouseover=function(){
			// righta[this.index].style.display="block";
			k[this.index].style.zIndex=1;
		}
		r[i].onmouseout=function(){
			// righta[this.index].style.display="none";
			k[this.index].style.zIndex=0;
		}
	}
	for(var i=0;i<k.length;i++){
		k[i].index=i;
		k[i].onmouseover=function(){
			// righta[this.index].style.display="block";
			k[this.index].style.zIndex=1;
		}
		k[i].onmouseout=function(){
			// righta[this.index].style.display="none";
			k[this.index].style.zIndex=0;
		}
	}



	var box=$(".banner")[0];
	var imgs = $(".big");
	var circle = $(".clrcles");
	var n = 0;
	var right = $(".right")[0];
	var left = $(".left")[0];
	var t=setInterval(move, 2000)
	function move(type) {
		var type=type||"r";//判断type初始值
			if (type=="r") {
				n++;
			    if (n>=circle.length) {
				    n=0;
			    }
			}else{
				n--;
				if (n<0) {
					n=circle.length-1;
				};

			}
		for (var i = 0; i < imgs.length; i++) {
			animate(imgs[i],{opacity:0},400)
			circle[i].style.background = "#3e3e3e";
		}


		animate(imgs[n],{opacity:1},400)
		circle[n].style.background = "#b61b1f";
	}
	box.onmouseover = function() {
		clearInterval(t)
	}
	box.onmouseout = function() {
		t = setInterval(move, 2000)
	}
	for (var i = 0; i < circle.length; i++) {
		circle[i].index = i;
		circle[i].onmouseover = function() {
			for (var i = 0; i < circle.length; i++) {
				circle[i].style.background = "#3e3e3e"
				animate(imgs[i],{opacity:0},400)
			}
			circle[this.index].style.background = "#b61b1f"
			animate(imgs[this.index],{opacity:1},400)
		}
	}
	right.onclick = function() {
		move("r")
	}
	left.onclick = function() {
		move("l")
	}



var xlbs =document.querySelectorAll(".case"); //获取图片的大框
	for (var i = 0; i < xlbs.length; i++) {
		shuang(xlbs[i])
	}





  		var floor=$(".famous");
		var lis=$(".floor-dian");
		var box9=$(".btntu")[0];
		var xiaoshi=$(".floor-cen")[0];
		var cw=document.documentElement.clientWidth;     //浏览器窗口宽高
		var ch=document.documentElement.clientHeight;
		var bh=box9.offsetHeight;                         //窗口高度
		var sign=true;
		// box.style.top=(ch-bh)/2+"px";                     //box定位
		
		for(var i=0;i<lis.length;i++){
			lis[i].index=i;

			lis[i].onmouseover=function(){
				sign=false;
				for(var i=0;i<lis.length;i++){
					lis[i].style.color="transparent"
					lis[i].style.background="transparent";
					// lis[i].innerHTML=i+1+"F";
				}
				var aa=lis[this.index].getAttribute("aa");
				lis[this.index].innerHTML=aa;
				lis[this.index].style.color="#fff";
				lis[this.index].style.background="red"
			}
            
            lis[i].onmouseout=function(){
				sign=false;
				for(var i=0;i<lis.length;i++){
					lis[i].style.color="transparent"
					lis[i].style.background="transparent";
		
				}
	       	 
            }



			lis[i].onclick=function(){
				sign=false;
			var obj1=document.documentElement.scrollTop?document.documentElement:document.body;   //判断，兼容性问题
		    
			var top=floor[this.index].offsetTop; 
			console.log(top)
			 //获取出现楼层到body的距离
				 animate(obj1,{scrollTop:top},1000,function(){
					sign=true;
				});        //浮动条到顶的距离
				for(var i=0;i<lis.length;i++){
					lis[i].style.color="transparent"
					lis[i].style.background="transparent";
				}
				var aa=lis[this.index].getAttribute("aa");
				lis[this.index].innerHTML=aa;
				lis[this.index].style.color="#fff";
				lis[this.index].style.background="red"
			}
		}
	var flag=true;															//开关设置
	var flag1=true;	
	window.onscroll = function() {                       //滚动条事件
		if(!sign){
			return;
		}
		var obj1 = document.documentElement.scrollTop ? document.documentElement : document.body;
		for (var i = 0; i < floor.length; i++) {
			if (obj1.scrollTop >= floor[i].offsetTop - ch) {            //滚轮长度与楼层长度的比较
				for (var j = 0; j < floor.length; j++) {
					lis[j].style.color = "transparent"								//达到条件后左边变色
					lis[j].style.background = "transparent";
					// lis[j].innerHTML=j+1+"F";
				}
				var aa=lis[i].getAttribute("aa");
				lis[i].innerHTML=aa;
				lis[i].style.color = "#fff";
				lis[i].style.background = "red"
			}
		}
		if (obj1.scrollTop >= (floor[0].offsetTop - ch)){
			if(flag){
				flag=false;
		
			animate(xiaoshi,{opacity:1},800,function(){
				flag1=true;
			})
		    }
		}else{
			if(flag1){
				flag1=false;
		
			animate(xiaoshi,{opacity:0},800,function(){
				flag=true;
			})
		    }
		}
	}


})


 