# nightowl
Nightowl is an online book hub application developed using angular (for frontend) and django (for backend) with postgres as backend database. 
Snapshots are attached for the public users for basic infomation.

# Frontend using Angular:
After checking out the code, go inside nightowlfrontend folder and run npm install to download all the dependices. After downloading the dependencies, run ng serve. Our frontend will start run on localhost:4200.

# Backend using Python3 Django
After checking out the code, go inside nightowlbackend folder and install all python libraries required to run backend using 'requirements.txt'. After downloading the dependencies, run python mange.py runserver 8080 . Our frontend will start run on localhost:8080.

# Database 
For creating a database books_data.csv is provided , you can create using the csv. The code is written for postgress database . You can modify the type of database using python django' settings.py file.

# About the application
There are three views for the end users .
- Home : consists of all the books with author's name, rating and other details.
- Bookdetails : consits of details of a specific book with rating, type of book, ISBN etc. It also provides the actual website link for the books.
- Dashboard: consists of a stats of all the books based on rating, types and top 10 rated books. For chart in dashboard view, Highcharts is used.
The application also provides the user with light and dark theme functionality. It allows the users to toggle themes.
