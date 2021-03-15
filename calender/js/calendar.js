var dt = new Date();
function rendermonth(){
	//console.log(dt);
	dt.setDate(1);

	var days = dt.getDay();
	//console.log(days)
	var endDate =  new Date(
		dt.getFullYear(),
		dt.getMonth() + 1,
		0
	).getDate();

	var prevDate =  new Date(
		dt.getFullYear(),
		dt.getMonth(),
		0
	).getDate();

	var todayDate = new Date()
	//	console.log(todayDate)
	var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

	document.getElementById("month").innerHTML = month[dt.getMonth()];
	document.getElementById("date_str").innerHTML = dt.toDateString();

	var cells = "";

	for(j = days; j > 0; j--){
		//console.log(prevDate)
		//console.log(prevDate - j)
		cells += "<div class='prev_date'>" + ( prevDate - j + 1)+ "</div>";
	}

	for(i = 1; i<=endDate; i++){
		if(i == todayDate.getDate() && dt.getMonth() == todayDate.getMonth()){
			cells += "<div class='today'>" +i+ "</div>";
		}else{
			cells += "<div class=''>" +i+ "</div>";
		}
	}

	document.getElementById("days").innerHTML = cells;
}

function moveMonth(month){
	if(month == 'prev'){
		dt.setMonth(dt.getMonth() - 1);
		rendermonth();
	}else if (month == 'next') {
		dt.setMonth(dt.getMonth() + 1);
		rendermonth();
	}else {
		rendermonth();
	}
}