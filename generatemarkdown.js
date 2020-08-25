function generateMarkdown(data) {
    return `![(https://img.shields.io/badge/licence-readme-red)]
    
    
     
    #${data.name}

    # Description

    ${data.description}

    ${data.contents}



    # Table of Contents
    * [installation](#installation)
    * [usage](#usage)
    * [license](#license)
    * [contributing](#contributing)
    * [tests](#tests)
    * [questions](#questions)
    

    

    

    `;

    
  }
    
  

  
  module.exports = generateMarkdown;
  