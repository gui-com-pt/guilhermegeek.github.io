---
title: Expressão de Função Imediatamente-Invocada
layout: post_entry
image: /media/javascript.png
excerpt: Utilização de funções self invoked anonymous no Javascript
categories:
 javascript
---
Em inglês o termo é IIFE - Immediately-Invoked Function Expression. Também é conhecido como Self-Invoked anonymous function.

#### Introdução ####
Em javascript, quando invocamos uma função criamos um novo contexto de execução. Todas as variáveis e funções que existam dentro deste contexto não podem ser acedidas por contextos paternos.
Isto é útil para termos privacidade dentro desse contexto sem poluir o resto.

    function registarVisita() {
        var i = 0;
        return function() {
            console.log(++1);
        };
    }

    var test = registerVisita();
    test(); // log: 1
    test(); // log: 2
    
    var test2 = registerVisita();
    test2(); // log: 1
    test3(); // log: 2

    test(); // log 3

i; // Erro de Referência - i não está defenido, apenas existe dentro de registarVisita

As funções test e test2 apenas são executadas quando as invocamos.
Quando defenimos uma função ``function foo() {}`` our ``var foo = function(){}`` temos um identificador para a função, que invocamos usando parêntises à frente
Mesmo que só chamemos a função test uma vez temos de ter a referência para depois invocarmos a função

    var foo = function() { }

No entanto, senão passarmos nenhum identificador para a função é lançada uma excepção

    function() { }();

Quando o parser encontra a palavra **function** num scope global ou dentro de uma função, trata-o como uma declaração de função ([Statement][1]) não como uma expressão de função ([Function][2]).
Como não está explicito que a função é uma expressão, o parser pensa que é uma declaração de função e espera que a palavra **function** seja seguida do nome, em vez de (. Isto é porque uma função requer um nome.


#### IIFE ####
Se colocarmos tudo dentro de parêntises, o parser vai esperar uma expressão de função em vez de uma declaração. Isto é porque em javascript parêntises não podem conter statments.
Quando o parser encontra a palavra **function**, sabe que tem de o parse como uma expressão e não declaração.
Ambos os exemplos podem ser utilizados para criar-mos a mesma privacidade dos primeiros exemplos dentro do contexto da função

    // Recomendação do Crockford (http://www.crockford.com/)
    (function() { 
    }());

    // Também funciona
    (function() {

    })();

Como o objectivo dos parênteses é separar as expressões das declarações de funções, eles podem ser omitidos quando o parser já espera uma expressão

    var i = function() { return 1; }(); 

No entanto devemos usá-los quando estamos a atribuir, por uma questão de convenção.
Os parêntises também são úteis para quem começa a ler o início da função já saber que ela imediatamente executada.


### Fontes ####

 * http://benalman.com/news/2010/11/immediately-invoked-function-expression/

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function