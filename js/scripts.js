function getUserData(){
	var year = document.getElementById("birthyear").value;
	var month = document.getElementById("birthmonth").value;
	var day = document.getElementById("birthday").value;
	var gender = document.getElementById("gender").value;
	

	var months = {
    January : 1,
    February : 2,
    March : 3,
    April : 4,
    May : 5,
    June : 6,
    July : 7,
    August : 8,
    September : 9,
    October : 10,
    November : 11,
    December : 12
	};
	
	//day to text
    var dayweek = new Array(7);
    dayweek[0] = "Monday";
    dayweek[1] = "Tuesday";
    dayweek[2] = "Wednesday";
    dayweek[3] = "Thursday";
    dayweek[4] = "Friday";
    dayweek[5] = "Saturday";
	dayweek[6] = "Sunday";
	
	var male = {
    Sunday : "Kwasi",
    Monday : "Kwadwo",
    Tuesday : "Kwabena",
    Wednesday : "Kwaku",
    Thursday : "Yaw",
    Friday : "Kofi",
    Saturday : "Kwame"
	};
	
	var female = {
    Sunday : "Akosua",
    Monday : "Adwoa",
    Tuesday : "Abenaa",
    Wednesday : "Akua",
    Thursday : "Yaa",
    Friday : "Afua",
    Saturday : "Ama"
	};
	
	var CC = parseInt(year.substring(0, 2));
	var YY = parseInt(year.substring(2, 4));
	var MM = months[month]+2;
	var DD = parseInt(day);

	var DOTW = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
	var fin = parseInt(DOTW);
	
	var isMale = male[dayweek[fin]];
	var isFemale = female[dayweek[fin]];
	
	
	document.getElementById("weekDay").innerHTML = dayweek[fin];
	if(gender === isMale){
	   document.getElementById("ghanaName").innerHTML = isMale;
	   }else{
	   document.getElementById("ghanaName").innerHTML = isFemale;
	   }
	

	document.getElementById("replyMessage").style.display = "block";
	//alert("year: "+cc+"+"+yy+"month:"+mm+"day"+dd+"gender"+gender);
	//alert(dayweek[fin]+" "+fin+" is "+isMale);
}