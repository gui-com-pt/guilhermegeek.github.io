---
title: Traceur - Compilador de ECMAScript 6, o novo JavaScript!
layout: post_entry
excerpt: 
description: Compile javascript ES6 em javascript compatível com os navegadores de hoje
keywords: git simples
categories:
 git
---

O ECMAScript 6 é tão atractivo a qualquer programador! Introdução de classes em javascript, utilização de métodos como **find** nativamente em arrays, funções com parâmetros pré defenidos, são apenas algumas das novidades que vêm com esta versão do ECMAScript.

Apesar de ainda não ser 100% implementado nos navegadores e ainda faltar um pouco é possível escrever código javascript a seguir e compilá-lo de modo a ficar compatível com os navegadores.

A Google lançou uma ferramenta chamada **Traceur** que permite exactamente isso, compilar javascript ECMAScript 6 para código compatível com os browsers. Esta ferramenta até permite fazer esta compilação durante a execução, o que significa que basta incluires a biblioteca do Traceur!

Vamos usar um exemplo:


  class House {
  	
  }
  class HouseFactory {
    build(name = 'House name') {
      return new House();
    }
  }

  var factory = new HouseFactory();
  var house = factory.build();


Este código será convertido em:


  var House = function House() {
    "use strict";
  };
  ($traceurRuntime.createClass)(House, {}, {});
  var HouseFactory = function HouseFactory() {
    "use strict";
  };
  ($traceurRuntime.createClass)(HouseFactory, {build: function() {
      "use strict";
      var name = arguments[0] !== (void 0) ? arguments[0] : 'House name';
      return new House();
    }}, {});
  var factory = new HouseFactory();
  var house = factory.build();



Existem dois métodos para compilar o código: em tempo de execução ou compilar o programa Traceur e usá-lo pela linha de comandos. Podes puxar o repositório do GitHub e compilar o programa com **make**. Assim podes aceder às funcionalidades pela linha de comandos e também facilita a utilização de scripts para automatização de tarefas.

````
./traceur --out /tmp/destination.js --script /tmp/source.js
````

A ferramenta está bem documentada e também não é muito complicada de entender. Se quiseres começa a ler o [guia de introdução oficial](https://github.com/google/traceur-compiler/wiki/Getting-Started).