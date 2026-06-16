class Pessoa:
    def __init__(self, nome):  # Método construtor
        self.__nome = nome     # Atributo privado

   
pessoa = Pessoa("PAULA")  # Objeto / instância da classe Pessoa
pessoa.nome = "ANDRÉ"     # Chamada do setter / alteração da propriedade nome
print(pessoa.nome)        # Chamada do getter / leitura da propriedade nome