from interpreter import draw
from chessPictures import *

casillas = square.join(square.negative())
combinado = casillas.join(casillas)
fila = combinado.join(combinado)

fila = fila.up(fila.negative())


draw(fila.up(fila))
