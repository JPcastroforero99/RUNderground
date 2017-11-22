class niveles {
	
	constructor (nivel,spritejugador,spriteenemigo,fondo){		
		this.nivel=nivel;
		this.spritejugador=spritejugador;
		this.spriteenemigo=spriteenemigo;
		this.fondo=fondo;
	}
	
controles(){
	if(nivel==0){
		this.entrada = juego.input.keyboard.createCursorKeys();		
	}
}

enemigos(){
	
	
	
}
	
jugador(){
	this.jugador = juego.add.sprite(200, 100, 'pa');
	if(nivel==0){
		jugador.animations.add('izquierda', [12, 13, 14, 15], 10, true);
    	jugador.animations.add('derecha', [4, 5, 6, 7], 10, true);
    	jugador.animations.add('abajo', [8, 9, 10, 11], 10, true);
    	jugador.animations.add('arriba', [0, 1, 2, 3], 10, true); 
		jugador.body.collideWorldBounds = true;
	   }
}
conseguido(){
		
	
}
	
fondo(){	
	
    juego.add.sprite(0, 0, 'fondo');
if(nivel==0){
	
	juego.physics.arcade.enable(jugador);
	juego.camera.follow(jugador);
	juego.physics.startSystem(Phaser.Physics.ARCADE);    
    juego.world.setBounds(0, 0, 1600, 1600);
    
    
}
}
}