class Area:
    def __init__(self, w, h):
        self.w = w
        self.h = h

    def calcular_Area(self):
        self.area = self.w * self.h
        print(
            f"Largura:{self.w:.2f}m x Altura:{self.h:.2f}m = {self.area:.2f}m² ")
