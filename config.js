/* ============================================================
   CONFIGURAÇÃO ÚNICA — é o único arquivo que você mexe.
   Vale para a página principal e para os links curtos (/vip).
   Quando um grupo lotar (1.024), marque cheio: true.
   ============================================================ */
const CONFIG = {
  // Canal do WhatsApp — se ativo, vira o destino de tudo
  canal: {
    link: 'https://whatsapp.com/channel/COLE_O_CODIGO_AQUI',
    ativo: false
  },

  // Grupos — o primeiro com "cheio: false" é o destino atual
  grupos: [
    { nome: 'Múltiplas Ofertas • Grupo 1', link: 'https://chat.whatsapp.com/LPj7N26xYNxKJ44WrhPBTz', cheio: false },
    // { nome: 'Múltiplas Ofertas • Grupo 2', link: 'https://chat.whatsapp.com/XXXX', cheio: false },
  ],

  // ID do Pixel da Meta (deixe '' se ainda não tiver)
  pixelId: '',

  // true = mostra o contorno do botão, para conferir o encaixe na arte
  debug: false
};

/* Posição do botão sobre a arte, em % da imagem.
   Medido em capa.jpg (1024x1536): CTA verde em x 162-837, y 1320-1422.
   Só mexa se trocar a imagem. */
const BOTAO = { left: 15.82, top: 85.94, width: 65.92, height: 6.64 };

/* Descobre o destino atual: canal (se ativo) ou o primeiro grupo com vaga. */
function destinoAtual() {
  var temCanal = CONFIG.canal.ativo && CONFIG.canal.link.indexOf('COLE_O_CODIGO_AQUI') === -1;
  if (temCanal) return { url: CONFIG.canal.link, tipo: 'canal', rotulo: 'Entrar no canal' };
  var vaga = CONFIG.grupos.filter(function (g) {
    return !g.cheio && g.link.indexOf('COLE_AQUI') === -1;
  })[0];
  return vaga ? { url: vaga.link, tipo: 'grupo', rotulo: 'Entrar no Grupo VIP' } : null;
}
