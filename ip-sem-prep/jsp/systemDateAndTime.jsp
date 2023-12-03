<%@ page import="java.util.Date" %>
<%@ page import="java.text.SimpleDateFormat" %>
<%@ page import="text/html;charset=UTF-8" language="java" %>
<!-- import statemants generally written above html tag in jsp -->

<html>
<head>

    <title>Document</title>
</head>
<body>
    <div>
        <h1>System Date and Time</h1>
        <%
            Date currentDate = new Date();
            <!-- format date in date and time -->
            SimpleDateFormat df = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss"); 

            String formattedDate = df.format(currentDate);
        %>

        <p><% formattedDate %></p>
    </div>
</body>
</html>