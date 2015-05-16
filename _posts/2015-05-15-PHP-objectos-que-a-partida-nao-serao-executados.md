---
title: Padrões de Carregamento Lento e Construtor
layout: post_entry
image: /media/less.jpg
excerpt: Introdução a CSS com LESS utilizando o Bootstrap
description: Aprende a utilizar o Bootstrap com LESS! Configura um tema e reparoveita o teu código
categories:
 less css
---

Isto é algo bastante interessante para mim. Por ainda não conhecer como quero o GC do PHP e também do C#, o tópico de disposição de recursos atrai-me sempre bastante.

### Carregamento Lento (lazy loading)

Este é daquele padrão que se encontra em todo o tipo de código

{% highlight php %}
class FileService {

  private FileCollection $files;

  public function getCollection()
  {
    if(isset($this->files === false)) {
      $this->files = new FilesCollection();
    }
  }

  public function recursive()
  {
    foreach($this->paths as $path) {
      $this-getCollection()->scan();
    }
  }
}
{% endhighlight %}


Imagina este cenário: quando escreves este serviço sabes que vais logo usar determinados objectos e são construídos no constructor. Mais tarde vais reutilizá-lo noutro código onde esses objectos não tenham razão para ser criados ou mesmo extenderes o serviço e implementar outras funcionalidades.

A classe ``FileService`` dentro do método ``recursive`` está a encapsular a responsabilidade de atribuir uma instacia do objecto. Até que este método seja invocado a classe não é criada.

### Construtor (buider)

Noutros casos a responsabilidade de criar o objecto deve percenter a um Construtor a seguir o padrão Builder. O objectivo é permitir manter separada a construção do objecto da sua representação. Assim o mesmo processo de construção pode criar representações diferentes.

{% highlight php %}

// O diretor que é responsável por criar o objecto usando um Construtor
class Mp3Reader {
  public function builder(Builder $builder){ }
}

// O Construtor
class Mp3Scanner {

  public function scanFiles()
  {
    // duas opçoes:
    // - guardamos o resultado numa propriedade da classe e o método getResult usa a propriedade
    // - invocamos o método getResult passando o resultado. Em alguns casos o getResult é sempre o seguimento do scanFiles e pode ter lógica
  }

  // Método a ser implementado para dar as várias representações que falei em cima
  public abstract function getResult();
}

class Mp3XmlScanner extends Mp3Scanner {

  public function getResult()
  {

  }
}

class Mp3HtmlScanner extends Mp3Scanner {

  public function getResult()
  {

  }
}
{% endhighlight %}

Ainda sobre a injecção de dependências e o HHVM, há outras funcionalidades como operações assíncronas, atributos, etc. Esta mudança para muitos programadores até é prejudicial para o ambiente do PHP e foi mal lançada pelo Facebook mas para quem está mesmo habituado a outras linguagens são funcionalidades que já deviam ter vindo há bastante!

O próprio PHP ainda há pouco tempo foi "abanado" com a implementação para carregar automáticamente as classes necessárias, o autoloading. Era normal veres circulos a incluirem ficheiros php baseados no estado da aplicação, da camada onde se encontrava, etc. Ou os métodos anônimos.


Quanto mais conheço o PHP e HHVM mais gosto disto.
