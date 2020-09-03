function generateMarkdown(data) {
  return `![(https://img.shields.io/badge/licence-readme-red)]
    
    ##Title
     
    ${data.title}

    ## Description

    ${data.description}

    

    
    
    
    ## Table of Contents
    * [installation](#installation)
    * [usage](#usage)
    * [license](#license)
    * [contributing](#contributing)
    * [tests](#tests)
    * [questions](#questions)
    
    ${data.contents}

    ## Installation
  
    ${data.install}

    ## Usage

    ${data.usage}

    ##License

    ![github License](https://img.shields.io/badge/licence-${data.license}-red.svg)

    ## Contributing memebers
    ${data.contributing}

    ## Tests
    ${data.tests}

    ## Questsions

    Contact me if you have questions at [GitHub](hittp:github.com/${data.githubUsername}] Or, email me at ${data.email})`;
  
    
}
    
  

  
  module.exports = generateMarkdown;
  