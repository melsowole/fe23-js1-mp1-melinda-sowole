const sectionOne = document.createElement("section");
document.body.append(sectionOne);

for (let i = 0; i <= 5; i++) {
	const row = document.createElement("p");
	sectionOne.append(row);

	row.textContent = "Rad " + i;

	// row styling

	addStyling(row, [
		`fontSize:1.${i}rem`,
		`backgroundColor:hsl(${270 + i * 10}, 100%, 50%)`,
		"textAlign:center",
	]);
}

const sectionTwo = document.createElement("section");
document.body.append(sectionTwo);

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

const specialNumbers = [4, 8, 3];

addStyling(sectionTwo, [
	"border:1px solid black",
	"padding:3rem",
	"display:flex",
	"justify-content:space-evenly",
]);

for (let i = 0; i < alignments.length; i++) {
	const block = document.createElement("div");
	sectionTwo.append(block);

	addStyling(block, [
		`textAlign:${alignments[i]}`,
		"backgroundColor:deeppink",
		"padding:1rem",
	]);

	for (let j = 0; j < 10; j++) {
		let number = document.createElement("p");
		if (i % 2) {
			block.prepend(number);
		} else {
			block.append(number);
		}

		number.textContent = j;

		if (i == 2) {
			number.textContent = numbers[j];
		}

		let even = j % 2;

		let bgColCombo = [
			`backgroundColor:${even ? "black" : "white"}`,
			`color:${even ? "white" : "black"}`,
		];

		addStyling(number, ["width:3rem", "margin:0"].concat(bgColCombo));

		if (j == specialNumbers[i]) {
			addStyling(number, ["backgroundColor:deeppink"]);
		}
	}
}

function addStyling(elem, styles) {
	styles.forEach((style) => {
		let styling = style.split(":");
		elem.style[styling[0]] = styling[1];
	});
}
