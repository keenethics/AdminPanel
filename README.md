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
npx sequelize db:migrate
```

Running seeds:

```bash
npx sequelize db:seed:all
```

Running the project in development mode:

```bash
npm run dev
```

## Naming conventions

We preferably use `UpperCamelCase` for classes and files they're in. `lowerCamelCase` for other files, variables and functions.

We setup aliases to import components (you can see list of aliases in webpack config) and we use uppercase names for them.

## Linting

You can lint the project via:

```bash
npm run lint
```

Check default lint-rules in `.eslintrc` and `.stylelintrc`. We support [a11y](https://a11yproject.com) ideas. We use rules and plugins that help making project more responsive and accessible.

## Reset styles

We use reset CSS from [Eric A. Meyer](https://meyerweb.com/eric/tools/css/reset/index.html), you can find this styles in `/clien/styles/reset.scss`

The goal of reset-stylesheet is to reduce browser inconsistencies in things like default line heights, margins and font sizes of headings, and so on.

## Developing for Accessibility

Declaring a language attribute on the HTML element enables a screen reader to read out the text with correct pronunciation. Just add lang attribute to html tag.

We use ARIA (Accessible Rich Internet Applications) Landmark roles and attributes for elements. This things can help assistive technology users to quickly navigate to and past blocks of content in a web interface. For more information, read [ARIA Landmark roles](https://a11yproject.com/posts/aria-landmark-roles/) and [WAI-ARIA](https://www.w3.org/TR/wai-aria/#introduction).


