this.testSmokeTestGoogle = function (browser) {
	browser
		.url('http://www.google.com')
		.saveScreenshot('google-smoketest2.png');
	browser.expect.element('#lst-ib').to.be.present;
	browser.end();
	
};