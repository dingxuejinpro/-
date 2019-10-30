$(function(){
	/*1、透明度特效*/
	
	searchEffect();
	/*2、秒杀时间*/
	timeBack();
	/*3、轮播*/
	bannerEffect();
	
	/*1、透明度特效
透明度变化：细节
 背景颜色：
 background: rgba(233,35,34,透明度);
 background: rgba(233,35,34,0);


2、秒杀时间
时间的计算


3、轮播 ：
自动轮播
触碰轮播（手动）*/
})
/*1、透明度特效*/
function  searchEffect(){
	/*透明度和轮播图的高度有关系*/
	var bannerHeight= $(".jd_banner")[0].offsetHeight;
	/*获取当前屏幕滚动时，轮播图滚出屏幕的距离*/
	window.onscroll=function(){
		//console.info(document.body.scrollTop):
		//console.info(document.documentElement.scrollTop);
	   var offsetTop=document.documentElement.scrollTop;
	  /* 计算比例值  获取透明度*/
	   var opacity=0;
	   if(offsetTop<bannerHeight){
	     opacity=offsetTop/bannerHeight;
	     console.info(opacity);
	      //设置样式
		  /* background: rgba(233,35,34,0);*/
		   $(".jd_search").css("backgroundColor","rgba(233,35,34,"+opacity+")");
	   }
	   
	  
	}
}

/*倒计时*/
function timeBack(){
	
	//先做倒计时
	/*精确到秒*//*1小时*/    /*1*60*60  3600*/  /*3700*/
	/*定时器: 毫秒   1s=1000毫秒*/
	      var  tataltime=  5;
	      
	    var timeid=  setInterval(function (){
	      	tataltime--;
	      	if(tataltime<0){
	      		//清除定时器
	      		clearInterval(timeid);
	      		return;
	      	}
			/*h  m  s*/
           var h = Math.floor(tataltime / 3600);
           var m = Math.floor( tataltime % 3600 / 60);
           var s = Math.floor(tataltime % 60);
				/*console.info(h);
				console.info(m);
				console.info(s);*/
	
				/*获取span*/
				/*console.info($(".jd_sk_time>span").length);		
				console.info($(".jd_sk_time>span")) ;*/
				$(".jd_sk_time>span")[0].innerHTML=Math.floor(h/10);
				$(".jd_sk_time>span")[1].innerHTML=Math.floor(h%10);
				$(".jd_sk_time>span")[3].innerHTML=Math.floor(m/10);
				$(".jd_sk_time>span")[4].innerHTML=Math.floor(m%10);
				$(".jd_sk_time>span")[6].innerHTML=Math.floor(s/10);
				$(".jd_sk_time>span")[7].innerHTML=Math.floor(s%10);
	      	
	      	
	      },1000)

}


function bannerEffect(){
	/* 以后的图片：都是服务器给你提供，
 通过js去添加在首尾添加图片*/
   var firstimg=$(".jd_bannerImg>li:first");
   var last=$(".jd_bannerImg>li:last");
   /*复制图片*/
   var firstimgcopy= firstimg.clone(true);  //clone   true：事件也可以复制 
   var lastimgcopy= last.clone(true);
  
$(".jd_bannerImg").append(firstimgcopy);
   $(".jd_bannerImg").prepend(lastimgcopy);
   /* 通过js修改样式*/
   /*图片数量*/
   console.info($(".jd_bannerImg>li").length) ;
  var count=$(".jd_bannerImg>li").length;
  
  //获取banner的宽度
 var bannerWidth =$(".jd_banner")[0].offsetWidth;
  console.info(bannerWidth);
  /*ul:总长度*/
  $(".jd_bannerImg").css("width",count*bannerWidth+"px");
  /*li:长度*/
 /*for(var i=0;i<count;i++){
 	$(".jd_bannerImg>li")[i].style.width=bannerWidth+"px";
 	
 }*/
	$(".jd_bannerImg>li").each(function(i,obj){
		/*console.info(obj);*/
		$(this).css("width",bannerWidth+"px");
	});
	var index=1;
	/*通过js设置默认偏移*/
    $(".jd_bannerImg").css("left",-index*bannerWidth+"px") 
 
   /* 定时器实现自动轮播*/
  
     setInterval(function(){
     	index++;
     console.info(index);
     
    /* 添加过渡效果*/
   
     
   $(".jd_bannerImg")[0].style.transition="left 0.5s ease-in-out";
      $(".jd_bannerImg").css("left",-index*bannerWidth+"px") 
     	//判断是否到了最后一张，重新设置规则
     	setTimeout(function(){
     		if(index==count-1){
     			index=1;
     			 /*如果一个元素的某个属性之前添加过过渡效果，那么过渡属性会一直存在，如果不想要，则需要清除过渡效果*/
                    /*关闭过渡效果*/
     			$(".jd_bannerImg")[0].style.transition="none";
     			 /*偏移到指定的位置*/
     			 $(".jd_bannerImg").css("left",-index*bannerWidth+"px") 
     		}
     		
     		
     	},500)

     },2000);
  
  
 
 
 
}
