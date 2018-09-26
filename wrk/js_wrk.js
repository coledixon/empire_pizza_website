var cheese;
var crust;
var meatArray = [];
var orderArray = [];
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
	
	// build receipt HTML
	constructReceipt(total);

};

function constructReceipt(pTotal) {

	const ul = document.querySelector('.collection'); // locate collection class

	// add base to orderArray[]
	orderArray.push(size); orderArray.push(crust);
	orderArray.push(sauce); orderArray.push(cheese);

	// add veg to orderArray[]
	vegArray.forEach(function(veg) {
		orderArray.push(veg);
	});

	// add meat to orderArray[]
	meatArray.forEach(function(meat) {
		orderArray.push(meat);
	});
	
	// construct HTML receipt
	orderArray.forEach(function(item) {
		// DOM manipulation
		const li = document.createElement('li');
		const div = document.createElement('div');
		const ahref = document.createElement('a');
		const img = document.createElement('i');

		// const itemText = document.createTextNode(item);

		// dynamically set properties (for Materialize)
		li.className = 'collection-item'; 
		div.innerHTML = item;
		ahref.href = "#!";
		ahref.className = "secondary-content";
		img.className = "material-icons";
		img.innerHTML = "backspace"

		ahref.appendChild(img); // add img to ahref
		div.appendChild(ahref); // add ahref to div
		li.appendChild(div); // add div to li
		ul.appendChild(li); // add li to ul
	});
};

function order() {

	// construct pizza
	getBase();
	getMeats();
	getVeg();

	// calculate the total cost
	calcCost();
};

// clear list functionality
function clearList() {
	
	const ul = document.querySelector('.collection');
	ul.innerHTML = '';
	// flush arrays
	orderArray = []; meatArray = []; vegArray = [];
};

// Materialze Toast functionality
function confirmOrder(dur) {

	var mess = '<span>ORDER CONFIRMED</span><button class="btn-flat waves-effect blue-text text-darken-2 card-panel " onclick="undoOrder(\'ORDER CANCELED\', 5000)">Undo</button>';
	Materialize.toast(mess, dur, 'rounded');
};

function undoOrder(mess, dur) {

	Materialize.toast(mess, dur, 'rounded');
};

// Materialize Swtich functionality
function enabledCreditCardForm(pStatus) {

	var cc_info = document.getElementById('credit_card_info');
	const cc_html =
	'<form class="col s12"> <div class="row"> <div class="input-field col s6"> <input id="ccfirst_name" type="text" class="validate"> <label for="ccfirst_name">first name</label> </div><div class="input-field col s6"> <input id="cclast_name" type="text" class="validate"> <label for="cclast_name">last name</label> </div> </div> <div class="row"><div class="input-field col s12"> <input id="credit_card" type="text" class="validate"> <label for="credit_card">credit card #</label> </div> </div> <div class="row"> <div class="input-field col s6"> <input id="expiration" type="text" class="validate"> <label for="expiration">expiration</label> </div> <div class="input-field col s6"> <input id="bill_zip" type="text" class="validate"> <label for="bill_zip">billing zip</label> </div> </div> </form>';

	if (pStatus) {
		cc_info.innerHTML = cc_html;
	} else {
		cc_info.innerHTML = '';
	}
};