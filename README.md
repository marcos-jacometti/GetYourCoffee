## What is GetYourCoffee?

Get your free coffee here, this project was build to improve some programming concepts I needed to practice. So, you've to choose your coffee (we have 10 options of coffee) and fill your informations (name, phone number and address). Then, the system will create an order in the data base with your coffee and informations! It's a simple project, but a nice way to practice important concecpts. I'll explain how it works and tell you how you can use it!

Before, let's go take a look on GetYourCoffee:

![alt text](2024-06-04-11-49-00.gif)

As you can see, there are two themes (light and black), there is a coffee list with description of each other. When you click on the button ("get") the system will take you to the shopping page, you'll put your informations there and wait for the coffee.

## How can I use it?

First of all, you need to clone the project:
```
$git clone https://github.com/marcos-jacometti/GetYourCoffee.git
```

Then, the second step is install the backend dependecies, copy the comand below on cmd:
```
$cd backend && npm install
```

Now, you have to get your data base host, user, password and name to update .env file. If you don't have the MySQL Workbench, install it [clicking here](https://www.mysql.com/downloads/) and update .env file:
```
DB_HOST=your_host
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=your_db_name
```

With the .env updated, you need to create the data base and the table of project, so copy and paste these comands below: 
```
$cd db && node createDatabase.js
```
```
$cd node createTables.js
```

A success message will be shown to you!

Now, you have to initialize the backend program:
```
$cd .. && node app.js
```

Let's go to configure the frontend! Open a new cmd and paste the comand below:
```
$cd frontend && npm install
```

Finally, initialize the frontend program:
```
$npm start
```

It's done! ⚙️

## Main Features

The GetYourCoffee project has a lot of features and it's using some libs, like cors, styled-components, axios, express, react-spinners, react-router-dom, react-icons and react-toastify. The project also has a connection with [VIACEP API](https://viacep.com.br) to get the address when the user text the CEP (street code).

You can see it, on the file frontend/src/services/api where we're calling the API and request 2 informations, city and name of street.

The project was build with a simple backend, but I got some nice React.JS concepts to code the GetYourCoffee. Take a look on the files and you'll see!

## Technologies

- [React.JS](https://pt-br.legacy.reactjs.org/)
- [Node.JS](https://nodejs.org/en)
- [MySQL](https://www.mysql.com/)
- [Cors](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)
- [Express](https://expressjs.com/pt-br/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Styled-Components](https://styled-components.com/)
- [React-router-dom](https://reactrouter.com/en/main)
- [React-spinners](https://www.npmjs.com/package/react-spinners)
- [React-toastify](https://www.npmjs.com/package/react-toastify)
- [React-icons](https://react-icons.github.io/react-icons/)
- [VIACEP API](https://viacep.com.br)

## Contact me

If you want to send me a message to a nice talk, fell free to contact me!

- Email: [Marcos Jacometti](marcosjacometti10@gmail.com)
- LinkedIn: [Marcos Jacometti](https://www.linkedin.com/in/marcos-vin%C3%ADcius-jacometti-675202202/)

Thank you to enjoy the code! Let's pratcite and learn! ⚙️

See you! 🌎