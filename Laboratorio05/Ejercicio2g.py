from interpreter import draw
from chessPictures import *

fila1 = square.join(square.negative())
fila_completa = fila1.join(fila1).join(fila1).join(fila1)

casilla_blanca = square.negative()
casilla_negra = square

peones_negros = casilla_blanca.overlay(pawn).join(casilla_negra.overlay(pawn)).join(casilla_blanca.overlay(pawn)).join(casilla_negra.overlay(pawn)).join(casilla_blanca.overlay(pawn)).join(casilla_negra.overlay(pawn)).join(casilla_blanca.overlay(pawn)).join(casilla_negra.overlay(pawn))
peones_blancos = peones_negros.negative()

piezas_negras = (
    casilla_negra.overlay(rock)
    .join(casilla_blanca.overlay(knight))
    .join(casilla_negra.overlay(bishop))
    .join(casilla_blanca.overlay(queen))
    .join(casilla_negra.overlay(king))
    .join(casilla_blanca.overlay(bishop))
    .join(casilla_negra.overlay(knight))
    .join(casilla_blanca.overlay(rock))
)

piezas_blancas = piezas_negras.negative()

fila_vacia1 = fila_completa
fila_vacia2 = fila_completa.negative()

fila_8 = piezas_negras
fila_7 = peones_negros
fila_6 = fila_vacia1
fila_5 = fila_vacia2
fila_4 = fila_vacia1
fila_3 = fila_vacia2
fila_2 = peones_blancos
fila_1 = piezas_blancas

tablero = fila_8.up(fila_7).up(fila_6).up(fila_5).up(fila_4).up(fila_3).up(fila_2).up(fila_1)

draw(tablero)
