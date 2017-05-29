(function(){

	var customer = {
		name: "Anish",
		speak: function(){
			return "My name is" +this.name;
		},
		address: {
			city: "Kingsville",
			state: "Texas"
		}
	}

	document.write(customer.speak());

})()