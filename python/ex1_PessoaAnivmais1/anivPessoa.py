class Pessoa:
    def __init__(self,nome,idade):
        self.nome = nome
        self.idade = idade
    def apresentar(self):
        print(f"Olá meu nome é {self.nome} e tenho {self.idade}")
    def fazeraniversario(self):
        self.idade +=1
        print(f"{self.nome} Feliz aniversário")
        