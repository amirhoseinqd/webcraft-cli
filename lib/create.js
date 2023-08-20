const fs = require('fs');
const path = require('path');

function createProject(projectName) {
    const projectPath = path.join(process.cwd(), projectName);

    try {
        fs.mkdirSync(projectPath);
        fs.mkdirSync(path.join(projectPath, 'styles'));
        fs.mkdirSync(path.join(projectPath, 'scripts'));

        fs.writeFileSync(path.join(projectPath, 'index.html'), fs.readFileSync(path.join(__dirname, '../templates/index.html')));
        fs.writeFileSync(path.join(projectPath, 'styles/main.css'), fs.readFileSync(path.join(__dirname, '../templates/main.css')));
        fs.writeFileSync(path.join(projectPath, 'scripts/main.js'), fs.readFileSync(path.join(__dirname, '../templates/main.js')));

        // Read the template files and replace placeholders with project name
        const indexTemplate = fs.readFileSync(path.join(__dirname, '../templates/index.html'), 'utf-8');
        const replacedIndexTemplate = indexTemplate.replace(/{ projectName }/g, projectName);

        fs.writeFileSync(path.join(projectPath, 'index.html'), replacedIndexTemplate);

        console.log(`Created ${projectName} project.`);
    } catch (error) {
        console.error('Error creating project:', error);
    }
}

function displayHelp() {
    console.log('Usage:');
    console.log('webcraft create <project-name>    Create a new project');
    console.log('webcraft help                      Display this help message');
    console.log('webcraft version                   Display the version');
}

function displayVersion() {
    const packageJson = require('../package.json');
    console.log(`webcraft version ${packageJson.version}`);
}

module.exports = { createProject, displayHelp, displayVersion };
