const CONTENT = {

    conversations: {
    "mainMenu": {
        "keywords": [],
        message: "Jestem asystentką kursu i mogę odpowiadać na Twoje pytania. Wybierz temat, który Cię interesuje lub wpisz swoje pytanie poniżej.",
        buttons: [
            {
                id: "materials",
                label: "🧶 Materiały"
            },
            {
                id: "techniques",
                label: "🪡 Techniki"
            },
            {
                id: "lessons",
                label: "📚 Lekcje"
            },
            {
                id: "customQuestion",
                label: "❓ Inne pytanie"
            }
        ]
    },
    "materials": {
        "keywords": [
            "materiały",
            "lista materiałów",
            "czego potrzebuję",
            "co przygotować",
            "akcesoria",
            "wyposażenie"
        ],
        message: "Ok, już wyciągam dla Ciebie pełną listę materiałów. 😊\n\nW tym wzorze Kaja korzysta z:\nwłóczki Drops Muskat (3 kolory)\nszydełka 5 mm\nznacznika oczek\nigły do wełny\nTo wszystko, czego potrzebujesz, żeby wykonać bucket hat.\n\n🧶 Kilka słów o włóczce\nDrops Muskat to 100% egipskiej merceryzowanej bawełny z pięknym połyskiem. W motku 50 g znajduje się 100 m włóczki. Przy kombinacji 3 kolorów Kaja zużyła po niecałym motku z każdego koloru.\n\n💡 Zwróć uwagę!\nKaja korzysta z szydełka większego niż sugerowane na metce. Dzięki temu kapelusz jest bardziej miękki i lekko rozciągliwy.\n\nPotrzebujesz więcej informacji o materiałach?",
        buttons: [
            {
                id: "altYarns",
                label: "🧶 Alternatywne włóczki"
            },
            {
                id: "hookSize",
                label: "🪡 Jak dobrać szydełko?"
            },
            {
                id: "yarnThickness",
                label: "🧵 Inna grubość włóczki"
            }
        ]
    },
    "techniques": {
        "keywords": [
            "techniki",
            "podstawy",
            "ściegi",
            "nauczyć się",
            "umiejętności",
            "jakie oczka"
        ],
        message: "Ok, już wszystko tłumaczę! 😊 Kapelusz zbudowany jest na bazie klasycznego babcinego kwadratu (granny square). Do przygotowania kapelusza potrzebujesz 5 jednakowych kwadratów i jednego pięciokąta. Rant kapelusza składa się z półsłupków. Jeżeli opanowałaś już półsłupki, słupki, oczka łańcuszka i magiczne kółko (opcjonalnie), powinnaś poradzić sobie z tym wzorem. \n\n🎥 Zajrzyj do lekcji wideo: KWADRAT oraz PIĘCIOKĄT - pamiętaj też, że możesz zmniejszyć prędkość odtwarzania w razie potrzeby (w prawym dolnym rogu okna wideo kliknij 3 kropki, wybierz \"Playback speed\" i zmień na 0.75 lub 0.5).\n\nW poradniku z wzorem znajdziesz także opis wykonania krok po kroku oraz schematy.\n\nCzy ta odpowiedź Ci pomogła?",
        buttons: [
            {
                id: "endConversation",
                label: "✅ Tak, to wszystko"
            },
            {
                id: "moreQuestions",
                label: "💬 Jeszcze mam pytania"
            },
            {
                id: "contactKaja",
                label: "❌ Mam inny problem"
            }
        ]
    },
    "lessons": {
        "keywords": [
            "lekcje",
            "wideo",
            "film",
            "tutorial",
            "nagrania",
            "moduły"
        ],
        message: "📚 Która lekcja sprawia Ci problem?",
        buttons: [
            {
                id: "square",
                label: "Kwadrat"
            },
            {
                id: "pentagon",
                label: "Pięciokąt"
            },
            {
                id: "joining",
                label: "Łączenie elementów"
            },
            {
                id: "brim",
                label: "Rant"
            },
            {
                id: "finishing",
                label: "Wszywanie końców"
            }
        ]
    },
    "customQuestion": {
        "keywords": [
            "kontakt",
            "pomoc",
            "zapytanie",
            "inne pytanie"
        ],
        message: "Rozumiem! Napisz, o co chcesz zapytać, a ja spróbuję znaleźć dla Ciebie odpowiedź.",
        buttons: []
    },
    "altYarns": {
        "keywords": [
            "zamiennik",
            "alternatywna włóczka",
            "inna włóczka",
            "czym zastąpić",
            "bawełna",
            "wiskoza",
            "bambus"
        ],
        message: "☀️ Jeśli planujesz nosić swój bucket hat latem, postaw przede wszystkim na włóczki z naturalnych włókien. Najlepiej sprawdzi się 100% bawełna albo mieszanki z lnem lub bambusem.\n\nDlaczego właśnie one? Są przewiewne, dobrze odprowadzają wilgoć i nie grzeją tak jak włóczki z dodatkiem akrylu czy wełny. Co więcej, bawełna jest dość sztywna, dzięki czemu kapelusz lepiej trzyma swój kształt i rondo nie opada po kilku założeniach.\n\nJeśli sięgasz włoczkę inną niż Drops Muskat, przy wyborze koniecznie spójrz na kategorię wagową - czyli ile metrów włóczki znajduje się w 50 g (lub 100 g, bo rozmiary są różne) motka. Drops Muskat ma 100 m w 50 g - sięgnij po włóczkę podobnej grubości jeśli nie chcesz wprowadzać żadnych modyfikacji do wzoru. \n\nKilka alternatyw:\n- Stenli Botanical (50% bawełna, 50% bambus),\n- Fibra Natura Monza (80% bambus, 20% extra fine merino),\n- Mondial Cotone Melange (100% bawełna egipska),\n- Rico Design Luxury Cotton Silk Cashmere (75% organiczna bawełna, 15% jedwab, 10% kaszmir).",
        buttons: [
            {
                id: "endConversation",
                label: "✅ Tak, to wszystko"
            },
            {
                id: "moreQuestions",
                label: "💬 Jeszcze mam pytania"
            },
            {
                id: "contactKaja",
                label: "❌ Mam inny problem"
            }
        ]
    },
    "hookSize": {
        "keywords": [
            "rozmiar szydełka",
            "jakie szydełko",
            "dobrać szydełko",
            "numer szydełka",
            "większe szydełko",
            "mniejsze szydełko"
        ],
        message: "Na etykiecie włóczki zwykle znajdziesz informację o sugerowanym rozmiarze szydełka. 🧶 To dobry punkt wyjścia, ale w przypadku tego projektu, Kaja poleca sięgnąć po szydełko o około 1 mm większe.\n\nDlaczego? Większe szydełko sprawia, że robótka staje się bardziej miękka, delikatnie rozciągliwa i lepiej się układa. Dzięki temu gotowe projekty są przyjemniejsze w noszeniu, a szydełkowanie często okazuje się łatwiejsze, zwłaszcza jeśli masz tendencję do ścisłego przerabiania oczek.\n\n💡 Pamiętaj jednak, że każdy szydełkuje z innym napięciem włóczki. Jeśli robótka wydaje się zbyt luźna lub zbyt zbita, nie bój się sięgnąć po szydełko o rozmiar mniejsze lub większe. Najlepszy rozmiar to taki, przy którym pracuje Ci się wygodnie, a efekt odpowiada temu, który chcesz uzyskać.\n\nUwaga! Jeśli sięgasz po inną grubość włóczki niż sugerowana w tym wzorze, pamiętaj, że będziesz musiała trochę dostosować swoją robótkę. Czy chcesz poznać szczegóły dotyczące pracy z inną grubością włóczki?",
        buttons: [
            {
                id: "yes",
                label: "Tak"
            },
            {
                id: "no",
                label: "Nie"
            }
        ]
    },
    "yarnThickness": {
        "keywords": [
            "cienka włóczka",
            "gruba włóczka",
            "grubość włóczki",
            "metraż",
            "100 m",
            "50 g",
            "inna grubość",
            "grubsza",
            "cieńsza",
            "próbka"
        ],
        message: "Ten wzór został przygotowany dla włóczki Drops Muskat (100 m / 50 g). Jeśli wybierzesz inną włóczkę, bez problemu możesz z niej skorzystać – pamiętaj tylko o dwóch rzeczach:\n\n🪡 Dobierz odpowiednie szydełko.\nNa początek wybierz szydełko o 1 mm większe niż rozmiar sugerowany na etykiecie włóczki. Dzięki temu robótka będzie miękka i przyjemnie się ułoży.\n\n🧶 Wykonaj próbny kwadrat.\nLiczba rzędów może się różnić w zależności od grubości włóczki, dlatego najpierw wykonaj jeden kwadrat. Po każdym ukończonym rzędzie zmierz długość jego boku. Gdy osiągnie 10–10,5 cm, oznacza to, że masz właściwy rozmiar – pozostałe kwadraty oraz pięciokąt wykonaj z taką samą liczbą rzędów.\n\nWażne: W tym wzorze ostatni rząd wszystkich kwadratów jest przerabiany dopiero podczas ich łączenia, dlatego nie zamykaj ostatniego rzędu - prościej będzie go spruć i później dokończyć kwadrat podczas łączenia. Pięciokąt powinien mieć tyle samo rzędów co kwadrat, aby wszystkie elementy dobrze do siebie pasowały.",
        buttons: [
            {
                id: "endConversation",
                label: "✅ Tak, to wszystko"
            },
            {
                id: "moreQuestions",
                label: "💬 Jeszcze mam pytania"
            },
            {
                id: "contactKaja",
                label: "❌ Mam inny problem"
            }
        ]
    },
    "endConversation": {
        "keywords": [
            "dziękuję",
            "dzięki",
            "koniec",
            "to wszystko",
            "już wszystko",
            "super"
        ],
        message: "Super! Miłego dziergania! 🧶",
        buttons: []
    },
    "moreQuestions": {
        "keywords": [
            "kolejne pytanie",
            "jeszcze pytanie",
            "coś jeszcze",
            "więcej pytań"
        ],
        message: "Pytaj śmiało! Sprawdzę, czy dam radę Ci pomóc.",
        buttons: []
    },
    "contactKaja": {
        "keywords": [
            "kaja",
            "kontakt",
            "napisz do kai",
            "email",
            "mail",
            "wiadomość",
            "wsparcie"
        ],
        message: "Rozumiem, w nietypowych sprawach najlepiej skontaktować się bezpośrednio z Kają na maila: kaja@milerzeczy.com 📤 Daj znać jeśli mogę Ci jeszcze jakoś pomóc!",
        buttons: []
    },
    "square": {
        "keywords": [
            "kwadrat",
            "granny square",
            "babciny kwadrat",
            "kwadraty",
            "motyw kwadratu",
            "kwadrat babuni"
        ],
        message: "W tym mini kursie korzystamy z wzoru na klasyczny babciny kwadrat. Możesz zmienić wzór i stworzyć np. kapelusz w stokrotki. Najważniejszą kwestią jest finalny rozmiar kwadratu: bok kwadratu ma ok. 10-10,5 cm - dla włóczki Drops Muskat jest to 5 rzędów.\n\nJeśli masz jakieś pytanie dotyczące kwadratów z tego wzoru, wyślij je w wiadomości.",
        buttons: []
    },
    "pentagon": {
        "keywords": [
            "pięciokąt",
            "pentagon",
            "pięć boków"
        ],
        message: "Pięciokąt budujemy bardzo podobnie do kwadratu - w tym odwtarzamy tak samo ułożenie kolorów. Na każdym etapie możesz jednak personalizować wzór, choćby przez zmianę kolorów. Szczegółową instrukcję wykonania pięciokąta znajdziesz w lekcji wideo.\n\nJeśli masz jakieś pytanie, wyślij je w wiadomości.",
        buttons: []
    },
    "joining": {
        "keywords": [
            "łączenie",
            "połączyć",
            "zszywanie",
            "join as you go",
            "łączenie elementów",
            "połączenie kwadratów"
        ],
        message: "W tym wzorze Kaja korzysta z metody łączenia zwanej join-as-you-go. W tej metodzie ostatni rząd wszystkich kwadratów (a tutaj kwadratów + pięciokąta) przerabiamy wspólnie. Dzięki temu po zakończeniu łączenia mamy tylko 2 końcówki włóczki do wszycia. Jeśli nigdy nie korzystałaś z tej metody, zajrzyj do lekcji wideo - na początku ten sposób może wydawać się mało intuicyjny, ale po zrozumieniu podstaw ma szansę zostać Twoją ulubioną metodą łączenia!\n\nJeśli masz jakieś pytanie o łączenie kwadratów, wyślij je w wiadomości.",
        buttons: []
    },
    "brim": {
        "keywords": [
            "rondo",
            "rant",
            "brzeg kapelusza",
            "półsłupki",
            "zakończenie ronda"
        ],
        message: "Rant kapelusza składa się z 9 rzędów półsłupków. Zwróć uwagę na to, gdzie występują powiększenia w poszczególnych rzędach.\n\nJeśli masz jakieś pytanie, wyślij je w wiadomości.",
        buttons: []
    },
    "finishing": {
        "keywords": [
            "wykończenie",
            "nitki",
            "końcówki",
            "schowanie nitek",
            "zakończenie pracy"
        ],
        message: "Wpisz swoje pytanie w wiadomości, a ja przeszukam moją bazę wiedzy.",
        buttons: []
    },
    "yes": {
        "keywords": [],
        message: "🧶 Chcesz użyć innej włóczki?\n\nTen wzór został przygotowany dla włóczki Drops Muskat (100 m / 50 g). Jeśli wybierzesz inną włóczkę, bez problemu możesz z niej skorzystać – pamiętaj tylko o dwóch rzeczach:\n\n1. Dobierz odpowiednie szydełko.\nNa początek wybierz szydełko o 1 mm większe niż rozmiar sugerowany na etykiecie włóczki. Dzięki temu robótka będzie miękka i przyjemnie się ułoży.\n\n2. Wykonaj próbny kwadrat.\nLiczba rzędów może się różnić w zależności od grubości włóczki, dlatego najpierw wykonaj jeden kwadrat. Po każdym ukończonym rzędzie zmierz długość jego boku. Gdy osiągnie 10–10,5 cm, oznacza to, że masz właściwy rozmiar – pozostałe kwadraty oraz pięciokąt wykonaj z taką samą liczbą rzędów.\n\nWażne: W tym wzorze ostatni rząd wszystkich kwadratów jest przerabiany dopiero podczas ich łączenia, dlatego nie zamykaj ostatniego rzędu - prościej będzie go spruć i później dokończyć kwadrat podczas łączenia. Pięciokąt powinien mieć tyle samo rzędów co kwadrat, aby wszystkie elementy dobrze do siebie pasowały.",
        buttons: [
            {
                id: "endConversation",
                label: "✅ Tak, to wszystko"
            },
            {
                id: "moreQuestions",
                label: "💬 Jeszcze mam pytania"
            },
            {
                id: "contactKaja",
                label: "❌ Mam inny problem"
            }
        ]
    },
    "no": {
        "keywords": [],
        message: "Ok! Czy moja odpowiedź Ci pomogła?",
        buttons: [
            {
                id: "endConversation",
                label: "✅ Tak, to wszystko"
            },
            {
                id: "moreQuestions",
                label: "💬 Jeszcze mam pytania"
            },
            {
                id: "contactKaja",
                label: "❌ Mam inny problem"
            }
        ]
    }
}

};