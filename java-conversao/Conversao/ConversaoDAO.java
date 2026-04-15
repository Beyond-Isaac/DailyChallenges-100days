package Conversao;

public class ConversaoDAO {

    public void mostrarDados(Moeda m) {
        System.out.println("Quantidade em dólares: " + m.quantidadeDolares); // era "QuantidadeDolares"
        System.out.println("Cotação do dólar: R$" + m.cotacaoDolar);
    }

    public void conversaoMoeda(Moeda m) { // era "converterMoeda" — não batia com a chamada em Conversao.java
        double valorReais = m.quantidadeDolares * m.cotacaoDolar;
        System.out.println("Valor convertido em reais: R$" + valorReais);
    }
}