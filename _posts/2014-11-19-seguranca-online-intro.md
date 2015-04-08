---
title: Dicas para te protegeres de ataques, malware e problemas comuns
layout: post_entry
image: /media/angular-thumb.jpg
description: Queres aprender a proteger-te melhor na Internet? É muito mais que usar programas, aprende hábitos, recomendações e vê exemplos práticos de malware
keywords: seguranca malware virus
categories:
 seguranca

---

Série de artigos sobre segurança online

 * Passwords
 * Navegação


## Precaução

A prevenção é boa manutenção da máquina é essencial. Não basta apenas instalar programas e esperar que eles por si sejam responsáveis pela segurança.

Os programas são bons para analisar e detectar mas a prevenção é que dita se ficheiros maliciosos e outras ameaças conseguem alcançar a nossa máquina, temos de adoptar boas práticas e criar hábitos que proporcionem isto.



## Programas

Uma das formas de distribuir código malicioso e alcançar os utilizadores finais é através de programas. Programas que são instalados para realizarem determinada função mas que traz consigo código com outras intenções, semelhantemente ao cenário do cavalo de troia.

Neste tipo de programas é mais comum nos deparar-mos com:

 * Gestor de drivers e actualizações
 * Anti Virus e programas de segurança
 * Cracks e patchs
 * Anexos de emails

Algo que estes programas têm em comum: têm de ser instalados! Isto também inclui programas instalados como terceiros, ou seja, programas instalados como ofertas, bónus ou promoções durante a instalação de outros.

Isto normalmente ocorre na aceitação de termos e condições ou na finalização da instalação, e os responsáveis usam truques baixos para levarem as pessoas a instalar. Vamos analisar algumas formas comuns:


#### Download

Na página do programa se houver publicidade da Google ou outra intencional, facilmente nos deparamos com 2 ou 3 caixas a dizerm "Download" e ficamos sem saber onde realmente é realizado o download. Isto é um truque utilizador: a publicidade recebe do site informação em relação ao Download e usam-na como referência para o nome do ficheiro ou para aparecer no quadrado de publicidade e levar o utilizador a pensar que é ali o Download.

O ficheiro descarregado pode ser um programa totalmente diferente do que preendíamos, pode ser um gestor de programas que diz instalar o programa que procuramos ou pode até abrir a instaação normal do programa que queremos mas trazer consigo código malicioso.


#### Integridade

Integridade neste contexto significa que o ficheiro original que é distribuído e que recebemos não foi modificado. Uma forma utilizada para comprovar a integridade de um programa é verificar a assinatura md5. 

MD5 significa Message-Digest algorithm, um algoritmo de hash desenvolvido pela RSA Data Security inc com 128 bits unidireccional.

Por ser unidireccional, após ter sido gerado o hash por um texto (por exemplo uma password) não podemos transformar o hash novamente no texto que o originou. Com as passwords guardamos na base de dados encriptadas com MD5 e quando um utilizador se autentica criamos uma hash com a password inserida e comparamos com a hash da base de dados, não podemos desencriptar a hash da base de dados para comparar com a password inserida.


#### Processo de Instalação

Neste exemplo vou instalar o Daemon Tools Lite.

<img class="post-entry__image" src="/media/posts/seguranca-intro-1.png" />

Primeiro passo é aceitar os termos do Daemon Tools Lite. A aceitação dos termos costuma ser dos primeiros passos na instalação.


<img class="post-entry__image" src="/media/posts/seguranca-intro-2.png" />

Esta escolha ainda é relevante ao Daemon Tools Lite. Apesar de ter escolhido a versão gratuíta no site, na instalação icentivam o utilizador a comprar a licença.

<img class="post-entry__image" src="/media/posts/seguranca-intro-3.png" />

Aqui está a primeira tentativa de nos enganar. Quando olhamos para este ecrã partimos do princípio que apenas a opção "Typical installation (recommended)" está disponível pois a opçção "Custom installation (advanced)" está com outra cor e tanto a roda (radio button) como o texto estão desactivados. Fazemos isto a elementos quando o utilizador não os pode utilizar, neste caso é apenas para enganar. De outra forma não estaria "recomended".

Com a instalação que nos recomendam vamos instalar o Linkey e todo o malware que venha atrás. Podemos então carregar no "Custom installation (advanced)" 

<img class="post-entry__image" src="/media/posts/seguranca-intro-4.png" />

Uma observação que reforça a intenção de enganar: agora a opção "Typical installation (recommended)" não está desactivada como a opção "Custom installation (advanced)" estava a início. Se não estivesse desactivada para enganar, porque não se desactivou a Typical agora que escolhemos? Removemos todos os vistos neste passo.

<img class="post-entry__image" src="/media/posts/seguranca-intro-5.png" />

Para finalizar ainda levamos com o TuneUp Utilities 2014. De novo a técnica de desactivar a opção "I do not accept". 

<img class="post-entry__image" src="/media/posts/seguranca-intro-6.png" />

Ainda durante a instalação aparece mais um Gadget a ser instalado.



## Análise

#### Processos

No Windows podemos usar o gestor de tarefas paras consultas os processos em execução. Um programa quando é executado usa um ou mais processos, por vezes conseguimos descubrir problemas com o gestor de tarefas e uma pesquisa no Google para procurar rastos do mesmo processo mas pode ser irrelevante. Pode ser um nome aleatório ou até mesmo código injetado noutro processo.

<img class="post-entry__image" src="/media/posts/seguranca-intro-7.png" />

Nos serviços também pode estar algo malicioso que tenha escalado a permissão de administração e criado um serviço do Windows.

Há programas específicos para analisar processos em execução sem ser o gestor de tarefas.