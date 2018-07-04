# mxexperience
1 - Mkt apoio na atualizaçao de midia mkt.

2 - Seguro as a service.
Como funciona:
	Identificação do cliente

	1 - O cliente realiza login no aplicativo;
	2 - Suas informações de cliente são apresentadas via API - MxCard;
	3 - O cliente seleciona ou lê um QrCode / código de barras do produto que será segurado;
	4 - As informações do produto, identificação do cliente, startup, rastreio e uso do bem segurado são registradas no blockchain;
	5 - Essas informações ficam públicas no consenso do cliente e ajuda a compor melhor a precificação do bem segurado. Podendo ser compartilhada com diversas outras empresas de seguros através do blockchain;
	6 - Finalizando o uso do bem o cliente informa que terminou o uso e é gravado um bloco de fim do seguro naquele instante;
	7 - O calculo final do preço do seguro é apresentado ao cliente;

3 - Identificação e qualificação de cliente.
Api para qualificar indivíduos provando a identidade on line - MxCard.

Ajudar bancos e varejistas on-line a autenticar usuários.

Serviços financeiros gastam muito tempo e dinheiro qualificando indivíduos - provar a identidade on-line de um usuário pode ser um algo complicado, senhas difíceis de lembrar e fáceis de roubar. Com o MxCard, uma instituição pode qualificar um indivíduo para uma qualificação específica (por exemplo, limite de crédito R$ 700,00, risco 3). O usuário recebe os dados do cliente do banco, limite de crédito e é salvo localmente em seu telefone e a certificação desse indivíduo é criptografada e depois assinada digitalmente pela chave privada do banco e colocada no blockchain para que qualquer outra instituição associada possa receber essa certificação pelo cliente.

Como funciona: 

	Criando a identidade

	1 - O cliente Caixa faz o download do aplicativo da Startup para realizar uma transação;
	2 - O cliente tira uma foto do cartão caixa e algum documento valido;
	3 - Uma api da Caixa extrai as informações pessoais desses documentos.
	4 - O usuário confirma os dados e se auto-certifica.
	5 - Por segurança, o usuário cria uma senha (também pode usar os recursos de digitalização de impressões digitais em seus telefones).
	6 - A informação é criptografada e salva no telefone, "O aplicativo, em seguida, leva mais medidas de segurança para ofuscar os dados. ("hashes" e "assina digitalmente" os dados)"
	7 - Os servidores da Caixa (MxCard) gravam os dados assinados com hash no blockchain. Estas informações não estão disponíveis em qualquer formato legível para MxCard ou para qualquer outra Stratup sem que o usuário decida compartilhar essa informação.
	
	Compartilhando informação

	8 - O usuário decide compartilhar suas informações pessoais com terceiros (instituição financeira, empresa de cabo, etc.).
	9 - Ele inicia um "aperto de mão" ou Hand Shake de verificação de identidade com o terceiro via blockchain.
	10 - As informações são colocadas em um “envelope” de dados totalmente criptografados. Somente o destinatário pretendido, consumidores da API Caixa, pode descriptografar.
	11 - As identidades de ambas as partes são confirmadas. (através da validação dos dados compartilhados, a chave pública do remetente e os hashes de assinatura no blockchain).
	12 - O resultado final é uma transação verificada garantida entre o usuário e a Startup.

Nesse cenário, nem mesmo o MxCard pode acessar as informações que estão sendo enviadas, pois o envelope criptografado é completamente opaco para todas as partes, exceto o destinatário pretendido.
