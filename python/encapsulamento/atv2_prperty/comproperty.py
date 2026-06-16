class Pessoa:
    def __init__(self, nome):
        self.__nome = nome

    # def get_nome(self):
    #     return self.__nome
    @property
    def nome(self):
        return self.__nome


pessoa1 = Pessoa("PAULA")
pessoa1.__nome = "ANDRÉ"
print(pessoa1.nome)
