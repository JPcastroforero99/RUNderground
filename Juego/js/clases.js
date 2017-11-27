class Game extends Phaser.Game {

	constructor() {
		super(800, 600, Phaser.AUTO, 'content', null);
		this.state.add('Menu', Menu, false);
        this.state.add('Nivel1', Nivel1, false);
        this.state.add('Nivel2', Nivel2, false);
        this.state.add('Nivel3', Nivel3, false);
        this.state.add('Nivel4', Nivel4, false);
        this.state.add('Nivel5', Nivel5, false);        
		this.state.start('Menu');
	}

}

class Menu extends Phaser.State {   
    constructor(){        
    super(); 

    }
     preload() {
         
         this.load.image('menu', 'sprites/icono.png');
         this.load.image('boton', 'sprites/boton0.png');
         this.load.audio('aud', 'audio/shampoo.mp3');
         this.load.audio('boom', 'audio/numkey.wav');
 }
	create() {	
        
        this.fondo1= this.add.sprite(0,0,'menu'); 	
        this.button = this.add.button(this.world.centerX-100, 300, 'boton', this.actionOnClick);
        this.aud = this.add.audio('aud');
        this.boom = this.add.audio('boom');
        this.aud=this.aud.play('', 0, 0, true);
        
        
	}    
  actionOnClick () { 
   
     this.game.state.start('Nivel1');
      
 }
 
}
class Nivel1 extends Phaser.State {

	constructor() {
		//super(game, x, y, text, { font: "45px Arial", fill: "#ff0044", align: "center" });
        super();
        this.juegogeneral=0; 
     
        }
    
    preload(){
    this.load.image('mapa', 'sprites/mapaM.png');
    this.load.image('nivel2', 'sprites/chaza.png');
    this.load.image('nivel3', 'sprites/musica.png');
    this.load.image('nivel4', 'sprites/ingenieria.png');
    this.load.image('nivel5', 'sprites/humanas.png');
    this.load.spritesheet('pa', 'sprites/sprite.png', 32, 42);
        
    }	
	create() {
		     
     this.physics.startSystem(Phaser.Physics.ARCADE);
     this.add.sprite(0, 0, 'mapa');
    /*
    coloca los 4 sprites en la posicion que son 
    this.add.sprite(0, 0, 'mapa');
    
    */
     this.nivel2 = this.add.sprite(790, 800, 'nivel2');
        this.nivel3 = this.add.sprite(1005, 1005, 'nivel3');
        this.nivel4 = this.add.sprite(750, 250, 'nivel4');
        this.nivel5 = this.add.sprite(285, 750, 'nivel5');
        this.physics.arcade.enable(this.nivel2);
        this.physics.arcade.enable(this.nivel3);
        this.physics.arcade.enable(this.nivel4);
        this.physics.arcade.enable(this.nivel5);
       
        
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
        
    this.contadorniveles = this.add.text((this.world.centerX-100),this.world.centerY-40,(4-this.juegogeneral), { font: '72px Arial', fill: '#fff' });
    this.contadorniveles.visible=true;
    this.textodefinal = this.add.text(this.world.centerX,this.world.centerY+50,' ', { font: '116px Arial', fill: '#000000' });
    this.textodefinal.anchor.setTo(0.5, 0.5);
    this.textodefinal.visible = false;
        
        
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
    
        
        this.physics.arcade.overlap(this.nivel2, this.jugador, this.pasaralnivel2, null, this);
        
 
        this.physics.arcade.overlap(this.nivel3, this.jugador, this.pasaralnivel3, null, this);
   
           this.physics.arcade.overlap(this.nivel4, this.jugador, this.pasaralnivel4, null, this);

           this.physics.arcade.overlap(this.nivel5, this.jugador, this.pasaralnivel5, null, this);

       
    if(this.juegogeneral==4){
     this.contadorniveles.visible=false;   
    this.textodefinal.text=" FELICIDADES \n Te graduaste";
    this.textodefinal.visible = true;  
    }
	}

pasaralnivel2(){
    this.juegogeneral+=1;
    this.game.state.start('Nivel2');
   
    
}    
pasaralnivel3(){
    this.game.state.start('Nivel3');
    this.juegogeneral+=1;
    
}  
pasaralnivel4(){
    this.juegogeneral+=1;
    this.game.state.start('Nivel4');
    
    
}  
pasaralnivel5(){
    this.juegogeneral+=1;
    this.game.state.start('Nivel5');
    

} 
} 
class Nivel2 extends Phaser.State {
   
 	constructor() {
 		//super(game, x, y, text, { font: "45px Arial", fill: "#ff0044", align: "center" });
        super();
        this.vel=100;
        this.vida=true;
         
 		
 	}   
     preload(){
        this.load.image('mapa1', 'sprites/mapan1.png');
        this.load.image('cono', 'sprites/reja.png');
        this.load.spritesheet('pa', 'sprites/sprite.png', 32, 42);
        this.load.image('plataforma', 'sprites/plataforma.png');
        this.load.image('estrella', 'sprites/estrella.png');
        this.load.image('piso', 'sprites/piso.png');
        this.load.image('cucaracha', 'sprites/curacha.png');
        this.load.image('frisbee', 'sprites/frisbee.png');
        this.load.image('balon', 'sprites/balon.png');
        this.load.image('futbol', 'sprites/futbol.png');
        this.load.image('techo', 'sprites/techo.png');
         
     }	
 	create() {
        
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.fondo=this.add.sprite(0, 0, 'mapa1');
        this.estrella = this.add.sprite(9960,495,'estrella'); 
        this.cucaracha = this.add.sprite(6500,485,'cucaracha');
        this.frisbee = this.add.sprite(3200,420,'frisbee');
        this.frisbee1 = this.add.sprite(7200,420,'frisbee');
        this.balon = this.add.sprite(6200,456,'balon');
        this.balon1 = this.add.sprite(9200,456,'balon');
        this.futbol = this.add.sprite(12000,480,'futbol');
        this.techo = this.add.sprite(6430,420,'techo');
        this.physics.arcade.enable(this.estrella);
        this.physics.arcade.enable(this.cucaracha);
        this.physics.arcade.enable(this.frisbee);
        this.physics.arcade.enable(this.frisbee1);
        this.physics.arcade.enable(this.balon);
        this.physics.arcade.enable(this.balon1);
        this.physics.arcade.enable(this.futbol);
        this.physics.arcade.enable(this.techo);
        this.enemigo = this.add.group();
        this.enemigo.enableBody = true;
	    this.plataforma=this.add.group();
        this.plataforma.enableBody = true;
        
	    for(var i=0;i<10000;i+=300){
            this.piso = this.plataforma.create(i, this.fondo.height-76, 'plataforma');
        	this.piso.body.immovable = true;        
        }
        for(var i=400;i<5000;i+=800){
            this.coso = this.enemigo.create(i, 480, 'cono');
            this.coso.body.immovable = true;
        }
        for(var i=5500;i<10000;i+=1200){
            this.coso = this.enemigo.create(i, 480, 'cono');
            this.coso.body.immovable = true;
        }
        this.porro = this.add.sprite(0,524,'piso'); 
        this.physics.arcade.enable(this.piso);
        //this.physics.arcade.enable(this.enemigo);
        this.world.setBounds(0, 0, 10000, 600);
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
        
        this.jugador.body.velocity.x = this.vel;
        this.frisbee.body.velocity.x = -250;
        this.balon.body.velocity.x = -300;
        this.frisbee1.body.velocity.x = -250;
        this.balon1.body.velocity.x = -300;
        this.futbol.body.velocity.x = -125;
        this.physics.arcade.collide(this.jugador, this.plataforma);
        this.jugador.animations.play('derecha');
        this.physics.arcade.overlap(this.jugador, this.enemigo, this.matar, null, this);
        this.physics.arcade.overlap(this.jugador, this.cucaracha, this.empanada, null, this);
        this.physics.arcade.overlap(this.jugador, this.estrella, this.bestrella, null, this);
        this.physics.arcade.overlap(this.jugador, this.frisbee, this.matar, null, this);
        this.physics.arcade.overlap(this.jugador, this.frisbee1, this.matar, null, this);
        this.physics.arcade.overlap(this.jugador, this.balon, this.matar, null, this);
        this.physics.arcade.overlap(this.jugador, this.balon1, this.matar, null, this);
        this.physics.arcade.overlap(this.jugador, this.futbol, this.matar, null, this);
        this.physics.arcade.overlap(this.jugador, this.techo, this.salo, null, this);
        if(this.vida==true){
            this.vel=this.vel+0.3;
            this.vely=-250;
            if (this.controles.up.isDown && this.jugador.body.touching.down ) {
                this.jugador.body.velocity.y = this.vely;
                //boom.play();
                }
            if (this.controles.down.isDown) {
                this.jugador.animations.play('agacharse');
                this.jugador.body.velocity.y = 500;
          //boom.play();
            }
        }
    
    }
    matar(mar, pla) {
         this.vel=0;
         this.jugador.animations.stop();
         this.jugador.frame = 9;
         this.vida=false;
        this.input.onTap.addOnce(this.restart,this);
    }
    
    restart(){
        
        this.vel=100;
        this.vida=true;
        this.create();
    }
    
    bestrella(mar, pla) {
        pla.kill();
        this.game.state.start('Nivel1');
    }
    empanada(mar, pla){
        this.vel=150;
    }
    salo(mar, pla){
        this.vely=-370;
    }
    
}
class Nivel3 extends Phaser.State {
 
 	constructor() {
 		//super(game, x, y, text, { font: "45px Arial", fill: "#ff0044", align: "center" });
         super();  
         this.vel=150;
        this.vidas=3;
        this.salt=350;
        this.balaTime = 0;
        
 	}   
     preload(){
     
    this.load.image('plataforma', 'sprites/plataforma.png');
    this.load.spritesheet('pa', 'sprites/sprite.png', 32, 42);
    this.load.image('fondo', 'sprites/fondo.png');
    this.load.image('enemigo', 'sprites/enemigo.png');
    this.load.image('profesor', 'sprites/profesor.png');
    this.load.image('perdio', 'sprites/perdio.png');
    this.load.image('estrella', 'sprites/estrella.png');
    this.load.image('porro', 'sprites/porro.png');
        this.load.image('profesorbala', 'sprites/parcial1.png');
        
    
  }	
 	create() {
 		if (this.vidas!=0) {
      	console.log(20);
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.fondo = this.add.sprite(0, 0, 'fondo');
        this.enemigo= this.add.sprite(100, 910, 'enemigo');
        this.enemigo2= this.add.sprite(750, 400, 'profesor');
        this.porro= this.add.sprite(700, 1064, 'porro');
        this.estrella = this.add.sprite(10,10,'estrella'); 
        this.physics.arcade.enable(this.enemigo);
        this.physics.arcade.enable(this.enemigo2);
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
            
        this.profesorbalas = this.add.group();
    this.profesorbalas.enableBody = true;
    this.profesorbalas.physicsBodyType = Phaser.Physics.ARCADE;
    this.profesorbalas.createMultiple(3, 'profesorbala');
    this.profesorbalas.setAll('anchor.x', 0.5);
    this.profesorbalas.setAll('anchor.y', 1);
    this.profesorbalas.setAll('outOfBoundsKill', true);
    this.profesorbalas.setAll('checkWorldBounds', true);
            
     this.profesorbalas2 = this.add.group();
    this.profesorbalas2.enableBody = true;
    this.profesorbalas2.physicsBodyType = Phaser.Physics.ARCADE;
    this.profesorbalas2.createMultiple(1, 'profesorbala');
    this.profesorbalas2.setAll('anchor.x', 0.5);
    this.profesorbalas2.setAll('anchor.y', 1);
    this.profesorbalas2.setAll('outOfBoundsKill', true);
    this.profesorbalas2.setAll('checkWorldBounds', true);

    this.estadodelnivel = this.add.text(200,800,' ', { font: '84px Arial', fill: '#fff' });
    this.estadodelnivel.anchor.setTo(0.5, 0.5);
    this.estadodelnivel.visible = false;

            
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
        this.physics.arcade.overlap(this.jugador, this.enemigo2, this.matar, null, this);
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
              
        this.profesordispara();
        this.profesordispara2();
        
        this.physics.arcade.overlap(this.profesorbalas, this.jugador, this.enemigomegolpea, null, this);
        this.physics.arcade.overlap(this.profesorbalas2, this.jugador, this.enemigomegolpea, null, this);

      } else if (this.vidas ==0) {
        this.fondo.kill; 
        this.create();
        this.input.onTap.addOnce(this.restart,this);
      }}
    
    enemigomegolpea(mar,pla){
     mar.kill();
    this.vidas=this.vidas-1;
    this.crear=false;        
    }
  matar(mar, pla) {
    mar.kill();
    this.vidas=this.vidas-1;
    this.crear=false;
  }
    profesordispara () {
    
        this.balaenemigo = this.profesorbalas.getFirstExists(false);
        if (this.balaenemigo){        
        var shooter=this.enemigo;      
        this.balaenemigo.reset(shooter.body.x, shooter.body.y);
        this.physics.arcade.moveToObject(this.balaenemigo,this.jugador,300);        
    } 
    }
    profesordispara2 () {
    
        this.balaenemigo = this.profesorbalas2.getFirstExists(false);
        if (this.balaenemigo){        
        var shooter=this.enemigo2;      
        this.balaenemigo.reset(shooter.body.x, shooter.body.y);
        this.physics.arcade.moveToObject(this.balaenemigo,this.jugador,300);        
    }
    }

   pvolar(mar, pla) {
    pla.kill();
    this.salt=400;
    this.vel=350;
  }
   bestrella(mar, pla) {
    pla.kill();
    this.game.state.start('Nivel1');
  }
    
restart(){
     this.vel=150;
        this.vidas=3;
        this.salt=350;
        this.balaTime = 0;
    this.crear=false;
}
 
     
 }
class Nivel4 extends Phaser.State {

	constructor() {
        super();
		this.temporizadorestudios=0;
        var items;
        this.contador=0;
        var dormir;
        var vive100;
        this.loseup=0;
        this.powerup=0;
        this.vivo=true;

	}   
    preload(){
        
this.load.image('salondeclases', 'sprites/background.png');
this.load.spritesheet('items', 'sprites/cosas que caen.png', 82, 98);		
this.load.image('vive100', 'sprites/vive.png');
this.load.image('dormir', 'sprites/zzz.png');        


   
 }	
	create() {
				this.add.sprite(0, 0,'salondeclases');


this.physics.startSystem(Phaser.Physics.ARCADE);
this.physics.arcade.gravity.y = 200+(this.contador*3)-(this.powerup)+(this.loseup);
        
this.estadodelnivel = this.add.text(300,300,' ', { font: '84px Arial', fill: '#FBFF00' });
this.estadodelnivel.anchor.setTo(0.5, 0.5);
this.estadodelnivel.visible = false;
        
this.marcadorString = 'Faltan: ';
this.contadoritems = this.add.text(10, 10,this.contador , { font: '34px Arial', fill: '#fff' });

	}
	update() {
        this.temporizadorestudios += this.time.elapsed;
    if(this.vivo) {   
 	if(this.temporizadorestudios > 1000) {
 		this.temporizadorestudios = 0;
 		var posicioncaida = Math.floor(Math.random()*590);
 		var items = this.add.sprite(posicioncaida, 50, 'items');
        this.physics.enable(items, Phaser.Physics.ARCADE);
        items.body.velocity.y = 150+(this.contador*5)-(this.powerup*5)+(this.loseup*5);
        var tipodeutil = Math.floor(Math.random()*5);
        items.animations.add('anim', [tipodeutil], 10, true);
		items.animations.play('anim');
 		items.inputEnabled = true;
 		items.events.onInputDown.add(this.clickitem, this);
 		items.checkWorldBounds = true;
        items.events.onOutOfBounds.add(this.lose, this);
 		this.physics.enable(items, Phaser.Physics.ARCADE);
        if(this.contador%10==0){ 
        this.temporizadorestudios = 0;
        var posicioncaida = Math.floor(Math.random()*590);
 		var dormir = this.add.sprite(posicioncaida, 50, 'dormir');        
 		dormir.inputEnabled = true;
 		dormir.events.onInputDown.add(this.clickdormir, this);
 		this.physics.enable(dormir, Phaser.Physics.ARCADE);
        }
        if(this.contador%14==0){ 
        var posicioncaida = Math.floor(Math.random()*590);
 		var vive100 = this.add.sprite(posicioncaida, 50, 'vive100');        
 		vive100.inputEnabled = true;
 		vive100.events.onInputDown.add(this.clickvive100, this);
 		this.physics.enable(vive100, Phaser.Physics.ARCADE);
        }
        
        if(this.contador==70){  
            this.vivo=false;
            this.estadodelnivel.text="GANASTE, CLICK \n PARA AVANZAR";
            this.estadodelnivel.visible = true;     
            this.input.onTap.addOnce(this.avanzar,this);
            var items=0;
        }
     }
    }
    }
     lose(){
    this.vivo=false;    
	this.estadodelnivel.text=" Click, reintentar";
    this.estadodelnivel.visible = true;     
    this.input.onTap.addOnce(this.reiniciar,this);
    var items=0;

}    
reiniciar(){
this.vivo=true;
this.contador=0;
    this.estadodelnivel.visible = false;  
}
 avanzar(){
     
     this.game.state.start('Nivel1');
 }     
 clickitem(items){
	items.kill();
    this.contador=this.contador+1;
     this.contadoritems.text=70-this.contador;
     this.contadoritems.visible = true;
 }
clickdormir(dormir){
	dormir.kill();
    loseup +=5;
 } 
clickvive100(vive100){
	vive100.kill();
    powerup +=5;
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
        this.contadoritems;
        this.vidas;
        this.balaenemigo;
        this.timerdedisparo = 0;
        this.stateText;
        this.etapas=1;
        

        
	}   
    preload(){
        
    this.load.image('bala', 'sprites/bullet.png');
    this.load.image('esmadbala', 'sprites/granda.png');
    this.load.spritesheet('enemigo', 'sprites/policia.png', 32, 42);
    this.load.image('capuchovida', 'sprites/player.png');
    this.load.spritesheet('kaboom', 'sprites/explode.png', 128, 128);
    this.load.image('starfield', 'sprites/porteria.png');
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
    this.esmadbalas.createMultiple(20, 'esmadbala');
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
    this.contadoritems = this.add.text(10, 10, this.etapas, { font: '34px Arial', fill: '#fff' });

    
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
    this.contadoritems.text = this.etapas;
   

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

    
    var explosion = this.explosions.getFirstExists(false);
    explosion.reset(this.capucho.body.x, this.capucho.body.y);
    explosion.play('kaboom', 30, false, true);

    
    if (this.vidas.countLiving() < 1)
    {
        this.capucho.kill();
        this.esmadbalas.callAll('kill');

        this.stateText.text=" GAME OVER \n Click to restart";
        this.stateText.visible = true;

        
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