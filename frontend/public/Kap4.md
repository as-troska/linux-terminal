# Kapittel 4: Pakkehåndtering

I dette kapittelet skal vi se på hvordan vi kan installere og fjerne programvare i Linux. Vi skal se på hvordan vi kan bruke pakkehåndteringsverktøyene `apt` og `dpkg` for å installere og fjerne programvare. Vi skal også se på hvordan vi kan oppdatere systemet vårt. 

Foreløpig har vi bare brukt terminalen til å utforske filsystemet og utføre enkle oppgaver. Nå skal vi se på hvordan vi kan bruke terminalen til å installere programvare som lar oss gjøre mer avanserte ting med systemet vårt. (Som å spille Pacman i terminalen!)

## Pakkehåndtering i Linux (Ubuntu)

I Linux bruker vi pakkehåndteringssystemer for å installere og fjerne programvare. De to vanligste verktøyene for pakkehåndtering i Ubuntu er `apt` og `dpkg`. Merk at pakkehåndteringssystemene kan variere fra distribusjon til distribusjon, men prinsippene er like. For å kunne laste ned og installere programvare, trenger du internett-tilkobling, tilgang til en pakkeindeks og administratorrettigheter.

### `apt`-kommandoen

`apt` er et avansert verktøy for pakkehåndtering i Ubuntu. Med `apt` kan du installere, fjerne og oppdatere programvare. `apt` henter programvare fra pakkeindeksen til Ubuntu, og installerer den på systemet ditt.

- For å installere programvaren `sl`, skriver du `sudo apt install sl`.
- For å fjerne programvaren `sl`, skriver du `sudo apt remove sl`.
- For å oppdatere pakkeindeksen, skriver du `sudo apt update`.
- For å oppdatere programvaren på systemet ditt, skriver du `sudo apt upgrade`.

Å installere programvare fungerer med andre ord ikke så ulikt som å installere apper på en smarttelefon, Mac eller Windows-store . Du søker opp (skriver inn) programmet du vil ha, og installerer det med et tastetrykk. Når du oppdatere pakkeindeksen får du en oversikt over hvilke programmer som kan (og bør) oppdateres, og du kan oppdatere alle på en gang. Ulempen med dette systemet er når du skal legge inn ting som ikke finnes i pakkeindeksen.

### Oppgave
1. Oppdater pakkeindeksen med `sudo apt update`.
2. Installer programmet `sl` med `sudo apt install sl`.
3. Kjør programmet `sl` med `sl`.
4. Fjern programmet `sl` med `sudo apt remove sl`.
5. Oppdater systemet ditt med `sudo apt upgrade`.

> **Hint:** Programmet `sl` er en morsom påminnelse om å skrive `ls` riktig. Når du skriver `sl` i terminalen, får du en animasjon av et tog som kjører over skjermen. For å avslutte animasjonen, trykker du `Ctrl + C`.

> **Tips:** Dersom et program ikke finnes i pakkeindeksen, tilbyr ofte utviklerene sine egne pakkeindekser. Disse kan legges til i systemet ditt, slik at du kan installere programvaren direkte fra utviklerens pakkeindeks. Vi går ikke i dybden på dette i dette kurset, men det er en nyttig ting å vite om, og du finner som oftest instruksjoner for hvordan du legger til en ekstern pakkeindeks på utviklerens nettside.

### `dpkg`-kommandoen
Som vi nevnte tidligere, kan det hende at du vil installere programvare som ikke finnes i pakkeindeksen. I slike tilfeller kan du bruke `dpkg`-kommandoen. `dpkg` installerer og fjerner pakker i `.deb`-format. `.deb`-filer er installasjonsfiler for Debian-baserte systemer som Ubuntu.

- For å installere en `.deb`-fil, skriver du `sudo dpkg -i filnavn.deb`.
- For å fjerne en pakke, skriver du `sudo dpkg -r pakkenavn`.

### Oppgave
1. Last ned `.deb`-filen for programmet `sl` fra [Ubuntu Packages](https://packages.ubuntu.com/).
2. Installer `.deb`-filen med `sudo dpkg -i filnavn.deb`.
3. Fjern programmet `sl` med `sudo dpkg -r sl`.

> **Hint**: Vi trenger ikke å bruke nettleseren for å laste ned `.deb`-filer. Vi kan bruke `wget`-kommandoen for å laste ned filer fra terminalen, dersom du har url til filen.. For å laste ned `.deb`-filen for programmet `sl`, skriver du `wget http://mirrors.kernel.org/ubuntu/pool/universe/s/sl/sl_5.02-1_amd64.deb`.

## Søke etter programvare med `apt`
Vi lovte deg Pacman, og Pacman skal du få! I terminalen, selvfølgelig. For å søke etter programvare i pakkeindeksen, kan du bruke `apt search`-kommandoen. `apt search` søker etter programvare i pakkeindeksen og viser en liste over programmer som matcher søket ditt.

- For å søke etter programvare som inneholder ordet `pacman`, skriver du `apt search pacman`.

### Oppgave
1. Søk etter programvare som inneholder ordet `pacman`.
2. Installer programmet `pacman4console` med `sudo apt install pacman4console`.
3. Kjør programmet `pacman4console` med `pacman4console`. Dersom du vil gå ut avslutter du med ctrl+c.



