---
title: Já conheces o Hacklang? Uma linguagem que se interpola lindamente com o PHP!
layout: post_entry
image: /media/less.jpg
excerpt: Já conheces o Hacklang? Uma linguagem que se interpola lindamente com o PHP!
description: Já conheces o Hacklang? Uma linguagem que se interpola lindamente com o PHP!
categories:
 php hacklang
---

Hack é uma linguagem de programação desenvolvida pelo Facebook. A equipa usa esta linguagem na rede social e tornou-a código aberto.

O PHP é uma linguagem dinâmica enquanto que C# é estática.

Uma linguagem estática tem de ser compilada para ser executada, temos o exemplo de C++ e C#. Se num projeto .NET alterar-mos código temos de construir de novo o projeto e gerar as dll

Em PHP isso não acontece porque é dinâmica. Há casos em que isto até é aproveitado para criar ficheiros php em tempo de execuxão (um exemplo são os Hydrators do Doctrine ODM, um ORM orientado a base de dados documentais).

Hack é uma mistura destes dois tipos de linguagem, como o PHP é uma linguagem dinâmica e ambas interpolam-se sem problemas mas também é estaticamente "tipada".

O Hack utiliza um compilador Just In Time chamado Hip Hop Virtual Machine - HHVM. Em vez de interpretar ou compilar código PHP diretamente para C++, o HHVM compila o Hack e PHP para um código binário intermediário que é traduzido para código de máquina x64 dinamicamente em tempo de execução pelo compilador.

Entre as várias vantagens do hack vou destacar aquelas que me levaram a começar a programar com esta linguagem:

* Atributos - usar atributos podes facilitar em muito a manutenção do código. Podem ser usados nos métodos de um controlador para indicar o URL de destino, numa classe de validação para indicar os tipos de campos, numa classe de domínio para indicar fazer o mapeamento das propriedades da classe com os campos da base de dados, etc
* Enumerador - apesar de existem bibliotecas em PHP que simulam enumeradores eles não existem nativamente em PHP
* Genêricos - utilizar tipos genêricos aumenta muito o desenvolvimento em certas situações como a criação de um repositório quer receba um tipo genêrico **T**. Isto permite ter uma classe definida que consiga lidar com vários tipos de entidades (normalmente extendemos a classe do repositório e só escrevemos novas funções quando precisamos de queries específicas).
* Anotações de tipo - sem dúvida o forte do hacklang. Quando criamos uma variável indicamos se é um número inteiro, uma string, etc enquanto que em PHP é dinâmico e apenas anotamos arrays ou classes


### Instalação ###

A instalação é facilitada com pacotes suportados pela equipa do Facebook para debian, ubuntu e mint. Também existem pacotes distribuídos pela comunidade para Fedora, Centos, Amazon Linux, Arch e outras versões do Ubuntu.

O hhvm precisa de um servidor web, o recomendado é o nginx. Na instalação do hhvm é disponibilizado um script que configura a comunicação do hhvm com o nginx por sockets usando o fastcgi (não confundas com o php-fpm, ele é responsável por fazer o php comunicar com o fastcgi e não o hhvm). Este script é corrido após a instalação:

````
sudo sh /usr/share/hhvm/install_fastcgi.sh
````

Este script adiciona o ficheiro hhvm.conf no directório /etc/nginx


### Começar a usar ###

Partimos do princípio que qualquer projecto PHP irá correr no hhvm. Isto nem sempre é verdade pois hà funcionalidades no PHP que não são permitidas em hacklang, mas a maioria podemos considerar maus hábitos de programação que têem vindo a ser usados no PHP por ser "tão dinâmico".

Na raíz do projecto criamos um ficheiro em branco **.hhconfig**. Este ficheiro permite ao type checker do hhvm saber onde procurar o código a avaliar.

````
hhclient
````

Se o projecto for apenas PHP e ainda não tivermos programado nad em hacklang, o type checker vai correr um daemon e retornará ``no errors``.


### Extensões ###

O HHVM já traz extensões integradas do PHP. Podes ver a list [Aqui](https://github.com/facebook/hhvm/wiki/Extensions).

Ele também permite utilizar as extensões do PHP que não estã integradas sem teres de instalar de novo graças ao modo de compatibilidade com o Zend. Com esta opção extensões como gettext e mongo podem ser usadas. No ficheiro php.ini

````
hhvm.enable_zend_compat = true
````
