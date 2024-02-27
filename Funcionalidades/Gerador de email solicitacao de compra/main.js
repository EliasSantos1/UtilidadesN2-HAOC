//Variaveis
var QuantidadeDeItensDiferentes = 1;
const BotaoAdicionarItens = document.getElementById("adicionarItens");
const BotaoEnviar = document.getElementById("enviar");
const botaoCopiar = document.querySelector("#botaoCopiar");
const divItens = document.getElementById("itens");
const divResultado = document.getElementById("resultado");

//Lista de itens
const ListaDeItens = [
  {
    codigo: 492018,
    descricao: "TECLADO E MOUSE SEM FIO 2,4GHZ MK235 920-007903 LOGITECH",
    preco: 199.9,
  },
  {
    codigo: 492006,
    descricao:
      "SUPORTE PARA MONITOR COM REGULAGEM DE ALTURA PRETO SM-1275 5828 DIGITADOR",
    preco: 119.9,
  },
  {
    codigo: 492004,
    descricao:
      "SUPORTE P/NOTEBOOK REGULAVEL COM 10 ANGULACOES QUE VARIAM DE 15 A 60° PRETO SN-1263 PA5446 DIGITADOR",
    preco: 69.9,
  },
  {
    codigo: 491987,
    descricao: "SSD M.2 256GB NVME XPG GAMMIX S5- AGAMMIXS5-256GT-C ADATA",
    preco: 565.9,
  },
  {
    codigo: 491899,
    descricao:
      "SSD 480GB 2,5 SATA, LEITURA 500MB/S, GRAV. 450MB/S SA400S37/480G KINGSTON",
    preco: 459.9,
  },
  {
    codigo: 491898,
    descricao: "SSD 240GB 2,5 SATA III SATA A400 SA400S37/240G KINGSTON",
    preco: 290.0,
  },
  {
    codigo: 508987,
    descricao: "SMARTPHONE SAMSUNG GALAXY A04S PRETO 64GB 4GB RAM",
    preco: 866.0,
  },
  {
    codigo: 505345,
    descricao:
      "PEN DRIVE SANDISK ULTRA SHIFT, 32GB, USB 3.0 - SDCZ410-032G-G46",
    preco: 39.0,
  },
  {
    codigo: 505343,
    descricao: "PATCH CORD U/UTP GIGALAN GREEN CAT.6 LSZH T568A/B 2.5M CINZA",
    preco: 78.66,
  },
  {
    codigo: 505349,
    descricao: "PALHETA TIPO ESPATULA DE AÇO YAXUN YX 2B",
    preco: 19.0,
  },
  {
    codigo: 491894,
    descricao:
      "ORGANIZADOR DE CABOS 3/4 C/50 METROS PRETO SPIRADUTO 201053PR DUTOPLAST",
    preco: 461.9,
  },
  {
    codigo: 491893,
    descricao: "MOUSE SEM FIO 2,4GHZ M170 PRETO 910-004940 LOGITECH",
    preco: 89.9,
  },
  {
    codigo: 491892,
    descricao: "MOUSE COM FIO USB M90 PRETO 910-004053 LOGITECH",
    preco: 42.9,
  },
  {
    codigo: 491890,
    descricao: "MOCHILA PARA NOTEBOOK 15 ESSENTIAL 460-BCTL DELL",
    preco: 189.9,
  },
  {
    codigo: 491889,
    descricao:
      "MEMORIA KINGSTON 8GB 1600MHZ DDR3 P/ NOTE CL11 KVR16S11/8 KINGSTON",
    preco: 519.9,
  },
  {
    codigo: 491886,
    descricao:
      "MEMORIA KINGSTON 8GB 1600MHZ DDR3 P/ NOTE CL11 KCP3L16SD8/8 KINGSTON",
    preco: 499.9,
  },
  {
    codigo: 506496,
    descricao: "MEMORIA KINGSTON 16GB 2400MHZ DDR4 P/ NOTE KINGSTON",
    preco: 310.0,
  },
  {
    codigo: 507292,
    descricao:
      "MEMÓRIA HUSKY TECHNOLOGIES, 8GB, 2666MHZ, DDR4, CL19, PARA NOTEBOOK - HTCQ001",
    preco: 169.0,
  },
  {
    codigo: 491885,
    descricao: "MEMORIA 8GB MICRON DDR4 2666MHZ P/NOTE WHS84S8AZ WIN MEMORY",
    preco: 419.9,
  },
  {
    codigo: 491884,
    descricao: "MEMORIA 8GB DDR4 2666MHZ CL19 WIM WH5SD8G8C3UAZ MICRON",
    preco: 419.9,
  },
  {
    codigo: 491883,
    descricao: "MEMORIA 8GB DDR4 2666MHZ CL19 CT8G4DFS8266 CRUCIAL",
    preco: 439.9,
  },
  {
    codigo: 491881,
    descricao: "MEMORIA 8GB DDR3 L SODIMM 1600MHZ MICRON",
    preco: 559.9,
  },
  {
    codigo: 508139,
    descricao: "MEMORIA 8GB DDR3 DELL OPTIPLEX 3020 3040M MICRO ALL-IN-ONE",
    preco: 399.0,
  },
  {
    codigo: 490902,
    descricao: "MEMORIA 8GB DDR3 1600MHZ LOW 1,35V NOT.4B4G0846D SAMSUNG",
    preco: 569.9,
  },
  {
    codigo: 490900,
    descricao: "MEMORIA 8GB DDR3 1600MHZ CL11 KVR16N11/8 KINGSTON",
    preco: 405.9,
  },
  {
    codigo: 481444,
    descricao:
      "LOCALIZADOR TESTADOR DE CABOS DE REDE ZUMBIDOR PROFISSIONAL - MULTI",
    preco: 199.0,
  },
  {
    codigo: 505080,
    descricao:
      "LEITOR QUICKSCAN QW2520, 2D VGA IMAGER, USB, PRETO, SEM SUPORTE (INCLUSO CABO USB 90A052258)",
    preco: 696.89,
  },
  {
    codigo: 507585,
    descricao:
      "KIT GALAXY A04S - CAPINHA TRANSPARENTE + PELICULA 3D VIDRO SAMSUNG GALAXY A04S",
    preco: 49.0,
  },
  {
    codigo: 505488,
    descricao:
      "KIT FERRAMENTAS PRECISÃO 38 PÇS CHAVES CELULAR E NOTEBOOK INFORMÁTICA",
    preco: 89.0,
  },
  {
    codigo: 490899,
    descricao: "HUB USB 3.0 4 PORTAS 830598 CRLO",
    preco: 119.9,
  },
  {
    codigo: 491830,
    descricao: "HEADSET USB KIT MONITORAMENTO E TREINAMENTO",
    preco: 249.0,
  },
  {
    codigo: 508138,
    descricao: "HEADSET EVOLVE 20 MS DUO USB JABRA 4999-823-109",
    preco: 390.0,
  },
  {
    codigo: 490886,
    descricao: "FONTE DE ALIMENTACAO FOR NORTH AMERICA CP-PWR-8821-NA CISCO",
    preco: 516.9,
  },
  {
    codigo: 490885,
    descricao: "FONE DE OUVIDO COM MICROFONE P2 HEADFUN PT PH115 MULTILASER",
    preco: 78.9,
  },
  {
    codigo: 490879,
    descricao: "CONVERSOR HDMI PARA VGA COM AUDIO WI293 MULTILASER",
    preco: 99.9,
  },
  {
    codigo: 500740,
    descricao: "CONECTOR MACHO CAT.6 PARA CABOSOLIDO PCT 50 PLUGS",
    preco: 281.8,
  },
  {
    codigo: 500741,
    descricao: "CONECTOR FEMEA SOHOPLUS CAT.6T568A/B - BRANCO",
    preco: 49.0,
  },
  {
    codigo: 500745,
    descricao: "CONECTOR FEMEA MULTILAN CAT.6T568A/B 90/180-BRANCO",
    preco: 38.49,
  },
  {
    codigo: 493689,
    descricao: "CARRINHO SUPORTE PARA CPU E NOBREAK COM RODINHAS FORCE LINE",
    preco: 39.9,
  },
  {
    codigo: 490876,
    descricao: "CARREGADOR DE PAREDE USB 5V 2.1A BRANCO 044-0001 5+",
    preco: 32.9,
  },
  {
    codigo: 443969,
    descricao: "CÂMERA DE VIDEOCONFERÊNCIA LOGITECH BCC950 1080P WEBCAM",
    preco: 1699.0,
  },
  {
    codigo: 506944,
    descricao: "CABO USB TIPO C XIAOMI, 100CM, PRETO - XM262PRE",
    preco: 69.0,
  },
  {
    codigo: 505487,
    descricao: "CABO USB LEITOR CÓDIGO DE BARRAS HONEYWELL XENON 1900",
    preco: 119.0,
  },
  {
    codigo: 508140,
    descricao:
      "CABO USB 10 METROS AM+BM PARA IMPRESSORA COM FILTRO CONTRA INTERFERÊNCIAS NT 03940 PRETO",
    preco: 49.0,
  },
  {
    codigo: 491831,
    descricao: "BATERIA PARA NOTEBOOK LENOVO B330-15IKBR",
    preco: 349.0,
  },
  {
    codigo: 500871,
    descricao: "BATERIA PARA NOTEBOOK DELL INSPIRON 5458",
    preco: 279.0,
  },
  {
    codigo: 490718,
    descricao: "BATERIA PARA NOTEBOOK DELL E5420 E5520 8858X",
    preco: 499.9,
  },
  {
    codigo: 505348,
    descricao: "ALICATE PUNCH DOWN - SC3140 - 0563140 - KOKAY",
    preco: 69.0,
  },
  {
    codigo: 493690,
    descricao:
      "ADAPTADOR WIFI USB 3.0 DUAL BAND 1200MB 2.4GHZ/5GHZ WIRELESS 5G",
    preco: 169.9,
  },
  {
    codigo: 490715,
    descricao: "ADAPTADOR PCI EXPRESS WIRELESS N 300MBPS TL-WN881ND TP-LINK",
    preco: 299.9,
  },
  {
    codigo: 355556,
    descricao: "ADAPTADOR DISPLAYPORT PARA VGA",
    preco: 59.9,
  },
  {
    codigo: 509644,
    descricao:
      "CARREGADOR ORIGINAL DELL COMPATÍVEL COM NOTEBOOK DELL LATITUDE 3400/3490/3410/3420",
    preco: 248.0,
  },
  {
    codigo: 509645,
    descricao:
      "CARREGADOR ORIGINAL DELL COMPATÍVEL COM NOTEBOOK DELL VOSTRO 3460/3470/E7240",
    preco: 248.0,
  },
  {
    codigo: 509646,
    descricao:
      "CARREGADOR ORIGINAL DELL COMPATÍVEL COM NOTEBOOK DELL VOSTRO 14-5470/5480",
    preco: 248.0,
  },
  {
    codigo: 509647,
    descricao:
      "CARREGADOR ORIGINAL HP 19,5V 2.31A PA-1450-36HB COMPATÍVEL COM NOTEBOOK HP 240 G7",
    preco: 248.0,
  },
  {
    codigo: 490895,
    descricao: "HEADSET BLACKWIRE C3210 USB 209744-101T PLANTRONICS",
    preco: 295.9,
  },
  {
    codigo: 490896,
    descricao: "HEADSET BLACKWIRE C3220 USB 209745-101T PLANTRONICS",
    preco: 299.9,
  },
  {
    codigo: 505347,
    descricao: "PULSEIRA PROTEÇÃO ANTI-ESTÁTICA SEM FIO USO PROFISSIONAL ESD",
    preco: 29.0,
  },
  {
    codigo: 490798,
    descricao: "BATERIA CMOS CR 2032 - QI INFORMÁTICA",
    preco: 6.0,
  },
  {
    codigo: 505348,
    descricao: "ALICATE PUNCH DOWN - SC3140 - 0563140 - KOKAY",
    preco: 69.0,
  },
  {
    codigo: 490716,
    descricao: "APOIO PARA MOUSE EM GEL C/APOIO P/PUNHO PQ PT AC021 MULTILASER",
    preco: 35.14,
  },
  {
    codigo: 109120,
    descricao:
      "ÁLCOOL ISOPROPILICO 99,8% ISOPROPANOL 1 LITRO PCI, LIMPEZA ELETRÔNICA",
    preco: 49.0,
  },
  {
    codigo: 490880,
    descricao: "CONVERSOR HDMI PARA VGA COM SAIDA R/L 075-0823 5+",
    preco: 59.9,
  },
  {
    codigo: 490877,
    descricao: "CASE PARA HD 2.5 USB 3.0 PT",
    preco: 69.9,
  },
  {
    codigo: 505489,
    descricao:
      "CASE PARA HD EXTERNO TRANSPARENTE NOTEBOOK SATA 2.5 USB 3.0 - EXBOM",
    preco: 49.0,
  },
  {
    codigo: 490382,
    descricao: "CHARGINGW-C25-M - CABO BRANCO CARREGADOR UNIVERSAL MICRO",
    preco: 37.57,
  },
  {
    codigo: 490871,
    descricao: "CABO MICRO USB 5 PINOS M X USB M 1,2M WI226 MULTILASER",
    preco: 12.9,
  },
  {
    codigo: 505956,
    descricao: "CABO DE FORÇA ATX 3 PINOS PARA CPU",
    preco: 26.0,
  },
  {
    codigo: 490718,
    descricao: "BATERIA PARA NOTEBOOK DELL E5420 E5520 8858X",
    preco: 499.9,
  },
  {
    codigo: 500871,
    descricao: "BATERIA PARA NOTEBOOK DELL INSPIRON 5458",
    preco: 279.0,
  },
  {
    codigo: 490799,
    descricao: "BATERIA PARA NOTEBOOK DELL LATITUDE 3400-39W BB11-DE125-H",
    preco: 1189.9,
  },
  {
    codigo: 490858,
    descricao: "BATERIA PARA NOTEBOOK DELL LATITUDE 3440 BB11-DE099",
    preco: 459.9,
  },
  {
    codigo: 490859,
    descricao: "BATERIA PARA NOTEBOOK DELL LATITUDE 3470 BB11-DE120",
    preco: 579.9,
  },
  {
    codigo: 490861,
    descricao: "BATERIA PARA NOTEBOOK DELL LATITUDE 3490 BB11-DE125-4C",
    preco: 919.9,
  },
  {
    codigo: 490862,
    descricao: "BATERIA PARA NOTEBOOK DELL LATITUDE 5480-44W BB11-DE138",
    preco: 1199.9,
  },
  {
    codigo: 490863,
    descricao: "BATERIA PARA NOTEBOOK DELL LATITUDE E7240 BB11-DE119",
    preco: 499.9,
  },
  {
    codigo: 490865,
    descricao: "BATERIA PARA NOTEBOOK DELL VOSTRO 3460 BB11-DE085",
    preco: 419.9,
  },
  {
    codigo: 490872,
    descricao: "CABO MONITOR VGA HD15MXHD15 1,8M 08.602 CABOS GOLDEN",
    preco: 28.9,
  },
  {
    codigo: 507293,
    descricao: "CABO POWER SATA HD E DVD DELL OPTIPLEX 3040 SFF 0HG2F3",
    preco: 99.0,
  },
  {
    codigo: 491833,
    descricao: "HD EXTERNO 1TB",
    preco: 429.9,
  },
  {
    codigo: 508987,
    descricao: "SMARTPHONE SAMSUNG GALAXY A04S PRETO 64GB 4GB RAM",
    preco: 866.0,
  },
  {
    codigo: 507585,
    descricao:
      "KIT GALAXY A04S - CAPINHA TRANSPARENTE + PELICULA 3D VIDRO SAMSUNG GALAXY A04S",
    preco: 49.0,
  },
  {
    codigo: 492011,
    descricao: "TECLADO E MOUSE COM FIO USB MK120 920-004429 LOGITECH",
    preco: 142.9,
  },
  {
    codigo: 492022,
    descricao: "TECLADO PARA NOTEBOOK DELL LATITUDE 3450 KB-DIN14-3SLI",
    preco: 109.9,
  },
  {
    codigo: 492023,
    descricao: "TECLADO PARA NOTEBOOK DELL VOSTRO 3460-SEM",
    preco: 99.9,
  },
  {
    codigo: 514253,
    descricao: "CAPA E PELÍCULA PARA SAMSUNG GALAXY TAB A8",
    preco: 149.0,
  },
  {
    codigo: 514254,
    descricao: "CAPA E PELÍCULA PARA IPAD MINI 2",
    preco: 199.0,
  },
  {
    codigo: 514255,
    descricao:
      "KVM SWITCH HDMI 2 COMPUTADORES COM DUAL MONITOR SUPORTE 3840X2160 A 30HZ OU 1920X1080 A 60HZ, PADRÃO HDCP 2.0",
    preco: 975.0,
  },
  {
    codigo: 514256,
    descricao:
      "TECLADO FLEXÍVEL DE SILICONE DOBRÁVEL USB, PARA NOTEBOOK, PC, NA COR PRETO",
    preco: 185.0,
  },
];

//Chama funcoes
AdicionaItensNaDiv(event);
BotaoAdicionarItens.addEventListener("click", AdicionaItensNaDiv);
function AdicionaRespostaNaDiv(event) {
  event.preventDefault();
  const solicitante = document.getElementById("solicitante").value;
  const setor = document.getElementById("setor").value;
  const patrimonio = document.getElementById("patrimonio").value;
  const motivo = document.getElementById("motivo").value;
  const chamado = document.getElementById("chamado").value;

  const itens = {};
  const quantidadesItens = {};
  for (let a = 1; a < QuantidadeDeItensDiferentes; a++) {
    itens[`item-${a}`] = document.getElementById(`item-${a}`).value;
    quantidadesItens[`quantidade-${a}`] = document.getElementById(
      `quantidade-${a}`
    ).value;
  }

  if (document.getElementById("informacoes").checkValidity()) {
    AdicionaTextoNaDiv(
      solicitante,
      setor,
      patrimonio,
      motivo,
      chamado,
      itens,
      quantidadesItens
    );
  } else {
    alert("Por favor, preencha todos os campos obrigatórios.");
  }
}

//Utiliza o Select2 para pesquisar nas options do select Setor
$(document).ready(function () {
  $("#setor").select2();
});

//funcoes
function AdicionaItensNaDiv() {
  // Cria o elemento <select>
  const QuantidadeDeItensDiferentesTexto =
    QuantidadeDeItensDiferentes.toString();
  const idItem = `item-${QuantidadeDeItensDiferentesTexto}`;
  const idQuantidade = `quantidade-${QuantidadeDeItensDiferentesTexto}`;

  const labelItem = document.createElement("label");
  labelItem.textContent = "*Item:";
  labelItem.setAttribute("for", idItem);
  const select = document.createElement("select");
  select.id = idItem;

  // Cria as opções do <select>
  const opcaoSelecione = document.createElement("option");
  opcaoSelecione.value = "";
  opcaoSelecione.disabled = true;
  opcaoSelecione.selected = true;
  opcaoSelecione.textContent = "Selecione...";
  select.appendChild(opcaoSelecione);

  for (a in ListaDeItens) {
    const item = ListaDeItens[a];
    const option = document.createElement("option");
    option.value = item.codigo;
    option.textContent = item.descricao;
    select.appendChild(option);
  }

  // Cria o elemento <input>
  const labelQuantidade = document.createElement("label");
  labelQuantidade.textContent = "*Quantidade:";
  labelQuantidade.setAttribute("for", idQuantidade);
  const inputQuantidade = document.createElement("input");
  inputQuantidade.type = "number";
  inputQuantidade.id = idQuantidade;
  inputQuantidade.name = "quantidade";
  inputQuantidade.value = "1";

  // Adiciona os elementos à div com o id "itens"
  const divItens = document.getElementById("itens");
  divItens.appendChild(document.createElement("br"));
  divItens.appendChild(labelItem);
  divItens.appendChild(select);
  divItens.appendChild(document.createElement("br"));
  divItens.appendChild(labelQuantidade);
  divItens.appendChild(inputQuantidade);
  divItens.appendChild(document.createElement("br"));

  $(document).ready(function () {
    $(`#${idItem}`).select2();
  });

  QuantidadeDeItensDiferentes += 1;
}

function AdicionaTextoNaDiv(
  solicitante,
  setor,
  patrimonio,
  motivo,
  chamado,
  itensTabela,
  quantidadesItens
) {
  var texto1 = `
  <p>Eu preciso da sua <span class="destaque">aprovação</span> e <span class="destaque">centro de custo</span> para aquisição dos seguintes itens:</p>
      <br>
      `;

  var tabela1 = `
      <table>
      <thead>
        <tr>
          <td>SOLICITANTE</th>
          <td>${solicitante}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>SETOR</td>
          <td>${setor}</td>
        </tr>
        <tr>
          <td>PATRIMONIO</td>
          <td>${patrimonio}</td>
        </tr>
        <tr>
          <td>MOTIVO</td>
          <td>${motivo}</td>
        </tr>
        <tr>
          <td>CHAMADO</td>
          <td>${chamado}</td>
        </tr>
      </tbody>
      </table>

      <br><br>
      `;

  AdicionaTabelaDeItens(itensTabela, quantidadesItens);

  var texto2 = `
      <br>
      <p class="destaque">
        Obs: Todas as solicitações possuem 7 dias para que sejam aprovados, do contrário, o chamado é cancelado.
      </p>
      <p class="destaque">
        Pedimos o seu apoio para que possamos dar início a tratativa do chamado.
      </p>
      <p>
        Qualquer dúvida estou a sua disposição.
      </p>
      `;

  document.getElementById("texto1").innerHTML = texto1;
  document.getElementById("tabela1").innerHTML = tabela1;
  document.getElementById("texto2").innerHTML = texto2;
  AmostrarBotao(botaoCopiar);
}

function AdicionaTabelaDeItens(itensTabela, quantidadesItens) {
  const tabela = document.createElement("table");

  // Cabeçalho da tabela
  const thead = document.createElement("thead");
  const trHead = document.createElement("tr");
  const thDescricao = document.createElement("th");
  thDescricao.textContent = "DESCRIÇÃO";
  const thValorUni = document.createElement("th");
  thValorUni.textContent = "VALOR UNITÁRIO";
  const thQuantidade = document.createElement("th");
  thQuantidade.textContent = "QUANTIDADE";
  const thValorTotal = document.createElement("th");
  thValorTotal.textContent = "VALOR TOTAL (Aproximado)";

  trHead.appendChild(thDescricao);
  trHead.appendChild(thValorUni);
  trHead.appendChild(thQuantidade);
  trHead.appendChild(thValorTotal);
  thead.appendChild(trHead);

  const tbody = document.createElement("tbody");

  //cria os elementos da tabela e coloca os itens dentro
  for (let a = 1; a < QuantidadeDeItensDiferentes; a++) {
    const linha = document.createElement("tr");
    const descricao = document.createElement("td");
    const valorUni = document.createElement("td");
    const quantidade = document.createElement("td");
    const valorTotal = document.createElement("td");

    const codigo = Object.values(itensTabela)[a - 1];

    const quantidadeItem = Object.values(quantidadesItens)[a - 1];

    const objetoItem = buscarItemPorCodigo(codigo);

    descricao.textContent = `${objetoItem.descricao}`;
    valorUni.textContent = `R$ ${objetoItem.preco.toFixed(2)}`;
    quantidade.textContent = `${quantidadeItem}`;
    valorTotal.textContent = `R$ ${(objetoItem.preco * quantidadeItem).toFixed(
      2
    )}`;

    linha.appendChild(descricao);
    linha.appendChild(valorUni);
    linha.appendChild(quantidade);
    linha.appendChild(valorTotal);

    tbody.appendChild(linha);
  }

  tabela.appendChild(thead);
  tabela.appendChild(tbody);

  document.getElementById("tabela2").innerHTML = "";
  document.getElementById("tabela2").appendChild(tabela);
}

function buscarItemPorCodigo(codigo) {
  const itemEncontrado = ListaDeItens.find((item) => item.codigo == codigo);
  if (itemEncontrado) {
    return {
      descricao: itemEncontrado.descricao,
      preco: itemEncontrado.preco,
    };
  } else {
    alert("Item não encontrado.");
  }
}

var CopiarConteudo = {
  selecionarConteudo: function (el) {
    var body = document.body;
    var range, sel;
    if (document.createRange && window.getSelection) {
      range = document.createRange();
      sel = window.getSelection();
      sel.removeAllRanges();
      try {
        range.selectNodeContents(el);
        sel.addRange(range);
      } catch (e) {
        range.selectNode(el);
        sel.addRange(range);
      }
    } else if (body.createTextRange) {
      range = body.createTextRange();
      range.moveToElementText(el);
      range.select();
    }
    try {
      document.execCommand("copy");
      range.blur();
    } catch (error) {
      // Lidar com exceção aqui, se necessário
    }
  },
};

var copiarConteudoBtn = document.querySelector("#botaoCopiar");
var minhaDiv = document.querySelector("#resultado");

// Seleciona o conteúdo no clique do botão
copiarConteudoBtn.addEventListener("click", function () {
  CopiarConteudo.selecionarConteudo(minhaDiv);
});

botaoCopiar.style.display = "none"; // Esconde o botão inicialmente
function AmostrarBotao(botao) {
  botao.style.display = "block";
}
