const fs = require('fs');
const path = require('path');

const createProject = (projectName) => {
    const projectPath = path.join(process.cwd(), projectName);

    try {
        fs.mkdirSync(projectPath);
        fs.mkdirSync(path.join(projectPath, 'styles'));
        fs.mkdirSync(path.join(projectPath, 'scripts'));
        fs.writeFileSync(path.join(projectPath, 'index.html'), fs.readFileSync(path.join(__dirname, '../templates/index.html')));
        fs.writeFileSync(path.join(projectPath, 'styles/main.css'), fs.readFileSync(path.join(__dirname, '../templates/main.css')));
        fs.writeFileSync(path.join(projectPath, 'scripts/main.js'), fs.readFileSync(path.join(__dirname, '../templates/main.js')));
        const indexTemplate = fs.readFileSync(path.join(__dirname, '../templates/index.html'), 'utf-8');
        const replacedIndexTemplate = indexTemplate.replace(/{ projectName }/g, projectName);
        fs.writeFileSync(path.join(projectPath, 'index.html'), replacedIndexTemplate);
        console.log(`Created ${projectName} project.`);

    } catch (error) {
        console.error('Error Creating The Project:', error);
    }
}

const displayHelp = () => {
    console.log(
        `
        Usage: 
        webcraft create <project-name> - Creates a New Project
        webcraft help - Shows Available Commands
        webcraft version - Shows Webcraft Current Version
        `
    )
}

const displayVersion = () => {
    const packageJson = require('../package.json')
    console.log(`Webcraft Version ${packageJson.version}`)
}

module.exports = { createProject, displayHelp, displayVersion };
