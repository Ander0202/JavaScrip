let citas = [
  {
    'autor': 'Steve Jobs',
    'texto': 'El futuro pertenece a quienes creen en la belleza de sus sueños.'
  },
  {
    'autor': 'Maya Angelou',
    'texto': 'Hay no mas un miedo que ha de ser conquistado cada día.'
  },
  {
    'autor': 'Nelson Mandela',
    'texto': 'Siempre parece imposible hasta que se hace.'
  },
  {
    'autor': 'Walt Disney',
    'texto': 'Si puedes soñarlo, puedes hacerlo.'
  },
  {
    'autor': 'Oprah Winfrey',
    'texto': 'Cree en ti mismo y todo es posible.'
  },
  {
    'autor': 'Muhammad Ali',
    'texto': 'Servir a otros es el alquiler que pagas por tu cuarto en el cielo.'
  },
  {
    'autor': 'Mahatma Gandhi',
    'texto': 'En un conflicto entre el corazón y el cerebro, sigue tu corazón.'
  },
  {
    'autor': 'Eleanor Roosevelt',
    'texto': 'El futuro pertenece a quienes creen en sus sueños.'
  },
  {
    'autor': 'Martin Luther King Jr.',
    'texto': 'Mantén tus ojos en las estrellas y los pies en el suelo.'
  },
  {
    'autor': 'Tony Robbins',
    'texto': 'El éxito es la suma de pequeños esfuerzos realizados día tras día.'
  },
  {
    'autor': 'Brian Tracy',
    'texto': 'El único lugar donde el éxito viene antes que el trabajo es en el diccionario.'
  },
  {
    'autor': 'Zig Ziglar',
    'texto': 'Puedes tener todo en la vida si ayudas a otros a obtener lo que quieren.'
  },
  {
    'autor': 'Jim Rohn',
    'texto': 'Tus ingresos crecerán en la medida en que tu educación lo haga.'
  },
  {
    'autor': 'Robert Kiyosaki',
    'texto': 'La inteligencia financiera es saber qué hacer con tu dinero.'
  },
  {
    'autor': 'Les Brown',
    'texto': 'La vida te toma en serio, así que ¡hazlo tú también!'
  },
  {
    'autor': 'Wayne Dyer',
    'texto': 'Cambia tus pensamientos y cambiarás tu mundo.'
  },
  {
    'autor': 'Louise Hay',
    'texto': 'Hoy es el primer día del resto de tu vida.'
  },
  {
    'autor': 'Paulo Coelho',
    'texto': 'Es la posibilidad de realización la que hace hermosa la vida.'
  },
  {
    'autor': 'Deepak Chopra',
    'texto': 'El verdadero éxito es descubrir el propósito de tu vida.'
  },
  {
    'autor': 'Jack Canfield',
    'texto': 'La gratitud es el atajo más rápido hacia la alegría.'
  },
  {
    'autor': 'James Allen',
    'texto': 'Como hombre piensa en su corazón, así es él.'
  },
  {
    'autor': 'Napoleon Hill',
    'texto': 'Si crees que puedes, tienes razón. Si crees que no puedes, también.'
  },
  {
    'autor': 'Dale Carnegie',
    'texto': 'La única forma de hacer un gran trabajo es amar lo que haces.'
  },
  {
    'autor': 'Stephen Covey',
    'texto': 'Comienza con el fin en la mente.'
  },
  {
    'autor': 'Peter Drucker',
    'texto': 'El futuro no se predice, se crea.'
  },
  {
    'autor': 'Seth Godin',
    'texto': 'Las ideas que cambian el mundo no son las más inteligentes, sino las más audaces.'
  },
  {
    'autor': 'Gary Vaynerchuk',
    'texto': 'No esperes a que las condiciones sean perfectas. Comienza ahora.'
  },
  {
    'autor': 'Simon Sinek',
    'texto': 'Los líderes grandes inspiran a otros a creer en ellos mismos.'
  },
  {
    'autor': 'Sheryl Sandberg',
    'texto': 'La vulnerabilidad es fortaleza, no debilidad.'
  },
  {
    'autor': 'Malala Yousafzai',
    'texto': 'Levantamos nuestras voces no para gritar sino para que los sordos puedan oír.'
  },
  {
    'autor': 'Michelle Obama',
    'texto': 'Tus estudios son tu futuro, el futuro de tu familia y el de tu país.'
  },
  {
    'autor': 'Arianna Huffington',
    'texto': 'El éxito no es solo dinero y poder, es tener sentido de propósito.'
  },
  {
    'autor': 'Indra Nooyi',
    'texto': 'Cuando eres apasionado, todo es posible.'
  },
  {
    'autor': 'Satya Nadella',
    'texto': 'El aprendizaje debe ser una disciplina constante en nuestras vidas.'
  },
  {
    'autor': 'Elon Musk',
    'texto': 'Si algo es lo suficientemente importante, lo haces incluso si los óptimos no son buenos.'
  },
  {
    'autor': 'Jeff Bezos',
    'texto': 'El dolor es temporal, la gloria es para siempre.'
  },
  {
    'autor': 'Mark Zuckerberg',
    'texto': 'La idea de una persona que podría cambiar todo es ridícula hasta que lo hace.'
  },
  {
    'autor': 'Jack Ma',
    'texto': 'Los sueños son solo el primer paso del éxito.'
  },
  {
    'autor': 'Richard Branson',
    'texto': 'Rodéate de personas que te desafíen, inspiren y levanten.'
  },
  {
    'autor': 'Warren Buffett',
    'texto': 'Alguien está sentado a la sombra hoy porque plantó un árbol hace años.'
  },
  {
    'autor': 'Bill Gates',
    'texto': 'La ignorancia y la arrogancia rara vez funcionan bien juntas.'
  },
  {
    'autor': 'Melinda Gates',
    'texto': 'Cuando se trata de riqueza, el éxito es estar contento con lo que tienes.'
  },
  {
    'autor': 'Reed Hastings',
    'texto': 'La innovación requiere permiso para fracasar.'
  },
  {
    'autor': 'Susan Wojcicki',
    'texto': 'La persistencia es el camino al éxito.'
  },
  {
    'autor': 'Sundar Pichai',
    'texto': 'La tecnología es para todos, no solo para los privilegiados.'
  },
  {
    'autor': 'Sheryl Sandberg',
    'texto': 'Siéntate a la mesa y sé parte de la conversación.'
  },
  {
    'autor': 'Marissa Mayer',
    'texto': 'El perfeccionismo es el enemigo de la acción.'
  },
  {
    'autor': 'Susan Cain',
    'texto': 'Los introvertidos no necesitan cambiar. Solo necesitan ser comprendidos.'
  },
  {
    'autor': 'Brené Brown',
    'texto': 'La vulnerabilidad no es debilidad, es nuestro mayor acto de coraje.'
  },
  {
    'autor': 'Elizabeth Gilbert',
    'texto': 'Crea la vida que deseas vivir.'
  },
  {
    'autor': 'Chimamanda Ngozi Adichie',
    'texto': 'Todas las historias importan, incluso la tuya.'
  },
  {
    'autor': 'Margaret Atwood',
    'texto': 'Un objeto en movimiento es más fácil de cambiar de dirección que uno en reposo.'
  },
  {
    'autor': 'Jane Goodall',
    'texto': 'Todos los individuos pueden marcar la diferencia en el mundo.'
  },
  {
    'autor': 'Greta Thunberg',
    'texto': 'Ya no podemos permitirnos el lujo de esperar.'
  },
  {
    'autor': 'Billie Eilish',
    'texto': 'Mi vida, mi decisiones. Mi éxito, mi fracaso.'
  },
  {
    'autor': 'Taylor Swift',
    'texto': 'No importa lo que hagas, alguien siempre tendrá algo que decir.'
  },
  {
    'autor': 'Beyoncé',
    'texto': 'He aprendido que el éxito no es algo que se le da, es algo que se gana.'
  },
  {
    'autor': 'Rihanna',
    'texto': 'La vida es un viaje, no un destino.'
  },
  {
    'autor': 'Dwayne Johnson',
    'texto': 'El dolor es temporal, pero las películas son para siempre.'
  },
  {
    'autor': 'Tom Hanks',
    'texto': 'Si es destino, pasará. Eso es la belleza de la vida.'
  },
  {
    'autor': 'Denzel Washington',
    'texto': 'Cuando todo se vuelve negativo, rodéate de gente positiva.'
  },
  {
    'autor': 'Viola Davis',
    'texto': 'Toma riesgos en tu vida. Si ganas, serás feliz; si pierdes, serás sabio.'
  },
  {
    'autor': 'Morgan Freeman',
    'texto': 'A veces tienes que hacer lo correcto.'
  },
  {
    'autor': 'Laurence Fishburne',
    'texto': 'Tu pasión es el poder. Descúbrela.'
  },
  {
    'autor': 'Anthony Hopkins',
    'texto': 'Nunca es demasiado tarde para ser lo que podrías haber sido.'
  },
  {
    'autor': 'Daniel Day-Lewis',
    'texto': 'La vida es corta, haz que cada momento cuente.'
  },
  {
    'autor': 'Joaquin Phoenix',
    'texto': 'Los sueños son la realidad pendiente.'
  },
  {
    'autor': 'Leonardo DiCaprio',
    'texto': 'Persigue aquello que te apasiona, no lo que es conveniente.'
  },
  {
    'autor': 'Christian Bale',
    'texto': 'El trabajo duro nunca es trabajo cuando amas lo que haces.'
  },
  {
    'autor': 'Tom Hardy',
    'texto': 'La persistencia es la clave para desbloquear todas las puertas.'
  },
  {
    'autor': 'Oscar Isaac',
    'texto': 'La creatividad es la inteligencia divirtiéndose.'
  },
  {
    'autor': 'Ethan Hawke',
    'texto': 'El arte es el acto de creer que las cosas son posibles.'
  },
  {
    'autor': 'Timothée Chalamet',
    'texto': 'Nunca dejes que alguien te diga que no puedes.'
  },
  {
    'autor': 'Cate Blanchett',
    'texto': 'La vida te enseña a vivir, si prestas atención.'
  },
  {
    'autor': 'Tilda Swinton',
    'texto': 'La unicidad es tu poder más grande.'
  },
  {
    'autor': 'Saoirse Ronan',
    'texto': 'Sé fiel a ti mismo, sin importar lo que otros piensen.'
  },
  {
    'autor': 'Florence Pugh',
    'texto': 'Tu historia es tu poder, comparte tu verdad.'
  },
  {
    'autor': 'Zendaya',
    'texto': 'Levántate cada vez que caes, más fuerte que antes.'
  },
  {
    'autor': 'Mila Kunis',
    'texto': 'La mejor inversión es en ti mismo.'
  },
  {
    'autor': 'Natalie Portman',
    'texto': 'Cuestiona todo lo que no tiene sentido.'
  },
  {
    'autor': 'Emma Stone',
    'texto': 'Hazlo con miedo, pero hazlo de todas formas.'
  },
  {
    'autor': 'Anne Hathaway',
    'texto': 'El cambio es imposible si no crees que es posible.'
  },
  {
    'autor': 'Sandra Bullock',
    'texto': 'La gratitud abre las puertas del cielo.'
  },
  {
    'autor': 'Meryl Streep',
    'texto': 'No dejes que nadie te diga que no mereces tus sueños.'
  },
  {
    'autor': 'Helen Mirren',
    'texto': 'La edad es solo un número, la actitud es lo que cuenta.'
  },
  {
    'autor': 'Judi Dench',
    'texto': 'La vida comienza donde termina tu zona de confort.'
  },
  {
    'autor': 'Penélope Cruz',
    'texto': 'La pasión es el motor de la excelencia.'
  },
  {
    'autor': 'Charlize Theron',
    'texto': 'Tu cuerpo puede aguantar casi cualquier cosa. Tu mente necesitas entrenar.'
  },
  {
    'autor': 'Anne Hathaway',
    'texto': 'El tiempo es un regalo, no lo desperdicies.'
  },
  {
    'autor': 'Kate Winslet',
    'texto': 'La belleza verdadera viene de adentro.'
  },
  {
    'autor': 'Jessica Chastain',
    'texto': 'Lucha por tus derechos con el mismo fervor que los demás luchan por los suyos.'
  },
  {
    'autor': 'Amy Adams',
    'texto': 'El éxito no es un accidente, es el resultado del trabajo duro.'
  },
  {
    'autor': 'Lupita Nyong\'o',
    'texto': 'Eres hermoso, eres valioso, eres digno.'
  },
  {
    'autor': 'Gal Gadot',
    'texto': 'Una mujer es la encarnación de la fuerza y la gracia.'
  },
  {
    'autor': 'Priyanka Chopra',
    'texto': 'No tengas miedo de ser diferente, sé únicamente tú.'
  },
  {
    'autor': 'Deepika Padukone',
    'texto': 'Tu valor no se define por tus errores.'
  },
  {
    'autor': 'Freida Pinto',
    'texto': 'El éxito verdadero es la paz interior.'
  },
  {
    'autor': 'Irina Shayk',
    'texto': 'La confianza es el mejor accesorio.'
  },
  {
    'autor': 'Gigi Hadid',
    'texto': 'Sé amable contigo mismo. Eres un trabajo en progreso.'
  },
  {
    'autor': 'Bella Hadid',
    'texto': 'Tu valor no depende de tu apariencia.'
  },
  {
    'autor': 'Kendall Jenner',
    'texto': 'Sé la versión más auténtica de ti mismo.'
  },
  {
    'autor': 'Kylie Jenner',
    'texto': 'El éxito no se mide por el dinero, sino por la felicidad.'
  },
  {
    'autor': 'Kim Kardashian',
    'texto': 'Haz lo que amas y vivirás una vida extraordinaria.'
  },
  {
    'autor': 'Kanye West',
    'texto': 'La perfección no es justamente un objetivo, es un viaje.'
  },
  {
    'autor': 'Jay-Z',
    'texto': 'Si no fracasas, no estás asumiendo suficientes riesgos.'
  },
  {
    'autor': 'Drake',
    'texto': 'Sé lo mejor en lo que haces o no hagas nada en absoluto.'
  },
  {
    'autor': 'The Weeknd',
    'texto': 'El arte es la verdad puesta en práctica.'
  },
  {
    'autor': 'Travis Scott',
    'texto': 'Sueña en grande y trabaja duro para lograrlo.'
  },
  {
    'autor': 'Post Malone',
    'texto': 'La vida es un juego, aprende las reglas y gana.'
  },
  {
    'autor': 'Juice WRLD',
    'texto': 'La vida es un viaje, disfruta cada momento.'
  },
  {
    'autor': 'Lil Baby',
    'texto': 'El éxito es un estado mental, no una coincidencia.'
  },
  {
    'autor': 'Gunna',
    'texto': 'La paciencia es la virtud de los ganadores.'
  },
  {
    'autor': 'Playboi Carti',
    'texto': 'Sé tu propio jefe y vive por tus propias reglas.'
  },
  {
    'autor': 'Tyler, the Creator',
    'texto': 'La creatividad no tiene límites, solo limitaciones mentales.'
  },
  {
    'autor': 'Earl Sweatshirt',
    'texto': 'La vida es lo que haces cuando estás ocupado viviendo.'
  },
  {
    'autor': 'A$AP Rocky',
    'texto': 'Sé diferente, sé único, sé tú.'
  },
  {
    'autor': 'Kendrick Lamar',
    'texto': 'El cambio comienza dentro de ti.'
  },
  {
    'autor': 'J. Cole',
    'texto': 'La verdad es el poder más grande.'
  },
  {
    'autor': 'Nas',
    'texto': 'El conocimiento es la mejor herramienta.'
  },
  {
    'autor': 'Tupac Shakur',
    'texto': 'La vida es un viaje, no un destino.'
  },
  {
    'autor': 'The Notorious B.I.G.',
    'texto': 'El éxito es tu única opción, el fracaso no es.'
  },
  {
    'autor': 'Eminem',
    'texto': 'Perder la cabeza es lo que ganan, mantén tu compostura.'
  },
  {
    'autor': 'Dr. Dre',
    'texto': 'La calidad siempre prevalece.'
  },
  {
    'autor': 'Snoop Dogg',
    'texto': 'La vida es para disfrutar, vívela al máximo.'
  },
  {
    'autor': 'Ice Cube',
    'texto': 'Hazlo grande o vuelve a casa.'
  },
  {
    'autor': 'Wiz Khalifa',
    'texto': 'La vida es demasiado corta para no vivir tus sueños.'
  },
  {
    'autor': 'Mac Miller',
    'texto': 'La vida es un regalo, no tomes nada por sentado.'
  },
  {
    'autor': 'XXXTentacion',
    'texto': 'Sé honesto contigo mismo y con los demás.'
  },
  {
    'autor': 'Ski Mask the Slump God',
    'texto': 'La persistencia es la clave del éxito.'
  },
  {
    'autor': 'Trippie Redd',
    'texto': 'Los sueños son realidades que no has vivido todavía.'
  },
  {
    'autor': 'Juice WRLD',
    'texto': 'Haz lo que te hace feliz, no lo que esperes que haga.'
  },
  {
    'autor': 'Lil Pump',
    'texto': 'La vida es una canción, canta con tu alma.'
  },
  {
    'autor': 'Russ',
    'texto': 'El trabajo duro supera el talento cuando el talento no trabaja duro.'
  },
  {
    'autor': 'Khalid',
    'texto': 'La música es la cura para el alma.'
  },
  {
    'autor': 'Daniel Caesar',
    'texto': 'La fe es el mayor regalo que puedes recibir.'
  },
  {
    'autor': 'SZA',
    'texto': 'Eres lo suficientemente bueno tal como eres.'
  },
  {
    'autor': 'H.E.R.',
    'texto': 'Tu voz importa, úsala para hacer la diferencia.'
  },
  {
    'autor': 'Jhené Aiko',
    'texto': 'La paz viene de aceptarte a ti mismo.'
  },
  {
    'autor': 'Solange',
    'texto': 'La verdad es revolucionaria.'
  },
  {
    'autor': 'Erykah Badu',
    'texto': 'Honra tu verdadero yo.'
  },
  {
    'autor': 'Jill Scott',
    'texto': 'La belleza real viene de la confianza.'
  },
  {
    'autor': 'India Arie',
    'texto': 'Eres hermoso simplemente por quien eres.'
  },
  {
    'autor': 'Alicia Keys',
    'texto': 'Elige servir y no dominar.'
  },
  {
    'autor': 'Mariah Carey',
    'texto': 'Soy mi propio héroe.'
  },
  {
    'autor': 'Toni Braxton',
    'texto': 'La vida es demasiado corta para regresar.'
  },
  {
    'autor': 'Mary J. Blige',
    'texto': 'Las circunstancias no hacen el hombre, las revelan.'
  },
  {
    'autor': 'Lauryn Hill',
    'texto': 'Rodéate de personas que traigan lo mejor de ti.'
  },
  {
    'autor': 'Brandy',
    'texto': 'Tu potencial es infinito.'
  },
  {
    'autor': 'Monica',
    'texto': 'El éxito es un viaje, no un destino.'
  },
  {
    'autor': 'Usher',
    'texto': 'Confía en tu instinto y sigue adelante.'
  },
  {
    'autor': 'Chris Brown',
    'texto': 'La persistencia vence todo.'
  },
  {
    'autor': 'Omarion',
    'texto': 'Sé auténtico en todo lo que haces.'
  },
  {
    'autor': 'Trey Songz',
    'texto': 'La vida es para vivirla, no solo para existir.'
  },
  {
    'autor': 'Miguel',
    'texto': 'El verdadero éxito es la felicidad personal.'
  },
  {
    'autor': 'Bruno Mars',
    'texto': 'Hazlo con pasión o no lo hagas en absoluto.'
  },
  {
    'autor': 'Frank Ocean',
    'texto': 'La innovación requiere valentía.'
  },
  {
    'autor': 'Anderson .Paak',
    'texto': 'La vida es un festival, disfruta cada momento.'
  },
  {
    'autor': 'Blood Orange',
    'texto': 'La vulnerabilidad es la forma más pura de expresión.'
  },
  {
    'autor': 'Vince Staples',
    'texto': 'La verdad te liberará.'
  },
  {
    'autor': 'Donald Glover',
    'texto': 'Crea lo que quieras ver en el mundo.'
  },
  {
    'autor': 'Childish Gambino',
    'texto': 'La creatividad no tiene reglas, solo inspiración.'
  },
  {
    'autor': 'Thom Yorke',
    'texto': 'El arte es la expresión de la verdad interior.'
  },
  {
    'autor': 'Radiohead',
    'texto': 'La perfección es el enemigo del progreso.'
  },
  {
    'autor': 'Coldplay',
    'texto': 'La música es el corazón de la vida.'
  },
  {
    'autor': 'The Beatles',
    'texto': 'Todo lo que necesitas es amor.'
  },
  {
    'autor': 'Pink Floyd',
    'texto': 'Tu mente es tu propia cárcel o tu libertad.'
  },
  {
    'autor': 'Led Zeppelin',
    'texto': 'La leyenda nunca muere, solo se transforma.'
  },
  {
    'autor': 'Queen',
    'texto': 'No es otra roca en el camino, es una obra maestra.'
  },
  {
    'autor': 'David Bowie',
    'texto': 'Reinvéntate constantemente o muere.'
  },
  {
    'autor': 'Prince',
    'texto': 'La vida es demasiado buena para gastarla en cosas mundanas.'
  },
  {
    'autor': 'Michael Jackson',
    'texto': 'Haz que el mundo sea un lugar mejor.'
  },
  {
    'autor': 'Whitney Houston',
    'texto': 'Sé la mejor versión de ti mismo.'
  },
  {
    'autor': 'Aretha Franklin',
    'texto': 'Exige respeto y nunca lo perderás.'
  },
  {
    'autor': 'Etta James',
    'texto': 'Sé honesto, sé verdadero, sé libre.'
  },
  {
    'autor': 'Billie Holiday',
    'texto': 'Si no tienes suerte, al menos tienes libertad.'
  },
  {
    'autor': 'Louis Armstrong',
    'texto': 'La vida es un hermoso instrumento, aprende a tocarlo.'
  },
  {
    'autor': 'Duke Ellington',
    'texto': 'No hay límites cuando el arte se convierte en tu pasión.'
  },
  {
    'autor': 'Miles Davis',
    'texto': 'El jazz es la libertad musicalizada.'
  },
  {
    'autor': 'John Coltrane',
    'texto': 'La música es la manifestación de lo divino.'
  },
  {
    'autor': 'Kurt Cobain',
    'texto': 'Conozco el cambio, no tengo miedo de ello.'
  },
  {
    'autor': 'Jimi Hendrix',
    'texto': 'La música es mi religión.'
  },
  {
    'autor': 'Eric Clapton',
    'texto': 'El éxito es un viaje compartido con los que amas.'
  },
  {
    'autor': 'Jimmy Page',
    'texto': 'La música trasciende el tiempo y el espacio.'
  },
  {
    'autor': 'Carlos Santana',
    'texto': 'La vida es una celebración del amor y la pasión.'
  },
  {
    'autor': 'Bob Marley',
    'texto': 'Una buena conciencia es la mejor almohada.'
  },
  {
    'autor': 'Reggae Classic',
    'texto': 'Levántate, mantente firme por tu derecho.'
  },
  {
    'autor': 'Peter Tosh',
    'texto': 'Todos los hombres son iguales.'
  },
  {
    'autor': 'Gregory Isaac',
    'texto': 'El amor es la medicina del alma.'
  },
  {
    'autor': 'Dennis Brown',
    'texto': 'La vida no es un juego, es una realidad.'
  },
  {
    'autor': 'Steel Pulse',
    'texto': 'La educación es la llave de la libertad.'
  },
  {
    'autor': 'Black Uhuru',
    'texto': 'La revolución es permanente.'
  },
  {
    'autor': 'Bunny Wailer',
    'texto': 'La vida eterna es el regalo del Creador.'
  },
  {
    'autor': 'Israel Vibration',
    'texto': 'La verdad es la única medicina.'
  },
  {
    'autor': 'Burning Spear',
    'texto': 'La libertad es el derecho de todos.'
  },
  {
    'autor': 'Third World',
    'texto': 'La música une a todos en paz.'
  },
  {
    'autor': 'Aswad',
    'texto': 'La vida es un regalo, no una maldición.'
  },
  {
    'autor': 'Toots and the Maytals',
    'texto': 'Por favor suéltame, quiero vagar.'
  },
  {
    'autor': 'Jimmy Cliff',
    'texto': 'Puedo ver claramente ahora que se fue la lluvia.'
  },
  {
    'autor': 'Desmond Dekker',
    'texto': '69 no es todo lo que hay en la vida.'
  },
  {
    'autor': 'Ken Boothe',
    'texto': 'Espiritualmente yo tengo que llegar allí.'
  },
  {
    'autor': 'John Holt',
    'texto': 'El tiempo y el amor son lo más valioso.'
  },
  {
    'autor': 'Alton Ellis',
    'texto': 'La vida es más que dinero y fama.'
  },
  {
    'autor': 'Derrick Morgan',
    'texto': 'La justicia debe ser para todos.'
  },
  {
    'autor': 'Prince Buster',
    'texto': 'El ritmo es la esencia de la vida.'
  },
  {
    'autor': 'Clueso',
    'texto': 'La vida es un viaje hacia la autenticidad.'
  },
  {
    'autor': 'Apache 207',
    'texto': 'Sé honesto y vive tu verdad.'
  },
  {
    'autor': 'Bushido',
    'texto': 'La vida no siempre es justa, pero es tuya.'
  },
  {
    'autor': 'Kollegah',
    'texto': 'El éxito requiere sacrificio y disciplina.'
  },
  {
    'autor': 'Summer Cem',
    'texto': 'Tu pasado no define tu futuro.'
  },
  {
    'autor': 'Azad',
    'texto': 'La verdad es el camino a la libertad.'
  },
  {
    'autor': 'Samy Deluxe',
    'texto': 'La vida es un juego de pistas.'
  },
  {
    'autor': 'Aykut Gürel',
    'texto': 'El cambio comienza en tu corazón.'
  },
  {
    'autor': 'Moneyboy',
    'texto': 'La vida es demasiado corta para las mentiras.'
  },
  {
    'autor': 'Fler',
    'texto': 'Sé valiente y persigue tus sueños.'
  },
  {
    'autor': 'Sido',
    'texto': 'La verdad es mejor que las palabras dulces.'
  },
  {
    'autor': 'Panik',
    'texto': 'El miedo es el enemigo del éxito.'
  },
  {
    'autor': 'Marteria',
    'texto': 'La vida es un viaje hacia la paz interior.'
  },
  {
    'autor': 'Großstadtgeflüster',
    'texto': 'La autenticidad nunca pasa de moda.'
  },
  {
    'autor': 'Kettcar',
    'texto': 'La vida es demasiado corta para la mediocridad.'
  },
  {
    'autor': 'Wilesco',
    'texto': 'El éxito viene de la consistencia.'
  },
  {
    'autor': 'Danger Dan',
    'texto': 'La verdad libera, la mentira encadena.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida es lo que haces mientras planeas otra cosa.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'El éxito es ir de fracaso en fracaso sin perder el entusiasmo.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'No tengas miedo a soñar en grande y trabajar duro para lograrlo.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida es demasiado corta para vivir con arrepentimientos.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'Sé el cambio que deseas ver en el mundo.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La única forma de hacerlo es hacerlo.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'Tu mayor rival no es otra persona, eres tú mismo.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida es un regalo, no la desperdicies.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La verdad es más extraña que la ficción.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'El éxito no es un accidente, es resultado del esfuerzo.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'Aprende de tus errores y sigue adelante.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida es un viaje, no un destino final.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La paciencia es la virtud de los sabios.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'Tu mente es tu mejor herramienta.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida sin propósito es una vida vacía.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'Hazlo hoy, no lo dejes para mañana.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La verdadera riqueza es la paz interior.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'Eres capaz de más de lo que crees.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida es corta, ama profundamente.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'El éxito requiere consistencia, no perfección.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La mejor inversión es en ti mismo.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida es un espejo de tus pensamientos.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'No hay atajos hacia ningún lugar que merezca ir.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida es el conjunto de decisiones que tomas.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'Toma el control de tu destino.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida es una oportunidad, úsala sabiamente.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'El éxito empieza en tu mente.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida es lo que decides hacer con ella.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'Aprende, crece, mejora cada día.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida sin amor es una vida sin sentido.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'Tu única limitación es tu imaginación.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida es un regalo que se renueva cada día.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'El éxito es un viaje compartido.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida es para aquellos que se atreven a vivirla.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La verdad siempre sale a la luz.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'Sé valiente, sé fuerte, sé tú mismo.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida es un lienzo en blanco, pinta tu obra maestra.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'El único fracaso es no intentar.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida te enseña lecciones valiosas.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La verdadera belleza está en la bondad.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'Vive cada día como si fuera el último.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida es un honor, no un derecho.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'El éxito no tiene punto de llegada, es un camino.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida está llena de posibilidades infinitas.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'Tu potencial es ilimitado, solo necesitas creerlo.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida es una aventura, atrévete a vivirla.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'El éxito es para aquellos que se atreven a soñar.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida es un regalo, vívela con gratitud.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'Sé autor de tu propia historia.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida es demasiado valiosa para desperdiciarla.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'El éxito requiere fe en ti mismo.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida es un juego, juega según tus reglas.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'Tu pasión es tu poder, úsalo.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida es un regalo, no la tomes por sentado.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La verdad es liberadora.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'El éxito comienza con una decisión.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida es lo que creas que es.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'Rodéate de personas que te levanten.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida sin alegría es una vida sin propósito.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'El cambio es la única constante en la vida.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'Ama la vida que tienes mientras construyes la que quieres.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida es hermosa cuando eliges verla así.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'El éxito es la suma de pequeños esfuerzos.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida es un privilegio, trátala como tal.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'Tu mente es poderosa, contrólala.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida es lo que haces de ella, haz que cuente.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'El éxito es la ciencia de ser persistente.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida es un viaje hermoso, disfrútalo.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La verdad es tu mejor defensa.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'Sé el mejor que puedas ser, siempre.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida es una bendición, vívela así.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'El éxito viene de servir a otros.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida es lo que pasa cuando estás planeando.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'Tu destino es lo que eliges hacerlo.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida es un reflejo de tus creencias.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'El éxito requiere acción, no solo pensamiento.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La vida es un regalo que renueva cada amanecer.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'La verdad es el único camino correcto.'
  },
  {
    'autor': 'Anonimo',
    'texto': 'Eres responsable de tu propia vida.'
  }
];
