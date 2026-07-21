# Múltiplas Ofertas — página de entrada

Página estática que recebe o tráfego (bio do Instagram/TikTok e anúncios) e manda pro
canal ou grupo do WhatsApp. Hospedada de graça no GitHub Pages.

A página **é a arte** (`capa.jpg`), com um botão transparente posicionado exatamente sobre
o CTA verde "ENTRAR NO GRUPO VIP".

## Trocar a arte

1. Substitua `capa.jpg` pela nova imagem.
2. Ajuste `BOTAO` no `index.html` com a posição do CTA na nova arte, em % da imagem:
   ```js
   const BOTAO = { left: 14.35, top: 88.03, width: 66.67, height: 4.94 };
   ```
3. Para conferir o encaixe, ponha `debug: true` no `CONFIG` — o botão fica azul e visível.
   Depois volte para `false`.

> A imagem foi salva em JPEG q90 (335 KB em vez de 1,7 MB do PNG). Tráfego de anúncio é
> quase todo 4G — página pesada derruba conversão.

> ⚠️ **Este repositório é PÚBLICO.** Nunca coloque aqui `.env`, credenciais, token ou
> qualquer coisa do app Shopee Automático. Só links de convite e a página.

## Por que existe

- **Grupo lota em 1.024.** Se o anúncio apontar direto pro link do grupo, quando ele encher
  o anúncio morre e você perde o dinheiro já investido. Aqui você só marca `cheio: true`
  e a página passa a oferecer o próximo — sem mexer no anúncio.
- **Meta às vezes bloqueia** link `chat.whatsapp.com` direto no anúncio.
- **Permite o Pixel da Meta**, então dá pra fazer retargeting de quem clicou e não entrou.

## Como configurar

Tudo fica no bloco `CONFIG`, no topo do `index.html`:

```js
const CONFIG = {
  canal:   { link: 'https://whatsapp.com/channel/SEU_CODIGO', ativo: true },
  grupos:  [
    { nome: 'Múltiplas Ofertas • Grupo 1', link: 'https://chat.whatsapp.com/XXXX', cheio: false },
    { nome: 'Múltiplas Ofertas • Grupo 2', link: 'https://chat.whatsapp.com/YYYY', cheio: false },
  ],
  membros: '2.400',        // prova social; '' esconde
  pixelId: '1234567890'    // Pixel da Meta; '' não carrega nada
};
```

**Quando um grupo lotar:** troque `cheio: false` para `true` e faça commit. Pronto.

## Publicar no GitHub Pages

1. Crie um repositório **público** chamado `achadinhos-links`.
2. `git remote add origin https://github.com/SEU_USUARIO/achadinhos-links.git`
3. `git push -u origin main`
4. No GitHub: **Settings → Pages → Source: Deploy from a branch → main / (root) → Save**
5. Em 1–2 minutos sai no ar em `https://SEU_USUARIO.github.io/achadinhos-links/`

Use essa URL na bio do Instagram, do TikTok e como destino dos anúncios.
