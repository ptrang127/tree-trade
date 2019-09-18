# Tree Trade &#127794;

## About
Tree Trade is a web application that allows users to easily jump in and practice paper trading. Users can create an account and start trading immediately with real-time stock quotes.

***

## Tech Stack
The tech stack that we are using is similar to the MERN stack.

For our back-end, we will be using `firebase` which is developed by Google. 

For our front-end, we will be using `react` with `react-bootstrap`.

***

## Development Environment Set-Up

### Node.js
Install [node.js](https://nodejs.org/en/download/). You can just download the LTS version. When downloading `node.js`, you will in parallel install `npm`. `npm` stands for node package manager. It is used to download and install dependencies in your project. If you take a look at the `package.json` file, you'll see a field called `dependencies`. These dependencies are all being used in our project and their sources are downloaded when you run `npm install`. Read more about it [here](https://www.w3schools.com/whatis/whatis_npm.asp).

When you want to install a dependency, you run the command:

```
npm install <dependency>
```

This command automatically adds the dependency to your `package.json`. For example, in this project, I used npm to install [react-bootstrap](https://react-bootstrap.github.io/). All dependencies are in the `node_modules` folder.

### Visual Studio Code
Make sure you install `vscode` as well. Visual Studio Code is a lightweight IDE typically used for front-end development but it supports other languages with its bountiful plugins. Visual Studio Code is really helpful for coding. It has syntax highlighting, IntelliSense code completion, version control, integrated terminal, and many other features. It's an extremely popular and useful IDE to pick up so now is a perfect time to get used to it.

### Git
We will be using `git` as our version control. You can use `git` however you want. If you want to use `git` with a GUI, then try [GitHub Desktop](https://desktop.github.com/). Otherwise, you can just use `git` from the command line if you're comfortable. If you go with the latter, you can download `git` [here](https://git-scm.com/downloads).


### Setup
Once you have the items above configured, clone the repository to your working directory:

```
git clone https://github.com/ptrang127/tree-trade.git
```
Navigate to the `tree-trade` folder like this:

```
cd your/path/to/tree-trade/tree-trade
```

Install all of the project dependencies:

```
npm install
```

To start the server, run:

```
npm start
```

Go to your browser and check `http://localhost:3000/`