---
title: Automatizar o desenvolvimento - Gulp + AngularJS + SASS Compass 
layout: post_entry
image: /media/angular-thumb.jpg
description: Aprende a usar o gulp, angularjs e sass para automatizares o teu ambiente de desenvolvimento. Poupa mais tempo e organiza melhor as tuas aplicações AngularJS!
categories:
 bower
---

Neste artigo vou explicar como acelerar a distribuição dos recursos públicos, automatizar as tarefas usando o gulp e outras dicas.

Primeiro temos de instalar o gulp como um pacote do nodejs. A alternativa é o grunt mas tenho visto mais ferramentas recentes no gulp e parece ser o substituto óbvio do grunt. Vamos instalar algumas bibliotecas:

- gulp
- gulp-concat
- gulp-angular-templatecache


### SASS/Compass

Neste artigo refiro o SASS mas LESS seria o mesmo. Apesar de haverem pacotes também para lidar com o SASS eu prefiro fazê-lo usando a ferramenta nativa do compass. Para isso temos de configurar esta parte em ruby, no ficheiro **config.rb**

{% highlight ruby %}
require 'susy'
require 'normalize-scss'
require 'breakpoint'
require 'animate-sass'

project_type = :stand_alone
preferred_syntax = :scss
output_style = :expanded
relative_assets = true
css_dir = "public/assets/stylesheets"
sass_dir = "src/sass"
{% endhighlight %}

Nada de especial. Requiro algumas bibliotecas escritas em Ruby e indico o destino no **css_dir**. 


### HTML
Quem está habituado a frameworks XPTOs que lidam com os recursos públicos certamente não se depara com estes problemas mas no mundo do PHP é bem conhecido. Vamos analisar a estrutura típica de um projecto


- src
- public
 - stylesheets
 - scripts
 - html

O código é mantido na pasta src (source) e queremos que a pasta public contenha todos os recursos. É ridículo referenciar isto mas também evita estar código PHP disponível na pasta publica, e mais tarde alguém alterar as permissões para 777 para corrigir um erro e derepente algo mau acontece...

O AngularJS é uma framework excelente. Os temas em HTML são servidos apartir de uma cache disponível pelo serviço ``$templateCache``. Isto pode parecer demasiado estranho mas na realidade a apresentação é renderização do HTML é sempre feita em javascript, e assim podemos criar os templates usando javascript. 

{% highlight javascript %}
function($templateCache) {
	$templateCache.put("home.html","<div>The homepage</div>");
}
{% endhighlight %}

Que proveito podemos tirar daqui? Idealiza a situação em que tems 300 ficheiros html (algo fácil de alcançar com muitas directivas). Se estes ficheiros forem distribuídos no servidor web como ficheiros individuais, o utilizador vai realizar 300 pedidos ao servidor para obter todos os templates.

E se todos os ficheiros html fossem injectados no angularjs através de o mesmo ficheiro javascript? Um grande ficheiro podes pensar, mas divido devidamente em modulos e o angular só os carrega quando necessário!

#### gulp-angular-templatecache

Vamos configurar este processo com o pacote **gulp-angular-templatecache**. 

{% highlight javascript %}
gulp.task('templates', function () {
    gulp.src(['./src/html/*.html', './src/html/**/*.html', './src/html/**/**/*.html'])
        .pipe(templateCache())
        .pipe(gulp.dest('./public/assets'));
});
{% endhighlight %}

Vai ser criado o ficheiro **templates.js** na pasta **public/assets**. Este ficheiro injeta os templates com o **$templateCache** no módulo **templates**. Vamos criar este módulo e carregá-lo no módulo da nossa aplicação.

{% highlight javascript %}
angular.module('templates', []);
angular.module('ourWebsite', ['templates']);
{% endhighlight %}

### Gulp

{% highlight javascript %}
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    templateCache = require('gulp-angular-templatecache');

var appModules = [
'./src/javascript/*.mdl.js',
'./src/javascript/*.js',
'./src/javascript/**/*.js',
'./src/javascript/common/*.mdl.js',
'./src/javascript/common/**/*.mdl.js',
'./src/javascript/common/**/**/*.mdl.js',
'./src/javascript/common/*.js',
'./src/javascript/common/**/*.js',
'./src/javascript/common/**/**/*.js',
'./src/javascript/core/*.mdl.js',
'./src/javascript/core/**/*.mdl.js',
'./src/javascript/core/**/**/*.mdl.js',
'./src/javascript/core/*.js',
'./src/javascript/core/**/*.js',
'./src/javascript/core/**/**/*.js'
];

gulp.task('templates', function () {
    gulp.src(['./src/html/*.html', './src/html/**/*.html', './src/html/**/**/*.html'])
        .pipe(templateCache())
        .pipe(gulp.dest('./public/assets'));
});

gulp.task('scripts', function(){
   
   gulp.src(appModules)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./public/assets/scripts'));

    gulp.src(['./bower_components/angular/angular.js', './bower_components/angular-i18n/angular-locale_pt.js'])
      .pipe(concat('angular.js'))
      .pipe(gulp.dest('./public/assets/scripts'));

   gulp.src([
       './bower_components/ui-router/release/angular-ui-router.js',
       './bower_components/underscore/underscore.js'
        ])
       .pipe(concat('dependencies.js'))
       .pipe(gulp.dest('./public/assets/scripts'));
});

gulp.task('default', ['scripts', 'templates']);

{% endhighlight %}

Na tarefa scripts eu eu começo por concatenar os ficheiros da aplicação:

- uso prefixos sempre que possível: mdl para módulos, drv para directivas, ctrl para controladores, srv para serviços, rsc para recursos. 
- no core está todo o código aplicacional, este código consome diversas dependências e tento sempre manter os diferentes tipos de código (html, javascript e sass) dentro da mesma pasta.
- o angularjs precisa de primeiro executar os ficheiros com as declarações dos módulos e só depois o código que os utiliza. daí no array **appModules** procurar primeiro por padrões **.mdl.js** para os puder inserir na ordem correcta.
- os nomes dos controladores, serviços, etc também são prefixos. Isto para evitar colições

O diretório src ficaria assim:

- sass
	- site.scss - este ficheiro vai importar todos os ficheiros scss do core e common. como os restantes são prefixos com **_**, apenas o ficheiro site.css é gerado
- app.mdl.js 
- core
	- core.mdl.js
	- layout.html - o ficheiro que vai servir como index.html e template no angular
	- home
		- home.ctrl.js - 'app.core.homeCtrl'
		- home-highlight.drv.js - 'app.core.homeHighlight'
		- home.html
		- home.scss
	- users
		- users.mdl.js
		- users.ctrl.js - 'app.core.users.usersCtrl'
		- users.html
		- users.scss
		- user-details
			- user-details.ctrl.js - 'app.core.users.userDetailsCtrl'
			- user-details.sass
			- user-details.html
- common
	- common.mdl.js
	- directives
		- directives.mdl.js 
		- facebook-share.drv.js - 'app.common.directives.facebookShare'
	- services
		- services.mdl.js
		- http-utils.srv.js - 'app.common.services.httpUtils'

É com esta estrutura que desenvolvo aplicações em angularjs. Durante o desenvolvimento podes utilizar bibliotecas com a função **watch** para correr as tarefas do gulp sempre que hajam alterações nos ficheiros javascript, html e sass e assim tudo é mais automatizado. No caso do sass uso o **compass watch** que utiliza a configuração ruby para publicar correctamente.

O que me agrada nesta abordagem é ter este directório **public**

- assets
	- scripts
		- angular.js
		- dependencies.js
		- app.js
	- stylesheets
		- site.css
	- templates.js

Outras tarefas depois são adicionadas para melhorar o código distribuído, como a remoção de comentários, contatenação, um uglifyjs para o código ficar mais leve, etc.


## Um exemplo

Podes ver um exemplo de uma aplicação que publiquei no github e que segue esta abordagem: [https://github.com/guilhermegeek/marijuana-app](https://github.com/guilhermegeek/marijuana-app) 