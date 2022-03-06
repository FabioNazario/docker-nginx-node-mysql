# Docker-desafio-2

## Modo de usar: ##

```bash
git clone https://github.com/FabioNazario/docker-nginx-node-mysql
cd docker-nginx-node-mysql
docker-compose up -d
```
Obs: Mysql demorando muito para subir e não consegui descobrir porque, aguardar pelo menos 1 minuto antes de testar

----
Docker-desafio-2: enunciado

Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

Full Cycle Rocks!

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.
