---
title: PHP e gettext
layout: post_entry
image: /media/angular-thumb.jpg
excerpt: 
categories:
 php
---


### Linux

Para o gettext funcionar correctamente em Linux é preciso ter o idioma usado instalado no sistema operativo.

Isto é uma requisição, caso contrário o gettext não funciona. Para instalar novos idiomas em debian em descomento a entrada para o idioma que quero no ficheiro /etc/locale.gen, por exemplo:

	pt_PT.UTF-8 UTF-8

Para o debian reconfigurar o idioma 

	dpkg-reconfigure locales

Isto vai instalar todos os idiomas em uso no /etc/locale.gen


### PHP

Quando desenvolvo uma aplicação em PHP deixo os idiomas na configuração da aplicação. Se já usares uma framework terás de ver a documentação dela para associares um novo dominio.


	$language = "pt_PT";
	$codeset = 'UTF-8';
	$locale = $language . '.' . $codeset;
	$domain = 'messages';

	if(defined($locale)) { // linux
	    setlocale(LC_MESSAGES, $locale);
	}
	else {
	    putenv('LC_ALL={$locale}'); // windows
	}
	putenv('LANG={$language}');

	bindtextdomain($domain, '../i18n/Locale');
	bind_textdomain_codeset($domain, $codeset);
	textdomain($domain);

