---
layout: default
---
<div class="container">
	<div class="row">
		<div class="col-xs-9">
			<div style="font-size:0.8em; color: #666666;">Artigos da categoria {{ page.category }}</div>
				  <div class="clearfix">
					{{ content }}
			  	  </div>
			</div>
		<div class="col-xs-3">
		{% include sidebar.html %}
		</div>
	</div>
</div>