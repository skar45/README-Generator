// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

![badge](https://img.shields.io/badge/${data.lisence}-green)


### Description
${data.description}

### Table of Content  
[Installation](#custom-inst)  
[Usage](#custom-usg)  
[Lisence](#custom-lis)  
[Contribution Guideline](#custom-cont)  
[Test Instructions](#custom-test)  
[Questions](#custom-q)  

## Installation {#custom-inst}
${data.installation}

## Usage {#custom-usg}
${data.usage}

## License {#custom-lis}
${data.lis}

## Contribution Guidelines {#custom-cont}
${data.contribution}

## Test Instructions {#custom-test}
${data.test}

## Questions {#custom-q}
${data.questions}
`
};

module.exports = generateMarkdown;
