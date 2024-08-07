# My SPA SKELETON Project

## Опис проекту / Project Description

[UA] Це одностнорінковий додаток (SPA), створений за допомогою Next.js, React та Tailwind CSS. Проект надає основу для швидкої розробки сучасних веб-додатків з оптимізованою продуктивністю та зручним розробницьким досвідом.

[EN] This is a Single Page Application (SPA) built with Next.js, React, and Tailwind CSS. The project provides a foundation for rapid development of modern web applications with optimized performance and a great developer experience.

## Скрипти / Scripts

- `npm run dev`:

  - [UA] Запускає додаток у режимі розробки. Відкрийте [http://localhost:3000](http://localhost:3000) для перегляду в браузері.
  - [EN] Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- `npm run build`:

  - [UA] Створює оптимізовану версію додатка для виробництва.
  - [EN] Builds the app for production to the `build` folder.

- `npm run start`:

  - [UA] Запускає створену версію додатка.
  - [EN] Runs the built app in production mode.

- `npm run lint`:

  - [UA] Запускає лінтер для перевірки коду на наявність помилок та стилістичних проблем.
  - [EN] Runs the linter to check for code errors and style issues.

- `npm run format`:
  - [UA] Форматує код проекту за допомогою Prettier.
  - [EN] Formats the project code using Prettier.
- `npm run test`:
  - [UA] Запускає юніт тести з Jest.
  - [EN] Start unit test with Jest.

## Залежності / Dependencies

- `next` (14.2.5): Фреймворк React для продакшену / React framework for production
- `react` (^18): Бібліотека для створення користувацьких інтерфейсів / Library for building user interfaces
- `react-dom` (^18): DOM-специфічні методи для React / DOM-specific methods for React
- `@headlessui/react` (^2.1.2): Повністю доступні UI компоненти для React / Fully accessible UI components for React
- `@heroicons/react` (^2.1.5): Красиві SVG іконки для UI розробки / Beautiful hand-crafted SVG icons for UI development
- `framer-motion` (^11.3.21): Бібліотека для створення анімацій у React / Library for creating animations in React
- `autoprefixer` (^10.4.20): Плагін PostCSS для парсингу CSS та додавання префіксів / PostCSS plugin to parse CSS and add vendor prefixes

## Залежності розробки / Dev Dependencies

- `typescript` (^5.5.4): Типізований суперсет JavaScript / Typed superset of JavaScript
- `eslint` (^8): Інструмент для виявлення та виправлення проблем у JavaScript коді / Tool for identifying and reporting on patterns in JavaScript
- `prettier` (^3.3.3): Форматувач коду / Code formatter
- `tailwindcss` (^3.4.1): Утилітарний CSS фреймворк / Utility-first CSS framework
- `@typescript-eslint/eslint-plugin` (^6.0.0): ESLint плагін для TypeScript / ESLint plugin for TypeScript
- `@typescript-eslint/parser` (^6.0.0): Парсер для ESLint і TypeScript / Parser for ESLint and TypeScript
- `eslint-config-prettier` (^9.1.0): Вимикає правила ESLint, що конфліктують з Prettier / Turns off all rules that are unnecessary or might conflict with Prettier
- `prettier-plugin-tailwindcss` (^0.6.5): Плагін Prettier для сортування класів Tailwind CSS / Prettier plugin for sorting Tailwind CSS classes
- `jest` (^29.7.0): Для тестування JavaScript / To test JavaScript
- `husky` (^9.1.4): Для зміни коду перед комітом / To change the code before a commit
- `jest-environment-jsdom` (^29.7.0): Середовище JSDOM для запуску тестів Jest, що симулює браузерне оточення / A JSDOM environment for running Jest tests that simulates the browser environment.
- `testing-library/jest-dom` (^6.4.8): Набір користувацьких Jest матчерів для тестування DOM елементів / A set of custom Jest matchers for testing DOM elements.
- `testing-library/react` (^16.0.0): Утиліти для тестування React компонентів, що сприяють хорошим практикам тестування / Utilities for testing React components that promote good testing practices

## Як почати / Getting Started

1. Клонуйте репозиторій / Clone the repository
2. Встановіть залежності: `npm install` / Install dependencies: `npm install`
3. Запустіть проект у режимі розробки: `npm run dev` / Run the project in development mode: `npm run dev`
