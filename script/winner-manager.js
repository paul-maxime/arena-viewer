/**
 * Tacticode - Winner Manager
 */

"use strict";

Tacticode.WinnerManager = function (stage) {
	this.textWinner = new PIXI.Text('', {
		font : '34px Helvetica',
		fill : 0xf2f2f2
	});
	this.dimmer = new PIXI.Graphics();
	this.dimmer.beginFill(0x000000, 0.8);
	this.dimmer.drawRect(0, 0, 1024, 768);
	this.dimmer.endFill();
	this.dimmer.visible = false;
	stage.addChild(this.dimmer);
	stage.addChild(this.textWinner);
};

Tacticode.WinnerManager.prototype.setWinner = function (winner) {
	if (winner === null) {
		this.textWinner.text = '';
		this.dimmer.visible = false;
	} else {
		this.textWinner.text = 'WINNER: ' + winner;
		this.textWinner.x = 512 - this.textWinner.width / 2;
		this.textWinner.y = 384 - this.textWinner.height / 2;
		this.dimmer.visible = true;
	}
};