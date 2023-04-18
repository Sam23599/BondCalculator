window.onload = function() {
	var animationDiv = document.getElementById('animation');
	animationDiv.style.display = 'flex';
	setTimeout(function() {
		animationDiv.style.display = 'none';
		document.getElementById('gif-div').style.display = 'block';
	}, 5000);
}

// window.addEventListener('load', function() {
// 	// after 5 seconds, remove the #loading element from the DOM
// 	setTimeout(function() {
// 		document.getElementById('loading').remove();
// 	}, 5000); // 5000 milliseconds = 5 seconds
// });
