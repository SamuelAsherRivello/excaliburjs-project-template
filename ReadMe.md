# ExcaliburJS Project Template

This repo is ideal for new [ExcaliburJS](https://excaliburjs.com/) projects using [TypeScript](https://www.typescriptlang.org/) and [Vite](https://vitejs.dev/).

<figure>
<img alt="screenshot"
src="./ExcaliburJS/documentation/Screenshot01.png"
width = "600"
>
<figcaption>Image 1 - ExcaliburJS Game Engine - HTML5 + WebGL</figcaption>
</figure>

### Table of Contents
1. [Getting Started](#getting-started)
2. [Project Overview](#project-overview)
3. [Project Details](#project-details)
4. [Resources](#resources)
5. [Credits](#credits)

<BR>

# Getting Started


### Play Project
1. Browse to [YourUsername.github.io/excalibur-project-template/dist/index.html](https://YourUsername.github.io/excalibur-project-template/dist/index.html)
2. Enjoy!

### Build Project
1. Download this repo (*.zip or *.git)
2. Open the `ExcaliburJS` folder in the command line:
3. Install dependencies:
   * Run `npm install` to download and install dependencies.
4. Build the project:
   * Run `npm run client-build` to build the project.
5. Run the project:
   * Run `npm run client-start` to launch a server to localhost. This serves the development build and hot-reloads on changes within the **src**.
6. Play the game at [localhost:3000](http://localhost:3000)
7. Open the `ExcaliburJS` folder in [Visual Studio Code](https://code.visualstudio.com/) or your favorite editor
8. Do your game development
9. Optional: When you add/update files within the `ExcaliburJS` folder, you may need to repeat step 4.
10. Optional: [Host](https://pages.github.com/) your project online and share the link with friends!
11. Enjoy!

<BR>

### More Commands
You can run these terminal commands during your workflows.

| Command                   | Description                                    | Builds? | Runs? | Tests? | Watches? |
|---------------------------|------------------------------------------------|---------|-------|--------|----------|
| `npm install`             | Required: Download and install dependencies    | ❌      | ❌    | ❌     | ❌       |
| `npm run client-build`    | Required: Build app                            | ✅      | ❌    | ❌     | ❌       |
| `npm run client-start`    | Required: Run app on localhost                 | ❌      | ✅    | ❌     | ✅       |
| `npm run tests-start`     | Optional: Run unit tests                       | ❌      | ❌    | ✅     | ❌       |
| `npm run tests-start-watch` | Optional: Run unit tests in watch mode         | ❌      | ❌    | ✅     | ✅       |


<BR>


# Project Overview

This repo demonstrates best practices for combining HTML5 technologies for game development in the browser using ExcaliburJS.
Use cases for this repo include light-weight prototypes, educational projects, and browser-based game development.

<BR>

### Screenshots

<BR>

<figure>
<img alt="screenshot"
src="./ExcaliburJS/documentation/Screenshot02.png"
width = "600"
>
<figcaption>Image 2 - Editor Environment (File Explorer, Terminal, Code Editor)</figcaption>
</figure>

<BR>
<BR>
<BR>

<figure>
<img alt="screenshot"
src="./ExcaliburJS/documentation/Screenshot03.png"
width = "600"
>
<figcaption>Image 3 - Runtime Environment (Game, Dev Tools, Console)</figcaption>
</figure>

<BR>
<BR>
<BR>

### Structure

**Documentation**
* `ReadMe.md` - The primary documentation for this repo
* `ExcaliburJS/documentation/` - More info specific to the project

**Configuration**
* `Game Engine` - [ExcaliburJS](https://excaliburjs.com/) is a 2D game engine for TypeScript

**Structure**
* `ExcaliburJS` - Main project folder
* `ExcaliburJS/index.html` - Main HTML5 file
* `ExcaliburJS/src/assets/` - User-facing game assets
* `ExcaliburJS/src/scripts/tests/` - Add unit testing files here
* `ExcaliburJS/src/scripts/client/index.ts` - Main TS file for game logic. Do your work here :)


**Dependencies**
* `ExcaliburJS/package.json` - Lists project dependencies and scripts. When you run `npm install` it installs whatever is here

# Project Details

<BR>

### Editor Tooling

| Name                                                                                           | Description                                 | Runtime? | Edit Time? |
|------------------------------------------------------------------------------------------------|---------------------------------------------|----------|------------|
| [Visual Studio Code](https://code.visualstudio.com/)                                           | Source code editor                          | ❌       | ✅         |
| [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) | VS Code extension for linting JavaScript/TS | ❌       | ✅         |
| [Error Lens extension](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)| Highlights errors and warnings in VS Code   | ❌       | ✅         |

<BR>

### Code Packages (Partial List)

| Name                                                              | Description                           | Runtime? | Edit Time? |
|-------------------------------------------------------------------|---------------------------------------|----------|------------|
| [ExcaliburJS](https://www.npmjs.com/package/excalibur)              | ExcaliburJS: 2D game engine           | ✅       | ❌         |
| [Vite](https://vitejs.dev/)                  | Bundles TypeScript files              | ❌       | ✅         |
| [Typescript](https://www.npmjs.com/package/typescript)            | TypeScript compiler                   | ❌       | ✅         |
| [Eslint](https://www.npmjs.com/package/eslint)                    | Makes your TypeScript pretty          | ❌       | ✅         |
| [Vitest  ](https://vitest.dev/)                        | Unit testing for TypeScript           | ❌       | ✅         |

<BR>

# Resources

Here are some resources which may be helpful with HTML5 game projects using ExcaliburJS:

* [ExcaliburJS Documentation](https://excaliburjs.com/docs/)
* [ExcaliburJS API Reference](https://excaliburjs.com/docs/api/)
* [ExcaliburJS Samples](https://excaliburjs.com/samples/)

<BR>

# Credits

**Created By**

- Samuel Asher Rivello 
- Over 25 years XP with game development (2024)
- Over 11 years XP with Unity (2024)

**Contact**

- Twitter - <a href="https://twitter.com/srivello/">@srivello</a>
- Git - <a href="https://github.com/SamuelAsherRivello/">Github.com/SamuelAsherRivello</a>
- Resume & Portfolio - <a href="http://www.SamuelAsherRivello.com">SamuelAsherRivello.com</a>
- LinkedIn - <a href="https://Linkedin.com/in/SamuelAsherRivello">Linkedin.com/in/SamuelAsherRivello</a> <--- Say Hello! :)

**License**

Provided as-is under MIT License | Copyright © 2024 Rivello Multimedia Consulting, LLC
