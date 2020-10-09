# Project Overview

## Project Links

- [add your github repo link](https://github.com/ChaseWood/Unit-2-Project)
- [add your deployment link](https://mtgcardsearch.netlify.app/)

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

- [Mobile wire frames](https://i.imgur.com/fDvRDxv.jpg)
- [Laptop wire frames](https://i.imgur.com/ix1cpr7.jpg)
- [React Architecture](https://i.imgur.com/if5mZbR.jpg)

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

## Time Frame

| Component                     | Priority | Estimated Time | Total Time |
| ----------------------------- | :------: | :------------: | :--------: |
| App                           |    H     |      2hrs      |   .5hrs    |
| Header                        |    L     |      1hrs      |   .5hrs    |
| Main                          |    M     |      5hrs      |    0hrs    |
| Search Bar                    |    H     |      3hrs      |    3hrs    |
| Filter Button                 |    H     |      1hrs      |   .5hrs    |
| Mobile Card                   |    H     |      2hrs      |    3hrs    |
| Filter Form                   |    H     |      6hrs      |   13hrs    |
| Reset Button                  |    M     |      1hrs      |    0hrs    |
| Array of Filtered Cards       |    H     |      3hrs      |    7hrs    |
| List of Filtered Cards        |    H     |      3hrs      |    0hrs    |
| Footer                        |    L     |      1hrs      |    0hrs    |
| Working with API              |    M     |      5hrs      |   15hrs    |
| Making mobile/laptop friendly |    H     |      5hrs      |    1hrs    |
| Total                         |    H     |     38hrs      |  43.5hrs   |

## Additional Libraries

- Bootstrap
- Scryfall API

## Code Snippet

It is not very crazy but implementing one single state for multiple drop downs bars, search bars, and check boxes felt really good! Also figuring out how to get checkboxes to finally work using the if statement to check it first.

```
function FilterTest(props) {
	const [searchTerms, setSearchTerms] = useState({});
	const [data, setData] = useState({});
	const [state, setState] = useState({
		cardName: '',
		cardText: '',
		type: '',
		color: '',
		format: '',
		set: '',
		white: '',
		blue: '',
		black: '',
		red: '',
		green: '',
	});

	const handleChange = (event) => {
		if (event.target.type === 'checkbox' && !event.target.checked) {
			setState({ ...state, [event.target.name]: '' });
		} else {
			setState({ ...state, [event.target.name]: event.target.value });
		}
	};

```
