'use strict';

const fromLocation = '1743 Wazee St, Denver, CO 80202';
const toLocation = 'The Source, 3350 Brighton Blvd, Denver, CO 80216';

module.exports = { 
  'Should Give Directions starting from fromLocation to toLocation': function(browser) {
    var googleMaps = browser.page.googleMaps();
    googleMaps.navigate()
      .clickforDirections()
      .waitForElementVisible('@directionsFromTextBox1')
      .waitForElementVisible('@directionsToTextBox1')
      .setValue('@directionsFromTextBox1', [fromLocation, browser.Keys.ENTER])
      .setValue('@directionsToTextBox1', [toLocation, browser.Keys.ENTER])
      .waitForElementVisible('@directionResults2')
      .click('@firstDirectionDescription3')
      .waitForElementVisible('@listedDirectionsFrom4');

    googleMaps.expect.element('@listedDirectionsFrom4').text.to.equal(fromLocation);
    googleMaps.expect.element('@listedDirectionsTo4').text.to.equal(toLocation);

    browser.saveScreenshot('google-directions-po.png');
  },
  'Should Reverse the directions': function(browser) {
    var googleMaps = browser.page.googleMaps();

    googleMaps
      .click('@backToDiretionsList4')
      .waitForElementVisible('@reverseDirectionsButton1')
      .click('@reverseDirectionsButton1');

    googleMaps.expect.element('@directionsFromTextBox1').value.to.equal(toLocation);
    googleMaps.expect.element('@directionsToTextBox1').value.to.equal(fromLocation);

    googleMaps
      .click('@walkingDirectionsButton1')
      .waitForElementVisible('@firstDirectionDescription3')
      .click('@firstDirectionDescription3');

    googleMaps.expect.element('@listedDirectionsFrom4').text.to.equal(toLocation);
    googleMaps.expect.element('@listedDirectionsTo4').text.to.equal(fromLocation);

    browser.saveScreenshot('google-reverse-directions-po.png');

  },
  'Should Search Google Maps for Coors Field and find the location': function(browser) {
    var searchCoors = 'coors field, denver, co';
    var googleMaps = browser.page.googleMaps();
    googleMaps.navigate()
      .setValue('@searchBox', [searchCoors, browser.Keys.ENTER]);
    googleMaps.expect.section('@searchResults').to.be.visible;

    var searchResults = googleMaps.section.searchResults;
    searchResults.expect.element('@heroTitle').to.be.visible;
    browser.saveScreenshot('google-coorsFieldSearch-po.png');

    browser.end();

  }
};
