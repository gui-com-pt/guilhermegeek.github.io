---
title: C#, Mono e Linux
layout: post_entry
image: /media/angular-thumb.jpg
description: Uma introdução ao Mongo, a linguagem que te permite escrever código livre em C#!
categories:
 c# mono
---

O mono é uma implementação de código aberto da framework .NET e da linguagem C#. Foi desenvolvido inicialmente pela Novell e neste momento é da propriedade da Xamarim.

Enquanto que uma aplicação desenvolvida em C# é alojada num servidor Windows porque precisamos de instalar a biblioteca .NET que apenas está disponível em Windows, o Mono apresenta-se como uma biblioteca compatível (não completamente) com o C#. A vantagem principal é o fato de ser código aberto e podermos correr num servidor *nix sem custos adicionais de licenças.

Ou seja, o Mono permite correr aplicações desenvolvidas em C# com a biblioteca .NET noutros sistemas operativos que não o Windows, assim como está livre de licenças comerciais. Boa!

Mas nem tudo é um conto de fadas. Tem-se falado muito na possibilidade de a Microsoft comprar a Xamarim, e consequentemente adquirir a propriedade do Mono. E agora, achas que a Microsoft vai manter o Mono código aberto sendo um concorrente direto ao produto deles? Não me parece.

Este ponto é crucial na escolha desta biblioteca para desenvolvimento. Eu escrevo C# com Mono mas sempre desconfiado do futuro do projeto, e sempre à espera do dia que tenha de migrar tudo para Windows novamente.


### Compatibilidade

Podemos considerar o mono uma versão alternativa do .NET e C# com as mesmas interfaces e bibliotecas com que trabalhamos no mundo .NET mas nem tudo está preparado para correr em Mono.

A maioria dos projetos compatíveis com Mono foram planeados assim ou acabaram por usar poucos recursos do código .NET que acabam por ser compatíveis com Mono mas a grande maioria não o é. Principalmente soluções de desenvolvimento como toolkits para o Visual Studio ou aquelas frameworks que supostamente tão completas que com meia duzia de configurações tens uma solução disponível.

Eu não sofro estes problemas de compatibilidade porque comecei a desenvolver em C# no nível mais baixo possível sem muitas dependências e acabei por criar uma framework com que desenvolvo projetos.


### Projetos

Agora sim, uma lista de projetos suportados! Muitos já usei, outros não mas sei que são compatíveis.

 * ServiceStack - ganhei um bocado de "pó" ao ServiceStack quando da versão 3 para 4 a licença mudou e o lema deles sempre foi "opensource". No entanto reconheço que é uma framework excelente, simplesmente não me agradou o rumo que o mythz tomou mesmo que supostamente tenha sido o melhor para o projeto
 * NancyFX - muito bom! Esta é a minha framework de eleição e que recomendo. Não é tão completa como o ServiceStack por exemplo más é simples, bem desenhada e extensível. Eu utilizo-a mais com a finalidade de servir APIs num formato REST, enquanto que o resto do código mantenho isolado do NancyFX