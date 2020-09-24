<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>tokyo.jsp</title>
    
    
</head>
        <%
        String id = request.getParameter("id");
        String fName = request.getParameter("first_name");
        String lName = request.getParameter("last_name");
         %>
         
     <div style="background-color: azure; border: 1px dotted red;">
        <전송된 정보>
        <form action="jsonUpdate.jsp" method="POST">
            아이디:<input type="text" name="id" value="<%=id%>">
            이름:<input type="text" name="first_name" value="<%=fName%>">
            성:<input type="text" name="last_name" value="<%=lName%>">
            <input type="submit" value="전송">
            <input type="reset" value="취소">
        </form>
    </div>
    

</body>
</html>

    

</html>