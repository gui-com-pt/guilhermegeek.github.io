---
title: Começar a trabalhar como programador
layout: post_entry
image: /media/angular-thumb.jpg
excerpt: 
categories:
 programacao
---

Neste artigo vou tentar explicar que vários rumos podes tomar na área da programação, mas também direccionado a quem queira estudar web design ou outras áreas como gestão de base de dados. 

Tudo começa no planeamento que vais criar para a tua carreira enquanto programador. Vou dividir em três níveis

 * Baixo - Não investes muito tempo para conhecer a linguagem de programação (ou seja, apenas conheces uma também) e trabalhas em projetos rotinários que não te façam ter de sair da tua zona de conforto. Isto implica que não precises de estudar e avançar mais do nível onde te encontras.
 * Normal - Além das 8 horas de trabalho investes tempo para te manteres actualizado e tudo que aprendes não é apenas da necessidade dos projetos. 
 * Alto - Estudas e aprendes tecnologias que não usas no teu trabalho, lês teses e projetos com o objetivo de aprendizagem

Algo que sempre gostei em programação é que o teu valor enquanto provedor de serviços (não meramente um empregado) pode ser porpocional ao tempo que dedicas a estudar. Para te tornares um melhor programador não precisas de ir para uma boa faculdade ou ter uma cunha, simplesmente tens de estudar. E para isso é preciso gostar mesmo asério do que vais fazer.

Dependendo da área onde residas, a tua escolha de te tornares um programador de alto nível pode implicar que tenhas de trabalhar noutro local ou então iniciares-te como freelancer. No caso de Portugal hà boas empresas fora das cidades principais Lisboa, Porto, Coimbra e Braga. No entanto é mais em Lisboa e Porto que o mercado de consultoria está localizado e onde tens mais diversidade de escolha.


### Empresas de Webdesign

Não é a desenvolver websites ou a usar CMS que vão aparecer desafios que te evoluam e criem a necessidade de estudo. Há muitas empresas assim, com serviços como: desenvolvimento de websites, criação de lojas online, criação de portais, etc. Basicamente criam sites. Neste tipo de empresas não tens muita margem para evoluir. Alguns exemplos:

 * O código que escreves é irrelevante tanto para o cliente como para o teu empregador, pois não tens nenhum chefe de equipa decerta forma a julgar-te e valorizar-te também. Curtos prazos de desenvolvimento são pedidos porque o projeto foi vendido ao preço de umas sapatilhas, e tens de rentabilizar o tempo.
 * Testes unitários demoram tempo. Na realidade, até podes poupar tempo se souberes desenvolver a escrever testes (TDD) mas isso não interessa para a empresa. Escrever testes = escrever mais código = prazos maiores de desenvolvimento.


Uma empresa assim pode ser boa para começares a trabalhar. Outra alternativa é começar no mercado da consultoria mas isso já requer alguma experiência ou boa teoria.

### Consultoria

Em consultoria o cenário é diferente, muito diferente. O teu empregador pode ser uma empresa com equipas pŕoprias de desenvolvimento que esteja a contratar especificamente para aquele projeto ou pode ser uma empresa que apenas sub contrata.

Podes ser contratado apenas para um projeto ou assinar mesmo um contrato com uma empresa mas simplesmente trabalhares como consultor. Vais participar em projetos externos, conhecer várias pessoas da área pois lidas com muita coisa mesmo! Na mesma sala pode estar uma equipa de desenvolvimento á medida, outra de SAP.

Os ambientes são mais formais. Eu gosto disto, trabalhei em sítios onde realmente respeitam o local de trabalho e o silêncio é apreciado. Isto é muito importante porque se fores trabalhar para uma empresa pequena onde tenhas uma pessoa que a função dela não requer atenção e foco na tarefa, basta ser engraçadinho e é o suficiente para te afetar durante o trabalho, não te conseguires concentrar.

#### Perfil

Em consultoria a procura é específica. Enquanto que numa empresa de webdesign tens de saber HTML, CSS, Javascript e uma linguagem como PHP, neste tipo de projetos procuram profissionais específicos para as linguagens e os requisítios são mais elevados.

Há requisitos na procura que também justificam os salários mais altos. Por exemplo para um programador C# pode ser pedido:

 * Desenvolver APIs com a .NET Web API
 * Validar os serviços com testes unitários
 * Utilizar GIT ou outro gestor de código

Para um web designer:
 
 * Código HTML validado com a W3C
 * Utilizar LESS ou SASS para gerar o código CSS
 * Utilizar um padrão em CSS (por exemplo: BEM)


Existem níveis que classificam a tua posição dentro da empresa. 
 
 * Júnior - programador com menos de 2 anos de experiência
 * Sénior

Uma dica: se queres trabalhar em consultoria e queres investir em ti então estuda o que mercado mais procura e valoriza! É escusado dizer que quanto mais precisas de aprender, melhor é a recompensa salarial ;)



### Freelancer

Esta área tem esta mais valia em relaçao a muitas outras profissoes. O mercado recorre muito a freelancers e por isso, se investires mesmo em ti consegues trabalhar como freelancer.

Há aqueles freelancers que só o são por não conseguirem arranjar emprego.

Aquele programador que não tem experiência séria, num projeto simples sente-se assustado com novas funcionalidades que desconhece possíveis implementações ou que simplesmente demore demasiado tempo a entregar um produto. 

Todos começamos por algum lado, é preciso é continuar.



#### Projeto

Para aprender a programar web quer uses php, python, c# tens sempre bibliotecas gratuítas que podes usar e desenvolver um projeto. Na fase inicial é uma mais valia ao portfólio e é tido em conta nas entrevistas.

Seja para um cliente ou para experiência é sempre preciso estruturar e definir toda a preparação do projeto. Há livros a falar da fase de planeamento de um projeto.


Eu não levo tão asério. Começo em rascunho numa folha de papel, um esquema UML ou a usar um programa de mockups. Primeiro escolho o domínio daquilo que vou desenvolver. O domínio é formado por entidades, por exemplo para um blog as entidades seriam: Article, Comment, User, Review

Com estas entidades escrevo serviços que vão fazer operações como: ArticleCreate, CommentSend, ReviewEdit, Register, CommentAprove, ArticlePublish, CommentList

Serviços comuns como NotificationSend, EmailSend que meto à parte. Este esquema depois serve-me como modelo daquilo que vou desenvolver. 

Podes geriar a parte html usando layouts, páginas parciais. Isto é no lado do servidor seja em PHP, C#, python, há frameworks e bibliotecas que auxiliam.

Outra alternativa é desenvolveres uma SPA - single page application com uma framework como o AngularJS. A parte do cliente (html, css, javascript) fica separada do código do servidor, o backend. No caso de desenvolver uma SPA o ideal é sempre servi-la com uma API. As linguagens modernas têm frameworks boas para implementar APIs.

Eu recomendo sempre aprenderem angular! Uma aplicação angular pode servir um website ou uma aplicação android a usar phonegap, ionicframework. Podes escrever toda a lógica, serviços num módulo que partilhes no website e aplicação, e depois desenvolves duas aplicações que consumam esse módulo.

Além que aprendes javascript e html, mesmo que depois venhas a trabalhar no lado do servidor para fazer isto noutros projetos já sabes boas bases e facilmente te adaptas.

Isto é javascript mas se sabes programar PHP ou C# também sabes javascript. 


Para desenvolver o código temos de seguir uma arquitectura ou pelo menos alguns padrões que asegurem um bom código. 

Eu gosto muito da arquitectura SOA - arquitectura orientada a serviços mas há outras e depende sempre do que fores desenvolver. Um exemplo de uma aplicação dividida em camadas a utilizar a framework Slim em PHP para servir uma API: https://www.guilhermecardoso.pt/software/2014/09/23/arquitectura-padroes.html

Para implementares funcionalidades como validação de dados, formatação de texto, tratamento de imagens, gestão de ficheiros no sistema podes usar bibliotecas. Cada linguagem tem o seu gestor de dependências como o Nuget em C#, composer em PHP, bower para javascript e css. Ter dependências como bibliotecas geridas por algo assim é melhor, ajuda-te a manter tudo actualizado e torna-se mais fácil a instalação em produção.

Há serviços que podes contratar como websockets, envio de emails, um sistema de comunicação em grupo. Grande parte das empresas que os prestam vêem de programadores e disponibilizam pacotes gratuítos para projetos startup ou pequenos. 


 * Isto foi escrito pelos Gang Of Four. Não é um livro para um iniciante ler mas se queres aprender a estruturar aplicações e a programar código reutilizável com padrões tens mesmo de ler! - http://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented-ebook/dp/B000SEIBB8



Apartir daqui vou escrever mais artigos específicos do que falei

 * Plano - roadmap a que te comprometas para começares a programar ou evoluires.
 * Curriculum - como te podes apresentar a uma empresa

Começar a programar
 
 * Recursos de aprendizagem
 * Escolher uma linguagem de programação


Freelancer

 * O teu primeiro projeto real
 * Estrutares a base da tua equipa de modo a que outros programadores possam desenvolver e rentabilizar o tempo
 * Propostas de orçamentos
 * Divulgação