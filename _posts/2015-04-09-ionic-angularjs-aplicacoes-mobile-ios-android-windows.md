---
title: Ionic - Desenvolver aplicações mobile para Android, IOS e Windows
layout: post_entry
image: /media/angular-thumb.jpg
excerpt:
categories:
 angularjs ionic mobile
---

Quem está ligado ao .NET e trabalha com aplicações mobile certamente já ouviu falar da empresa Xamarim que disponibiliza uma framework e SDK para desenvolver aplicações compatíveis nestes três plataformas: Android, IOS e Windows. Estas aplicações são desenvolvidas em C#.

Eu gosto de C# mas não gosto da Xamarim. Outra alternativa é o Ionic. Uma solução que te permite desenvolver aplicações compatíveis mas ao invés de usar Java ou C# utilizamos Javascript e HTML/CSS. Sim, apenas tecnologias do lado do cliente!


<img src="/media/posts/ionic-showcase1.png" />

## Ionic ##

O Ionic é distribuído como um pacote Node.js. É através do Cordova que o Ionic consegue fazer a sua magia, e como ambos estão licenciados com Apache não temos problemas de licensiamentos como temos com a Xamarim (sim, eles são caros se fores freelancer).

Ele baseia-se no AngularJS e é constituído por vários módulos. Esses módulos permitem-nos aceder a directivas e serviços já disponibilizados pelo Ionic sendo os mais importantes a **view**, a **navegação** e o **content**.

Se realmente queres compreender como funciona o Ionic aconselho-te a veres um dos temas já instalados como tabs ou sidemenu. Estes temas usam posições absolutas para organizar os elementos.

Para facilitares o processo de distribuição da aplicação deves seguir a estrutura utilizada pelos temas do Ionic.

### CSS ###

Os componentes CSS disponibilizados são costumizados através do template usado pelo AngularJs e dos estilos CSS.

Certamente que com o tempo vão aparecer mais componentes mas para já existem os suficentes para pudermos desenvolver uma aplicação avançada:

 - Cabeçalho
 - Conteúdo
 - Rodapé
 - Botões
 - Lista
 - Cartões
 - Formulários
 - Alternador
 - Caixa de verificação
 - Botões de escolha
 - Botão de extensão (range)
 - Selector
 - Abas
 - Grelha
 - Utilitários

Os componentes CSS poupam-te muito tempo senão dominares CSS.

### Javascript ###

 - Folha de acção
 - Cortina de fundo (backdrop)
 - Conteúdo
 - Elementos de formulário
 - Gestos e Eventos
 - Cabeçários/Rodapés
 - Teclado
 - Listas
 - Carregamento
 - Modal
 - Navegação
 - Plataforma
 - Popover
 - Caixa de diálogo
 - Scroll
 - Menus laterais
 - Caixa que desliza
 - Giratório
 - Abas
 - Tap/Click

 O **Tap** é essencial para a aplicação. Enquanto que num website típico existe um atraso de 300ms por parte dos navegadores, numa aplicação não vamos querer este atraso. Componentes como o [ngTouch](https://docs.angularjs.org/api/ngTouch) fazem isto mas o Ionic já inclui o **Tap** que juntamente com o **Scroll** melhoram a navegação do utilizador.

 Componentes como Popover, caixa de diálogo, abas, etc são já conhecidos por frameworks como o Bootstrap ou Foundation.


### ngCordova ###

 Sem dúvida vais precisar de conhecer isto! Extensões desenvolvidas para aceder às funcionalidades nativas do dispositivo. Por exemplo:

  - Mostrar notificações
  - Caixas confirmação
  - Preferências
  - Aceder à Webcam


## Comparação com aplicações tradicionais ##

Uma das primeiras questões que me fiz foi se não seria mais rápida uma solução em Javascript do invés de Java e a resposta é não. Depende muito da forma como escrevemos a aplicação.

Uma aplicação AngularJs torna-se bastante lenta quando perdemos o controlo dos dados ligados de forma vinculativa. Se uma lista tiver 500 entradas e cada uma delas com várias propriedades a serem verificadas sempre que há uma alteração no contexto da scope a aplicação torna-se lenta.

O ideal para escrever aplicações Ionic rápidas é aprenderes mesmo boas práticas de AngularJs. Uma leva à outra.

## Programar ##

E programar em Javascript? Uma razão para não usar o Ionic costuma ser "não compares Javascript com linguagens como Java ou C objectivo". Está certo, mas vamos falar da evolução do Javascript.

O [ECMAScript 6](http://codigo.ovh/git/2015/03/02/ECMAScript6-converter-em-javascript-compativel.html) está mesmo à porta e vem mudar bastante a forma como escrevemos javascript com classes e objectos. O AngularJs 2 vai ser uma mudança forte para quem tem de migrar aplicações 1.3x, vamos ter de refacturar muito código.

A tecnologia do Ionic vai acompanhar estas mudanças. A equipa do Ionic tem proximidade com a equipa do Angular, e há pouco tempo anunciaram que se estão a preparar para o ES6. Óptimas notícias!

Num curto perído de tempo vamos puder desenvolver aplicações com o ECMAScript 6. O próprio Angular vai beneficiar bastante ao reduzir o tempo de execução.

## Onde começar? ##

[http://learn.ionicframework.com](http://learn.ionicframework.com/)
