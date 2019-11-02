function move(obj,name,target){
				clearInterval(obj.timer)
			obj.timer=	setInterval(function(){
					if (parseInt(getComputedStyle(obj)[name])==target) {
						clearInterval(obj.timer)
					} else{
						let speed=(target-parseInt(getComputedStyle(obj)[name]))/10
						obj.style[name]=parseInt(getComputedStyle(obj)[name])+speed+'px'
					}
				},30)
			}