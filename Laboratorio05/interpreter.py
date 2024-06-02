import pygame
import sys
from pygame.locals import *
from colors import *

def parseLine(DISPLAY, y, s):
    x = 0
    for c in s:
        pygame.draw.line(DISPLAY, color[c], (x, y), (x, y))
        x += 1

def draw(picture):
    try:
        img = picture.img
    except AttributeError:
        img = picture
    
    # Inicializa todos los módulos de Pygame
    pygame.init()

    # Configura la pantalla (640x480 píxeles en este caso)
    DISPLAY = pygame.display.set_mode((640, 480))
    DISPLAY.fill(BLUE)

    n = len(img)
    for i in range(n):
        parseLine(DISPLAY, i, img[i])

    # Bucle principal para mantener la ventana abierta
    while True:
        for event in pygame.event.get():
            if event.type == QUIT:
                pygame.quit()
                sys.exit()
        pygame.display.update()
