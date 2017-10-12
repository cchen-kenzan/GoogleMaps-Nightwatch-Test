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
  }
};
