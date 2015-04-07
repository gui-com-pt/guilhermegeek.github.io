http://askubuntu.com/questions/40011/how-to-let-dpkg-i-install-dependencies-for-me


## Instalar pacote .deb

dpkg-i nome.deb

O retorno pode indicar dependências em falta. Se for esse o caso usamos:

apt-get install -f

Assim instalamos as dependências e o pacote .deb

## Gdebi