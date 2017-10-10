'use strict';

var googleMapCommands = {
	submitSearch: function() {
		return this.waitForElementVisible('@searchButton', 1000)
		.click('@searchButton');
	}
};

module.exports = { 
	url: 'http://www.maps.google.com',
	commands: [googleMapCommands],
	sections: {
		mapsWidgetMenu: {
			selector: 'div.widget-settings-content',
			elements: {
				satelliteButton: {
					selector: 'button.widget-settings-button.widget-settings-earth-button.widget-settings-intent-off'
				}
			}
		}
	},
	sections: {
		searchResults: {
			selector: 'div.section-listbox.section-listbox-root',
			elements: {
				heroTitle: {
					selector: '.section-hero-header-title'
				},
				directions: {
					selector: 'button.section-hero-header-directions.noprint'
				}
			}
		}
	},
	elements: {
		mapsHamburger: {
			selector: 'button.searchbox-hamburger'
		},
		searchBox: {
			selector: '#searchboxinput.tactile-searchbox-input'
		},
		searchButton: {
			selector: '#searchbox-searchbutton'
		},
		directionsButton: {
			selector: '#searchbox-directions' 
		}
	}
};