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

Running the project:

```bash
npm start
```

## Naming conventions

We preferably use `UpperCamelCase` for classes and files they're in. `lowerCamelCase` for other files, variables and functions.

We setup an aliases to facilitate the import of components (you can see list of aliases in webpack config) and we use names with uppercase for them.

## Linting

You can lint the project via:

```bash
npm run lint
```

Check a default rules for lint in `.eslintrc` and `.stylelintrc` files. We support [a11y](https://a11yproject.com) ideas and use rules and plugins that help make project more responsive and available.

## Reset styles

We use reset CSS from [Eric A. Meyer](https://meyerweb.com/eric/tools/css/reset/index.html), you can find this styles in `/clien/styles/reset.scss`

The goal of a reset stylesheet is to reduce browser inconsistencies in things like default line heights, margins and font sizes of headings, and so on.


