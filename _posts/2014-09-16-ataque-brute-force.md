---
title: Ataque brute force
layout: post_entry
excerpt: Estudo de um ataque bruteforce
image: /media/hacker1.jpg
categories: hack
description: Aprende o que é um ataque bruteforce
---

Um ataque brute-force (ataque de força bruta!) é o ataque mais simples que podemos fazer para descubrir as credenciais de uma conta. 

Ao contrário de exploits que envolvem trabaho de investigação ou outras técnicas mais avançadas, um ataque brute-force apenas envolve a tentativa exaustiva de adivinhar a password. 

Estes ataques podem ser rápidos, demorados ou mesmo barrados pelo servidor.
Infelizmente muitas pessoas não foram ensinadas a escolher uma password e acabam por usar passwords comuns como:

 * asdasd123123
 * 123*123
 * zxcvbnm123
 * mysecretpassword

Estas são as primeiras tentativas, passwords comuns. No caso de um alvo local (um site de Portugal) podemos usar palavras em Português.

Com uma lista com password pré defenidasf azemos um ataque de dicionários. Usamos várias palavras e podemos usar separadores como **_** ou **@**.

Passwords mais complexas com minúscuas/maiúsculas, caracteres especiais ou palavras sem sentido são mais demoradas de apanhar mas mesmo assim é tudo uma questão de tempo (se não houver resposta de defesa).

### Ataque

Para realizar o ataque há vários softwares existentes e até mesmo escrever um script em python ou javascript é simples. Vê os projectos para este fim que estão publicados no github: https://github.com/search?utf8=%E2%9C%93&q=brute+force

O processo consiste em:
 
 * Obter uma password
 * Fazer um pedido de autenticação (normalmente um HTTP POST)
 * Ler a resposta 

Para conhecer-mos a resposta que deveríamos receber numa autenticação com sucesso, podemos criar uma conta nesse sistema e inspecionar o pedido HTTP. Senão houver acesso ao registo, podes usar o código da resposta HTTP (>400 consideras erro), faz várias tentativas e considera como correcta qualquer resposta que não a que recebes nas tentativas erradas (aqui corres o risco de respostas de outros erros).

Em sistemas já conhecidos como o Wordpress este processo é simplificado.


Podem ser usados vários servidores virtuais (melhor, computadores infectados) para simularem um cluster na tentativa de autenticação. Uma base de dados em redis onde metamos 30GB em memória e todos os servidores fazem as tentativas com essa base de dados, vai-se removendo à medida que se faz get e não há resposta positiva.

Um servidor com 32GB de RAM arranjas por 33 euros mensais, e cada vps 2 ou 3 euros mensais. 

### Listas

Passwords brute-force

 * http://www.moehre.org/bruteforce.html
 * http://packetstormsecurity.com/Crackers/wordlists/
 * http://trac.kismac-ng.org/wiki/wordlists
 * https://wiki.skullsecurity.org/Passwords

WPA-PSK
 * http://www.renderlab.net/projects/WPA-tables/


### Gerar uma lista

Há palavras e numeros que podemos usar para gerir uma lista. Mesmo que seja uma lista pequena usamos antes de um ataque mais global.

 * Aniversário e de parentes próximos
 * Nome e de parentes próximos
 * Cidade natal
 * Gostos pessoais (motas, mulheres, marijuana, mar, golf, etc)

Para gerares esta lista podes usar o Apligen: http://apligen.sourceforge.net/



### Referências

Artigos interessantes para dar seguimento ao que escrevi

 * http://www.troyhunt.com/2011/07/science-of-password-selection.html