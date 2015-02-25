---
title: PHP - Biblioteca
layout: post_entry
image: /media/angular-thumb.jpg
excerpt: 
categories:
 php composer
---


Neste artigo vou explicar como podes reutilizar código criando uma biblioteca que seja partilhada. Esta biblioteca vai ter como dependência a biblioteca Respect, que é utilizada para validação.

### Composer

Para gerir dependências em PHP o composer é o gestor de eleição. Não é nenhum programa que tenhas de distribuir com a biblioteca mas sim um gestor de dependências.

Na raíz da aplicação (no directorio bible) criamos o ficheiro composer.json. Este ficheiro contém a informação necessária ao composer para reconhecer a biblioteca, as suas dependências e outras informações importantes como a utilização de PSR.

Exemplo de um ficheiro composer.json

	{
		"name": "o-teu-nome/biblioteca",
	    "config": {
	        "vendor-dir": "src/vendor"
	    },
	    "require": {
	        "respect/validation": "dev-master"
	    },
	    "autoload": {
	        "psr-0": {
	            "Bible": "./src"
	        }
	    }
	}


No vendor-dir indicamos o directorio onde as dependências vão ser instaladas. Como a biblioteca vai ficar em /bible/src/Bible deixamos as dependências em /bible/src/vendor

O autoload permite-nos indicar onde está a biblioteca, isto é necessário para que as aplicações a consumam. O composer precisa de saber onde está situada a biblioteca porque em nenhuma parte do código vamos referenciar directamente este caminho. As dependências são da responsabilidade do composer, nós apenas precisamos de ter tudo bem registado e incluindo o ficheiro autoload.php que se encontra dentro da pasta bible/src/vendor.


### A biblioteca

Esta biblioteca vai ser simples. Vamos chamar-lhe *Bible* e tem como função prover serviços que procurem versículos na biblia. Vão ser dois ficheiros: o serviço VerseService e uma classe utilitária VerseFormat para formatar-mos os versos.

O ficheiro bootstrap.php é responsável por carregar todas as dependências da biblioteca e configurações primárias.

bible
bible/src
bible/src/bootstrap.php
bible/src/Bible
bible/src/Bible/Services
bible/src/Bible/Services/VerseService.php
bible/src/Bible/Helpers
bible/src/Bible/Helpers/VerseFormat.php

A pasta src indica source - o directório onde está todo o código da Biblioteca. Outras pasta de primeiro nível além da src poderiam ser:
 
 * docs -  para documentação
 * examples - para exemplos de como utilizar a biblioteca.


### Aplicação Cliente

Esta é a aplicação que vai consumir a biblioteca. Enquanto que a biblioteca indica o autoload e as dependências, o cliente tem de indicar como dependência a biblioteca e as dependências da biblioteca (neste exemplo o respect/validation) também são automáticamente instaladas.

O cliente tem de ter um ficheiro composer.json também

	{
	    "config": {
	        "vendor-dir": "src/vendor"
	    },
	    "require": {
	        "respect/validation": "dev-master",
	        "o-teu-nome/biblioteca": "dev-master"
	    },
	    "autoload": {
	        "psr-0": {
	            "Bible": "./src"
	        }
	    },
	    "repositories": [{
            "type": "vcs",
            "url": "git@bitbucket.org:o-teu-nome/biblioteca.git"
        }]
	}

O composer tem um registo publico da mesma forma que o bower mas neste exemplo a biblioteca é privada, por isso indicamos no **repositories** a localização. 

O dev-master é o ramo GIT que queremos utilizar. Poderia ser

 * master
 * * (para o mais recente apenas)
 * production

Vai depender da forma como gerires o GIT. Eu gosto de manter a mesma versão da biblioteca com a tag do Git para criar versões 0.1, 0.1.1

### Actualização

Neste exemplo temos um cliente a utilizar a biblioteca mas podem ser N. A utilização do composer é também para gerir as actualizações de uma forma muito simples: alteramos a biblioteca e enviamos todas as alterações para o versionador de código (GIT). Os clientes depois actualizam as dependências com **composer update**

