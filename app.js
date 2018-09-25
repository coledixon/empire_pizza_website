var cheese;
var crust;
var meatArray = [];
var size;
var sauce;
var total;
var vegArray = [];

function getBase() {

	// get size value
	size = document.getElementsByName("size");
	for (var i = 0, length = size.length; i < length; i++)
	{
 		if (size[i].checked)
 		{
        	size = size[i].value
  			break; // break logic; radio button equals one value
 		}
	}
	if (!size) { alert("ERROR IN getBase() FOR size VALUE"); }
  
	// get crust value
	crust = document.getElementsByName("crust");
	for (var i = 0, length = crust.length; i < length; i++)
	{
 		if (crust[i].checked)
 		{
        	crust = crust[i].value
  			break; // break logic; radio button equals one value
 		}
	}
	if (!crust) { alert("ERROR IN getBase() FOR crust VALUE"); }
  
	// get sauce value
	sauce = document.getElementsByName("sauce");
	for (var i = 0, length = sauce.length; i < length; i++)
	{
		if (sauce[i].checked)
 		{
			sauce = sauce[i].value
			break; // break logic; radio button equals one value
		}
	}
	if (!sauce) { alert("ERROR IN getBase() FOR sauce VALUE"); }
  
	// get cheese value
	cheese = document.getElementsByName("cheese");
	for (var i = 0, length = cheese.length; i < length; i++)
	{
		if (cheese[i].checked)
 		{
        	cheese = cheese[i].value
  			break; // break logic; radio button equals one value
 		}
	}
	if (!cheese) { alert("ERROR IN getBase() FOR cheese VALUE"); }
	// alert(size + " " + sauce + " " + crust + " " + cheese); // debug

};

function getMeats() {

	var meats;

	meats = document.getElementsByName("meat");
	for (var i = 0, length = meats.length; i < length; i++)
	{
		// add checked items to array
 		if (meats[i].checked && !meatArray.includes(meats[i].value))
 		{
			meatArray.push(meats[i].value);
		}
		// removed items unchecked, but already in array
		if (!meats[i].checked && meatArray.includes(meats[i].value))
		{
			meatArray.pop(meats[i].value);
		} 
	}
	// alert(meatArray.length) // debug

};

function getVeg() {
	
	var veggies;

	veggies = document.getElementsByName("veg");
	for (var i = 0, length = veggies.length; i < length; i++)
	{
		// add checked items to array
 		if (veggies[i].checked && !vegArray.includes(veggies[i].value))
 		{
			vegArray.push(veggies[i].value);
		}
		// removed items unchecked, but already in array
		if (!veggies[i].checked && vegArray.includes(veggies[i].value))
		{
			vegArray.pop(veggies[i].value);
		} 
	}
	// alert(vegArray.length) // debug

};

function calcCost() {

	var total; // reset total value on each order
	total = parseInt(size); // convert to int value

	switch (crust) {
		case "p": // plain
			break;
		case "hs": // house special
			break;
		case "cs": // cheese stuffed
			total = total + 3;
			break;
		case "s": // spicy
			break;
		case "gb": // garlic butter
			break;
		default:
			break;
	}

	switch (cheese) {
		case "r": // regular
			break;
		case "x": // extra cheese
			// +$3
			total = total + 3;
			break;
		case "n": // none
			break;
		default:
			break;
	}

	if (meatArray.length > 1) 
	{
		var shift = meatArray.shift()
		meatArray.forEach(function(val) {
			// add $1 for each additional meat in the array
			total = total + 1;
		});
		meatArray.push(shift);
	}

	if (vegArray.length > 1) 
	{
		var shift = vegArray.shift();
		vegArray.forEach(function(val) {
			// add $1 for each additional veg in the array
			total = total + 1
		});
		vegArray.push(shift);
	}

	if (!total) { alert("ERROR IN calcCost FOR total VALUE"); }
	
	displayReceipt(total);

};

function displayReceipt(pTotal) {

	alert(pTotal + " total");
	// display values for compiled receipt on order confirmation

};

function order() {

	getBase();
	getMeats();
	getVeg();

	calcCost();

};
 