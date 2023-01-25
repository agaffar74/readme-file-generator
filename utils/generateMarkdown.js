
// function to generate markdown for README
const generateMarkdown = response => {
  return `# ${response.title}
  ![Github licence](http://img.shields.io/badge/license-${response.license}-blue.svg)
  
  ## Description 
  ${response.description}



  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Questions](#questions)

    
  ## Installation 
  ${response.install}


  ## Usage 
  ${response.usage}


  ## License 
  This project is license under  ${response.license}
  ![Github licence](http://img.shields.io/badge/license-${response.license}-blue.svg)


  ## Contributing 
  ${response.contribute}


  ## Tests
  ${response.test}
  

  ## Questions
  If you have any questions or sugessions about this README creator app projects, please contact me directly via email or GitHub with the information below:
  *  Email at ${response.email}. 
  *  GitHub at https://github.com/${response.github}.
`
};


// use for importing Markdown in index 
module.exports = generateMarkdown;