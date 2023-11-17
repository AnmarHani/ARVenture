## Table of contents

1. Introduction
2. Requirements
3. Design
4. Implementation  
   4.1 Frontend  
   4.2Backend
5. Conclusion

## 1.Introduction

    Welcome to the world of ARventure, where gaming takes on a whole new dimension. In this exciting project, we're on a mission to transform the way you play and experience games by seamlessly blending augmented reality with real-world interactions.

## 2.Requirements

- Rq1\ user can login.
- Rq2\ user can pre-order the glasses.

- Rq3\ user can have overview abut glasses.

- Rq4\ user can add game and item to tray the glasses.

- Rq5\ user can see what he adds.

## 3.Design

Use case: Rq1\ user can sign in here

![ ](img/signin.png)

Use case: Rq2\ user will pre-order the glasses.

![ ](img/ProductPage.png)

Use case: Rq3\ landing page where user can have overview about the glasses.

![](img/LandingPage.png)

use case: Rq4\user can vote for favorite game he wants and try it.

![ ](img/ARVoteSearchPage.png)

use case: Rq5\ user will see The item.

![ ](img/ToolSearchPage.png)

## 4.Implementation

### 4.1 Frontend

**Home page**:

![ ](img/home1.png)
![ ](img/home2.png)
![ ](img/home3.png)

**Login page:**

![ ](img/login1.png)

**Sign up page:**

![ ](img/signup.png)

**product page:**

![ ](img/product.png)

**ARsearch page:**

![ ](img/ARsearch.png)

**tool search page:**

![ ](img/toolsearch.png)

**about us page:**

![ ](img/aboutus1.png)
![ ](img/aboutus2.png)

### 4.2 Backend

**register:**

![ ](img/register.png)

POST register(username,email,password):
this end point must register the user in the database.

1-will receive the username,email,password from the front end request  
2-will store it in the database  
3-will return a message "user registration successful and data
(username,id) as a response

**login**

![ ](img/login.png)

this end point must login the user from the database

1-will receive the username, password from the front end request  
2-will check if(username==database. Username and password ==database. Password)  
2.1-retrun a massage “login successful" as a response  
2.2else return a massage "Invalid username or password “as a response.

**favourite**

![ ](img/favourite.png)

POST FAVOURITE(toolname,gamename):

this end point must store the favorite item in the database  
1-will receive the toolname,gamename from the front end request.  
2-will store it in the database.  
3-will return a message “Favorite item stored successfully" as a response.

**displayfavitem**

![ ](img/displayfavitem.png)

GET displayfavitem(toolname,gamename):

this endpoint will display all the favorite items from the database  
1-it will search for all the favorite items(toolname,gamename,likes,dislikes in the database)  
2-it will return the items as a response to the frontend.

**displayuserinfo**

![ ](img/displayuserinfo.png)

GET displayuserinfo (username, email):
this endpoint retrieves user information from the database and displays it.

1-It will search for user information in the database.  
2-it will check in the database the id for this user
(where id==username)  
3-It will retrieve the username and email for the user.  
4-It will return the user info as a response to the frontend.

**\_likes**

![ ](img/likes.png)

PUT update\_ likes(favourite_id, likes dislikes):

1-Updates the number of likes for a specific favorite item in thdatabase.  
2-Receives the favourite_id as a path parameter and the likes_dislikes payload.  
3-Retrieves the favorite item with the given favourite_id from the database.  
4-If the favorite item is not found, returns a response with a message "Favorite item not found".  
5-If the likes value is provided in the payload, updates the likes field of the favorite item with the new value.  
6-Commits the changes to the database.  
7-Returns a response with a message "Likes updated successfully".

**dislikes**

![ ](img/dislikes.png)

PUT update_dislikes(favourite_id, likes_dislikes):

1-Updates the number of dislikes for a specific favorite item in the database.  
2-Receives the favourite_id as a path parameter and the likes_dislikes payload.  
3-Retrieves the favorite item with the given favourite_id from the database.  
4-If the favorite item is not found, returns a response with a message "Favorite item not found".  
5-If the dislikes value is provided in the payload, updates the dislikes field of the favorite item with the new value.  
6-Commits the changes to the database.  
7-Returns a response with a message "Dislikes updated successfully".

## 5.Conclusion
 
 In conclusion, ARventure is set to change the way you play games. We're combining augmented reality with real-world interactions to create an exciting, immersive experience. Get ready for a whole new way to play and have fun with ARventure.