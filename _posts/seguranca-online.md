---
title: Segurança Online
layout: post_entry
image: /media/angular-thumb.jpg
excerpt: 
categories:
 bower
---


### Password

O problema de passwords fracas é que são facilmente identificadas por ataques brute-force. Uma password que seja construída por sequências ou palavras óbvias torna-se vulnerável a este tipo de ataques. Alguns exemplos para o João Marques nascido a 31/10/1960.

 * 123_joao_321
 * asdasd*joao*asdasd
 * qwer123_31_qwe123
 * 1960*10*31

Estas passwords são vulneráveis a brute-force. Se for uma vítima específica, o hacker vai usar as tais palavras óbvias como o nome dos pais, filhos, morada, localidade.

Também é comum utilizar a mesma password para serviços diferentes e apenas diferir numa palavra que identifique esse serviço. No exemplo de cima, para o Facebook e Google seria:

 * 123_joao_321-facebook
 * 123_joao_321-google

Podemos concluír que para descubrir a password um hacker pode tentar várias tentativas até usando palavras chaves que de certa forma se identifiquem a nós.

Assim a solução para uma password é não utilizar-mos nenhuma, sequência ou melhor ainda: uma password que nem nós saibamos! Uma palavra construída por um programa que pode ser instalado no computador ou telemovel, e seja gerada apartir de uma lógica.

#### Usuabilidade

Quando tens dezenas de contas registadas em serviços como email, redes sociais, portais, o mais comum é a password ser sempre a mesma. Até podes usar diferentes mas cada uma atribúida a níveis diferentes de segurança (mais complexas para serviços mais sensíveis).

Não é prático termos dezenas de passwords diferentes que tenhamos de decorar sempre. 


#### Como utilizar a password

O primeiro passo que fazes é sempre autenticares-te. Se for num site como o Facebook, a opção para manter a sessão iniciada após a autenticação pode ser uma vulnerabilidade em redes que não sejam confiáveis. Isto porque esta opção guarda uma espécie de palavra super secreta que pode ser usada durante X dias para entrar no Facebook sem teres de te ligar sempre. Esta palavra expira depois desses dias, são os tokens (no caso do Facebook providos por OAuth 2).

Se estiveres ligado á internet de tua casa, podes partir do princípio que podes guardar a sessão iniciada. Estás numa rede conhecida e se alguém a invadir a tua conta do Facebook deve ser a menor das preocupações.

Numa rede pública como um café inverte-se claro. Nessa rede pode aceder qualquer um que tenha o acesso, acesso esse que não é controlado por ti. Podes ser vítima de um roubo da palavra super secreta que falei. Essa palavra está guardada no teu computador (para ser usada para entrar no Facebook sem te autenticares sempre), possivelmente numa cookie facilmente acedida. Quem roubar essa palavra, consegue entrar na tua conta sem precisar de se autenticar.

**Nunca guardes a sessão iniciada automaticamente numa rede pública. Se procurares mesmo segurança, então nunca a guardes como eu.





