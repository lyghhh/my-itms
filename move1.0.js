function move(obj,name,target,fn){
				clearInterval(obj.timer)
			obj.timer=	setInterval(function(){
				if (name=='opacity') {
					cur=getComputedStyle(obj)[name]*100
				} else if(name=='width'||name=='height'||name=='border-radius'||name=='border-width'||name=='font-size'){
					 cur=parseInt(getComputedStyle(obj)[name])
				}
				else{
					cur=getComputedStyle(obj)[name]
				}
				let speed=(target-cur)/10
				speed= (speed>0) ? Math.ceil(speed) :Math.floor(speed)
					if (cur==target) {
						clearInterval(obj.timer)
						if(fn){fn()}
					} else{
						if (name=='opacity') {
							obj.style[name]=(cur+speed)/100
						} else if(name=='width'||name=='height'||name=='border-radius'||name=='border-width'||name=='font-size'){
							 obj.style[name]=cur+speed+'px'
						}
						else{
						obj.style[name]=target
						}
						
					}
				},30)
			}