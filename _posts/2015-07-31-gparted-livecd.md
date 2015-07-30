---
title: GParted LiveCD 
layout: post_entry
image: /media/angular-thumb.jpg
excerpt:
description: Como usar o GIT? Aprende a instalar, configurar e utilizar
keywords: git simples
categories:
 git
---

O GParted - GNOME Partition Editor - permite  criar, reorganizar e apagar partições. Utiliza a libparted do projecto parted para detectar e manipular as tabelas de partições. 

O mesmo podes fazer com o **gparted** pela linha de comandos, mas tem vantagens em permitir gerir tipo de sistemas não incluídos na libparted.

Para redimensionar particições eu gosto de usar a distribuição LiveCD disponibilizada com o foco no programa GParted. O .iso ocupa ~200mb e é ideal para ter numa pen drive com várias outras distribuições e o grub bem configurado - o meu "kit" de recuperação.

Podes fazer download no [Sourceforge](http://sourceforge.net/projects/gparted/?source=typ_redirect)

Para copiares o .iso para um CD podes usar o brasero, para uma pen drive programas como o unetbootin ou o comando **dd** em Linux.

<img src="http://www.superdownloads.com.br/imagens/screenshots/6/0/60321,O.jpg" />


## Um pouco sobre recuperação

No que diz respeito a assistência a sistemas com problemas, seja o sistema Windows ou Linux, encontras várias ferramentas em Linux.

Aqui incluo não só erros como problemas com o boot, mas também malware instalado, dlls infectadas, problemas no registo, problemas de drivers, enfim aquilo que "pelo Google não se vai lá à primeira". 

Neste tipo de cenários não vais querer correr uma distribuição Live mas sim trabalhar em rede. Usando o **chroot** consegues emular uma instalação Linux.


