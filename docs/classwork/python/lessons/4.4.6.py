#tells user if they are eligible to run for president
age = int(float(input("How old are you?: ")))
birth = (input("Were you born in the United States or one of her territories?: ") in ["affirmative", "amen", "fine", "good", "okay", "true", "yea", "all right", "aye", "beyond a doubt", "by all means", "certainly","definitely", "even so","exactly","gladly","good enough","granted","indubitably","just so","most assuredly","naturally","of course","positively","precisely","sure thing","surely","undoubtedly","unquestionably","very well","willingly","without fail", "yep", "yes"])
duration = int(float(input("How many years have you lived in the United States or one of her territories?: ")))
if(age>=35 and birth and duration>=14):
	print("You are eligible to run for president!")
else:
	if age<35:
		print("You are too young to run for president.")
	if birth!=True:
		print("You must be born in the United States or one of her territories to run for president.")
	if duration<14:
		print("You must have lived in the United States or one of her territories for at least 14 years to run for president.")
		
	
