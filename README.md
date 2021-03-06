# Dogs App

This repository contains the initial code for a React app about dogs. To complete the app, you'll need to add the functionality for browsing random (& very cute) dog photos, and saving your favourites.

You will need to get images of dogs from the API at [https://dog.ceo/dog-api/documentation/](https://dog.ceo/dog-api/documentation/).

![dog app](https://user-images.githubusercontent.com/16071230/169317650-f81bcc3a-5185-45d8-be28-5571b4935d4d.png)

## Take-home or in-person/call

There are two options for completing this task, you can either:

1. Complete this task as a **take-home, submitted with some brief documentation about your approach**, or
2. Complete this task **live over a 1 hour call** with our team, where we can discuss the questions together on the call.

## Set up before you start

1. Ensure you have **node** (min. version `14.18.1`) & **npm** (min. version `6.4.15`) installed in your local dev environment. _We're more than happy to help you with this -- please let us know if you'd like support! This set up is not part of our evaluation._
2. Install your **IDE/code editor of choice** (we use VSCode & Webstorm, and we're more than happy for you to use your personal favourite).
3. Have a **Github account** ready to go for this project, or create a new one.
4. **Clone this repo** into your own! We're happy for you to make this a private repo.

## Commands

- `npm install`: Install dependencies
- `npm start`: Run the project

## What you need to do

- **Task 1:** When the "Next Dog" button is clicked, show a new random picture of a dog in the "Random Dogs" panel.
- **Task 2:** When the "Save Image" button is clicked, this image should be added to the "Saved Photos" area.

## What we're evaluating

_If you've chosen to complete this as a take-home, please include some short answers to the questions below to help us understand your approach (bullet points is fine!). If you've chosen an in-person session, we'll talk through these questions during the call._

1. How did you navigate & understand the architecture of this new React codebase?
   My understanding of the architecture of this application was a single parent component, App.js, displayed both children components RandomDog and SavedPhotos. The child components were independent of each other.

2. How did you go about working with & making requests to the backend API?
   I used axios as this was pre-installed and set-up a service for it in the services folder making the api request when used in the component easier to read. The requests made to the API then were called upon the RandomDog component loading with useEffect. This same function was re-used to initiate a call to the api when the user clicks the Next Dog button.

3. How did you make decisions around state management?
   In an app using only a few components which are nested one level deep such as this I was happy to use prop drilling to handle state management. If there were a greater number of components nested many levels deeper I would use another state management tool such as Context or Redux to control it.
   My plan was to keep state local to the component that requires it. With this in mind the RandomDog component needed to have the url stored in local state. The SavedPhotos state needed to be accessed by both the RandomDog and SavedPhotos components so I hoisted it up into the parent component.

4. What are some future improvements that you would add to this project as it scales?
   My initial thoughts would be to abstract out the components to a greater degree. The buttons could be separated out into their own files and so could the SavedPhotos-photos div in the SavedPhotos component. This would give us more control over the component and make it reusable.

   I would also think about implementing a state management provider and pass down state from a parent level in this case App.js which enables the children components to just display data. This would allow the application to have both "smart" - holding state and functions and "dumb" - display only components.

   An added feature could be for the saved photos to be stored in local storage allowing the user to refresh the page and the saved photos display remains unchanged.

## Take-home: Time spent on this task & submitting

If you're completing this task as a take-home, we recommend that the **time spent on the task is 1-2 hours**, and we want to make this work with your schedule. **We will not be evaluating you on time** ??? this recommendation is to make sure that you get a good opportunity at the task but **do not feel pressure to over-invest your personal time.**

There is no expectation to add tests or styling into your project. **We will not be evaluating you on these.**

To submit your task, please commit & push your changes to your repo and email us when it's ready for us to review. Please give access to:

- lauren@organise.network
- alex@organise.network
- sean@organise.network

_We're more than happy to help you with any questions you have throughout completing the task -- please let us know if you'd like support by emailing Lauren at lauren@organise.network! Asking questions is not part of our evaluation._

## Credit & much appreciation

This repository was originally part of CodeYourFuture's [group projects](https://github.com/CodeYourFuture/group-projects), a UK based non-profit organisation that trains refugees and other disadvantaged people to become web developers and helps them to find work in the tech industry.
