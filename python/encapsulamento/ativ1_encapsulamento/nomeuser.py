class Pessoa:
    def __init__(self,nome):
        self.__nome = nome
    def nomepessoa(self):
        print(f"Nome registrado: {self.nome}")


pessoa1 =Pessoa("Ana Paula")
print(pessoa1.nome)
# pessoa1.nomepessoa()
