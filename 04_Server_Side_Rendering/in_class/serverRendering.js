import React from "react";
import ReactDOMServer from "react-dom/server";
import AmazingList from "./src/AmazingList";

function handleRendering(req, res) {
  // Get the length from url
  // localhost:3000?length=200
  const length = req.query.length;

  res.write(
    `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Todo List</title>
        <link googleFonts>
        <link preload="client.bundle.js"></link>
      </head>
      <body>`
  );

  // Render the React components as a string
  const renderedMarkup = ReactDOMServer.renderToString(
    <AmazingList length={length} />
  );

  res.write(
    `<div id="app">${renderedMarkup}</div>`
  )

  res.write(
    `<script type="text/javascript">
          window.initialData = ${length};
        </script>
        <script type="text/javascript" src="./client.bundle.js"></script>
      </body>
    </html>
    `
  )

  res.end();

  // Send the rendered React components and initial data to an .ejs template
  // res.render("index", {
  //   markup: renderedMarkup,
  //   initialData: length
  // });
}

export default handleRendering;
