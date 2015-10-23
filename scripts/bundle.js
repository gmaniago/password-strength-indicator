(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function passwordChanged() {
	var strengthQuality = document.getElementById('strengthQuality');
	var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).*$", "g");
	var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
	var enoughRegex = new RegExp("(?=.{6,}).*", "g");
	var pwd = document.getElementById("password");

	if (pwd.value.length == 0) {
		strengthQuality.innerHTML = 'Type Password';
	} else if (false == enoughRegex.test(pwd.value)) {
		strengthQuality.innerHTML = 'More Characters';
	} else if (strongRegex.test(pwd.value)) {
		strengthQuality.innerHTML = React.createElement(
			'span',
			{ style: 'color:green' },
			'Strong!'
		);
	} else if (mediumRegex.test(pwd.value)) {
		strengthQuality.innerHTML = React.createElement(
			'span',
			{ style: 'color:orange' },
			'Medium!'
		);
	} else {
		strengthQuality.innerHTML = React.createElement(
			'span',
			{ style: 'color:red' },
			'Weak!'
		);
	}
}

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map