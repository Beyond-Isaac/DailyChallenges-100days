package Principal1;


public class PessoaJuridica extends Cliente {
    
    String cnpj;   
    
      public String retornaDadosJuridica() {
	        String dados;
	 
	        //Pega os dados da classe herdada
	        dados = super.retornaDados();

	        dados += "\tcnpj: " + cnpj + "\n";
	       
	        return dados;
	    }
   
}
