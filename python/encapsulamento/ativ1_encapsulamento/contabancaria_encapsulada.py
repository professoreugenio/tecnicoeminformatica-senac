class ContaBancaria:
    def __init__(self, titular, saldo):
        self.__titular = titular
        self.__saldo = saldo

    def depositar(self, valor):
        if valor > 0:
            self.__saldo += valor
            print(f"TITULAR DA CONTA: {self.__titular} ")
            print(f"Depósito {valor} realizado com sucesso")

        else:
            print(f"O valor do depósito deve ser maior que zero")

    def sacar(self, valor):
        if (valor < 0):
            print(f"Saque deve ser maior que 0")
        elif (valor <= self.__saldo):
            print(f"Saque de R$ {valor:.2f} realizado com sucesso")
            self.__saldo -= valor
        else:
            print(f"Saldo insuficiente. Impossivel sacar R$ {valor:.2f}  ")

    def saldobancario(self):
        print(f"Saldo atual: {self.__saldo:.2f}")


conta1 = ContaBancaria("Ana", 100)
conta1.__titular = "ZÉ DOIDIM"
conta1.saldobancario()

conta1.depositar(50)
conta1.saldobancario()

conta1.sacar(200)
conta1.saldobancario()

conta1.sacar(80)
conta1.__saldo = -1000
conta1.saldobancario()
