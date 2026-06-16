class Produto:
    def __init__(self, nome):
        self.nome = nome


if __name__ == "__main__":
    produto1 = Produto("Notebook")
    print(produto1.nome)
