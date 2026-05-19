package Principal1;

public class PessoaFisica extends Cliente { 
    
    String cpf;
    
    public String retornaDadosFisica() {
	        String dados;
	 
	        //Pega os dados da classe herdada
	        dados = super.retornaDados();

	        dados += "\tcpf: " + cpf + "\n";
	       
	        return dados;
	    }
    
}
