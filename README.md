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


METHOD | URL                        | What does it do
-------|----------------------------|---------------------------------
POST   | `api/auth/signup`          | Create an account
POST   | `api/auth/login`           | Login User & Return Token
