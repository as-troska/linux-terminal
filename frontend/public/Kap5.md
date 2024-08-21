# Kapittel 5 - Brukere og rettigheter

I Linux er det viktig å forstå hvordan brukere og rettigheter fungerer. Dette er fordi Linux er et flerbrukersystem, og det er viktig å kunne kontrollere hvem som har tilgang til hva. I dette kapittelet skal vi se på hvordan vi kan opprette og slette brukere, og hvordan vi kan gi brukere rettigheter til å utføre ulike oppgaver. Vi skal også se på hvordan vi kan endre rettighetene til filer og mapper.

## Brukere

I Linux er det to typer brukere: vanlige brukere og superbrukere. En vanlig bruker er en bruker som har begrenset tilgang til systemet, mens en superbruker er en bruker som har full tilgang til systemet. Superbrukeren kalles også for root-brukeren. Brukeren du har på din virtuelle maskin er en vanlig bruker, og du har derfor ikke tilgang til å utføre administrative oppgaver. For å utføre administrative oppgaver, har du så langt brukt kommandoen `sudo`. Dette er en forkortelse for "superuser do", og den lar deg utføre kommandoer som root-brukeren.

### Opprette en bruker

For å opprette en ny bruker, kan du bruke kommandoen `adduser`. For å opprette en bruker med navnet `brukernavn`, skriver du følgende kommando:

```bash
sudo adduser brukernavn
```

Du vil nå bli bedt om å skrive inn et passord for den nye brukeren. Når du har skrevet inn passordet, vil brukeren bli opprettet. Du kan nå logge inn som den nye brukeren ved å skrive `su brukernavn` i terminalen.

>Hint: Hvis du vil bytte til root-brukeren, kan du skrive sudo su i terminalen. Altså uten brukernavn etter su.

### Slette en bruker

For å slette en bruker, kan du bruke kommandoen `deluser`. For å slette en bruker med navnet `brukernavn`, skriver du følgende kommando:

```bash
sudo deluser brukernavn
```

Du vil nå bli bedt om å bekrefte at du vil slette brukeren. Når du har bekreftet, vil brukeren bli slettet. Merk at når du sletter brukeren vil også hjemmemappen til brukeren bli slettet.

## Oppgave
1) Opprett en ny bruker med navnet `testbruker`.
2) Logg inn som `testbruker`.
3) Gå til hjemmemappen til `testbruker` og opprett en ny fil med navnet `testfil.txt`.
4) Logg ut av `testbruker` og logg inn som din egen bruker.

>Hint: for å logge ut av en bruker, kan du skrive exit i terminalen.

>Hint: for å gå til hjemmemappen til en bruker, kan du skrive cd ~brukernavn i terminalen, eller bare cd ~ for å gå til den innloggede brukerens hjemmemappe.

## Rettigheter

I Linux har hver fil og mappe en eier og en gruppe. Eieren er brukeren som har opprettet filen eller mappen, mens gruppen er en samling av brukere som har tilgang til filen eller mappen. I tillegg har hver fil og mappe tre typer rettigheter: leserettigheter, skrivrettigheter og kjøringsrettigheter. Disse rettighetene bestemmer hvilke operasjoner som kan utføres på filen eller mappen.

### Endre rettigheter

For å endre rettighetene til en fil eller mappe, kan du bruke kommandoen `chmod`. For å endre rettighetene til en fil eller mappe med navnet `filnavn`, skriver du følgende kommando:

```bash
chmod +rwx filnavn
```

Denne kommandoen gir leserettigheter, skrivrettigheter og kjøringsrettigheter til eieren av filen eller mappen. Hvis du vil fjerne en rettighet, kan du bruke `-` i stedet for `+`. For eksempel:

```bash
chmod -r filnavn
```

Denne kommandoen fjerner leserettigheter fra eieren av filen eller mappen. `r` står for leserettigheter, `w` står for skrivrettigheter og `x` står for kjøringsrettigheter. 

## Oppgave
1) Opprett filen `helloworld.sh` i hjemmemappen din.
2) Prøv å kjøre filen ved å skrive `./helloworld.sh` i terminalen. Hva skjer?
3) Endre innholdet i filen til `echo "Hello, World!"`.
4) Gi deg selv leserettigheter, skrivrettigheter og kjøringsrettigheter til filen.
5) Kjør filen ved å skrive `./helloworld.sh` i terminalen.


### Endre eier og gruppe

For å endre eieren og gruppen til en fil eller mappe, kan du bruke kommandoen `chown`. For å endre eieren av en fil eller mappe med navnet `filnavn` til brukeren `brukernavn`, skriver du følgende kommando:

```bash
chown brukernavn filnavn
```

For å endre gruppen til en fil eller mappe med navnet `filnavn` til gruppen `gruppenavn`, skriver du følgende kommando:

```bash
chgrp gruppenavn filnavn
```

For å lage en ny gruppe, kan du bruke kommandoen `addgroup`. For å lage en ny gruppe med navnet `gruppenavn`, skriver du følgende kommando:

```bash
sudo addgroup gruppenavn
```

For å legge til en bruker i en gruppe, kan du bruke kommandoen `usermod`. For å legge til brukeren `brukernavn` i gruppen `gruppenavn`, skriver du følgende kommando:

```bash
sudo usermod -aG gruppenavn brukernavn
```

>Hint: Vi har nevnt grupper, men kommer ikke til å gå veldig i detalj på det her. Det det viktigste dette ofte brukes til er å ha en gruppe for alle brukere som har tilgang til å bruke sudo-kommandoen. Dette er for å ha bedre kontroll over hvem som har tilgang til å utføre administrative oppgaver.

## Oppgave
1) Opprett en ny gruppe med navnet `testgruppe`.
2) Opprett en ny bruker med navnet `testbruker2` og legg den til i gruppen `testgruppe`.
3) Opprett en ny fil med navnet `testfil2.txt` og gi gruppen `testgruppe` leserettigheter til filen.
4) Logg inn som `testbruker2` og prøv å lese filen `testfil2.txt`.
5) Logg ut av `testbruker2` og logg inn som din egen bruker.
6) Endre eieren av filen `testfil2.txt` til `testbruker2`.
7) Prøv å lese filen `testfil2.txt` igjen.
8) Logg inn som `testbruker2` og prøv å lese filen `testfil2.txt` igjen.
9) Legg til leserettigheter for gruppen `testgruppe` til filen `testfil2.txt`.
10) Legg til din egen bruken i gruppen `testgruppe`.
11) Skift tilbake til din egen bruker
12) Prøv å lese filen `testfil2.txt` igjen.


## Oppsummering

Brukere og grupper er et kraftig verktøy i Linux. Ved å forstå hvordan brukere og rettigheter fungerer, kan du kontrollere hvem som har tilgang til hva på systemet ditt. I dette kapittelet har vi sett hvordan du kan opprette og slette brukere, endre rettigheter til filer og mapper, og endre eieren og gruppen til filer og mapper. Dette er grunnleggende ferdigheter som er viktige å kunne for å kunne administrere et Linux-system.


