# Wanderer
Wanderer is an AirBnb clone designed to be a conduit between home owners and renters, allowing travelers to book accomodations across the United States. After posting their listing, Hosts can edit all the details of their post barring the location. This design decision was to enforce the idea that a change of location warrants a separate listing. 

After booking a reservation logged in users can view their upcoming trips, get directions, and edit the details of their reservation within reason. These functionalities are enabled through a user interface designed for intuitive navigation and usability. 

## Features
- Account creation and login via credentials or a demo user. 
- Create, Read, Update and Delete functionality of : 
  - Listings
  - Reservations

Planned features: 
- Categorical search
- Further Google Maps API integration 
- Reviews
- Favorites

## Technologies Used
- React / Redux
- Flask
- SQLAlchemy
- PostgreSQL
- Amazon S3 Buckets
- Google Maps API
- Docker

<a src="google.com"> <img src="https://user-images.githubusercontent.com/24263351/157998349-284820ed-dff1-4ddb-ace8-620da40907a8.png" alt="drawing" width="75"/> </a><img src="https://cdn-media-1.freecodecamp.org/images/LwOjDA5I0tNxHZPOuhTS9abq4Bc3FxMr1SJQ" alt="drawing" width="150"/><img src="https://repository-images.githubusercontent.com/43719692/9f148400-c3f0-11e9-895d-1f268f53544c" alt="drawing" width="150"/><img src="https://hakin9.org/wp-content/uploads/2019/08/connect-a-flask-app-to-a-mysql-database-with-sqlalchemy-and-pymysql.jpg" alt="drawing" width="150"/><img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/postgresql_original_wordmark_logo_icon_146392.png" alt="drawing" width="75"/><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Amazon-S3-Logo.svg/1200px-Amazon-S3-Logo.svg.png" alt="drawing" width="75" background-color="white"/><img src="https://cloudfresh.com/wp-content/uploads/2020/04/975626gmp.png" alt="drawing" width="125" background-color="white"/><img src="https://logos-world.net/wp-content/uploads/2021/02/Docker-Logo-2013-2015.png" alt="drawing" width="125" background-color="white"/>

## Splash Page
The splash page lists important details such as technologies used and my personal GitHub and LinkedIn urls. The user can navigate to the home page by pressing the enter button. 
![splash](https://user-images.githubusercontent.com/24263351/164359359-3e0100b8-77af-42b7-bf7b-d7af4f089353.PNG)

## Home Page
The home page is the true landing site for the page. As well as featuring the logo for Wanderer, the user has their navigation interfact at the top right of the screen. Through this a user can log-in (credentials and demo user access) and sign-up. Once authenticated a user can create a new listing or view upcoming trips. Upon clicking view listings the user can view all listings currently available on the website. 
![home](https://user-images.githubusercontent.com/24263351/164359554-41dbafbd-82dd-4793-a2ee-3146ffae7efa.PNG)

## Listings
On a listings page a user can view important details about the listing as well as book dates via the calendar. This calendar renders already booked dates so users can know that the dates they choose are available. 
![listing1](https://user-images.githubusercontent.com/24263351/164359946-b329ea89-6341-4c26-8637-c3b4a5f1ccfb.PNG)
![listing2](https://user-images.githubusercontent.com/24263351/164359949-d1ae7d7b-2dd6-424e-ae76-421705ec4c67.PNG)

