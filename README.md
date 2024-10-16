# event-planning-api

### Vad vi behöver skapa:

**Autentisering**

    Hantera registrering, inloggning och autentisering för att säkerställa att användare kan skapa och delta i event.
    Endpoints:
     "POST /auth/register": Registrera användare.
      "POST /auth/login": Logga in och få en JWT-token.
      "GET /auth/me": Hämta information om inloggad användare.
      "PUT /auth/update": Uppdatera användarinformation.

**Eventhantering**

    Skapa, uppdatera, visa och radera event.
    Endpoints:
      "POST /events": Skapa nytt event.
      "GET /events": Lista publika event, med filter för titel, plats, organisatör, datum.
      "GET /events/{event_id}": Visa detaljer om ett specifikt event.
      "PUT /events/{event_id}": Uppdatera ett event (endast organisatören).
      "DELETE /events/{event_id}": Radera ett event (endast organisatören).

**Deltagarhantering**

    Hantera anmälningar, betalningar och godkännande av deltagare.
    Endpoints:
      "POST /events/{event_id}/register": Anmäl en användare till ett event.
      "GET /events/{event_id}/participants": Visa deltagarlistan (endast organisatören).
      "PUT /events/{event_id}/participants/{participant_id}/approve": Godkänn deltagare.
      "PUT /events/{event_id}/participants/{participant_id}/reject": Avslå deltagare.

**Sök och filtrering**

    Sök efter event baserat på plats, organisatör och datum.
    Endpoints:
      "GET /events/search?location=string": Hämta event på en viss plats.
      "GET /organizers/{organizer_id}/events": Hämta alla event från en viss organisatör.

**Organisatörsfunktioner**

    Hantera och uppdatera event och organisatörsinformation.
    Endpoints:
      "GET /organizers/me/events": Visa alla event som den inloggade organisatören har skapat.
      "PUT /organizers/{organizer_id}": Uppdatera organisatörens information.

**Betalningar**

    Hantera betalningar för event.
    Endpoints:
      "POST /payments": Genomför en betalning för en anmälan.
      "GET /payments/{payment_id}": Visa betalningsinformation.

**Notifikationer** (valfritt)
Skicka meddelanden till deltagare om ändringar i event.
Endpoint:
"POST /notifications": Skicka notifikation om eventändringar.

**Event**: Innehåller titel, beskrivning, datum, plats, och deltagargränser.
**Deltagare**: Hanterar relationen mellan användare och event.
**Organisatör**: Skapar och hanterar event.
**Betalningar**: Registrerar transaktioner för betalda event.
