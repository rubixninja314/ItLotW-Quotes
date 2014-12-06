var doColl=true;
function setupQuotes(){
	var cats=["magic","details","evidence","people"];
	for(var cat=0;cat<4;cat++){
		var quotes=document.getElementById(cats[cat]).getElementsByClassName("expandable")[0].children;
		for(var i=0;i<quotes.length;i++){
			quotes[i].id=cats[cat]+i;
			quotes[i].addEventListener("click",function(){toggleQ(this)},false);
		}
	}
}
function toggleQ(thing){
	doColl=false
	thing.innerHTML="hello  world";
}


function toggle(id){
	if(doColl){
		var thing = document.getElementById(id);
		if(thing.className=="generic"){
			collapse(document.getElementById("magic"));
			collapse(document.getElementById("details"));
			collapse(document.getElementById("evidence"));
			collapse(document.getElementById("people"));
			expand(thing);
		}else{
			collapse(thing);
		}
	}
	doColl=true;
}
function expand(thing){
	thing.className="expanded";
}
function collapse(thing){
	thing.className="generic";
}
