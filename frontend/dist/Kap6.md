# Kapittel 6: Webserveren nginx

I dette kapittelet skal vi se på hvordan du kan sette opp en webserver med programvaren nginx. Nginx er en populær webserver som er kjent for å være rask og effektiv. Vi skal se på hvordan du kan installere nginx og konfigurere den til å vise nettsider. 


## Installasjon

For å installere nginx, kan du bruke pakkebehandleren `apt`. Skriv følgende kommando i terminalen:

```bash
sudo apt install nginx
```

Når installasjonen er ferdig, kan du sjekke om nginx kjører ved å skrive følgende kommando:

```bash
systemctl status nginx
```

Hvis du ser at nginx kjører, kan du åpne en nettleser og skrive `localhost` i adressefeltet. Da skal du se en velkomstside fra nginx.

Dersom nginx ikke kjører, kan du starte den ved å skrive følgende kommando:

```bash
sudo systemctl start nginx
```

### Oppgave
1) Installer nginx på din egen maskin.
2) Sjekk om nginx kjører, både med systemctl og i nettleseren.

## Konfigurasjon

Nginx konfigureres ved hjelp av filer som ligger i mappen `/etc/nginx`. Den viktigste konfigurasjonsfilen er `nginx.conf`. I tillegg til denne filen, kan det være flere andre konfigurasjonsfiler som definerer hvordan nettsider skal vises.

Dersom vi viser nginx.conf vil vi se noe interessant på den første linjen:

```bash
user www-data;
```

Dette sier oss at nginx kjører som brukeren `www-data`. Dette er en standard bruker som brukes av mange webservere for å kjøre nettsider. Denne brukeren ble opprettet når vi installerte nginx, og den har begrensede rettigheter på systemet. Det den har lov til å gjøre er å lese filer fra nettsiden og vise dem i nettleseren, men det kan den ikke gjøre om den ikke har rettighetene til å lese filene.

>Hint: Du kan bruke kommandoen `ls -l` for å se hvilke rettigheter en fil har. For å vise rettighetene til en mappe, kan du bruke `ls -ld` og skrive mappenavnet etterpå.

I tillegg til nginx.conf, er ligger de viktigste konfigurasjonsfilene i mappen `/etc/nginx/sites-enabled`. Her finner du filer som definerer hvordan nettsider skal vises. En typisk konfigurasjonsfil for en nettside ser ut som noe som dette:

```bash
server {
    listen 80;
    server_name localhost;
    root /var/www/html;
    index index.html;
}
```

Denne konfigurasjonsfilen sier at nettsiden skal lytte på port 80, og at rotmappen til nettsiden er `/var/www/html`. Dette betyr at alle filene som skal vises på nettsiden, må ligge i denne mappen. I tillegg sier filen at indexfilen til nettsiden er `index.html`, så når du skriver `localhost` i adressefeltet, vil denne filen vises.

### Oppgave
1) Gå til mappen `/etc/nginx/sites-enabled` og se på konfigurasjonsfilene som ligger der.
2) Finn ut hvor filen som vises når du skriver `localhost` i adressefeltet ligger.
3) Naviger til denne mappen (`/var/www/html`) og se på innholdet.
4) Rediger indexfilen og endre noe av teksten. Merk at du må bruke sudo for å redigere filen.
5) Gå inn på localhost (eller oppdater i nettleseren) og se om endringene vises.

## Konfigurere din egen webside

Nå som du har sett hvordan en konfigurasjonsfil for en nettside ser ut, kan du prøve å lage din egen nettside. Her er en enkel konfigurasjonsfil du kan bruke:

```bash
server {
    listen 80;
    server_name localhost;
    root /home/brukernavn/www;    
    index index.html;
}
```

Denne konfigurasjonsfilen sier at nettsiden skal lytte på port 80, og at rotmappen til nettsiden er `/home/brukernavn/www`. Dette betyr at alle filene som skal vises på nettsiden, må ligge i denne mappen. I tillegg sier filen at indexfilen til nettsiden er `index.html`, så når du skriver `localhost` i adressefeltet, vil denne filen vises.

### Oppgave
1) Gå til mappen `/etc/nginx/sites-available` og lag en ny konfigurasjonsfil med innholdet over. Kall filen for minside.
2) Skriv følgende kommando for å aktivere konfigurasjonsfilen:

```bash
sudo ln -s /etc/nginx/sites-available/minside /etc/nginx/sites-enabled/minside
```

3) Lag en ny mappe i hjemmemappen din med navnet `www`.
4) Lag en ny fil i mappen `www` med navnet `index.html`.
5) Skriv noe tekst i filen og lagre den.
6) Gå til `localhost` i nettleseren og se om nettsiden vises.
7) Siden vises ikke fordi det allerede er en konfigurasjonsfil som definerer `localhost`. Slett denne filen ved å skrive følgende kommando:

```bash
sudo rm /etc/nginx/sites-enabled/default
```

8) Gå til `localhost` i nettleseren og se om nettsiden vises.
9) Hvis nettsiden vises, har du satt opp din egen nettside med nginx.
10) Hvis nettsiden ikke vises, har ikke www-data rettigheter til å lese filene. Gi www-data rettigheter til å lese filene, slik du lærte om i forrige kapittel.
11) Det kan også være at du må restarte nginx for at endringene skal tre i kraft. Dette kan du gjøre ved å skrive følgende kommando:

```bash
sudo systemctl restart nginx
```
12) Sjekk om det virker nå.
13) Hvis det fortsatt ikke virker, kan det være at det er en feil i konfigurasjonsfilen. Sjekk loggene til nginx for å finne ut hva som er feil. Loggene ligger i mappen `/var/log/nginx`.


# Oppsummering
I dette kapittelet har vi sett på hvordan du kan sette opp en webserver med programvaren nginx. Vi har sett på hvordan du kan installere nginx og konfigurere den til å vise nettsider. Vi har også sett på hvordan du kan endre konfigurasjonsfilene til nginx for å vise din egen nettside. Nå har du en grunnleggende forståelse av hvordan en webserver fungerer og hvordan du kan sette opp din egen nettside.


