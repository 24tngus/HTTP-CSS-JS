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
		$("select").on("change", function(event){
			var price = $("#price").val();
			var sum = parseInt($(":selected").val()) * parseInt(price);
			$("#result").text(sum);
		});
	});
</script>
</head>
<body>
	값
	<input type="text" name="price" value="1000" id="price" readonly> 갯수
	<select name="quantity">
		<option value="10">10</option>
		<option value="20">20</option>
		<option value="30">30</option>
		<option value="40">40</option>
		<option value="50">50</option>
	</select><br> 
	합계:<div id="result"></div>
</body>
</html>