/* IMPORTAÇÃO BIBLIOTECA READLINE-SYNC */
const entradaDados =  require(`readline-sync`);
/* IMPORTAÇÃO BIBLIOTECA READLINE-SYNC */

/* DECLARÇÃO DE VARIÁVEIS GLOBAIS */
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
let label_ano = "Ano: ";
let label_salario = "Salário mínimo: ";
let label_IPCA = "Inflação IPCA: ";
let label_crescimento_salarial = "Crescimento Salarial: ";
/* DECLARÇÃO DE VARIÁVEIS GLOBAIS */


console.log("Escolha uma das alternativas:\n");
console.log("1 - Listar salários mínimos de 2010 a 2020");
console.log("2 - Listar o índice IPCA de 2010 a 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA\n \n");
let valor_escolha = entradaDados.question("Digite o número da sua escolha: ");

switch (valor_escolha) {
    case "1" :         
        for (let Dados of dados_inflacao){
            let salario_formatado = Dados.salario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
            console.log(`\n${label_ano.padEnd(40, '.')} ${Dados.ano}\n${label_salario.padEnd(40, '.')} ${salario_formatado}\n` );
        }        
        break;
    case "2" :
        for (let Dados of dados_inflacao){            
            console.log(`\n${label_ano.padEnd(40, '.')} ${Dados.ano}\n${label_IPCA.padEnd(40, '.')}${Dados.ipca}%\n`);
        }     
        break;
    case "3" :
        let Salario_anterior = null;
        let diferenca_salarial = null;
        for (let Dados of dados_inflacao){
            let salario_formatado = Dados.salario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
            if (Dados.ano === 2010){
                let resultado = `\n${label_ano.padEnd(40, '.')} ${Dados.ano}\n`;
                resultado += `${label_salario.padEnd(40, '.')} ${salario_formatado}\n`;
                resultado += `${label_crescimento_salarial.padEnd(40, '.')} -\n`;
                resultado += `${label_IPCA.padEnd(40, '.')}${Dados.ipca}%\n`;
                console.log(resultado);
                Salario_anterior = Dados.salario;
            }else {
                diferenca_salarial = Dados.salario - Salario_anterior;
                let percentual_de_crescimento = (diferenca_salarial/Salario_anterior) * 100;
                let resultado = `\n${label_ano.padEnd(40, '.')} ${Dados.ano}\n`;
                resultado += `${label_salario.padEnd(40, '.')} ${salario_formatado}\n`;
                resultado += `${label_crescimento_salarial.padEnd(40, '.')} ${percentual_de_crescimento.toFixed(2)}%\n`;
                resultado += `${label_IPCA.padEnd(40, '.')}${Dados.ipca}%\n`;
                console.log(resultado);
                Salario_anterior = Dados.salario;
            }                
        }
        break;
    default: 
    console.log('Opção inválida...');
}

