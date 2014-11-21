---
title: Fazer debug em PHP com Vim, Vdebug e Xdebug 
layout: post_entry
image: /media/php.jpg
excerpt: Fazer debug a código remoto através de uma ligação SSH, evaluar expressões, etc
description: Já exprimentas-te depurar PHP numa consola com o VI? Aprende a fazê-lo em poucos passos
categories: php linux
---

Utilizar apenas a linha de comandos para evaluar uma expressão enquanto fazemos debug numa ligação SSH?

<img src="/media/posts/vim_vdebug1.jpg" class="img-responsive" />

Neste artigo vou explicar como fazê-lo.

### Xdebug
O Xdebug é um debugger opensource muito utilizado, se programas em PHP possivelmente já está instalado no pc de desenvolvimento.
IDE's como o PHPStorm ou NetBens têm grandes funcionalidades de debugging mas vamos alcançar o mesmo com a linha de comandos a usar o vim.

### Vim

O vim é fantástico! Ao longo de tantos anos continua a ter uma presença muito forte no mundo unix e todo o programador o conhece.

    sudo apt-get install vim

Precisas de confirmar que o vim foi instalado com as flags +signs  e +python, para isso corre
	vim
	:version

Analisa o registo e caso não tenha instalado segue este tutorial: 


### Vdebug
O Vdebug é um plugin para o vim que permite fazer debug a vário código, não apenas PHP!
O mais fácil para instalares o Vdebug é adicioná-lo nas configuração do vim, em ~/.vimrc (cria este arquivo caso não exista)

	Plugin 'joonty/vdebug'

Depois corre este comando para instalares o plugin
	vim +PluginInstall +qall

Por defeito o Xdebug é configurado na porta 9000 e o Vdebug está à espera disso. Caso corras o Xdebug noutra porta tens de o indicar no ~/.vimrc

	let g:vdebug_options = {}
	let g:vdebug_options["port"] = 9001


A documentação do Vdebug é excelente, basta veres o índice da ajuda e tens uma noção das funcionalidades principais e comandos existentes.
Para veres a documentação
	vim
	:help Vdebug

Primeiro vais ter de iniciar o debugger para esperar por uma ligação. Esta ligação é activada pela chave passada no XDEBUG_SESSION_START. Esta chave é definida no URL e depois na cookies. O Vdebug aceita qualquer chave aqui, independentemente da que especifiques no ficheiro php.ini do php5-fpm.
Entra no vim (linha de comandos: vim) e carrega no F5. Aparece a mensagem:

	Waiting for a connection (Ctrl-C to cancel, this message will self-destruct in
20  seconds...)

Agora num browser entra em http://localhost/?XDEBUG_SESSION_START=jesus_loves_you (neste caso a porta 80, se usares outra diferente altera).
Isto vai abrir 4 janelas diferentes. Na esquerda o ficheiro a ser visto e á direita as variáveis locais, variáveis observadas e o output do debugger.

Os comandos principais são:

 * F2 - Próximo