# ActividadesDWEC

-- SIMON SAYS --

La idea principal para el desarrollo de esta aplicación fue adaptar el tan conocido juego de "Simon Says" en versión web. 

El juego se desarrolla de la siguiente manera:
1. Para comenzar a jugar hay que pulsar el botón "¡Comenzar!".
2. Los cuadrados se iluminan de forma aleatoria formando una combinación de 4 colores. Durante estos momentos, el usuario no puede pulsar ningún cuadrado.
3. Una vez la iluminación finaliza y se activa la opción de pulsar los cuadrados,el usuario, que ha memorizado la combinación, puede proceder a replicarla.
4. Si la combinación pulsada por el usuario es correcta, se despliega un mensaje "alert" informando al usuario de que ha ganado, en el caso contrario, ocurrirá lo mismo pero con el mensaje de que ha perdido el juego.

Respecto al código:

La aplicación funciona de una manera muy sencilla: Se iluminan los cuatro colores de forma aleatoria, llenando así un array (secuencia) que después es comparada con la combinación,también guardada en un array,pulsada por el usuario (secuenciaPulsada). La comparación se realiza uno a uno ya que solo se ganará el juego si los números de los 4 colores pulsados corresponden en su totalidad con los 4 números del array (secuencia). 

Para mí ha sido muy importante la creación de la booleana que desactiva los cuadrados, ya que es básico que éstos no deben ser pulsados por el usuario hasta que toda la combinación haya sido mostrada. Además, se han añadido funciones asíncronas y promesas para controlar que el usuario no pueda pulsar los cuadrados durante la iluminación pues con "deshabilitarColores" no era suficiente.

En la parte del jugador (cuando el usuario resuelve la combinación) podría haber realizado una sola función y dentro de esta, ver qué botón ha sido pulsado y de esta manera actuar de una forma o de otra; como para este juego solo había 4 cuadrados disponibles, decidí hacer una función para cada cuadrado y que así fuese más fácil de entender para mí aunque haya que escribir cuatro funciones prácticamente iguales y esto haga que el código sea un poco más "largo" o "feo". 

Una vez finaliza el juego: bien ganando o perdiendo, se añade la función: reiniciarJuego que es la encargada de vaciar ambos arrays (secuencia y secuenciaPulsada) para que el juego pueda comenzar de nuevo añadiendo otros cuatro números aleatoriamente y además te permite poder volver a pulsar el botón comenzar que habíamos deshabilitado al comenzar el juego. 

-- CARRERA DE CANGREJOS --

La idea principal para el desarrollo de esta aplicación fue el poder crear algo resultón y sencillo que me hiciera disfrutar de la programación con JavaScript. 

El juego se desarrolla de la siguiente manera:
1. Para comenzar a jugar hay que pulsar el botón "¡Comenzar!".
2. Este botón se deshabilita y comienza la carrera.
3. Los cangrejos se mueven aleatoriamente hasta que uno de ellos llega en primer lugar a la meta.
4. Cuando uno de ellos traspasa la línea de meta, termina el juego, se nombra al cangrejo ganador y se habilita de nuevo el botón de comenzar la carrera. 
