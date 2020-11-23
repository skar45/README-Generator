// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

![badge](https://img.shields.io/badge/${data.lisence}-green)


### Description
${data.description}

### Table of Content  
[Installation](#Installation)  
[Usage](#Usage)  
[Lisence](#License)  
[Contribution Guideline](#custom-cont)  
[Test Instructions](#custom-test)  
[Questions](#custom-q)  

## Installation 
${data.installation}

## Usage
${data.usage}

## License
${data.lis}

## Contribution Guidelines
${data.contribution}

## Test Instructions
${data.test}

## Questions
${data.questions}
`
};

module.exports = generateMarkdown;