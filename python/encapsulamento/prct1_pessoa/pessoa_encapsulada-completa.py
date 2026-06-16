class Pessoa:
    def __init__(self, nome):  # Método construtor
        self.__nome = nome     # Atributo privado

    @property  # Getter / permite ler o atributo
    def nome(self):  # Propriedade nome / método getter
        return self.__nome

    @nome.setter  # Setter / permite alterar o atributo
    def nome(self, novonome):  # Setter da propriedade nome / recebe o novo valor
        if novonome == "":
            print("Novo nome não pode ser vazio")
        else:
            self.__nome = novonome


pessoa = Pessoa("PAULA")  # Objeto / instância da classe Pessoa
pessoa.nome = "ANDRÉ"     # Chamada do setter / alteração da propriedade nome
print(pessoa.nome)        # Chamada do getter / leitura da propriedade nome