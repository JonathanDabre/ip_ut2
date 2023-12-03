<%@ page import="java.util.*" %>
<%@ page import="java"

<html >
<head>
    <title>Document</title>
</head>
<body>
    <form method="post" action="arithematicOperations.jsp">
        <div>
            <label for="num1">Number 1</label>
            <input type="number" name="num1">
        </div>
        <div>
            <label for="num2">Number 2</label>
            <input type="number" name="num1">
        </div>

        <button type="submit">Submit</button>
    </form>


        <% 
            String str1 = request.getParameter("num1");
            String str2 = request.getParameter("num1");

           
            double num1 = Double.parseDouble(str1);
            double num1 = Double.parseDouble(str2);

            double sum = num1 + num2;
            double diff = num1 - num2;
            double prod = num1 * num2;
            double div = num1 / num2;
        %>

        <p>Sum: <% sum %></p>
        <p>Difference: <% diff %></p>
        <p>Product: <% prod %></p>
        <p>Division: <% div %></p>
        
</body>
</html>