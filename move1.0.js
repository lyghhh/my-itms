function move(obj,name,target){
				clearInterval(obj.timer)
			obj.timer=	setInterval(function(){
				let speed=(target-parseInt(getComputedStyle(obj)[name]))/10
				// 当不能整除时,运动到最后10个像素时,1-9像素除以10等于小于1的小数,向下取整speed=0即停止运动,反之同理
				if (speed>0) {
					speed=Math.ceil(speed)
				} else{
					speed=Math.floor(speed)
				}
					if (parseInt(getComputedStyle(obj)[name])==target) {
						clearInterval(obj.timer)
					} else{
						
						obj.style[name]=parseInt(getComputedStyle(obj)[name])+speed+'px'
					}
				},30)
			}