

if (vidas!=0) {
    	
      juego.physics.startSystem(Phaser.Physics.ARCADE);
      fondo = juego.add.sprite(0, 0, 'fondo');
      enemigo= juego.add.sprite(100, 1690, 'enemigo');
      porro= juego.add.sprite(700, 1064, 'porro');
      juego.physics.arcade.enable(enemigo);
      juego.physics.arcade.enable(porro);
      plataforma=juego.add.group();
      plataforma.enableBody = true; 
      var piso = plataforma.create(0, fondo.height - 32, 'plataforma');
      piso.scale.setTo(2, 1);
      piso.body.immovable = true;
      for (var i= 0; i<17; i++) {
        if (i%2==0) {
          barra = plataforma.create(400, 1550-i*100, 'plataforma');
          barra.body.immovable = true;
        } else if (i%2!=0) {
          barra = plataforma.create(-200, 1550-i*100, 'plataforma');
          barra.body.immovable = true;
        }
      }
      estrella = juego.add.sprite(10,10,'estrella');


      juego.world.setBounds(0, 0, 800, 1764);
      jugador = juego.add.sprite(200, 1668, 'pa');
      juego.physics.arcade.enable(jugador);
      jugador.body.gravity.y = 300;
      jugador.body.collideWorldBounds = true;
      jugador.animations.add('izquierda', [12, 13, 14, 15], 10, true);
      jugador.animations.add('derecha', [4, 5, 6, 7], 10, true);
      controles = juego.input.keyboard.createCursorKeys();
      juego.camera.follow(jugador);}
	  
	   else {
      perdio=juego.add.image(0, 1165, 'perdio');      
    }


else if (boton==2) {
    if (vidas!=0) {

      if (crear==false) {
        create();
        crear=true;
      }
      juego.physics.arcade.overlap(jugador, enemigo, matar, null, this);
      juego.physics.arcade.overlap(jugador, porro, obtener, null, this);
      jugador.body.velocity.x = 0;
      juego.physics.arcade.collide(jugador, plataforma);
      if (controles.left.isDown) {
        jugador.body.velocity.x = -(vel);
        jugador.animations.play('izquierda');
      } else if (controles.right.isDown) {
        jugador.body.velocity.x = vel;
        jugador.animations.play('derecha');
      } else {  
        jugador.animations.stop();
        jugador.frame = 9;
      }
      if (controles.up.isDown && jugador.body.touching.down ) {
        jugador.body.velocity.y = -350;
        boom.play();
      }
		if (controles.down.isDown) {
        jugador.body.velocity.y = 400;
      }
    } else if (vidas ==0) {
      fondo.kill; 
      create();
    }
  }