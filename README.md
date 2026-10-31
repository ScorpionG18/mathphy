# MathPhy – weboldal

Reszponzív, magyar nyelvű, statikus korrepetálási weboldal GitHub Pages-hez. Nincs szükség build eszközre vagy szerverre.

## 1. Saját adatok megadása

Nyisd meg a `config.js` fájlt, és szerkeszd:

- `calendlyUrl`: a Calendlyben létrehozott **konkrét esemény** teljes linkje (például `https://calendly.com/felhasznalo/maganora`). **E nélkül az oldalon „Hamarosan foglalható” jelenik meg, nem foglalható időpont.**
- `email`: opcionális kapcsolati e-mail.
- `price`: opcionális óradíj.
- `lessonFormat`: opcionális oktatási forma.

A bemutatkozó és egyéb szövegeket az `index.html` fájlban tudod módosítani. Ne adj meg valótlan adatot.

## 2. Calendly beállítása

1. Regisztrálj a https://calendly.com oldalon.
2. Hozz létre egy 60 perces, egyéni eseménytípust (pl. „MathPhy – magánóra”).
3. Kapcsold össze a naptáradat, állítsd be a Europe/Budapest időzónát, az előzetes foglalási szabályokat és a foglalási kérdéseket.
4. A hetente változó elérhetőséget a dátumonkénti (date-specific) idősávokkal add meg. Ne hagyj véletlenül aktív ismétlődő heti időpontokat.
5. Másold az esemény teljes URL-jét a `config.js` `calendlyUrl` mezőjébe.
6. Ellenőrizd a foglalási visszaigazolásokat és teszteld egy próbaidőponttal.

A foglalást és e-mailes visszaigazolást a Calendly szolgáltatása kezeli; a statikus weboldal nem tárol foglalásokat.

## 3. Publikálás GitHub Pages-en

1. Hozz létre GitHub-fiókot: https://github.com
2. Hozz létre egy **public** repositoryt `FELHASZNALONEV.github.io` néven, ahol a FELHASZNALONEV a saját GitHub-neved.
3. Töltsd fel a mappa **tartalmát** a repository gyökerébe: `index.html`, `styles.css`, `script.js`, `config.js`, `favicon.svg` (a README opcionális).
4. A repositoryban `Settings → Pages → Build and deployment → Deploy from a branch`, majd `main` és `/ (root)`, `Save`.
5. Az oldal címe: `https://FELHASZNALONEV.github.io/`.

Alternatíva: bármilyen nevű repository is használható, ekkor az oldal címe általában `https://FELHASZNALONEV.github.io/REPOSITORYNEV/`.

## 4. Ellenőrzőlista publikálás előtt

- [ ] A Calendly eseménylink valódi, és a naptár megjelenik.
- [ ] Próba-foglalás sikeres, e-mailes visszaigazolás megérkezik.
- [ ] A már lefoglalt időpont nem választható újra.
- [ ] A foglalási kérdések és lemondási feltételek megfelelnek az igényeidnek.
- [ ] A bemutatkozás és az oktatási forma pontos.
- [ ] A mobilos nézet megfelelő.
- [ ] Adatvédelmi tájékoztatás: a Calendly személyes adatokat kezel; a publikálás előtt gondoskodj a szükséges adatkezelési tájékoztatásról és vizsgáld meg a beágyazott harmadik fél szolgáltatásainak cookie/adatvédelmi vonatkozásait. Szükség esetén kérj szakértői segítséget.

## Megjegyzések

A Google Fonts külső szolgáltatásból töltődik be. Ha ezt el szeretnéd kerülni, távolítsd el a `styles.css` elején az `@import` sort: a helyettesítő betűtípusok működnek.

A weboldal HTML/CSS/JS fájljai ingyenesen hosztolhatók GitHub Pages-en. A Calendly ingyenes csomagjának korlátait és az aktuális szolgáltatási feltételeket ellenőrizd.
