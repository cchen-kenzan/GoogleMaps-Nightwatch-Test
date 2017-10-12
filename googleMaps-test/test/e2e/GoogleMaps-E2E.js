'use strict';

module.exports = { 
  'Should Give Directions starting from fromLocation to toLocation': function(browser) {
    var fromLocation = '1743 wazee street Denver, CO';
    var toLocation = 'the source, denver, co';

    var googleMaps = browser.page.googleMaps();
    googleMaps.navigate()
      .clickforDirections()
      .waitForElementVisible('@directionsFromTextBox')
      .waitForElementVisible('@directionsToTextBox')
      .setValue('@directionsFromTextBox', [fromLocation, browser.Keys.ENTER])
      .setValue('@directionsToTextBox', [toLocation, browser.Keys.ENTER]);
      //.assert.visible('@directionResults');
      // googleMaps
      //   .waitForElementVisible()
    browser.saveScreenshot('google-directions-po.png');
    // googleMaps
    //   .setValue('@directionsFromTextBox', fromLocation)
    //   .setValue('@directionsToTextBox', toLocation)
    //   .submit();
    //   browser.saveScreenshot('google-directions-submit-po.png');
    //I need to come back to this, doesn't seem to find the @directionsWidget
    // browser.waitForElementVisible('@directionsWidget', 5000, function() {
    //   browser.saveScreenshot('google-directions-po.png');
    //   var directionsWidget = googleMaps.section.directionsWidget;
    //   console.log(directionsWidget);
    // });

     //var directionsWidget = googleMaps.section.directionsWidget;
    // //directionsWidget.expect.element('@directionsWidget').to.be.visible;
    // console.log(directionsWidget);
    // directionsWidget
    //   .setValue('@directionsFromTextBox', fromLocation)
    //   .setValue('@directionsToTextBox', toLocation)
    //   .submit();
    //   browser.saveScreenshot('google-directions-po.png');
      //browser.end();

  },
  'Should Search Google Maps for Coors Fields and find the location': function(browser) {
    var searchCoors = 'coors field, denver, co';
    var googleMaps = browser.page.googleMaps();
    googleMaps.navigate()
      .setValue('@searchBox', [searchCoors, browser.Keys.ENTER]);
      //.submitSearch();
    var searchResults = googleMaps.section.searchResults;
    //console.log(searchResults);
    searchResults.expect.element('@heroTitle').to.be.visible;
    browser.saveScreenshot('google-coorsFieldSearch-po.png');

    var startingLocation = '1743 wazee street Denver, CO'
    searchResults
      .click('@directionsLink');
  //     //.clickSearchResultDirections();
    browser.saveScreenshot('google-coorsField-directions-po.png');
    //used to debug:
    // googleMaps.getValue('@directionsToTextBox', function(result) {
    //   console.log("result: " + result);
    //   console.log("type of " + typeof result);
    //   console.log("value: " + result.value);
    // });
      googleMaps
        .setValue('@directionsFromTextBox', [startingLocation, browser.Keys.ENTER]);
      browser.saveScreenshot('google-coorsField-list-directions-po.png');
    
  //   var directionsWidget = googleMaps.section.directionsWidget;
  //   directionsWidget
  //     .setValue('@directionsFromTextBox', startingLocation)
  //     .submit();
  //     // .setValue()

    browser.end();

  }
  // 'Should Display Directions to Coors Field': function(browser) {
  //   var startingLocation = '1743 wazee street Denver, CO'
  //   var googleMaps = browser.page.googleMaps();
  //   googleMaps.navigate()
  //   .
  //   browser.end();
  // }
};
