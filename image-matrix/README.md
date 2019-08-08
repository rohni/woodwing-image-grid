# ImageMatrix

This project was generated with [Angular
CLI](https://github.com/angular/angular-cli) version 8.2.0.

## What it does and how it currently works:
- When you load the page it makes a 20 sequential requests for 500 images each
  from Flickr from the search results for 'wildlife' (seemed a safe enough
  term).  This is done so you don't have to wait long to see results and the
  rest are loaded in the background, and uses the async pipe to display updates.
- Because the api calls are done sequentially, the service uses a
  private BehaviorSubject and exports it as an observable, so as new data comes
  in the new data can be added and passed to subscribers asynchronously
- It is only developed and tested in development mode.

## Design decisions
- description popup is done using css, rather use the strength of the browser
- alt attributes has the title and description in it, I'm assuming that a speech
  browser will be seeing this, and so as little information as possible is lost
  for the sight impaired.
- slow loading of all 10000 images seemed the better alternative, otherwise I
  found you were waiting a long time for data to return from Flickr.

## Improvements:
- Tests, tests, tests, both unit and e2e.  This is where functional programming
  has a huge advantage.  Referential transparency. :-)
- Rxjs error catching, such as retrying requests to Flickr in case they fail.
- Passing configuration options to the image-grid component, such as the height
  and width of each square, and the search terms.  Dynamically getting the
  best image size for the desired size by reading the flickr results with all
  the urls and their image sizes.
- search box to let the user choose their own search terms (at the moment it is
  hard-coded to search for wildlife)
- proper lazy loading so as you scroll up and down the needed pages are
  dynamically requested and loaded (keeps memory sane)
- clicking on the image brings pops up a much larger version of the image
- After correcting the above making a development build and packaging it so it
  can be used in more than one place. :-)

Okay, it is 4am my time, and I have to drive to Edinburgh and back tomorrow.
I'm out.  Enjoy.

## Checkout and get running
Do the usual `git clone` dance, switch into the directory and run either `npm
install` or `npx yarn install`.  (assuming you have `node` and `npm` on your
execution path)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app
will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
