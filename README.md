# Koncept Interior

A single-page application made using bootstrap and express, I split each part of the main-page into a single
bootstrap class - components- in its own file. These components are Profile, Post, Chat,

Search, and Friends; all of which are imported in a main component class. Since React allows
for easy management of state variables, I am able to easily send down data from the main
component to the others. Nevertheless, sideways data communication is harder, for this
reason I used Socket.io; by taking advantage of the fact that a single socket -each user has
their own socket- can broadcast messages to itself, I can send events and data between single
components. Since my main application component can manipulate the page at will, and
change between the rendered components, the page does not need to reload and no other
pages need to be downloaded. All actions with the server happens through Ajax mostly via
Socket.io.
   User-sessions to keep a user logged in using express sessions saved in remote
database. This allows me to keep secure sessions without the need to encrypt it as they are not
stored on the client-side. Express associates a single IP with a session document stored in the
database. When the IP disconnects or the cookie timeouts the session is deleted from the
database. This is also an extreme advantage as I store sensitive data in the session cookie
such as the user&#39;s unique id from the user’s account in the database for quick data retrieval if
needed. JavaScript does this very greatly using prototypes as I can add new fields over the
session prototype at any given moment.

Technologies used for making this application and links for the introduction of the respective:

    1. [MongoDB](https://docs.mongodb.com/manual/tutorial/getting-started/)
    2. [Express](https://expressjs.com/en/starter/installing.html)
    3. [Angular](https://docs.angularjs.org/guide/introduction)
    4. [Node](https://expressjs.com/en/starter/installing.html)
