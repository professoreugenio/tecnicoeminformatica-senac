class ContaBancaria:
    def __init__(self, titular):
        self.titular = titular
        self.saldo = 100

    def depositar(self, valor):

        if valor <= 0:
            print(f"Valor deve ser maior que 0")
            return

        self.anterior = self.saldo
        self.saldo += valor
        print(f"""
            TITULAR DA CONTA {self.titular}
            DEPÓSITOS
            No valor de    {valor}
            Saldo anterior {self.anterior}
            Saldo atual    {self.saldo}

""")

    def sacar(self, valor):
        anterior = self.saldo

        if (valor > self.anterior):
            print(f"Saldo {anterior} isuficiente, para sacar {valor} tente novamente")
            return
        self.saque = valor
        self.saldo -= valor

        print(f"""
            ================================================
            TITULAR DA CONTA {self.titular}
            SAQUES
        
            No valor de    {valor}
            Saldo anterior {self.anterior}
            Saldo atual    {self.saldo}

        """)
