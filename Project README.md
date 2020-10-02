# Project Overview

## Project Links

- [add your github repo link](https://github.com/ChaseWood/Unit-2-Project)
- [add your deployment link]()

## Project Description

A react app that searches and filters Magic: The Gathering cards. Also shows up to date pricing information per card.

## API

- [Scryfall](https://scryfall.com/docs/api) Api holds all the information that you could ever need for a MTG card.

```
object": "card",
"id": "339736a8-a00f-4e21-8d92-38486f73dba9",
"oracle_id": "9feb7600-f844-4573-bcb7-d6b34473517b",
```

- [Link to data for an individual card.](https://api.scryfall.com/cards/named?exact=dreadwurm)

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [add link to your wireframes]()
- [add link to your react architecture]()

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP EXAMPLE

- Use Scryfall API
- Render data on page
- Allow user to search/filter MTG cards

#### PostMVP EXAMPLE

- Create search bar autocomplete
- Create Favorite Card component

## Components

##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

| Component               |                                       Description                                        |
| ----------------------- | :--------------------------------------------------------------------------------------: |
| App                     |                              This will include React Router                              |
| Header                  |                       This will render the header include the nav                        |
| Main                    |                 This will hold most everything besides header and footer                 |
| Search Bar              |                             This will be the main Serach Bar                             |
| Filter Button           |                               This will go to Filter Card                                |
| Mobile Card             | This will include a img and description of the card that was searched or found on random |
| Filter Card             |                          This will show all the filter options                           |
| Reset Button            |                             This will Reset the Filter Card                              |
| Array of Filtered Cards |                            This will show the filtered cards                             |
| List of Filtered Cards  |                  This will show a list of the filtered cards on mobile                   |
| Footer                  |                       This will render the header include the nav                        |

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component                     | Priority | Estimated Time | Time Invetsted | Actual Time |
| ----------------------------- | :------: | :------------: | :------------: | :---------: |
| App                           |    H     |      2hrs      |      hrs       |     hrs     |
| Header                        |    L     |      1hrs      |      hrs       |     hrs     |
| Main                          |    M     |      5hrs      |      hrs       |     hrs     |
| Search Bar                    |    H     |      3hrs      |      hrs       |     hrs     |
| Filter Button                 |    H     |      1hrs      |      hrs       |     hrs     |
| Mobile Card                   |    H     |      2hrs      |      hrs       |     hrs     |
| Filter Card                   |    H     |      6hrs      |      hrs       |     hrs     |
| Reset Button                  |    M     |      1hrs      |      hrs       |     hrs     |
| Array of Filtered Cards       |    H     |      3hrs      |      hrs       |     hrs     |
| List of Filtered Cards        |    H     |      3hrs      |      hrs       |     hrs     |
| Footer                        |    L     |      1hrs      |      hrs       |     hrs     |
| Working with API              |    M     |      5hrs      |      hrs       |     hrs     |
| Making mobile/laptop friendly |    H     |      5hrs      |      hrs       |     hrs     |
| Total                         |    H     |     38hrs      |      hrs       |     hrs     |

## Additional Libraries

- Bootstrap

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description. Code snippet should not be greater than 10 lines of code.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
