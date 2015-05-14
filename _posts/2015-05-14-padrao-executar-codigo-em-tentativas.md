---
title: Padrão em formato de tentativas para executar código que possivelmente irá falhar 
layout: post_entry
image: /media/angular-thumb.jpg
excerpt: 
categories:
 php hacklang
---

Para explicar este padrão vamos ver o problema. Quando ocorre uma excepção, à partida nós queremos lidar com os detalhes, guardá-los e se possível continuar com a operação. Tirando as excepções que invocadas com outro objectivo.

Há situações em que é aceitável que haja uma excepção que queirarmos destartar por completo. 

* Quando uma aplicação faz 100 ligações por segundo e ocorre uma falha na base de dados apenas vais querer registar a primeira, e as 99 restantes como um valor de tentativas realizadas.
* Podes dizer: quero que esta ligação seja feita e repetida 3 vezes (ser executada e ser invocada uma excepção de novo). Se falhar as 3 vezes então ĩnvoco a excepção para lidar com ela noutra camada da aplicação

Em PHP há um padrão comum para lidar com tentativas, este exemplo seria da camada de dados onde podemos actualizar a informação do utilizador na base de dados:

````
class UserData {

	protected $database;

	public function updateUserInformation($firstName, $website)
	{
		$fn = function($queryCommand) use($db) {
			// o código a ser executado
			$db->connect();
			$db->updateUser($queryCommand);
		};

		$this->retry(9, $fn(array('firstName' => $firstName, 'website' => $website)));
	}

	function retry($retries, $retryFn, $recreate = false)
	{
		if($retries < 1){
		  return $retryFn();
		}

		// guardamos a primeira excepção que é aquela que vamos invocar caso falhe as tentativas
		$firstEx = null;

		for($i = 0; $i <= $retries; $i++){
		  $ex = null;
		  try {
		    $retryFn();
		  } catch(\DataBaseException $ex){
		  	// isto seria uma excepão que estás á espera e queres repetir
		  }

		  if($firstEx === null){
		    $firstEx = $ex;
		  }
		  // apenas é invocada se atingirmos o limite de tentativas e já ter sido criada por uma tentativa
		  if($i === $retries && $firstEx !== null){
		    throw $firstEx();
		  }
		}
	}
````
A excepção invocada pelo método `updateUser` só seria invocada para fora deste método à décima tentativa.

Este exemplo pode solucionar alguns problemas. Vamos ver outro

#### Padrão de Disjuntor

A utilização mais comum é para verificar o estado de disponibilidade de um serviço (no nosso exemplo a base de dados). Seja qual for a utilidade ele deve ser (quase) sempre aplicado de forma assíncrona. Se for uma operação normal que bloqueie todas as outras conecções acaba por não realizar a sua tarefa que é informar independentemente da situação do serviço o estado dele. Mesmo que o servidor da base de dados tenha pegado fogo, ele vai ter de avisar à mesma!

Num exemplo simples guardamos um valor boleano num provedor de cache. Eu tenho adoptado pelo Redis ou então algo que trabalhe na RAM como uma chave indexada, caso contrário ainda vai alongar mais o tempo de execução do pedido.

No exemplo de cima, antes de executar a ligação confirmávamos se o serviço está disponível

````
	protected $cache;

	public function updateUserInformation($firstName, $website)
	{
		// ...
		if(!$this->cache->get('DB_STATE')) {
			return; // não está disponível	
		}
		$db->connect();
		$db->updateUser($queryCommand);
	}
````

Agora precisamos de uma forma de observar o estado da base de dados para actualizarmos a cache.

O mais fácil é implementar uma tarefa num intervalo de tempo através do crontab.

class WatcherDatabaseState() {
	
	protected $cache; 
	public function verify()
	{
		$database = mysql_connect('localhost','user','pass');
		if(!$db) {
			$this->setUnavailable();
		} else {
			$this->setAvailable();
			@mysql_close();
		}
	}

	protected setUnavailable()
	{
		$this->cache->set('DB_STATE', false);
	}

	protected setAvailable()
	{
		$this->cache->get('DB_STATE', true);
	}
}

// ...

new WatcherDatabaseState()->verify();
````

Outras implementações:

* um processo que subscreva a eventos da base de dados mas isso já era algo dedicado a inspecionar a base de dados (não só código mas máquina). 
* no caso de uma API Rest, poderia retornar no cabeçários das respostas HTTP um valor a indicar que determinado serviço já está disponível. Eu utilizo bastante isto para implementações não em tempo real (performance de websockes, etc) mas para manter a actualização em pouco tempo. Um exemplo seria a publicidade que muda de X em X tempo e pode trazer esse tipe informação