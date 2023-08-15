const fs = require('fs');
const path = require('path');

function createProject(projectName) {
    const projectPath = path.join(process.cwd(), projectName);
    
    try {
        fs.mkdirSync(projectPath);
        fs.mkdirSync(path.join(projectPath, 'styles'));
        fs.mkdirSync(path.join(projectPath, 'scripts'));

        fs.writeFileSync(path.join(projectPath, 'index.html'), fs.readFileSync(path.join(__dirname, '../templates/index.html')));
        fs.writeFileSync(path.join(projectPath, 'styles/main.css'), fs.readFileSync(path.join(__dirname, '../templates/styles/main.css')));
        fs.writeFileSync(path.join(projectPath, 'scripts/main.js'), fs.readFileSync(path.join(__dirname, '../templates/scripts/main.js')));

        console.log(`Created ${projectName} project.`);
    } catch (error) {
        console.error('Error creating project:', error);
    }
}

module.exports = { createProject };
