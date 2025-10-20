# Autodrobnosti.cz – statický startér webu

Tento balíček je **hotová demo webová šablona** pro Autodrobnosti.cz:
- moderní design (tmavé pozadí, modrý akcent),
- domovská stránka s kategoriemi a ukázkovými produkty,
- jednoduchý formulář pro sběr e-mailů (demo).

## Jak to spustit lokálně
1. Stáhněte ZIP a rozbalte.
2. Otevřete `index.html` v prohlížeči.

## Jak to nasadit
### Varianta A – Netlify (nejjednodušší)
1. Vytvořte účet na netlify.com, klikněte **Add new site → Deploy manually**.
2. Nahrajte celý obsah složky.
3. V sekci Domain management klikněte **Add custom domain** a vložte `autodrobnosti.cz`.

### Varianta B – Vercel
1. Vytvořte účet na vercel.com, zvolte **Hobby**.
2. Vytvořte nový projekt a nahrajte složku.
3. Přidejte vlastní doménu `autodrobnosti.cz`.

### Varianta C – klasický webhosting (Wedos/Active24/Forpsi)
1. Přidejte doménu na hostingu, zapněte HTTPS/Let’s Encrypt.
2. Nahrajte soubory přes FTP do složky `www`.

## Napojení na e‑shop platformu (doporučeno)
Pro reálný prodej použijte:
- **Shoptet** (CZ) – jednoduché a rychlé, české dopravci a platby.
- **Shopify** – pokud plánujete expanzi do EU.

### Jak použít tuto šablonu se Shoptetem
- V Shoptetu: Vzhled → Editor → upravte hlavičku/HP pomocí vlastního HTML bloků.
- Obrázky z `assets/` nahrajte do Správce souborů.
- Karty produktů nahraďte komponentou z Shoptetu (produktový výpis).

## DNS a e-mail (doména)
1. U registrátora domén zaregistrujte `autodrobnosti.cz` (např. Wedos/Active24/Forpsi).
2. **A záznam**: nastavte na IP hostingu (Netlify: použijte CNAME).
3. **CNAME**: `www` → váš hosting alias (např. Netlify “site-name.netlify.app”).
4. E‑mail: pokud používáte Google Workspace, nastavte jejich **MX** záznamy.

> Pozn.: Tento starter neobsahuje košík/platby – ty zajistí platforma (Shoptet/Shopify).

## Úpravy
- Barvy a typografii měňte ve `styles.css`.
- Texty a kategorie v `index.html`.
