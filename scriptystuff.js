function toggle(id){
	var thing = document.getElementById(id);
	if(thing.className="generic"){
		expand(thing);
	}else{
		collapse(thing);
	}
}
function expand(thing){
	collapse(document.getElementById("magic"));
	collapse(document.getElementById("details"));
	collapse(document.getElementById("evidence"));
	collapse(document.getElementById("people"));
	thing.className="expanded";
}
function collapse(thing){
	thing.className="generic";
}
