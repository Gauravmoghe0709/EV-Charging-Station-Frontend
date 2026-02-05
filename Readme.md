 # API Structure Summary
 
# Auth (User + Admin):

POST /auth/register

{
  "name": "",
  "email": "",
  "password": "",
  "role": "user" or "admin"
}


POST /auth/login

GET /auth/me (Protected)
  Get logged-in user’s profile.


# Admin - STATION MANAGEMENT APIs:

POST /admin/station/create
    Create a new EV charging station.

{
  "name": "",
  "address": "",
  "location": {
    "lat": 0.0,
    "lng": 0.0
  },
  "totalSlots": 10
}


PUT /admin/station/update/:id

DELETE /admin/station/delete/:id

GET /admin/station/all



# User - FIND STATIONS APIs

GET /station/nearby?lat=XX&lng=YY&distance=KM

Find stations near user location.

Query params:

lat

lng

distance (optional, default 10 km)


GET /station/:id
 Get single station details.

GET /station/all
  Get all stations (map display).


# User - SLOT VIEW APIs (User):

GET /slot/station/:stationId

  Show all slots of a station.

User sees:-

     Empty slots

     Booked slot

# Bookings:

POST /booking/create

   {
  "userId": "",
  "stationId": "",
  "slotId": "",
  "startTime": "",
  "endTime": ""
}


PUT /booking/cancel/:id
  Cancel booking (user).

GET /booking/user/:id

  Get all bookings of logged-in user.

GET /booking/station/:stationId
   Admin sees all bookings for a station.

# Admin Analytics:

GET /admin/analytics/overview

Returns:-

  Total stations

  Total slots

  Total bookings

  Available vs booked slots 

 GET /admin/analytics/station/:stationId

Analytics for one station:-

  Total slots

  Booked slots

  Active users