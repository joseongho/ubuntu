var i, tmp ;

tmp = document.getElementsByTagName("a");

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
<<<<<<< HEAD
=======

function testFunction() {
	document.getElementById("modal").style.display = "none";
}
>>>>>>> e883e93bcafc07854eab77849e1eb808b529fe48
