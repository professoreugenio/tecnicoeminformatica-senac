class ContaBancaria:
    def __init__(self,titular,saldo):
        self.titular = titular
        self.saldo = saldo
    def mostrar_dados(self):
        print(f"Titular: {self.titular}")
        print(f"Saldo: R$ {self.saldo:.2f}")



cliente1 = ContaBancaria("JOÃO PAULO", 1000)
cliente1.titular ="zezé"
cliente1.saldo =-1000
cliente1.mostrar_dados()
