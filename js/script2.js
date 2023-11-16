/*
 * Author: Melinda Sowole
 * Date: 10/11/2023
 * Description:
 *      The first attempt at Miniproject 1
 */

"use strict";

const sectionOne = document.createElement("section");
const sectionTwo = document.createElement("section");
document.body.append(sectionOne, sectionTwo);

// SECTION 1
for (let i = 0; i < 5; i++) {
	const row = document.createElement("p");
	sectionOne.append(row);

	row.textContent = "Rad " + (i + 1);

	addStyling(row, [
		`fontSize:1.${i}rem`,
		`backgroundColor:hsl(${270 + i * 10}, 100%, 50%)`,
		"textAlign:center",
		"color:white",
	]);
}

// SECTION 2
addStyling(sectionTwo, [
	"border:1px solid black",
	"padding:3rem",
	"display:flex",
	"justify-content:space-evenly",
]);

const alignments = ["left", "center", "right"];

const numbers = [
	"ett",
	"två",
	"tre",
	"fyra",
	"fem",
	"sex",
	"sju",
	"åtta",
	"nio",
	"tio",
];

const specialNumbers = [4, 8, "sex"];

const bg = "deeppink";
const col1 = "black";
const col2 = "white";

for (let i = 0; i < alignments.length; i++) {
	const block = document.createElement("div");
	sectionTwo.append(block);

	addStyling(block, [
		`textAlign:${alignments[i]}`,
		`backgroundColor:${bg}`,
		"padding:1rem",
	]);

	for (let j = 0; j < numbers.length; j++) {
		let row = document.createElement("p");

		// reverse order in even block
		if (i % 2) {
			block.prepend(row);
		} else {
			block.append(row);
		}

		row.textContent = j;

		// spell numbers in last iteration
		if (i == alignments.length - 1) {
			row.textContent = numbers[j];
		}

		let evenRow = j % 2;

		addStyling(row, [
			"width:3rem",
			"margin:0",
			`backgroundColor:${evenRow ? col1 : col2}`,
			`color:${evenRow ? col2 : col1}`,
		]);

		if (row.textContent == specialNumbers[i]) {
			addStyling(row, [`backgroundColor:${bg}`]);
		}
	}
}

function addStyling(elem, styles) {
	styles.forEach((style) => {
		let styling = style.split(":");
		elem.style[styling[0]] = styling[1];
	});
}
