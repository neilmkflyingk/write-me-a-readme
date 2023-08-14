function generateMarkdown(userResponses, userInfo) {
  // Table of Contents based on user responses
  let inputToC = `## Table of Contents`;

  if (userResponses.installation !== '') { inputToC += `
  * [Installation](#installation)` };

  if (userResponses.usage !== '') { inputToC += `
  * [Usage](#usage)` };

  if (userResponses.contributing !== '') { inputToC += `
  * [Contributing](#contributing)` };

  if (userResponses.tests !== '') { inputToC += `
  * [Tests](#tests)` };

  // Top required portions of the README
  let draftMarkdown = 
  `# ${userResponses.title}

  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).
  
  
  ## Description 
  
  *What, why, and how:* 
  
  ${userResponses.description}

  `

  // Add Table of Contents
  draftMarkdown += inputToC;
 
  // Add License section
  draftMarkdown += `
  * [License](#license)`;
  

  // Installation 
  if (userResponses.installation !== '') {
  
  draftMarkdown +=
  `
  
  ## Installation
  
  *Instructions on how to install project and to get the development environment running:*
  
  ${userResponses.installation}`
  };
  

  // Usage 
  if (userResponses.usage !== '') {
  
  draftMarkdown +=
  
  `
  
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${userResponses.usage}`
  };
  
  
  // Contributing 
  if (userResponses.contributing !== '') {

  draftMarkdown +=
    
  `
  
  ## Contributing
  
  *If you would like to contribute to this project, you can follow these instructions for how to do so.*
  
  ${userResponses.contributing}`
  };
  

  // Tests 
  if (userResponses.tests !== '') {
  
  draftMarkdown +=
  `
  
  ## Tests
  
  *Tests for application and how to run them:*
  
  ${userResponses.tests}`
  };


  // License 
  draftMarkdown +=
  `
  
  ## License
  
  ${userResponses.license}
  `;


  // Contact
  let draftDev = 
  `
  ---
  
  ## Questions?

  <img src="${userInfo.avatar_url}" alt="${userInfo.login}" width="40%" />
  
  For any questions, please contact me with the information below:
 
  GitHub: [@${userInfo.login}](${userInfo.url})
  `;

  // If GitHub email is not null, add to Developer section
  if (userInfo.email !== null) {
  
  draftDev +=
  `

  Email: ${userInfo.email}

  `};

  // Developer section
  draftMarkdown += draftDev;

  // Return markdown
  return draftMarkdown;
  
}

module.exports = generateMarkdown;