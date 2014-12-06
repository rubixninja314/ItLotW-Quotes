var doColl=true;
function setupQuotes(){
	var cats=["magic","details","evidence","people"];
	for(var cat=0;cat<cats.length;cat++){
		var quotes=document.getElementById(cats[cat]).getElementsByClassName("expandable")[0].children;
		for(var i=0;i<quotes.length;i++){
			quotes[i].id=cats[cat]+i;
			quotes[i].addEventListener("click",function(){toggleQ(this)},false);
		}
	}
}
function toggleQ(thing){
	doColl=false;
	if(thing.className!="big"){
		var bigs=document.getElementsByClassName("big");
		if(bigs!=null){
			for(var i=0;i<bigs.length;i++){
				shrink(bigs[i]);
			}
		}
		enlarge(thing);
	}else{
		shrink(thing);
	}
}
function shrink(thing){
	thing.className="small";
}
function enlarge(thing){
	thing.className="big";
}

function toggle(id){
	if(doColl){
		var thing = document.getElementById(id);
		if(thing.className!="expanded"){
			collapse(document.getElementById("magic"));
			collapse(document.getElementById("details"));
			collapse(document.getElementById("evidence"));
			collapse(document.getElementById("people"));
			expand(thing);
			var quotes=document.getElementById(id).getElementsByClassName("expandable")[0].children;
			for(var i=0;i<quotes.length;i++){
				quotes[i].className="smallNew";
			}
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
