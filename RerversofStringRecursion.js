function reverse(str){
	if(str.length === 0) return '';
    return str.substring(str.length-1,str.length)+reverse(str.substring(0,str.length-1));
}

reverse("mynameisnalla")
