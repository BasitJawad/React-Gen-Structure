# Generate-React-Structure

A simple CLI tool to quickly generate a React project using Vite, React Router, and a pre-configured context folder.

## Installation

Use `npx` to run `react-gen-structure`:

```bash
npx react-gen-structure
```

## Why `npx`?

`npx` is a package runner that comes with npm.  It allows you to use packages without installing them globally. This is the recommended way to use `react-gen-structure` because:

* **No Global Installation:** Avoids potential conflicts with other globally installed packages.
* **Latest Version:** Ensures you always use the latest version of `react-gen-structure`.
* **Easy to Use:**  Simple and convenient way to run the CLI.

## Usage

After running the `npx` command, the CLI will prompt you to enter a project name:

```
📛 Enter project name: my-react-app
```

`react-gen-structure` will then:

1. Create a new directory with the specified name.
2. Initialize a new Vite React project within that directory.
3. Install the necessary dependencies.
4. Create the following folder structure within the `src` directory:
    * `context`: For React Context API files (a sample `AppContext.js` is created).
    * `components`: For reusable React components.
    * `pages`: For React page components.

Finally, you'll be provided with instructions on how to start your development server:

```
✅ Project setup complete! Run:
   cd my-react-app
   npm run dev
```

## Features

* **Vite:**  Uses Vite for fast and efficient development.
* **React Router (Planned):** *Future versions will include React Router setup.*
* **Context API:** Sets up a basic context folder and provides a sample `AppContext.js` file.
* **Organized Structure:** Creates a clean folder structure for your components and pages.

## Contributing

Contributions are welcome!  Please open an issue or submit a pull request.

## License

ISC

# Author

## Basit Jawad
