function toggle(id){
	var thing = document.getElementById(id);
	if(thing.className="generic"){
		expand(thing);
	}else{
		collapse(thing);
	}
}
function expand(thing){
	thing.className="expanded";
}
function collapse(thing){
	thing.className="generic";
}
