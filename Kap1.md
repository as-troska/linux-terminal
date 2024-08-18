# Kurs i Linux-terminalen  - Kapittel 1: Grunnleggende filbehandling

Linux-terminalen kan brukes til mye. I disse første øvelsene, skal vi bruke den til å utforske filsystemet og utføre enkle oppgaver. 

## Navigere i filsystemet

For å navigere i filsystemet, bruker vi kommandoene `ls`, `cd` og `pwd`. 

`ls` viser innholdet i mappen du er i. 
`cd` tar deg til en annen mappe. 
`pwd` viser hvor i filsystemet du er. 

For å navigere i filsystemet, bruker vi disse kommandoene sammen med filnavn og stier. 

### Oppgave

1. Åpne terminalen. 
2. Bruk `ls` til å se innholdet i mappen du er i. 
3. Bruk `cd` til å gå til en annen mappe. 
4. Bruk `pwd` til å se hvor du er. 
5. Gå tilbake til mappen du startet i. 


## Lage filer

Som du kanskje merket, var det ikke så mye spennende i mappen du startet i. La oss lage en fil.

`touch` lager en ny fil. For å lage filen moskus.txt, skriver du `touch moskus.txt`.

### Oppgave

1. Lag en ny fil som du kaller `minfil.txt`.
2. Bruk `ls` til å se at filen ble laget. 

> **Litt om filnavn:**
> - Filnavn kan være på opptil 255 tegn.
> - Filnavn kan inneholde bokstaver, tall, punktum og bindestrek.
> - Filnavn er case-sensitivt. Det betyr at `moskus.txt` og `Moskus.txt` er to forskjellige filer.
> - Filnavn kan ikke inneholde spesialtegn som `?`, `*`, `!`, `&`, `#`, `@`, `~`, `|`, `>`, `<`, `"`, `/` og mellomrom.
> - Filnavn kan ikke starte med punktum.
> - Enda en gang: Filnavn er case-sensitivt og **kan ikke innholde mellomrom!**


## Slette filer
Når vi først har laget en fil, kan vi like gjerne slette den også. For å slette filer bruker vi kommandoen `rm`. For å slette filen `moskus.txt`, skriver du `rm moskus.txt`.

### Oppgave
1. Lag enda en fil: `minfil2.txt`.
2. Slett filen `minfil.txt` med `rm`.

## Lage mapper
Vi kan også lage mapper. For å lage en mappe, bruker vi kommandoen `mkdir`. For å lage mappen `bilder`, skriver du `mkdir bilder`.

### Oppgave
1. Lag en mappe som du kaller `bilder`.
2. Bruk `ls` til å se at mappen ble laget.
3. Naviger til mappen `bilder`.
4. Lag filen `slapp_moskus.jpg`.
5. Gå tilbake til mappen du startet i.

> **Hint:**
> - For å navigere til mappen `bilder`, skriver du `cd bilder`.
> - For å gå tilbake til forrige mappe, skriver du `cd ..`

## Flytte filer
Vi kan også flytte filer. For å flytte en fil fra en mappe til en annen, bruker vi kommandoen `mv`. For å flytte filen `moskus.txt` til mappen `bilder`, skriver du `mv moskus.txt bilder`.

### Oppgave
1. Lag en ny fil som du kaller `glad_moskus.jpg`.
2. Flytt filen `glad_moskus.jpg` til mappen `bilder`.
3. Naviger til mappen `bilder` og bruk `ls` for å se at filen ble flyttet.
4. Gå tilbake til mappen du startet i.

> **Litt om stier:**
> - En relativ sti starter fra der du er i filsystemet. Hvis du er i hjemmemappen din `/home/brukernavn`, er stien til mappen `bilder` bare `bilder`.
> - En absolutt sti starter fra rotmappen. Den absolutte stien til mappen `bilder` er `/home/brukernavn/bilder`, og kan brukes uansett hvor du er i filsystemet.
> 

## Kopiere filer
Vi kan også kopiere filer. For å kopiere en fil, bruker vi kommandoen `cp`. For å kopiere filen `moskus.txt` til filen `moskus2.txt`, skriver du `cp moskus.txt moskus2.txt`.

### Oppgave
1. Kopier filen `glad_moskus.jpg` til filen `glad_moskus2.jpg`.
2. Bruk `ls` for å se at filen ble kopiert.

>**Hint:** 
> Dersom du står i mappen `bilder`, kan du kopiere filen `glad_moskus.jpg` til filen `glad_moskus2.jpg` ved å skrive `cp glad_moskus.jpg glad_moskus2.jpg`. Dersom du står i en annen mappe, må du skrive hele stien til filene. Merk at du kan bruke tabulatortasten for å autfullføre filnavn og stier.

## Slette mapper
For å slette mapper, bruker vi kommandoen `rmdir`. For å slette mappen `bilder`, skriver du `rmdir bilder`. Der er en liten hake med `rmdir`, og det er at mappen må være tom for at den skal kunne slettes. Hvis mappen ikke er tom, må du bruke `rm -r` for å slette mappen og alt innholdet i den. Merk at `rm -r` sletter alt uten å spørre om bekreftelse, så vær forsiktig med denne kommandoen. 

### Oppgave
1. Slett mappen `bilder` med `rmdir`.
2. Lag mappen `bilder` på nytt.
3. Naviger til bilder og sjekk at mappen nå er tom.


## Oppsummering
I denne øvelsen har vi lært å navigere i filsystemet, lage filer og mapper, slette filer og mapper, flytte filer og kopiere filer. Dette er grunnleggende ferdigheter som er nyttige å kunne når du jobber i terminalen.

Neste del av kurset handler om å jobbe med tekstfiler. 






