class Pessoa:
    def __init__(self,nome): #MÉTODO CONSTRUTOR
        self.__nome = nome #ATRIBUTO
    @property
    def nome(self):
        return self.__nome
    @nome.setter
    def nome(self,novonome):
        if(novonome==""):
            print(f"Novo nome não pode ser vazio")
        else:
            self.__nome = novonome;
            # print(f"Nome altrado para {self.__nome}")

pessoa = Pessoa("PAULA") #BJETO
pessoa.nome = "ANDRÉ"
print(pessoa.nome)