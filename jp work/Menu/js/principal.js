class RUNderground extends Phaser.Game {

	constructor() {

		super(800, 600, Phaser.AUTO);

		this.state.add('menu', juego.GameState);

		this.state.start('menu');
	}

}

new RUNderground();
