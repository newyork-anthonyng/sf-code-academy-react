# 09. Context

## Setup Instructions
  * Go into `lecture`, and `exercise`
  * Run `npm install` inside each of these directories
  * Run `npm start` inside each of these directories. Open up `localhost:8080` and go to the corresponding HTML file
    * For example, inside the `lecture` directory, go to `localhost:8080/lecture.html`

## [BlueJeans recording](https://bluejeans.com/s/8XLX2/)

## [Based on React Training](https://github.com/ReactTraining/react-workshop/tree/master/subjects/Context)

## I found the bug!!!
The bug was in this [line of code](https://ewegithub.sb.karmalab.net/anng/sf-code-academy-react/blob/master/09_Context/exercise/solution.js#L52-L57).
There are two versions of `this.setState`. One accepts an object as an argument; the other takes a callback function as an argument.

Whenever you are updating your state, and it relies on a previous value of state, use the `callback function` version of `this.setState`! This was what caused the bug while we were coding.

## Slack channel
`#sf-code-academy-react`
