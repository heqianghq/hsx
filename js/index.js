//展现文字
$(function(){
	$(".banner .infor").text("");
	var a='移动互联，商机无限，创新链接，尽在指尖！';
	var i=0;
	var text=setInterval(function(){
		i++;
		$(".banner .infor").text(a.substr(0,i)+"|");
		if(i==a.length){
			$(".banner .infor").text(a.substr(0,i));
			clearInterval(text);
		}
	},200)
})

//点击动图
$(function(){
	$(".banner .img img").css({
		left:300,
		width:412
	});
	$(".banner .img img").eq(0).animate({
		left:0,
		zIndex:0,
		width:371
	});
	$(".banner .img img").eq(2).animate({
		left:600,
		zIndex:0,
		width:371
	})
})
$(function(){
	$(".banner .img img").on("click",function(){
		var index = $(this).index();
		if(index == 0)
		{
			$(".banner .img img").eq(0).animate({
				left:600,
				zIndex:0,
				width:371
			},function(){
				$(".banner .img").append($(this))
			});
			$(".banner .img img").eq(1).animate({
				left:0,
				zIndex:1,
				width:371
			});
			$(".banner .img img").eq(2).animate({
				left:300,
				zIndex:2,
				width:412
			});
		}
		else if(index == 2){
			$(".banner .img img").eq(2).animate({
				left:0,
				zIndex:0
			},1000,function(){
				$(".banner .img").prepend($(this))
			});
			$(".banner .img img").eq(1).animate({
				left:600,
				zIndex:1,
				width:371
			});
			$(".banner .img img").eq(0).animate({
				left:300,
				zIndex:2,
				width:412
			})
		}
	})
	setInterval(function(){
		$(".banner .img img").eq(2).animate({
			left:0,
			zIndex:0
		},300,function(){
			$(".banner .img").prepend($(this))
		});
		$(".banner .img img").eq(1).animate({
			left:600,
			zIndex:1,
			width:371
		});
		$(".banner .img img").eq(0).animate({
			left:300,
			zIndex:2,
			width:412
		})
	},2000)
})
//导航条滚动
$(function(){
	$(document).scroll(function(){
		i=true;
		var top=$(document).scrollTop();
		if(top>=250){
			
			if(i){
				i=false;
				$("header").css({
					position:"fixed",
					top:0,
					zIndex:5
				});
				$(".banner").css({
					paddingTop:61
				})
			
			}
		}else{
			$("header").css({
				position:"static"
			});
			$(".banner").css({
				paddingTop:0
			})
		}
	})
})
