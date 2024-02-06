// variables to allow frameworks
const inquirer = require('inquirer');
const generateSVG = require('./lib/generateSVG');
const fs = require ('fs');

// global variables
const colorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const colorKeywords = [
    'red',
    'blue',
    'green',
    'yellow',
    'orange',
    'purple',
    'pink',
    'black',
    'white',
  ];

//function to only allow particular colors or hexadecimal
function validateColor(color) {
    if (colorRegex.test(color) || colorKeywords.includes(color.toLowerCase())) {
      return true;
    }
    return 'Please enter a valid color keyword or hexadecimal number.';
  }

  function validateBackground(background) {
    if (colorRegex.test(background) || colorKeywords.includes(background.toLowerCase())) {
      return true;
    }
    return 'Please enter a valid color keyword or hexadecimal number.';
  }

//variable to store answers
const questions = [
    {
        type: 'input',
        name: 'initials',
        message: 'Enter logo text. (Up to 3 letters)',
        validate: function (initials) {
        if (initials.length === 3) {
          return true;
        } else {
          return 'Please enter 3 characters:';
        }
      },
    },

    {
        type: 'input',
        name: 'color',
        message: 'Please enter a color:',
        validate: validateColor,
      },

      {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['Circle', 'Triangle', 'Square']
      },

      {
        type: 'input',
        name: 'background',
        message: 'Please enter a background color:',
        validate: validateBackground,
      },
];

// function to initiate app and apply answers to generateSVG
async function createFile() {

    inquirer.prompt(questions)
    .then(answers => {
      console.log('Answers:', answers);
      fs.writeFile("logo.svg",generateSVG(answers),error => {
        if(error) throw (error);
        console.log('Generated logo.svg');
      })
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  // call to run funtion
  createFile()

  