# WalkMyDog

# user stories

Users can signup.
Users can delete account.
Users can login.
Users can logout.

All users can be both walker and dog owners.
Users can create a profile of their dog.
Users can create their own profile as dog walker.
Users can update their profile (both dog and walker).

Users can search dogs by size, breed, dog character (active, walker, lazy), activity, geolocalization, timetable.
Users can be searched as walker by geolocalization and timetable.
The application provides telephone number and email of the other party or sends a message directly.

Users can give a rating to both dog and walker.
Users can provide a description of the experience with the dog/walker.


## API ROUTES
Please note that all routes in this API should be called with the `/api` prefix before the endpoint:
```
POST http://localhost:3000/api/auth/signup
```
### AUTHENTICATION ENDPOINTS
METHOD | URL                | What does it do
-------|--------------------|---------------------------------
POST   | `auth/signup`  | Create a new account
POST   | `auth/login`   | Authenticates a user
### LESSONS ENDPOINTS
METHOD | URL                    | What does it do
-------|------------------------|---------------------------------
GET    | `lessons`              | Get All Lessons
POST   | `lessons`              | Create Lesson
GET    | `lessons/:lessonId`    | Get One Lesson
PUT    | `lessons/:lessonId`    | Update Lesson
DELETE | `lessons/:lessonId`    | Delete Lesson
### USER ENDPOINTS (Authenticated)
All these endpoints require a `token` to be sent within the HTTP Headers.
METHOD | URL                     | What does it do
-------|-------------------------|---------------------------------
GET    | `me/lessons`            | Get User's Lessons (unstarted, ongoing, finished)
POST   | `me/lessons/:lessonId`  | Add lesson to my Lessons (unstarted)
GET    | `me/lessons/:lessonId`  | Return my lesson (with user progress)
PUT    | `me/lessons/:lessonId`  | Modify User's lesson (set progress)
DELETE | `me/lessons/:lessonId`  | Delete User's lesson from My Lessons
GET    | `me/profile`            | Get info from User (TODO)
PUT    | `me/profile`            | Modify User info (TODO)