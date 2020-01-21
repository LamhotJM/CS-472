<%--
  Created by IntelliJ IDEA.
  User: Keith Levi
  Date: 11/15/2017
  Time: 7:55 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="edu.mum.Person, java.util.*" %>
<%@ page import="edu.mum.Dog" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>Insert title here</title>
</head>
<body>

DOG NAMES EXAMPLE
<%
    List<Person> people = new ArrayList<Person>();
    Person p1 = new Person("Tom", new Dog("Cash"));
    Person p2 = new Person("Jerry", new Dog("Dollar"));
    people.add(p1);
    people.add(p2);



    for(Person p : people){
        request.setAttribute("person", p);

%>
<br/>
JSP expression:  <%= p.getDog().getName()%><br/>
EL: ${person.dog.name }
<%
    }

    Map<String, String> students = new HashMap<String, String>();



    students.put("test", "Tom");
    students.put("demo", "Jerry");

    request.setAttribute("mumstudents", students);

%>

<p/>
My first student: ${mumstudents["test"]}
<br/>
{mumstudents.test}:  ${mumstudents.test}
<br/>
{students.test}:   ${students.test}

</body>
</html>
