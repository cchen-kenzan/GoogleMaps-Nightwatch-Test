'use strict';

var googleMapCommands = {
	clickforDirections: function() {
		//this.api.pause(1000);
		return this.waitForElementVisible('@directionsButton')
		.click('@directionsButton');
	},
	clickSearchResultDirections: function() {
		return this.waitForElementVisible('@directionsLink')
		.click('@directionsLink');
	},
	submitDirections: function() {

	},
	submitSearch: function() {
		return this.waitForElementVisible('@searchButton')
		.click('@searchButton');
	}
};

module.exports = { 
	url: 'http://www.maps.google.com',
	commands: [googleMapCommands],
	sections: {
		mapsWidget: {
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
				directionsLink: {
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
		},
		directionsFromTextBox1: {
			selector: '#sb_ifc51 .tactile-searchbox-input'
		},
		directionsToTextBox1: {
			selector: '#sb_ifc52 .tactile-searchbox-input'
		},
		directionResults2: {
			selector: '.section-directions-action.noprint'
		},
		drivingDirectionsButton1: {
			selector: 'div.directions-travel-mode-icon.directions-drive-icon'
		},
		walkingDirectionsButton1: {
			selector: 'div.directions-travel-mode-icon.directions-walk-icon'
		},
		reverseDirectionsButton1: {
	 		selector: 'button.widget-directions-reverse'
	 	},
	 	firstDirectionDescription3: {
	 		selector: '.section-directions-trip-description'
	 	},
	 	listedDirectionsFrom4: {
	 		selector: 'div.section-trip-header-waypoint:first-child span.section-trip-header-waypoint-name:first-child'
	 	},
	 	listedDirectionsTo4: {
	 		selector: 'div.section-trip-header-waypoint:nth-child(2) span.section-trip-header-waypoint-name:first-child'
	 	},
	 	backToDiretionsList4: {
	 		selector: 'button.section-trip-header-back.maps-sprite-common-arrow-back-white'
	 	}
	}
};