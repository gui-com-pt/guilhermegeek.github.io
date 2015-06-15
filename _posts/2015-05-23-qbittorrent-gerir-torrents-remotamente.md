---
title: qBittorrent - gerir torrents remotamente
layout: post_entry
image: /media/angular-thumb.jpg
description: QBitTorrent - monta um servidor de torrents e gere-os por um website
categories:
 qbittorrent linux
---

Em Windows existem demasiados clientes torrents a distribuir malware pelos utilizadores. Apesar da grande parte manter-se legal no que diz ao respeito de aceitação de privacidades para instalar programas terceiros, eles aproveitam-se de formulários com botões que passam despercebidos, metem pré seleccionadas as opções para instalar os programas, etc.

O qBittorrent é uma pérola. Corre em MAC, Linux, Windows e é distribuído como opensource. O que mais gosto neste programa é mesmo a transparência no que diz respeito ao malware que referi em cima.

Além do programa executável existe uma interface web que te permite aceder ao cliente torrent apartir de outro computador. Isto não é muito direccionado talvez aos utilizadores normais, mas por exemplo:

**Se alugares uma VPS a 25 euros mensais com 2TB de armazenamento e 32GB de RAM, dá-te para armazenar cerca de 1800 filmes. Ou seja, podes programar um script para ordenar os torrents por data de adição, copiar o link magnético e adicionar automáticamente no qBittorrent! Continuando, 250 euros mensais seriam 20 TB e 18.000 filmes em 1080.**

<img class="img-responsive" src="/media/posts/qbittorrent.png" />

É fácil programar scripts destes, e facilmente podes criar a tua rede de streamming privada.

Na Wheezy do Debian e outras versões mais antigas, há problemas reportados por causa da encriptação. Se tiveres uma distribuição recente não há problema, se for esse o caso podes sempre compilar o programa em vez de instalares as versões desactualizadas distribuídas.

**Referências**

- [https://github.com/qbittorrent/qBittorrent/wiki/Running-qBittorrent-without-X-server](https://github.com/qbittorrent/qBittorrent/wiki/Running-qBittorrent-without-X-server)

