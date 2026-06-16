class ContaBancaria:
    def __init__(self, titular, saldo):
        self.__titular = titular
        self.__saldo = saldo

    def mostrar_dados(self):
        print(f"Titular: {self.__titular}")
        print(f"Saldo: R$ {self.__saldo:.2f}")


cliente1 = ContaBancaria("JOÃO PAULO", 1000)
cliente1.__titular = "BERALDO"
cliente1.__saldo = -2000
cliente1.mostrar_dados()
