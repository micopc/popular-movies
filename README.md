# Popular Movies App

App to see the most popular movies. It retrieves information from The Movie DB
API [themoviedb.org](https://themoviedb.org).

To run this project, you'll need to get an API KEY here:
https://www.themoviedb.org/documentation/api

## Installation

Be sure to have node installed. If you're using nvm you can just run `nvm use`
and the proper version will be selected. Otherwise install the latest version of
node (16).

Now you can clone the repo:

```bash
git clone https://github.com/micopc/popular-movies
cd popular-movies
```

And then install all dependencies:

```bash
npm install
```

This will also creare a git commit hook to automatically format the code.

## Local Development

You'll need to create an `.env.local` file in the root of your project for all
the enviroment variables. The file should look like this:

```
THE_MOVIE_DB_API_KEY=
```

Be sure to paste your API KEY right next to the env variable.

To run this application locally, run:

```bash
npm run dev
```

The application will start on http://localhost:3000

## Testing

We use jest for testing. In addition, we also use react-testing-library for all
react tests. To run tests:

```bash
npm run test
```

Or to run jest in watch mode and have your tests ran again automatically when
you make changes:

```bash
npm run test:watch
```

## Formatting

This project uses prettier to format the code. Be sure to install the plugin for
your preferred editor. Prettier will also run on commits thanks to husku and
lint-staged. You can optionally run the formatter yourself with:

```bash
npm run format
```

## Linting

This project uses eslint with the default create-react-app configuration plus
eslint-config-prettier to disable all the rules that prettier already takes care
of. To run it:

```
npm run lint
```

## Deployment

This project is hosted on vercel. To deploy, just push your changes. Whenever
you deploy, both linting and testing are done. If they fail, the deploy won't
succeed.

You can also run a "production" version of the app locally with:

```bash
npm run build
npm run start
```
