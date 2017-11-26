class Game extends Phaser.Game {

	constructor() {
		super(800, 600, Phaser.AUTO, 'content', null);
		this.state.add('Menu', Menu, false);
        this.state.add('Nivel1', Nivel1, false);
        this.state.add('Nivel2', Nivel2, false);
        this.state.add('Nivel3', Nivel3, false);
        this.state.add('Nivel4', Nivel4, false);
        this.state.add('Nivel5', Nivel5, false)        
		this.state.start('Nivel5');
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
   this.load.image('bala', 'sprites/bala.png');
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
    this.vel=250;
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
    this.game.state.start('Nivel4');
  }
}
class Nivel4 extends Phaser.State {

	constructor() {
		super();  
        this.candyTimer=0;
        var candy;
        this.contador=0;
	}   
    preload(){
        
    this.load.image('sky', 'sprites/background.png');
			this.load.spritesheet('candy', 'sprites/candy.png', 82, 98);		
			this.load.image('gameover', 'sprites/gameover.png');


   
 }	
	create() {
		this.add.sprite(0, 0, 'sky');



// start the physics engine
this.physics.startSystem(Phaser.Physics.ARCADE);
// set the global gravity
this.physics.arcade.gravity.y = 200;


	}
	update() {
        this.candyTimer += this.time.elapsed;
 	//if spawn timer reach one second (1000 miliseconds)
 	if(this.candyTimer > 1000) {
 		// reset it
 		this.candyTimer = 0;
 		// and spawn new candy
 				var dropPos = Math.floor(Math.random()*590);
 		var candy = this.add.sprite(dropPos, 50, 'candy');
 				var candyType = Math.floor(Math.random()*5);
 				candy.animations.add('anim', [candyType], 10, true);
		// play the newly created animation
		candy.animations.play('anim');

 		candy.inputEnabled = true;
 		candy.events.onInputDown.add(this.clickCandy, this);
 		candy.checkWorldBounds = true;
// reset candy when it goes out of screen
candy.events.onOutOfBounds.add(this.lose, this);

 		this.physics.enable(candy, Phaser.Physics.ARCADE); 
        
        if(this.contador==20){
            
            this.add.sprite(20, 300, 'gameover');
            
        }


     }
    
    }
     lose(){
	this.add.sprite(20, 300, 'gameover');
    this.game.state.start('Nivel1');
	

}
 clickCandy(candy){
	candy.kill();
    this.contador=this.contador+1;
 }


    
}
class Nivel5 extends Phaser.State {

	constructor() {
		super();  
        this.capucho;
        this.esmads;
        this.balas;
        this.balaTime = 0;
        this.cursors;
        this.botondedisparo;
        this.explosions;
        this.starfield;
        this.marcador = 0;
        this.marcadorString = '';
        this.marcadorText;
        this.vidas;
        this.balaenemigo;
        this.timerdedisparo = 0;
        this.stateText;
        this.etapas=1;
        

        
	}   
    preload(){
        
    this.load.image('bala', 'sprites/bullet.png');
    this.load.image('esmadbala', 'sprites/enemy-bullet.png');
    this.load.spritesheet('enemigo', 'sprites/invader32x32x4.png', 32, 32);
    this.load.image('capuchovida', 'sprites/player.png');
    this.load.spritesheet('kaboom', 'sprites/explode.png', 128, 128);
    this.load.image('starfield', 'sprites/starfield.png');
    this.load.image('background', 'sprites/background2.png');


   
 }	
	create() {
		this.physics.startSystem(Phaser.Physics.ARCADE);

    
    this.starfield = this.add.tileSprite(0, 0, 800, 600, 'starfield');
    this.world.setBounds(0, 0, 800, 600);

    
    this.balas = this.add.group();
    this.balas.enableBody = true;
    this.balas.physicsBodyType = Phaser.Physics.ARCADE;
    this.balas.createMultiple(30, 'bala');
    this.balas.setAll('anchor.x', 0.5);
    this.balas.setAll('anchor.y', 1);
    this.balas.setAll('outOfBoundsKill', true);
    this.balas.setAll('checkWorldBounds', true);

    
    this.esmadbalas = this.add.group();
    this.esmadbalas.enableBody = true;
    this.esmadbalas.physicsBodyType = Phaser.Physics.ARCADE;
    this.esmadbalas.createMultiple(30, 'esmadbala');
    this.esmadbalas.setAll('anchor.x', 0.5);
    this.esmadbalas.setAll('anchor.y', 1);
    this.esmadbalas.setAll('outOfBoundsKill', true);
    this.esmadbalas.setAll('checkWorldBounds', true);

    
    this.capucho = this.add.sprite(400, 500, 'capuchovida');
    this.capucho.anchor.setTo(0.5, 0.5);
    this.physics.enable(this.capucho, Phaser.Physics.ARCADE);
    this.capucho.body.collideWorldBounds = true;

    
    this.esmads = this.add.group();
    this.esmads.enableBody = true;
    this.esmads.physicsBodyType = Phaser.Physics.ARCADE;

    this.createesmads();

    
    this.marcadorString = 'ETAPA: ';
    this.marcadorText = this.add.text(10, 10, this.etapas, { font: '34px Arial', fill: '#fff' });

    
    this.vidas = this.add.group();
    this.add.text(this.world.width - 100, 10, 'Vidas ', { font: '34px Arial', fill: '#fff' });

    
    this.stateText = this.add.text(this.world.centerX,this.world.centerY,' ', { font: '84px Arial', fill: '#fff' });
    this.stateText.anchor.setTo(0.5, 0.5);
    this.stateText.visible = false;

    for (var i = 0; i < 3; i++) 
    {
        var capuchovida = this.vidas.create(this.world.width - 100 + (30 * i), 60, 'capuchovida');
        capuchovida.anchor.setTo(0.5, 0.5);
        capuchovida.angle = 90;
        capuchovida.alpha = 0.4;
    }

    
    this.explosions = this.add.group();
    this.explosions.createMultiple(30, 'kaboom');
    this.explosions.forEach(this.configurarenemigo, this);

    
    this.cursors = this.input.keyboard.createCursorKeys();
    this.botondedisparo = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    



	}
    createesmads () {

    for (var y = 0; y < 4; y++)
    {
        for (var x = 0; x < 10; x++)
        {
            var esmad = this.esmads.create(x * 48, y * 50, 'enemigo');
            esmad.anchor.setTo(0.5, 0.5);
            esmad.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
            esmad.play('fly');
            esmad.body.moves = false;
        }
    }

    this.esmads.x = 100;
    this.esmads.y = 50;

    
    var tween = this.add.tween(this.esmads).to( { x: 300 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

    
    tween.onLoop.add(this.descend, this);
}
    configurarenemigo (enemigo) {

    enemigo.anchor.x = 0.5;
    enemigo.anchor.y = 0.5;
    enemigo.animations.add('kaboom');

}
    descend() {

    this.esmads.y += 80;

}
	update() {
        
    this.starfield.tilePosition.y += 2;

    if (this.capucho.alive)
    {
        
        this.capucho.body.velocity.setTo(0, 0);

        if (this.cursors.left.isDown)
        {
            this.capucho.body.velocity.x = -200;
        }
        else if (this.cursors.right.isDown)
        {
            this.capucho.body.velocity.x = 200;
        } 
        
        if (this.botondedisparo.isDown)
        {
            this.firebala();
        }

        
            this.esmaddispara();
        

        
        this.physics.arcade.overlap(this.balas, this.esmads, this.golpearenemigo, null, this);
        this.physics.arcade.overlap(this.esmadbalas, this.capucho, this.esmadgolpeajugador, null, this);
        this.physics.arcade.overlap(this.balas, this.esmadbalas, this.balavsbala, null, this);
        
    }


        
     }  
   
    balavsbala(bala,balaenemigo){
       this.bala.kill();
        balaenemigo.kill();
        
    }
    golpearenemigo (bala, esmad) {

    
    this.bala.kill();
    esmad.kill(); 
    this.marcadorText.text = this.etapas;
   

    //  And create an explosion :)
    var explosion = this.explosions.getFirstExists(false);
    explosion.reset(esmad.body.x, esmad.body.y);
    explosion.play('kaboom', 30, false, true);
        
    if (this.etapas==5){
        
        this.esmadbalas.callAll('kill',this);
        this.stateText.text=" CLICK PARA \n AVANZAR";
        this.stateText.visible = true;
        this.input.onTap.addOnce(this.siguientejuego,this);
        
    } else if (this.esmads.countLiving() == 0 ){
    this.etapas+=1;
    this.esmadbalas.callAll('kill',this);
    this.createesmads();
        
    }
    }    
    esmadgolpeajugador (capucho,bala) {
    
     this.esmadbalas.callAll('kill');

    this.live = this.vidas.getFirstAlive();

    if (this.live)
    {
        this.live.kill();
        
    }

    //  And create an explosion :)
    var explosion = this.explosions.getFirstExists(false);
    explosion.reset(this.capucho.body.x, this.capucho.body.y);
    explosion.play('kaboom', 30, false, true);

    // When the capucho dies
    if (this.vidas.countLiving() < 1)
    {
        this.capucho.kill();
        this.esmadbalas.callAll('kill');

        this.stateText.text=" GAME OVER \n Click to restart";
        this.stateText.visible = true;

        //the "click to restart" handler
        this.input.onTap.addOnce(this.restart,this);
    }

}
    esmaddispara () {
        var livingEnemies = new Array(0);
        var largo=livingEnemies.length;
        this.balaenemigo = this.esmadbalas.getFirstExists(false);
    this.esmads.forEachAlive(function(esmad){
            livingEnemies.push(esmad);       
        
    });

    if (this.balaenemigo){
    
        if(this.esmads.countLiving() != 0){
        var random=this.rnd.integerInRange(0,livingEnemies.length-1);
            var shooter=livingEnemies[random];        
            this.balaenemigo.reset(shooter.body.x, shooter.body.y);

        this.physics.arcade.moveToObject(this.balaenemigo,this.capucho,70*this.etapas);
        this.timerdedisparo = this.time.now + 7000*this.etapas;
    }        
    }

}
    firebala () {

        if (this.time.now > this.balaTime)
    {
                this.bala = this.balas.getFirstExists(false);

        if (this.bala)
        {
                        this.bala.reset(this.capucho.x, this.capucho.y + 8);
            this.bala.body.velocity.y = -400;
            this.balaTime = this.time.now + 200;
        }
    }

}
    resetbala (bala) {

    
    this.bala.kill();

}
    restart () {

    this.etapas=1;
     this.vidas.callAll('revive');
     this.esmads.removeAll();
    this.createesmads();

     this.capucho.revive();
    this.stateText.visible = false;
   

}
    siguientejuego(){
        
        this.game.state.start('Nivel1');
        
    }
}

 new Game();