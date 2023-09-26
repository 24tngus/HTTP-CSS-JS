<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="jquery-2.2.1.js"></script>
<script type="text/javascript">
	$(document).ready(function() {

		$("#passwdCheck").on("keyup", function(event){
			var mesg = "일치합니다.";
			var passwd = $("#passwd").val();
			if(passwd != $(this).val()){
				mesg = "일치하지 않습니다.";
			}
			
			$("#result").text(mesg);
			$("#result").css("color","red");
			
		});
		
	});
</script>
</head>
<body>
  <form>
   비밀번호<input type="text" name="passwd" id="passwd"  value="abc" ><br>
   비밀번호 확인<input type="text" name="passwdCheck" id="passwdCheck"><br>
 <span id="result"></span>
  </form>
</body>
</html>