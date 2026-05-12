/* IMPORTAÇÃO BIBLIOTECA READLINE-SYNC */
const entradaDados =  require(`readline-sync`);
/* IMPORTAÇÃO BIBLIOTECA READLINE-SYNC */

/* DECLARÇÃO DE VARIÁVEIS GLOBAIS */
let dadosInflacao = [
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
let labelAno = "Ano: ";
let labelSalario = "Salário mínimo: ";
let label_Ipca = "Inflação IPCA: ";
let labelcrescimentoSalarial = "Crescimento Salarial: ";
/* DECLARÇÃO DE VARIÁVEIS GLOBAIS */


console.log("Escolha uma das alternativas:\n");
console.log("1 - Listar salários mínimos de 2010 a 2020");
console.log("2 - Listar o índice IPCA de 2010 a 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA\n \n");
let valor_escolha = entradaDados.question("Digite o número da sua escolha: ");

switch (valor_escolha) {
    case "1" :         
        for (let dados of dadosInflacao){
            let salarioFormatado = dados.salario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
            console.log(`\n${labelAno.padEnd(40, '.')} ${dados.ano}\n${labelSalario.padEnd(40, '.')} ${salarioFormatado}\n` );
        }        
        break;
    case "2" :
        for (let dados of dadosInflacao){            
            console.log(`\n${labelAno.padEnd(40, '.')} ${dados.ano}\n${label_Ipca.padEnd(40, '.')}${dados.ipca}%\n`);
        }     
        break;
    case "3" :
        let SalarioAnterior = null;
        let diferencaSalarial = null;
        for (let dados of dadosInflacao){
            let salarioFormatado = dados.salario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
            if (dados.ano === 2010){
                let resultado = `\n${labelAno.padEnd(40, '.')} ${dados.ano}\n`;
                resultado += `${labelSalario.padEnd(40, '.')} ${salarioFormatado}\n`;
                resultado += `${labelcrescimentoSalarial.padEnd(40, '.')} -\n`;
                resultado += `${label_Ipca.padEnd(40, '.')} ${dados.ipca}%\n`;
                console.log(resultado);
                SalarioAnterior = dados.salario;
            }else {
                diferencaSalarial = dados.salario - SalarioAnterior;
                let percentualCrescimento = (diferencaSalarial / SalarioAnterior) * 100;
                let resultado = `\n${labelAno.padEnd(40, '.')} ${dados.ano}\n`;
                resultado += `${labelSalario.padEnd(40, '.')} ${salarioFormatado}\n`;
                resultado += `${labelcrescimentoSalarial.padEnd(40, '.')} ${percentualCrescimento.toFixed(2)}%\n`;
                resultado += `${label_Ipca.padEnd(40, '.')} ${dados.ipca}%\n`;
                console.log(resultado);
                Salario_anterior = dados.salario;
            }                
        }
        break;
    default: 
    console.log('Opção inválida...');
}
