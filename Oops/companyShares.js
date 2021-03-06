
/************************************************************
 * Execution    :   1. cmd> node companyStock.js
 *                   if nodemon is installed:
 *                  2. cmd> nodemon companyStock.js
 *                   nodemon helps in restart the program after every changes.
 * 
 * Purpose      :   To add and remove the company info from the list of company shares.
 * 
 * @description :   List of CompanyShares in a Linked List and new CompanyShares can
 *                  be added or removed easily.
 *                  
 * @file        :   companyShareLinkedlist.js
 * @overview    :   To add and remove the company info from the list of company shares.
 * @author      :   Bhavana Sai B<bhavanab1506@gmail.com>
 * @version     :   1.0
 * @since       :   12/02/2019
 * 
 * **********************************************************/
var file = require("fs");
var read = require("readline-sync");
var utiltiy = require("../Oops/oopsUtility");
function main() {
  try {
    var companyJson = file.readFileSync( "/home/admininistrator/Desktop/Bhavana/Oops/companyShares.json" );
    var companyObject = JSON.parse(companyJson);
    var com = new utiltiy.companyShares();
    var data = companyObject.company;
      outer: while (true) {
      console.log("1. Add");
      console.log("2. Remove");
      console.log("3. Print");
      console.log("4. Save and exit");
      var num = read.questionInt("Enter valid choice :");
        switch (num) {
        case 1:
          com.addTolist(data, companyObject);
          break;
        case 2:
          com.removeFromList();
          break;
        case 3:
          com.print();
          break;
        case 4:
          com.writeStock();
          break outer;
        default:
          console.log("Please enter valid number ");
          break;
      }
    }
  } catch (err) {
    //console.log(err.message);
  }
}
main();
	
	
	


