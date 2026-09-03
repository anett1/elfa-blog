---
title: 'Kulisy pracy nad ebookiem. Jak powstaje responsywny i dostępny EPUB?'
pubDate: '2026-09-03'
description: 'Co dzieje się pod powierzchnią ebooka EPUB? Zobacz, jak struktura książki, semantyczny XHTML, dostępność i CSS tworzą responsywną publikację.'
tags: ['EPUB', 'ebook', 'self-publishing', 'dostępność', 'XHTML', 'CSS']
slug: 'jak-powstaje-responsywny-dostepny-epub'
cover: '/_assets/responsywny-dostepny-epub.png'
ogImage: '/_assets/responsywny-dostepny-epub.png'

# Open Graph (Facebook, LinkedIn)
ogTitle: 'Jak powstaje responsywny i dostępny EPUB?'
ogDescription: 'Dobry EPUB to więcej niż ładnie sformatowany tekst. Zobacz, jak struktura książki, semantyka, dostępność i CSS współpracują przy tworzeniu ebooka.'
ogType: 'article'
---
![_ebook-readers](./_assets/responsywny-dostepny-epub.png)

# Kulisy pracy nad ebookiem. Jak powstaje responsywny i dostępny EPUB?

Kiedy autor otrzymuje gotowy ebook, widzi przede wszystkim efekt końcowy: tekst, nagłówki, cytaty, przypisy, ilustracje czy spis treści. Ocenia, czy książkę dobrze się czyta, czy wygląda estetycznie i czy poprawnie otwiera się na czytniku. Pod powierzchnią EPUB-a znajduje się jednak coś, czego czytelnik zazwyczaj nie widzi — **logiczna struktura publikacji oraz informacje opisujące znaczenie jej poszczególnych elementów**.

I właśnie od nich, a nie od wyglądu, warto zaczynać pracę nad responsywnym ebookiem. To jedna z najważniejszych różnic pomiędzy projektowaniem książki drukowanej a przygotowaniem publikacji EPUB.

***

## EPUB nie jest cyfrową kopią strony książki

W książce drukowanej projektujemy konkretną stronę. Możemy dokładnie ustalić, gdzie rozpocznie się rozdział, jak szeroki będzie łam, ile miejsca znajdzie się nad tytułem i gdzie zakończy się tekst. W responsywnym EPUB-ie wygląda to inaczej. Czytelnik może otworzyć tę samą książkę na dużym czytniku, niewielkim telefonie albo tablecie. Może zwiększyć wielkość tekstu, zmienić krój pisma, interlinię, marginesy czy orientację urządzenia. Treść musi się do tych warunków dopasować.

Dlatego EPUB reflowable nie posiada jednego, niezmiennego układu stron. Ilość tekstu widoczna na ekranie zależy od urządzenia, ustawień aplikacji i preferencji użytkownika. To wymaga nieco innego sposobu myślenia o projektowaniu publikacji. Zamiast zaczynać od pytania: **„Gdzie ten element ma się znaleźć i jak ma wyglądać?”**, warto najpierw zapytać: **„Czym właściwie jest ten element i jakie miejsce zajmuje w strukturze książki?”**

***

## Najpierw trzeba zobaczyć strukturę całej książki

Książka nie jest jednym długim blokiem tekstu. Może zawierać stronę tytułową, stronę redakcyjną, dedykację, motto, części, rozdziały, podrozdziały, przypisy, bibliografię, ilustracje czy informacje o autorze. Każdy z tych elementów pełni określoną funkcję.

W książce drukowanej wiele z tych funkcji rozpoznajemy przede wszystkim dzięki projektowi graficznemu. Nowa część może rozpoczynać się na osobnej stronie, tytuł rozdziału jest większy, cytat ma inne wcięcie, a przypis znajduje się u dołu strony. W EPUB-ie wygląd nadal jest ważny, ale nie powinien być jedyną informacją opisującą organizację książki. **Struktura publikacji powinna być zapisana również w jej wnętrzu.**

Dlatego jednym z pierwszych etapów pracy nad EPUB-em jest analiza całej publikacji. Trzeba określić, z jakich elementów składa się książka, jaka jest ich hierarchia i jakie relacje zachodzą pomiędzy nimi. Dopiero później tę logiczną strukturę można przełożyć na dokumenty XHTML tworzące treść ebooka.

Ma to szczególne znaczenie podczas przygotowywania EPUB-a na podstawie książki drukowanej lub pliku PDF. Publikacji reflowable nie dzielimy na kolejne pliki tylko dlatego, że w wersji drukowanej istniały kolejne strony. **Podział EPUB-a powinien wynikać przede wszystkim z logicznej struktury książki, a nie z jej dawnej paginacji.**

***

## Kolejne pytanie: czym jest ta treść?

Kiedy znamy już strukturę całej publikacji, możemy zejść poziom niżej i przyjrzeć się jej poszczególnym elementom. Załóżmy, że pracujemy nad jednym rozdziałem. Znajdują się w nim tytuł, zwykłe akapity, cytat, lista, śródtytuł, podpis ilustracji czy przypis.

Dla człowieka rozpoznanie tych elementów jest zazwyczaj proste, ponieważ widzimy ich wygląd. Tytuł może być większy i pogrubiony, cytat zapisany kursywą, lista poprzedzona punktami, a podpis ilustracji złożony mniejszym tekstem. Podczas budowania EPUB-a warto jednak na chwilę zapomnieć o wyglądzie i zadać bardziej podstawowe pytanie:

**Czym jest ta treść?**

Czy jest cytatem, nagłówkiem, listą, podpisem ilustracji, dygresją, rozdziałem, przypisem? Odpowiedź pozwala dobrać właściwą strukturę HTML, która opisuje znaczenie treści, a nie tylko sposób jej prezentacji.

***

## HTML opisuje znaczenie, a nie tylko wygląd

Treść responsywnego EPUB-a znajduje się przede wszystkim w dokumentach XHTML. To właśnie w nich zapisane są rozdziały, nagłówki, akapity, cytaty, listy, przypisy, ilustracje i inne elementy książki. I tutaj pojawia się pojęcie **semantyki HTML**. Brzmi technicznie, ale sama idea jest bardzo prosta: odpowiedni element HTML powinien informować, czym dana treść jest.

W praktyce oznacza to, że poszczególne rodzaje treści otrzymują znaczniki odpowiadające ich funkcji. Zwykły akapit zapisujemy za pomocą `<p>`, nagłówki za pomocą `<h1>`, `<h2>`, `<h3>` itd., listę nieuporządkowaną tworzymy przy użyciu `<ul>` i `<li>`, a dłuższy cytat wyodrębniony z głównego tekstu możemy oznaczyć jako `<blockquote>`.

Na przykład prosty fragment książki może wyglądać tak:

```html
<h1>Tytuł rozdziału</h1>

<p>To jest zwykły akapit tekstu.</p>

<blockquote>
  <p>To jest cytat wyodrębniony z głównego tekstu.</p>
</blockquote>

<ul>
  <li>Pierwszy element listy</li>
  <li>Drugi element listy</li>
</ul>
```

Znaczniki te nie mówią przede wszystkim, **jak treść ma wyglądać**. Informują, **czym ona jest**. `<p>` oznacza akapit, `<h1>` nagłówek określonego poziomu, `<blockquote>` cytat blokowy, `<ul>` listę nieuporządkowaną, a `<li>` jej pojedynczy element. Dopiero później za pomocą CSS możemy zdecydować, jak każdy z tych elementów będzie prezentowany na ekranie.

To ważne, ponieważ dwie rzeczy mogą wyglądać identycznie, a jednocześnie mieć zupełnie inne znaczenie w kodzie. Możemy na przykład za pomocą CSS sprawić, że tekst umieszczony w zwykłym `<div>` będzie duży, pogrubiony i wizualnie będzie przypominał tytuł rozdziału. Możemy również użyć właściwego elementu `<h1>` i nadać mu dokładnie taki sam wygląd. Dla czytelnika patrzącego na ekran rezultat może być podobny, ale w strukturze dokumentu różnica jest zasadnicza: `<h1>` przekazuje informację, że zawarta w nim treść jest nagłówkiem, natomiast sam `<div>` takiej informacji nie przekazuje.

To właśnie dlatego prawidłowy EPUB nie powinien powstawać wyłącznie przez odtwarzanie wyglądu książki. **Najpierw opisujemy znaczenie i strukturę treści, a dopiero później zajmujemy się jej prezentacją.**

***

## Książka ma również własną semantykę

Wymienione wcześniej znaczniki HTML mają już własną semantykę. `<p>` informuje, że dany fragment jest akapitem, `<h1>` — nagłówkiem, `<blockquote>` — cytatem blokowym, a `<ul>` — listą. Sam wybór właściwego elementu HTML przekazuje więc informację o znaczeniu treści.

Nie w każdym przypadku HTML potrafi jednak opisać element książki równie precyzyjnie. Dobrym przykładem jest `<section>`. Jest to semantyczny element HTML oznaczający sekcję dokumentu, ale sam w sobie nie informuje, **jaką funkcję ta sekcja pełni w publikacji**. Może przecież reprezentować rozdział, część książki, prolog, epilog albo inny fragment publikacji.

Jeżeli więc użyjemy:

```html
<section>
  <h1>Tytuł rozdziału</h1>
  <p>Treść rozdziału...</p>
</section>
```

HTML przekazuje informację, że mamy do czynienia z sekcją zawierającą nagłówek i treść. Nie określa jednak wprost, że ta sekcja jest **rozdziałem książki**.

W takich sytuacjach EPUB pozwala dodać kolejną, bardziej szczegółową warstwę informacji za pomocą atrybutu `epub:type`:

```html
<section epub:type="chapter">
  <h1>Tytuł rozdziału</h1>
  <p>Treść rozdziału...</p>
</section>
```

`epub:type="chapter"` doprecyzowuje tutaj funkcję elementu: informuje, że ta sekcja pełni w publikacji rolę rozdziału. W podobny sposób możemy opisywać inne elementy charakterystyczne dla książek, na przykład część (`part`), prolog (`prologue`), epilog (`epilogue`) czy dedykację (`dedication`).

Podobna sytuacja może wystąpić przy elemencie, który ma już bardzo konkretne znaczenie w HTML. `<blockquote>` sam informuje, że zawiera cytat blokowy:

```html
<blockquote>
  <p>Treść cytatu...</p>
</blockquote>
```

Jeżeli jednak ten cytat pełni w książce szczególną funkcję — na przykład jest epigrafem umieszczonym przed rozdziałem — możemy tę informację doprecyzować:

```html
<blockquote epub:type="epigraph">
  <p>Treść epigrafu...</p>
</blockquote>
```

W tym przypadku `<blockquote>` odpowiada na pytanie **„czym jest ta treść?”** — jest cytatem. `epub:type="epigraph"` dodaje natomiast informację **„jaką funkcję ten cytat pełni w publikacji?”** — jest epigrafem.

Nie oznacza to, że `epub:type` należy dodawać do każdego elementu. Najpierw wykorzystujemy semantykę, którą daje nam HTML, a dodatkową semantykę EPUB stosujemy wtedy, gdy rzeczywiście chcemy doprecyzować funkcję elementu charakterystyczną dla struktury publikacji.

***

## A gdzie w tym wszystkim jest dostępność?

Prawidłowa struktura ma znaczenie nie tylko dla porządku w kodzie. Z ebooka mogą korzystać również osoby posługujące się technologiami asystującymi, na przykład czytnikiem ekranu. Czytelnik widzący może rozpoznać tytuł rozdziału na podstawie wyglądu: jest większy, znajduje się nad tekstem, ma większy odstęp i inną typografię. Technologia wspomagająca nie powinna jednak być zmuszona do odgadywania jego funkcji na podstawie wyglądu zdefiniowanego w CSS.

Informacja **„to jest nagłówek”** powinna wynikać z samej struktury dokumentu. Dlatego zamiast zwykłego kontenera wystylizowanego tak, aby wyglądał jak nagłówek, stosujemy właściwy element, np. `<h1>`. Semantyczny HTML jest więc jednym z fundamentów dostępności i bardzo często już sam przekazuje technologiom asystującym potrzebne informacje.

W niektórych sytuacjach strukturę można uzupełnić o informacje ARIA. Jednym z mechanizmów jest atrybut `role`, który określa rolę elementu z punktu widzenia dostępności. Na przykład sekcję będącą rozdziałem możemy oznaczyć tak:

```html
<section epub:type="chapter" role="doc-chapter">
  <h1>Tytuł rozdziału</h1>
  <p>Treść rozdziału...</p>
</section>
```

W tym przykładzie poszczególne warstwy pełnią różne funkcje. `<section>` tworzy sekcję dokumentu, `epub:type="chapter"` określa jej funkcję publikacyjną jako rozdział, natomiast `role="doc-chapter"` opisuje tę rolę w warstwie dostępności. Sam nagłówek `<h1>` ma już własną semantykę HTML — nie trzeba dodawać do niego `role="heading"` tylko po to, aby ponownie powiedzieć, że jest nagłówkiem.

To ważne, ponieważ **więcej kodu nie zawsze oznacza lepszą dostępność**. ARIA nie powinna zastępować prawidłowego HTML ani być dodawana mechanicznie do każdego elementu. Jeżeli HTML przekazuje potrzebne znaczenie, często nie trzeba robić nic więcej. Dodatkowe role stosujemy wtedy, gdy rzeczywiście wnoszą informację potrzebną technologiom asystującym.

Kolejność myślenia można więc uprościć do: **prawidłowy HTML → dodatkowa semantyka EPUB, jeżeli jest potrzebna → ARIA lub inne informacje związane z dostępnością, jeżeli są potrzebne.**

***

## CSS pojawia się dopiero później

Kiedy znamy już strukturę publikacji i prawidłowo opisaliśmy znaczenie jej elementów, możemy przejść do wyglądu. Tutaj swoją rolę zaczyna pełnić CSS. To za jego pomocą określamy prezentację ebooka: typografię, odstępy, wcięcia, marginesy, wyrównanie czy sposób wyświetlania poszczególnych elementów.

Najprościej można tę zależność opisać tak:

**HTML odpowiada na pytanie: „Co to jest?”**

**CSS odpowiada na pytanie: „Jak to wygląda?”**

Możemy później całkowicie zmienić wygląd tytułu rozdziału — zmniejszyć go, wyrównać do lewej zamiast do środka albo zastosować inny krój pisma. Nadal pozostaje on nagłówkiem. Zmieniła się prezentacja, ale nie zmieniło się znaczenie. To rozdzielenie struktury od wyglądu jest jednym z fundamentów pracy nad publikacją responsywną.

***

## Workflow pracy nad treścią EPUB-a

Cały proces można przedstawić jako prostą ścieżkę:

```text
TREŚĆ
   ↓
struktura książki
   ↓
Czym jest dany element?
   ↓
struktura HTML
   ↓
semantyka EPUB
   ↓
dostępność
   ↓
CSS — wygląd
   ↓
walidacja i testowanie
```

Taki schemat dobrze pokazuje, dlaczego przygotowanie EPUB-a nie powinno sprowadzać się do automatycznej konwersji dokumentu i sprawdzenia, czy książka dobrze wygląda na jednym czytniku. Pod powierzchnią publikacji istnieje kilka warstw, które muszą ze sobą współpracować.

***

## Prosty przykład: cytat

Załóżmy, że w książce pojawia się dłuższy cytat wyodrębniony z głównego tekstu. Można byłoby rozpocząć pracę od pytania: „Jak zrobić go kursywą i zwiększyć margines?”. To jednak pytanie o wygląd.

Lepszym punktem wyjścia jest pytanie: **„Czym jest ten fragment?”** Jeżeli odpowiedź brzmi: „dłuższym cytatem wyodrębnionym z tekstu”, możemy poszukać elementu HTML, który właśnie takie znaczenie reprezentuje. W tym przypadku będzie to `<blockquote>`:

```html
<blockquote>
  <p>Treść cytatu.</p>
</blockquote>
```

Dopiero później za pomocą CSS możemy zdecydować, jak cytat będzie prezentowany: czy otrzyma większe marginesy, kursywę, inną wielkość tekstu albo dodatkowy odstęp od głównej treści. Najpierw opisaliśmy więc **znaczenie**, a dopiero później zajęliśmy się **wyglądem**.

***

## Prosty test: wyłączmy CSS

Jest jeszcze jeden ciekawy sposób na sprawdzenie, czy struktura dokumentu została dobrze zbudowana. Wyobraźmy sobie, że z ebooka usuwamy cały CSS. Znikają krój pisma, wielkości tekstu, kolory, marginesy, wcięcia, wyśrodkowanie i ozdobniki. Pozostaje sama struktura HTML.

Jeżeli nadal jesteśmy w stanie rozpoznać, co jest nagłówkiem, co akapitem, listą, cytatem, sekcją, ilustracją czy podpisem, oznacza to, że znaczenie treści zostało w dużej mierze zapisane tam, gdzie powinno.

Nie oznacza to oczywiście, że wygląd ebooka nie jest ważny. Typografia, rytm tekstu, odstępy i sposób prezentacji poszczególnych elementów wpływają na komfort czytania. Różnica polega na tym, że **warstwa wizualna jest nakładana na wcześniej zbudowaną strukturę, a nie ją zastępuje**.

***

## Walidacja to jeszcze nie koniec

Na końcu pozostaje sprawdzenie publikacji. EPUB powinien przejść walidację techniczną, ale sam brak błędów walidatora nie oznacza jeszcze, że praca została zakończona. Trzeba również sprawdzić, jak książka zachowuje się w praktyce.

Różne czytniki i aplikacje mogą nieco inaczej interpretować niektóre elementy EPUB-a. Dlatego zgodność ze standardem i rzeczywiste zachowanie publikacji w konkretnym systemie odczytu nie zawsze są dokładnie tym samym. Profesjonalna praca nad EPUB-em łączy więc **prawidłową strukturę, zgodność ze standardem, walidację oraz praktyczne testowanie**.

***

## Dobry EPUB to więcej niż ładny ebook

Czytelnik prawdopodobnie nigdy nie zobaczy większości pracy wykonanej wewnątrz pliku EPUB — i tak właśnie powinno być. Powinien po prostu otworzyć książkę, ustawić wygodną wielkość tekstu i rozpocząć czytanie. Osoba korzystająca z technologii asystujących powinna móc poruszać się po logicznie zbudowanej publikacji, a książka powinna zachowywać się poprawnie na różnych urządzeniach i w różnych aplikacjach.

Za tym pozornie prostym efektem stoi jednak znacznie więcej niż samo formatowanie tekstu: **analiza struktury całej książki, semantycznie zbudowany XHTML, dodatkowa semantyka publikacyjna tam, gdzie jest potrzebna, uwzględnienie dostępności, CSS oraz późniejsza walidacja i testowanie**.

Dlatego jedną z najważniejszych zasad przy tworzeniu responsywnego EPUB-a można sprowadzić do jednego zdania:

> **Najpierw opisujemy, czym treść jest. Dopiero później określamy, jak ma wyglądać.**

To właśnie od tej kolejności zaczyna się dobrze zbudowany, responsywny i dostępny ebook.