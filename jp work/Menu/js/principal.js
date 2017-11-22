var juego = juego || {};

//initiate the Phaser framework
juego.game = new Phaser.Game('100%', '100%', Phaser.AUTO);

juego.game.state.add('GameState', juego.GameState);
juego.game.state.start('GameState'); 
