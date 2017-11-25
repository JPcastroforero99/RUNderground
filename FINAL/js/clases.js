class Game extends Phaser.Game {

	constructor() {
		super(600, 600, Phaser.AUTO, 'content', null);
		this.state.add('Menu', Menu, false);
        this.state.add('Nivel1', Nivel1, false);
        this.state.add('Nivel2', Nivel2, false);
		this.state.start('Menu');
	}

}

class Menu extends Phaser.State {   
    constructor(){        
    super();  
this.jugador;        
this.vol=0;
this.plataforma;
this.barra;
this.enemigo;
this.fondo;
this.jugador;
this.controles;  
this.button;
this.vidas=3;
this.button2;
this.button3;
this.crear =false; 
this.perdio;
this.fondo1;
this.aud;
this.porro;
this.boom;
this.estrella;
this.vel=150;
this.boton=0;

    }
     preload() {
   this.load.image('mapa', 'sprites/mapaM.png');
   this.load.image('mapan1', 'sprites/mapan1.png');
   this.load.image('plataforma', 'sprites/plataforma.png');
   this.load.spritesheet('pa', 'sprites/sprite.png', 32, 42);
   this.load.image('boton', 'sprites/boton0.png');
   this.load.image('boton1', 'sprites/boton1.png');
   this.load.image('fondo', 'sprites/fondo.png');
   this.load.image('enemigo', 'sprites/enemigo.png');
   this.load.image('perdio', 'sprites/perdio.png');
   this.load.image('menu', 'sprites/icono.png');
   this.load.audio('aud', 'audio/shampoo.mp3');
   this.load.audio('boom', 'audio/numkey.wav');
   this.load.image('opciones', 'sprites/boton2.png');
   this.load.image('estrella', 'sprites/estrella.png');
   this.load.image('porro', 'sprites/porro.png');
   this.load.image('bullet', 'sprites/bullet.png');
 }
	create() {
		/*let center = { x: this.game.world.centerX, y: this.game.world.centerY }
		let text = new RainbowText(this.game, center.x, center.y, "- phaser -\nwith a sprinkle of\nES6 dust!");
		text.anchor.set(0.5);*/
        
        this.fondo1= this.add.sprite(0,0,'menu'); 	
        this.button = this.add.button(this.world.centerX-100, 300, 'boton', this.actionOnClick);
        this.button2 = this.add.button(this.world.centerX-100, 400, 'boton1', this.Click);
        this.button3 = this.add.button(this.world.centerX-100, 500, 'opciones', this.Click2);
        this.aud = this.add.audio('aud');
        this.boom = this.add.audio('boom');
        this.aud=this.aud.play('', 0, this.vol, true);
        
        
	}    
  actionOnClick () { 
   this.boton=1;
     this.game.state.start('Nivel1');
      
 }
  Click () {
 
   this.boton=2;
      this.game.state.start('Nivel2');
 }
  Click2 (){
 	
 console.log(3);
}
}

class Nivel1 extends Phaser.State {

	constructor() {
		//super(game, x, y, text, { font: "45px Arial", fill: "#ff0044", align: "center" });
        super();
        
        
		
	}   
    preload(){
    this.load.image('mapa', 'sprites/mapaM.png');
    this.load.spritesheet('pa', 'sprites/sprite.png', 32, 42);
        
    }	
	create() {
		     
     this.physics.startSystem(Phaser.Physics.ARCADE);
     this.add.sprite(0, 0, 'mapa');
     this.world.setBounds(0, 0, 1600, 1600);
     this.jugador = this.add.sprite(200, 100, 'pa');
     this.physics.arcade.enable(this.jugador);
     this.jugador.body.collideWorldBounds = true;
     this.jugador.animations.add('izquierda', [12, 13, 14, 15], 10, true);
     this.jugador.animations.add('derecha', [4, 5, 6, 7], 10, true);
     this.jugador.animations.add('abajo', [8, 9, 10, 11], 10, true);
     this.jugador.animations.add('arriba', [0, 1, 2, 3], 10, true);  
     this.controles = this.input.keyboard.createCursorKeys();
     this.camera.follow(this.jugador);
	}
	update() {
        
        this.jugador.body.velocity.x = 0;
     this.jugador.body.velocity.y = 0;
     if (this.controles.left.isDown) {
       this.jugador.body.velocity.x = -150;
       this.jugador.animations.play('izquierda');
     } else if (this.controles.right.isDown) {
       this.jugador.body.velocity.x = 150;
       this.jugador.animations.play('derecha');
     } else if (this.controles.down.isDown) {
       this.jugador.body.velocity.y = 150;
       this.jugador.animations.play('abajo');
     } else if (this.controles.up.isDown) {
       this.jugador.body.velocity.y = -150;
       this.jugador.animations.play('arriba');
     } else {
       this.jugador.animations.stop();
       this.jugador.frame = 9;
     }
	}

}

class Nivel2 extends Phaser.State {

	constructor() {
		//super(game, x, y, text, { font: "45px Arial", fill: "#ff0044", align: "center" });
        super();  
        this.vel=150;
        this.vidas=3;
	}   
    preload(){
    
   this.load.image('plataforma', 'sprites/plataforma.png');
   this.load.spritesheet('pa', 'sprites/sprite.png', 32, 42);
   this.load.image('fondo', 'sprites/fondo.png');
   this.load.image('enemigo', 'sprites/enemigo.png');
   this.load.image('perdio', 'sprites/perdio.png');
   this.load.image('estrella', 'sprites/estrella.png');
   this.load.image('porro', 'sprites/porro.png');
   
 }	
	create() {
		if (this.vidas!=0) {
     	console.log(20);
       this.physics.startSystem(Phaser.Physics.ARCADE);
       this.fondo = this.add.sprite(0, 0, 'fondo');
       this.enemigo= this.add.sprite(100, 1690, 'enemigo');
       this.porro= this.add.sprite(700, 1064, 'porro');
       this.physics.arcade.enable(this.enemigo);
       this.physics.arcade.enable(this.porro);
       this.plataforma=this.add.group();
       this.plataforma.enableBody = true; 
       this.piso = this.plataforma.create(0, this.fondo.height - 32, 'plataforma');
       this.piso.scale.setTo(2, 1);
       this.piso.body.immovable = true;
       for (var i= 0; i<17; i++) {
         if (i%2==0) {
           this.barra = this.plataforma.create(400, 1550-i*100, 'plataforma');
           this.barra.body.immovable = true;
         } else if (i%2!=0) {
           this.barra = this.plataforma.create(-200, 1550-i*100, 'plataforma');
           this.barra.body.immovable = true;
         }
       }
       this.estrella = this.add.sprite(10,10,'estrella');
 
 
       this.world.setBounds(0, 0, 800, 1764);
       this.jugador = this.add.sprite(200, 1668, 'pa');
       this.physics.arcade.enable(this.jugador);
       this.jugador.body.gravity.y = 300;
       this.jugador.body.collideWorldBounds = true;
       this.jugador.animations.add('izquierda', [12, 13, 14, 15], 10, true);
       this.jugador.animations.add('derecha', [4, 5, 6, 7], 10, true);
       this.controles = this.input.keyboard.createCursorKeys();
       this.camera.follow(this.jugador);
     } else {
       this.perdio=this.add.image(0, 1165, 'perdio');      
     }
	}
	update() { if (this.vidas!=0) {
 
       if (this.crear==false) {
         this.create();
         this.crear=true;
       }
       this.physics.arcade.overlap(this.jugador, this.enemigo, this.matar, null, this);
       this.physics.arcade.overlap(this.jugador, this.porro, this.obtener, null, this);
       this.jugador.body.velocity.x = 0;
       this.physics.arcade.collide(this.jugador, this.plataforma);
       if (this.controles.left.isDown) {
         this.jugador.body.velocity.x = -(this.vel);
         this.jugador.animations.play('izquierda');
       } else if (this.controles.right.isDown) {
         this.jugador.body.velocity.x = this.vel;
         this.jugador.animations.play('derecha');
       } else {  
         this.jugador.animations.stop();
         this.jugador.frame = 9;
       }
       if (this.controles.up.isDown && this.jugador.body.touching.down ) {
         this.jugador.body.velocity.y = -350;
         //boom.play();
       }
 		if (this.controles.down.isDown) {
         this.jugador.body.velocity.y = 400;
         //boom.play();
       }
     } else if (this.vidas ==0) {
       this.fondo.kill; 
       this.create();
     }}
 matar(mar, pla) {
   mar.kill();
   this.vidas=this.vidas-1;
   this.crear=false;
 }
  obtener(mar, pla) {
   pla.kill();
   this.vel=300;
 }
    
}
new Game();

