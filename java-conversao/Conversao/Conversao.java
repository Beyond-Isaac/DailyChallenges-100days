package Conversao;

import java.util.Scanner;

public class Conversao {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Moeda moeda = new Moeda();
        ConversaoDAO dao = new ConversaoDAO();

        System.out.println("Digite a quantidade em dólares: ");
        moeda.quantidadeDolares = scanner.nextDouble();

        System.out.println("Digite a cotação em dólar: ");
        moeda.cotacaoDolar = scanner.nextDouble();

        dao.mostrarDados(moeda);
        dao.conversaoMoeda(moeda);

        scanner.close();
    }
}