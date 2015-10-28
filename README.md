#The Do Your Goddamn Homework Club

*The Do Your Goddamn Homework Club* is the project I did for [HackingEDU](http://hackingedu.co) this year. It's supposed to help you with your productivity, via partnering you up with other people and creating a sense of mutual accountability. 

It's powered by Node.js, MongoDB, Moxtra APIs, and Material Design Lite. You will notice that sign-in is eerily similar to https://scotch.io/tutorials/easy-node-authentication-setup-and-local

Considering my relative inexperience with Node.js, and the fact that I barely remember the actual process of writing the code - this being at a hackathon all-nighter and all, one is left to wonder what lays inside.

Most of the time was spent fixing an issue that turned out to be a problem with Moxtra ('+' -> ' ' in email fields) 

====

##What works

Not a whole lot. There's enough code for you to set up authentication on your end, and to get it to talk with Moxtra - though first priority would be to move that code away from clientside JS.

That aside, here's a list of what I had implemented:

* Sign-in
* Purty Material Design
* Gravatar support
* Moxtra authentication (clientside, using email as ID)

##What I'd like to work

* Proper Moxtra integration
* Goal setting methods (integrate those cards on the left properly, I kinda have an idea as to how this can be done)
* Partner matching (ask for goals when registering; match people up using these goals)

##Various things that need doing

* Add 'group' field to db, use to store shared reminders and Moxtra binder info
* Get Gravatar to show up in Moxtra
* Use Mongo ID instead of email for Moxtra
* Fix that issue with chat size

====

![Ezhik](http://i.imgur.com/mZIlGu7.png "Ezhik")
