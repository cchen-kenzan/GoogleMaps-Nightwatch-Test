'use strict';

module.exports = { 
  'Should Navigate to Google Maps': function(browser) {
    var google = browser.page.google();
    google.navigate()
      .navigateToMaps()
      // .navigateToLink('@optionsMenu')
      // .navigateToLink('@mapsLink')
      .assert.urlContains("www.google.com/maps");
    browser.saveScreenshot('google-maps-po.png');
  },
  'Should Navigate to Google About Link': function(browser) {
    var google = browser.page.google();
    google.navigate()
      .navigateToLink('@aboutLink')
      .assert.urlContains('about');
    browser.saveScreenshot('google-about-po.png');
  },
  'Should Navigate to Google Store Link': function(browser) {
    var google = browser.page.google();
    google.navigate()
      .navigateToLink('@storeLink')
      .assert.urlContains('store.google.com');
    browser.saveScreenshot('google-store-po.png');
  },
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
