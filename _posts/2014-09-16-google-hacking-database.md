---
title: Google Hacking Database
layout: post_entry
image: /media/hacker1.jpg
excerpt: Utilizar o Google para encontrar técnicos idiotas
categories:
 angularjs
---

"Utilizar o Google para encontrar técnicos idiotas" - diz tudo. Google dorks são idiotas encontrados através do Google, sites mal configurados com ficheiros públicos que não deveriam ser.

Como é que os dorks são encontrados através do Google? A seguinte pesquisa:

	https://www.google.pt/search?q=filetype:png

Retorna todos os ficheiros do tipo png. Agora vamos passar para um ficheiro mais interessante: **.sql**. Vamos pesquisar apenas em sites com a extensão .gov

	http://www.google.com/search?q=filetype:sql%20site:gov%20and%20%22insert%20into%22

Nesta pesquisa além da extensão do ficheiro ser .sql e a do domínio .gov, também estamos a incluir ficheiros que contenham explicitamente insert into
Este tipo de ficheiros costumam ser cópias de segurança geradas de acesso público que foram encontrados pelos bots da Google

Algo muito comum neste tipo de pesquisa para script kiddies costuma ser procurar shell já enviados para os servidores. Alguém já explorou o servidor, enviou uma shell e o Google ainda a indexa para nós sabermos onde encontrá-la!

O **exploit-db** tem um arquivo dedicado a dorks do Google. Podes escolher vários tipos de Dorks como mensagens de erro, ficheiros que contenham passwords, etc. 

	http://www.exploit-db.com/google-dorks/


## Dorks

### site
Restringe a pesquisa ao domínio especificado. 

Exemplo: site:guilhermecardoso.pt

### inurl
Restringue os resultados a links que contenham palavras específicas no URL. 

Exemplo: inurl:wp-admin

### intitle
Títulos que contenham palavras específicas.

Exemplo: intitle:Portugal

### allintitle
Semelhante ao **intitle** mas corresponde exactamente ao título, enquanto que o intitle procura apenas palavras especificas.

Exemplo: allintitle:Gui

### allinurl

### cache

### numrange

### filetype or ext

### link

### inanchor

### allintext

### intext

### *

### **

### .

### |

### +

### -


# exploit-db 

A Offensive Security lançou um projecto no exploit-db.com 