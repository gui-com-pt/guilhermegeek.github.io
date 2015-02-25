---
title: Utiliza emails descartáveis gratuitamente!
layout: post_entry
image: /media/angular-thumb.jpg
description: Aprende a utilizar emails temporários e descartáveis para não encheres a tua caixa de Spam!
excerpt: 
categories:
 dicas
---

Mais de metade dos emails de spam que recebo foram serviços que subscrebi apenas para obter algo como fazer um download de um PDF ou receber por email uma activação no site.

Havia uma altura em que utilizava uma conta de email apenas para estes tipos de registos, ou para outras inscrições em sites menus seguros ou a quem eu não confiasse. 

Uma boa alternativa a ter de gerir mais outro email é usar emails descartáveis! A filosofia é bastante simples: crias uma conta de email por pedido, coma duração de 60 minutos. Para isto podemos usar o Guerrilla Mail https://www.guerrillamail.com

Com um email temporário podes registar-te em determinado serviço sem te associares a ele. Como as contas têem a duração de 60 minutos não podes partir do princípio que vais voltar acesso à conta, ou seja, após os 60 minutos não podes recuperar passwords, receber emails de confirmação, etc. Mas não é para isso que este tipo de emails servem também.

<img clasS="entry__image" src="/media/posts/temporary-mail-1.png" />

Algumas finalidades para este serviço:

 * Registo em sites suspeitos - senão confias na fonte e não queres criar um registo a identificar-te
 * Registo apenas para receber um email - no caso de downloads de PDFs ou `gifts` ocasionais (a estratégia de oferecer uma parte do conteúdo requerendo um registo para a subscrição de newsletters)


#### API

Um ponto forte deste serviço é o acesso a uma API. Por esta API podemos criar novas contas temporárias, receber e enviar emails. 

Uma das primeiras utilidades que me veio à cabeça foi usar estes emails para registar contas em massa em serviços aos quais consiga ultrapassar a protecção de recaptcha. Como temos acesso à API podemos muito bem interpetrar os emails recebidos e assim confirmar automáticamente as contas. 