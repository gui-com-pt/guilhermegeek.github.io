---
title: Arquitecturas e Padrões em software
layout: post_entry
image: /media/angular-thumb.jpg
excerpt:
author: Guilherme Cardoso <email@guilhermecardoso.pt>
categories:
 software padrao-projeto
---

Esta é a minha área favorita e nem que escrever! Para já mantenho tudo neste artigo, depois logo se vê
#### PHP

Começar com um exemplo simples. Uma aplicação com as seguintes entidades:

 * Utilizador
 * Mensagem
 * Artigos

O que esta aplicação mais vai ter são operações CRUD - create, read, update e delete. Dividir uma aplicação em camadas tem vantagens.

{% highlight php %}
class UserRepository implements IRepository {
	
	protected $dbContext;

	public function __construct($ioc) {
		$this->dbContext = $ioc['database']->getDbContext('App\Domain\User'));
	}

	public function get($id){
		return $dbContext->get($id);
	}

}
{% endhighlight %}


{% highlight php %}
class UserService : BaseService {
	
	protected $userRepository;

	public function __construct($ioc) {
		parent::__construct($ioc);
		$this->userRepository = new \App\Data\UserRepository($ioc);
	}

	public function get($id) {
		try {
			$this->baseValidator->assertId($id); // If id is invalid, throw exception
			$user = $this->userRepository->get($id);

			if(is_null($user)) {
				throw new UserNotFoundException($user);
			}

			$userBuilder = new \App\Services\UserBuilder($user);
			$userBuilder->build();
			$userDto = $userBuilder->getDto();

			return $userDto;
		}
		catch(MissingArgumentException $ex) {
			$response = \App\Services\ErrorProvider::getResponse($ex);
			return $response;
		}
	}
}
{% endhighlight %}

Quando chamo a função assertId(). Ela vai validar o id e asegurar que é válido. Isto não significa que ele exista pois este tipo de função não recorre a recursos, apenas realiza uma validação.

No caso de ser inválido então invoca uma excepção, por exemplo InvalidIdException. Esta excepção não vamos estar a apanhar em cada função das APIs como é o exemplo do userService->get().

Estas função lidamos numa camada superior. O ideal é a BaseService ter um função que lide com excepções globais como o exemplo da InvalidException. 

{% highlight php %}
class UserApi : RestBase {
	protected $userBusiness;

	public function __construct($ioc) {
		parent::__construct($ioc);
		$this->userBusiness = new \App\Business\UserBusiness($ioc);
	}

	public function get(){
		$id = $this->app->request()->params('id');
		if(empty($id)) {
			throw new ArgumentMissingExpcetion('id');
		}

		$user = $this->userBusiness->get($id);

		return array('code' => 200, 'result' => $user);
	}
}

{% endhighlight %}
Agora falta declarar os pontos de acesso á API. Eu uso o Slim em projectos PHP apenas para isto, mas há outras micro frameworks melhores.

{% highlight php %}
$app = new \Slim\Slim();
$ioc = \App\Services\IocContainer();

$app->get('/api/user', function() use($ioc) {
	$ioc['userApi']->get();
});

$app->run();
{% endhighlight %}

Este seria o ficheiro index.php ou api.php fora da biblioteca. A ideia aqui é manter apenas um ficheiro na pasta onde a aplicação está publicada (tipica /var/www). Este ficheiro consume a biblioteca, essa biblioteca que é carregada por PSR está noutra pasta mais protegida.

A biblioteca é composta por

 * API - Classes que consomem a biblioteca
 * Serviços - Classes de negócio, consomem recursos como repositórios de base de dados, validam entradas do utilizador, etc
 * Data 


Eu não utilizo PHP para gerar as páginas. Como utilizo muito o Angular consigo ter apenas ficheiros estáticos que posso distribuir por uma CDN.
