# Header + Hero — Luana do Brasil (identidade amarelo + roxo)

Versão redesenhada seguindo a identidade visual do post do Instagram da campanha ("Quem alimenta a Bahia merece respeito"): amarelo vibrante + roxo profundo, tipografia gigante estilo manifesto, raios em zigue-zague e mensagem central de valorização dos quilombolas e marisqueiros.

## O que foi incluído

| Elemento | Descrição |
| --- | --- |
| **Barra de apoio** | "Pré-candidata a Deputada Federal — Bahia · 2026" com ponto dourado; desaparece ao rolar |
| **Header fixo** | Acompanha o scroll, fica compacto com fundo translúcido (blur) |
| **Badge eleitoral** | Pílula com o número da candidata + "Eleições 2026 · Bahia" |
| **Mega-título** | "Quem ALIMENTA a BAHIA merece RESPEITO." com palavras em amarelo e contorno (stroke) alternando, como no post |
| **Raios decorativos** | SVGs em zigue-zague com brilho suave, idênticos ao do post |
| **Fundo Ilha de Maré** | Foto do mar e das marisqueiras ao fundo, coberta por um gradiente roxo→amarelo para não disputar atenção com a foto da candidata |
| **Foto com moldura** | Arco no topo (remete ao mar/portão) + número gigante "5050" sobreposto na base |
| **Hashtags de causa** | #PescaArtesanal #Quilombolas #Marisqueiras |
| **Onda na base** | SVG suave separando o hero da próxima seção (remete ao mar) |
| **Menu mobile** | Hambúrguer animado com painel deslizante |

## Cores (editáveis nas variáveis `:root` do CSS)

- `--amarelo: #ffcf00` — amarelo vibrante da campanha
- `--roxo: #6d28d9` / `--roxo-fundo: #2e1065` — roxos
- `--roxo-escuro: #3b0a6e` — roxo quase preto para o header

## Como aplicar

1. **HTML**: substitua o trecho do `<header>` e do `<section class="hero">` no seu `index.html` pelo conteúdo deste arquivo.
2. **CSS**: copie as seções `HEADER` e `HERO` do `styles.css` para o seu CSS (ou use o arquivo inteiro como base).
3. **JS**: adicione o `script.js` antes de `</body>` — ele controla o header compacto ao rolar e o menu mobile.
4. **Imagens**: troque `logo.png` pelo logo oficial, `foto.png` pela foto real da Luana e `ilha.png` por uma foto da Ilha de Maré (a atual é ilustrativa).
5. **Número**: busque "5050" no HTML/CSS e troque pelo número real da candidata.

## Ajustes rápidos

- **Outro headline**: edite o `<h1 class="mega-title">` — use `.highlight` para palavras amarelas e `.stroke-text` para palavras com contorno branco.
- **Remover raios**: delete os dois `<svg class="bolt">`.
- **Sem foto no fundo**: delete `<div class="hero-bg">`.
- **Header sem sticky**: remova `position: fixed` de `.site-header`.
