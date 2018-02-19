function myFunction(){
	var inputtext = ["cpd","name","profession","Residence","pos","Signature","PRCPos","swornAT","Processor","Issuer","chief","Chairperson","firstMember","SecondMember","SwornPlace"];
		inputtext.forEach(function(item){
		var input = document.getElementById(item);
			if(input.value == ''){
				input.focus();
				alert("Sorry, " +item+" Field Cannot be empty");
			}
			else if(input.value != ''){
				if(!isNaN(input.value)){
					input.focus();
					alert("Sorry, " +item+" Field Cannot in Numeric Form");
				}
			}

			
		});

	var inputnum = ["TelephoneNumber","FaxNumber","CellphoneNumber","Year","Amount","ORNumber","DaySworn","IssuedID","CreditUnit"];
		inputnum.forEach(function(item){
			var inputno = document.getElementById(item);
			if(inputno.value == ''){
				inputno.focus();
				alert("Sorry, " +item+" Field Cannot be empty");
			}
			else if(inputno.value != ''){
				if(isNaN(inputno.value)){
					inputno.focus();
					alert("Sorry, " +item+" Field Should be in Numeric Form");
				}
			}
		});
	

	var inputspecial = ["DateIssued","Validity","DateSworn","ActionDate","ActionTakenDate","AcknowlegeDate"];
	inputspecial.forEach(function(item){
		var specialfield = document.getElementById(item).value;
		var special = document.getElementById(item);
		if(!Date.parse(specialfield)){
				special.focus();
				alert("Sorry, " +item+" Field Cannot be empty");
			}
		
});

	if(isNaN(document.getElementById('cpd').value) && isNaN(document.getElementById('name').value) 
		&& isNaN(document.getElementById('profession').value) && isNaN(document.getElementById('Residence').value)
		&& isNaN(document.getElementById('pos').value) && isNaN(document.getElementById('Signature').value) 
		&& isNaN(document.getElementById('PRCPos').value) && isNaN(document.getElementById('swornAT').value) 
		&& isNaN(document.getElementById('Processor').value) && isNaN(document.getElementById('Issuer').value)
		&& isNaN(document.getElementById('chief').value) && isNaN(document.getElementById('Chairperson').value) 
		&& isNaN(document.getElementById('firstMember').value) && isNaN(document.getElementById('SecondMember').value) 
		&& isNaN(document.getElementById('SwornPlace').value)
		&&(!isNaN(document.getElementById('TelephoneNumber').value) && !isNaN(document.getElementById('FaxNumber').value) &&
			!isNaN(document.getElementById('CellphoneNumber').value) && !isNaN(document.getElementById('Year').value) &&
			!isNaN(document.getElementById('Amount').value) && !isNaN(document.getElementById('ORNumber').value) &&
			!isNaN(document.getElementById('DaySworn').value) && !isNaN(document.getElementById('IssuedID').value) &&
			!isNaN(document.getElementById('CreditUnit').value))
		&&(Date.parse(document.getElementById('DateIssued').value) && Date.parse(document.getElementById('Validity').value) && 
			Date.parse(document.getElementById('DateSworn').value) && Date.parse(document.getElementById('ActionDate').value) && 
			Date.parse(document.getElementById('ActionTakenDate').value) && Date.parse(document.getElementById('AcknowlegeDate').value)))
	{
		document.getElementById('print').style.display = 'none'
		window.print();
	}

}