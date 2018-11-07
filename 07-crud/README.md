![cf](http://i.imgur.com/7v5ASc8.png) CRUD
==========================================

## Learning Objectives

**Students will be able to ...**

* Properly test an `express` server
* Implement CRUD behavior through HTTP to a REST API

## Outline
* :05 **Housekeeping/Recap**
* :30 **Whiteboard/DSA Review** 
* :15 **Lightning Talk** 
* Break 
* :30 **CS/UI Concepts** -
* :20 **Code Review** 
* Break
* :60 **Main Topic**

## Computer Science Concept:
* State Management

## UI Concept:
* SASS Modularity and Mixins

## Main Topic:

#### Modularization & Separation of Concerns
* Modularizing your code into logical chunks
* Each thing should do the thing its best at
* Dan Abramov: http://react-file-structure.surge.sh/

#### HTTP Form Handling
* Browsers only care about GET and POST
* On our server, we need to care about PUT, PATCH, DELETE
* Express has given us a nice assist here with "Method Overrides"

#### Server Testing
* `supertest`
* Generally, avoid starting the actual server for testing
* Test Pyramid
  * Server Testing crosses boundaries
    * Units: Server Internal Functions
      * Mock any integrations (like data fetching)
    * Integration: How it connects to other services
      * Really connect to other services (hard dependencies)
    * Acceptance
      * The server might be a dependency of some other test

#### CRUD Operations
* CREATE
* READ
* UPDATE
* DESTROY
