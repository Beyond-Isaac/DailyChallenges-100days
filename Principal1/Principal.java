package Principal1;


public class Principal {
        
     
    public static void main(String[] args) {
        // TODO code application logic here

      PessoaFisica f1 = new PessoaFisica();
      PessoaJuridica j1 = new PessoaJuridica();
      
      f1.nome = "Pedro Pirocas";
      f1.endereco = "Rua das Orquideas, 20";
      f1.cpf = "52343242-12";
      
      j1.nome = "Tiago da Silva";
      j1.endereco = "Rua das Bananeiras, 10";
      j1.cnpj =  "5345675342-12";
     
        System.out.println("Dados pessoa Fisica: " + "\n");
        System.out.println(f1.retornaDadosFisica());
        
        System.out.println("Dados pessoa Fisica" + "\n");
        System.out.println(j1.retornaDadosJuridica());
    }
    
}