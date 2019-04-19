### Data Visualization Dashboard

Visit the web site at [https://tatertot.github.io/dva-team-129/](https://tatertot.github.io/dva-team-129/)

If for some reason the web site is down, it is also hosted at [https://dva-team-129.herokuapp.com/](https://tatertot.github.io/dva-team-129/)

![Image of Healthcare Costs and Health Dashboard](/public/images/dva-us.png)

Project Summary: The project attempts to show the relationship between health care spending and overall healthiness
using data from the Behavioral Risk Factor Surveillance System (BRFSS) and from the Centers for Medicare and Medicaid
Services (CMS). The visualization shows the comparison of health and spending across the US and for each state.

This app was initialized using `create-react-app`, the react specific documentation is included at the bottom.
The *main* files created to develop the visualization were:

```
src/
    App.js
    components/
        USmap/
            USmap.js
            USstate.js
            Legend.js
        LineGraph/
            LineGraph.js
            LegendGraph.js
        DataContent/
            DataContent.js
        Controls/
            DropDown/
                DropDown.js
```

The rational for using React for this project was to be able to facilitate state management and to easily pass
the data around to different components to make interactivity and re-usability easier.  The challenge was figuring
who should have control of DOM, D3 or React.

### Setting Up Local Environment of the Web Site

In your terminal clone this repo to your local environment.

```
git clone https://github.com/tatertot/dva-team-129.git

```

Go the to `dva-team-129` folder in your terminal and enter

```
npm start

```

This should install all the project dependencies in the `package.json` file and open up a web browser with the site.


==========
*Team 129:* Jessica Zhang, Dan Siddall, Marissa Marquez, Scott Hill, Arun Kasaranen

_This project was made for the Data Visual & Analytics course at Georgia Tech._
==========




*=== Bootstrapping a React App Original Documentation ===*

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
