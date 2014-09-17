---
title: Invadir um site Wordpress - métodos e exemplos
layout: post_entry
image: /media/hacker1.jpg
excerpt: Exemplos de como um site Wordpress pode ser invadido.
categories: php linux hack
---

### Versão

Há vulnerabilidades conhecidas no código principal do Wordpress. Não são muitas mas andam aí e são fáceis de apanhar!

Para descubrires a versão do wordpress procura a tag **generator** na página retornada (ver código fonte do browser...).

{% highlight html %}
<meta name="generator" content="WordPress 3.9.2" />
{% endhighlight %}

A maioria das instalações contém o ficheiro readme.html que tem de ser removido depois de instalado o Wordpress. Também podemos ver a versão por aí.

O próximo passo é saber a versão dos plugins. Podemos fazer um método passivo e fazer pedidos http aos ficheiros do plugin que procuramos, podemos também ver a resposta do http se é 200 para existente ou 404 para não encontrado.

@todo - vou indicar alguns scripts com base de dados actualizadas que podemos usar para tornar o método aggressivo.

Daqui iremos usar vulnerabilidades para os plugins encontrados, mas isso mais à frente.

### Utilizadores

O método que vamos seguir para atacar as contas vai ser brute force. Uma tentativa em massava de autenticação com várias passwords pré defenidas.
O Wordpress permite saber quem é cada utilizador pelo seu id
	
	http://guilhermecardoso.pt/?author=1 

Se estiver configurado para URLs amigáveis, o pedido retorna um redireccionamento indicando o nickname no url
	
	http://guilhermecardoso.pt/author/gui

Além do método de brute force há outras formas de obter as credências.
Se estiveres ligado na mesma rede que alguém que entre no site e tiveres a sorte de não ter nenhum certificado SSL um rastreio do pedido http indica o utilizador e password. Da mesma forma podem ser usados keyloggers mas ou o instalas no mesmo computador que a pessoa que vai aceder ao site, ou dentro da mesma rede usas um exploit para instalar o keylogger (redes públicas com WindowsXP e softwares como o Java e Internet Explorer desactualizados são indicadas).

De volta aos utilizadores, se te autenticares com um utilizador existente e uma password inválida o Wordpress é nosso amigo e avisa-nos que a conta existe.

<img src="/media/posts/wordpress-hack1.png" class="img-responsive" />


### Ferramentas

As ferramentas e scripts que aqui vou indicar são código aberto e é espetacular encontrá-las no github, só demonstra a verdadeira liberdade do opensource :)

#### http://wpscan.org/

 * Login com brute force
 * Análise de plugins e temas com vulnerabilidades conhecidas
 * Indicar lista de utilizadores

Um pequeno exemplo


	ruby wpscan.rb -u 192.241.xx.x68 --threads 20 --wordlist 500worst.txt --username testadmin

	********* SNIP ******************

	[+] Starting the password brute forcer

	  Brute forcing user 'testadmin' with 500 passwords... 100% complete.
	[+] Finished at Thu Jul 18 03:39:02 2013
	[+] Elapsed time: 00:01:16


Admirado pelas 500 passwords num minuto e 16 segundos? Isto é numa VPS fraca na digital ocean que me custa 3.5 euros mensais. Servidores mais rápidos e infrastruturas maiores permitem-te resultados melhores. Em caso de ips bloqueados ou outras defesas que sejam aplicadas podes recorrer a uma rede: várias máquinas com uma lista curta de passwords a fazerem tentativas aleatórias para não serem bloqueadas por exemplo.


#### Nmap

Esta ferramenta aparece no Matrix! Ela não serve apenas para procurar portas abertas, diz-nos bastante mais que isso.

@todo mostrar exemplos de scripts ecs :)


### Vulnerabilidades

As vulnerabilidades que estas ferramentas e scripts utilizam são erros ou falhas existentes no código. Estes erros e falhas podem permitir:

 * Enviar uma shell para o servidor e aceder a ela (vai efectuar acções no servidor como compressão de directorios e enviar por ftp, descubrir passwords em ficheiros de configuração, etc). Esta vulnerabilidade é comum em anexo de uploads que não validam correctamente o pedido.
 * Injecção de código SQL. URLs do gênero /wp-content/plugins/exemplo/ficheiro.php?id=3534 são usados para injectar código SQL, ou seja, substituir o id por algo que interpretado pela base de dados faça algo que não deveria. Isto ocorre também por má validação

O problema destas vulnerabilidades é que são demasiado fáceis de ser descoberta por ser código aberto e todos temos acesso, até mesmo plugins pagos recebes o código (apenas tens de usar a licença para usar o plugin no site). O Wordpress tem uma comunidade enorme de programadores, uns melhores que os outros.
Há muitos temas excelentes a nível de design mas fracos na programação e que podem comprometer um servidor inteiro. Empresas que se baseam em "desenvolver" websites (não, CMS não é programar cara!) com CMS deste gênero correm estes riscos e a menos que não conheçam bem o terreno e saibam o que fazem, é comum perderem horas a fazer restauros por causa de plugins infectados.