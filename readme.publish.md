# Meu Componente

## Como usar

```ts

	//adicione essas linhas no seu project.config

	this.SYSTEM_CONFIG.map['@pjmt-components/meu-componente'] = `${this.APP_BASE}node_modules/@pjmt-components/meu-componente/index`;
    this.SYSTEM_BUILDER_CONFIG.paths['@pjmt-components/meu-componente'] = `node_modules/@pjmt-components/meu-componente/index.js`;


```


# Aqui você descreve o uso do seu componente

> Não se esqueça de informar as dependencias que não veem via npm como jquery, bootstrap, etc.

Exemplo
```html
	<link rel="stylesheet" href="/node_modules/select2/dist/css/select2.css">
	
	<script src="/node_modules/jquery/dist/jquery.min.js"></script>
```


Aqui ;D
