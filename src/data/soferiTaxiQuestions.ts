export type QuestionKey = "a" | "b" | "c" | "d";
export type QuestionItem = {
  id: number;
  sourceNo: string;
  text: string;
  answers: { key: QuestionKey; text: string }[];
  correct: QuestionKey;
};

// Sursa: Intrebari Soferi Taxi.pdf. Raspunsurile corecte au litera ingrosata.
// Intrebarea 172 are doar trei variante in PDF.
export const soferiTaxiQuestions: QuestionItem[] = [
  {
    "id": 1,
    "sourceNo": "001",
    "text": "În sensul Legii nr. 38/2003 cu modificările şi completările ulterioare, termenul de taximetrist este definit astfel:",
    "answers": [
      {
        "key": "a",
        "text": "orice conducător auto posesor al unui permis categoria B;"
      },
      {
        "key": "b",
        "text": "conducător auto, angajat al unei societăţi care desfăşoară servicii de transport public în regim de taxi;"
      },
      {
        "key": "c",
        "text": "persoană fizică, posesor al unui permis categoria B;"
      },
      {
        "key": "d",
        "text": "conducător auto atestat profesional să efectueze transport în regim de taxi."
      }
    ],
    "correct": "d"
  },
  {
    "id": 2,
    "sourceNo": "002",
    "text": "Cum influenţează viteza spaţiul de oprire ?",
    "answers": [
      {
        "key": "a",
        "text": "la dublarea vitezei spaţiul de oprire se măreşte de patru ori;"
      },
      {
        "key": "b",
        "text": "la dublarea vitezei spaţiul de oprire se măreşte de două ori;"
      },
      {
        "key": "c",
        "text": "la dublarea vitezei spaţiul de oprire nu îşi modifică valorile;"
      },
      {
        "key": "d",
        "text": "la dublarea vitezei spaţiul de oprire se măreşte de trei ori."
      }
    ],
    "correct": "a"
  },
  {
    "id": 3,
    "sourceNo": "003",
    "text": "Certificatele de agreare pentru autoturismele taxi se eliberează la cerere şi sunt valabile:",
    "answers": [
      {
        "key": "a",
        "text": "1 an;"
      },
      {
        "key": "b",
        "text": "10 ani cu viză anuală;"
      },
      {
        "key": "c",
        "text": "5 ani cu viză anuală;"
      },
      {
        "key": "d",
        "text": "3 ani cu viză anuală;"
      }
    ],
    "correct": "b"
  },
  {
    "id": 4,
    "sourceNo": "004",
    "text": "Factorii care contribuie la deprecierea capacităţii de conducere sunt:",
    "answers": [
      {
        "key": "a",
        "text": "doar stres-ul;"
      },
      {
        "key": "b",
        "text": "doar oboseala;"
      },
      {
        "key": "c",
        "text": "deprecierea vederii de-a lungul timpului;"
      },
      {
        "key": "d",
        "text": "oboseala, alcoolul, medicamentele, stupefiantele, stres-ul, deprecierea vederii de-a lungul timpului."
      }
    ],
    "correct": "d"
  },
  {
    "id": 5,
    "sourceNo": "005",
    "text": "În acelaşi timp cu autorizaţia taxi şi copiile conforme se eliberează:",
    "answers": [
      {
        "key": "a",
        "text": "două ecusoane cu valabilitatea de un an;"
      },
      {
        "key": "b",
        "text": "două ecusoane cu aceiaşi valabilitate ca a autorizaţiei şi a copiilor conforme;"
      },
      {
        "key": "c",
        "text": "contractul de atribuire în gestiune a executării serviciilor de transport în regim de taxi;"
      },
      {
        "key": "d",
        "text": "autorizaţia pentru dispecerat taxi."
      }
    ],
    "correct": "b"
  },
  {
    "id": 6,
    "sourceNo": "006",
    "text": "Se interzice taxiurilor:",
    "answers": [
      {
        "key": "a",
        "text": "transportul între localitatea de autorizare şi altă localitate;"
      },
      {
        "key": "b",
        "text": "transportul pe o singură cursă a mai mult de un client, în sensul de un singur plătitor, nu de persoane ;"
      },
      {
        "key": "c",
        "text": "transportul pe o distanţă din care va rezulta un bon client foarte mic;"
      },
      {
        "key": "d",
        "text": "transportul pe distanţe foarte mari."
      }
    ],
    "correct": "b"
  },
  {
    "id": 7,
    "sourceNo": "007",
    "text": "Viteza de comutare asigurată de aparatul de taxat trebuie să fie:",
    "answers": [
      {
        "key": "a",
        "text": "10 km/oră"
      },
      {
        "key": "b",
        "text": "20 km/oră"
      },
      {
        "key": "c",
        "text": "15km/oră"
      },
      {
        "key": "d",
        "text": "12km/oră"
      }
    ],
    "correct": "a"
  },
  {
    "id": 8,
    "sourceNo": "008",
    "text": "Cheia electronică se foloseşte pentru:",
    "answers": [
      {
        "key": "a",
        "text": "deschiderea autovehiculului taxi:"
      },
      {
        "key": "b",
        "text": "identificarea autovehiculului taxi;"
      },
      {
        "key": "c",
        "text": "identificarea companiei taxi sau taximetristului independent;"
      },
      {
        "key": "d",
        "text": "programarea tarifelor şi identificarea conducătorului auto taxi."
      }
    ],
    "correct": "d"
  },
  {
    "id": 9,
    "sourceNo": "009",
    "text": "La trecerea prin intersecţiile nedirijate din afara localităţilor viteza de deplasare trebuie să fie:",
    "answers": [
      {
        "key": "a",
        "text": "30 km/h;"
      },
      {
        "key": "b",
        "text": "40 km/h;"
      },
      {
        "key": "c",
        "text": "50 km/h;"
      },
      {
        "key": "d",
        "text": "nefiind reglementată o valoare a vitezei de circulaţie, aceasta trebuie redusă până la limita evitării oricărui pericol."
      }
    ],
    "correct": "c"
  },
  {
    "id": 10,
    "sourceNo": "010",
    "text": "Viteza de deplasare pe timp de noapte trebuie aleasă astfel încât:",
    "answers": [
      {
        "key": "a",
        "text": "să permită oprirea autovehiculului în limita câmpului vizual;"
      },
      {
        "key": "b",
        "text": "să permită oprirea cât mai rapidă a autovehiculului;"
      },
      {
        "key": "c",
        "text": "să permită oprirea vehiculului în maxim 10m;"
      },
      {
        "key": "d",
        "text": "luminile de întâlnire să nu deranjeze pe cei care circulă din sens opus."
      }
    ],
    "correct": "a"
  },
  {
    "id": 11,
    "sourceNo": "011",
    "text": "Autorizaţia taxi sau orice copie conformă sunt:",
    "answers": [
      {
        "key": "a",
        "text": "transmisibile de la un transportator la altul;"
      },
      {
        "key": "b",
        "text": "unice şi netransmisibile;"
      },
      {
        "key": "c",
        "text": "transmisibile de la un autovehicul la altul;"
      },
      {
        "key": "d",
        "text": "pot fi preschimbate la cerere în autorizaţii şi copii conforme pentru transport marfă."
      }
    ],
    "correct": "b"
  },
  {
    "id": 12,
    "sourceNo": "012",
    "text": "Se consideră contravenţie şi se aplică conducătorilor auto taxi:",
    "answers": [
      {
        "key": "a",
        "text": "să execute alte categorii de transporturi publice decât în regim de taxi, cu taxiuri agreate şi având însemnele de personalizare şi identificare proprii;"
      },
      {
        "key": "b",
        "text": "efectuarea unui transport în regim de taxi cu aparatul de taxat defect sau cu lampa taxi scoasă din funcţiune;"
      },
      {
        "key": "c",
        "text": "să nu prezinte în termen aparatul de taxat, după instalarea pe taxi, la prima verificare metrologică a taximetrelor, precum şi ulterior la termenele scadente"
      },
      {
        "key": "d",
        "text": "să nu furnizeze la solicitarea autorităţilor cu atribuţii de control , informaţiile privind activitatea de transport desfăşurată."
      }
    ],
    "correct": "b"
  },
  {
    "id": 13,
    "sourceNo": "013",
    "text": "Vârsta minimă pentru conducătorii auto care efectuează transport de persoane în regim de taxi este de:",
    "answers": [
      {
        "key": "a",
        "text": "18 ani;"
      },
      {
        "key": "b",
        "text": "21 ani;"
      },
      {
        "key": "c",
        "text": "22 ani;"
      },
      {
        "key": "d",
        "text": "19 ani."
      }
    ],
    "correct": "b"
  },
  {
    "id": 14,
    "sourceNo": "014",
    "text": "Factorii care influenţează distanta de frânare:",
    "answers": [
      {
        "key": "a",
        "text": "numai viteza de deplasare;"
      },
      {
        "key": "b",
        "text": "dimensiunea si profilul anvelopei;"
      },
      {
        "key": "c",
        "text": "viteza, masa vehiculului, aderenta;"
      },
      {
        "key": "d",
        "text": "aderenta părţii carosabile si viteza."
      }
    ],
    "correct": "c"
  },
  {
    "id": 15,
    "sourceNo": "015",
    "text": "Un autoturism taxi nu poate transporta mai mult de",
    "answers": [
      {
        "key": "a",
        "text": "4 persoane în afara conducătorului auto;"
      },
      {
        "key": "b",
        "text": "5 persoane în afara conducătorului auto;"
      },
      {
        "key": "c",
        "text": "9 persoane în afara conducătorului auto:"
      },
      {
        "key": "d",
        "text": "nu se specifică un număr anume de persoane, fiecare autoturism taxi putând transporta un număr de persoane în conformitate cu capacitatea acestuia."
      }
    ],
    "correct": "a"
  },
  {
    "id": 16,
    "sourceNo": "016",
    "text": "În cazul în care transportatorul autorizat sau taximetristul folosesc taxiul în alte scopuri decât transportul în regim de taxi, autovehiculul poate circula:",
    "answers": [
      {
        "key": "a",
        "text": "cu aparatul de taxat în poziţia ocupat şi lampa taxi în aceiaşi poziţie;"
      },
      {
        "key": "b",
        "text": "cu aparatul de taxat în poziţia liber şi lampa taxi acoperită cu o husă;"
      },
      {
        "key": "c",
        "text": "cu aparatul de taxat în poziţia liber şi lampa taxi scoasă de pe cupolă;"
      },
      {
        "key": "d",
        "text": "cu aparatul de taxat în poziţia liber şi lampa taxi în aceiaşi poziţie."
      }
    ],
    "correct": "c"
  },
  {
    "id": 17,
    "sourceNo": "017",
    "text": "Până la ce procent poate fi majorat tariful de distanţă pe timp de noapte în raport cu tariful de distanţă pe timp de zi?",
    "answers": [
      {
        "key": "a",
        "text": "30%"
      },
      {
        "key": "b",
        "text": "40%"
      },
      {
        "key": "c",
        "text": "50%"
      },
      {
        "key": "d",
        "text": "100%"
      }
    ],
    "correct": "c"
  },
  {
    "id": 18,
    "sourceNo": "018",
    "text": "În cazul în care conducătorul auto taxi nu deţine atestat profesional sau atestatul obţinut are valabilitatea depăşită, autorizaţia taxi sau orice altă copie conformă poate fi:",
    "answers": [
      {
        "key": "a",
        "text": "suspendată pentru o perioadă de 30 de zile;"
      },
      {
        "key": "b",
        "text": "suspendată până la remedierea deficienţelor;"
      },
      {
        "key": "c",
        "text": "retrasă;"
      },
      {
        "key": "d",
        "text": "suspendată pe o perioadă de la de la1 la 3 luni."
      }
    ],
    "correct": "d"
  },
  {
    "id": 19,
    "sourceNo": "019",
    "text": "Raportul taximetristului este:",
    "answers": [
      {
        "key": "a",
        "text": "raport fiscal;"
      },
      {
        "key": "b",
        "text": "raport de control nefiscal;"
      },
      {
        "key": "c",
        "text": "raport de activitate transmis către dispecerat;"
      },
      {
        "key": "d",
        "text": "raport de încasări emis la sfârşitul activităţii."
      }
    ],
    "correct": "b"
  },
  {
    "id": 20,
    "sourceNo": "020",
    "text": "Elementele conducerii preventive sunt:",
    "answers": [
      {
        "key": "a",
        "text": "vigilenta, prevederea, judecata;"
      },
      {
        "key": "b",
        "text": "vigilenta si îndemânarea;"
      },
      {
        "key": "c",
        "text": "numai prevederea si judecata;"
      },
      {
        "key": "d",
        "text": "numai vigilenta si prevederea."
      }
    ],
    "correct": "a"
  },
  {
    "id": 21,
    "sourceNo": "021",
    "text": "Sigiliul aplicat pe taximetru în scopul de a nu permite fără desigilare accesul la operaţiuni privilegiate este:",
    "answers": [
      {
        "key": "a",
        "text": "sigiliu de protecţie;"
      },
      {
        "key": "b",
        "text": "sigiliu metrologic;"
      },
      {
        "key": "c",
        "text": "sigiliu fiscal"
      },
      {
        "key": "d",
        "text": "memorie electronică fiscală."
      }
    ],
    "correct": "b"
  },
  {
    "id": 22,
    "sourceNo": "022",
    "text": "Cum poate fi sancţionat conducătorul auto, care părăseşte locul accidentului din care a rezultat rănirea unei persoane:",
    "answers": [
      {
        "key": "a",
        "text": "cu închisoare şi anularea permisului de conducere;"
      },
      {
        "key": "b",
        "text": "cu închisoare şi suspendarea permisului de conducere;"
      },
      {
        "key": "c",
        "text": "reţinerea permisului de conducere şi aplicarea de puncte de penalizare;"
      },
      {
        "key": "d",
        "text": "cu amendă penală."
      }
    ],
    "correct": "a"
  },
  {
    "id": 23,
    "sourceNo": "023",
    "text": "Pe un carosabil normal la viteza de 100 km/h distanţa de frânare este de aproximativ:",
    "answers": [
      {
        "key": "a",
        "text": "50 m;"
      },
      {
        "key": "b",
        "text": "100 m;"
      },
      {
        "key": "c",
        "text": "150 m;"
      },
      {
        "key": "d",
        "text": "80 m;"
      }
    ],
    "correct": "b"
  },
  {
    "id": 24,
    "sourceNo": "024",
    "text": "La depăşire, semnalizarea cu lumina semnalizatoarelor intermitente se face:",
    "answers": [
      {
        "key": "a",
        "text": "de la începutul manevrei şi până la sfârşitul acesteia;"
      },
      {
        "key": "b",
        "text": "numai pentru a semnaliza intenţia de depăşire, angajarea în depăşire şi depăşirea-dublarea propriu-zisă;"
      },
      {
        "key": "c",
        "text": "numai pentru a semnaliza intenţia de depăşire şi angajarea în depăşire;"
      },
      {
        "key": "d",
        "text": "de la începutul manevrei şi până la sfârşitul acesteia numai în locurile cu vizibilitate redusă."
      }
    ],
    "correct": "a"
  },
  {
    "id": 25,
    "sourceNo": "025",
    "text": "Conform Legii nr. 38/2003 cu modificările şi completările ulterioare, serviciile de transport public în regim de taxi fac parte din:",
    "answers": [
      {
        "key": "a",
        "text": "sfera serviciilor la domiciliu;"
      },
      {
        "key": "b",
        "text": "sfera comerţului cu amănuntul;"
      },
      {
        "key": "c",
        "text": "sfera serviciilor comunitare de utilitate publică;"
      },
      {
        "key": "d",
        "text": "sfera transporturilor naţionale."
      }
    ],
    "correct": "c"
  },
  {
    "id": 26,
    "sourceNo": "026",
    "text": "Care dintre următoarele variante corespunde definiţiei termenului „taxi” în conformitate cu prevederile Legii nr. 38/2003 cu modificările şi completările ulterioare:",
    "answers": [
      {
        "key": "a",
        "text": "autovehicul din categoria autoturisme cu până la maxim 5 locuri inclusiv locul conducătorului auto;"
      },
      {
        "key": "b",
        "text": "autovehicul de transport de mărfuri a cărui sarcină utilă nu depăşeşte 3,5 tone;"
      },
      {
        "key": "c",
        "text": "autovehicul cu până la maxim10 locuri inclusiv locul conducătorului auto;"
      },
      {
        "key": "d",
        "text": "orice mijloc de transport care permite transportul de persoane."
      }
    ],
    "correct": "a"
  },
  {
    "id": 27,
    "sourceNo": "027",
    "text": "Se interzice taxiurilor:",
    "answers": [
      {
        "key": "a",
        "text": "staţionarea în locurile de aşteptare a clienţilor;"
      },
      {
        "key": "b",
        "text": "staţionare în locurile de aşteptare a clienţilor situate în altă localitate decât localitatea de autorizare care a emis autorizaţiile taxi;"
      },
      {
        "key": "c",
        "text": "staţionarea în locurile permise pentru autovehicule;"
      },
      {
        "key": "d",
        "text": "staţionarea în apropierea intersecţiilor cu volum mare de trafic."
      }
    ],
    "correct": "b"
  },
  {
    "id": 28,
    "sourceNo": "028",
    "text": "Certificatul de atestare a pregătirii profesionale este valabil:",
    "answers": [
      {
        "key": "a",
        "text": "pe teritoriul UE;"
      },
      {
        "key": "b",
        "text": "în aria geografică a autorităţii care a emis certificatul;"
      },
      {
        "key": "c",
        "text": "pe teritoriul României;"
      },
      {
        "key": "d",
        "text": "în România şi în ţările cu care România are un acord încheiat în acest sens."
      }
    ],
    "correct": "c"
  },
  {
    "id": 29,
    "sourceNo": "029",
    "text": "Care dintre următoarele variante nu este considerată ca fiind poziţie de operare autorizată a taxiului?",
    "answers": [
      {
        "key": "a",
        "text": "în afara serviciului;"
      },
      {
        "key": "b",
        "text": "liber;"
      },
      {
        "key": "c",
        "text": "ocupat;"
      },
      {
        "key": "d",
        "text": "plată;"
      }
    ],
    "correct": "a"
  },
  {
    "id": 30,
    "sourceNo": "030",
    "text": "Lămpile care indică poziţia liber şi poziţia ocupat trebuie să fie vizibile de la o distanţă de:",
    "answers": [
      {
        "key": "a",
        "text": "30 metri;"
      },
      {
        "key": "b",
        "text": "50 metri;"
      },
      {
        "key": "c",
        "text": "70 metri;"
      },
      {
        "key": "d",
        "text": "100 metri;"
      }
    ],
    "correct": "d"
  },
  {
    "id": 31,
    "sourceNo": "031",
    "text": "Sunteţi în cursă cu un client. Din cauza aglomeraţiei foarte mari rulaţi cu o viteză mai mică de 10 km/h. Pe ce tarif ar trebui să înregistreze taximetrul dumneavoastră?",
    "answers": [
      {
        "key": "a",
        "text": "tarif de pornire;"
      },
      {
        "key": "b",
        "text": "tarif lei/km;"
      },
      {
        "key": "c",
        "text": "tarif de staţionare;"
      },
      {
        "key": "d",
        "text": "tarif de distanţă."
      }
    ],
    "correct": "c"
  },
  {
    "id": 32,
    "sourceNo": "032",
    "text": "Ce înţelegeţi prin vigilenţă ca element al conduitei preventive?",
    "answers": [
      {
        "key": "a",
        "text": "capacitatea conducătorului auto de a fi în permanenţă atent asupra aparaturii de bord şi a funcţionării autovehiculului;"
      },
      {
        "key": "b",
        "text": "capacitatea conducătorului auto de a-şi adapta stilul de conducere în funcţie de condiţiile atmosferice;"
      },
      {
        "key": "c",
        "text": "capacitatea conducătorului auto de a fi în permanenţă atent şi pregătit pentru a intervenii cu promptitudine în cazul apariţiei unor obstacole;"
      },
      {
        "key": "d",
        "text": "capacitatea conducătorului auto de a fi în permanenţă atent la potenţialele pericole venite din partea clienţilor;"
      }
    ],
    "correct": "c"
  },
  {
    "id": 33,
    "sourceNo": "033",
    "text": "În care din următoarele locuri este interzisă manevra de întoarcere a unui autoturism?",
    "answers": [
      {
        "key": "a",
        "text": "în locurile în care soliditatea drumurilor nu permite;"
      },
      {
        "key": "b",
        "text": "pe drumurile publice cu declivităţii pronunţate, semnalizate ca atare;"
      },
      {
        "key": "c",
        "text": "pe drumurile naţionale;"
      },
      {
        "key": "d",
        "text": "la mai puţin de 50 de metri de staţiile mijloacelor de transport public de persoane."
      }
    ],
    "correct": "a"
  },
  {
    "id": 34,
    "sourceNo": "034",
    "text": "Calculul preţului transportului în regim de taxi poate fi realizat în două moduri;",
    "answers": [
      {
        "key": "a",
        "text": "normal S - tarif orar (lei/oră) la rularea sub viteza de comutare, şi a tarifului de distanţă (lei/km) la rularea cu o viteză mai mare decât viteza de comutare sau tarif D - aplicarea dublă a tarifului prin care tariful se calculează prin aplicarea simultană a tarifului orar şi a tarifului de distanţă, pe tot parcursul călătoriei;"
      },
      {
        "key": "b",
        "text": "normal T, aplicarea tarifului orar pe tot parcursul călătoriei sau normal B aplicarea tarifului de distanţă pe tot parcursul călătoriei;"
      },
      {
        "key": "c",
        "text": "normal V, aplicarea simultană a tarifului de pornire şi a tarifului orar(lei/oră) pe tot parcursul călătoriei sau normal X ,tarif de pornire plus tarif de distanţă pe toată durata călătoriei;"
      },
      {
        "key": "d",
        "text": "în nici unul din cazurile de mai sus ,fiecare operator în parte îşi stabileşte un tarif de zi şi unul de noapte."
      }
    ],
    "correct": "a"
  },
  {
    "id": 35,
    "sourceNo": "035",
    "text": "Corectitudinea taximetristului este demonstrată prin:",
    "answers": [
      {
        "key": "a",
        "text": "promtitudinea sosirii la adresa solicitată;"
      },
      {
        "key": "b",
        "text": "acordarea priorităţii altor vehicule în traficul aglomerat;"
      },
      {
        "key": "c",
        "text": "emiterea şi înmânarea bonului fiscal pe baza căruia va încasa contravaloarea cursei;"
      },
      {
        "key": "d",
        "text": "avertizarea pasagerilor cu privire la anumiţi colegi mai puţin serioşi."
      }
    ],
    "correct": "c"
  },
  {
    "id": 36,
    "sourceNo": "036",
    "text": "Pentru a putea practica transportul de persoane în regim de taxi , conducătorul auto trebuie să deţină permis de conducere categoria B valabil cu o vechime de cel puţin 2 ani si:",
    "answers": [
      {
        "key": "a",
        "text": "să aibă vârsta de cel puţin 25 ani;"
      },
      {
        "key": "b",
        "text": "să fie apt medical şi psihologic;"
      },
      {
        "key": "c",
        "text": "să aibă practică în conducere de cel puţin un an;"
      },
      {
        "key": "d",
        "text": "să prezinte diploma de absolvire a minimum 10 clase."
      }
    ],
    "correct": "b"
  },
  {
    "id": 37,
    "sourceNo": "037",
    "text": "În care din următoarele situaţii serviciile de dispecerat sunt obligatorii ?",
    "answers": [
      {
        "key": "a",
        "text": "în localităţile în care s-au atribuit mai mult de 100 de autorizaţii taxi;"
      },
      {
        "key": "b",
        "text": "în localităţile în care s-au atribuit mai mult de 50 de autorizaţii taxi;"
      },
      {
        "key": "c",
        "text": "în toate localităţile în care s-au atribuit mai mult de 75 de autorizaţii;"
      },
      {
        "key": "d",
        "text": "în toate localităţile."
      }
    ],
    "correct": "a"
  },
  {
    "id": 38,
    "sourceNo": "038",
    "text": "Activitatea de dispecerat taxi poate fi executată de către un operator:",
    "answers": [
      {
        "key": "a",
        "text": "în toată ţara;"
      },
      {
        "key": "b",
        "text": "în afara ariei localităţii de autorizare;"
      },
      {
        "key": "c",
        "text": "numai pe raza localităţii de autorizare;"
      },
      {
        "key": "d",
        "text": "pe raza localităţii de autorizare şi în localităţile imediat învecinate;"
      }
    ],
    "correct": "c"
  },
  {
    "id": 39,
    "sourceNo": "039",
    "text": "În vederea evitării orbirii pe timp de noapte, la întâlnirea altui vehicul care circulă din sens opus cu faza lungă, în condiţiile privirea trebuie îndreptată mai întâi;",
    "answers": [
      {
        "key": "a",
        "text": "indiferent unde, dar în nici un caz privirea nu trebuie îndreptată către farurile celui care circulă din sens opus;"
      },
      {
        "key": "b",
        "text": "către repere din parte dreaptă a drumului, iar în adâncime, la limita fascicolului luminos al farurilor autovehiculului care circulă din sens opus;"
      },
      {
        "key": "c",
        "text": "pot evita orbirea urmărind marcajul care separă sensurile de circulaţie în zona de difuziune a fascicolului luminos al farurilor autovehiculului care circulă din sens opus;"
      },
      {
        "key": "d",
        "text": "tot timpul în faţă."
      }
    ],
    "correct": "b"
  },
  {
    "id": 40,
    "sourceNo": "040",
    "text": "Certificatul de atestare a pregătirii profesionale este valabil:",
    "answers": [
      {
        "key": "a",
        "text": "5 ani cu viză anuală;"
      },
      {
        "key": "b",
        "text": "5 ani cu examinare pentru vizare la 2 ani;"
      },
      {
        "key": "c",
        "text": "în condiţiile în care este vizat la termen şi conducătorul auto face dovada că este apt din punct de vedere medical şi psihologic pentru transportul de persoane;"
      },
      {
        "key": "d",
        "text": "pe termen nelimitat fără a mai fi necesară viza periodică."
      }
    ],
    "correct": "c"
  },
  {
    "id": 41,
    "sourceNo": "041",
    "text": "Ce reprezintă autorizaţia taxi conform legii 38 /2003 modificată şi completată:",
    "answers": [
      {
        "key": "a",
        "text": "autorizaţie emisă de către poliţie în baza permisului de conducere;"
      },
      {
        "key": "b",
        "text": "copie conformă a autorizaţiei de transport în regim de taxi;"
      },
      {
        "key": "c",
        "text": "autorizaţie de funcţionare emisă de primărie;"
      },
      {
        "key": "d",
        "text": "autorizaţie emisă de administraţia financiară pentru instalarea aparatului de taxat."
      }
    ],
    "correct": "b"
  },
  {
    "id": 42,
    "sourceNo": "042",
    "text": "Cum procedaţi pe timp de noapte când din sens opus se apropie un alt vehicul?",
    "answers": [
      {
        "key": "a",
        "text": "reduceţi viteza şi puneţi în funcţiune luminile de întâlnire;"
      },
      {
        "key": "b",
        "text": "circulaţi cu atenţie, lăsând în funcţie luminile de poziţie pentru a nu orbi pe conducătorul auto care se apropie din sens opus;"
      },
      {
        "key": "c",
        "text": "circulaţi cât mai pe dreapta drumului cu viteză redusă având aprinse luminile de poziţie;"
      },
      {
        "key": "d",
        "text": "puneţi în funcţiune luminile de poziţie şi vă ghidaţi după marcajul care separă benzile de circulaţie."
      }
    ],
    "correct": "a"
  },
  {
    "id": 43,
    "sourceNo": "043",
    "text": "În sensul Legii nr. 38/2003 cu modificările şi completările ulterioare, termenul de timp efectiv lucrat este definit astfel:",
    "answers": [
      {
        "key": "a",
        "text": "intervalul de timp în care s-a efectuat o cursă;"
      },
      {
        "key": "b",
        "text": "intervalul de timp de la prima cursă şi până la ultima mai puţin timpul de aşteptare;"
      },
      {
        "key": "c",
        "text": "intervalul de timp cuprins între momentul începerii primei curse şi momentul finalizării ultimei curse;"
      },
      {
        "key": "d",
        "text": "durata unei zile lucrătoare."
      }
    ],
    "correct": "c"
  },
  {
    "id": 44,
    "sourceNo": "044",
    "text": "Aveţi foarte mari dubii că taximetrul dumneavoastră nu funcţionează la parametrii normali, înregistrările şi rapoartele conţinând erori. La cine ar trebui să apelaţi pentru a face verificări complete.",
    "answers": [
      {
        "key": "a",
        "text": "la agenţia teritorială a Registrului Auto Român - R.A.R de care aparţineţi,"
      },
      {
        "key": "b",
        "text": "la agenţia teritorială a Autorităţii Rutiere Române A.R.R de care aparţineţi;"
      },
      {
        "key": "c",
        "text": "la Inspectoratul teritorial de muncă;"
      },
      {
        "key": "d",
        "text": "la reprezentanţa teritorială a Biroului Român de Metrologie Legală."
      }
    ],
    "correct": "d"
  },
  {
    "id": 45,
    "sourceNo": "045",
    "text": "Ce înscrisuri trebuie să conţină ecusoanele eliberate în acelaşi timp cu autorizaţia taxi şi copiile conforme ?",
    "answers": [
      {
        "key": "a",
        "text": "localitatea de autorizare şi localităţile unde este permis accesul;"
      },
      {
        "key": "b",
        "text": "denumirea transportatorului;"
      },
      {
        "key": "c",
        "text": "numărul de circulaţie al autovehiculului pentru care s-a eliberat autorizaţia taxi sau copia conformă;"
      },
      {
        "key": "d",
        "text": "toate datele de la punctele a, b,c."
      }
    ],
    "correct": "c"
  },
  {
    "id": 46,
    "sourceNo": "046",
    "text": "Tariful de pornire trebuie să fie:",
    "answers": [
      {
        "key": "a",
        "text": "mai mic decât tariful de distanţă;"
      },
      {
        "key": "b",
        "text": "mai mare decât tariful de distanţă"
      },
      {
        "key": "c",
        "text": "egal cu tariful de distanţă;"
      },
      {
        "key": "d",
        "text": "exprimat în lei/oră."
      }
    ],
    "correct": "d"
  },
  {
    "id": 47,
    "sourceNo": "047",
    "text": "Pentru susţinerea examenului în vederea obţinerii certificatului de atestare profesională conducătorul auto trebuie să prezinte:",
    "answers": [
      {
        "key": "a",
        "text": "permisul de conducere categoria B."
      },
      {
        "key": "b",
        "text": "dovada absolvirii unui curs de pregătire profesională pentru practicarea transportului de persoane în regim de taxi;"
      },
      {
        "key": "c",
        "text": "autorizaţia taxi;"
      },
      {
        "key": "d",
        "text": "copia conformă a autorizaţiei taxi"
      }
    ],
    "correct": "b"
  },
  {
    "id": 48,
    "sourceNo": "048",
    "text": "De ce dimensiuni trebuie să fie banda dublă de carouri tip şah, de culori alternative alb şi negru de pe linia mediană orizontală a caroseriei;",
    "answers": [
      {
        "key": "a",
        "text": "3x3cm;"
      },
      {
        "key": "b",
        "text": "5x5 cm;"
      },
      {
        "key": "c",
        "text": "10x10cm;"
      },
      {
        "key": "d",
        "text": "7,5x7,5cm."
      }
    ],
    "correct": "a"
  },
  {
    "id": 49,
    "sourceNo": "049",
    "text": "Raportul de închidere zilnică va cuprinde minimum următoarele informaţii:",
    "answers": [
      {
        "key": "a",
        "text": "parcursul total în km şi parcursul total cu călători în km;"
      },
      {
        "key": "b",
        "text": "valoarea totală încasată şi valoarea TVA;"
      },
      {
        "key": "c",
        "text": "numărul fiecărei curse efectuate;"
      },
      {
        "key": "d",
        "text": "parcursul total în km, parcursul total cu călători în km, valoarea totală încasată, valoarea TVA şi numărul fiecărei curse efectuate."
      }
    ],
    "correct": "d"
  },
  {
    "id": 50,
    "sourceNo": "050",
    "text": "De ce asigurări aveţi nevoie pentru transportul de persoane în regim de taxi?",
    "answers": [
      {
        "key": "a",
        "text": "asigurarea de răspundere civilă auto şi asigurarea de persoane;"
      },
      {
        "key": "b",
        "text": "asigurarea CASCO şi asigurarea de bagaje;"
      },
      {
        "key": "c",
        "text": "asigurarea de răspundere civilă auto şi asigurarea persoanelor şi a bunurilor acestora;"
      },
      {
        "key": "d",
        "text": "asigurarea de răspundere auto civilă şi asigurarea de bagaje."
      }
    ],
    "correct": "c"
  },
  {
    "id": 51,
    "sourceNo": "051",
    "text": "Ce pericole poate genera oprirea autovehiculului pe partea carosabilă, într-un loc unde această manevră este permisă;",
    "answers": [
      {
        "key": "a",
        "text": "oprirea pe partea carosabilă poate constitui o stânjenire a celorlalţi participanţi la trafic;"
      },
      {
        "key": "b",
        "text": "oprirea în condiţiile date nu poate reprezenta un pericol pentru ceilalţi participanţi la trafic;"
      },
      {
        "key": "c",
        "text": "oprirea poate reprezenta şi un procedeu de adaptare a modului de deplasare în raport cu situaţia caracteristică traficului rutier, deci prin natura acesteia nu prezintă nici un pericol"
      },
      {
        "key": "d",
        "text": "chiar dacă manevra este permisă, conducătorul auto are obligaţia de a nu părăsii autovehiculul pe timpul cât acesta este oprit pe partea carosabilă."
      }
    ],
    "correct": "a"
  },
  {
    "id": 52,
    "sourceNo": "052",
    "text": "Fenomenul de acvaplanare generează următoarele pericole;",
    "answers": [
      {
        "key": "a",
        "text": "pierderea controlului asupra direcţiei şi frânei;"
      },
      {
        "key": "b",
        "text": "stropirea cu apă a parbrizului;"
      },
      {
        "key": "c",
        "text": "mărirea aderenţei pneu-sol;"
      },
      {
        "key": "d",
        "text": "diminuarea capacităţii motorului."
      }
    ],
    "correct": "a"
  },
  {
    "id": 53,
    "sourceNo": "053",
    "text": "Care sunt factorii care sporesc gradul de risc în circulaţia urbană?",
    "answers": [
      {
        "key": "a",
        "text": "complexitatea şi necunoaşterea reţelei stradale;"
      },
      {
        "key": "b",
        "text": "existenţa transportului în comun;"
      },
      {
        "key": "c",
        "text": "valori ridicate de trafic auto şi pietonal,cu multiple intersectări ale fluxului acestora;"
      },
      {
        "key": "d",
        "text": "un număr foarte mare de taxiuri."
      }
    ],
    "correct": "c"
  },
  {
    "id": 54,
    "sourceNo": "054",
    "text": "Cum veţi proceda când observaţi semnalul făcut cu braţul ridicat de către poliţistul aflat în mijlocul intersecţiei?",
    "answers": [
      {
        "key": "a",
        "text": "dacă primiţi semnalul când vă aflaţi deja în intersecţie, vă continuaţi deplasarea;"
      },
      {
        "key": "b",
        "text": "opriţi în mijlocul intersecţiei în dreptul poliţistului;"
      },
      {
        "key": "c",
        "text": "reduceţi viteza şi continuaţi deplasarea cu atenţie sporită;"
      },
      {
        "key": "d",
        "text": "respectaţi semaforizarea intersecţiei şi nu ţineţi cont de semnalele poliţistului."
      }
    ],
    "correct": "a"
  },
  {
    "id": 55,
    "sourceNo": "055",
    "text": "Pe portierele din faţă ale autoturismului taxi se aplică:",
    "answers": [
      {
        "key": "a",
        "text": "ecusoanele cu numărul de ordine al autorizaţiei sau al copiei conforme, după caz;"
      },
      {
        "key": "b",
        "text": "numărul certificatului de agreare al autoturismului taxi;"
      },
      {
        "key": "c",
        "text": "valorile tarifelor de distanţă (lei/km), practicate pe timp de zi şi pe timp de noapte;"
      },
      {
        "key": "d",
        "text": "numărul autorizaţiei de funcţionare emisă de autoritatea administraţiei publice locale."
      }
    ],
    "correct": "c"
  },
  {
    "id": 56,
    "sourceNo": "056",
    "text": "Dimensiunile înscrisurilor de pe portierele din faţă ale autoturismelor taxi vor fi stabilite astfel încât să fie vizibile de la:",
    "answers": [
      {
        "key": "a",
        "text": "de la 5 metri distanţă, în condiţii de vizibilitate redusă;"
      },
      {
        "key": "b",
        "text": "de la 5 metri, pe timp de noapte;"
      },
      {
        "key": "c",
        "text": "de la minimum 5 metri, cu obligaţia ca înscrisurile să fie fluorescente pentru o vizibilitate sporită pe timp de noapte;"
      },
      {
        "key": "d",
        "text": "de la minimum 5 metri."
      }
    ],
    "correct": "d"
  },
  {
    "id": 57,
    "sourceNo": "057",
    "text": "Autovehiculele agreate de Registrul Auto Român - R.A.R, ca taxiuri pot transporta:",
    "answers": [
      {
        "key": "a",
        "text": "nu mai mult de 4 persoane în afara conducătorului auto;"
      },
      {
        "key": "b",
        "text": "minimum 4 persoane în afara conducătorului auto;"
      },
      {
        "key": "c",
        "text": "maxim 5 persoane în afara conducătorului auto;"
      },
      {
        "key": "d",
        "text": "nu există prevederi în acest sens, taxiurile putând transporta un număr de persoane corespunzător cu capacitatea autovehiculului."
      }
    ],
    "correct": "a"
  },
  {
    "id": 58,
    "sourceNo": "058",
    "text": "Modelul lămpii taxi este omologat de către:",
    "answers": [
      {
        "key": "a",
        "text": "Ministerul de Interne prin Direcţia Poliţiei Rutiere;"
      },
      {
        "key": "b",
        "text": "Registrul Auto Român - R.A.R;"
      },
      {
        "key": "c",
        "text": "Administraţia Naţională a Drumurilor;"
      },
      {
        "key": "d",
        "text": "Direcţia Generală Infrastructură şi Transport Rutier."
      }
    ],
    "correct": "b"
  },
  {
    "id": 59,
    "sourceNo": "059",
    "text": "Ce condiţii se impun conform prevederilor Legii nr. 38/2003 cu modificările şi completările ulterioare pentru lampa taxi ?",
    "answers": [
      {
        "key": "a",
        "text": "culoare galbenă şi să fie prevăzută cu o lampă suplimentară de culoare verde cu roşu;"
      },
      {
        "key": "b",
        "text": "culoare galbenă şi să aibă înscrisul TAXI pe faţă şi pe spate;"
      },
      {
        "key": "c",
        "text": "culoare galbenă şi să aibă înscrisul TAXI pe părţile laterale şi frontale;"
      },
      {
        "key": "d",
        "text": "culoare galbenă de dimensiunile 20x10x5 cm."
      }
    ],
    "correct": "b"
  },
  {
    "id": 60,
    "sourceNo": "060",
    "text": "În conformitate cu Legii nr. 38/2003 cu modificările şi completările ulterioare lista din interiorul taxiului cu informaţii privind titularul autorizaţiei taxi , tarifele de distanţă, de staţionare şi de pornire pe timp de zi şi pe timp de noapte trebuie să mai cuprindă:",
    "answers": [
      {
        "key": "a",
        "text": "fotografia conducătorului;"
      },
      {
        "key": "b",
        "text": "ştampila companiei taxi sau a taximetristului independent;"
      },
      {
        "key": "c",
        "text": "ştampila primăriei localităţii de autorizare;"
      },
      {
        "key": "d",
        "text": "numele şi prenumele conducătorului auto, precum şi seria şi numărul certificatului de atestare profesională."
      }
    ],
    "correct": "c"
  },
  {
    "id": 61,
    "sourceNo": "061",
    "text": "Serviciile de dispecerat sunt obligatorii pentru toate taxiurile transportatorilor autorizaţi, care îşi desfăşoară activitatea într-o localitate cu excepţia:",
    "answers": [
      {
        "key": "a",
        "text": "localităţilor unde s-au atribuit mai puţin de 100 de autorizaţii taxi;"
      },
      {
        "key": "b",
        "text": "taximetriştilor independenţi indiferent de localitate;"
      },
      {
        "key": "c",
        "text": "companiilor taxi care nu au mai mult de 10 autoturisme taxi;"
      },
      {
        "key": "d",
        "text": "localităţilor care nu depăşesc 50.000 de locuitori."
      }
    ],
    "correct": "a"
  },
  {
    "id": 62,
    "sourceNo": "062",
    "text": "Care dintre următoarele afirmaţii corespunde prevederilor Legii nr. 38/2003 cu modificările şi completările ulterioare privind portul centurii de siguranţă de către conducătorii autovehiculelor taxi?",
    "answers": [
      {
        "key": "a",
        "text": "este obligatoriu în toate cazurile;"
      },
      {
        "key": "b",
        "text": "este obligatoriu în poziţiile de operare liber, ocupat şi privat ale taxiului;"
      },
      {
        "key": "c",
        "text": "este obligatoriu pentru poziţia de operare ocupat a taxiului;"
      },
      {
        "key": "d",
        "text": "este obligatoriu când circulă fără client şi opţional în restul cazurilor."
      }
    ],
    "correct": "d"
  },
  {
    "id": 63,
    "sourceNo": "063",
    "text": "Modificarea tarifelor sau a cotei T.V.A în aparatul de taxat înainte de obţinerea raportului fiscal de golire zilnică este:",
    "answers": [
      {
        "key": "a",
        "text": "o funcţie curentă şi obligatorie a aparatului de taxat, taximetristul fiind obligat prin lege să efectueze modificări înaintea obţinerii raportului fiscal zilnic;"
      },
      {
        "key": "b",
        "text": "o funcţie interzisă a aparatului de taxat, modificările înaintea obţinerii raportului fiscal zilnic, constituind o abatere gravă;"
      },
      {
        "key": "c",
        "text": "o funcţie opţională a aparatului de taxat;"
      },
      {
        "key": "d",
        "text": "o funcţie de control a aparatului de taxat, utilizată numai de către organele de control, abilitate să efectueze control asupra acestora."
      }
    ],
    "correct": "b"
  },
  {
    "id": 64,
    "sourceNo": "064",
    "text": "Autovehiculele destinate transportului în regim de taxi, trebuie să fie deţinute de către compania taxi sau taximetristul independent:",
    "answers": [
      {
        "key": "a",
        "text": "cu contract de închiriere;"
      },
      {
        "key": "b",
        "text": "numai cu titlu de proprietate;"
      },
      {
        "key": "c",
        "text": "cu titlu de proprietate sau contract de leasing;"
      },
      {
        "key": "d",
        "text": "cu contract de comodat."
      }
    ],
    "correct": "c"
  },
  {
    "id": 65,
    "sourceNo": "065",
    "text": "În cazul în care aparatul de taxat funcţionează în modul de calcul normal S, taximetristul poate adăuga:",
    "answers": [
      {
        "key": "a",
        "text": "tarif suplimentar pentru alegerea celui mai scurt traseu posibil;"
      },
      {
        "key": "b",
        "text": "tarif suplimentar pentru promtitudinea sosirii la adresa solicitată către dispecerat şi transmisă taximetristului;"
      },
      {
        "key": "c",
        "text": "tarif suplimentar pentru manipularea bagajelor clientului, dacă este cazul;"
      },
      {
        "key": "d",
        "text": "tarif suplimentar pentru o cursă cu mai multe persoane."
      }
    ],
    "correct": "c"
  },
  {
    "id": 66,
    "sourceNo": "066",
    "text": "Viteza de comutare este:",
    "answers": [
      {
        "key": "a",
        "text": "viteza de deplasare a autovehiculului în localitate;"
      },
      {
        "key": "b",
        "text": "viteza de deplasare la care taximetrul trece din poziţia liber în poziţia ocupat;"
      },
      {
        "key": "c",
        "text": "viteza de deplasare la care taximetrul comută de pe tarif de distanţă pe tarif km/oră;"
      },
      {
        "key": "d",
        "text": "viteza limită cu care se deplasează taxiul, sub care aparatul de taxat comută automat tarifarea distanţei parcurse cu tarifarea timpului consumat."
      }
    ],
    "correct": "d"
  },
  {
    "id": 67,
    "sourceNo": "067",
    "text": "În ce momente se aplică tariful de staţionare?",
    "answers": [
      {
        "key": "a",
        "text": "atunci când staţionaţi în aşteptarea unor clienţi;"
      },
      {
        "key": "b",
        "text": "atunci când staţionaţi cu un client dar şi atunci când rulaţi cu un client sub viteza de comutare;"
      },
      {
        "key": "c",
        "text": "se aplică numai pe timp de noapte şi doar atunci când staţionaţi cu un client;"
      },
      {
        "key": "d",
        "text": "se aplică doar în afara localităţii de autorizare, atunci când rulaţi cu un client sub viteza de comutare."
      }
    ],
    "correct": "b"
  },
  {
    "id": 68,
    "sourceNo": "068",
    "text": "Numărul cursei, tariful de pornire, tariful de distanţă, distanţa parcursă (km) trebuie să figureze obligatoriu în:",
    "answers": [
      {
        "key": "a",
        "text": "bonul client;"
      },
      {
        "key": "b",
        "text": "raportul de activitate zilnică;"
      },
      {
        "key": "c",
        "text": "raportul fiscal;"
      },
      {
        "key": "d",
        "text": "lista din interiorul autovehiculului taxi."
      }
    ],
    "correct": "a"
  },
  {
    "id": 69,
    "sourceNo": "069",
    "text": "La verificarea metrologică se eliberează obligatoriu:",
    "answers": [
      {
        "key": "a",
        "text": "aprobarea de model pentru aparatul de taxat;"
      },
      {
        "key": "b",
        "text": "certificatul de atestare metrologică;"
      },
      {
        "key": "c",
        "text": "buletin de verificare metrologică;"
      },
      {
        "key": "d",
        "text": "buletin de analiză metrologică."
      }
    ],
    "correct": "c"
  },
  {
    "id": 70,
    "sourceNo": "070",
    "text": "Autorizaţia taxi poate fi suspendată pe o perioadă de la 1-3 luni pentru:",
    "answers": [
      {
        "key": "a",
        "text": "a expirat valabilitatea inspecţiei tehnice periodice a autovehiculului;"
      },
      {
        "key": "b",
        "text": "autorizaţia a fost obţinută pe baza unor documente false;"
      },
      {
        "key": "c",
        "text": "autorizaţia a fost reţinută de 2 ori în ultimele 12 luni;"
      },
      {
        "key": "d",
        "text": "conducătorul auto nu şi-a vizat la termen atestatul profesional."
      }
    ],
    "correct": "a"
  },
  {
    "id": 71,
    "sourceNo": "071",
    "text": "La trecerea prin intersecţiile nedirijate din interiorul localităţilor viteza de deplasare trebuie să fie:",
    "answers": [
      {
        "key": "a",
        "text": "30 km/h;"
      },
      {
        "key": "b",
        "text": "40 km/h;"
      },
      {
        "key": "c",
        "text": "50 km/h;"
      },
      {
        "key": "d",
        "text": "nefiind reglementată o valoare a vitezei de circulaţie, aceasta trebuie redusă până la limita evitării oricărui pericol."
      }
    ],
    "correct": "a"
  },
  {
    "id": 72,
    "sourceNo": "072",
    "text": "În cazul în care vizibilitatea este redusă sub 100 m în condiţii de ceaţa, ploi torenţiale, ninsori abundente, viteza de circulaţie în localităţi trebuie să fie:",
    "answers": [
      {
        "key": "a",
        "text": "30 km/h;"
      },
      {
        "key": "b",
        "text": "40 km/h;"
      },
      {
        "key": "c",
        "text": "50 km/h;"
      },
      {
        "key": "d",
        "text": "nefiind reglementată o valoare a vitezei de circulaţie, aceasta trebuie redusă până la limita evitării oricărui pericol."
      }
    ],
    "correct": "a"
  },
  {
    "id": 73,
    "sourceNo": "073",
    "text": "În cazul în care vizibilitatea este redusă sub 100 m în condiţii de ceata, ploi torenţiale, ninsori abundente, viteza de circulaţie în afara localităţilor trebuie să fie:",
    "answers": [
      {
        "key": "a",
        "text": "30 km/h;"
      },
      {
        "key": "b",
        "text": "40 km/h;"
      },
      {
        "key": "c",
        "text": "50 km/h;"
      },
      {
        "key": "d",
        "text": "nefiind reglementată o valoare a vitezei de circulaţie, aceasta trebuie redusă până la limita evitării oricărui pericol."
      }
    ],
    "correct": "c"
  },
  {
    "id": 74,
    "sourceNo": "074",
    "text": "Autorizaţia taxi este:",
    "answers": [
      {
        "key": "a",
        "text": "copie conformă a autorizaţiei de transport în regim de taxi;"
      },
      {
        "key": "b",
        "text": "copie conformă a certificatului de competenţă profesională;"
      },
      {
        "key": "c",
        "text": "copie conformă a autorizaţiei de funcţionare;"
      },
      {
        "key": "d",
        "text": "copie conformă a certificatului de înmatriculare."
      }
    ],
    "correct": "a"
  },
  {
    "id": 75,
    "sourceNo": "075",
    "text": "Odată cu autorizaţia taxi şi orice copie conformă se eliberează:",
    "answers": [
      {
        "key": "a",
        "text": "certificatul de agreere;"
      },
      {
        "key": "b",
        "text": "autorizaţia de dispecerat;"
      },
      {
        "key": "c",
        "text": "două ecusoane cu aceiaşi valabilitate cu autorizaţia taxi;"
      },
      {
        "key": "d",
        "text": "autorizaţia de funcţionare."
      }
    ],
    "correct": "c"
  },
  {
    "id": 76,
    "sourceNo": "076",
    "text": "Lipsa ecusoanelor emise odată cu autorizaţia taxi şi orice copie conformă, de la bordul autovehiculului taxi duce la:",
    "answers": [
      {
        "key": "a",
        "text": "suspendarea autorizaţiei taxi pentru o perioadă de la 1 la 3 luni;"
      },
      {
        "key": "b",
        "text": "reţinerea autorizaţiei taxi pe termen nelimitat;"
      },
      {
        "key": "c",
        "text": "reţinerea autorizaţiei taxi până se face dovada existenţei ecusoanelor;"
      },
      {
        "key": "d",
        "text": "amendă penală."
      }
    ],
    "correct": "c"
  },
  {
    "id": 77,
    "sourceNo": "077",
    "text": "Pentru a putea efectua transport de persoane în regim de taxi, conducătorul auto trebuie să aibă permis de conducere categoria B valabil, cu o vechime de:",
    "answers": [
      {
        "key": "a",
        "text": "minim 6 luni;"
      },
      {
        "key": "b",
        "text": "minim 1 an;"
      },
      {
        "key": "c",
        "text": "minim 2 ani;"
      },
      {
        "key": "d",
        "text": "minim 3 ani."
      }
    ],
    "correct": "c"
  },
  {
    "id": 78,
    "sourceNo": "078",
    "text": "Dacă în derularea cursei se constată încetarea înregistrării valorilor în modulul fiscal al aparatului de taxat, taximetristul va solicita:",
    "answers": [
      {
        "key": "a",
        "text": "plata serviciului făcând o estimare a sumei rămase de încasat plus suma afişată de aparatul de taxat;"
      },
      {
        "key": "b",
        "text": "plata serviciului în limita valorii afişate de aparatul de taxat cu transportul clientului până la destinaţie;"
      },
      {
        "key": "c",
        "text": "plata serviciului în limita valorii afişate de aparatul de taxat, plus o sumă stabilită de comun acord între pasager şi conducătorul autovehiculului taxi pentru restul parcursului de efectuat;"
      },
      {
        "key": "d",
        "text": "taximetristul are obligaţia de a oprii autoturismul, de a încasa suma afişată de aparatul de taxat, urmând ca pasagerul să ajungă la destinaţie cu un alt taxi."
      }
    ],
    "correct": "b"
  },
  {
    "id": 79,
    "sourceNo": "079",
    "text": "Pentru autoturismele taxi volumul portbagajului util, echiparea cu instalaţie de aer condiţionat, existenţa airbag-lor pentru pasagerul din faţă/pasagerii din spate sunt menţionate în:",
    "answers": [
      {
        "key": "a",
        "text": "autorizaţia taxi;"
      },
      {
        "key": "b",
        "text": "certificatul de agreare;"
      },
      {
        "key": "c",
        "text": "copia conformă a autorizaţiei taxi;"
      },
      {
        "key": "d",
        "text": "cartea de identitate a vehiculului."
      }
    ],
    "correct": "b"
  },
  {
    "id": 80,
    "sourceNo": "080",
    "text": "Pentru a controla un derapaj, va trebui să:",
    "answers": [
      {
        "key": "a",
        "text": "nu acceleraţi, nu frânaţi, contrabracaţi roţile;"
      },
      {
        "key": "b",
        "text": "frânaţi progresiv autovehiculul;"
      },
      {
        "key": "c",
        "text": "nu acceleraţi, frânaţi progresiv si contrabracaţi roţile;"
      },
      {
        "key": "d",
        "text": "rotiţi volanul până când roţile directoare devin paralele cu axa longitudinală a autovehiculului."
      }
    ],
    "correct": "a"
  },
  {
    "id": 81,
    "sourceNo": "081",
    "text": "A conduce preventiv înseamnă:",
    "answers": [
      {
        "key": "a",
        "text": "să conduci cu viteză constantă;"
      },
      {
        "key": "b",
        "text": "să atenţionezi ceilalţi participanţi la trafic privind greşelile făcute;"
      },
      {
        "key": "c",
        "text": "să respecţi regulile de circulaţie pe drumurile publice;"
      },
      {
        "key": "d",
        "text": "să anticipezi situaţiile ce pot deveni periculoase."
      }
    ],
    "correct": "d"
  },
  {
    "id": 82,
    "sourceNo": "082",
    "text": "Ordinea de intervenţie pentru acordare primului ajutor unei persoane care a suferit mai multe leziuni este:",
    "answers": [
      {
        "key": "a",
        "text": "degajarea cailor respiratorii, oprirea hemoragiilor, imobilizarea fracturilor;"
      },
      {
        "key": "b",
        "text": "imobilizarea fracturilor, degajarea cailor respiratorii si oprirea hemoragiilor;"
      },
      {
        "key": "c",
        "text": "oprirea hemoragiilor, degajarea cailor respiratorii si imobilizarea fracturilor;"
      },
      {
        "key": "d",
        "text": "nu are importanţă;"
      }
    ],
    "correct": "a"
  },
  {
    "id": 83,
    "sourceNo": "083",
    "text": "Prin distanţa de oprire înţelegem:",
    "answers": [
      {
        "key": "a",
        "text": "suma dintre distanţa de reacţie şi distanţa de frânare;"
      },
      {
        "key": "b",
        "text": "distanţa de frânare până la oprire;"
      },
      {
        "key": "c",
        "text": "distanţa parcursă din momentul acţionării pedalei de frână până la oprire;"
      },
      {
        "key": "d",
        "text": "distanţa parcursă între momentul sesizării obstacolului şi acţionarea pedalei de frână."
      }
    ],
    "correct": "a"
  },
  {
    "id": 84,
    "sourceNo": "084",
    "text": "Autorizaţia taxi obţinută pentru prima dată, pentru un autovehicul se va prelungi:",
    "answers": [
      {
        "key": "a",
        "text": "pe termen nelimitat, cu condiţia ca autovehiculul să corespundă normelor în vigoare în materie de securitate;"
      },
      {
        "key": "b",
        "text": "pentru 3 ani cu condiţia ca autovehiculul să nu depăşească 200.000 de km parcurşi;"
      },
      {
        "key": "c",
        "text": "la cerere, o singură dată pentru 5 ani, dacă în acel moment autovehiculul nu depăşeşte 10 ani de la data fabricaţiei;"
      },
      {
        "key": "d",
        "text": "pentru 10 ani cu vize anuale;"
      }
    ],
    "correct": "c"
  },
  {
    "id": 85,
    "sourceNo": "085",
    "text": "Autorizaţia taxi este:",
    "answers": [
      {
        "key": "a",
        "text": "transmisibilă de la un vehicul la altul"
      },
      {
        "key": "b",
        "text": "transmisibilă de la o firmă la alta"
      },
      {
        "key": "c",
        "text": "unică şi netransmisibilă"
      },
      {
        "key": "d",
        "text": "transmisibilă de la o persoană fizică la alta"
      }
    ],
    "correct": "c"
  },
  {
    "id": 86,
    "sourceNo": "086",
    "text": "Pentru a practica transportul de persoane în regim de taxi conducătorul auto trebuie să nu fi avut suspendat dreptul de a conduce autovehicule pentru conducerea sub influenţa alcoolului sau a substanţelor stupefiante sau pentru implicarea în accidente soldate cu victime, din culpa lor, în ultimele:",
    "answers": [
      {
        "key": "a",
        "text": "6 luni;"
      },
      {
        "key": "b",
        "text": "3 luni;"
      },
      {
        "key": "c",
        "text": "9 luni;"
      },
      {
        "key": "d",
        "text": "12 luni."
      }
    ],
    "correct": "d"
  },
  {
    "id": 87,
    "sourceNo": "087",
    "text": "Autorizaţia taxi poate fi suspendată, o dată cu ecusoanele aferente, pentru:",
    "answers": [
      {
        "key": "a",
        "text": "imposibilitatea dovedirii existenţei sau valabilităţii ecusoanelor"
      },
      {
        "key": "b",
        "text": "când vehiculul este deţinut cu contract de închiriere"
      },
      {
        "key": "c",
        "text": "întârzierea cu mai mult de 15 zile la vizarea anuală a atestatului"
      },
      {
        "key": "d",
        "text": "plata serviciului în regim de taxi nu s-a realizat pe baza bonului client eliberat corespunzător."
      }
    ],
    "correct": "d"
  },
  {
    "id": 88,
    "sourceNo": "088",
    "text": "Asigurarea persoanelor şi a bunurilor acestora pentru riscurile ce cad în sarcina transportatorului autorizat trebuie să se afle:",
    "answers": [
      {
        "key": "a",
        "text": "la bordul autovehiculului;"
      },
      {
        "key": "b",
        "text": "la sediul transportatorului autorizat;"
      },
      {
        "key": "c",
        "text": "la sediul/domiciliul proprietarului autovehiculului;"
      },
      {
        "key": "d",
        "text": "la autoritatea de autorizare."
      }
    ],
    "correct": "a"
  },
  {
    "id": 89,
    "sourceNo": "089",
    "text": "Care din următoarele sancţiuni aplicate salariatului este corectă:",
    "answers": [
      {
        "key": "a",
        "text": "neplata integrală a salariului pe o perioadă de 1 – 3 luni;"
      },
      {
        "key": "b",
        "text": "avertisment verbal;"
      },
      {
        "key": "c",
        "text": "suspendarea contractului individual de muncă pe o perioadă de 3 – 6 luni;"
      },
      {
        "key": "d",
        "text": "desfacerea disciplinară a contractului individual de muncă."
      }
    ],
    "correct": "d"
  },
  {
    "id": 90,
    "sourceNo": "090",
    "text": "Autorizaţia taxi poate fi retrasă în următoarele cazuri:",
    "answers": [
      {
        "key": "a",
        "text": "dacă conducătorul auto nu deţine atestat profesional sau atestatul are valabilitatea depăşită;"
      },
      {
        "key": "b",
        "text": "a expirat valabilitatea inspecţiei periodice;"
      },
      {
        "key": "c",
        "text": "transportul se efectuează fără documente de plată;"
      },
      {
        "key": "d",
        "text": "plata nu s-a realizat pe baza bonului client."
      }
    ],
    "correct": "a"
  },
  {
    "id": 91,
    "sourceNo": "091",
    "text": "Este interzis transportul persoanelor în regim de taxi:",
    "answers": [
      {
        "key": "a",
        "text": "permanent, în interiorul localităţii de autorizare;"
      },
      {
        "key": "b",
        "text": "ocazional, între localitatea de autorizare şi alte localităţi sau puncte de interes;"
      },
      {
        "key": "c",
        "text": "pe trasee fixe, prestabilite de taximetrist, care depăşesc localitatea de autorizare;"
      },
      {
        "key": "d",
        "text": "ocazional, între localitatea de autorizare şi alte localităţi de peste frontieră."
      }
    ],
    "correct": "c"
  },
  {
    "id": 92,
    "sourceNo": "092",
    "text": "Furtul de obiecte din vehicul este frecvent:",
    "answers": [
      {
        "key": "a",
        "text": "în oraşele mari"
      },
      {
        "key": "b",
        "text": "în prezenţa clientului"
      },
      {
        "key": "c",
        "text": "în garajul firmei de taximetrie"
      },
      {
        "key": "d",
        "text": "în staţiile de alimentare cu combustibil"
      }
    ],
    "correct": "a"
  },
  {
    "id": 93,
    "sourceNo": "093",
    "text": "Pentru a controla un derapaj va trebui să:",
    "answers": [
      {
        "key": "a",
        "text": "acţionaţi volanul în direcţia în care a derapat autovehiculul"
      },
      {
        "key": "b",
        "text": "frânaţi progresiv"
      },
      {
        "key": "c",
        "text": "opriţi acceleraţia, nu frânaţi şi acţionaţi volanul fără bruscare în direcţia în care a derapat autovehiculul"
      },
      {
        "key": "d",
        "text": "frânaţi şi acţionaţi volanul în direcţia opusă celei în care a derapat autovehiculul"
      }
    ],
    "correct": "c"
  },
  {
    "id": 94,
    "sourceNo": "094",
    "text": "De ce este necesar să se păstreze după o ploaie torenţială o distanţă mult mai mare faţă de autovehiculele care circulă din faţă:",
    "answers": [
      {
        "key": "a",
        "text": "deoarece distanţa de oprire este mult mai mare (aproape dublă faţă de carosabilul uscat)"
      },
      {
        "key": "b",
        "text": "în asemenea condiţii nu apare nici un pericol"
      },
      {
        "key": "c",
        "text": "distanţa de oprire în siguranţă nu se modifică faţă de carosabilul uscat"
      },
      {
        "key": "d",
        "text": "pentru că vizibilitatea este diminuată"
      }
    ],
    "correct": "a"
  },
  {
    "id": 95,
    "sourceNo": "095",
    "text": "Buletinul de verificare metrologică pentru aparatul de taxat va trebui să se găsească:",
    "answers": [
      {
        "key": "a",
        "text": "la bordul autovehiculului, în copie"
      },
      {
        "key": "b",
        "text": "la bordul autovehiculului, în original"
      },
      {
        "key": "c",
        "text": "la sediul operatorului de taxi, în original"
      },
      {
        "key": "d",
        "text": "la domiciliul taximetristului, în original"
      }
    ],
    "correct": "a"
  },
  {
    "id": 96,
    "sourceNo": "096",
    "text": "Certificatul de agreare pentru vehiculul taxi, emis de RAR pentru 10 ani, valabil cu viză anuală, se va găsi la bord:",
    "answers": [
      {
        "key": "a",
        "text": "în original"
      },
      {
        "key": "b",
        "text": "în copie legalizată"
      },
      {
        "key": "c",
        "text": "în copie conformă cu originalul"
      },
      {
        "key": "d",
        "text": "în copie"
      }
    ],
    "correct": "d"
  },
  {
    "id": 97,
    "sourceNo": "097",
    "text": "Permisul de conducere poate fi reţinut:",
    "answers": [
      {
        "key": "a",
        "text": "când termenul de valabilitate a expirat"
      },
      {
        "key": "b",
        "text": "pentru comiterea de fapte contravenţionale repetate"
      },
      {
        "key": "c",
        "text": "la schimbarea stării civile"
      },
      {
        "key": "d",
        "text": "la cumularea a cel puţin 10 puncte de penalizare într-un an"
      }
    ],
    "correct": "a"
  },
  {
    "id": 98,
    "sourceNo": "098",
    "text": "Pentru a putea practica transportul de persoane în regim de taxi, conducătorul auto trebuie să deţină permis de conducere categoria B valabil, cu o vechime de cel puţin 2 ani şi:",
    "answers": [
      {
        "key": "a",
        "text": "să aibă vârsta de cel puţin 25 ani"
      },
      {
        "key": "b",
        "text": "să fie apt medical şi psihologic"
      },
      {
        "key": "c",
        "text": "să aibă practică în conducere de cel puţin un an"
      },
      {
        "key": "d",
        "text": "să prezinte diploma de absolvire a minimum 10 clase"
      }
    ],
    "correct": "b"
  },
  {
    "id": 99,
    "sourceNo": "099",
    "text": "Care este durata normală a timpului de muncă pe zi:",
    "answers": [
      {
        "key": "a",
        "text": "10 ore"
      },
      {
        "key": "b",
        "text": "8 ore"
      },
      {
        "key": "c",
        "text": "12 ore"
      },
      {
        "key": "d",
        "text": "6 ore"
      }
    ],
    "correct": "b"
  },
  {
    "id": 100,
    "sourceNo": "100",
    "text": "Autorizaţia de transport în regim de taxi se eliberează pentru o durată:",
    "answers": [
      {
        "key": "a",
        "text": "nedeterminată şi este valabilă cu viza la 5 ani"
      },
      {
        "key": "b",
        "text": "de 5 ani"
      },
      {
        "key": "c",
        "text": "de 5 ani cu viză anuală"
      },
      {
        "key": "d",
        "text": "de un an"
      }
    ],
    "correct": "a"
  },
  {
    "id": 101,
    "sourceNo": "101",
    "text": "Care dintre documentele de mai jos se va găsi obligatoriu la bord, în original:",
    "answers": [
      {
        "key": "a",
        "text": "autorizaţia de transport"
      },
      {
        "key": "b",
        "text": "licenţa de transport"
      },
      {
        "key": "c",
        "text": "autorizaţia taxi"
      },
      {
        "key": "d",
        "text": "licenţa taxi"
      }
    ],
    "correct": "c"
  },
  {
    "id": 102,
    "sourceNo": "102",
    "text": "Autorizaţia taxi poate fi suspendată, o dată cu ecusoanele aferente, pentru:",
    "answers": [
      {
        "key": "a",
        "text": "un an"
      },
      {
        "key": "b",
        "text": "definitiv"
      },
      {
        "key": "c",
        "text": "1-3 luni"
      },
      {
        "key": "d",
        "text": "30 de zile"
      }
    ],
    "correct": "c"
  },
  {
    "id": 103,
    "sourceNo": "103",
    "text": "Părăsirea locului accidentului, fără încuviinţare, de către conducătorul oricărui vehicul angajat într-un accident în urma căruia a rezultat uciderea sau vătămarea integrităţii corporale ori a sănătăţii uneia sau mai multor persoane se pedepseşte cu:",
    "answers": [
      {
        "key": "a",
        "text": "amendă contravenţională şi anularea permisului de conducere"
      },
      {
        "key": "b",
        "text": "închisoare şi anularea permisului de conducere"
      },
      {
        "key": "c",
        "text": "numai amendă penală"
      },
      {
        "key": "d",
        "text": "numai închisoare"
      }
    ],
    "correct": "b"
  },
  {
    "id": 104,
    "sourceNo": "104",
    "text": "Autorizaţia taxi poate fi retrasă dacă:",
    "answers": [
      {
        "key": "a",
        "text": "se aplică pe caseta taxi alte înscrisuri decât cele legale"
      },
      {
        "key": "b",
        "text": "se întrebuinţează pentru alt autovehicul decât cel pentru care a fost atribuită"
      },
      {
        "key": "c",
        "text": "sunt încălcate prevederile legale privind modul de tarifare a serviciului şi defavorizează clientul"
      },
      {
        "key": "d",
        "text": "a expirat valabilitatea inspecţiei periodice"
      }
    ],
    "correct": "b"
  },
  {
    "id": 105,
    "sourceNo": "105",
    "text": "Care este porţiunea de drum de pe itinerariul pe care îl aveţi de străbătut, pe care trebuie să conduceţi cu atenţie:",
    "answers": [
      {
        "key": "a",
        "text": "porţiunea care străbate zone de munte, cu serpentine"
      },
      {
        "key": "b",
        "text": "porţiunea cu trafic aglomerat"
      },
      {
        "key": "c",
        "text": "întreg itinerariul"
      },
      {
        "key": "d",
        "text": "porţiunea de trafic urban"
      }
    ],
    "correct": "c"
  },
  {
    "id": 106,
    "sourceNo": "106",
    "text": "Anularea permisului de conducere se dispune atunci când:",
    "answers": [
      {
        "key": "a",
        "text": "titularul a fost condamnat definitiv la pedeapsa complementară interzicerii exercitării profesiei sau ocupaţiei de conducător auto"
      },
      {
        "key": "b",
        "text": "titularul şi-a modificat numele"
      },
      {
        "key": "c",
        "text": "a fost suspendat de trei ori"
      },
      {
        "key": "d",
        "text": "organele de poliţie consideră necesar"
      }
    ],
    "correct": "a"
  },
  {
    "id": 107,
    "sourceNo": "107",
    "text": "Care este durata maximă a timpului de lucru pe săptămână:",
    "answers": [
      {
        "key": "a",
        "text": "36 de ore"
      },
      {
        "key": "b",
        "text": "40 de ore"
      },
      {
        "key": "c",
        "text": "50 de ore"
      },
      {
        "key": "d",
        "text": "48 de ore"
      }
    ],
    "correct": "d"
  },
  {
    "id": 108,
    "sourceNo": "108",
    "text": "Care sunt părţile componente ale unei staţii radio mobile de emisie-recepţie:",
    "answers": [
      {
        "key": "a",
        "text": "staţia de emisie-recepţie propriu-zisă, microfon şi antenă"
      },
      {
        "key": "b",
        "text": "taximetru, microfon şi antenă"
      },
      {
        "key": "c",
        "text": "microfon-emiţător şi antenă"
      },
      {
        "key": "d",
        "text": "telefon mobil, microfon şi antenă"
      }
    ],
    "correct": "a"
  },
  {
    "id": 109,
    "sourceNo": "109",
    "text": "Transportul persoanelor în regim de taxi pe trasee fixe, prestabilite de taximetrist, care depăşesc localitatea de autorizare, este:",
    "answers": [
      {
        "key": "a",
        "text": "recomandat"
      },
      {
        "key": "b",
        "text": "permis"
      },
      {
        "key": "c",
        "text": "interzis"
      },
      {
        "key": "d",
        "text": "obligatoriu"
      }
    ],
    "correct": "c"
  },
  {
    "id": 110,
    "sourceNo": "110",
    "text": "În lipsa locurilor de aşteptare a clienţilor, taxiurile pot staţiona:",
    "answers": [
      {
        "key": "a",
        "text": "numai în parcările amenajate"
      },
      {
        "key": "b",
        "text": "pe întreaga suprafaţă carosabilă"
      },
      {
        "key": "c",
        "text": "numai în locurile premise pentru autovehicule"
      },
      {
        "key": "d",
        "text": "numai pe trotuare"
      }
    ],
    "correct": "c"
  },
  {
    "id": 111,
    "sourceNo": "111",
    "text": "Se interzice transportul pe o singură cursă a mai mult de:",
    "answers": [
      {
        "key": "a",
        "text": "4 clienţi"
      },
      {
        "key": "b",
        "text": "1 client, astfel cum este definit acesta la art. 6 lit. e din Legea 38/2003"
      },
      {
        "key": "c",
        "text": "2 clienţi"
      },
      {
        "key": "d",
        "text": "3 clienţi"
      }
    ],
    "correct": "b"
  },
  {
    "id": 112,
    "sourceNo": "112",
    "text": "Clientul este:",
    "answers": [
      {
        "key": "a",
        "text": "persoana care a angajat, direct sau prin dispecer, transportul unor persoane care plăteşte întreaga contravaloare înscrisă în bonul-client"
      },
      {
        "key": "b",
        "text": "fiecare persoană aflată într-un taxi"
      },
      {
        "key": "c",
        "text": "toate persoanele din taxi care îşi plătesc separate transportul"
      },
      {
        "key": "d",
        "text": "numai persoana care angajează, direct din staţie un taxi"
      }
    ],
    "correct": "a"
  },
  {
    "id": 113,
    "sourceNo": "113",
    "text": "Evaluarea costului transportului de persoane în regim de taxi poate fi realizată în funcţie de:",
    "answers": [
      {
        "key": "a",
        "text": "numărul persoanelor transportate"
      },
      {
        "key": "b",
        "text": "felul bunurilor transportate"
      },
      {
        "key": "c",
        "text": "distanţa parcursă şi timpul cronometrat consumat"
      },
      {
        "key": "d",
        "text": "starea drumurilor pe care se execută cursa"
      }
    ],
    "correct": "c"
  },
  {
    "id": 114,
    "sourceNo": "114",
    "text": "Regulile generale privind modul de stabilire a tarifelor sunt:",
    "answers": [
      {
        "key": "a",
        "text": "numărul persoanelor transportate"
      },
      {
        "key": "b",
        "text": "tariful pe distanţă, lei/km şi tariful pe timp, lei/oră, în funcţie de caracteristicile tehnice şi de capacitatea de transport maximă autorizată a autovehiculelor respective"
      },
      {
        "key": "c",
        "text": "nivelul de confort în cazul transporturilor de bunuri"
      },
      {
        "key": "d",
        "text": "gradul de dificultate a traseului"
      }
    ],
    "correct": "b"
  },
  {
    "id": 115,
    "sourceNo": "115",
    "text": "Răspunderea taximetristului independent pentru daunele produse clienţilor în timpul transportului din vina sa este:",
    "answers": [
      {
        "key": "a",
        "text": "integrală"
      },
      {
        "key": "b",
        "text": "solidară cu a clientului"
      },
      {
        "key": "c",
        "text": "solidară cu a operatorului la care este afiliat"
      },
      {
        "key": "d",
        "text": "acoperită numai de asigurarea CASCO"
      }
    ],
    "correct": "a"
  },
  {
    "id": 116,
    "sourceNo": "116",
    "text": "Dotarea vehiculului şi cu dispozitive sonore pentru semnalizarea manevrei de mers înapoi este:",
    "answers": [
      {
        "key": "a",
        "text": "obligatorie"
      },
      {
        "key": "b",
        "text": "recomandată"
      },
      {
        "key": "c",
        "text": "interzisă"
      },
      {
        "key": "d",
        "text": "neprevăzută de lege"
      }
    ],
    "correct": "b"
  },
  {
    "id": 117,
    "sourceNo": "117",
    "text": "Conducând autovehiculul, pe timp de ploaie, conduita preventivă impune luarea unor măsuri ca:",
    "answers": [
      {
        "key": "a",
        "text": "doar reducerea vitezei, pe toată durata ploii"
      },
      {
        "key": "b",
        "text": "numai folosirea dezaburizatorului de lunetă şi parbriz"
      },
      {
        "key": "c",
        "text": "numai folosirea luminii de întâlnire, ziua, chiar dacă nu plouă torenţial"
      },
      {
        "key": "d",
        "text": "toate celelalte masuri enumerate, plus sporirea atenţiei si anticiparea situaţiilor periculoase"
      }
    ],
    "correct": "d"
  },
  {
    "id": 118,
    "sourceNo": "118",
    "text": "Care sunt sancţiunile contravenţionale principale:",
    "answers": [
      {
        "key": "a",
        "text": "avertismentul şi amenda"
      },
      {
        "key": "b",
        "text": "închisoarea"
      },
      {
        "key": "c",
        "text": "confiscarea autovehiculului"
      },
      {
        "key": "d",
        "text": "imobilizarea autovehiculului"
      }
    ],
    "correct": "a"
  },
  {
    "id": 119,
    "sourceNo": "119",
    "text": "Un membru superior fracturat se imobilizează:",
    "answers": [
      {
        "key": "a",
        "text": "în dreptul osului fracturat"
      },
      {
        "key": "b",
        "text": "astfel încât să cuprindă atât osul fracturat cât şi articulaţia inferioară"
      },
      {
        "key": "c",
        "text": "în aşa fel încât să fie cuprinse osul fracturat, articulaţia inferioară şi articulaţia superioară"
      },
      {
        "key": "d",
        "text": "cu ajutorul unui garou, deasupra osului fracturat"
      }
    ],
    "correct": "c"
  },
  {
    "id": 120,
    "sourceNo": "120",
    "text": "În spiritul conduitei preventive, conducătorii auto trebuie să adapteze viteza autovehiculelor în funcţie de:",
    "answers": [
      {
        "key": "a",
        "text": "starea carosabilului"
      },
      {
        "key": "b",
        "text": "intensitatea circulaţiei"
      },
      {
        "key": "c",
        "text": "condiţiile atmosferice, starea carosabilului, intensitatea circulaţiei şi încărcătura vehiculelor"
      },
      {
        "key": "d",
        "text": "starea sănătăţii lor"
      }
    ],
    "correct": "c"
  },
  {
    "id": 121,
    "sourceNo": "121",
    "text": "Pentru salariaţii angajaţi cu normă întreagă durata normală a timpului de muncă pe zi este de:",
    "answers": [
      {
        "key": "a",
        "text": "10 ore"
      },
      {
        "key": "b",
        "text": "8 ore"
      },
      {
        "key": "c",
        "text": "6 ore"
      },
      {
        "key": "d",
        "text": "12 ore"
      }
    ],
    "correct": "b"
  },
  {
    "id": 122,
    "sourceNo": "122",
    "text": "Durata maximă legală a timpului de muncă pe săptămână, pentru salariaţii angajaţi cu normă întreagă, inclusiv orele suplimentare, nu poate depăşi:",
    "answers": [
      {
        "key": "a",
        "text": "40 ore"
      },
      {
        "key": "b",
        "text": "48 ore"
      },
      {
        "key": "c",
        "text": "44 ore"
      },
      {
        "key": "d",
        "text": "46 ore"
      }
    ],
    "correct": "b"
  },
  {
    "id": 123,
    "sourceNo": "123",
    "text": "Eliberarea certificatului de agreare pentru autovehiculele destinate transportului de persoane sau de bunuri în regim de taxi se face de:",
    "answers": [
      {
        "key": "a",
        "text": "ARR"
      },
      {
        "key": "b",
        "text": "poliţie"
      },
      {
        "key": "c",
        "text": "RAR"
      },
      {
        "key": "d",
        "text": "Administraţia locală"
      }
    ],
    "correct": "c"
  },
  {
    "id": 124,
    "sourceNo": "124",
    "text": "Taximetristul este obligat să asigure protecţia clientului:",
    "answers": [
      {
        "key": "a",
        "text": "încă din momentul efectuării comenzii"
      },
      {
        "key": "b",
        "text": "cât timp acesta se află lângă taxi"
      },
      {
        "key": "c",
        "text": "cât timp acesta se găseşte în taxi"
      },
      {
        "key": "d",
        "text": "legal nu are nici o obligaţie"
      }
    ],
    "correct": "c"
  },
  {
    "id": 125,
    "sourceNo": "125",
    "text": "Care dintre următoarele sancţiuni aplicate salariatului este corectă:",
    "answers": [
      {
        "key": "a",
        "text": "desfacerea disciplinară a contractului individual de muncă"
      },
      {
        "key": "b",
        "text": "avertismentul verbal"
      },
      {
        "key": "c",
        "text": "suspendarea contractului individual de muncă pe o perioadă de 3-6 luni"
      },
      {
        "key": "d",
        "text": "neplata integrală a salariului pe o perioadă de 1-3 luni"
      }
    ],
    "correct": "a"
  },
  {
    "id": 126,
    "sourceNo": "126",
    "text": "Care sunt tipurile de asigurări obligatorii:",
    "answers": [
      {
        "key": "a",
        "text": "asigurarea de răspundere civilă auto, asigurarea de persoane şi bagaje"
      },
      {
        "key": "b",
        "text": "asigurarea CASCO"
      },
      {
        "key": "c",
        "text": "numai asigurarea de răspundere civilă auto"
      },
      {
        "key": "d",
        "text": "numai asigurarea de persoane"
      }
    ],
    "correct": "a"
  },
  {
    "id": 127,
    "sourceNo": "127",
    "text": "Factorii care influenţează negativ stare fizică şi psihică a conducătorului auto sunt:",
    "answers": [
      {
        "key": "a",
        "text": "numai eforturile prelungite"
      },
      {
        "key": "b",
        "text": "numai consumul de alcool"
      },
      {
        "key": "c",
        "text": "alcoolul, oboseala, medicamentele contraindicate şi drogurile"
      },
      {
        "key": "d",
        "text": "numai conducerea pe timp de noapte"
      }
    ],
    "correct": "c"
  },
  {
    "id": 128,
    "sourceNo": "128",
    "text": "Contractul individual de muncă poate fi suspendat:",
    "answers": [
      {
        "key": "a",
        "text": "nu"
      },
      {
        "key": "b",
        "text": "da, dar numai cu acordul părţilor"
      },
      {
        "key": "c",
        "text": "în nici o situaţie"
      },
      {
        "key": "d",
        "text": "da, prin acordul părţilor sau prin actul unilateral al uneia dintre părţi"
      }
    ],
    "correct": "d"
  },
  {
    "id": 129,
    "sourceNo": "129",
    "text": "În cazul în care salariatul săvârşeşte o abatere disciplinară, angajatorului îi este interzis să-i aplice acestuia:",
    "answers": [
      {
        "key": "a",
        "text": "avertismentul scris"
      },
      {
        "key": "b",
        "text": "retrogradarea din funcţie"
      },
      {
        "key": "c",
        "text": "desfacerea disciplinară a contractului de muncă"
      },
      {
        "key": "d",
        "text": "amenzi disciplinare"
      }
    ],
    "correct": "d"
  },
  {
    "id": 130,
    "sourceNo": "130",
    "text": "Contractul individual de muncă se încheie:",
    "answers": [
      {
        "key": "a",
        "text": "în baza consimţământului părţilor, în formă verbală, în limba maternă"
      },
      {
        "key": "b",
        "text": "în baza consimţământului angajatorului în formă verbală, în limba română"
      },
      {
        "key": "c",
        "text": "cu consimţământului numai al angajatului, în formă scrisă, în limba maternă"
      },
      {
        "key": "d",
        "text": "în baza consimţământului părţilor, în formă scrisă, în limba română"
      }
    ],
    "correct": "d"
  },
  {
    "id": 131,
    "sourceNo": "131",
    "text": "Orice salariat care prestează o muncă beneficiază de:",
    "answers": [
      {
        "key": "a",
        "text": "condiţii de muncă adecvate activităţii desfăşurate"
      },
      {
        "key": "b",
        "text": "protecţie socială"
      },
      {
        "key": "c",
        "text": "securitate şi sănătate în muncă"
      },
      {
        "key": "d",
        "text": "toate beneficiile enumerate la celelalte variante si in plus, respectarea demnităţii si a conştiinţei sale"
      }
    ],
    "correct": "d"
  },
  {
    "id": 132,
    "sourceNo": "132",
    "text": "Care dintre următoarele cauze provoacă manevrarea greoaie a volanului unui autovehicul?",
    "answers": [
      {
        "key": "a",
        "text": "defectarea pompei de înaltă presiune (servodirecţie)"
      },
      {
        "key": "b",
        "text": "convergenţă roţilor nereglată"
      },
      {
        "key": "c",
        "text": "presiunea prea mare în pneurile anterioare"
      },
      {
        "key": "d",
        "text": "jocul prea mare în articulaţii"
      }
    ],
    "correct": "a"
  },
  {
    "id": 133,
    "sourceNo": "133",
    "text": "Vigilenţa este:",
    "answers": [
      {
        "key": "a",
        "text": "o îndatorire prevăzută în regulamentul circulaţiei"
      },
      {
        "key": "b",
        "text": "o obligaţie statutară"
      },
      {
        "key": "c",
        "text": "o sancţiune disciplinară"
      },
      {
        "key": "d",
        "text": "un element component al conduitei preventive"
      }
    ],
    "correct": "d"
  },
  {
    "id": 134,
    "sourceNo": "134",
    "text": "Conducătorul auto trebuie să perceapă totul, în timpul conducerii:",
    "answers": [
      {
        "key": "a",
        "text": "numai prin auz"
      },
      {
        "key": "b",
        "text": "numai prin văz"
      },
      {
        "key": "c",
        "text": "numai prin pipăit"
      },
      {
        "key": "d",
        "text": "prin cele 3 simţuri de la celelalte trei variante, plus simţul mirosului"
      }
    ],
    "correct": "d"
  },
  {
    "id": 135,
    "sourceNo": "135",
    "text": "Timpul de reacţie ( intervalul scurs între momentul apariţiei unui semnal până la acţionarea unei comenzi a maşinii), este de:",
    "answers": [
      {
        "key": "a",
        "text": "3 secunde"
      },
      {
        "key": "b",
        "text": "4 secunde"
      },
      {
        "key": "c",
        "text": "0,5-1,5 secunde"
      },
      {
        "key": "d",
        "text": "2 secunde"
      }
    ],
    "correct": "c"
  },
  {
    "id": 136,
    "sourceNo": "136",
    "text": "Oboseala, ca principal factor de risc în conducerea autovehiculului, este determinată de:",
    "answers": [
      {
        "key": "a",
        "text": "numai de odihnă insuficientă înaintea plecării"
      },
      {
        "key": "b",
        "text": "numai de eforturile fizice şi psihice din zilele anterioare plecării"
      },
      {
        "key": "c",
        "text": "conducerea autovehiculului timp îndelungat"
      },
      {
        "key": "d",
        "text": "toţi factorii enumeraţi la celelalte variante, plus suprasolicitarea sistemului nervos si monotonia drumului"
      }
    ],
    "correct": "d"
  },
  {
    "id": 137,
    "sourceNo": "137",
    "text": "Măsuri de conduită preventivă în conducerea autovehiculelor pe timp de ceaţă:",
    "answers": [
      {
        "key": "a",
        "text": "reducerea vitezei"
      },
      {
        "key": "b",
        "text": "folosirea farurilor de ceaţă"
      },
      {
        "key": "c",
        "text": "evitarea opririlor pe carosabil şi a depăşirilor"
      },
      {
        "key": "d",
        "text": "toate masurile enumerate la celelalte variante si chiar întreruperea călătoriei, ieşind în afara carosabilului, daca ceata este foarte densa."
      }
    ],
    "correct": "d"
  },
  {
    "id": 138,
    "sourceNo": "138",
    "text": "Prin expresia “ obstacol previzibil „ se înţelege:",
    "answers": [
      {
        "key": "a",
        "text": "obstacolul (semnalul) observat la limita câmpului de vizibilitate al conducătorului auto"
      },
      {
        "key": "b",
        "text": "obstacolul (semnalul) care ar putea apărea dincolo de sfârşitul segmentului de vizibilitate, pe care conducătorul auto îl intuieşte ( o groapă după o curbă, un vehicul care circulă pe contrasens după un vârf de rampă, etc.)"
      },
      {
        "key": "c",
        "text": "un obstacol apărut în timpul de reacţie"
      },
      {
        "key": "d",
        "text": "un obstacol apărut în timpul frânării efective"
      }
    ],
    "correct": "b"
  },
  {
    "id": 139,
    "sourceNo": "139",
    "text": "Rolul de a face ca, după efectuarea unui viraj, roţile directoare să revină în poziţia iniţială, îl are:",
    "answers": [
      {
        "key": "a",
        "text": "unghiul de convergenţă a roţilor"
      },
      {
        "key": "b",
        "text": "unghiul de fugă"
      },
      {
        "key": "c",
        "text": "unghiul de cădere"
      },
      {
        "key": "d",
        "text": "reglarea divergentă a roţilor motrice"
      }
    ],
    "correct": "b"
  },
  {
    "id": 140,
    "sourceNo": "140",
    "text": "Autoturismelor destinate transporturilor în regim de închiriere le este interzis să fie dotate cu:",
    "answers": [
      {
        "key": "a",
        "text": "aparat de radio"
      },
      {
        "key": "b",
        "text": "geamuri laterale colorate"
      },
      {
        "key": "c",
        "text": "aparate de taxat şi/sau staţii de radio emisie-recepţie"
      },
      {
        "key": "d",
        "text": "dispozitive de avertizare sonoră la mersul înapoi"
      }
    ],
    "correct": "c"
  },
  {
    "id": 141,
    "sourceNo": "141",
    "text": "Inspecţia tehnică a autovehiculelor destinate transportului de persoane sau bunuri în regim de taxi se efectuează:",
    "answers": [
      {
        "key": "a",
        "text": "la cel mult 6 luni într-o staţie de inspecţie tehnică autorizate de R.A.R"
      },
      {
        "key": "b",
        "text": "anual, la o staţie de inspecţie tehnică autorizată de MTCT"
      },
      {
        "key": "c",
        "text": "la cel mult şase luni, într-o staţie de inspecţie tehnică a MAI"
      },
      {
        "key": "d",
        "text": "numai atunci când starea tehnică a vehiculului o impune"
      }
    ],
    "correct": "a"
  },
  {
    "id": 142,
    "sourceNo": "142",
    "text": "Care dintre următoarele fapte constituie infracţiune?",
    "answers": [
      {
        "key": "a",
        "text": "neoprirea la semnalul agentului de poliţie"
      },
      {
        "key": "b",
        "text": "conducerea pe drumurile publice a unui autovehicul de către o persoană cu o îmbibaţie alcoolică ce depăşeşte 0,70 g/l alcool în sânge"
      },
      {
        "key": "c",
        "text": "punerea în circulaţie a unei remorci neînmatriculate"
      },
      {
        "key": "d",
        "text": "neefectuarea inspecţiei tehnice periodice în termen de 10 zile de la expirare"
      }
    ],
    "correct": "c"
  },
  {
    "id": 143,
    "sourceNo": "143",
    "text": "Părăsirea locului accidentului, fără încuviinţarea politiei ori a procurorului care efectuează cercetarea, de către conducătorul oricărui vehicul angajat într-un accident în urma căruia a rezultat uciderea sau vătămarea integrităţii corporale ori a sănătăţii uneia sau mai multor persoane se pedepseşte cu:",
    "answers": [
      {
        "key": "a",
        "text": "închisoare şi anularea permisului de conducere"
      },
      {
        "key": "b",
        "text": "amendă penală şi anularea permisului de conducere"
      },
      {
        "key": "c",
        "text": "numai amendă penală"
      },
      {
        "key": "d",
        "text": "numai închisoare"
      }
    ],
    "correct": "a"
  },
  {
    "id": 144,
    "sourceNo": "144",
    "text": "Corectitudinea taximetristului este demonstrată prin:",
    "answers": [
      {
        "key": "a",
        "text": "comportamentul civilizat şi prin respectarea solicitărilor legale ale clienţilor"
      },
      {
        "key": "b",
        "text": "acordarea priorităţii altor vehicule în traficul aglomerat"
      },
      {
        "key": "c",
        "text": "alegerea traseului celui mai lung şi fără gropi"
      },
      {
        "key": "d",
        "text": "avertizarea pasagerilor asupra schimbării vremii"
      }
    ],
    "correct": "a"
  },
  {
    "id": 145,
    "sourceNo": "145",
    "text": "În cazul transportului de persoane în regim de taxi, costul total al unei curse are următoarele elemente:",
    "answers": [
      {
        "key": "a",
        "text": "tariful de pornire, costul pe distanţă în funcţie de tariful pe kilometru programat şi costul pe timpul consumat în staţionări"
      },
      {
        "key": "b",
        "text": "tariful de pornire şi costul dublat al timpului consumat în staţionări"
      },
      {
        "key": "c",
        "text": "tariful de pornire şi costul privind prestaţia efectuată şi contravaloarea combustibilului consumat"
      },
      {
        "key": "d",
        "text": "tariful dublu, distanţă-timp simultan şi costul total al prestaţiei efectuate"
      }
    ],
    "correct": "a"
  },
  {
    "id": 146,
    "sourceNo": "146",
    "text": "Poziţiile de lucru ale lămpii taxi „ Liber” şi „Ocupat” trebuie să aibă corespondent vizibil în:",
    "answers": [
      {
        "key": "a",
        "text": "afişajul client al aparatului de taxat"
      },
      {
        "key": "b",
        "text": "bordul autoturismului"
      },
      {
        "key": "c",
        "text": "parbrizul autoturismului"
      },
      {
        "key": "d",
        "text": "bonul eliberat clientului"
      }
    ],
    "correct": "a"
  },
  {
    "id": 147,
    "sourceNo": "147",
    "text": "Răspunderea operatorului de transport sau a taximetristului independent, pentru daunele produse clienţilor în timpul transportului din vina sa, este:",
    "answers": [
      {
        "key": "a",
        "text": "parţială şi se asigură cu CASCO"
      },
      {
        "key": "b",
        "text": "parţială şi se acoperă pe baza asigurării de răspundere civilă (RCA)"
      },
      {
        "key": "c",
        "text": "integrală şi se acoperă pe baza asigurării de răspundere civilă (RCA)"
      },
      {
        "key": "d",
        "text": "totală şi se asigură numai în cazul unui accident de circulaţie"
      }
    ],
    "correct": "d"
  },
  {
    "id": 148,
    "sourceNo": "148",
    "text": "Ca un element de prevedere, înainte de plecarea în cursă, conducătorul auto nu trebuie să neglijeze verificările privind:",
    "answers": [
      {
        "key": "a",
        "text": "nivelul lichidelor"
      },
      {
        "key": "b",
        "text": "semnalizarea şi frânele"
      },
      {
        "key": "c",
        "text": "luminile, nivelurile, semnalizarea, roţile şi frânele"
      },
      {
        "key": "d",
        "text": "existenţa la bord, a cărţii de identitate"
      }
    ],
    "correct": "c"
  },
  {
    "id": 149,
    "sourceNo": "149",
    "text": "Prevederea, ca element component al conducerii preventive, este:",
    "answers": [
      {
        "key": "a",
        "text": "imediată şi îndepărtată"
      },
      {
        "key": "b",
        "text": "stabilă şi mobilă"
      },
      {
        "key": "c",
        "text": "concentrată şi distributivă"
      },
      {
        "key": "d",
        "text": "atentă şi diminuată"
      }
    ],
    "correct": "a"
  },
  {
    "id": 150,
    "sourceNo": "150",
    "text": "Judecata este unul dintre elementele componente ale:",
    "answers": [
      {
        "key": "a",
        "text": "cunoştinţelor teoretice şi practice"
      },
      {
        "key": "b",
        "text": "conduitei preventive"
      },
      {
        "key": "c",
        "text": "conducerii în limitele legale admise"
      },
      {
        "key": "d",
        "text": "conducerii civilizate"
      }
    ],
    "correct": "b"
  },
  {
    "id": 151,
    "sourceNo": "151",
    "text": "Promptitudinea, rapiditatea, selectivitatea şi justeţea sunt atributele importante ale:",
    "answers": [
      {
        "key": "a",
        "text": "vigilenţei"
      },
      {
        "key": "b",
        "text": "îndemânării"
      },
      {
        "key": "c",
        "text": "judecăţii"
      },
      {
        "key": "d",
        "text": "îndemânării în conducere"
      }
    ],
    "correct": "c"
  },
  {
    "id": 152,
    "sourceNo": "152",
    "text": "Îndemânarea, în conducerea autovehiculelor pe drumurile publice, este un element component al:",
    "answers": [
      {
        "key": "a",
        "text": "conduitei preventive"
      },
      {
        "key": "b",
        "text": "programei de învăţământ"
      },
      {
        "key": "c",
        "text": "cunoştinţelor teoretice şi practice"
      },
      {
        "key": "d",
        "text": "promtitudinii şi îndemânării"
      }
    ],
    "correct": "a"
  },
  {
    "id": 153,
    "sourceNo": "153",
    "text": "Vederea este simţul primar prin intermediul căruia conducătorul auto primeşte informaţii din trafic în proporţie de:",
    "answers": [
      {
        "key": "a",
        "text": "70 %"
      },
      {
        "key": "b",
        "text": "80 %"
      },
      {
        "key": "c",
        "text": "90 %"
      },
      {
        "key": "d",
        "text": "60 %"
      }
    ],
    "correct": "c"
  },
  {
    "id": 154,
    "sourceNo": "154",
    "text": "Intervalul de timp dintre momentul observării unui obstacol şi cel al acţionării frânei, numit timp de reacţie, este evaluat de regulă la:",
    "answers": [
      {
        "key": "a",
        "text": "1 secundă"
      },
      {
        "key": "b",
        "text": "3 secunde"
      },
      {
        "key": "c",
        "text": "5 secunde"
      },
      {
        "key": "d",
        "text": "2 secunde"
      }
    ],
    "correct": "a"
  },
  {
    "id": 155,
    "sourceNo": "155",
    "text": "Dacă acea formă de frecare între pneu şi suprafaţa carosabilă, numită aderenţă, este scăzută, distanţa de oprire a vehiculului:",
    "answers": [
      {
        "key": "a",
        "text": "creşte"
      },
      {
        "key": "b",
        "text": "scade"
      },
      {
        "key": "c",
        "text": "nu se modifică"
      },
      {
        "key": "d",
        "text": "variază"
      }
    ],
    "correct": "a"
  },
  {
    "id": 156,
    "sourceNo": "156",
    "text": "Acvaplanarea, pierderea contactului dintre pneu şi suprafaţa carosabilă, se produce pe o şosea:",
    "answers": [
      {
        "key": "a",
        "text": "cu un strat de apă sau zăpadă topită"
      },
      {
        "key": "b",
        "text": "cu denivelări pronunţate"
      },
      {
        "key": "c",
        "text": "cu o geometrie neregulată"
      },
      {
        "key": "d",
        "text": "cu înclinare pronunţată"
      }
    ],
    "correct": "a"
  },
  {
    "id": 157,
    "sourceNo": "157",
    "text": "Fenomenul de acvaplanare poate fi contracarat prin:",
    "answers": [
      {
        "key": "a",
        "text": "folosirea judicioasă a echipamentului de frânare"
      },
      {
        "key": "b",
        "text": "reducerea treptată a vitezei, fără folosirea bruscă a frânei"
      },
      {
        "key": "c",
        "text": "reducerea presiunii din pneuri"
      },
      {
        "key": "d",
        "text": "folosirea concomitentă a frânelor de motor şi de serviciu"
      }
    ],
    "correct": "b"
  },
  {
    "id": 158,
    "sourceNo": "158",
    "text": "Fenomenul acvaplanării apare numai la niveluri de viteză foarte ridicate?",
    "answers": [
      {
        "key": "a",
        "text": "da"
      },
      {
        "key": "b",
        "text": "niciodată la viteze regulamentare"
      },
      {
        "key": "c",
        "text": "poate apărea şi la viteze moderate, dacă adâncimea striurilor (canalelor) benzii de rulare este mai mică decât adâncimea apei sau zăpezii topite de pe carosabil"
      },
      {
        "key": "d",
        "text": "în exclusivitate"
      }
    ],
    "correct": "c"
  },
  {
    "id": 159,
    "sourceNo": "159",
    "text": "Există vreo relaţie între viteza de deplasare a autovehiculului şi percepţia vizuală a conducătorului auto?",
    "answers": [
      {
        "key": "a",
        "text": "nu"
      },
      {
        "key": "b",
        "text": "da, creşterea vitezei reduce câmpul de percepţie vizuală"
      },
      {
        "key": "c",
        "text": "da, numai în condiţii de vizibilitate diminuată"
      },
      {
        "key": "d",
        "text": "da, atât viteza cât şi percepţia, cresc proporţional"
      }
    ],
    "correct": "b"
  },
  {
    "id": 160,
    "sourceNo": "160",
    "text": "Ce se înţelege prin câmp de vedere (vizibilitate)?",
    "answers": [
      {
        "key": "a",
        "text": "vederea aţintită în faţă"
      },
      {
        "key": "b",
        "text": "vederea spaţiului din stânga sau din dreapta drumului prin întoarcerea corpului"
      },
      {
        "key": "c",
        "text": "vederea periferică fără ce şoferul să întoarcă capul"
      },
      {
        "key": "d",
        "text": "vederea centrală pe axul drumului"
      }
    ],
    "correct": "c"
  },
  {
    "id": 161,
    "sourceNo": "161",
    "text": "Conducerea cu o viteză prea redusă poate constitui un pericol pentru circulaţie?",
    "answers": [
      {
        "key": "a",
        "text": "nu"
      },
      {
        "key": "b",
        "text": "numai în pante cu declivitate mare"
      },
      {
        "key": "c",
        "text": "da, fiindcă îi obligă pe ceilalţi conducători auto să schimbe banda, sau să se înscrie în depăşiri riscante"
      },
      {
        "key": "d",
        "text": "da, numai pe drumul cu o singură bandă pe sens"
      }
    ],
    "correct": "c"
  },
  {
    "id": 162,
    "sourceNo": "162",
    "text": "Pătrunderea pe autostradă, dintr-o laterală printr-un nod rutier, se face pe banda:",
    "answers": [
      {
        "key": "a",
        "text": "de accelerare, crescând viteza înainte de intrarea în fluxul curent de trafic"
      },
      {
        "key": "b",
        "text": "de accelerare, reducând viteza până la evitarea eventualelor coliziuni"
      },
      {
        "key": "c",
        "text": "destinată staţionării de urgenţă"
      },
      {
        "key": "d",
        "text": "destinată vehiculelor lente"
      }
    ],
    "correct": "a"
  },
  {
    "id": 163,
    "sourceNo": "163",
    "text": "Există vreo relaţie între excesul de viteză şi costurile de exploatare a maşinii?",
    "answers": [
      {
        "key": "a",
        "text": "nu"
      },
      {
        "key": "b",
        "text": "da, frânele, cutia de viteze, ambreiajul şi suspensia se uşurează prematur, iar consumul de combustibil creşte simţitor"
      },
      {
        "key": "c",
        "text": "da, numai pe drumuri cu geometrie variată"
      },
      {
        "key": "d",
        "text": "numai pe autostrăzi"
      }
    ],
    "correct": "b"
  },
  {
    "id": 164,
    "sourceNo": "164",
    "text": "Nepăstrarea unei distanţe corespunzătoare în raport cu cel care rulează în faţa sa, pe autostradă, conducătorul auto este considerat:",
    "answers": [
      {
        "key": "a",
        "text": "sigur pe volan"
      },
      {
        "key": "b",
        "text": "un pilot cu mare experienţă"
      },
      {
        "key": "c",
        "text": "imprudent prin reducerea posibilităţii de manevrare pentru evitarea accidentelor"
      },
      {
        "key": "d",
        "text": "că pilotează în stil sportiv"
      }
    ],
    "correct": "c"
  },
  {
    "id": 165,
    "sourceNo": "165",
    "text": "La câte secunde este evaluata distanţa ce trebuie menţinută între 2 autovehicule care rulează cu până la 60 km/h pe aceeaşi bandă de circulaţie cu carosabil uscat?",
    "answers": [
      {
        "key": "a",
        "text": "2 secunde"
      },
      {
        "key": "b",
        "text": "3 secunde"
      },
      {
        "key": "c",
        "text": "5 secunde"
      },
      {
        "key": "d",
        "text": "4 secunde"
      }
    ],
    "correct": "a"
  },
  {
    "id": 166,
    "sourceNo": "166",
    "text": "Distanţa ce trebuie menţinută între 2 autovehicule, care rulează cu 60 km/h pe aceeaşi bandă de circulaţie cu asfalt uscat, este evaluată la 2 secunde. Există situaţii în care această valoare trebuie modificată?",
    "answers": [
      {
        "key": "a",
        "text": "nu"
      },
      {
        "key": "b",
        "text": "da, la o viteză de peste 60 km/h se mai adaugă o secundă, iar dacă vremea este nefavorabilă, se mai adaugă încă una"
      },
      {
        "key": "c",
        "text": "cifra rămâne invariabilă"
      },
      {
        "key": "d",
        "text": "numai la o viteză de peste 100 km/h"
      }
    ],
    "correct": "b"
  },
  {
    "id": 167,
    "sourceNo": "167",
    "text": "A conduce la o distanţă prea mică faţă de vehiculul ce îl precede, un conducător auto se înscrie în rândurile celor care:",
    "answers": [
      {
        "key": "a",
        "text": "conduc preventiv"
      },
      {
        "key": "b",
        "text": "conduc detaşat şi odihnitor"
      },
      {
        "key": "c",
        "text": "îşi asumă riscuri şi ajung la destinaţie foarte obosiţi"
      },
      {
        "key": "d",
        "text": "se bazează pe o experienţă bogată în conducere"
      }
    ],
    "correct": "c"
  },
  {
    "id": 168,
    "sourceNo": "168",
    "text": "În timpul conducerii, pe un drum cu marcaje, autovehiculul, a cărui lăţime maximă nu trebuie să depăşească, în general, 2,55 m, va fi poziţionat:",
    "answers": [
      {
        "key": "a",
        "text": "cât mai pe centrul benzii de circulaţie"
      },
      {
        "key": "b",
        "text": "cât mai pe dreapta benzii de circulaţie"
      },
      {
        "key": "c",
        "text": "cât mai pe stânga benzii de circulaţie"
      },
      {
        "key": "d",
        "text": "cât mai aproape de axul drumului"
      }
    ],
    "correct": "a"
  },
  {
    "id": 169,
    "sourceNo": "169",
    "text": "Reglarea corectă a scaunului şoferului, a oglinzilor retrovizoare şi a centurilor de siguranţă sunt:",
    "answers": [
      {
        "key": "a",
        "text": "norme obligatorii, sancţionabile contravenţional"
      },
      {
        "key": "b",
        "text": "măsuri ce se iau în conformitate cu conduita preventivă"
      },
      {
        "key": "c",
        "text": "recomandări ce trebuie făcute la administratorul public"
      },
      {
        "key": "d",
        "text": "recomandări ale autorităţii rutiere"
      }
    ],
    "correct": "b"
  },
  {
    "id": 170,
    "sourceNo": "170",
    "text": "În cazul exploziei unui pneu din fata autovehiculului, conducătorul va:",
    "answers": [
      {
        "key": "a",
        "text": "frâna brusc"
      },
      {
        "key": "b",
        "text": "va realiza o frână de motor, iar după încetinirea mersului va frâna uşor la oprire"
      },
      {
        "key": "c",
        "text": "va braca volanul în sensul invers al deplasării autovehiculului"
      },
      {
        "key": "d",
        "text": "lăsa liber volanul"
      }
    ],
    "correct": "c"
  },
  {
    "id": 171,
    "sourceNo": "171",
    "text": "Câte tipuri de derapare se cunosc?",
    "answers": [
      {
        "key": "a",
        "text": "la accelerare, în viraje şi la frânare"
      },
      {
        "key": "b",
        "text": "la urcarea în rampe cu înclinare mare"
      },
      {
        "key": "c",
        "text": "la coborârea pantelor abrupte"
      },
      {
        "key": "d",
        "text": "la schimbarea bruscă a rapoartelor de viteză"
      }
    ],
    "correct": "a"
  },
  {
    "id": 172,
    "sourceNo": "172",
    "text": "În timpul conducerii, poziţia corectă a mâinilor pe volan, în raport cu cadranul circular al unui ceasornic, este:",
    "answers": [
      {
        "key": "a",
        "text": "mâna stângă la ora 12 şi cea dreaptă la ora 15"
      },
      {
        "key": "b",
        "text": "mâna stângă la ora 09 şi cea dreaptă la ora 15"
      },
      {
        "key": "c",
        "text": "mâna stângă la ora 10 şi cea dreaptă la ora 14"
      }
    ],
    "correct": "b"
  }
];
