# 📌 Rättningsrapport – fed24s-the-last-todo-AmandaBalk

## 🎯 Uppgiftens Krav:
# Inlämningsuppgift Todo

I denna inlämningsuppgift kommer ni att skapa er egen todo-lista i en react-applikation.
Sidan skall visa ett antal punkter som skall göras. Dessa skall då komma upp på skärmen i form av en lista. När uppgiften är slutförd skall användaren kunna markera uppgiften som slutförd och uppgiften skall då tas bort från listan.

## Betyg G

- Skapa en hårdkodad lista med punkter att göra (hitta på egna punkter, dessa skall inte bara vara en text)
- Presentera listan på skärmen, helst med lite kontroll. Detta betyder i en html-struktur t.ex. i en ul/li-lista
- Implementera klickhändelse för att hantera borttagandet av en todo.
- Todo markeras som klar/tas bort från skärmen och markeras som klar i javascript-listan.

## Betyg VG

- Alla punkter under G
- Kunna visa även klara händelser och klicka tillbaka den så att de blir oklara igen.
- Skapa ett formulär som tillåter att en användare skapar nya todos efterhand.
- Använda lifting state up för att dela upp dina komponenter bättre.
- Kunna sortera ordningen på dina todos.
- Implementera ett valfritt grafiskt ramverk till din todolista, t.ex. material ui eller tailwind.
- Egen css får gärna skrivas och då skall ni ha en bra struktur och använda flex eller grid på ett bra sätt.

## Allmänt

Projektet ni har är ett vite-projekt. D.v.s. ni måste köra:

```shell
npm i
```

och

```shell
npm run dev 
```

för att köra projektet.

- Det finns många sätt att lösa denna uppgift på. Om ni känner er osäkra på någonting, fråga hellre någon gång för mycket så att ni känner er säkra på vad ni utvecklar.
- Ni får gärna ändra strukturen i projektet, detta är bara en grund.
- Börja med att planera ert arbete, börja inte med Visual Studio Code, även om det är lockande.
- Gör ert bästa att inte stressa. Lättare sagt än gjort, jag vet. Men ingen mår bättre av att stressa.
- Ha roligt, skratta när det blir fel och fortsätt att vara nyfiken :)


## 🔍 ESLint-varningar:
- C:\Work\AssignmentCorrector\backend\repos\fed24s-the-last-todo-AmandaBalk\src\models\createTodo.ts - no-unused-vars - 'todo' is defined but never used.,no-unused-vars - 'done' is defined but never used.

## 🏆 **Betyg: VG**
📌 **Motivering:** Koden uppfyller alla krav för både G och VG. Applikationen implementerar en hårdkodad todo-lista och presenterar den med HTML-struktur. Användaren kan lägga till och ta bort tasks, markera dem som klara och oklara igen. Dessutom används lifting state up, och applikationen har ett sorteringssystem samt ett formulär för att lägga till nya todos tillsammans med användande av tailwindcss.

💡 **Förbättringsförslag:**  
Det finns några saker som kan förbättras: 
- Bättre hantering av unika id:n när nya todos skapas för att undvika potentiella konflikter. 
- Förbättra felhantering och validering när uppgifter läggs till, t.ex. kontroll för dubbletter. 
- Använd mer tillgänglighetsfrämjande attribut och funktioner, till exempel användning av <label> taggar för <input>-fältet. 
- Integrera ännu tydligare och användarvänlig feedback för användarna när de interagerar med gränssnittet. 
Att fixa ovanstående skulle göra applikationen mer robust och användarvänlig.