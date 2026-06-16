class Veiculo:
    def __init__(self, modelo, marca, ano):
        self.modelo = modelo
        self.marca = marca
        self.ano = ano

    def apresentar(self):
        print("===== DADOS DO PRODUTO =====")
        print(f"Modelo: {self.modelo}")
        print(f"Marca: {self.marca}")
        print(f"Ano: {self.ano}")


class Carro(Veiculo):
    pass


class Moto(Veiculo):
    pass
class Celular(Veiculo):
    pass



carro1 = Carro("Civic", "Honda", 2022)
moto1 = Moto("CG 160", "Honda", 2023)
celular = Celular("XIAOMI", "XIAOMI", 2023)

carro1.apresentar()
moto1.apresentar()
celular.apresentar()
