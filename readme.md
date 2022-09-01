# Micro front-ends Architecture

## This project is a proof of concept for building micro front-ends with Single-spa, SystemJS and import maps.

### The project renders three separate page using a root app as the main driver. Each page is implemented as a separate React project using the Single-spa react template and imported using an import map in the root app.

## Running the code

### The code is split into 4 directories. The root app, page_A, page_B, Home and import map deployer. The root app, page_A, page_B and home can be ran using npm install and then npm start their respective root directory.You can then find the entry point by navigating to localhost:9000 in your browser.
