$(function(){
				
				var i =0;
				var x=0;
				var imgwidth;
				var maxwidth;
				var clone =$(".imgshow .imgwidth li").first().clone();
				var clone2 =$(".swiper-container ul li").first().clone();
				$(".imgshow .imgwidth").append(clone);
				$(".swiper-container ul").append(clone2);
				var size=$(".imgshow .imgwidth li").length;
				var size2=$(".swiper-container ul li").length;
				if($(window).width()<1200)
				{
					imgwidth=1200;
				}
				else{
					imgwidth=$(window).width();		
				}
				maxwidth=imgwidth*6;
				
				
				
				$(window).scroll(function(){
					var top =$(window).scrollTop();
					console.log(top);
					if(top>70&&top<1020)
					{
						$(".game_header_title h2").addClass("active");
					}
					if(top>223&&top<1420){
						$(".hotgame_inner .game_con ul li").addClass("active");
					}
					if(top>632&&top<1800){
						$(".colgame .game_con ul li").addClass("active");
					}
					if(top>926&&top<1893){
						$(".news-box .news-box_title h2").addClass("active");
					}
					if(top>1742){
						$(".bs-list li").addClass("active");
					}
				})
				
				
				
				
				$(".imgshow").css({
					width:imgwidth,
				})
				$(".imgwidth").css({
					width:maxwidth,
				})
				$(".imgshow .imgwidth li a img").css({
					width:imgwidth,
				})
				
				
				
				$(".swiper-container").css({
					width:imgwidth,
				})
				$(".swiper-container ul").css({
					width:maxwidth,
				})
				$(".swiper-container ul li img").css({
					width:imgwidth,
				})
				
				$(".imgshow .img_nav span").click(function(){
					var index =$(this).index();
					i=index;
					$(".imgshow .imgwidth").stop().animate({left:-i*imgwidth});
					$(".img_information ul li").eq(index).addClass("active").siblings().removeClass("active");
				})
				
				
																					
				
				$(".left_but").hover(function(){
					$(".left_but a.other").stop().fadeIn(300);
					
				},function(){
					$(".left_but a.other").stop().fadeOut(300);
				})
				$(".right_but").hover(function(){
					$(".right_but a.other").stop().fadeIn(300);
					
				},function(){
					$(".right_but a.other").stop().fadeOut(300);
				})
				$(".right_but").click(function(){
					i++;
					if(i==size)
					{
						$(".imgshow .imgwidth").css({left:0});
						i=1;
					}
					$(".imgshow .imgwidth").stop().animate({left:-i*imgwidth},600);
					if(i==size-1){
						$(".img_information ul li").eq(0).addClass("active").siblings().removeClass("active");
					}
					else{
						$(".img_information ul li").eq(i).addClass("active").siblings().removeClass("active");
					}
				})
				$(".left_but").click(function(){
					i--;
					if(i==-1)
					{
						$(".imgshow .imgwidth").css({left:-(size-1)*imgwidth});
						i=size-2;
					}
					$(".imgshow .imgwidth").stop().animate({left:-i*imgwidth},600);
					$(".img_information ul li").eq(i).addClass("active").siblings().removeClass("active");
				})
				
				
				$(".new-mark_right").click(function(){
					x++;
					if(x==size2)
					{
						$(".swiper-container ul").css({left:0});
						x=1;
					}
					$(".swiper-container ul").stop().animate({left:-x*imgwidth},600);
					if(x==size-1){
						$(".news_info ul li").eq(0).addClass("active").siblings().removeClass("active");
					}
					else{
						$(".news_info ul li").eq(x).addClass("active").siblings().removeClass("active");
					}
				})
				$(".new-mark_left").click(function(){
					x--;
					if(x==-1)
					{
						$(".swiper-container ul").css({left:-(size2-1)*imgwidth});
						x=size2-2;
					}
					$(".swiper-container ul").stop().animate({left:-x*imgwidth},600);
					$(".news_info ul li").eq(x).addClass("active").siblings().removeClass("active");
				})
				
				
				
				
				
				$(window).resize(function(){
					var size =$(window).width();
					if(size>1200){
						imgwidth=size;
						maxwidth=imgwidth*6
						$(".imgshow").css({
							width:imgwidth,
						})
						$(".imgwidth").css({
							width:maxwidth,
						})
						$(".imgshow .imgwidth li a img").css({
							width:imgwidth,
						})
						$(".swiper-container").css({
							width:imgwidth,
						})
						$(".swiper-container ul").css({
							width:maxwidth,
						})
						$(".swiper-container ul li img").css({
							width:imgwidth,
						})
						
					}
					else if(size<1200)
					{
						imgwidth=1200;
						maxwidth=imgwidth*6
						$(".imgshow").css({
							width:imgwidth,
						})
						$(".imgwidth").css({
							width:maxwidth,
						})
						$(".imgshow .imgwidth li a img").css({
							width:imgwidth,
						})
						$(".swiper-container").css({
							width:imgwidth,
						})
						$(".swiper-container ul").css({
							width:maxwidth,
						})
						$(".swiper-container ul li img").css({
							width:imgwidth,
						})
						//$(".img_information").css("margin","260px 0 0 20px")
					}
					$(".imgwidth").css("left",0);
					$(".swiper-container ul").css("left",0);
					i=0;
					x=0;
					$(".img_information ul li").eq(i).addClass("active").siblings().removeClass("active");
					$(".news_info ul li").eq(x).addClass("active").siblings().removeClass("active");
				})
				
			})