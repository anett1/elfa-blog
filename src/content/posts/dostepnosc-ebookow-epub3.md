---
title: 'Dostępność e-booków (EPUB) – co oznacza w praktyce i kiedy jest wymagana?'
description: 'Dostępność e-booków EPUB 3 – wymagania WCAG, walidacja EpubCheck, metadane schema:accessibility, epub:type i ARIA. Sprawdź, kiedy dostępność jest obowiązkowa i co naprawdę trzeba wdrożyć.'
pubDate: '2026-02-22'
---


Dostępność to sposób przygotowania e-booka tak, aby mogły z niego korzystać również osoby z niepełnosprawnościami — w szczególności osoby niewidome, słabowidzące, z trudnościami poznawczymi oraz osoby korzystające z czytników ekranu.

W przypadku formatu EPUB dostępność nie jest dodatkiem technicznym, lecz elementem poprawnej budowy pliku. Obejmuje strukturę HTML, metadane, semantykę oraz sposób, w jaki treść reaguje na potrzeby użytkownika.

Standardy dostępności są rozwijane przez W3C (World Wide Web Consortium), które odpowiada m.in. za wytyczne WCAG oraz specyfikację EPUB 3. W Europie istotnym momentem było przyjęcie European Accessibility Act (Europejskiego Aktu o Dostępności), który rozszerzył wymagania dostępności na wybrane produkty i usługi cyfrowe, w tym e-booki sprzedawane konsumentom. Pełne stosowanie tych regulacji obowiązuje od 2025 roku.

Dostępność e-booków nie wynika więc wyłącznie z „mody technologicznej”, lecz z realnej potrzeby zapewnienia równego dostępu do treści oraz z regulacji prawnych obowiązujących na rynku europejskim.

---

## Poziomy dostępności: A, AA, AAA w kontekście e-booków

Wytyczne WCAG określają trzy poziomy zgodności: A, AA i AAA.

**Poziom A** oznacza spełnienie podstawowych wymagań umożliwiających odbiór treści.  
W kontekście EPUB obejmuje to m.in.:

- poprawną strukturę dokumentu w HTML,
- logiczne oznaczenie nagłówków, list i akapitów,
- możliwość odczytu treści przez technologie wspomagające,
- brak elementów uniemożliwiających korzystanie (np. migotania).

**Poziom AA** to poziom najczęściej wymagany w praktyce.  
Oznacza m.in.:

- prawidłową hierarchię nagłówków (`<h1>–<h6>`),
- logiczną kolejność czytania w kodzie,
- teksty alternatywne dla grafik niosących informację,
- odpowiedni kontrast treści,
- możliwość zmiany rozmiaru tekstu bez utraty czytelności.

**Poziom AAA** to najwyższy poziom zgodności, obejmujący dodatkowe wymagania i ułatwienia. Rzadko jest wymagany w całości, ale bywa stosowany w publikacjach specjalistycznych lub edukacyjnych.

W praktyce profesjonalnie przygotowany e-book powinien spełniać przynajmniej wymagania poziomu A lub AA.

---

## Struktura HTML – fundament dostępnego EPUB

Dostępność EPUB zaczyna się od poprawnej struktury dokumentu.

Nagłówki muszą być rzeczywistymi nagłówkami HTML:

```html
<h1>Rozdział 1</h1>
<h2>Podrozdział</h2>
```

a nie jedynie powiększonym tekstem. To znaczniki `<h1>–<h6>` tworzą logiczną hierarchię dokumentu i umożliwiają prawidłową nawigację.

Spis treści powinien być zdefiniowany w pliku `nav.xhtml`:

```html
<nav epub:type="toc">
```

Spis treści musi odzwierciedlać rzeczywistą strukturę książki i prowadzić do właściwych fragmentów.

Każda grafika niosąca treść powinna mieć tekst alternatywny — czyli krótki opis tego, co znajduje się na obrazie:

```html
<img src="mapa.jpg" alt="Mapa Polski z zaznaczonymi trasami podróży bohatera">
```

Jeżeli grafika jest wyłącznie dekoracyjna, powinna być oznaczona w sposób, który nie zakłóca odczytu treści przez czytnik ekranu.

Deklaracja języka publikacji jest obowiązkowa:

```html
<html lang="pl">
```

Ma to bezpośredni wpływ na prawidłowe działanie syntezatorów mowy.

---

## Metadane bibliograficzne – element zgodności technicznej

Plik EPUB musi zawierać komplet podstawowych metadanych w pliku `content.opf`, takich jak:

- `dc:title` – tytuł,
- `dc:creator` – autor,
- `dc:language` – język,
- `dc:date` – data wydania,
- `dc:publisher` – wydawca,
- `dc:description` – opis.

Poprawne metadane są niezbędne przy walidacji pliku, dystrybucji oraz indeksowaniu publikacji w systemach sprzedażowych i bibliotekach cyfrowych.

---

## Metadane dostępności – schema:accessibility

Coraz większe znaczenie mają również metadane dostępności oparte na Schema.org.

Przykład:

```xml
<meta property="schema:accessMode">textual</meta>
<meta property="schema:accessibilityFeature">tableOfContents</meta>
<meta property="schema:accessibilityFeature">readingOrder</meta>
<meta property="schema:accessibilityFeature">alternativeText</meta>
<meta property="schema:accessibilityHazard">none</meta>
```

- `accessMode` określa sposób odbioru treści (np. tekstowo),
- `accessibilityFeature` wskazuje funkcje dostępności obecne w publikacji,
- `accessibilityHazard` informuje o braku elementów potencjalnie niebezpiecznych,
- `accessibilitySummary` może zawierać opis poziomu dostępności.

Metadane te nie „tworzą” dostępności same w sobie, ale dokumentują jej poziom i bywają wymagane przez niektóre platformy sprzedażowe podczas procesu walidacji.

---

## Czym są `epub:type` i ARIA role i czy są obowiązkowe w kontekście dostępności?

W kontekście dostępności EPUB często pojawiają się dwa atrybuty: `epub:type` oraz ARIA role (w publikacjach rozwinięte jako DPUB-ARIA). Oba służą do doprecyzowania znaczenia elementów w strukturze książki cyfrowej, jednak nie pełnią tej samej funkcji.

Najpierw najważniejsze: ani `epub:type`, ani ARIA role nie są globalnie obowiązkowe, aby plik był poprawnym EPUB 3, przeszedł walidację EpubCheck, spełniał poziom WCAG A lub AA czy został uznany za technicznie dostępny w rozumieniu specyfikacji. EPUB może zostać uznany za dostępny, jeśli ma poprawną strukturę HTML, logiczną hierarchię nagłówków, teksty alternatywne, deklarację języka, właściwe metadane oraz zachowaną kolejność czytania — nawet bez dodatkowych atrybutów semantycznych.

To oznacza, że nie są one warunkiem minimalnym dostępności. Są natomiast warstwą rozszerzającą — wzmacniają semantykę publikacji i podnoszą jej poziom techniczny.

### `epub:type` – doprecyzowanie struktury książki

`epub:type` to atrybut specyficzny dla formatu EPUB. Służy do określenia funkcji danego fragmentu w strukturze publikacji — na przykład, że dana sekcja jest rozdziałem, wstępem, przypisami czy aneksem.

Przykład:

```html
<section epub:type="chapter">
```

Znaczniki takie jak `<h1>`, `<p>`, `<ol>` mają już wbudowaną semantykę w HTML i nie wymagają dodatkowego oznaczenia. `epub:type` jest szczególnie przydatny przy elementach ogólnych, takich jak `<section>` czy `<div>`, gdy chcemy wskazać ich rolę w kontekście całej książki.

Atrybut ten nie zmienia wyglądu treści. Informuje system, czym dany fragment jest w strukturze publikacji. Może być wykorzystywany przez aplikacje czytające EPUB do lepszego rozumienia budowy dokumentu (np. rozdziałów, przypisów, bibliografii).

### ARIA role – wsparcie dla technologii wspomagających

ARIA (Accessible Rich Internet Applications), w wersji dla publikacji cyfrowych rozwinięta jako DPUB-ARIA, to zestaw ról umożliwiających technologiom wspomagającym — zwłaszcza czytnikom ekranu — dokładniejsze zrozumienie funkcji danego elementu.

Przykład:

```html
<section role="doc-chapter">
```

Role ARIA są interpretowane bezpośrednio przez technologie asystujące. Informują czytnik ekranu, że dany fragment to rozdział, przypis, spis treści, dedykacja czy aneks. W przeciwieństwie do `epub:type`, który opisuje strukturę publikacji jako książki, ARIA role mają bezpośredni wpływ na sposób, w jaki treść jest odczytywana użytkownikowi.

W wielu przypadkach natywna semantyka HTML jest wystarczająca i nie wymaga dodatkowych ról. ARIA stosuje się wtedy, gdy chcemy doprecyzować znaczenie elementu, którego HTML sam w sobie nie opisuje jednoznacznie.

---

Podsumowując: brak `epub:type` i ARIA role nie powoduje automatycznie, że EPUB jest niedostępny. Jednak ich świadome zastosowanie wzmacnia semantykę dokumentu, poprawia interpretację struktury przez systemy oraz zwiększa komfort korzystania z publikacji przez osoby używające technologii wspomagających. W projektach edukacyjnych, naukowych i instytucjonalnych są coraz częściej traktowane jako element dobrej praktyki.

---

## Dla kogo dostępność EPUB ma znaczenie?

Dla autora selfpublishingowego oznacza większą pewność, że plik przejdzie walidację i zostanie zaakceptowany przez platformy sprzedażowe.

Dla wydawnictwa to element profesjonalnego przygotowania publikacji cyfrowej.

Dla instytucji i edukacji dostępność bywa wymogiem formalnym.

Przede wszystkim jednak chodzi o to, aby z e-booka mogły korzystać również osoby z niepełnosprawnościami — bez barier strukturalnych i technologicznych.

---

## Podsumowanie


Aby e-book EPUB mógł zostać uznany za technicznie dostępny i przejść walidację, konieczne jest przede wszystkim:

- poprawna, semantyczna struktura HTML (nagłówki `<h1>–<h6>`, listy, akapity),
- logiczna kolejność czytania treści,
- działający dokument nawigacyjny (`nav.xhtml`),
- teksty alternatywne dla grafik niosących informację,
- deklaracja języka publikacji,
- komplet podstawowych metadanych (`dc:title`, `dc:creator`, `dc:language` itd.),
- brak błędów strukturalnych wykrywanych przez narzędzia walidacyjne (np. EpubCheck),
- spełnienie wymagań WCAG na poziomie A lub AA (w zależności od kontekstu projektu).

To są elementy realnie decydujące o tym, czy plik może zostać uznany za dostępny w sensie technicznym i formalnym.

Zastosowanie dodatkowej semantyki w postaci `epub:type` oraz ARIA role nie jest warunkiem minimalnym dostępności. Są to rozwiązania zalecane, które wzmacniają strukturę dokumentu, poprawiają interpretację treści przez technologie wspomagające oraz podnoszą profesjonalny poziom publikacji — szczególnie w projektach edukacyjnych, naukowych i instytucjonalnych.

Dostępność EPUB 3 to dziś nie tylko kwestia zgodności z wytycznymi, ale również odpowiedzialnego projektowania treści cyfrowych tak, aby mogły z nich korzystać wszystkie grupy odbiorców.

**[Elfa Publikacje](https://elfapublikacje.com/)**