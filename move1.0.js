function move(obj,name,target,fn){
				clearInterval(obj.timer)
			obj.timer=	setInterval(function(){
				let speed=(target-parseInt(getComputedStyle(obj)[name]))/10
				if (speed>0) {
					speed=Math.ceil(speed)
				} else{
					speed=Math.floor(speed)
				}
					if (parseInt(getComputedStyle(obj)[name])==target) {
						clearInterval(obj.timer)
						// 链式运动 判断是否存在fn,存在时即执行
						if(fn){fn()}
					} else{
						
						obj.style[name]=parseInt(getComputedStyle(obj)[name])+speed+'px'
					}
				},30)
			}