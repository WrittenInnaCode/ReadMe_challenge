// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `<img src="https://img.shields.io/badge/license-${license}-blue.svg" alt="GitHub License">`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return (`* [Licenses](#license)`)
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return (`## License \n
This project is licensed under the ${license} license.`)
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)} 

  ## Table of Contents:
  * [Description](#description)
  ${renderLicenseLink(data.license)} 
  * [Installation](#installation)
  * [Test](#test)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Questions](#questions)

  ## Description:
  ${data.description}
  
  ${renderLicenseSection(data.license)} 

  ## Installation:
  ${data.installation}

  ## Test:
  ${data.tests}

  ## Usage:
  ${data.usage}

  ## Contribution:
  ${data.contribution}

## Questions:
If you have any questions, please contact me. \n
My email address is ${data.email} \n
To find my GitHub page, visit [https://github.com/${data.GitHub}](https://github.com/${data.GitHub})
`;
}

module.exports = generateMarkdown;
