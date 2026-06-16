class Produtos:
    def __init__(self,nome,valorcusto,percent):
        self.nome=nome
        self.valorcusto = valorcusto
        self.percent = percent
    def exibirProduto(self):
        print(f"CÁLCULO DE VENDAS")
        print(f"####################################")
        print(f"Produto: {self.nome}")
        print(f"Valor custo: {self.valorcusto}")
        print(f"Per: {self.percent}")
        print(f"Preço Vendas: {self.calcVenda():.2f}")
    def calcVenda(self):
        calculo = self.valorcusto*self.percent
        return calculo
