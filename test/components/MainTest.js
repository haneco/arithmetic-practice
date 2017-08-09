/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import createComponent from 'helpers/shallowRenderHelper';

import React from 'react';
import Main from 'components/Main';

describe('MainComponent', function () {

	beforeEach(function () {
		this.MainComponent = createComponent(Main);
	});

	it('should have its component name as default id', function() {
		expect(this.MainComponent.props.id).to.equal('stage');
	});

	it('shuffle', function() {
		this.MainComponent;		
	});
});
