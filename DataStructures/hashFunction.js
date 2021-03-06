/***********************************************************
 *
 * Execution      :Default node    cmd>node hashFunction.js
 * Purpose        :Week Object in a stack to display the Calendar.

 *@description 
 *@file          :hashFunction.js
 *@overview      :Week Object having a list of WeekDay objects each storing the day (i.e S,M,T,W,Th,..) and the Date (1,2,3..) .
                  The WeekDay objects are stored in a stack implemented using Linked List.
 *@author        :Bhavana Sai B<bhavanab1506@gmail.com>
 *@version       :1.0
 *@since         :05/02/2019
 * 
 ***********************************************************/

var access = require('../utility/utilityDataStructure');
var readline = require('readline-sync');
var take = require('util');
var filestream = require('fs');
var utility = require('../utility/utility');
function hashing() {
    var fileRead = filestream.readFileSync('hashNumbers.txt', 'utf8');
    var numArray = fileRead.split(' ');
    var arr = []
    for (let i = 0; i < numArray.length; i++) {
        var n = Number(numArray[i]);
        var remainder = n % 10;
        if (arr[remainder] === undefined) {
            arr[remainder] = new access.LinkedList;
            arr[remainder].add(n);
        } else {
            arr[remainder].add(n);
        }
    }
    var str = "";
    for (let index = 0; index < 10; index++) {
        take.print(index + " slot: ");
        try {
            console.log(arr[index].print());
        } catch (err) {
            console.log("empty index");
        }
    }
    console.log()
    var valid = false;
    do {
        var number = readline.question('Enter the number you want to search \n');
        if (isNaN(number) && number < 0) {
            console.log("Enter positive number only greater than zero");
        } else {
            valid = true;
        }
    } while (!valid);
    remainder = Number(number % 10);
    console.log("Remainder is " + remainder);
    if (arr[remainder] === undefined) {
        arr[remainder] = new access.LinkedList;
    }
    if (arr[remainder].contain(Number(number))) {
        console.log("The number is present in the file");
        arr[remainder].remove(number);
    } else {
        console.log("Number is not in the file");
        arr[remainder].add(number);
    }
    var flag;
    for (let index = 0; index < 11; index++) {
        flag = true;
        take.print(index + " result slot: ");
        try {
            console.log(arr[index].print());
            str = str + arr[index].print();
        } catch (err) {
            console.log("Empty index");
        }
    } console.log(str);
    utility.fileWrite('hashNumbers.txt', str);
    console.log("\n\n");
}
hashing();



