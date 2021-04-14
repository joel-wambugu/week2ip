function getUserData(){
	
	//validation
	var dates = document.getElementById("birthdetails").value;
	var gender = document.getElementById("gender").value;
	
	if(dates === "" || dates === null || gender === "" || gender === null){
		document.getElementById("denyMessage").style.display = "block";
		document.getElementById("replyMessage").style.display = "none";
	}else{
		//if all fields are filled
		document.getElementById("denyMessage").style.display = "none";
		var birthday = new Date(dates);
		
		var year = birthday.getFullYear();
		var month = birthday.getMonth();
		var day = birthday.getDay();


		//day to text array
		var dayweek = new Array(7);
		dayweek[0] = "Sunday";
		dayweek[1] = "Monday";
		dayweek[2] = "Tuesday";
		dayweek[3] = "Wednesday";
		dayweek[4] = "Thursday";
		dayweek[5] = "Friday";
		dayweek[6] = "Saturday";


		// male array
		var male = [ "Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
		//female array
		var female = [ "Akosua","Adwoa","Abenaa", "Akua", "Yaa","Afua","Ama"];

		var CC = parseInt(year.toString().substring(0, 2));
		var YY = parseInt(year.toString().substring(2, 4));
		var MM = month;
		var DD = parseInt(day);

		var DOTW = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
		var fin = parseInt(DOTW);

		var isMale = male[DD];
		var isFemale = female[DD];


		document.getElementById("weekDay").innerHTML = dayweek[fin];

		if(gender === isMale){
		   document.getElementById("ghanaName").innerHTML = isMale;
		   }else{
		   document.getElementById("ghanaName").innerHTML = isFemale;
		   }

		//display message
		document.getElementById("replyMessage").style.display = "block";
		
	}
}