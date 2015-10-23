'use strict';

function passwordChanged() {
var strengthQuality = document.getElementById(‘strengthQuality’);
var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).*$", "g");
var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
var enoughRegex = new RegExp("(?=.{6,}).*", "g");
var pwd = document.getElementById("password");


if (pwd.value.length==0) {
	strengthQuality.innerHTML = ‘Type Password’;
	} else if (false == enoughRegex.test(pwd.value)) {
		strengthQuality.innerHTML = ‘More Characters’;
	} else if (strongRegex.test(pwd.value)) {
		strengthQuality.innerHTML = ‘<span style="color:green">Strong!</span>’;
	} else if (mediumRegex.test(pwd.value)) {
		strengthQuality.innerHTML = ‘<span style="color:orange">Medium!</span>’;
	} else {
		strengthQuality.innerHTML = ‘<span style="color:red">Weak!</span>’;
		}
}