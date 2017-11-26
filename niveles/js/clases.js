class Game extends Phaser.Game {

	constructor() {
		super(800, 600, Phaser.AUTO, 'content', null);
		this.state.add('Menu', Menu, false);
        this.state.add('Nivel1', Nivel1, false);
        this.state.add('Nivel2', Nivel2, false);
        this.state.add('Nivel3', Nivel3, false);
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
this.barr;
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
this.salt=350;

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
   //this.boton=1;
     this.game.state.start('Nivel1');
      
 }
  Click () {
 
   this.boton=2;
      this.game.state.start('Nivel3');
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
     this.jugador = this.add.sprite(790, 900, 'pa');
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
        this.salt=350;
        
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
        this.estrella = this.add.sprite(10,10,'estrella'); 
        this.physics.arcade.enable(this.enemigo);
        this.physics.arcade.enable(this.porro);
        this.physics.arcade.enable(this.estrella);
        this.plataforma=this.add.group();
        this.plataforma.enableBody = true; 
        this.piso = this.plataforma.create(0, this.fondo.height - 32, 'plataforma');
        this.piso.scale.setTo(4, 1);
        this.piso.body.immovable = true;
        for (var i= 0; i<17; i++) {
          if (i==0||i==4||i==8||i==12||i==16) {
            this.barra = this.plataforma.create(-200, 1550-i*100, 'plataforma');
            this.barra.body.immovable = true;
              this.barra = this.plataforma.create(250, 1550-i*100, 'plataforma');
            this.barra.body.immovable = true;
              this.barra = this.plataforma.create(700, 1550-i*100, 'plataforma');
            this.barra.body.immovable = true;              
          }if (i==1||i==5||i==9||i==13||i==17) {
            this.barra = this.plataforma.create(100, 1550-i*200, 'plataforma');
            this.barra.body.immovable = true;
              this.barra = this.plataforma.create(500, 1550-i*200, 'plataforma');
            this.barra.body.immovable = true;            
          }if (i==2||i==6||i==10||i==14) {
            this.barra = this.plataforma.create(-100, 1550-i*200, 'plataforma');
            this.barra.body.immovable = true;       
              this.barra = this.plataforma.create(350, 1550-i*200, 'plataforma');
              this.barra.body.immovable = true;              
              this.barra = this.plataforma.create(700, 1550-i*200, 'plataforma');
            this.barra.body.immovable = true;         
          }if (i==3||i==7||i==11||i==15) {
            this.barra = this.plataforma.create(0, 1550-i*200, 'plataforma');
            this.barra.body.immovable = true;
              this.barra = this.plataforma.create(500, 1550-i*200, 'plataforma');
            this.barra.body.immovable = true;           
          }
        }
         
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
          this.boton1 = this.add.button(this.world.centerX-100, 1500, 'boton', this.Clic);
      }
 	}
 	update() { if (this.vidas!=0) {
        
        if (this.crear==false) {
          this.create();
          this.crear=true;
        }
        this.physics.arcade.overlap(this.jugador, this.enemigo, this.matar, null, this);
        this.physics.arcade.overlap(this.jugador, this.porro, this.pvolar, null, this);
        this.physics.arcade.overlap(this.jugador, this.estrella, this.bestrella, null, this);
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
          this.jugador.body.velocity.y = -(this.salt);
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
   pvolar(mar, pla) {
    pla.kill();
    this.salt=400;
  }
   bestrella(mar, pla) {
    pla.kill();
    this.game.state.start('Nivel1');
  }
     Clic () {
      this.game.state.start('Nivel2');
         this.vidas=3;
 }
     
 }
 class Nivel3 extends Phaser.State {
 
 	constructor() {
 		//super(game, x, y, text, { font: "45px Arial", fill: "#ff0044", align: "center" });
         super();
         
         
 		
 	}   
     preload(){
     this.load.image('mapa1', 'sprites/mapan1.png');
     this.load.image('reja', 'sprites/reja.png');
     this.load.spritesheet('pa', 'sprites/sprite.png', 32, 42);
    this.load.image('plataforma', 'sprites/plataforma.png');
         this.load.image('estrella', 'sprites/estrella.png');
         this.load.image('piso', 'sprites/piso.png');
         
     }	
 	create() {
        
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.fondo=this.add.sprite(0, 0, 'mapa1');
        this.estrella = this.add.sprite(3160,495,'estrella'); 
        
        this.physics.arcade.enable(this.estrella);
        
        this.enemigo = this.add.group();
        this.enemigo.enableBody = true;
	    this.plataforma=this.add.group();
        this.plataforma.enableBody = true;
        
	    for(var i=0;i<3200;i+=300){
            	this.piso = this.plataforma.create(i, this.fondo.height-100, 'plataforma');
        	this.piso.body.immovable = true;        
        }
        for(var i=400;i<3200;i+=600){
        this.coso = this.enemigo.create(i, 500, 'reja');
            this.coso.body.immovable = true;
        }
        this.porro = this.add.sprite(0,0,'piso'); 
        this.physics.arcade.enable(this.piso);
        //this.physics.arcade.enable(this.enemigo);
        this.world.setBounds(0, 0, 3200, 640);
      	this.jugador = this.add.sprite(0, 480, 'pa');
      	this.physics.arcade.enable(this.jugador);
	    this.jugador.body.gravity.y = 400;
      	this.jugador.body.collideWorldBounds = true;
      	this.jugador.animations.add('derecha', [4, 5, 6, 7], 10, true);
        this.jugador.animations.add('agacharse', [16],10,true);
      	this.controles = this.input.keyboard.createCursorKeys();
      	this.camera.follow(this.jugador);
 	}
 	update() {
           this.jugador.body.velocity.x = 350;
        this.physics.arcade.collide(this.jugador, this.plataforma);
        this.jugador.animations.play('derecha');
        this.physics.arcade.overlap(this.jugador, this.enemigo, this.matar, null, this);
        this.physics.arcade.overlap(this.jugador, this.estrella, this.bestrella, null, this);
        if (this.controles.up.isDown && this.jugador.body.touching.down ) {
          this.jugador.body.velocity.y = -250;
          //boom.play();
        }
        if (this.controles.down.isDown) {
            this.jugador.animations.play('agacharse');
          this.jugador.body.velocity.y = 250;
          //boom.play();
        }
    
}
     matar(mar, pla) {
    mar.kill();
  }
     bestrella(mar, pla) {
    pla.kill();
    this.game.state.start('Nivel2');
  }
}
 new Game();