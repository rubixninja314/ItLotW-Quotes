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
		if(thing.className=="generic"||thing.className=="genericNew"){
			var delayed=false
			var cats=["magic","details","evidence","people"];
			for(var cat=0;cat<cats.length;cat++){
				if(document.getElementById(cats[cat]).className=="expanded"){
					delayed=true;
					collapse(document.getElementById(cats[cat]));
				}
			}
			expand(thing, delayed);
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
function expand(thing, delayed){
	thing.className="expanded";
	thing.className="dexpanded"
}
function collapse(thing){
	thing.className="generic";
}
