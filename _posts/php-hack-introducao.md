
==================
Hack

Hack é uma linguagem de programação desenvolvida pelo Facebook. A equipa usa esta linguagem na rede social e tornou-a código aberto.

O PHP é uma linguagem dinâmica enquanto que C# é estática.

Uma linguagem estática tem de ser compilada para ser executada, temos o exemplo de C++ e C#. Se num projeto .NET alterar-mos código temos de construir de novo o projeto e gerar as dll

Em PHP isso não acontece porque é dinâmica. Há casos em que isto até é aproveitado para criar ficheiros php em tempo de execuxão (um exemplo são os Hydrators do Doctrine ODM, um ORM orientado a base de dados documentais).

Hack é uma mistura destes dois tipos de linguagem, como o PHP é uma linguagem dinâmica e ambas interploam-se sem problemas mas também é estaticamente "tipada". 

O Hack utiliza um compilador Just In Time chamado Hip Hop Virtual Machine - HHVM. Em vez de interpretar ou compilar código PHP diretamente para C++, o HHVM compila o Hack e PHP para um código binário intermediário que é traduzido para código de máquina x64 dinamicamente em tempo de execução pelo compilador.

