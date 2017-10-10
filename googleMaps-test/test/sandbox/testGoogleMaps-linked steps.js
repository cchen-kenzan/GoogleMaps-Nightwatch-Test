
'use strict';

module.exports = { 
  'Should Load google.com': function(browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body')
      .waitForElementVisible('#lst-ib')
      .waitForElementPresent('.hp.vasq')
      .assert.title('Google')
      .assert.elementPresent('#lst-ib')
      .saveScreenshot('google-smoketest.png');

      browser.expect.element('#lst-ib').to.be.present;
  },
  'Should Open Google Options': function(browser) {
    browser
      	.click('.gb_b.gb_6b', function(response) {
      		//console.log(response);
      		 browser
      			.waitForElementVisible('.gb_ia.gb_ba')
            .waitForElementVisible('[href*="maps.google.com"]')
            .saveScreenshot('google-options.png');
      });
  },
  'Should Navigate to Google Maps': function(browser) {
    browser
      .click('[href*="maps.google.com"]', function(response) {
        //console.log(response);
        browser
          .waitForElementVisible('#searchboxinput.tactile-searchbox-input')
          .assert.urlContains("www.google.com/maps")
          //.assert.urlEquals("https://www.google.com/maps/@39.7511873,-105.0031571,15z?hl=en")
          //come back to seeing if i can get it to load with my specific coordinates
          //I might not want to do this though because it makes the test more brittle & only pass from my location
          .saveScreenshot('google-maps.png');
      });
  },
  'Should Search for Location - Coors Field': function(browser) {
    browser
      .setValue('#searchboxinput.tactile-searchbox-input', 'coors field, denver, co', function(response) {
        browser.click('#searchbox-searchbutton', function(response) {
          browser
            .waitForElementVisible('.section-hero-header-title')
            .saveScreenshot('google-maps-coors.png');
        });
      });
      // .clearValue('#searchboxinput.tactile-searchbox-input', function(response) {
      // });
    browser.end();
  }
};
