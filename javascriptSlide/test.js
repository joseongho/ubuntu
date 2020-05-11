var j , tmp2 ;

tmp2 = document.getElementsByTagName("img");

function myFunction () {
	tmp2[j].style.display = "none";
	if ( j < 5) j ++ ;
	if ( j >= 5) j = 0 ;
	tmp2[j].style.display = "block";
};

for (j=1; j < tmp2.length; j++) {
	tmp2[j].style.display= "none" ;
}

j = 0 ;
window.setInterval( function () { myFunction() ; } , 1000 ) ;

