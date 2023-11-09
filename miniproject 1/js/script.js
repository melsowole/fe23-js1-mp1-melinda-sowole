"use strict";

const sectionOne = document.createElement("section");
const sectionTwo = document.createElement("section");

document.body.append(sectionOne, sectionTwo);

for (let i = 0; i < 5; i++) {
	const rowNum = i + 1;
	const row = document.createElement("p");
	row.style.backgroundColor = `hsl( ${i * 10}, 100%, 50%)`;
	row.style.color = "white";
	row.style.textAlign = "center";
	row.style.fontSize = rowNum + "rem";
	row.textContent = "Row " + rowNum;

	sectionOne.append(row);
}

sectionTwo.style.border = "1px solid black";
sectionTwo.style.padding = "1rem";
sectionTwo.style.display = "flex";
sectionTwo.style.justifyContent = "space-evenly";

const align = ["left", "center", "right"];

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

const special = [4, 8, 6];

// colors
const bg = "deeppink";
const col1 = "white";
const col2 = "black";

for (let i = 0; i < align.length; i++) {
	const block = document.createElement("div");
	sectionTwo.append(block);

	block.style.width = "4rem";
	block.style.backgroundColor = bg;
	block.style.padding = "0.5rem";
	block.style.textAlign = align[i];

	for (let j = 0; j < numbers.length; j++) {
		const row = document.createElement("div");

		// even list (middle) in reverse order
		if (i % 2) {
			block.prepend(row);
		} else {
			block.append(row);
		}

		// only last iteration spell out numbers
		if (i !== align.length - 1) {
			row.textContent = j;
		} else {
			row.textContent = numbers[j];
		}

		// color even and odd numbers
		const evenNumber = j % 2;
		if (evenNumber) {
			row.style.backgroundColor = col1;
			row.style.color = col2;
		} else {
			row.style.backgroundColor = col2;
			row.style.color = col1;
		}

		// mark special numbers
		const specialNumber = j == special[i];
		if (j == special[i]) {
			row.style.backgroundColor = bg;
		}
	}
}
