# Kurs i Liunx-terminalen - Kapittel 2: Tekstbehandling

I dette kapittelet skal vi se på hvordan vi kan jobbe med tekstfiler i terminalen. Vi skal se på hvordan vi kan vise innholdet i filer, redigere filer og søke i filer.

## Redigere tekstfiler
For å redigere tekstfiler, kan vi bruke kommandoene `nano`, `vim` og `emacs`. `nano` er en enkel teksteditor som er lett å bruke. `vim` og `emacs` er mer avanserte teksteditorer som krever litt mer tid å lære seg.

- `nano` er en enkel teksteditor som er lett å bruke. For å redigere filen `moskus.txt`, skriver du `nano moskus.txt`.
- Når du har gjort endringene dine i filen, trykker du `Ctrl + O` for å lagre og `Ctrl + X` for å avslutte.

> **Editorkrigen:**
> Det har vært en langvarig debatt om hvilken teksteditor som er best. `vim` og `emacs` har begge sine tilhengere, og det er ikke uvanlig å høre folk krangle om hvilken som er best. Som nybegynner, anbefaler vi at du starter med `nano` og heller prøver deg på `vim` og `emacs` senere. Det kan kanskje være lurt å holde seg unna krangler om teksteditorer i starten.

## Vise innholdet i filer
Det finnes flere måter å vise innholdet i en fil på. Vi kan bruke kommandoene `cat`, `less` og `more`.

- `cat` viser hele filen på en gang. For å vise innholdet i filen `moskus.txt`, skriver du `cat moskus.txt`.
- `less` og `more` viser filen side for side. For å vise innholdet i filen `moskus.txt` med `less`, skriver du `less moskus.txt`. Forskjellen mellom de to er at `less` er mer interaktivt enn `more`.

### Oppgave
1. Lag en ny fil som du kaller `moskusinfo.txt`.
2. Skriv inn det du vet om moskusokser i filen, og lagre den.
3. Bruk `cat` til å vise innholdet i filen.
4. Bruk `less` til å vise innholdet i filen side for side.

## Søke i filer
For å søke i filer, kan vi bruke kommandoen `grep`. `grep` søker etter et mønster i en fil og viser linjene som inneholder mønsteret.

- For å søke etter ordet `moskus` i filen `moskusinfo.txt`, skriver du `grep moskus moskusinfo.txt`.

### Oppgave
1. Lag en ny fil som du kaller `moskuswiki.txt`.
2. Kopier inn all teksten om moskusokser fra Wikipedia-siden [Moskusfe](https://no.wikipedia.org/wiki/Moskusfe) i filen. Lagre og avslutt nano.
3. Bruk `grep` til å søke etter ordet `Dovre` i filen.


## Oppsummering
I dette kapittelet har vi sett på hvordan vi kan redigere tekstfiler, vise innholdet i filer og søke i filer. Vi har brukt kommandoene `nano`, `cat`, `less`, `more` og `grep`. Disse kommandoene er nyttige når du jobber med tekstfiler i terminalen.

I neste kapittel skal vi se nærmere på filsystemet og mappestrukturen i Linux.







