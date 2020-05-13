var i, tmp ;

tmp = document.getElementsByClassName("nav");

for ( i = 0 ; i < tmp.length ; i++ ) {
	tmp[i].style.display = "none";
}

document.getElementsByTagName("nav")[0].onmouseover = function () {  
	for ( i = 0 ; i < tmp.length ; i++ ) {
		tmp[i].style.display = "block";
	} ;
}

document.getElementsByTagName("nav")[0].onmouseout= function () {  
	for ( i = 0 ; i < tmp.length ; i++ ) {
		tmp[i].style.display = "none";
	} ;
}
