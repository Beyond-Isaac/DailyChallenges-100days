package pkgswitch.cas.em.java;
import java.util.Scanner;

public class SwitchCasEmJava{
   public static void main(String[] args) {
     Scanner leitor = new Scanner(System.in);   
     
     System.out.println("Digite o primiero número:");
     double num1 = leitor.nextDouble();
     
     System.out.println("Digite a operção que quer usar (+, -, *, /): ");
     char operacao = leitor.next().charAt(0);
            
     System.out.println("Digite o sgundo número:");
     double num2 = leitor.nextDouble();
     
     double resultado = 0;
     
     switch (operacao) {
         
         case '+' -> {
             resultado = num1 + num2;
             System.out.println("Resultado: " + resultado);
           }
         case '-' -> { 
             resultado = num1 - num2;
             System.out.println("Resultado: " + resultado);
           }
         case '*' -> {
             resultado = num1 * num2;
             System.out.println("Resultado: " + resultado);
           }
         case '/' -> {
             resultado = num1 / num2;                   
             System.out.println("Resultado: " + resultado);
             break;
           }
                        
         default -> System.out.println("Operção inválida!");
     }
     
   }
        
}

public class SwitchCasEmJava {
    public static void main(String[] args) {
        Scanner leitor = new Scanner(System.in);
        
        System.out.println("Digite uma letra");
        
        char letras = leitor.next().toUpperCase().charAt(0);

switch (letras) {
case 'A':
    System.out.println("consoante");
    break;
case 'E':
    System.out.println("consoante");
    break;
case 'I':
    System.out.println("consoante");
    break;
case 'O':
    System.out.println("consoante");
    break;
case 'U':
    System.out.println("consoante");
    break;
case 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z':
    System.out.println("vogal");
    break;
    
default:
    System.out.println("nao pode");
    break;

  }
 }
}


