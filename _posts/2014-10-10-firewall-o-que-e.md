---
title: Introdução à Firewall
excerpt: Introdução à Firewall
layout: post_entry
description: Introdução ao Firewall explicando o seu significado
categories: seguranca
---

Uma firewall é uma solução de segurança de software ou hardware. A firewall analisa o tráfego de repecção e transmissão de uma rede e apartir de um conjunto de regras ou instruções pode bloqueá-lo.

# Regras

As regras de uma firewall aplicam-se à entrada de tráfego - quando outro computador comunica com o nosso - e á saída de tráfego - quando o nosso computador comunica com outro. Estas ligações são UPD ou TCP.

Quando confiamos no processo do Microsoft Word e criamos uma regra permanente para ele na firewall partimos do principio que apenas o código seguro da Microsoft vai comunicar por aquela porta. Um hacker pode descubrir uma falha ou vulnerabilidade no programa do Word que lhe permita executar código remotamente.

Neste exemplo falei de descubrir uma falha no num programa mas grande parte do malware instalado provém de programas que o utilizador instala.

Programas que desempenham a função: um programa que procure drivers num repositorio publico, faça download e instale (existem dezenas assim quase todos incluindo "driver" no nome, e são malware mas instalam bem as drivers), uma suposta ferramenta que rouba passwords do Facebook mas pede para desactivar o anti-virus (neste caso muito provavelmente iria instalar o código maligno noutro sitio)



# Programas

A escolha de um programa para firewall parte de funcionalidades e componentes disponíveis de cada um mas é mais importante as regras em si defenidas.

Para Windows existem várias soluções que gostei de usar como o Comodo Firewall.

Em Unix é comum aprenderes a configurar uma firewall com o iptables. Apesar de haverem programares com interface gráfica para gerir as regras podes aprendê-las e interagir com o iptables pela linha de comandos.

### Recursos

- http/www.infowester.com/firewall.php
