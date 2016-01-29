window.onload=function(){

	var zht=document.getElementsByClassName('zht'),
	    lb=document.getElementsByClassName('lunbo-item'),
	    prev=document.getElementById('prev'),
	    next=document.getElementById('next'),
	    chang=document.getElementById('chang');

	var currentzht=zht[0],
		currentlb=lb[0],
		t;
		kaiguan=true;

	var fn=function(){
		var i=1;
		return function(){
			currentzht.setAttribute('class','zht');
			zht[i].setAttribute('class','zht show');
			currentzht=zht[i];

			currentlb.setAttribute('class','lunbo-item');
			lb[i].setAttribute('class','lunbo-item active');
			currentlb=lb[i];

			i+=1;
			if(i==lb.length){
				i=0;
			}
		}
	}();
	t=setInterval(fn,3000);

	chang.onmouseover=function(){
		clearInterval(t);
	}
	chang.onmouseout=function(){
		if(kaiguan){
			clearInterval(t);
			t=setInterval(fn,3000);
		}
	}

	for(var i=0;i<lb.length;i++){
		lb[i].onclick=function(){
			clearInterval(t);
			kaiguan=false;

			currentzht.setAttribute('class','zht');
			var index=this.getAttribute('index');
			zht[index].setAttribute('class','zht show');
			currentzht=zht[index];
			
			currentlb.setAttribute('class','lunbo-item');
			this.setAttribute('class','lunbo-item active');
			currentlb=this;
			
		}
	}

	prev.onclick=function(){
		clearInterval(t);
		kaiguan=false;

		currentzht.setAttribute('class','zht')
		var prev=(currentzht.previousElementSibling)?currentzht.previousElementSibling:zht[4];
		prev.setAttribute('class','zht show');
		currentzht=prev;

		currentlb.setAttribute('class','lunbo-item')
		var prevDD=(currentlb.previousElementSibling)?currentlb.previousElementSibling:lb[4];
		prevDD.setAttribute('class','lunbo-item active');
		currentlb=prevDD;
	
	}
	next.onclick=function(){
		clearInterval(t);
		kaiguan=false;

		currentzht.setAttribute('class','zht')
		var next=(currentzht.nextElementSibling)?currentzht.nextElementSibling:zht[0];
		next.setAttribute('class','zht show');
		currentzht=next;

		currentlb.setAttribute('class','lunbo-item')
		var nextDD=(currentlb.nextElementSibling)?currentlb.nextElementSibling:lb[0];
		nextDD.setAttribute('class','lunbo-item active');
		currentlb=nextDD;
	}


}