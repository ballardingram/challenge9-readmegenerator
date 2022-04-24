// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// TODO STATUS > COMPLETED
function renderLicenseBadge(license) {
  if (license === 'Apache') {
    return '![License: Apache](https://www.apache.org/foundation/press/kit/feather.png)'
  }
  if (license === 'GNU General Public License v3.0') {
    return '![License: GNU General Public License v3.0](https://ipmetrix.files.wordpress.com/2014/06/gpl.png)'
  }
  if (license === 'MIT License') {
    return '![License: MIT License](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png)'
  }
  if (license === 'BSD 2-Clause SIMPLIFIED License') {
    return '![License: BSD 2-Clause SIMPLIFIED License](https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/License_icon-bsd.svg/1024px-License_icon-bsd.svg.png)'
  }
  if (license === 'BSD 3-Clause NEW or REVISED License') {
    return '![License: BSD 3-Clause NEW or REVISED License](https://opensource.org/files/OSI_Approved_License.png)'
  }
  if (license === 'Boost Software License 1.0') {
    return '![License: Boost Software License 1.0](https://upload.wikimedia.org/wikipedia/commons/c/cd/Boost.png)'
  }
  if (license === 'Creative Commons Zero v1.0 Universal') {
    return '![License: Creative Commons Zero v1.0 Universal](https://creativecommons.org/images/deed/cc-logo.jpg)'
  }
  if (license === 'Eclipse Public License 2.0') {
    return '![License: Eclipse Public License 2.0](https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Eclipse_Foundation_Logo.svg/1200px-Eclipse_Foundation_Logo.svg.png)'
  }
  if (license === 'GNU Affero General Public License v3.0') {
    return '![License: GNU Affero General Public License v3.0](https://upload.wikimedia.org/wikipedia/commons/9/93/GPLv3_Logo.svg)'
  }
  if (license === 'GNU General Public License v2.0') {
    return '![GNU General Public License v2.0](https://miro.medium.com/max/600/0*Rlt2Pyqn785Xsd9e.png)'
  }
  if (license === 'GNU Lesser General Public License v2.1') {
    return '![License: GNU Lesser General Public License v2.1](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/License_icon-lgpl.svg/1200px-License_icon-lgpl.svg.png)'
  }
  if (license === 'Mozilla Public License 2.0') {
    return '![License: Mozilla Public License 2.0](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mozilla_logo.svg/400px-Mozilla_logo.svg.png)'
  }
  if (license === 'The Unlicense') {
    return '![The Unlicense](https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/PD-icon-black.svg/1200px-PD-icon-black.svg.png)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// TODO STATUS > COMPLETED
// DOCUMENTATION > OPEN SOURCE INITIATIVE (https://opensource.org/licenses)
// DOCUMENTATION NOTE > (https://opensource.org/licenses) DID NOT HAVE ALL LICENSES SO OTHERS CAME FROM THEIR OWN HOSTED SITES

function renderLicenseLink(license) {
  if (license === 'Apache') {
    return '![License: Apache](https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === 'GNU General Public License v3.0') {
    return '![License: GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)'
  }
  if (license === 'MIT License') {
    return '![License: MIT License](https://opensource.org/licenses/MIT)'
  }
  if (license === 'BSD 2-Clause SIMPLIFIED License') {
    return '![License: BSD 2-Clause SIMPLIFIED License](https://opensource.org/licenses/BSD-2-Clause)'
  }
  if (license === 'BSD 3-Clause NEW or REVISED License') {
    return '![License: BSD 3-Clause NEW or REVISED License](https://opensource.org/licenses/BSD-3-Clause)'
  }
  if (license === 'Boost Software License 1.0') {
    return '![License: Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)'
  }
  if (license === 'Creative Commons Zero v1.0 Universal') {
    return '![License: Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)'
  }
  if (license === 'Eclipse Public License 2.0') {
    return '![License: Eclipse Public License 2.0](https://opensource.org/licenses/EPL-2.0)'
  }
  if (license === 'GNU Affero General Public License v3.0') {
    return '![License: GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0.en.html)'
  }
  if (license === 'GNU General Public License v2.0') {
    return '![GNU General Public License v2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  }
  if (license === 'GNU Lesser General Public License v2.1') {
    return '![License: GNU Lesser General Public License v2.1](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html)'
  }
  if (license === 'Mozilla Public License 2.0') {
    return '![License: Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)'
  }
  if (license === 'The Unlicense') {
    return '![The Unlicense](https://unlicense.org/)'
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// TODO STATUS > COMPLETE
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection = `License: ${license}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
// TODO STATUS > COMPLETE
// DOCUMENTATION > BASIC WRITING AND FORMATTING SYNTAX (https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
function generateMarkdown(data) {
  return `
  # ${data.title}
  
## Description
${data.description}

  ## Table of Contents
   - [BuiltWith](#)
   - [Installation](#installation)
   - [Collaboration](#collaboration)
   - [Challenges](#challenges)
   - [Future Dev](#future_dev)
   - [License Type](#license_type)
   - [GitHub User Name](#github_username)

 ## Built With
 This project was built with the following software: ${data.builtwith}!

## Installation
To ensure the project and application runs properly users will need to complete the following installation instructions:
- ${data.installation}

## Collaboration
- ${data.collaboration}

## Challenges
- ${data.challenges}

## Future Dev
${data.future_dev} - This will indicate if there will be any future development.

## License Type
${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}

## GitHUb User Name
- ${data.github_username}

If you have any questions please contact ${data.github_username} at ${data.email}!
`;
}

module.exports = generateMarkdown;
