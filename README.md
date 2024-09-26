This is a Yellow Pages app programmed in React. 

The app provides the front end of a business card display service.
The app provides an interface to view cards, and to sign up to the api service. Signed up and logged in users have a JWT token saved to localstorage until they log out again, and the token provides the authorization for requests made by that user.
Once signed up, the app provides CRUD functionality for cards, allowing users to create, edit, and delete cards for which they have authorization.

Setup:
The app is structured with a router inside of a layout, which is nested within providers for the apps functionality.

The site uses react-router-dom to navigate its pages, and has the following pages:
About: This page is available at all times and provides text explaining the app.
Cards: This is the root of the app. It is available at all times. Cards on the page display interactive buttons relative to a users authorizations.
EditCard: This page is available only to users who created that card. If an invalid address or a card a user isn't authorized to edit is put in, the user is kicked back to the root page with an error message.
Error: Unspecified roots navigate here. There are navigation options to return to the root page.
FavoriteCards: This page displays cards liked by the user. Users who aren't signed in are kicked back to the root page.
LoginPage: This page allows a user to login. Already logged users are kicked back to the root page.
MyCards: This page displays all cards created by a user. Users who aren't signed in or aren't a business are kicked back to the root page.
NewCard: This page allows a user to create a new card. Users who aren't signed in or aren't a business are kicked back to the root page.
Signup: This page allows a user to login. Already logged users are kicked back to the root page.
ViewCard: This page is available at all times and provides a more detailed description of each business card. If an invalid address is put in or the card is deleted, the user is kicked back to the root page with an error message.

Navigation:
There are three primary modes of navigation. The appbar on top, the footer, and the drawer that opens to the left of the page. All three provide access to the apps pages in accordance with the users authorization.
Clicking on a card will take you to its viewing page, and the buttons on its action bar will take you to the pages that allow you to perform CRUD operations with that card.

Maps:
Maps are provided to the viewing page using OSM data, and the coordinates of the address are acquired using nominatim.

Features:
The app features dark mode and light mode options, toggleable via the button on the right hand side of the appbar.