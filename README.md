# Introduction

An open source item tracker for the game [Warframe](https://www.warframe.com/).

Created using [Create React App](https://github.com/facebookincubator/create-react-app).

Heavily inspired by the work on [Warframe Reliquary](https://wf.xuerian.net/). Check it out if you haven't already.

# Development Guide

If you would like to help keep the list up to date follow the instructions below.

### Setup

To develop this application, you will need to first install:
- [Node.js](https://nodejs.org/en/)  
- [Yarn](https://yarnpkg.com/en/)  
- As well as a git client

1. In github, create a fork of the project
2. Clone your fork to your local machine and open up your shell/command prompt in that folder

3. Run the following commands:

   ```
   yarn
   yarn start
   ```

You should now have a development version of the checklist running on [http://localhost:3000/](http://localhost:3000/)

### Submitting a change

When you have commited and pushed your update to your fork of the project, create a pull request and explain the changes that you made.
### Background

The majority of functionality in the checklist comes from two files:  
- src/data/empty-list.js
- src/data/list-data.js

emptylist.js contains a template that is used for creating data for new users and updating data when the list changes  
list-data.js contains data for item acquisition as well as MR requirements and limitations (vaulted, unobtainable, etc.)

**Important:** Any time a change is made to emptylist.js, the version property at the top of the file needs to be updated. If the version number has changed, update it to reflect the Warframe PC client version visible in the middle of the image below.  
If the version has not changed, take the current version and add the suffix "-a", "-b", "-c" as needed.

Ex: if the current version is "2017.05.31.15.04-a", change it to "2017.05.31.15.04-b"

[![found here](https://puu.sh/w6Zl2/3024b678c0.jpg)](https://puu.sh/w6Zl2/3024b678c0.jpg)

### Change an item's acquisition data

To change an item's acquisition data, simply find it's location in list-data.js and add or remove properties. The currently supported properties are:  
- acquisition (string describing how to obtain an item)
- mr (numerical value representing MR requirement for an item)
- lab (the name of the lab an item is researched from)
- unobtainable (true if item can not be obtained anymore)

Most items do not have a value for all of these flags, and it is alright to leave out flags that do not apply to an item. The only flags that MUST exist for an item entry are "title" and "acquisition."

### Rename an item

Sometimes, an item's name will not be correctly reflected in the checklist, if this is the case, all you need to do is find the item's entry in both list-data.js and emptylist.js and change the title property.

*Follow the instructions above for updating the version number since emptylist.js will have changed.*

### Add an item

To add an item, find the list for it's category (Frame, Primary, Secondary, etc.) and, at the BOTTOM of the list, create a new entry. This needs to be done in both empty-list.js and list-data.js and both entries must have the same title property.  
- The entry in empty-list should contain a title property as described above as well as the acquired, rankThirty, and researched properties all set to false.
- The entry in list-data must contain, at minimum, a title and acquisition property. Any additional information needed for the item should be added as well. I will not accept a pull request with incomplete list-data entries.

*Follow the instructions above for updating the version number since emptylist.js will have changed.*
