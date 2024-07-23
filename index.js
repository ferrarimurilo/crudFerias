const prompt = require("prompt-sync")({ sigint: true });

let registros = [];

function opcoes() {
  console.log(`

    ## Seleciona a operação desejada ##

    1 - Incluir atividade
    2 - Visualizar atividades
    3 - Editar atividade
    4 - Excluir atividade
    5 - Sair
    `);
}

while (true) {
  opcoes();

  let opcao = +prompt("Digite a opção desejada: ");
  if (opcao == 5) {
    console.log("Saindo...");
    break;
  }

  switch (opcao) {
    case 1:
        console.log("Incluir atividade");
        var dia = prompt("Informe o dia: ");
        var atividade = prompt("Digite qual foi sua atividade: ");
        registros.push({dia,atividade});
      break;

    case 2:
        console.log("Visualizar atividades");
        registros.forEach((registros,index) => {
            console.log("Registro "+(index+1) + " - " + " Dia: " + registros.dia + " Atividade: " + registros.atividade)
        });
      break;

    case 3:
        console.log("Editar atividade");
        registros.forEach((registros,index) => {
            console.log("Registro "+(index+1) + " - " + " Dia: " + registros.dia + " Atividade: " + registros.atividade)
        });
        var registro = +prompt("Digite o registro que deseja aditar: ");
        dia = prompt("Informe o dia: ");
        atividade = prompt("Digite qual foi sua atividade: ");
        registros[(registro-1)] = ({dia,atividade});


      break;

    case 4:
        console.log("Excluir atividade");
        registros.forEach((registros,index) => {
            console.log("Registro "+(index+1) + " - " + " Dia: " + registros.dia + " Atividade: " + registros.atividade)
        });
        registro = +prompt("Digite o registro que deseja excluir: ");
        registros.splice((registro-1),1);

      break;

    default:
      break;
  }
}
