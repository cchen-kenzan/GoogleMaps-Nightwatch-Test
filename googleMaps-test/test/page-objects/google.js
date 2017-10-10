'use strict';

// var sharedSections = {
//   options: {
//       selector: '.gb_ia.gb_ba',
//       elements: {
//         myAccount: {
//           selector: '[href*="myaccount.google.com"]'
//         },
//         search: {
//           selector: '[href*="www.google.com"]'
//         },
//         maps: {
//           selector: '[href*="maps.google.com"]'
//         },
//         youtube: {
//           selector: '[href*="www.youtube.com"]'
//         }
//       }
//   }
// };

var googleCommands = {
  navigateToLink: function(link) {
    return this.waitForElementVisible(link, 1000)
    .click(link);
  },
  navigateToMaps: function() {
    return this.waitForElementVisible('@optionsMenu', 1000)
    .click('@optionsMenu')
    .section.options.waitForElementVisible('@mapsLink')
    .click('@mapsLink');
  }
};

module.exports = { 
	url: 'http://www.google.com',
  //sharedSections,
  commands: [googleCommands],
  sections: {
    options: {
      selector: '.gb_ia.gb_ba',
      elements: {
        myAccountLink: {
          selector: '[href*="myaccount.google.com"]'
        },
        searchLink: {
          selector: '[href*="www.google.com"]'
        },
        mapsLink: {
          selector: '[href*="maps.google.com"]'
        },
        youtubeLink: {
          selector: '[href*="www.youtube.com"]'
        }
      }
    }
  },
  elements: {
    aboutLink: { 
      selector: 'a[href*="about"]' 
    },
    storeLink: {
      selector: 'a[href*="store.google.com"]' 
    },
    optionsMenu: {
      selector: '.gb_b.gb_6b'
    }
  }
};