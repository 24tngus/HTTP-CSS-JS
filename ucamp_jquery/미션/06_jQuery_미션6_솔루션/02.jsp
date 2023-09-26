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
	
		var sum = 0;
		  $("button").on("click",function(event){
			  $("li").each(function(idx,ele){
					sum += parseInt($(this).text());
				})
				$("#result").text(sum);
		  });
		
		
		
	});
</script>
</head>
<body>
	<ul>
	 <li>5</li>
	 <li>15</li>
	 <li>25</li>
	 <li>35</li>
	 <li>45</li>
	 <li>55</li>
	 <li>65</li>
	</ul>
<button id="sum">li태그의 총합계</button><br>
합계:<span id="result"></span>
</body>
</html>