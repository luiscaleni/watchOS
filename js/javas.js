ball.onmousedown = function(event) {

  let shiftX = event.clientX - ball.getBoundingClientRect().left;
  let shiftY = event.clientY - ball.getBoundingClientRect().top;

  ball.style.position = 'absolute';
  ball.style.zIndex = 1;
  //document.ext.append(ball);

  moveAt(event.pageX, event.pageY);

  // mueve la pelota a las coordenadas (pageX, pageY)
  // tomando la posición inicial en cuenta
  function moveAt(pageX, pageY) {
    ball.style.left = pageX - shiftX + 'px';
    ball.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // mueve la pelota con mousemove
  document.addEventListener('mousemove', onMouseMove);

  // suelta la pelota, elimina el manejador innecesario
  ball.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    ball.onmouseup = null;
  };

};

ball.ondragstart = function() {
  return false;
};