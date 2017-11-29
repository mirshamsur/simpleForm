function myFunction(){
		var x = document.forms["mir"];
		var text = "";
		var i;
		for (i = 0; i < x.length; i++){
			text += x.elements[i].value + "<br>";
		}
		document.getElementById("aayan").innerHTML= text;
	}
	

