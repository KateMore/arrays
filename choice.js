$(document).ready(function(){
	var items = [
	{
		name: "T-Short",
		color: "black",
		size: "S",
		image: "tshort.jpg",
		price: 20.5 
	},
	{
		name: "Scirt",
		color: "yellow",
		image: "scirt.jpg",
		size: "S",
		price: 55.3 
	},
	{
		name: "Hat",
		color: "red",
		image: "hat.jpg",
		size: "L",
		price: 16.5 
	},
	{
		name: "Pants",
		color: "green",
		image: "pants.jpg",
		size: "M",
		price: 29.9 
	}
	];

	init();

	function init(){
		getLowestPrice();
		getHighestPrice();
		getSizeM();
		getRandomItem()


	}

	function getLowestPrice()    {
		var lowest_price = items[0].price;

		var item_index = 0;

		for (var i = 0; i < items.length; i++) {
			if (items[i].price < lowest_price) {
				lowest_price = items[i].price;
				item_index = i;}
			}
			
			var lowest_name = $(".lowest-price-name").html(items[item_index].name);
			$(".lowest-price-block").append(lowest_name);
			var lowest_size = $(".lowest-price-item-size").html(" "+"Size:"+" "+items[item_index].size+" ");
			$(".lowest-price-block").append(lowest_size);
			var lowest_pr_price = $(".lowest-price-item-price").html(" "+"Price:"+" "+items[item_index].price+"$");
			$(".lowest-price-block").append(lowest_pr_price);
			var lowest_image = $(".lowest-price-image").attr("src",items[item_index].image);
			$(".lowest-price-block").append(lowest_image);
			
		};

		function getHighestPrice()    {
			var highest_price = items[0].price;

			var item_index = 0;

			for (var i = 0; i < items.length; i++) {
				if (items[i].price > highest_price) {
					highest_price = items[i].price;
					item_index = i;
				}
			}
			
			var highest_name = $(".highest-price-name").html(items[item_index].name);
			$(".highest-price-block").append(highest_name);
			var highest_size = $(".highest-price-item-size").html(" "+"Size:"+" "+items[item_index].size+" ");
			$(".highest-price-block").append(highest_size);
			var highest_pr_price = $(".highest-price-item-price").html(" "+"Price:"+" "+items[item_index].price+"$");
			$(".highest-price-block").append(highest_pr_price);
			var highest_image = $(".highest-price-image").attr("src",items[item_index].image);
			$(".highest-price-block").append(highest_image);
			
		};


		function getSizeM() {

			
			var item_index = 0;

			for (var i = 0; i < items.length; i++) {
				if (items[i].size == "M") {
					item_index = i;} 
					
				}
				
				
				var m_size_item_name = $(".m-size-name").html(items[item_index].name);
				$(".m-size-block").append(m_size_item_name);
				var m_size_item_price = $(".m-size-price").html(" "+"Price:"+" "+items[item_index].price+"$");
				$(".m-size-block").append(m_size_item_price);
				var m_size_item_image = $(".m-size-image").attr("src",items[item_index].image);
				$(".m-size-block").append(m_size_item_image);
			};

			function getRandomItem() {

				
				var random_index = Math.floor(Math.random()*items.length);


				var random_name = $(".random-name").html(items[random_index].name);
				$(".random-item-block").append(random_name);
				var random_size = $(".random-item-size").html(" "+"Size:"+" "+items[random_index].size+" ");
				$(".random-item-block").append(random_size);
				var random_price = $(".random-item-price").html(" "+"Price:"+" "+items[random_index].price+"$");
				$(".random-item-block").append(random_price);
				var random_image = $(".random-image").attr("src",items[random_index].image);
				$(".random-item-block").append(random_image);
			};


		});










