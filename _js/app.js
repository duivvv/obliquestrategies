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
