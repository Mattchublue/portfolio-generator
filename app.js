const inquirer =require('inquirer');

const promptUser = () => {
return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Please enter your Github username!');
              return false;
            }
        },
    },
    {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself.'
    }
    
    ]);
};
const promptProject = portfolioData => {
    console.log(`
  =================
  Add a New Project
  =================
  `);

  // If there's no 'projects' array property, create one
if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter your Project Name (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your Project Name!');
              return false;
            }
        },

      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter your project description (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter your project description!');
              return false;
            }
        },
    },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
            if (linkInput) {
              return true;
            } else {
              console.log('Please enter your Github link!');
              return false;
            }
        },
    },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
      });
  };

promptUser()
  .then(promptProject)
  .then(portfolioData => {
      console.log(portfolioData);

  });
 
// const fs = require('fs');

// const generatePage = require('./src/page-template')

// const pageHTML = generatePage(name, github);


// fs.writeFile('./index.html', PageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

