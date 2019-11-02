function move(obj,name,target,fn){
				clearInterval(obj.timer)
			obj.timer=	setInterval(function(){
				let speed=(target-parseInt(getComputedStyle(obj)[name]))/10
				// if (speed>0) {
				// 	speed=Math.ceil(speed)
				// } else{
				// 	speed=Math.floor(speed)
				// }
				// 三元运算符
				speed= (speed>0) ? Math.ceil(speed) :Math.floor(speed)
					if (parseInt(getComputedStyle(obj)[name])==target) {
						clearInterval(obj.timer)
						if(fn){fn()}
					} else{
						
						obj.style[name]=parseInt(getComputedStyle(obj)[name])+speed+'px'
					}
				},30)
			}