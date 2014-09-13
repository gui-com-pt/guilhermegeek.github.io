### PHP e extensões
Praticamente todas as distribuições com instaladores de pacotes conseguem instalar o PHP, MySQL e Apache mas nós precisamos de controlar as versões dos programas e não depender de terceiros para compilar o código.
Eu gosto de compilar o PHP de raíz, assim como o nginx e MySQL. Ainda são muitas as dependências que temos de instalar (muitas de raíz também).

As extensões também as compilo. O PECL é muito util para instalar extensões e até tem versões recentes, senão te sentires à vontade no unix é sempre uma boa alternativa.

É útil ter várias instâncias do PHP a correr com versões diferentes. É preciso instalá-lo em versões diferentes mas é útil pois nem todos os projectos suportam a 5.5 com mais funções deprecadas.
O ideal é puxar o código do GIT, fazer checkout da versão desejada e compilar o código do genero ./configure --prefix=/opt/php/5.5 && make && install
Assim temos mais constrolo das instalações e até mesmo para as configurações podemos criar uma estrutura semelhante.(php.ini)


### Serviços

Cpanel e WHM

O WHM é um serviço pago. Uma solução desenvolvida para configurar uma máquina como servidor web.
É muito comum nas soluções de alojamento disponíveis porque já têem instaladores para CMS como o Wordpress e Jooma, instalam logo o PHPMyadmin para gerir o MySQL, contas FTP, etc.


### Conta 

Quando alugamos um servidor dedicado ou mesmo partilhado, a entidade que o configura costuma entregar ao cliente um utilizador e password desse servidor. Não adicionam este utilizador ao grupo **sudo** nem muito menos vão dar a conta root e manterem a manutentação, mas instalam os programas e configuram tudo o que é necessário.

Recomendo os seguintes softwares a serem instalados

 * htop - uma melhoria do **top** que já vem disponível, permite ver o consumo detalhado de cada processo e o estado geral dos recursos do servidor
 


### Scripts

O CPanel e semelhantes trazem opções de backup limitadas. O que mais gosto de fazer é escrever o código e pensar eu na forma como a informação vai ser guardada.

De 7 em 7 dias um backup completo do conteúdo público de todas as contas (/www), das base de dados e email.

    #!/bin/bash

    #START
    TIME=`date +"%d-%m-%Y-%H-%M-%S"` # day-month-year-hour-minute-second. Ie: 30-04-2014-14-49-47
    FILENAME="backup-$TIME.tar.gz" # file name is combined with the date
    SRCDIR="/var/www" # source directory
    DESDIR="/var/backups" # destination directory
    tar -cpzf $DESDIR/$FILENAME $SRCDIR # compress the source directory and saves the compress archive in destination
    #END
    
  
  1 vez por dia copiar apenas a base de dados
  
  
