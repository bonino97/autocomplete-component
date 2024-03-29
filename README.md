### Project Description

This project is built using React with Vite and TypeScript, without external libraries.

### How to Run

1. Install dependencies:

   ```
   npm install
   ```

2. Run the project:
   ```
   npm start
   ```

### Features

The project consists of two features:

1. **Fruits Autocomplete**: This feature displays a list of fruits without simulating an API call. It demonstrates the reusability of the Autocomplete component.

2. **SuperHero Autocomplete**: This feature simulates an API call to fetch superheroes. It showcases the usage of the Autocomplete component with a simulated API.

### Project Structure

```
src
├── components
│   ├── Autocomplete
│   │   ├── SuggestionCard
│   │   └── SuggestionList
│   └── Shared
│       ├── Error
│       ├── Loading
│       └── SearchInput
├── features
│   ├── Fruits
│   │   └── components
│   │       └── FruitsSuggestionCard
│   └── SuperHero
│       │── components
│       │   └── SuperHeroSuggestionCard
│       ├── mocks
│       │   └── marvel.json
│       ├── services
│       │   └── superheroService.ts
│       └── types
│           └── ISuperHero.ts
├── styles
│   └── theme.css
└── hooks
    └── useFetch.ts

```

### Code Comments
- Use `// TODO:` comments for personal opinions or additional tasks to be completed.
- Use `// POINT:` comments to highlight key points or areas of interest.

### Gallery
<img width="817" alt="image" src="https://github.com/bonino97/autocomplete-component/assets/24545141/3a8a4fd9-dbaa-4f50-ab44-2ec30b3b9a13">

### Links
- Deployed Link: https://autocomplete-lib.netlify.app/
