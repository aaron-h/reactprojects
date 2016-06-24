## locale-property-search project

###Installing and start with npm
* `npm install` - add dependency
* `npm run start` - Run server:8000 and start server-lite

##Features:
•	Using React.js and Node.js, create a Single Page Application that will return the values for a property for each locale
•	Input : property name
•	Output : list of all locales for which the property exists, and the corresponding value
•	Suggest a good UI format to show the data
•	Additional features
o	Option to dedupe the data - show all countries with the same property value
o	Option to add a new column (ie show data for a new property)
o	Option to delete a column (ie hide/delete the data for a property)
##Source for data - CLDR
•	To make it simple, use the values from delimeters.json which is found under
o	https://github.com/unicode-cldr/cldr-misc-full/blob/master/main (under /delimeters.json)
•	for example
•	https://github.com/unicode-cldr/cldr-misc-full/blob/master/main/de/delimiters.json
•	https://github.com/unicode-cldr/cldr-misc-full/blob/master/main/fr/delimiters.json
•	https://github.com/unicode-cldr/cldr-misc-full/blob/master/main/it/delimiters.json
##Sample behavior
1.	Input = "quotationStart"
Output = de = "„", fr = "«", it = "«", etc
2.	Input = "quotationEnd"
Output = de = "“", fr = "»", it = "»", etc




