'use strict';

module.exports = { 
  'Should Search Google Maps for Coors Fields and find the location': function(browser) {
    var searchCoors = 'coors field, denver, co'
    var googleMaps = browser.page.googleMaps();
    googleMaps.navigate()
    .setValue('@searchBox', searchCoors)
    .submitSearch();
    var searchResults = googleMaps.section.searchResults;
    searchResults.expect.element('@heroTitle').to.be.visible;
    browser.saveScreenshot('google-coorsFieldSearch-po.png');
    browser.end();
  }
};
