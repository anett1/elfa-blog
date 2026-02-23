---
title: 'Dostępność e-booków (EPUB) – co oznacza w praktyce i kiedy jest wymagana?'
description: 'Dostępność e-booków EPUB 3 – wymagania WCAG, walidacja EpubCheck, metadane schema:accessibility, epub:type i ARIA. Sprawdź, kiedy dostępność jest obowiązkowa i co naprawdę trzeba wdrożyć.'
pubDate: '2026-02-22'
---


**Dostępność to sposób przygotowania e-booka tak, aby mogły z niego korzystać także osoby z niepełnosprawnościami — w szczególności osoby niewidome, słabowidzące, z trudnościami poznawczymi oraz osoby korzystające z czytników ekranu.**

W przypadku formatu EPUB dostępność jest elementem poprawnej konstrukcji pliku. Obejmuje właściwą strukturę HTML, semantykę, metadane oraz sposób, w jaki treść zachowuje się na różnych urządzeniach i przy różnych ustawieniach użytkownika.

Nad standardami dostępności pracuje międzynarodowa organizacja [World Wide Web Consortium (W3C)](https://www.w3.org/). To ona opracowuje wytyczne [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/), specyfikację [EPUB 3](https://www.w3.org/TR/epub-33/) oraz dokument [EPUB Accessibility 1.1](https://www.w3.org/TR/epub-a11y-11/), który precyzuje wymagania dostępności dla publikacji cyfrowych.

W Europie istotną zmianą było przyjęcie [European Accessibility Act](https://eur-lex.europa.eu/eli/dir/2019/882/oj) (Europejskiego Aktu o Dostępności). Akt ten wprowadził obowiązek spełniania określonych wymagań dostępności przez wybrane produkty i usługi cyfrowe — w tym e-booki sprzedawane konsumentom. Przepisy w pełnym zakresie obowiązują od 2025 roku.

Dostępność e-booków to dziś standard odpowiedzialnego projektowania publikacji cyfrowych — zarówno z myślą o użytkownikach, jak i o obowiązujących przepisach.

---

## Poziomy dostępności: A, AA, AAA w kontekście e-booków

Wytyczne WCAG definiują trzy poziomy zgodności: A, AA oraz AAA.  
Każdy kolejny poziom obejmuje wymagania poziomu niższego i rozszerza je o dodatkowe kryteria.

### Poziom A — fundament dostępności

Poziom A oznacza spełnienie podstawowych wymagań, które umożliwiają odbiór treści przez użytkowników korzystających z technologii wspomagających.

W przypadku e-booka w formacie EPUB oznacza to przede wszystkim:

- poprawną, semantyczną strukturę dokumentu (HTML),
- logicznie oznaczone nagłówki, akapity i listy,
- możliwość odczytu treści przez czytniki ekranu,
- brak elementów uniemożliwiających korzystanie z publikacji (np. migających treści).

To absolutne minimum, bez którego publikacja cyfrowa nie powinna być udostępniana.

### Poziom AA — standard rynkowy

Poziom AA obejmuje wszystkie wymagania poziomu A oraz wprowadza dodatkowe kryteria poprawiające komfort korzystania z treści.

W kontekście e-booków oznacza to m.in.:

- zachowanie prawidłowej hierarchii nagłówków (`h1–h6`),
- logiczną kolejność czytania wynikającą z kodu źródłowego,
- teksty alternatywne dla grafik niosących informację,
- odpowiedni kontrast treści,
- możliwość zmiany rozmiaru tekstu bez utraty czytelności i funkcjonalności.

To poziom najczęściej wymagany w praktyce i przyjmowany jako bezpieczny standard przy publikacjach komercyjnych.

### Poziom AAA — poziom rozszerzony

Poziom AAA obejmuje wymagania poziomu A i AA oraz dodatkowe, bardziej restrykcyjne kryteria zwiększające dostępność.

Może dotyczyć m.in.:

- jeszcze wyższych wymagań kontrastu,
- dodatkowych ułatwień językowych,
- bardziej rozbudowanych alternatyw dla treści wizualnych,
- szczegółowych mechanizmów wspierających osoby z trudnościami poznawczymi.

W praktyce rzadko wymaga się spełnienia wszystkich kryteriów AAA w całości. Poziom ten bywa stosowany w publikacjach specjalistycznych, edukacyjnych lub instytucjonalnych.

W przypadku e-booków sprzedawanych komercyjnie profesjonalnie przygotowana publikacja powinna spełniać przynajmniej wymagania poziomu A, a w praktyce — poziomu AA.

---

## Struktura HTML – fundament dostępnego EPUB

Dostępność pliku EPUB zaczyna się od poprawnej struktury dokumentu.  
To kod — a nie wygląd — decyduje o tym, czy publikacja jest czytelna dla technologii wspomagających.

### 1. Semantyczne nagłówki

Nagłówki muszą być rzeczywistymi nagłówkami HTML, a nie jedynie wizualnie powiększonym tekstem.

```html
<h1>Rozdział 1</h1>
<h2>Podrozdział</h2>
<h3>Śródtytuł</h3>
```

To znaczniki `<h1>–<h6>` tworzą logiczną hierarchię dokumentu i umożliwiają prawidłową nawigację.

Hierarchia powinna:

- odzwierciedlać rzeczywistą strukturę treści,
- zachowywać kolejność poziomów (nie rozpoczynamy od `<h3>` ani nie pomijamy poziomów),
- umożliwiać przeskakiwanie między sekcjami w czytnikach ekranu.

Nagłówek zapisany wyłącznie jako powiększony akapit (np. stylowany CSS) nie jest nagłówkiem w rozumieniu dostępności.


### 2. Spis treści (`nav.xhtml`)

Spis treści w EPUB 3 definiowany jest w pliku `nav.xhtml`.

```html
<nav epub:type="toc">
```

Spis treści powinien:

- odzwierciedlać faktyczną strukturę książki,
- prowadzić do właściwych fragmentów dokumentu,
- być spójny z hierarchią nagłówków w plikach XHTML.

Niespójność między nagłówkami a `nav.xhtml` jest jednym z częstszych błędów w e-bookach.


### 3. Teksty alternatywne dla grafik

Każda grafika niosąca treść informacyjną powinna posiadać tekst alternatywny (`alt`).

```html
<img src="mapa.jpg" alt="Mapa Polski z zaznaczonymi trasami podróży bohatera">
```

Opis powinien:

- przekazywać sens obrazu,
- być zwięzły,
- nie powtarzać zbędnych informacji.

Jeżeli grafika ma wyłącznie charakter dekoracyjny, powinna być oznaczona w sposób, który nie zakłóca odczytu przez czytnik ekranu (np. pustym atrybutem `alt=""`).


### 4. Deklaracja języka publikacji

Każdy plik XHTML powinien zawierać deklarację języka. Brak deklaracji języka jest błędem technicznym i wpływa na dostępność publikacji:

```html
<html lang="pl">
```

Ma to bezpośredni wpływ na:

- prawidłową wymowę w syntezatorach mowy,
- poprawne przetwarzanie tekstu przez technologie wspomagające,
- walidację pliku EPUB.

---

## Metadane bibliograficzne – element zgodności technicznej

Plik EPUB musi zawierać komplet podstawowych metadanych w pliku `content.opf`.

Do najważniejszych należą:

- `dc:title` – tytuł publikacji,
- `dc:creator` – autor,
- `dc:language` – język,
- `dc:date` – data wydania,
- `dc:publisher` – wydawca,
- `dc:description` – opis.

Metadane pełnią kilka istotnych funkcji:

- umożliwiają prawidłową walidację pliku,
- są wykorzystywane przez platformy sprzedażowe,
- pozwalają na poprawne indeksowanie w bibliotekach cyfrowych,
- zapewniają zgodność ze standardem EPUB.

Braki lub błędy w metadanych mogą skutkować odrzuceniem publikacji przez platformy dystrybucyjne.

---

## Metadane dostępności – schema:accessibility

Coraz większe znaczenie w kontekście dostępności EPUB mają metadane oparte na standardzie [Schema.org](https://schema.org/).

### Czym jest Schema.org?

Schema.org to wspólny standard opisu danych opracowany przez największe organizacje technologiczne.  
W kontekście e-booków umożliwia on ujednolicony sposób deklarowania informacji o dostępności publikacji.

W EPUB 3 metadane dostępności zapisuje się w pliku `content.opf`, w sekcji `<metadata>`.

Przykład:

```xml
<meta property="schema:accessMode">textual</meta>
<meta property="schema:accessibilityFeature">tableOfContents</meta>
<meta property="schema:accessibilityFeature">readingOrder</meta>
<meta property="schema:accessibilityFeature">alternativeText</meta>
<meta property="schema:accessibilityHazard">none</meta>
```

### Co oznaczają poszczególne elementy?

- `schema:accessMode` – określa sposób odbioru treści (np. tekstowy, wizualny, dźwiękowy).
- `schema:accessibilityFeature` – wskazuje funkcje dostępności obecne w publikacji (np. spis treści, logiczną kolejność czytania, teksty alternatywne).
- `schema:accessibilityHazard` – informuje o potencjalnych zagrożeniach (np. migotaniu); wartość `none` oznacza ich brak.
- `schema:accessibilitySummary` – opcjonalny opis poziomu dostępności i zastosowanych rozwiązań.

### Dlaczego te metadane są istotne?

Metadane Schema.org nie „tworzą” dostępności same w sobie.  
Nie zastąpią poprawnej struktury HTML ani tekstów alternatywnych.

Pełnią jednak ważną funkcję dokumentacyjną:

- opisują poziom dostępności publikacji,
- umożliwiają automatyczną walidację,
- są wykorzystywane przez platformy sprzedażowe,
- mogą być wymagane w procesie publikacji.

W praktyce niektóre platformy dystrybucyjne, w kontekście regulacji dostępności (np. European Accessibility Act), wymagają obecności tych metadanych przed dopuszczeniem pliku do sprzedaży.

---

## epub type i ARIA role – czym są i czy są obowiązkowe?

W kontekście dostępności EPUB często pojawiają się dwa pojęcia: `epub:type` oraz role ARIA (w publikacjach cyfrowych rozwinięte jako DPUB-ARIA).

Oba mechanizmy służą do doprecyzowania znaczenia elementów w strukturze książki cyfrowej, jednak nie pełnią tej samej funkcji i nie stanowią warunku minimalnej dostępności.

Do przejścia walidacji EPUB 3 (EpubCheck) nie jest wymagane stosowanie ani `epub:type`, ani ról ARIA. Ich brak nie uniemożliwia również spełnienia poziomu WCAG A lub AA.

`epub:type` i role ARIA należy traktować jako warstwę rozszerzającą. Wzmacniają semantykę publikacji i podnoszą jej poziom techniczny, ale nie zastępują fundamentów dostępności.


### epub type – semantyka struktury książki

`epub:type` to atrybut specyficzny dla formatu EPUB.  
Służy do określenia funkcji danego fragmentu w strukturze publikacji — na przykład, że dana sekcja jest rozdziałem, wstępem, przypisami czy aneksem.

Przykład:

```html
<section epub:type="chapter">
```

Wiele znaczników HTML, takich jak `<h1>`, `<p>` czy `<ol>`, posiada już własną, wbudowaną semantykę i nie wymaga dodatkowego oznaczania.  
`epub:type` jest szczególnie przydatny przy elementach ogólnych, takich jak `<section>` czy `<div>`, gdy chcemy jednoznacznie wskazać ich rolę w kontekście całej książki.

Atrybut ten:

- nie zmienia wyglądu treści,
- nie wpływa bezpośrednio na sposób odczytu przez czytnik ekranu,
- opisuje strukturę publikacji jako książki.

Może być wykorzystywany przez aplikacje czytające EPUB do lepszego rozumienia budowy dokumentu (np. identyfikowania rozdziałów, przypisów czy bibliografii).


### ARIA role (DPUB-ARIA) – wsparcie dla technologii wspomagających

ARIA (Accessible Rich Internet Applications), w wersji rozszerzonej dla publikacji cyfrowych jako DPUB-ARIA, to zestaw ról umożliwiających technologiom wspomagającym dokładniejsze zrozumienie funkcji danego elementu.

Przykład:

```html
<section role="doc-chapter">
```

Role ARIA są interpretowane bezpośrednio przez technologie asystujące, zwłaszcza czytniki ekranu.  
Informują system, że dany fragment pełni określoną funkcję — np. rozdziału, przypisu, spisu treści, dedykacji czy aneksu.

W przeciwieństwie do `epub:type`, który opisuje strukturę publikacji jako książki, role ARIA mają bezpośredni wpływ na sposób, w jaki treść jest interpretowana przez technologie wspomagające.

---

## Dla kogo dostępność EPUB ma znaczenie?

Dla autora selfpublishingowego oznacza większą pewność, że plik przejdzie walidację i zostanie zaakceptowany przez platformy sprzedażowe.

Dla wydawnictwa to element profesjonalnego przygotowania publikacji cyfrowej.

Dla instytucji i edukacji dostępność bywa wymogiem formalnym.

Przede wszystkim jednak chodzi o to, aby z e-booka mogły korzystać również osoby z niepełnosprawnościami — bez barier strukturalnych i technologicznych.

---

## Podsumowanie

Aby EPUB mógł zostać uznany za technicznie dostępny i przejść walidację, powinien posiadać poprawną strukturę HTML, logiczną hierarchię nagłówków, zachowaną kolejność czytania, działający dokument nawigacyjny (`nav.xhtml`), teksty alternatywne dla grafik, deklarację języka oraz komplet podstawowych metadanych w pliku `content.opf`. Konieczny jest również brak błędów strukturalnych wykrywanych przez narzędzia walidacyjne (np. EpubCheck) oraz zgodność z WCAG na poziomie A lub AA — w zależności od kontekstu projektu.

Dodatkowa semantyka w postaci `epub:type` i ról ARIA może uporządkować strukturę publikacji, zwiększyć precyzję opisu jej części oraz ułatwić interpretację treści przez technologie wspomagające, szczególnie w publikacjach edukacyjnych i instytucjonalnych.

Dostępność EPUB 3 to dziś nie tylko zgodność ze specyfikacją, ale świadome projektowanie treści cyfrowych tak, aby były realnie dostępne dla wszystkich odbiorców.


Sprawdź ofertę **[Elfa Publikacje](https://elfapublikacje.com/)**