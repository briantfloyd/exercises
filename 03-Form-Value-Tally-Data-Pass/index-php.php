<!DOCTYPE html>
<html>
<body>
	<h1>Payment tally form</h1>
	
	<form action="paymentgateway-php.php" id="paymenttallyform" method="post" >
		  First name:<br>
		  <input type="text" name="firstname" required>
		  <br>
		  Last name:<br>
		  <input type="text" name="lastname" required>
		  <br>
		  Email:<br>
		  <input type="text" name="email" required>
		  <br>
		  <br>
		  
		  I am a:<br>
		  <input type="radio" name="participanttype" value="student" checked>Student
		  <br>
		  <input type="radio" name="participanttype" value="faculty">Faculty
		  <br>
		  <input type="radio" name="participanttype" value="staff">Staff
		  <br>
		  <br>
		  
		  Purchase options:<br>
		  <input type="checkbox" name="purchaseoptions" value="100" onclick="totalFees()" checked required>Basic package $100
		  <br>
		  <input type="checkbox" name="purchaseoptions" value="50" onclick="totalFees()">Add-on package one +$50
		  <br>
		  <input type="checkbox" name="purchaseoptions" value="25" onclick="totalFees()">Add-on package two +$25
		  <br>
		  <input type="checkbox" name="purchaseoptions" value="45" onclick="totalFees()">Add-on package three +$45
		  <br>
		  <br>
		  
		  Current payment total:
		  <div id="paymentAmount"></div>
		  <input type="text" name="purchaseTotal" hidden>
		  <br>
		  <br>
		  
		  <input type="submit" value="Proceed to payment screen">
	</form>

	<script type="text/javascript">
		function totalFees() {
			var feeTotal = 0;
			var theForm = document.forms["paymenttallyform"];
			var selectedOptions = theForm.elements["purchaseoptions"];
			for (var i = 0, j = selectedOptions.length; i < j; i++) {
				if (selectedOptions[i].checked) {
					feeTotal = feeTotal + parseInt(selectedOptions[i].value);
				}
			}
			document.getElementById('paymentAmount').innerHTML = "$" + feeTotal;
			theForm.elements["purchaseTotal"].value = feeTotal;
		}
		this.totalFees();
	</script>
	
</body>
</html>
