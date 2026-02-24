import java.util.Scanner;
import java.util.Locale;

public class CalculoMedia {
    public static void main(String[] args) {
        // Configuramos o scanner para aceitar o ponto como separador decimal
        Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

        System.out.print("Digite o nome do aluno: ");
        String nome = scanner.nextLine();

        System.out.print("Nota 1: ");
        double n1 = scanner.nextDouble();

        System.out.print("Nota 2: ");
        double n2 = scanner.nextDouble();

        System.out.print("Nota 3: ");
        double n3 = scanner.nextDouble();

        System.out.print("Nota 4: ");
        double n4 = scanner.nextDouble();

        // Cálculo da média aritmética simples
        double media = (n1 + n2 + n3 + n4) / 4;

        // Exibição do resultado formatado
        System.out.printf("%s, sua média final foi %.1f%n", nome, media);

        scanner.close();
    }
}