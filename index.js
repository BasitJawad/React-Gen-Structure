#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const readline = require("readline");

// Create CLI input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to create project
const createProject = (projectName) => {
  if (!projectName) {
    console.log("❓ No project name provided. Exiting...");
    process.exit(1);
  }

  const projectPath = path.join(process.cwd(), projectName);

  // Check if folder exists
  if (fs.existsSync(projectPath)) {
    console.error("❌ Folder already exists. Choose a different name.");
    process.exit(1);
  }

  // Create project
  console.log(`🚀 Creating project: ${projectName}`);
  execSync(`npm create vite@latest ${projectName} -- --template react`, { stdio: "inherit" });

  // Change into project directory
  process.chdir(projectPath);

  // Install dependencies
  console.log("📦 Installing dependencies...");
  execSync("npm install", { stdio: "inherit" });

  // Create folder structure
  console.log("📂 Creating additional folders...");
  fs.mkdirSync(path.join(projectPath, "src", "context"));
  fs.mkdirSync(path.join(projectPath, "src", "components"));
  fs.mkdirSync(path.join(projectPath, "src", "pages"));

  // Create a sample context file
  fs.writeFileSync(
    path.join(projectPath, "src", "context", "AppContext.js"),
    `import { createContext } from 'react';

const AppContext = createContext();

export default AppContext;`
  );

  console.log("✅ Project setup complete! Run:");
  console.log(`   cd ${projectName}`);
  console.log("   npm run dev");

  rl.close();
};

// Ask for project name
rl.question("📛 Enter project name: ", (projectName) => {
  createProject(projectName.trim());
});
