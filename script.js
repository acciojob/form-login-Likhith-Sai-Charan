function getFormvalue() {
    //Write your code here
	event.preventDefault();

	const firstName=document.querySelector('[name="fname"]').value.trim();
	const lastName=document.querySelector('[name="lname"]').value.trim();

	const fullName=`${firstName} ${lastName}`.trim();

	alert(fullName);
}
