#! /usr/bin/env node

import inquirer from "inquirer";

let Convertion = {
	"PKR": {
		"USD": 277.68,
		"GBP": 339.88,
		"PKR": 1
	},
	"GBP": {
		"USD": 1.22,
		"PKR": 339.88,
		"GBP": 1
	},
	"USD": {
		"PKR": 225.50,
		"GBP": 0.82,
		"USD": 1
	},
}

const ans: {
	From:"PKR"|"USD"|"GBP",
	to:"PKR"|"USD"|"GBP",
	amount:number
} = await inquirer.prompt([
	{
		type:"list",
		name:"From",
		choices: ["PKR","USD","GBP"],
		message: "Select your currency: "
	},
	{
		type: "list",
		name: "to",
		choices: ["PKR","USD","GPB"],
		message: "Select your convertion currency: "
	},
	{
		type: "number",
		name: "amount",
		message: "Select your convertion amount: "
	},
])

const {to, From, amount} = ans
if(From && to && amount) {
	let result = Convertion[From][to] * amount;
	console.log(`Your Convertion from ${From} to ${to} is ${result}`)
} else {
	console.log("Invalid Inputs.1")
}