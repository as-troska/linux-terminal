# Kapittel 3: Filsystemet

I dette kapittelet skal vi se på hvordan filsystemet i Linux er bygget opp. Vi skal se på hvordan filer og mapper er organisert, og hvordan vi kan navigere i filsystemet. Vi har foreløpig holdt oss i hjemmemappen vår, men linux-filsystemet er mye større enn som så. La oss se på hvordan det er bygget opp.

## Filsystemet i Linux
Roten i filsystemet i Linux er mappen `/`. Denne mappen inneholder alt annet i filsystemet. Under roten finner vi flere mapper og filer. Noen av de viktigste mappene er:

- `/bin`: Inneholder kjørbare filer som er nødvendige for å starte systemet.
- `/boot`: Inneholder filer som er nødvendige for oppstart av systemet.
- `/etc`: Inneholder konfigurasjonsfiler for systemet.
- `/home`: Inneholder hjemmemappene til brukerne.
- `/lib`: Inneholder biblioteker som er nødvendige for kjøring av programmer.
- `/media`: Inneholder monteringspunkter for flyttbare medier som USB-minnepinner og CD-er.
- `/mnt`: Inneholder midlertidige monteringspunkter.
- `/opt`: Inneholder ekstra programvare som ikke er en del av standardinstallasjonen.
- `/root`: Hjemmemappen til superbrukeren `root`.
- `/sbin`: Inneholder kjørbare filer som er nødvendige for å starte systemet.
- `/tmp`: Inneholder midlertidige filer.
- `/usr`: Inneholder programfiler og biblioteker.
- `/var`: Inneholder variabel data som loggfiler og e-post.

> **Variasjoner:**
> - Det finnes flere varianter av Linux-filsystemet. Denne oversikten er basert på filsystemet som brukes i Ubuntu. Andre distribusjoner kan ha en litt annen oppbygning. Felles for de fleste er likevel at de har en rotmappe `/` og en hjemmemappe `/home`.

## Navigere i filsystemet
Som vi så i kapittel 1, bruker vi kommandoene `ls`, `cd` og `pwd` for å navigere i filsystemet. Vi kan bruke disse kommandoene til å navigere i hele filsystemet, ikke bare i hjemmemappen vår. For å gå til rotmappen, skriver vi `cd /`. For å gå tilbake til hjemmemappen. Vi kan også bruke kommandoen `cd ..` for å gå opp en mappe, men denne vil ikke gjøre noe om du alt står i rotmappen. Skal vi gå fra hjemmemappen til rotmappen, kan vi enten skrive `cd /`, eller `cd ..` to ganger.

### Oppgave
1. Naviger til rotmappen.
2. Bruk `ls` til å se innholdet i rotmappen.
3. Naviger tilbake til hjemmemappen din.

## Var-mappen
Det er ikke nødvendigvis så mye spennende å se for en vanlig bruker i rotmappen. La oss se på en annen mappe: `/var`. Denne mappen inneholder variabel data som loggfiler og e-post. Filene med mest innhold i denne mappen er ofte loggfiler. Den fullstendige banen til loggfiler for systemet er `/var/log`.

### Oppgave
1. Naviger til mappen `/var`.
2. Bruk `ls` til å se innholdet i mappen.
3. Naviger til mappen som har loggfilene til systemet.
4. Bruk kommandoene fra kapittel 2 til å vise innholdet i noen av loggfilene.

## sudo-kommandoen
Noen ganger trenger vi å kjøre kommandoer som superbruker. Når du sjekket innholdet i loggmappen i forrige oppgave, fikk du f.eks kanskje opp meldingen "Permission denied" på noen av filene. For å kjøre en kommando som superbruker, skriver vi `sudo` foran kommandoen. Vi kan for eksempel skrive `sudo cat btmp` for å vise innholdet i loggfilen `btmp`, selv om vi ikke har tilgang til den som vanlig bruker.

### Oppgave
1. Bruk `sudo` til å vise innholdet i loggfilen `boot.log`.

> **Hint:** Du kan bruke piltastene til å bla i tidligere kommandoer. Husk at du kan bruke tabulatortasten for å autfullføre filnavn.

> **Obs:** Vær forsiktig med `sudo`-kommandoen. Som superbruker har du tilgang til alt på systemet, og kan gjøre store skader om du ikke er forsiktig. Selv om du kan bruke den til å f.eks vise innholdet i loggfiler, er det lurt å tenke seg om to ganger før du bruker den til andre ting, særlig om du ikke vet hva kommandoen du kjører gjør.

## Oppsummering
I dette kapittelet har vi sett på hvordan filsystemet i Linux er bygget opp. Vi har sett på noen av de viktigste mappene i filsystemet, og hvordan vi kan navigere i filsystemet. Vi har også sett på hvordan vi kan bruke `sudo`-kommandoen for å kjøre kommandoer som superbruker.

I neste leksjon ser vi på hvordan vi kan installere og fjerne programvare i Linux.
