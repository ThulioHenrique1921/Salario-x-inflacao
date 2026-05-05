const entradaDados =  require(`readline-sync`)

let dados_inflacao = [
    {ano: 2010,             salario:510.00,             ipca:5.91                 },
    {ano: 2011,             salario:545.00,             ipca:6.50                },
    {ano: 2012,             salario:622.00,             ipca:5.84                 },
    {ano: 2013,             salario:678.00,             ipca:5.91                 },
    {ano: 2014,             salario:724.00,             ipca:6.41                 },
    {ano: 2015,             salario:788.00,             ipca:10.67                 },
    {ano: 2016,             salario:880.00,             ipca:6.29                 },
    {ano: 2017,             salario:937.00,             ipca:2.95                 },
    {ano: 2018,             salario:954.00,             ipca:3.75                 },
    {ano: 2019,             salario:998.00,             ipca:4.31                 },
    {ano: 2020,             salario:1045.00,            ipca:3.52                 }
]

console.log("1 - Listar salários mínimos de 2010 a 2020\n");
console.log("2 - Listar o índice IPCA de 2010 a 2020\n");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA\n \n");
let valor_escolha = entradaDados.question("Digite o número da sua escolha: ");

console.log(`\nVocê escolheu: ${valor_escolha}`);