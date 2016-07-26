# Sample of Component

# Uso do boilerplate 

> Não se esqueça de informar as dependencias que não veem via npm como jquery, bootstrap, etc.

Use a parta `src` para desenvolver o conteudo do seu componente, tentando sempre manter
o `index.ts` como centralizador dos modulos públicos do seu projeto...

```typescript

	//arquivo index.ts

	export * from './meu-componente.component';
	export * from './outro-componente.component';

	import {MeuComponenteComponent} from './meu-componente.component';
	import {OutroComponenteComponent} from './meu-componente.component';

	//exportar todas as diretivas
	export var MEU_COMPONENT_DIRECTIVES = [
		MeuComponenteComponent,
		OutroComponenteComponent
	];

```

## Comandos 


 - Para NPM
 	* `npm start` - Executa junto à um servidor local o sample
 	* `npm run package` - Cria o package distribuivel do seu componente, pronto para ir	para o npm
 	* `npm run publish` -  Gera o package e tenta atraves de `npm publish` enviar para o npm.
 	* `npm run build` -  Compila o typescript para javascript utilizando o **tsconfig.json**
 - Para Gulp 
	* `gulp package` - Cria o package distribuivel do seu componente, pronto para ir para o npm
	* `gulp publish` - Gera o package (via `gulp package` ) e tenta atraves de `npm publish` enviar para o npm.
	* `gulp serve:sample` - Executa junto à um servidor local o sample 
	* `gulp compile` - Compila o typescript para javascript utilizando o tsconfig.json
	* `gulp clean` - Limpa a pasta de samples e de build
	* `gulp assets:copy` - Copia o conteudo da pasta de assets (do sample) para a pasta `server` para desenvolvimento
 



## Sample de testes

 O comando para rodar o sample é

```bash
	npm start
```

### Estrutura dos Samples

Para alterar o exemplo siga para a pasta `sample/src` e mude a aplicação angular2 
que está lá contida.

Dentro da pasta `sample/assets` você pode mudar o seu `index.html` e colocar imagens 
e coisas assim dentro da task em `task/assets.task.js` o comportamento é de copiar tudo
para `server` seguindo a hierarquia de pastas presente.

