from interpreter import draw
from chessPictures import *

fila1 = square.join(square.negative())
combinado = fila1.join(fila1)
draw(combinado.join(combinado).negative())

