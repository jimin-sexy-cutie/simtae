var ansArr = [];
var massage;


$(".q1").css("display","none");
$(".q2").css("display","none");
$(".q3").css("display","none");
$(".q4").css("display","none");
$(".q5").css("display","none");
$(".q6").css("display","none");
$(".q7").css("display","none");

function fn_start(){
	$(".main").css("display","none");
	$(".q1").css("display","block");

}

function fn_next(page,val){
	var next = page+1;
	$(".q"+page).css("display","none");
	$(".q"+next).css("display","block");
	ansArr.push(val);

	if(page == 5){
		fn_test();
	}
}


function fn_test(){
	setTimeout(function(){
		$(".q6").css("display","none");
		$(".q7").css("display","block");
		fn_result();
	}, 1500);
}

function fn_result(){
	
	massage = ansArr[0]+"<br>"
		+ansArr[1]+"<br>"
			+ansArr[2]+"<br>"
				+ansArr[3]+"<br>"
					+ansArr[4]+"<br>";
	$("#message").html(massage);
}





