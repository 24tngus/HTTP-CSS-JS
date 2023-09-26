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
		var count = 1;
		$("#up").on("click", function() {
		 console.log("up");
			count++;
			$("#count").val(count);
		});
		$("#down").on("click", function() {
			console.log("down");
		 	count--;
			if (count == 0)
				count = 1; 
			$("#count").val(count);
		});

	});
		
	
</script>
</head>
<body>
	<table>
		<tr>
			<td>수량</td>
			<td><input type="text" name="count" value="1" id="count"></td>
			<td>
				<table>
					<tr>
						<td><img src="basket_up.gif" id="up"></td>
					</tr>
					<tr>
						<td><img src="basket_down.gif" id="down"></td>
					</tr>
				</table>
			</td>
			<td>EA</td>
		</tr>
	</table>
</body>
</html>