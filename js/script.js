/*
 * Author: Melinda Sowole
 * Date: 15/11/2023
 * Description:
 * 		The final attempt at Miniproject 1 as part of the
 * 		Javascript 1 course at Grit Academy Fall23.
 * 		The goal was to recreate a visual layout using
 *      only javascript.
 *      The text of the numbered rows should gradually increase in
 *      size and shift in background color.
 *      The lists in the second block should alternate both in
 *      direction, content and alignment, as well as select unique
 * 		numbers in each list.
 *      The layout is dynamic, customizable though the config below.
 */

///////////////////////////////////////////////////////////
//// CONFIG

// For Numbered Rows ------------
const rows = 5;
// For Lists --------------------
const lists = 5;
const items = 10; // min 1, max 10
const unique = [2, 4, 5, 7]; // max items (repeats if fewer)

///////////////////////////////////////////////////////////

// ROW SECTION
for (let i = 0; i < rows; i++) {
	const row = document.createElement("p");
	document.body.append(row);
	row.style.backgroundColor = `hsl(${200 + i * 10}, 70%, 80%)`;
	row.style.cssText += `font-size: 1.${i}rem; text-align: center`;
	row.textContent = `Row ${i + 1}`;
}

// LIST SECTION
// generates each list block and section
for (let i = 0; i < lists; i++) {
	let section = getContainer();

	const list = document.createElement("div");
	section.append(list);
	list.style.cssText = "background: rgb(168, 168, 240); padding: 0.5rem";
	list.style.width = "5rem";

	// text alignment
	if (lists == 1 || (lists > 2 && i > 0 && i < lists - 1)) {
		// <-- one list or middle lists -->
		list.style.textAlign = "center";
	} else if (i == lists - 1) {
		// <-- last list -->
		list.style.textAlign = "right";
	}

	// generates each item within list, max 10
	let itemsN = items > 10 ? 10 : items;
	for (let j = 0; j < itemsN; j++) {
		const nrLetter = [
			"One",
			"Two",
			"Three",
			"Four",
			"Five",
			"Six",
			"Seven",
			"Eight",
			"Nine",
			"Ten",
		];

		// create, add to DOM, style
		const item = document.createElement("div");
		const order = i % 2 ? list.prepend(item) : list.append(item);
		item.style.cssText = `padding: 0.2rem`;

		// add bg col
		const even = j % 2;
		item.style.backgroundColor = even ? "white" : "royalblue";
		item.style.color = even ? "royalblue" : "white";

		// add text
		const thirdItem = (i - 2) % 4 == 0;
		const fourthItem = (i - 3) % 4 == 0;
		item.textContent = thirdItem || fourthItem ? nrLetter[j] : j + 1;

		if (unique[i % unique.length] == j + 1) {
			item.style.backgroundColor = "transparent";
			item.style.color = "black";
		}
	}

	// returns section to append lists into
	function getContainer() {
		let container = document.body.querySelector("section");
		if (!container) {
			container = document.createElement("section");
			container.style.cssText = `display: flex; justify-content: space-around; flex-wrap: wrap; gap: 0.5rem`;
			document.body.append(container);
		}
		return container;
	}
}
