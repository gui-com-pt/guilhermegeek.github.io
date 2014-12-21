---
title: Análise da fuga de informação da equipa do Facebook
layout: post_entry
image: /media/less.jpg
excerpt: A minha opinião e análise sobre a causa e as consequências da fuga de informação da equipa do Facebook
description: A minha opinião e análise sobre a causa e as consequências da fuga de informação da equipa do Facebook
categories:
 security facebook
---
# Análise

Escrevi na Volupio [um artigo sobre a fuga de informação da responsabilidade de trabalhadores do Facebook](http://volupio.com/falha-de-programadores-facebook-revela-demasiado/), aqui vou tentar analisar mais detalhadamente a informação recolhida.

Tudo começa na publicação de Malcom, que [pode ser lida aqui](http://sintheticlabs.com/blog/a-look-inside-facebooks-source-code.html). Malcom estava a lidar com erros do Phabricator, uma plataforma de código aberto lançada pela equipa do Facebook. Quando eu elogio o Facebook por contribuir para o código de fonte aberta é exactamente por isto, bibliotecas, plataformas e até uma linguagem de programação que a equipa desenvolveu e distribuíu. Para quem programa em PHP, o [PHP Hack](http://hacklang.org/) é um grande exemplo de um passo dado pelo Facebook para levar o PHP mais além, e para mim enquanto programador C# foi uma razão para gostar ainda mais de PHP.

Como é uma plataforma relativamente recente e utilizada internamente pela equipa, é de esperar que as conversas e registos que se encontrem pelo Google provenham deles mesmos. Foi isso que aconteceu quando o Malcom pesquisa no Google e se deparou com código colado no pastebin que continha referências ao Phabricator e estava directamente relacionado com a plataforma do Facebook.

Vamos ver um exemplo: [http://pastebin.com/DMjWQ0cJ](http://pastebin.com/DMjWQ0cJ)

	Index: flib/core/db/queryf.php
	===================================================================
	--- flib/core/db/queryf.php
	+++ flib/core/db/queryf.php
	@@ -1104,11 +1104,12 @@
	  *  @author rmcelroy
	  */
	 function mysql_query_all($sql, $ok_sql, $conn, $params) {
	+  FBTraceDB::rqsend($ok_sql);
	   switch (SQLQueryType::parse($sql)) {
	     case SQLQueryType::READ:
	       $t_start = microtime(true);
	       $result = mysql_query_read($ok_sql, $conn);
	       $t_end = microtime(true);
	       $t_delta = $t_end - $t_start;
	       if ($t_delta > ProfilingThresholds::$queryReadDuration) {
	         ProfilingThresholds::recordDurationError('mysql.queryReadDuration',

A informação colada nesse pastebin foi publicada por um visitante dia 17 deste mês. Pela formatação do código conseguimos ver que provem de uma consulta com o GIT, possivelmente um diff. É uma função simples que executada instruções SQL, e muito possivelmente o trabalhador do Facebook colou isto para passar a outro.

Isto é muito comum, dou por mim a partilhar erros e registos com outros utilizadores (seja no Mirc ou comunidades como StackOverflow) neste tipo de serviços mas sempre informação que não considero priveligiada, caso contrário não pode ir para um domínio publico que ainda por cima é indexado pela Google!

Continuando com a análise, este é apenas um pedaço da informação. No artigo, o Malcom recolheu muito mais código e inclusive arquivou tudo num ficheiro .zip e disponibilizou no seu site. Nesse arquivo, além de registos de erros está também pedaços de código e também de testes.

Algo interessante a realçar é o facto de a equipa usar o PHPUnit para realizar testes. 

Pelos caminhos indicados em alguns registos também podemos saber o nome das contas utilizadas por alguns trabalhadores. Por exemplo

	Running unit tests...
	HipHop Fatal error: Uncaught exception exception 'PhutilBootloaderException' with message 'The phutil library '' has not been loaded!' in /home/engshare/devtools/libphutil/src/__phutil_library_init__.php:124\nStack trace:\n#0 /home/engshare/devtools/libphutil/src/__phutil_library_init__.php(177): PhutilBootloader->getLibraryRoot()\n#1 /home/engshare/devtools/arcanist/src/unit/engine/phutil/PhutilUnitTestEngine.php(53): PhutilBootloader->moduleExists()\n#2 /home/engshare/devtools/arcanist/src/workflow/unit/ArcanistUnitWorkflow.php(113): PhutilUnitTestEngine->run()\n#3 /home/engshare/devtools/arcanist/src/workflow/diff/ArcanistDiffWorkflow.php(1172): ArcanistUnitWorkflow->run()\n#4 /home/engshare/devtools/arcanist/src/workflow/diff/ArcanistDiffWorkflow.php(225): ArcanistDiffWorkflow->runUnit()\n#5 /home/engshare/devtools/arcanist/scripts/arcanist.php(257): ArcanistDiffWorkflow->run()\n#6 {main}

Este registo foi gerado HHVM e a conta engshare sugere uma conta partilhada pelos engeheiros do Facebook.

Nos outros logs está muito presente o nome de uma biblioteca que será utilizada pela equipa que contém utilitários úteis e funções para ajudar o desenvolvimento.

	[25/10/2013] Promoting The Meme Bank (1/1) - Campaign Update Failed: Campaign 6009258279237: Value cannot be null (Value given: null) TAAL[BLAME_files,www/flib/core/utils/enforce.php,www/flib/core/utils/EnforceBase.php]

O nome dessa biblioteca é flib - Facebook Library.

Outra informação muito relevante, no qual se baseou o artigo que escrevi na Volupio é uma ligação à base de dados. Esta informação parece ter vindo de um print_r() de uma array que acabou por ser enviado para produção hà alguns anos:

	array ( 'ip' => '10.21.209.92', 'db_name' => 'insights', 'user' => 'mark', 'pass' => 'e5p0nd4', 'mode' => 'r', 'port' => 3306, 'cleanup' => false, 'num_retries' => 3, 'log_after_num_retries' => 4, 'reason' => 'insights', 'cdb' => true, 'flags' => 0, 'is_shadow' => false, 'backoff_retry' => false, )


# O que podemos aprender daqui

Quando trabalhei em consultoria sempre fui avisado para a necessidade de ter cuidado com o código que poderia "tirar para fora" da rede interna de desenvolvimento, assim como as cláusulas que podem existir nos contratos em que o trabalhador é responsabilizado por este tipo de conduta.

Se eu estiver a trabalhar numa tarefa no final do dia de uma Sexta Feira e a empresa estiver fechada no fim de semana, vou ser tentado a acabar o código no Sábado. Para isso passo-o para uma pen, colo-o num serviço como o pastebin, deixo-o na minha conta de email, etc. Entre estas possibilidades existe o privado e público, o caso do pastebin é publico.

Mesmo em serviços privados eu sempre tive muito medo. Enquanto programador tenho acesso ao código fonte completo daquilo em que estou a trabalhar, e basta perder uma pen ou deixar a sessão ligada no meu PC enquanto vou à casa de banho num café, e pode ser o suficiente para este tipo de fugas acontecerem.

Neste caso do Facebook foi pior, pois foi colado no pastebin e nem foi protegido com uma password.

O que podemos aprender daqui? De nada vale um projeto estar protegido por firewalls, pontos de acessos, enfim tudo e mais alguma coisa que possamos imaginar em segurança de redes, se os programadores são negligêntes ao ponto de colarem o próprio código na Internet!

Link do artigo que escrevi na Volupio: [http://volupio.com/falha-de-programadores-facebook-revela-demasiado/](http://volupio.com/falha-de-programadores-facebook-revela-demasiado/)