---
title: Organiza o teu código CSS com o padrão BEM 
layout: post_entry
image: /media/less.jpg
excerpt: Introdução a CSS com LESS utilizando o Bootstrap
description: Aprende a utilizar o Bootstrap com LESS! Configura um tema e reparoveita o teu código
categories:
 less
---
Qualquer folha de estilos que tenhamos, podemos compilar com less e é gerado um resultado igual.
Isto é bom para projectos já existentes, onde podemos começar a fazer implementações a tirar partido do less sem termos de remudelar todo o código já usado.


#### Mixins ####

Se precisas de desenvolver aplicações e websites podes criar um conjunto de funções que partilhes nos projectos. Um pacote bower ou um simples ficheiro .css

 * Código compatível - Aqui é que tiramos realmente proveito! Para aplicar uma sombra, em vez de escrever-mos .shadow, .webkit-shadow, etc criamos um método que o faça, receba variáveis para tamanhos e cores
 * Grelha - Eu gosto de esquematizar o design em grelhas. Não obrigo a seguir sempre este padrão mas para os containers e elementos principais do layout aplico (cabecários, barras laterais, etc).

#### Grelha do Bootstrap ####
Eu não gosto de definir os tamanhos dos elementos no html. Acho uma má prática.

 * Numa aplicação grande em que uses sempre o mesmos tamanho para os formulários (ex: col-xs-7), quando fores alterar o tamanho vais fazê-lo em todas as páginas.
 * Simplesmente não me parece bem. Prefiro defenir isto em css e não usar classes 

Com less, podemos fazê-lo a usar as mixins do Bootstrap. Por exemplo:

    <div class="ex-container">
        <div class="sidebar">

        </div>
        <div class="content">
        </div>
    </div>

    .ex-container {
        .container; /* não chamamos um método mas aplicamos a class ``container`` neste elemento */

        .sidebar {
            .make-xs-col(3);
        }
        .content {
            .make-xs-col(9);
        }
    }

É aqui que o less é pior que sass. **links**

### Cores ###

O Bootstrap é um excelente exemplo para definir-mos as variáveis das cores.
Usar variáveis como marca, marca-invertida, etc permite-nos aplicar as mesmas cores em vários componentes a seguir um padrão de UX.

    @cor-preto-escuro: #666666;
    @cor-marca: #EEEEEE;
    @cor-marca-invertida: #DDDDDD;

    @texto-cor: @cor-preto-escuro;

    body {
        color: @texto-cor;
    }
    .component_noticias {
        .cabecario {
            background-color: @cor-marca;
            color: @cor-marca-invertida;
        }
    }
