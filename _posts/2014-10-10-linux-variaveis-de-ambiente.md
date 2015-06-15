---
title: Variáveis de ambiente e locais no Unix
layout: post_entry
image: /media/linux_logo.png
description: Variáveis de ambiente e locais em Linux, o que são e para que servem?
categories:
 linux
---

No UNIX os softwares são mais flexíveis que Windows, o comportamente de um programa pode ser alterado apenas por alterar uma variável. Além de caminhos para pastas, as variáveis de ambiente podem ter opções de linha de comandos, ou flags (EMAILS_ENABLED, COMMENTS_ALLOWED).


As variáveis de ambiente ou globais guardam informação partilhada por programas como caminhos para determinadas pastas (variável HOME com C:\Users\Gui). São sempre escritas em maiúsculas, semelhantemente em linguagens de programação as constantes são escritas em maísculas e podem desempenhar uma função semelhante, apesar de isto ser uma convenção e não uma regra.

No terminal é indiferente se as variáveis seguem esta com convenção ou não, as de ambiente da shell actual são herdadas por todos os shells filhos. 

Também existem as variáveis são as variáveis do shell, as locais. Estas são escritas em minúsculas e não são herdadas pelos filhos.	

### Principais

**PATH**

Contém o caminho para pastas com ficheiros de sistema (equivalente no Windows ao programa.exe). Os programas que executas na consola, ls, node, grunt, mkdir, tanto podem ter o executável na /usr/local/bin que já está na variável PATH normalmente, ou numa pasta /opt/spotify-client que seria adicionado á PATH.

**HOME**

O caminho absoluto para o teu directorio home, por exemplo /home/maria Programas usam-na para guardarem ficheiros de configuração de cada utilizador do sistema na sua pasta home ou o comando **cd ~** que usa a variável para ir para a HOME.

**USERNAME**

Nome do utilizador autenticado na shell.

**TERM**

Tipo de terminal usado para aceder ao sistema


### Como usar

Uma variável é atribuida por VARIAVEL=VALOR

Por vezes podemos usar o valor da variável para atribuir a um novo valor, exemplo seria adicionar a pasta /opt/bible-king-james á variável PATH.

{% highlight bash %}
dk@localhost:/$ PATH=$PATH:/opt/bible-king-james
dk@localhost:/$ echo $PATH
/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games:/opt/GitEye/:/opt/bible-king-james/
{% endhighlight %}

Na PATH adicionei o caminho aseguir a $PATH, a variável que com o valor actual dos os restantes caminhos.

Quando executarmos um programa ele procura primeiro na pasta /usr/local/bin, senão existir na /usr/bin, e consecutivamente. Se adicionasse no início, esse caminho seria o primeiro a ser usado

{% highlight bash %}
dk@localhost:/opt/sublime$ PATH=/opt/bible-king-james:$PATH
dk@localhost:/opt/sublime$ echo $PATH
/opt/bible-king-james:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games:/opt/GitEye/
{% endhighlight %}


Se usassemos apenas atribuição com PATH não seria bom, por exemplo: PATH=/opt/bibke-king-james. Ness momento quando executasses um programa no shell ele apenas seria procurado nesse novo caminho. Comandos como cd, ls, não estaríam disponíveis.


### Onde usar

 * ~/.bashrc apenas são acessível pelo bash em sim como configurações do shell, consola. Aqui não guardamos variáveis utilizadas por programas porque não lêem este ficheiro, apenas o shell do bash.

 * ~/.profile aplicado á sessão inteira, como programas que são executados no arranque da sessão

 * ~/.bash_profile