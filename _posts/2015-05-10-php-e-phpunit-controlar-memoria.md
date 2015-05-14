---
title: PHP - Controlar melhor a memória usada pelo PHPUnit
layout: post_entry
image: /media/less.jpg
excerpt: Introdução a CSS com LESS utilizando o Bootstrap
description: Quanto mais cresce o teu projecto mais memória o PHPUnit vai consumir. Se estás no limite há soluções!
 less css
---
O PHPUnit tem a "particularidade" de consumir muita memória RAM. É claro que a qualidade do código afecta o resultado final mas há alguns factores interessantes que contritubem para o aumento exagerado.

* Quando coleciona informação - no caso de gerarmos documentação com o codecoverage ou outras ferramentas para implementações de integração contínua. O ideal é claro só gerar essa informação quando as alterações forem sincronizadas
* O PHPUnit guarda em cache tokens para os ficheiros serem usados para code coverage. Esta opção chama-se cacheTokens e é verdadeira por definição. Usamos no ficheiro xml <phpunit cacheTokens="false"> ou pela consola phpunit --cache-tokens false
* O PHP é conhecido por também não gerir bem os recursos internamente apesar de ter vindo a melhorar. Pelo que percebi ele continua a guardar os resultados dos testes mas não é algo que seja obrigatório senão gerarmos a dita documentação.

No caso de enfrentares este problema uma solução rápida e que eu gosto bastante é usar reflecção para limpar as problema. Esta solução foi [sugerida aqui](http://kriswallsmith.net/post/18029585104/faster-phpunit) e é bastante simples: no final e cada teste procuramos as propriedades da classe que não sejam estáticas nem tenham sido declaradas pelo PHPunit, ao atríbuir null o GC não vai ter mais referências e é libertada melhorando bastante a performance dos testes, comparando a redução do tempo no geral com o tempo durante a execução da reflecção de cada teste é ridiculo! Muito melhor

A menos que tenhas uma valente confução de código nos testes (referências ciclicas entre os proprios testes por exemplo) ela deve ser logo libertada.

{% highlight php %}
abstract class BaseTestCase extends PHPUnit_Framework_TestCase
{
    protected function tearDown()
    {
        $refl = new ReflectionObject($this);
        foreach ($refl->getProperties() as $prop) {
            if (!$prop->isStatic() && 0 !== strpos($prop->getDeclaringClass()->getName(), 'PHPUnit_')) {
                $prop->setAccessible(true);
                $prop->setValue($this, null);
            }
        }
    }
}
{% endhighlight %}

Outra solução seria fazer `unset` individualmente no final do teste mas credo, isso não!

**Referências**

* [http://kriswallsmith.net/post/18029585104/faster-phpunit](http://kriswallsmith.net/post/18029585104/faster-phpunit)
