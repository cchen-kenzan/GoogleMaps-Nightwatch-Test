
module.exports = { 
  'Smoketest loading google.com': function(browser) {
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
  'Navigate to Google Images': function(browser) {
    browser
      	.click('.gb_P', function(response) {
      		console.log(response);
      		 browser
      			.saveScreenshot('google-gmail-images.png')
      			.assert.urlContains('https://www.google.com/imghp');
      });

      browser.end();
  }
  // 'Unauth Redirect from Gmail link to Login': function(browser) {
  //   browser
  //     .click('.hp.vasq')
  //     .pause(1000)
  //     //.waitForElementVisible('')
  //     .assert.urlEquals('https://www.google.com/gmail/about/')
  //     .saveScreenshot('google-gmail-nav.png')
  //     .end();
  // }
};
