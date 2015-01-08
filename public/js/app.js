(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./_js/app.js":[function(require,module,exports){
(function(){

	var cards = [];

	function init(){
		$.getJSON('/data/ob.json').done(loaded);
	}

	function loaded(data){
		cards = _.filter(data, function(card){
			return card.edition === 4;
		});
		getCard();
		$('.strategy > a').on('click', getCard);
	}

	function getCard(e){
		if(e){
			e.preventDefault();
		}
		var card = cards[Math.round(Math.random()*(cards.length-1))];
		$(".strategy > a").html("#" + card.cardnumber + "<br/>" + card.strategy);
	}

	init();

})();

},{}]},{},["./_js/app.js"]);
