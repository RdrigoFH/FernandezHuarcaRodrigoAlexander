from colors import *

class Picture:
    def __init__(self, img):
        self.img = img

    def __eq__(self, other):
        return self.img == other.img

    def _invColor(self, color):
        if color not in inverter:
            return color
        return inverter[color]

    def verticalMirror(self):
        """ Devuelve el espejo vertical de la imagen """
        vertical = []
        for value in self.img:
            vertical.append(value[::-1])
        return Picture(vertical)

    def horizontalMirror(self):
        """ Devuelve el espejo horizontal de la imagen """
        horizontal = self.img[::-1]
        return Picture(horizontal)

    def negative(self):
        """ Devuelve un negativo de la imagen """
        negative_img = []
        for row in self.img:
            negative_row = "".join([self._invColor(c) for c in row])
            negative_img.append(negative_row)
        return Picture(negative_img)

    def join(self, p):
        """ Devuelve una nueva figura poniendo la figura del argumento 
            al lado derecho de la figura actual """
        new_img = []
        for row1, row2 in zip(self.img, p.img):
            new_img.append(row1 + row2)
        return Picture(new_img)

    def up(self, p):
        """ Devuelve una nueva figura poniendo la figura del argumento 
            sobre la figura actual """
        return Picture(p.img + self.img)

    def under(self, p):
        """ Devuelve una nueva figura poniendo la figura p sobre la
            figura actual """
        return Picture(self.img + p.img)
  
    def horizontalRepeat(self, n):
        """ Devuelve una nueva figura repitiendo la figura actual al costado
            la cantidad de veces que indique el valor de n """
        repeated_img = []
        for row in self.img:
            repeated_img.append(row * n)
        return Picture(repeated_img)

    def verticalRepeat(self, n):
        """ Devuelve una nueva figura repitiendo la figura actual hacia abajo
            la cantidad de veces que indique el valor de n """
        return Picture(self.img * n)




