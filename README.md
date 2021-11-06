# Bookstore CMS

## Table of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
* [API Interactions](#api-interactions)
* [Contributing](#contributing)
* [Author](#author)
* [Acknowledgements](#acknowledgements)

## About Project

"Bookstore CMS" is a content management React-Redux app that's meant to help a user add or remove books but most importantly keep tracking data in terms of progress made so far in reading a particular book.
This project uses [Bookstore API](https://www.notion.so/Bookstore-API-51ea269061f849118c65c0a53e88a739) for storage of book details data.

![image](https://user-images.githubusercontent.com/29541335/140618219-5f140210-743f-4f29-98a1-72057ff928f0.png)


<!-- ## [Live Demo - GH pages]() -->
## [Live Demo - Netlify]()
<!-- ## [Live Demo - Heroku]() -->

## Built With

* ReactJS
* Redux
* [Bookstore API](https://www.notion.so/Bookstore-API-51ea269061f849118c65c0a53e88a739)

## Getting Started

* Clone this repo <https://github.com/Bishoy-Samwel/bookstore-1>

    ```bash
    git clone https://github.com/Bishoy-Samwel/bookstore-1.git
    ```

* Navigate to bookstore folder/directory

    ```bash
    cd bookstore
    ```

* On the comandline, at the project's root, run ```npm install``` to install app dependencies

* Next, run ```npm start``` which will run the app in the development mode.

* Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

* ALTERNATIVELY

  * Just run ```npm run build``` which will build the project and generate output files into the ```build``` directory.

  * Go to ```build``` directory and manually open ```index.html``` to interact with the app

## API Interactions

From the BookStore API, this app/project is interacting/consuming the following endpoints:

  * **Base URL** - <https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi>
  * **Creating a new App - Method(POST)** - <https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/> (This will give you an APP_ID)
  * **Getting all books(GET method)/ Posting a new Book(POST method)/ Deleting a Book(DELETE method)** - <https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/`${APP_ID}`/books>

Take a look at the [DOCUMENTATION](https://www.notion.so/Bookstore-API-51ea269061f849118c65c0a53e88a739) and undestand how you can work with it further.

## Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Lameck1/bookstore/issues)

  1. Fork the Project
  2. Create your Feature Branch (`git checkout -b feature/newFeature`)
  3. Commit your Changes (`git commit -m 'Add some newFeature'`)
  4. Push to the Branch (`git push -u origin feature/newFeature`)
  5. Open a Pull Request

## Author

👤 **Bishoy Samwel Faheem**

- GitHub: [@Bishoy Samwel Faheem](https://github.com/Bishoy-Samwel)
- LinkedIn: [Bishoy Samwel](https://www.linkedin.com/in/bishoy-samwuel-ss/)
- Twitter: [@bisho](https://twitter.com/BishoFaheem15)

## Acknowledgements

* [ReactJS Organization](https://reactjs.org/) for the amazing [Documentation](https://reactjs.org/docs/getting-started.html) on React.
* [Redux Organization](https://redux.js.org/) for the amazing [Redux Essentials Tutorial](https://redux.js.org/tutorials/essentials/part-1-overview-concepts) on React.

## Show your support

Give a ⭐️ if you like this project!
