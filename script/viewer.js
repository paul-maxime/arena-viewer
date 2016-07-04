/**
 * Tacticode - Viewer
 * Main file of the project, contains the jQuery entrypoint.
 */

var fight = {
	"map": {
		"name": "Sample map",
		"style": "basic",
		"width": 5,
		"height": 5,
		"cells" : [
			{"x": 0, "y": 0, "tile": "GROUND", "accessible": true, "los": true},
			{"x": 0, "y": 1, "tile": "GROUND", "accessible": true, "los": true},
			{"x": 0, "y": 2, "tile": "GROUND", "accessible": true, "los": true},
			{"x": 0, "y": 3, "tile": "GROUND", "accessible": true, "los": true},
			{"x": 0, "y": 4, "tile": "GROUND", "accessible": true, "los": true},
			{"x": 1, "y": 0, "tile": "GROUND", "accessible": true, "los": true},
			{"x": 1, "y": 1, "tile": "GROUND", "accessible": true, "los": true},
			{"x": 1, "y": 2, "tile": "GROUND", "accessible": true, "los": true},
			{"x": 1, "y": 3, "tile": "GROUND", "accessible": true, "los": true},
			{"x": 1, "y": 4, "tile": "GROUND", "accessible": true, "los": true},
			{"x": 2, "y": 0, "tile": "GROUND", "accessible": true, "los": true},
			{"x": 2, "y": 1, "z": 2, "tile": "TREE", "accessible": false, "los": false},
			{"x": 2, "y": 2, "tile": "GROUND", "accessible": true, "los": true},
			{"x": 2, "y": 3, "tile": "GROUND", "accessible": true, "los": true},
			{"x": 2, "y": 4, "tile": "GROUND", "accessible": true, "los": true},
			{"x": 3, "y": 0, "tile": "GROUND", "accessible": true, "los": true},
			{"x": 3, "y": 1, "z": 1, "tile": "GROUND", "accessible": true, "los": true},
			{"x": 3, "y": 2, "tile": "GROUND", "accessible": true, "los": true},
			{"x": 3, "y": 3, "tile": "GROUND", "accessible": true, "los": true},
			{"x": 3, "y": 4, "tile": "GROUND", "accessible": true, "los": true},
			{"x": 4, "y": 0, "tile": "GROUND", "accessible": true, "los": true},
			{"x": 4, "y": 1, "tile": "GROUND", "accessible": true, "los": true},
			{"x": 4, "y": 2, "tile": "GROUND", "accessible": true, "los": true},
			{"x": 4, "y": 3, "z": 1, "tile": "TREE", "accessible": false, "los": false},
			{"x": 4, "y": 4, "tile": "GROUND", "accessible": true, "los": true}
		],
		"start_positions": [
			{
				"x": 1,
				"y": 0
			},
			{
				"x": 2,
				"y": 0
			},
			{
				"x": 3,
				"y": 0
			},
			{
				"x": 4,
				"y": 0
			},
			{
				"x": 0,
				"y": 0
			},
			{
				"x": 11,
				"y": 0
			},
			{
				"x": 0,
				"y": 11
			},
			{
				"x": 11,
				"y": 11
			}
		]
	},
	"entities": [
		{"id": 957, "x": 1, "y": 2, "breed": "orc", "team": 0, "health": 1000, "weapon": "staff1"},
		{"id": 22, "x": 1, "y": 3, "breed": "orc", "team": 0, "health": 800},
		{"id": 2, "x": 4, "y": 2, "breed": "elf", "team": 1, "health": 600, "weapon": "bow1"}
	],
	"actions" : [
		{"type": "move", "entity": 22, "x": 2, "y": 3},
		{"type": "move", "entity": 22, "x": 2, "y": 4},
		{"type": "skill", "entity": 957, "skill": "fireball", "x": 4, "y": 2},
		{"type": "heal", "entity": 957, "health": 51},
		{"type": "damage", "entity": 2, "health": 51},

		{"type": "move", "entity": 2, "x": 4, "y": 3},
		{"type": "skill", "entity": 2, "skill": "arrow", "x": 2, "y": 4},
		{"type": "damage", "entity": 22, "health": 179},
		{"type": "heal", "entity": 2, "health": 179},
		
		{"type": "move", "entity": 2, "x": 4, "y": 2},
		{"type": "skill", "entity": 2, "skill": "arrow", "x": 0, "y": 4},
		{"type": "move", "entity": 2, "x": 4, "y": 1},
		{"type": "skill", "entity": 2, "skill": "arrow", "x": 4, "y": 0},
		
		{"type": "skill", "entity": 2, "skill": "iceball", "x": 1, "y": 2},
		{"type": "damage", "entity": 957, "health": 617},
		{"type": "skill", "entity": 2, "skill": "iceball", "x": 1, "y": 2},
		{"type": "damage", "entity": 957, "health": 434},
		{"type": "death", "entity": 957},
		{"type": "move", "entity": 2, "x": 3, "y": 1},
	]
};

$(function () {
    Tacticode.init("tacticode-viewer-container");
	Tacticode.loadFight(fight);
});
