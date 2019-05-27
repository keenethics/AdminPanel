# Node & React starter kit

This starter kit is designed to help you start project as soon as possible. It contain all necessary things to develop and maintain a project.

## Getting started

In this project we used [ESLint](https://eslint.org/docs/user-guide/integrations#editors) and [Stylelint](https://stylelint.io/user-guide/complementary-tools/#editor-plugins), so at the beginning check your code editor plugins or settings to support these linters.

You can create a new project based on node-react-starter-kit:

```bash
git clone https://github.com/keenethics/node-react-starter-kit.git <project-name>
cd <project-name>
```

Install the project dependencies:

```bash
npm i
```

Create `.env` file from example and make sure it has correct values:

```bash
cp .env.example .env
```

We are using [sequelize](http://docs.sequelizejs.com/manual/tutorial/migrations.html) and you can follow it's tutorial to perform operations. E.g. to run migrations you can run

```bash
npm run migrate
```

Running seeds:

```bash
npm run seeds
```

Running the project in development mode:

```bash
npm run dev
```

## Start enviroments

`process.env.ANALYZE` - set this variable to **on** to turn on `webpack-bundle-analyzer` (intended to use only during development).

## Naming conventions

We preferably use `UpperCamelCase` for classes and files they're in. `lowerCamelCase` for other files, variables and functions.

We setup aliases to import components (you can see list of aliases in webpack config) and we use uppercase names for them.

## Linting

You can lint the project via:

```bash
npm run lint
```

Check default lint-rules in `.eslintrc` and `.stylelintrc`. We support [a11y](https://a11yproject.com) ideas. We use rules and plugins that help making project more responsive and accessible.

## Tests

### E2E tests

There're some example tests in `__tests__` folder. For this kind of tests we use [Jest](https://jestjs.io/) and [Puppeteer](https://pptr.dev/).

Command to run E2E tests:

```bash
npm run test
```

### API tests

There're server side tests in this kit too. More specifically - API tests.

You can find them in `/server/tests/` directory.

Command to run API tests:

```bash
npm run test-server
```

Instruments used for API tests: [SuperTest](https://github.com/visionmedia/supertest), [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/)

## Reset styles

We use reset CSS from [Eric A. Meyer](https://meyerweb.com/eric/tools/css/reset/index.html), you can find this styles in `/clien/styles/reset.scss`

The goal of reset-stylesheet is to reduce browser inconsistencies in things like default line heights, margins and font sizes of headings, and so on.

## Developing for Accessibility

Declaring a language attribute on the HTML element enables a screen reader to read out the text with correct pronunciation. Just add lang attribute to html tag.

We use ARIA (Accessible Rich Internet Applications) Landmark roles and attributes for elements. This things can help assistive technology users to quickly navigate to and past blocks of content in a web interface. For more information, read [ARIA Landmark roles](https://a11yproject.com/posts/aria-landmark-roles/) and [WAI-ARIA](https://www.w3.org/TR/wai-aria/#introduction).

## PWA features

### Service worker

There's sample code for adding service worker to your app. You just need to uncomment it (one part of it is in webpack config and another one is in index.js).

Service worker file is generated and connected via [Workbox webpack plugin](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin). 

## Swagger

Project uses [Swagger](https://swagger.io) to document documentation API routes. You can check [example comments](https://github.com/keenethics/node-react-starter-kit/blob/60e07d395300961f3971f8586e2e23d2dbd0f5ea/server/routes/user.route.js#L9) and follow same [convention](https://swagger.io/docs/specification/basic-structure/).
