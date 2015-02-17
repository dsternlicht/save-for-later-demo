'use strict';

$(document).ready(function() {
	var createMarkticleButton = function() {
		var styles = 'position: fixed; z-index: 9999; bottom: 20px; left: 20px;';
		$('body').append('<button id="markticle_button" style="' + styles + '">Mark me!</button>');
	};

	$(document).on('click', '#markticle_button', function() {
		var title = document.title;
		var url = window.location.href;
		chrome.extension.sendMessage({
		   	action : 'add',
		   	data: {
				title: title,
				url: url
			}
		});

		alert('Marked!');
	});

	createMarkticleButton();
});