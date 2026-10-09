const DIET_DEFINIZIONE = [
  {
    id: "colazione", cls: "colazione",
    meal: "Colazione", icon: "☀️",
    plates: [
      {
        name: "Piatto Unico",
        foods: [
          { qty: "200 gr", item: "Yogurt greco magro 0% bianco", alts: [] },
          {
            qty: "20 gr", item: "Fiocchi d'avena",
            alts: [
              "20 gr · Farro Soffiato al Naturale – Più Cereali Bio",
              "20 gr · Corn Flakes Originali – Kellogg's",
              "20 gr · Rice Krispies – Kellogg's",
              "20 gr · Fiocchi di frumento integrale, avena e riso – Misura",
              "20 gr · Semi di chia"
            ]
          },
          {
            qty: "20 gr", item: "Semi di chia / Topping",
            alts: [
              "20 gr · Lino – semi",
              "15 gr · Burro d'arachidi",
              "15 gr · Cioccolato fondente"
            ]
          },
          {
            qty: "100 gr", item: "Frutta fresca",
            alts: [
              "10 gr · Miele",
              "20 gr · Marmellata – Rigoni di Asiago"
            ]
          }
        ]
      },
      {
        name: "Alternativa 1 – Pancakes proteici",
        foods: [
          { qty: "40 gr",  item: "Farina d'avena (normale o aromatizzata)", alts: [] },
          { qty: "120 gr", item: "Uova di gallina – albume", alts: [] },
          { qty: "50 gr",  item: "Yogurt greco magro 0% bianco", alts: [] },
          {
            qty: "10 gr", item: "Burro d'arachidi",
            alts: ["10 gr · Cioccolato fondente"]
          },
          {
            qty: "100 gr", item: "Frutta fresca",
            alts: [
              "20 gr · Marmellata – Rigoni di Asiago",
              "10 gr · Sciroppo d'acero",
              "10 gr · Miele"
            ]
          }
        ]
      },
      {
        name: "Alternativa 2 – Pane e uova",
        foods: [
          {
            qty: "60 gr", item: "Pane integrale",
            alts: [
              "50 gr · Pan Bauletto al Grano Duro – Mulino Bianco",
              "40 gr · Fette biscottate integrali"
            ]
          },
          { qty: "50 gr",  item: "Uova di gallina – intero", alts: [] },
          { qty: "150 gr", item: "Uova di gallina – albume", alts: [] },
          { qty: "150 gr", item: "Frutta fresca", alts: [] }
        ]
      }
    ]
  },
  {
    id: "spuntino", cls: "spuntino",
    meal: "Spuntino", icon: "🍎",
    plates: [
      {
        name: "Piatto Unico",
        foods: [
          { qty: "200 gr", item: "Latte di vacca parz. scremato", alts: [] },
          { qty: "30 gr",  item: "Proteine Vegane (pisello, riso e canapa)", alts: [] }
        ]
      },
      {
        name: "Alternativa",
        foods: [
          { qty: "350 gr", item: "Protein drink (Milk)", alts: [] }
        ]
      }
    ]
  },
  {
    id: "pranzo", cls: "pranzo",
    meal: "Pranzo", icon: "🍝",
    plates: [
      {
        name: "Piatto Unico",
        foods: [
          {
            qty: "80 gr", item: "Pasta Integrale",
            alts: [
              "80 gr · Riso integrale",
              "80 gr · Farro",
              "80 gr · Quinoa",
              "80 gr · Grano saraceno",
              "80 gr · Orzo perlato",
              "80 gr · Cous Cous",
              "70 gr · Polenta (farina di mais)",
              "320 gr · Patate",
              "180 gr · Gnocchi di Patate",
              "110 gr · Pane di grano duro",
              "120 gr · Pane integrale",
              "120 gr · Pane di segale",
              "80 gr · Piadina"
            ]
          },
          {
            qty: "150 gr", item: "Uova di gallina – intero (o proteina a scelta)",
            alts: [
              "240 gr · Lenticchie in scatola – scolate",
              "240 gr · Ceci in scatola – scolati",
              "240 gr · Piselli in scatola – scolati",
              "240 gr · Fagioli Borlotti secchi cotti",
              "150 gr · Soia Edamame – Orogel",
              "120 gr · Lupini – ammollati",
              "100 gr · Mozzarella Light",
              "120 gr · Stracchino Light – Granarolo",
              "180 gr · Ricotta Light – Santa Lucia",
              "100 gr · Feta Light – Zorbas",
              "100 gr · Certosa Light – Galbani",
              "50 gr · Parmigiano",
              "100 gr · Tonno sott'olio – sgocciolato",
              "100 gr · Filetti di Sgombro all'olio d'oliva",
              "120 gr · Tofu al naturale",
              "100 gr · Tempeh",
              "60 gr · Farina di ceci",
              "60 gr · Pasta di legumi",
              "120 gr · Hamburger Vegetale – Valsoia",
              "100 gr · Filetto di Salmone al Naturale – Rio Mare",
              "120 gr · Salmone",
              "120 gr · Tonno",
              "120 gr · Sgombro / Maccarello",
              "70 gr · Prosciutto crudo"
            ]
          },
          {
            qty: "200 gr", item: "Verdura",
            alts: ["80 gr · Insalata"]
          },
          {
            qty: "10 gr", item: "Olio di oliva extra vergine",
            alts: [
              "40 gr · Avocado",
              "20 gr · Pesto alla Genovese"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "merenda", cls: "merenda",
    meal: "Merenda Pre-WO", icon: "⚡",
    plates: [
      {
        name: "Piatto Unico",
        foods: [
          { qty: "200 gr", item: "Frutta fresca", alts: [] },
          { qty: "200 gr", item: "Yogurt greco magro 0% bianco", alts: [] },
          {
            qty: "20 gr", item: "Corn Flakes Originali – Kellogg's",
            alts: [
              "20 gr · Fiocchi d'avena",
              "20 gr · Fiocchi di frumento integrale, avena e riso – Misura",
              "20 gr · Formelle di Frumento Integrale – Weetabix",
              "20 gr · Barretta ai cereali e cioccolato"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "cena", cls: "cena",
    meal: "Cena", icon: "🌙",
    plates: [
      {
        name: "Piatto Unico",
        foods: [
          {
            qty: "50 gr", item: "Pane integrale",
            alts: [
              "50 gr · Pane di grano duro",
              "50 gr · Pane di segale",
              "30 gr · Cous Cous",
              "30 gr · Polenta (farina di mais)",
              "30 gr · Gran Purè – Knorr",
              "150 gr · Gnocchi alla Romana – Rana",
              "30 gr · Crackers (normali, riso, mais)",
              "30 gr · Grissini",
              "30 gr · Gallette di mais",
              "30 gr · Gallette di riso",
              "30 gr · Integrale – Wasa",
              "30 gr · Fette biscottate integrali"
            ]
          },
          {
            qty: "200 gr", item: "Carne (tagli magri)",
            alts: [
              "200 gr · Pollo – petto",
              "200 gr · Manzo",
              "120 gr · Sfilacci di cavallo",
              "250 gr · Pesce bianco",
              "200 gr · Pesce spada",
              "150 gr · Salmone affumicato",
              "300 gr · Molluschi",
              "300 gr · Crostacei",
              "300 gr · Gamberetti sgusciati",
              "400 gr · Uova di gallina – albume",
              "300 gr · Fiocchi di Latte",
              "170 gr · Seitan al Naturale"
            ]
          },
          {
            qty: "200 gr", item: "Verdura",
            alts: ["80 gr · Insalata"]
          },
          {
            qty: "10 gr", item: "Olio di oliva extra vergine",
            alts: [
              "40 gr · Avocado",
              "60 gr · Olive verdi"
            ]
          }
        ]
      }
    ]
  }
];

/* ══════════════════════════════════════
   NORMOCALORICA – Reverse diet, 4 fasi da 2 settimane
   (fonte: dieta.pdf · Programmazione dal 09/09/2026 al 03/11/2026)
══════════════════════════════════════ */
const DIET_NORM_1_2 = [
  {
    id: "colazione", cls: "colazione",
    meal: "Colazione", icon: "☀️",
    plates: [
      {
        name: "Piatto Unico",
        foods: [
          { qty: "200 gr", item: "Yogurt greco magro 0% bianco", alts: [] },
          {
            qty: "20 gr", item: "Fiocchi d'avena",
            alts: [
              "20 gr · Farro Soffiato al Naturale – Più Cereali Bio",
              "20 gr · Corn Flakes Originali – Kellogg's",
              "20 gr · Rice Krispies – Kellogg's",
              "20 gr · Fiocchi di frumento integrale, avena e riso – Misura"
            ]
          },
          {
            qty: "20 gr", item: "Semi di chia / Topping",
            alts: [
              "20 gr · Lino – semi",
              "15 gr · Burro d'arachidi",
              "15 gr · Cioccolato fondente"
            ]
          },
          {
            qty: "150 gr", item: "Frutta fresca",
            alts: [
              "15 gr · Miele",
              "30 gr · Marmellata – Rigoni di Asiago"
            ]
          }
        ]
      },
      {
        name: "Alternativa 1 – Pancakes proteici",
        foods: [
          { qty: "40 gr",  item: "Farina d'avena (normale o aromatizzata)", alts: [] },
          { qty: "120 gr", item: "Uova di gallina – albume", alts: [] },
          { qty: "50 gr",  item: "Yogurt greco magro 0% bianco", alts: [] },
          { qty: "10 gr", item: "Burro d'arachidi", alts: ["10 gr · Cioccolato fondente"] },
          {
            qty: "150 gr", item: "Frutta fresca",
            alts: ["30 gr · Marmellata – Rigoni di Asiago", "15 gr · Sciroppo d'acero", "15 gr · Miele"]
          }
        ]
      },
      {
        name: "Alternativa 2 – Pane e uova",
        foods: [
          {
            qty: "60 gr", item: "Pane integrale",
            alts: ["50 gr · Pan Bauletto al Grano Duro – Mulino Bianco", "40 gr · Fette biscottate integrali"]
          },
          { qty: "50 gr",  item: "Uova di gallina – intero", alts: [] },
          { qty: "150 gr", item: "Uova di gallina – albume", alts: [] },
          { qty: "200 gr", item: "Frutta fresca", alts: [] }
        ]
      }
    ]
  },
  {
    id: "spuntino", cls: "spuntino",
    meal: "Spuntino", icon: "🍎",
    plates: [
      {
        name: "Piatto Unico",
        foods: [
          { qty: "200 gr", item: "Latte di vacca parz. scremato", alts: [] },
          { qty: "30 gr",  item: "Proteine Vegane (pisello, riso e canapa)", alts: [] }
        ]
      },
      {
        name: "Alternativa",
        foods: [
          { qty: "350 gr", item: "Protein drink (Milk)", alts: [] }
        ]
      }
    ]
  },
  {
    id: "pranzo", cls: "pranzo",
    meal: "Pranzo", icon: "🍝",
    plates: [
      {
        name: "Piatto Unico",
        foods: [
          {
            qty: "80 gr", item: "Pasta Integrale",
            alts: [
              "80 gr · Riso integrale", "80 gr · Farro", "80 gr · Quinoa", "80 gr · Grano saraceno",
              "80 gr · Orzo perlato", "80 gr · Cous Cous", "70 gr · Polenta (farina di mais)",
              "320 gr · Patate", "180 gr · Gnocchi di Patate", "110 gr · Pane di grano duro",
              "120 gr · Pane integrale", "120 gr · Pane di segale", "80 gr · Piadina"
            ]
          },
          {
            qty: "150 gr", item: "Uova di gallina – intero",
            alts: [
              "240 gr · Lenticchie in scatola – scolate", "240 gr · Ceci in scatola – scolati",
              "240 gr · Piselli in scatola – scolati", "240 gr · Fagioli Borlotti secchi cotti",
              "150 gr · Soia Edamame – Orogel", "120 gr · Lupini – ammollati",
              "100 gr · Mozzarella Light", "120 gr · Stracchino Light – Granarolo",
              "180 gr · Ricotta Light – Santa Lucia", "100 gr · Feta Light – Zorbas",
              "100 gr · Certosa Light – Galbani", "50 gr · Parmigiano",
              "100 gr · Tonno sott'olio – sgocciolato", "100 gr · Filetti di Sgombro all'olio d'oliva",
              "120 gr · Tofu al naturale", "100 gr · Tempeh", "60 gr · Farina di ceci",
              "60 gr · Pasta di legumi", "120 gr · Hamburger Vegetale – Valsoia",
              "100 gr · Filetto di Salmone al Naturale – Rio Mare", "120 gr · Salmone",
              "120 gr · Tonno", "120 gr · Sgombro / Maccarello", "70 gr · Prosciutto crudo"
            ]
          },
          { qty: "200 gr", item: "Verdura", alts: ["80 gr · Insalata"] },
          {
            qty: "10 gr", item: "Olio di oliva extra vergine",
            alts: ["40 gr · Avocado", "20 gr · Pesto alla Genovese"]
          }
        ]
      }
    ]
  },
  {
    id: "merenda", cls: "merenda",
    meal: "Merenda", icon: "⚡",
    plates: [
      {
        name: "Piatto Unico",
        foods: [
          { qty: "200 gr", item: "Frutta fresca", alts: [] },
          {
            qty: "200 gr", item: "Yogurt greco magro 0% bianco",
            alts: ["180 gr · Protein yogurt magro bianco naturale (Milk)"]
          },
          {
            qty: "50 gr", item: "Corn Flakes Originali – Kellogg's",
            alts: [
              "50 gr · Fiocchi d'avena",
              "50 gr · Fiocchi di frumento integrale, avena e riso – Misura",
              "50 gr · Formelle di Frumento Integrale – Weetabix",
              "50 gr · Rice Krispies – Kellogg's",
              "50 gr · Gallette di mais",
              "50 gr · Gallette di riso"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "cena", cls: "cena",
    meal: "Cena", icon: "🌙",
    plates: [
      {
        name: "Piatto Unico",
        foods: [
          {
            qty: "80 gr", item: "Pane integrale",
            alts: [
              "70 gr · Pane di grano duro", "80 gr · Pane di segale", "50 gr · Cous Cous",
              "50 gr · Polenta (farina di mais)", "50 gr · Gran Purè – Knorr", "220 gr · Gnocchi alla Romana – Rana",
              "40 gr · Crackers (normali, riso, mais)", "40 gr · Grissini", "45 gr · Gallette di mais",
              "45 gr · Gallette di riso", "50 gr · Integrale – Wasa", "50 gr · Fette biscottate integrali",
              "200 gr · Patate", "60 gr · Tortillas – Roberto", "50 gr · Riso"
            ]
          },
          {
            qty: "150 gr", item: "Carne (tagli magri)",
            alts: [
              "150 gr · Pollo – petto", "150 gr · Manzo", "90 gr · Sfilacci di cavallo",
              "200 gr · Pesce bianco", "180 gr · Pesce spada", "120 gr · Salmone affumicato",
              "250 gr · Molluschi", "250 gr · Crostacei", "250 gr · Gamberetti sgusciati",
              "300 gr · Uova di gallina – albume", "200 gr · Fiocchi di Latte", "120 gr · Seitan al Naturale"
            ]
          },
          { qty: "200 gr", item: "Verdura", alts: ["80 gr · Insalata"] },
          {
            qty: "10 gr", item: "Olio di oliva extra vergine",
            alts: ["40 gr · Avocado", "60 gr · Olive verdi", "15 gr · Cioccolato fondente"]
          }
        ]
      }
    ]
  }
];

const DIET_NORM_3_4 = [
  {
    id: "colazione", cls: "colazione",
    meal: "Colazione", icon: "☀️",
    plates: [
      {
        name: "Piatto Unico",
        foods: [
          { qty: "200 gr", item: "Yogurt greco magro 0% bianco", alts: [] },
          {
            qty: "20 gr", item: "Fiocchi d'avena",
            alts: [
              "20 gr · Farro Soffiato al Naturale – Più Cereali Bio",
              "20 gr · Corn Flakes Originali – Kellogg's",
              "20 gr · Rice Krispies – Kellogg's",
              "20 gr · Fiocchi di frumento integrale, avena e riso – Misura"
            ]
          },
          {
            qty: "20 gr", item: "Semi di chia / Topping",
            alts: ["20 gr · Lino – semi", "15 gr · Burro d'arachidi", "15 gr · Cioccolato fondente"]
          },
          {
            qty: "150 gr", item: "Frutta fresca",
            alts: ["15 gr · Miele", "30 gr · Marmellata – Rigoni di Asiago"]
          }
        ]
      },
      {
        name: "Alternativa 1 – Pancakes proteici",
        foods: [
          { qty: "40 gr",  item: "Farina d'avena (normale o aromatizzata)", alts: [] },
          { qty: "120 gr", item: "Uova di gallina – albume", alts: [] },
          { qty: "50 gr",  item: "Yogurt greco magro 0% bianco", alts: [] },
          { qty: "10 gr", item: "Burro d'arachidi", alts: ["10 gr · Cioccolato fondente"] },
          {
            qty: "150 gr", item: "Frutta fresca",
            alts: ["30 gr · Marmellata – Rigoni di Asiago", "15 gr · Sciroppo d'acero", "15 gr · Miele"]
          }
        ]
      },
      {
        name: "Alternativa 2 – Pane e uova",
        foods: [
          {
            qty: "60 gr", item: "Pane integrale",
            alts: ["50 gr · Pan Bauletto al Grano Duro – Mulino Bianco", "40 gr · Fette biscottate integrali"]
          },
          { qty: "50 gr",  item: "Uova di gallina – intero", alts: [] },
          { qty: "150 gr", item: "Uova di gallina – albume", alts: [] },
          { qty: "200 gr", item: "Frutta fresca", alts: [] }
        ]
      }
    ]
  },
  {
    id: "spuntino", cls: "spuntino",
    meal: "Spuntino", icon: "🍎",
    plates: [
      {
        name: "Piatto Unico",
        foods: [
          { qty: "200 gr", item: "Latte di vacca parz. scremato", alts: [] },
          { qty: "30 gr",  item: "Proteine Vegane (pisello, riso e canapa)", alts: [] },
          { qty: "200 gr", item: "Frutta fresca", alts: [] }
        ]
      },
      {
        name: "Alternativa",
        foods: [
          { qty: "350 gr", item: "Protein drink (Milk)", alts: [] },
          { qty: "200 gr", item: "Frutta fresca", alts: [] }
        ]
      }
    ]
  },
  {
    id: "pranzo", cls: "pranzo",
    meal: "Pranzo", icon: "🍝",
    plates: [
      {
        name: "Piatto Unico",
        foods: [
          {
            qty: "100 gr", item: "Pasta Integrale",
            alts: [
              "100 gr · Riso integrale", "100 gr · Farro", "100 gr · Quinoa", "100 gr · Grano saraceno",
              "100 gr · Orzo perlato", "100 gr · Cous Cous", "90 gr · Polenta (farina di mais)",
              "400 gr · Patate", "230 gr · Gnocchi di Patate", "140 gr · Pane di grano duro",
              "150 gr · Pane integrale", "150 gr · Pane di segale", "100 gr · Piadina"
            ]
          },
          {
            qty: "150 gr", item: "Uova di gallina – intero",
            alts: [
              "240 gr · Lenticchie in scatola – scolate", "240 gr · Ceci in scatola – scolati",
              "240 gr · Piselli in scatola – scolati", "240 gr · Fagioli Borlotti secchi cotti",
              "150 gr · Soia Edamame – Orogel", "120 gr · Lupini – ammollati",
              "100 gr · Mozzarella Light", "120 gr · Stracchino Light – Granarolo",
              "180 gr · Ricotta Light – Santa Lucia", "100 gr · Feta Light – Zorbas",
              "100 gr · Certosa Light – Galbani", "50 gr · Parmigiano",
              "100 gr · Tonno sott'olio – sgocciolato", "100 gr · Filetti di Sgombro all'olio d'oliva",
              "120 gr · Tofu al naturale", "100 gr · Tempeh", "60 gr · Farina di ceci",
              "60 gr · Pasta di legumi", "120 gr · Hamburger Vegetale – Valsoia",
              "100 gr · Filetto di Salmone al Naturale – Rio Mare", "120 gr · Salmone",
              "120 gr · Tonno", "120 gr · Sgombro / Maccarello", "70 gr · Prosciutto crudo"
            ]
          },
          { qty: "200 gr", item: "Verdura", alts: ["80 gr · Insalata"] },
          {
            qty: "10 gr", item: "Olio di oliva extra vergine",
            alts: ["40 gr · Avocado", "20 gr · Pesto alla Genovese"]
          }
        ]
      }
    ]
  },
  {
    id: "merenda", cls: "merenda",
    meal: "Merenda", icon: "⚡",
    plates: [
      {
        name: "Piatto Unico",
        foods: [
          { qty: "200 gr", item: "Frutta fresca", alts: [] },
          {
            qty: "250 gr", item: "Latte di vacca parz. scremato",
            alts: ["250 gr · Latte di Soia", "250 gr · Kefir bianco (da bere)", "150 gr · Kefir cremoso bianco (Milk)"]
          },
          {
            qty: "50 gr", item: "Corn Flakes Originali – Kellogg's",
            alts: [
              "50 gr · Fiocchi d'avena", "50 gr · Fiocchi di frumento integrale, avena e riso – Misura",
              "50 gr · Formelle di Frumento Integrale – Weetabix", "50 gr · Rice Krispies – Kellogg's",
              "50 gr · Gallette di mais", "50 gr · Gallette di riso"
            ]
          }
        ]
      },
      {
        name: "Alternativa",
        foods: [
          { qty: "200 gr", item: "Frutta fresca", alts: [] },
          {
            qty: "100 gr", item: "Pane di grano duro",
            alts: ["60 gr · Gallette di riso", "60 gr · Fette biscottate integrali"]
          },
          {
            qty: "40 gr", item: "Marmellata – Rigoni di Asiago",
            alts: ["20 gr · Datteri medjool disidratati", "150 gr · Succo/spremuta/centrifuga di frutta"]
          }
        ]
      }
    ]
  },
  {
    id: "cena", cls: "cena",
    meal: "Cena", icon: "🌙",
    plates: [
      {
        name: "Piatto Unico",
        foods: [
          {
            qty: "80 gr", item: "Pane integrale",
            alts: [
              "70 gr · Pane di grano duro", "80 gr · Pane di segale", "50 gr · Cous Cous",
              "50 gr · Polenta (farina di mais)", "50 gr · Gran Purè – Knorr", "220 gr · Gnocchi alla Romana – Rana",
              "40 gr · Crackers (normali, riso, mais)", "40 gr · Grissini", "45 gr · Gallette di mais",
              "45 gr · Gallette di riso", "50 gr · Integrale – Wasa", "50 gr · Fette biscottate integrali",
              "200 gr · Patate", "60 gr · Tortillas – Roberto", "50 gr · Riso"
            ]
          },
          {
            qty: "150 gr", item: "Carne (tagli magri)",
            alts: [
              "150 gr · Pollo – petto", "150 gr · Manzo", "90 gr · Sfilacci di cavallo",
              "200 gr · Pesce bianco", "180 gr · Pesce spada", "120 gr · Salmone affumicato",
              "250 gr · Molluschi", "250 gr · Crostacei", "250 gr · Gamberetti sgusciati",
              "300 gr · Uova di gallina – albume", "200 gr · Fiocchi di Latte", "120 gr · Seitan al Naturale"
            ]
          },
          { qty: "200 gr", item: "Verdura", alts: ["80 gr · Insalata"] },
          {
            qty: "10 gr", item: "Olio di oliva extra vergine",
            alts: ["40 gr · Avocado", "60 gr · Olive verdi", "15 gr · Cioccolato fondente"]
          }
        ]
      }
    ]
  }
];

const DIET_NORM_5_6 = [
  {
    id: "colazione", cls: "colazione",
    meal: "Colazione", icon: "☀️",
    plates: [
      {
        name: "Piatto Unico",
        foods: [
          { qty: "200 gr", item: "Yogurt greco magro 0% bianco", alts: [] },
          {
            qty: "60 gr", item: "Fiocchi d'avena",
            alts: [
              "60 gr · Farro Soffiato al Naturale – Più Cereali Bio",
              "60 gr · Corn Flakes Originali – Kellogg's",
              "60 gr · Rice Krispies – Kellogg's",
              "60 gr · Fiocchi di frumento integrale, avena e riso – Misura"
            ]
          },
          {
            qty: "20 gr", item: "Semi di chia / Topping",
            alts: ["20 gr · Lino – semi", "15 gr · Burro d'arachidi", "15 gr · Cioccolato fondente"]
          },
          {
            qty: "150 gr", item: "Frutta fresca",
            alts: ["15 gr · Miele", "30 gr · Marmellata – Rigoni di Asiago"]
          }
        ]
      },
      {
        name: "Alternativa 1 – Pancakes proteici",
        foods: [
          { qty: "60 gr",  item: "Farina d'avena (normale o aromatizzata)", alts: [] },
          { qty: "150 gr", item: "Uova di gallina – albume", alts: [] },
          { qty: "50 gr",  item: "Yogurt greco magro 0% bianco", alts: [] },
          {
            qty: "20 gr", item: "Burro d'arachidi",
            alts: ["20 gr · Cioccolato fondente", "20 gr · Nocciolata – Rigoni di Asiago"]
          },
          {
            qty: "150 gr", item: "Frutta fresca",
            alts: ["30 gr · Marmellata – Rigoni di Asiago", "15 gr · Sciroppo d'acero", "15 gr · Miele"]
          }
        ]
      },
      {
        name: "Alternativa 2 – Pane e uova",
        foods: [
          {
            qty: "80 gr", item: "Pane integrale",
            alts: ["75 gr · Pan Bauletto al Grano Duro – Mulino Bianco", "50 gr · Fette biscottate integrali"]
          },
          { qty: "150 gr", item: "Uova di gallina – intero", alts: [] },
          { qty: "300 gr", item: "Frutta fresca", alts: [] }
        ]
      }
    ]
  },
  {
    id: "spuntino", cls: "spuntino",
    meal: "Spuntino", icon: "🍎",
    plates: [
      {
        name: "Piatto Unico",
        foods: [
          { qty: "200 gr", item: "Latte di vacca parz. scremato", alts: [] },
          { qty: "30 gr",  item: "Proteine Vegane (pisello, riso e canapa)", alts: [] },
          { qty: "200 gr", item: "Frutta fresca", alts: [] }
        ]
      },
      {
        name: "Alternativa",
        foods: [
          { qty: "350 gr", item: "Protein drink (Milk)", alts: [] },
          { qty: "200 gr", item: "Frutta fresca", alts: [] }
        ]
      }
    ]
  },
  {
    id: "pranzo", cls: "pranzo",
    meal: "Pranzo", icon: "🍝",
    plates: [
      {
        name: "Piatto Unico",
        foods: [
          {
            qty: "100 gr", item: "Pasta Integrale",
            alts: [
              "100 gr · Riso integrale", "100 gr · Farro", "100 gr · Quinoa", "100 gr · Grano saraceno",
              "100 gr · Orzo perlato", "100 gr · Cous Cous", "90 gr · Polenta (farina di mais)",
              "400 gr · Patate", "230 gr · Gnocchi di Patate", "140 gr · Pane di grano duro",
              "150 gr · Pane integrale", "150 gr · Pane di segale", "100 gr · Piadina"
            ]
          },
          {
            qty: "150 gr", item: "Uova di gallina – intero",
            alts: [
              "240 gr · Lenticchie in scatola – scolate", "240 gr · Ceci in scatola – scolati",
              "240 gr · Piselli in scatola – scolati", "240 gr · Fagioli Borlotti secchi cotti",
              "150 gr · Soia Edamame – Orogel", "120 gr · Lupini – ammollati",
              "100 gr · Mozzarella Light", "120 gr · Stracchino Light – Granarolo",
              "180 gr · Ricotta Light – Santa Lucia", "100 gr · Feta Light – Zorbas",
              "100 gr · Certosa Light – Galbani", "50 gr · Parmigiano",
              "100 gr · Tonno sott'olio – sgocciolato", "100 gr · Filetti di Sgombro all'olio d'oliva",
              "120 gr · Tofu al naturale", "100 gr · Tempeh", "60 gr · Farina di ceci",
              "60 gr · Pasta di legumi", "120 gr · Hamburger Vegetale – Valsoia",
              "100 gr · Filetto di Salmone al Naturale – Rio Mare", "120 gr · Salmone",
              "120 gr · Tonno", "120 gr · Sgombro / Maccarello", "70 gr · Prosciutto crudo"
            ]
          },
          { qty: "200 gr", item: "Verdura", alts: ["80 gr · Insalata"] },
          {
            qty: "10 gr", item: "Olio di oliva extra vergine",
            alts: ["40 gr · Avocado", "20 gr · Pesto alla Genovese"]
          }
        ]
      }
    ]
  },
  {
    id: "merenda", cls: "merenda",
    meal: "Merenda", icon: "⚡",
    plates: [
      {
        name: "Piatto Unico",
        foods: [
          { qty: "200 gr", item: "Frutta fresca", alts: [] },
          {
            qty: "250 gr", item: "Latte di vacca parz. scremato",
            alts: ["250 gr · Latte di Soia", "250 gr · Kefir bianco (da bere)", "150 gr · Kefir cremoso bianco (Milk)"]
          },
          {
            qty: "50 gr", item: "Corn Flakes Originali – Kellogg's",
            alts: [
              "50 gr · Fiocchi d'avena", "50 gr · Fiocchi di frumento integrale, avena e riso – Misura",
              "50 gr · Formelle di Frumento Integrale – Weetabix", "50 gr · Rice Krispies – Kellogg's",
              "50 gr · Gallette di mais", "50 gr · Gallette di riso"
            ]
          }
        ]
      },
      {
        name: "Alternativa",
        foods: [
          { qty: "200 gr", item: "Frutta fresca", alts: [] },
          { qty: "100 gr", item: "Pane di grano duro", alts: ["60 gr · Gallette di riso", "60 gr · Fette biscottate integrali"] },
          { qty: "40 gr", item: "Marmellata – Rigoni di Asiago", alts: ["20 gr · Datteri medjool disidratati", "150 gr · Succo/spremuta/centrifuga di frutta"] }
        ]
      }
    ]
  },
  {
    id: "cena", cls: "cena",
    meal: "Cena", icon: "🌙",
    plates: [
      {
        name: "Piatto Unico",
        foods: [
          {
            qty: "80 gr", item: "Pane integrale",
            alts: [
              "70 gr · Pane di grano duro", "80 gr · Pane di segale", "50 gr · Cous Cous",
              "50 gr · Polenta (farina di mais)", "50 gr · Gran Purè – Knorr", "220 gr · Gnocchi alla Romana – Rana",
              "40 gr · Crackers (normali, riso, mais)", "40 gr · Grissini", "45 gr · Gallette di mais",
              "45 gr · Gallette di riso", "50 gr · Integrale – Wasa", "50 gr · Fette biscottate integrali",
              "200 gr · Patate", "60 gr · Tortillas – Roberto", "50 gr · Riso"
            ]
          },
          {
            qty: "150 gr", item: "Carne (tagli magri)",
            alts: [
              "150 gr · Pollo – petto", "150 gr · Manzo", "90 gr · Sfilacci di cavallo",
              "200 gr · Pesce bianco", "180 gr · Pesce spada", "120 gr · Salmone affumicato",
              "250 gr · Molluschi", "250 gr · Crostacei", "250 gr · Gamberetti sgusciati",
              "300 gr · Uova di gallina – albume", "200 gr · Fiocchi di Latte", "120 gr · Seitan al Naturale"
            ]
          },
          { qty: "200 gr", item: "Verdura", alts: ["80 gr · Insalata"] },
          {
            qty: "10 gr", item: "Olio di oliva extra vergine",
            alts: ["40 gr · Avocado", "60 gr · Olive verdi", "15 gr · Cioccolato fondente"]
          }
        ]
      }
    ]
  }
];

const DIET_NORM_7_8 = [
  {
    id: "colazione", cls: "colazione",
    meal: "Colazione", icon: "☀️",
    plates: [
      {
        name: "Piatto Unico",
        foods: [
          { qty: "200 gr", item: "Yogurt greco magro 0% bianco", alts: [] },
          {
            qty: "60 gr", item: "Fiocchi d'avena",
            alts: [
              "60 gr · Farro Soffiato al Naturale – Più Cereali Bio",
              "60 gr · Corn Flakes Originali – Kellogg's",
              "60 gr · Rice Krispies – Kellogg's",
              "60 gr · Fiocchi di frumento integrale, avena e riso – Misura"
            ]
          },
          {
            qty: "20 gr", item: "Semi di chia / Topping",
            alts: ["20 gr · Lino – semi", "15 gr · Burro d'arachidi", "15 gr · Cioccolato fondente"]
          },
          {
            qty: "150 gr", item: "Frutta fresca",
            alts: ["15 gr · Miele", "30 gr · Marmellata – Rigoni di Asiago"]
          }
        ]
      },
      {
        name: "Alternativa 1 – Pancakes proteici",
        foods: [
          { qty: "60 gr",  item: "Farina d'avena (normale o aromatizzata)", alts: [] },
          { qty: "150 gr", item: "Uova di gallina – albume", alts: [] },
          { qty: "50 gr",  item: "Yogurt greco magro 0% bianco", alts: [] },
          {
            qty: "20 gr", item: "Burro d'arachidi",
            alts: ["20 gr · Cioccolato fondente", "20 gr · Nocciolata – Rigoni di Asiago"]
          },
          {
            qty: "150 gr", item: "Frutta fresca",
            alts: ["30 gr · Marmellata – Rigoni di Asiago", "15 gr · Sciroppo d'acero", "15 gr · Miele"]
          }
        ]
      },
      {
        name: "Alternativa 2 – Pane e uova",
        foods: [
          {
            qty: "80 gr", item: "Pane integrale",
            alts: ["75 gr · Pan Bauletto al Grano Duro – Mulino Bianco", "50 gr · Fette biscottate integrali"]
          },
          { qty: "150 gr", item: "Uova di gallina – intero", alts: [] },
          { qty: "300 gr", item: "Frutta fresca", alts: [] }
        ]
      }
    ]
  },
  {
    id: "spuntino", cls: "spuntino",
    meal: "Spuntino", icon: "🍎",
    plates: [
      {
        name: "Piatto Unico",
        foods: [
          { qty: "200 gr", item: "Frutta fresca", alts: [] },
          {
            qty: "20 gr", item: "Frutta secca a guscio",
            alts: ["20 gr · Cioccolato fondente", "30 gr · Parmigiano"]
          }
        ]
      }
    ]
  },
  {
    id: "pranzo", cls: "pranzo",
    meal: "Pranzo", icon: "🍝",
    plates: [
      {
        name: "Piatto Unico",
        foods: [
          {
            qty: "150 gr", item: "Pasta Integrale",
            alts: [
              "150 gr · Riso integrale", "150 gr · Farro", "150 gr · Quinoa", "150 gr · Grano saraceno",
              "150 gr · Orzo perlato", "150 gr · Cous Cous", "140 gr · Polenta (farina di mais)",
              "600 gr · Patate", "330 gr · Gnocchi di Patate", "210 gr · Pane di grano duro",
              "220 gr · Pane integrale", "220 gr · Pane di segale"
            ]
          },
          {
            qty: "150 gr", item: "Uova di gallina – intero",
            alts: [
              "240 gr · Lenticchie in scatola – scolate", "240 gr · Ceci in scatola – scolati",
              "240 gr · Piselli in scatola – scolati", "240 gr · Fagioli Borlotti secchi cotti",
              "150 gr · Soia Edamame – Orogel", "120 gr · Lupini – ammollati",
              "100 gr · Mozzarella Light", "120 gr · Stracchino Light – Granarolo",
              "180 gr · Ricotta Light – Santa Lucia", "100 gr · Feta Light – Zorbas",
              "100 gr · Certosa Light – Galbani", "50 gr · Parmigiano",
              "100 gr · Tonno sott'olio – sgocciolato", "100 gr · Filetti di Sgombro all'olio d'oliva",
              "120 gr · Tofu al naturale", "100 gr · Tempeh", "60 gr · Farina di ceci",
              "60 gr · Pasta di legumi", "120 gr · Hamburger Vegetale – Valsoia",
              "100 gr · Filetto di Salmone al Naturale – Rio Mare", "120 gr · Salmone",
              "120 gr · Tonno", "120 gr · Sgombro / Maccarello", "70 gr · Prosciutto crudo"
            ]
          },
          { qty: "200 gr", item: "Verdura", alts: ["80 gr · Insalata"] },
          {
            qty: "10 gr", item: "Olio di oliva extra vergine",
            alts: ["40 gr · Avocado", "20 gr · Pesto alla Genovese"]
          }
        ]
      }
    ]
  },
  {
    id: "merenda", cls: "merenda",
    meal: "Merenda", icon: "⚡",
    plates: [
      {
        name: "Piatto Unico",
        foods: [
          { qty: "200 gr", item: "Frutta fresca", alts: [] },
          {
            qty: "250 gr", item: "Latte di vacca parz. scremato",
            alts: ["250 gr · Latte di Soia", "250 gr · Kefir bianco (da bere)", "150 gr · Kefir cremoso bianco (Milk)"]
          },
          {
            qty: "50 gr", item: "Corn Flakes Originali – Kellogg's",
            alts: [
              "50 gr · Fiocchi d'avena", "50 gr · Fiocchi di frumento integrale, avena e riso – Misura",
              "50 gr · Formelle di Frumento Integrale – Weetabix", "50 gr · Rice Krispies – Kellogg's",
              "50 gr · Gallette di mais", "50 gr · Gallette di riso"
            ]
          }
        ]
      },
      {
        name: "Alternativa",
        foods: [
          { qty: "200 gr", item: "Frutta fresca", alts: [] },
          { qty: "100 gr", item: "Pane di grano duro", alts: ["60 gr · Gallette di riso", "60 gr · Fette biscottate integrali"] },
          { qty: "40 gr", item: "Marmellata – Rigoni di Asiago", alts: ["20 gr · Datteri medjool disidratati", "150 gr · Succo/spremuta/centrifuga di frutta"] }
        ]
      }
    ]
  },
  {
    id: "cena", cls: "cena",
    meal: "Cena", icon: "🌙",
    plates: [
      {
        name: "Piatto Unico",
        foods: [
          {
            qty: "80 gr", item: "Pane integrale",
            alts: [
              "70 gr · Pane di grano duro", "80 gr · Pane di segale", "50 gr · Cous Cous",
              "50 gr · Polenta (farina di mais)", "50 gr · Gran Purè – Knorr", "220 gr · Gnocchi alla Romana – Rana",
              "40 gr · Crackers (normali, riso, mais)", "40 gr · Grissini", "45 gr · Gallette di mais",
              "45 gr · Gallette di riso", "50 gr · Integrale – Wasa", "50 gr · Fette biscottate integrali",
              "200 gr · Patate", "60 gr · Tortillas – Roberto", "50 gr · Riso"
            ]
          },
          {
            qty: "200 gr", item: "Carne (tagli magri)",
            alts: [
              "200 gr · Pollo – petto", "200 gr · Manzo", "120 gr · Sfilacci di cavallo",
              "250 gr · Pesce bianco", "200 gr · Pesce spada", "150 gr · Salmone affumicato",
              "300 gr · Molluschi", "300 gr · Crostacei", "300 gr · Gamberetti sgusciati",
              "400 gr · Uova di gallina – albume", "300 gr · Fiocchi di Latte", "170 gr · Seitan al Naturale"
            ]
          },
          { qty: "200 gr", item: "Verdura", alts: ["80 gr · Insalata"] },
          {
            qty: "10 gr", item: "Olio di oliva extra vergine",
            alts: ["40 gr · Avocado", "60 gr · Olive verdi", "15 gr · Cioccolato fondente"]
          }
        ]
      }
    ]
  }
];

/* ══════════════════════════════════════
   REGISTRO PIANI + PIANO ATTIVO
══════════════════════════════════════ */
const DIET_PLANS = {
  definizione: {
    id: "definizione",
    label: "Definizione",
    period: "Mattia Nicolini · 28/05/2026 – 22/07/2026 · 8 settimane",
    meals: DIET_DEFINIZIONE
  },
  "norm-1-2": {
    id: "norm-1-2",
    label: "Normocalorica · Settimana 1-2",
    period: "Mattia Nicolini · 09/09/2026 – 03/11/2026 · Normocalorica · Sett. 1-2",
    meals: DIET_NORM_1_2
  },
  "norm-3-4": {
    id: "norm-3-4",
    label: "Normocalorica · Settimana 3-4",
    period: "Mattia Nicolini · 09/09/2026 – 03/11/2026 · Normocalorica · Sett. 3-4",
    meals: DIET_NORM_3_4
  },
  "norm-5-6": {
    id: "norm-5-6",
    label: "Normocalorica · Settimana 5-6",
    period: "Mattia Nicolini · 09/09/2026 – 03/11/2026 · Normocalorica · Sett. 5-6",
    meals: DIET_NORM_5_6
  },
  "norm-7-8": {
    id: "norm-7-8",
    label: "Normocalorica · Settimana 7-8",
    period: "Mattia Nicolini · 09/09/2026 – 03/11/2026 · Normocalorica · Sett. 7-8",
    meals: DIET_NORM_7_8
  }
};

let DIET = DIET_PLANS.definizione.meals;

/* ══════════════════════════════════════
   VALORI NUTRIZIONALI (kcal/macro per 100 g)
   Chiave = nome esatto dell'alimento come appare in DIET (food.item o alt)
══════════════════════════════════════ */
const NUTRITION = {
  'Avocado': { kcal: 160, protein: 2, fat: 14.7, carbs: 8.5 },
  'Barretta ai cereali e cioccolato': { kcal: 410, protein: 6.5, fat: 15, carbs: 64 },
  'Burro d\'arachidi': { kcal: 599, protein: 25, fat: 50, carbs: 18 },
  'Carne (tagli magri)': { kcal: 115, protein: 21, fat: 3, carbs: 0 },
  'Ceci in scatola – scolati': { kcal: 139, protein: 7.3, fat: 2.1, carbs: 22.4 },
  'Certosa Light – Galbani': { kcal: 163, protein: 17, fat: 9, carbs: 3.4 },
  'Cioccolato fondente': { kcal: 598, protein: 7.8, fat: 42.6, carbs: 45.9 },
  'Corn Flakes Originali – Kellogg\'s': { kcal: 378, protein: 7, fat: 0.9, carbs: 84 },
  'Cous Cous': { kcal: 376, protein: 12.8, fat: 1, carbs: 77.5 },
  'Crackers (normali, riso, mais)': { kcal: 428, protein: 9.4, fat: 10, carbs: 80.1 },
  'Crostacei': { kcal: 71, protein: 13.6, fat: 0.6, carbs: 2.9 },
  'Datteri medjool disidratati': { kcal: 277, protein: 1.8, fat: 0.2, carbs: 75 },
  'Fagioli Borlotti secchi cotti': { kcal: 123, protein: 8.25, fat: 0.35, carbs: 22.1 },
  'Farina d\'avena (normale o aromatizzata)': { kcal: 385, protein: 12.6, fat: 7.1, carbs: 72.3 },
  'Farina di ceci': { kcal: 387, protein: 22.4, fat: 6.7, carbs: 57.8 },
  'Farro': { kcal: 338, protein: 14.6, fat: 2.4, carbs: 70.2 },
  'Farro Soffiato al Naturale – Più Cereali Bio': { kcal: 361, protein: 12.5, fat: 2.6, carbs: 68 },
  'Feta Light – Zorbas': { kcal: 140, protein: 19, fat: 7, carbs: 0.7 },
  'Fette biscottate integrali': { kcal: 379, protein: 14.2, fat: 10, carbs: 62 },
  'Filetti di Sgombro all\'olio d\'oliva': { kcal: 311, protein: 17, fat: 27, carbs: 0 },
  'Filetto di Salmone al Naturale – Rio Mare': { kcal: 220, protein: 25, fat: 14, carbs: 0 },
  'Fiocchi d\'avena': { kcal: 373, protein: 8, fat: 7.5, carbs: 72.8 },
  'Fiocchi di frumento integrale, avena e riso – Misura': { kcal: 383, protein: 21, fat: 3.6, carbs: 62 },
  'Fiocchi di Latte': { kcal: 89, protein: 12, fat: 1.8, carbs: 4.3 },
  'Formelle di Frumento Integrale – Weetabix': { kcal: 362, protein: 12, fat: 2, carbs: 69 },
  'Frutta fresca': { kcal: 48, protein: 0.5, fat: 0.3, carbs: 11 },
  'Frutta secca a guscio': { kcal: 620, protein: 17, fat: 58, carbs: 17 },
  'Gallette di mais': { kcal: 385, protein: 8, fat: 2.8, carbs: 80 },
  'Gallette di riso': { kcal: 385, protein: 8.3, fat: 2.8, carbs: 81 },
  'Gamberetti sgusciati': { kcal: 85, protein: 16.5, fat: 0.9, carbs: 2.9 },
  'Gnocchi alla Romana – Rana': { kcal: 170, protein: 6.5, fat: 7, carbs: 20 },
  'Gnocchi di Patate': { kcal: 130, protein: 3.6, fat: 0.7, carbs: 26.5 },
  'Gran Purè – Knorr': { kcal: 318, protein: 9, fat: 0.8, carbs: 73 },
  'Grano saraceno': { kcal: 343, protein: 13.2, fat: 3.4, carbs: 71.5 },
  'Grissini': { kcal: 431, protein: 12.3, fat: 13.9, carbs: 68.4 },
  'Hamburger Vegetale – Valsoia': { kcal: 167, protein: 19, fat: 6.5, carbs: 5.9 },
  'Insalata': { kcal: 16, protein: 1.3, fat: 0.2, carbs: 2.5 },
  'Integrale – Wasa': { kcal: 338, protein: 9, fat: 1.5, carbs: 62 },
  'Kefir bianco (da bere)': { kcal: 60, protein: 3.4, fat: 3, carbs: 4.5 },
  'Kefir cremoso bianco (Milk)': { kcal: 76, protein: 3.4, fat: 2.6, carbs: 9 },
  'Latte di Soia': { kcal: 45, protein: 3.3, fat: 2, carbs: 2.7 },
  'Latte di vacca parz. scremato': { kcal: 46, protein: 3.3, fat: 1.6, carbs: 4.9 },
  'Lenticchie in scatola – scolate': { kcal: 101, protein: 7.6, fat: 0.4, carbs: 16.9 },
  'Lino – semi': { kcal: 534, protein: 18.3, fat: 42.2, carbs: 28.9 },
  'Lupini – ammollati': { kcal: 96, protein: 14, fat: 3.4, carbs: 2.8 },
  'Manzo': { kcal: 111, protein: 21.3, fat: 3, carbs: 0 },
  'Marmellata – Rigoni di Asiago': { kcal: 155, protein: 0, fat: 0, carbs: 38 },
  'Miele': { kcal: 304, protein: 0.3, fat: 0, carbs: 82.4 },
  'Molluschi': { kcal: 72, protein: 12, fat: 1.5, carbs: 2.5 },
  'Mozzarella Light': { kcal: 148, protein: 18, fat: 7, carbs: 1.3 },
  'Nocciolata – Rigoni di Asiago': { kcal: 544, protein: 8.1, fat: 32, carbs: 51 },
  'Olio di oliva extra vergine': { kcal: 884, protein: 0, fat: 100, carbs: 0 },
  'Olive verdi': { kcal: 145, protein: 1, fat: 15, carbs: 4 },
  'Orzo perlato': { kcal: 352, protein: 9.9, fat: 1.2, carbs: 77.7 },
  'Pan Bauletto al Grano Duro – Mulino Bianco': { kcal: 258, protein: 8.7, fat: 3.9, carbs: 45 },
  'Pane di grano duro': { kcal: 275, protein: 9, fat: 3.8, carbs: 52 },
  'Pane di segale': { kcal: 219, protein: 8.3, fat: 1.7, carbs: 45.4 },
  'Pane integrale': { kcal: 224, protein: 7.5, fat: 1.3, carbs: 48.5 },
  'Parmigiano': { kcal: 392, protein: 33, fat: 28, carbs: 0 },
  'Pasta di legumi': { kcal: 344, protein: 20, fat: 3.3, carbs: 50 },
  'Pasta Integrale': { kcal: 335, protein: 13, fat: 2.5, carbs: 66.2 },
  'Patate': { kcal: 80, protein: 2.1, fat: 0.2, carbs: 17 },
  'Pesce bianco': { kcal: 71, protein: 17, fat: 0.3, carbs: 0 },
  'Pesce spada': { kcal: 110, protein: 19.8, fat: 3.5, carbs: 0 },
  'Pesto alla Genovese': { kcal: 430, protein: 6, fat: 43, carbs: 5 },
  'Piadina': { kcal: 298, protein: 7, fat: 8.5, carbs: 51 },
  'Piselli in scatola – scolati': { kcal: 60, protein: 4.6, fat: 0.5, carbs: 7.6 },
  'Polenta (farina di mais)': { kcal: 361, protein: 8.1, fat: 3.6, carbs: 76.9 },
  'Pollo – petto': { kcal: 100, protein: 23.3, fat: 0.8, carbs: 0 },
  'Prosciutto crudo': { kcal: 159, protein: 29.3, fat: 4.6, carbs: 0 },
  'Protein drink (Milk)': { kcal: 62, protein: 11, fat: 0.2, carbs: 4 },
  'Protein yogurt magro bianco naturale (Milk)': { kcal: 63, protein: 10, fat: 0.3, carbs: 4.5 },
  'Proteine Vegane (pisello, riso e canapa)': { kcal: 390, protein: 75, fat: 7, carbs: 8 },
  'Quinoa': { kcal: 368, protein: 14.1, fat: 6.1, carbs: 64.2 },
  'Rice Krispies – Kellogg\'s': { kcal: 389, protein: 7, fat: 1.2, carbs: 86 },
  'Ricotta Light – Santa Lucia': { kcal: 127, protein: 7.7, fat: 9, carbs: 3.9 },
  'Riso': { kcal: 332, protein: 6.7, fat: 0.6, carbs: 80.4 },
  'Riso integrale': { kcal: 337, protein: 7.5, fat: 2.8, carbs: 74.5 },
  'Salmone': { kcal: 185, protein: 18.4, fat: 12, carbs: 1 },
  'Salmone affumicato': { kcal: 147, protein: 25.4, fat: 4.5, carbs: 1.2 },
  'Sciroppo d\'acero': { kcal: 260, protein: 0, fat: 0, carbs: 67 },
  'Seitan al Naturale': { kcal: 125, protein: 22, fat: 1.9, carbs: 4 },
  'Semi di chia': { kcal: 486, protein: 16.5, fat: 30.7, carbs: 42.1 },
  'Semi di chia / Topping': { kcal: 486, protein: 16.5, fat: 30.7, carbs: 42.1 },
  'Sfilacci di cavallo': { kcal: 189, protein: 34.8, fat: 5, carbs: 0.9 },
  'Sgombro / Maccarello': { kcal: 170, protein: 17, fat: 11.1, carbs: 0.5 },
  'Soia Edamame – Orogel': { kcal: 127, protein: 11.5, fat: 5, carbs: 6.2 },
  'Stracchino Light – Granarolo': { kcal: 183, protein: 16, fat: 12, carbs: 2.7 },
  'Succo/spremuta/centrifuga di frutta': { kcal: 42, protein: 0.6, fat: 0.1, carbs: 9.5 },
  'Tempeh': { kcal: 192, protein: 20.3, fat: 10.8, carbs: 7.6 },
  'Tofu al naturale': { kcal: 76, protein: 8.1, fat: 4.8, carbs: 1.9 },
  'Tonno': { kcal: 159, protein: 21.5, fat: 8.1, carbs: 0.1 },
  'Tonno sott\'olio – sgocciolato': { kcal: 192, protein: 25, fat: 10, carbs: 0 },
  'Tortillas – Roberto': { kcal: 303, protein: 7.1, fat: 5.9, carbs: 54 },
  'Uova di gallina – albume': { kcal: 48, protein: 10.9, fat: 0.2, carbs: 0.7 },
  'Uova di gallina – intero': { kcal: 143, protein: 12.6, fat: 9.5, carbs: 0.7 },
  'Uova di gallina – intero (o proteina a scelta)': { kcal: 143, protein: 12.6, fat: 9.5, carbs: 0.7 },
  'Verdura': { kcal: 25, protein: 1.3, fat: 0.2, carbs: 3.5 },
  'Yogurt greco magro 0% bianco': { kcal: 57, protein: 10, fat: 0.3, carbs: 3.6 },
};

function parseGrams(qtyStr) {
  const m = String(qtyStr).match(/([\d.,]+)\s*gr/i);
  return m ? parseFloat(m[1].replace(',', '.')) : 0;
}

function foodMacros(name, qtyStr) {
  const n = NUTRITION[name];
  if (!n) return { kcal: 0, protein: 0, fat: 0, carbs: 0 };
  const factor = parseGrams(qtyStr) / 100;
  return {
    kcal: n.kcal * factor,
    protein: n.protein * factor,
    fat: n.fat * factor,
    carbs: n.carbs * factor
  };
}

function addMacros(a, b) {
  return { kcal: a.kcal + b.kcal, protein: a.protein + b.protein, fat: a.fat + b.fat, carbs: a.carbs + b.carbs };
}

function round1(n) { return Math.round(n * 10) / 10; }

/* ── RENDER ── */
let uid = 0;

function renderApp() {
  document.getElementById('app').innerHTML = DIET.map(renderMeal).join('');
}

function renderMeal(m) {
  const platesHTML = m.plates.map(renderPlate).join('');
  return `
    <article class="meal-card ${m.cls}" id="${m.id}">
      <div class="meal-header">
        <span class="meal-icon">${m.icon}</span>
        <span class="meal-title">${m.meal}</span>
      </div>
      ${platesHTML}
    </article>`;
}

function renderPlate(plate) {
  const foodsHTML = plate.foods.map(renderFood).join('');
  return `
    <div class="plate-label">${plate.name}</div>
    ${foodsHTML}`;
}

function renderFood(food) {
  const id = `f${uid++}`;
  const hasAlts = food.alts.length > 0;

  const altPanel = hasAlts ? `
    <div class="alt-panel">
      <h4>Puoi sostituire con:</h4>
      <ul class="alt-list">
        ${food.alts.map(a => `
          <li>
            <span class="dot"></span>
            <span>${a}</span>
          </li>`).join('')}
      </ul>
    </div>` : '';

  const onClick = hasAlts ? `onclick="toggle('${id}')"` : '';
  const badge   = hasAlts ? `<span class="badge">${food.alts.length} alt.</span>` : '';
  const chevron = hasAlts ? `<span class="chevron">▼</span>` : '';

  return `
    <div class="food-item" id="${id}">
      <div class="food-row ${hasAlts ? 'clickable' : ''}" ${onClick}>
        <span class="food-qty">${food.qty}</span>
        <span class="food-name">${food.item}</span>
        ${badge}${chevron}
      </div>
      ${altPanel}
    </div>`;
}

function toggle(id) {
  document.getElementById(id).classList.toggle('open');
}

/* ══════════════════════════════════════
   TAB "VALORI NUTRIZIONALI"
   Stessa struttura della dieta (pasto → piatto → alimento + alternative),
   ma ogni riga mostra kcal/grassi/proteine/carbo calcolati sulla grammatura esatta.
══════════════════════════════════════ */
function renderNutritionPage() {
  const el = document.getElementById('valori-app');
  if (!el) return;
  el.innerHTML = DIET.map(renderNutritionMeal).join('');
}

function renderNutritionMeal(m) {
  const platesHTML = m.plates.map(renderNutritionPlate).join('');
  return `
    <article class="meal-card ${m.cls}" id="val-${m.id}">
      <div class="meal-header">
        <span class="meal-icon">${m.icon}</span>
        <span class="meal-title">${m.meal}</span>
      </div>
      ${platesHTML}
    </article>`;
}

function renderNutritionPlate(plate) {
  const foodsHTML = plate.foods.map(renderNutritionFood).join('');
  return `
    <div class="plate-label">${plate.name}</div>
    ${foodsHTML}`;
}

function renderNutritionFood(food) {
  const id = `nf${uid++}`;
  const hasAlts = food.alts.length > 0;
  const baseMacros = foodMacros(food.item, food.qty);

  const altPanel = hasAlts ? `
    <div class="alt-panel">
      <h4>Valori delle alternative:</h4>
      <ul class="alt-list alt-list-nutri">
        ${food.alts.map(a => {
          const am = a.match(/^(.+?)\s*·\s*(.+)$/);
          if (!am) return '';
          const qty = am[1].trim(), name = am[2].trim();
          const altMacros = foodMacros(name, qty);
          return `
          <li>
            <div class="alt-nutri-row">
              <span class="dot"></span>
              <span>${qty} · ${name}</span>
            </div>
            ${macroStripHTML(altMacros)}
          </li>`;
        }).join('')}
      </ul>
    </div>` : '';

  const onClick = hasAlts ? `onclick="toggle('${id}')"` : '';
  const badge   = hasAlts ? `<span class="badge">${food.alts.length} alt.</span>` : '';
  const chevron = hasAlts ? `<span class="chevron">▼</span>` : '';

  return `
    <div class="food-item" id="${id}">
      <div class="food-row ${hasAlts ? 'clickable' : ''}" ${onClick}>
        <span class="food-qty">${food.qty}</span>
        <span class="food-name">${food.item}</span>
        ${badge}${chevron}
      </div>
      ${macroStripHTML(baseMacros)}
      ${altPanel}
    </div>`;
}

function macroStripHTML(m) {
  return `<div class="macro-strip">
    <span class="macro-chip macro-kcal">🔥 ${Math.round(m.kcal)} kcal</span>
    <span class="macro-chip macro-fat">🥑 ${round1(m.fat)} g</span>
    <span class="macro-chip macro-protein">🍗 ${round1(m.protein)} g</span>
    <span class="macro-chip macro-carbs">🌾 ${round1(m.carbs)} g</span>
  </div>`;
}

/* ── PWA: Service Worker ── */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .catch(err => console.warn('SW non registrato:', err));
  });
}

/* ── iOS: genera apple-touch-icon via canvas ── */
(function generateAppleIcon() {
  const SIZE = 180;
  const canvas = document.createElement('canvas');
  canvas.width = SIZE; canvas.height = SIZE;
  const ctx = canvas.getContext('2d');
  const s = SIZE;

  // Sfondo gradiente
  const grad = ctx.createLinearGradient(0, 0, s, s);
  grad.addColorStop(0, '#1a237e');
  grad.addColorStop(1, '#3949ab');
  ctx.fillStyle = grad;
  const r = s * 0.22;
  ctx.beginPath();
  ctx.moveTo(r, 0); ctx.lineTo(s - r, 0); ctx.quadraticCurveTo(s, 0, s, r);
  ctx.lineTo(s, s - r); ctx.quadraticCurveTo(s, s, s - r, s);
  ctx.lineTo(r, s); ctx.quadraticCurveTo(0, s, 0, s - r);
  ctx.lineTo(0, r); ctx.quadraticCurveTo(0, 0, r, 0);
  ctx.closePath(); ctx.fill();

  // Piatto
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.arc(s * 0.5, s * 0.56, s * 0.32, 0, Math.PI * 2);
  ctx.fill();

  // Insalata
  ctx.fillStyle = '#4CAF50';
  ctx.beginPath(); ctx.ellipse(s*.48, s*.55, s*.145, s*.1, -0.2, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle = '#66BB6A';
  ctx.beginPath(); ctx.ellipse(s*.54, s*.52, s*.12, s*.088, 0.3, 0, Math.PI*2); ctx.fill();

  // Pomodoro
  ctx.fillStyle = '#EF5350';
  ctx.beginPath(); ctx.arc(s*.58, s*.57, s*.052, 0, Math.PI*2); ctx.fill();

  // Carota
  ctx.fillStyle = '#FF9800';
  ctx.beginPath(); ctx.ellipse(s*.43, s*.6, s*.055, s*.035, 0.5, 0, Math.PI*2); ctx.fill();

  // Forchetta
  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  ctx.beginPath(); ctx.roundRect(s*.22, s*.24, s*.038, s*.3, s*.019); ctx.fill();
  [s*.196, s*.222, s*.248].forEach(x => {
    ctx.beginPath(); ctx.roundRect(x, s*.24, s*.022, s*.14, s*.011); ctx.fill();
  });

  // Coltello
  ctx.beginPath(); ctx.roundRect(s*.74, s*.24, s*.036, s*.3, s*.018); ctx.fill();

  const link = document.createElement('link');
  link.rel = 'apple-touch-icon';
  link.href = canvas.toDataURL('image/png');
  document.head.appendChild(link);
}());

/* ══════════════════════════════════════
   TABS
══════════════════════════════════════ */
function switchTab(tab) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + tab).classList.add('active');
  document.getElementById('tab-' + tab).classList.add('active');
  window.scrollTo(0, 0);
  if (tab === 'recipes') renderRecipes();
  if (tab === 'days') renderDays();
  if (tab === 'valori') renderNutritionPage();
}

/* ══════════════════════════════════════
   RICETTE – STORAGE
══════════════════════════════════════ */
function loadRecipes() {
  try { return JSON.parse(localStorage.getItem('dieta-recipes') || '[]'); }
  catch(e) { return []; }
}
function persistRecipes(arr) {
  localStorage.setItem('dieta-recipes', JSON.stringify(arr));
}

/* ══════════════════════════════════════
   INGREDIENTI DAL PIANO ALIMENTARE
══════════════════════════════════════ */
function getIngredientGroups() {
  return DIET.map(meal => {
    const slots = getMealSlots(meal.id);
    const slotKeyMap = {};
    for (const slot of slots) {
      for (const item of slot.items) slotKeyMap[item.name] = slot.key;
    }
    const seen = new Set();
    const items = [];
    for (const plate of meal.plates) {
      for (const food of plate.foods) {
        if (!seen.has(food.item)) {
          seen.add(food.item);
          items.push({ qty: food.qty, name: food.item, slotKey: slotKeyMap[food.item] || food.item });
        }
        for (const alt of food.alts) {
          const m = alt.match(/^(.+?)\s*·\s*(.+)$/);
          if (m) {
            const name = m[2].trim();
            if (!seen.has(name)) { seen.add(name); items.push({ qty: m[1].trim(), name, slotKey: slotKeyMap[name] || name }); }
          }
        }
      }
    }
    return { meal: meal.meal, mealId: meal.id, icon: meal.icon, items };
  });
}

/* ══════════════════════════════════════
   MODAL HELPERS
══════════════════════════════════════ */
let _editingId = null;

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
  document.body.style.overflow = '';
}
function openModal(id) {
  document.getElementById(id).classList.add('active');
  document.body.style.overflow = 'hidden';
}
function handleOverlayClick(e, id) {
  if (e.target === e.currentTarget) closeModal(id);
}
function escHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ══════════════════════════════════════
   APRI MODAL CREA / MODIFICA
══════════════════════════════════════ */
function openRecipeModal(recipeId) {
  _editingId = recipeId || null;
  const recipe = recipeId ? loadRecipes().find(r => r.id === recipeId) : null;
  const selMap = {};
  if (recipe) recipe.ingredients.forEach(i => { selMap[i.name] = i.qty; });

  document.getElementById('modal-title').textContent = recipe ? 'Modifica ricetta' : 'Nuova ricetta';

  const groups = getIngredientGroups();
  let html = `
    <div class="form-field">
      <label class="form-label">Nome ricetta</label>
      <input class="form-input" id="recipe-name" type="text" placeholder="Es. Pasta al tonno leggera" value="${recipe ? escHtml(recipe.name) : ''}">
    </div>
    <div class="form-field">
      <label class="form-label">Seleziona ingredienti</label>`;

  for (const g of groups) {
    html += `<div class="ingredient-group">
      <div class="ingredient-group-label">${g.icon} ${g.meal}</div>`;
    for (const ing of g.items) {
      const sel = ing.name in selMap;
      const qty = sel ? selMap[ing.name] : ing.qty;
      html += `
        <div class="ingredient-item${sel ? ' selected' : ''}" onclick="toggleIngWithSlot(this)"
             data-meal-id="${escAttr(g.mealId)}" data-slot="${escAttr(ing.slotKey)}">
          <div class="ingredient-check"></div>
          <div class="ingredient-info">
            <div class="ingredient-name">${escHtml(ing.name)}</div>
            <div class="ingredient-default-qty">${escHtml(ing.qty)}</div>
          </div>
          <input class="ingredient-qty-input" type="text" value="${escHtml(qty)}" data-default="${escHtml(ing.qty)}" onclick="event.stopPropagation()">
        </div>`;
    }
    html += `</div>`;
  }
  html += `</div>`;

  document.getElementById('modal-body').innerHTML = html;
  initIngSlotBlocking();
  openModal('recipe-modal');
  if (!recipe) setTimeout(() => document.getElementById('recipe-name').focus(), 320);
}

function toggleIng(el) { el.classList.toggle('selected'); }

function toggleIngWithSlot(el) {
  if (el.classList.contains('blocked')) return;
  const mealId  = el.dataset.mealId;
  const slotKey = el.dataset.slot;
  const wasSelected = el.classList.contains('selected');
  el.classList.toggle('selected');
  const siblings = [...document.querySelectorAll('#modal-body .ingredient-item')]
    .filter(item => item !== el && item.dataset.mealId === mealId && item.dataset.slot === slotKey);
  if (!wasSelected) {
    siblings.forEach(item => { item.classList.remove('selected'); item.classList.add('blocked'); });
  } else {
    siblings.forEach(item => item.classList.remove('blocked'));
  }
}

function initIngSlotBlocking() {
  document.querySelectorAll('#modal-body .ingredient-item.selected').forEach(el => {
    const mealId  = el.dataset.mealId;
    const slotKey = el.dataset.slot;
    [...document.querySelectorAll('#modal-body .ingredient-item')]
      .filter(item => item !== el && item.dataset.mealId === mealId && item.dataset.slot === slotKey)
      .forEach(item => { item.classList.remove('selected'); item.classList.add('blocked'); });
  });
}

/* ══════════════════════════════════════
   SALVA RICETTA
══════════════════════════════════════ */
function saveRecipe() {
  const nameEl = document.getElementById('recipe-name');
  const name = nameEl.value.trim();
  if (!name) { nameEl.focus(); nameEl.style.borderColor = '#ef4444'; return; }

  const ingredients = [...document.querySelectorAll('#modal-body .ingredient-item.selected')].map(el => ({
    name: el.querySelector('.ingredient-name').textContent,
    qty:  el.querySelector('.ingredient-qty-input').value.trim() || el.querySelector('.ingredient-qty-input').dataset.default
  }));
  if (!ingredients.length) { alert('Seleziona almeno un ingrediente.'); return; }

  const recipes = loadRecipes();
  if (_editingId) {
    const idx = recipes.findIndex(r => r.id === _editingId);
    if (idx !== -1) recipes[idx] = { ...recipes[idx], name, ingredients };
  } else {
    recipes.push({ id: Date.now().toString(), name, ingredients });
  }
  persistRecipes(recipes);
  closeModal('recipe-modal');
  renderRecipes();
}

/* ══════════════════════════════════════
   RENDER LISTA RICETTE
══════════════════════════════════════ */
function renderRecipes() {
  const el = document.getElementById('recipes-list');
  if (!el) return;
  const recipes = loadRecipes();
  if (!recipes.length) {
    el.innerHTML = `<div class="recipe-empty">
      <div class="empty-icon">🍳</div>
      <p>Nessuna ricetta ancora.<br>Premi il pulsante per crearne una.</p>
    </div>`;
    return;
  }
  el.innerHTML = recipes.map(r => `
    <div class="recipe-card" onclick="openRecipeDetail('${r.id}')">
      <div class="recipe-card-icon">🍽️</div>
      <div class="recipe-card-info">
        <div class="recipe-card-name">${escHtml(r.name)}</div>
        <div class="recipe-card-count">${r.ingredients.length} ingredient${r.ingredients.length === 1 ? 'e' : 'i'}</div>
      </div>
      <div class="recipe-card-arrow">›</div>
    </div>`).join('');
}

/* ══════════════════════════════════════
   DETTAGLIO RICETTA
══════════════════════════════════════ */
function openRecipeDetail(id) {
  const recipe = loadRecipes().find(r => r.id === id);
  if (!recipe) return;
  document.getElementById('detail-title').textContent = recipe.name;
  document.getElementById('detail-body').innerHTML =
    recipe.ingredients.map(i => `
      <div class="detail-ingredient">
        <span class="detail-qty">${escHtml(i.qty)}</span>
        <span class="detail-name">${escHtml(i.name)}</span>
      </div>`).join('');
  document.getElementById('detail-footer').innerHTML = `
    <button class="btn-secondary" onclick="closeModal('detail-modal');openRecipeModal('${id}')">Modifica ricetta</button>
    <button class="btn-danger" onclick="deleteRecipe('${id}')">Elimina ricetta</button>`;
  openModal('detail-modal');
}

function deleteRecipe(id) {
  if (!confirm('Eliminare questa ricetta?')) return;
  persistRecipes(loadRecipes().filter(r => r.id !== id));
  closeModal('detail-modal');
  renderRecipes();
}

/* ══════════════════════════════════════
   GIORNATE – STORAGE
══════════════════════════════════════ */
function loadDays() {
  try { return JSON.parse(localStorage.getItem('dieta-days') || '[]'); }
  catch(e) { return []; }
}
function persistDays(arr) { localStorage.setItem('dieta-days', JSON.stringify(arr)); }

/* ══════════════════════════════════════
   SLOT MAP (food-group per mutual exclusion)
   Ogni "slot" = cibo principale + le sue alternative
   → selezionarne uno blocca gli altri dello stesso slot
══════════════════════════════════════ */
// plateIndex omesso → unisce gli slot di TUTTI i piatti del pasto (usato dalle Ricette).
// plateIndex specificato → slot del solo piatto scelto (usato dalle Giornate, dove
// Piatto Unico e le Alternative complete sono dish mutuamente esclusivi).
function getMealSlots(mealId, plateIndex) {
  const meal = DIET.find(m => m.id === mealId);
  const plates = (plateIndex === undefined || plateIndex === null) ? meal.plates : [meal.plates[plateIndex]];
  const seen = new Set();
  const slots = [];
  for (const plate of plates) {
    for (const food of plate.foods) {
      if (seen.has(food.item)) continue;
      const slot = { key: food.item, items: [{ name: food.item, qty: food.qty }] };
      seen.add(food.item);
      for (const alt of food.alts) {
        const m = alt.match(/^(.+?)\s*·\s*(.+)$/);
        if (m) {
          const name = m[2].trim();
          if (!seen.has(name)) { seen.add(name); slot.items.push({ name, qty: m[1].trim() }); }
        }
      }
      slots.push(slot);
    }
  }
  return slots;
}

// Mappa: nomeIngrediente → slotKey per un dato pasto (eventualmente per un solo piatto)
function getSlotMap(mealId, plateIndex) {
  const map = {};
  for (const slot of getMealSlots(mealId, plateIndex)) {
    for (const item of slot.items) map[item.name] = slot.key;
  }
  return map;
}

// Normalizza/ripara l'indice del piatto scelto per un pasto nell'editor giornata
// (garantisce un valore valido anche su giorni salvati prima di questa funzione,
// o se il piano dieta attivo è cambiato e ha un numero diverso di piatti)
function clampPlateIndex(meal, ms) {
  const max = meal.plates.length - 1;
  let idx = ms.plateIndex;
  if (idx === undefined || idx === null || idx < 0 || idx > max) idx = 0;
  ms.plateIndex = idx;
  return idx;
}

// Slot bloccati dalle ricette selezionate in un pasto (nel piatto correntemente scelto)
function getRecipeBlockedSlots(mealId, dayState) {
  const meal = DIET.find(m => m.id === mealId);
  const plateIndex = clampPlateIndex(meal, dayState.meals[mealId]);
  const slotMap = getSlotMap(mealId, plateIndex);
  const blocked = new Set();
  for (const rid of dayState.meals[mealId].recipes) {
    const rec = loadRecipes().find(r => r.id === rid);
    if (!rec) continue;
    for (const ing of rec.ingredients) {
      if (slotMap[ing.name]) blocked.add(slotMap[ing.name]);
    }
  }
  return blocked;
}

// Tutti i recipe ID usati nel giorno (in qualunque pasto)
function getUsedRecipeIds(dayState) {
  const used = new Set();
  for (const ms of Object.values(dayState.meals)) ms.recipes.forEach(id => used.add(id));
  return used;
}

/* ══════════════════════════════════════
   STATO EDITOR GIORNATA
══════════════════════════════════════ */
let _dayState = null;
let _editingDayId = null;

function initDayState(dayId) {
  _editingDayId = dayId || null;
  const existing = dayId ? loadDays().find(d => d.id === dayId) : null;
  if (existing) {
    _dayState = JSON.parse(JSON.stringify(existing));
    // Ripara/completa lo stato per pasti assenti o salvati prima dell'introduzione di plateIndex
    for (const meal of DIET) {
      if (!_dayState.meals[meal.id]) _dayState.meals[meal.id] = { plateIndex: 0, foods: {}, recipes: [] };
      else clampPlateIndex(meal, _dayState.meals[meal.id]);
    }
  } else {
    _dayState = {
      id: null, title: '',
      meals: Object.fromEntries(DIET.map(m => [m.id, { plateIndex: 0, foods: {}, recipes: [] }]))
    };
  }
}

/* ══════════════════════════════════════
   APRI / CHIUDI EDITOR
══════════════════════════════════════ */
function openDayEditor(dayId) {
  initDayState(dayId);
  document.getElementById('day-modal-title').textContent = dayId ? 'Modifica giornata' : 'Nuova giornata';
  renderDayEditor();
  document.getElementById('day-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeDayEditor() {
  document.getElementById('day-modal').classList.remove('active');
  document.body.style.overflow = '';
}

/* ══════════════════════════════════════
   RENDER EDITOR
══════════════════════════════════════ */
function renderDayEditor() {
  let html = `<div style="padding:18px 20px 4px">
    <div class="form-field">
      <label class="form-label">Nome della giornata</label>
      <input class="form-input" id="day-title-input" type="text"
             placeholder="Es. Lunedì tipo, Giorno di gara..."
             value="${escHtml(_dayState.title)}">
    </div>
  </div>`;
  for (const mealDef of DIET) html += buildMealSectionHTML(mealDef.id);
  document.getElementById('day-modal-body').innerHTML = html;
}

function buildMealSectionHTML(mealId) {
  const meal      = DIET.find(m => m.id === mealId);
  const ms        = _dayState.meals[mealId];
  const plateIndex = clampPlateIndex(meal, ms);
  const slots     = getMealSlots(mealId, plateIndex);
  const recBlocked = getRecipeBlockedSlots(mealId, _dayState);
  const usedRecs  = getUsedRecipeIds(_dayState);
  const recipes   = loadRecipes();

  const selCount  = Object.keys(ms.foods).length + ms.recipes.length;
  const isOpen    = document.getElementById(`msec-${mealId}`)
                      ? document.getElementById(`mbody-${mealId}`).style.display !== 'none'
                      : false;

  let html = `<div class="meal-section ${isOpen ? 'open' : ''}" id="msec-${mealId}">
    <div class="meal-section-header" onclick="toggleMealSection('${mealId}')">
      <div class="meal-section-left">
        <span class="meal-section-icon">${meal.icon}</span>
        <span class="meal-section-name">${meal.meal}</span>
      </div>
      <div class="meal-section-right">
        ${selCount > 0 ? `<span class="meal-sel-badge" id="mbadge-${mealId}">${selCount}</span>` : `<span class="meal-sel-badge" id="mbadge-${mealId}" style="display:none">0</span>`}
        <span class="meal-section-chevron" id="mchev-${mealId}">›</span>
      </div>
    </div>
    <div class="meal-section-body" id="mbody-${mealId}" style="display:${isOpen ? 'block' : 'none'}">
      ${buildMealBodyHTML(mealId, meal, plateIndex, slots, ms, recBlocked, usedRecs, recipes)}
    </div>
  </div>`;
  return html;
}

function buildMealBodyHTML(mealId, meal, plateIndex, slots, ms, recBlocked, usedRecs, recipes) {
  let html = '';

  // ── Scelta del piatto (solo se il pasto ha più piatti: Piatto Unico + Alternative complete) ──
  if (meal.plates.length > 1) {
    html += `<div class="plate-chooser">
      <div class="plate-chooser-label">Scegli il piatto</div>`;
    meal.plates.forEach((plate, i) => {
      const isSel = i === plateIndex;
      html += `<div class="plate-choice-item ${isSel ? 'selected' : ''}"
        data-meal="${mealId}" data-plate-index="${i}"
        onclick="handlePlateChoice(this)">
        <div class="plate-radio"></div>
        <div class="plate-choice-name">${escHtml(plate.name)}</div>
      </div>`;
    });
    html += `</div>
    <div class="slot-section-label">${escHtml(meal.plates[plateIndex].name)}</div>`;
  }

  // ── Slot cibi (del piatto scelto) ──
  for (const slot of slots) {
    const isSlotBlocked = recBlocked.has(slot.key);
    const selectedFood  = ms.foods[slot.key];

    if (slot.items.length === 1) {
      const item = slot.items[0];
      const isSel = selectedFood?.name === item.name;
      const blocked = isSlotBlocked && !isSel;
      html += `<div class="slot-item ${isSel ? 'selected' : ''} ${blocked ? 'blocked' : ''}"
        data-meal="${mealId}" data-slot="${escAttr(slot.key)}"
        data-name="${escAttr(item.name)}" data-qty="${escAttr(item.qty)}"
        onclick="handleFoodToggle(this)">
        <div class="ingredient-check"></div>
        <div>
          <div class="slot-name">${escHtml(item.name)}</div>
          <div class="slot-qty">${item.qty}${isSlotBlocked && isSel ? ' · incluso nella ricetta' : ''}</div>
        </div>
      </div>`;
    } else {
      html += `<div class="slot-group">
        <div class="slot-group-label">${escHtml(slot.key)} <span style="font-weight:400;opacity:.6">· scegli uno</span></div>`;
      for (const item of slot.items) {
        const isSel       = selectedFood?.name === item.name;
        const otherSel    = selectedFood && !isSel;
        const blocked     = (isSlotBlocked || otherSel) && !isSel;
        html += `<div class="slot-item ${isSel ? 'selected' : ''} ${blocked ? 'blocked' : ''}"
          data-meal="${mealId}" data-slot="${escAttr(slot.key)}"
          data-name="${escAttr(item.name)}" data-qty="${escAttr(item.qty)}"
          onclick="handleFoodToggle(this)">
          <div class="ingredient-check"></div>
          <div>
            <div class="slot-name">${escHtml(item.name)}</div>
            <div class="slot-qty">${item.qty}</div>
          </div>
        </div>`;
      }
      html += `</div>`;
    }
  }

  // ── Ricette ──
  if (recipes.length > 0) {
    html += `<div class="slot-section-label">🍽️ Ricette</div>`;
    for (const rec of recipes) {
      const isSel         = ms.recipes.includes(rec.id);
      const usedElsewhere = !isSel && usedRecs.has(rec.id);
      const blocked       = usedElsewhere;
      // Conflitti: ingredienti della ricetta vs cibi già selezionati nel pasto
      const slotMap = getSlotMap(mealId, plateIndex);
      const conflictSlots = isSel ? [] : rec.ingredients
        .map(ing => slotMap[ing.name])
        .filter(sk => sk && ms.foods[sk]);
      const note = usedElsewhere
        ? '· già usata in un altro pasto'
        : conflictSlots.length > 0
          ? `· sostituirà ${conflictSlots.length} alimento/i`
          : `${rec.ingredients.length} ingredienti`;
      html += `<div class="slot-item ${isSel ? 'selected' : ''} ${blocked ? 'blocked' : ''}"
        data-meal="${mealId}" data-rid="${rec.id}"
        onclick="handleRecipeToggle(this)">
        <div class="ingredient-check"></div>
        <div>
          <div class="slot-name">${escHtml(rec.name)}</div>
          <div class="slot-qty ${usedElsewhere ? '' : conflictSlots.length ? 'slot-note' : ''}">${note}</div>
        </div>
      </div>`;
    }
  }

  return html;
}

/* ══════════════════════════════════════
   TOGGLE ACCORDION PASTO
══════════════════════════════════════ */
function toggleMealSection(mealId) {
  const sec  = document.getElementById(`msec-${mealId}`);
  const body = document.getElementById(`mbody-${mealId}`);
  const open = body.style.display !== 'none';
  body.style.display = open ? 'none' : 'block';
  sec.classList.toggle('open', !open);
}

/* ══════════════════════════════════════
   SCELTA PIATTO (Piatto Unico / Alternativa completa)
   Cambiare piatto azzera i cibi scelti nel piatto precedente,
   perché i loro slot non appartengono più al piatto visibile.
   Le ricette restano (non sono legate a un piatto specifico).
══════════════════════════════════════ */
function handlePlateChoice(el) {
  const mealId   = el.dataset.meal;
  const newIndex = parseInt(el.dataset.plateIndex, 10);
  const ms = _dayState.meals[mealId];
  if (ms.plateIndex === newIndex) return;
  ms.plateIndex = newIndex;
  ms.foods = {};
  refreshMealSection(mealId);
}

/* ══════════════════════════════════════
   TOGGLE CIBO (con mutual exclusion per slot)
══════════════════════════════════════ */
function handleFoodToggle(el) {
  if (el.classList.contains('blocked')) return;
  const { meal, slot, name, qty } = el.dataset;
  const ms = _dayState.meals[meal];
  if (ms.foods[slot]?.name === name) {
    delete ms.foods[slot]; // deseleziona
  } else {
    ms.foods[slot] = { name, qty }; // seleziona (sovrascrive slot)
  }
  refreshMealSection(meal);
}

/* ══════════════════════════════════════
   TOGGLE RICETTA IN UN PASTO
══════════════════════════════════════ */
function handleRecipeToggle(el) {
  if (el.classList.contains('blocked')) return;
  const { meal, rid } = el.dataset;
  const ms = _dayState.meals[meal];
  const idx = ms.recipes.indexOf(rid);
  if (idx !== -1) {
    ms.recipes.splice(idx, 1); // rimuovi
  } else {
    // Rimuovi cibi che vanno in conflitto con questa ricetta
    const slotMap = getSlotMap(meal);
    const rec = loadRecipes().find(r => r.id === rid);
    if (rec) {
      for (const ing of rec.ingredients) {
        const sk = slotMap[ing.name];
        if (sk && ms.foods[sk]) delete ms.foods[sk];
      }
    }
    ms.recipes.push(rid);
  }
  refreshMealSection(meal);
}

/* ══════════════════════════════════════
   REFRESH SEZIONE PASTO (dopo toggle)
══════════════════════════════════════ */
function refreshMealSection(mealId) {
  const body = document.getElementById(`mbody-${mealId}`);
  if (!body) return;
  const meal     = DIET.find(m => m.id === mealId);
  const ms       = _dayState.meals[mealId];
  const plateIndex = clampPlateIndex(meal, ms);
  const slots    = getMealSlots(mealId, plateIndex);
  const recBlk   = getRecipeBlockedSlots(mealId, _dayState);
  const usedRecs = getUsedRecipeIds(_dayState);
  const recipes  = loadRecipes();
  body.innerHTML = buildMealBodyHTML(mealId, meal, plateIndex, slots, ms, recBlk, usedRecs, recipes);
  // aggiorna badge nel header
  const selCount = Object.keys(ms.foods).length + ms.recipes.length;
  const badge = document.getElementById(`mbadge-${mealId}`);
  if (badge) { badge.textContent = selCount; badge.style.display = selCount > 0 ? 'flex' : 'none'; }
}

/* ══════════════════════════════════════
   SALVA GIORNATA
══════════════════════════════════════ */
function saveDay() {
  const titleEl = document.getElementById('day-title-input');
  const title   = titleEl.value.trim();
  if (!title) { titleEl.focus(); titleEl.style.borderColor = '#ef4444'; return; }

  // Controlla che ci sia almeno un alimento selezionato
  const hasAny = DIET.some(m => {
    const ms = _dayState.meals[m.id];
    return Object.keys(ms.foods).length > 0 || ms.recipes.length > 0;
  });
  if (!hasAny) { alert('Seleziona almeno un alimento in un pasto.'); return; }

  _dayState.title = title;
  const days = loadDays();
  if (_editingDayId) {
    const idx = days.findIndex(d => d.id === _editingDayId);
    if (idx !== -1) days[idx] = { ...days[idx], ..._dayState, id: _editingDayId };
  } else {
    _dayState.id = Date.now().toString();
    days.push(_dayState);
  }
  persistDays(days);
  closeDayEditor();
  renderDays();
}

/* ══════════════════════════════════════
   RENDER LISTA GIORNATE
══════════════════════════════════════ */
function renderDays() {
  const el = document.getElementById('days-list');
  if (!el) return;
  const days = loadDays();
  if (!days.length) {
    el.innerHTML = `<div class="recipe-empty">
      <div class="empty-icon">📅</div>
      <p>Nessuna giornata ancora.<br>Premi il pulsante per crearne una.</p>
    </div>`;
    return;
  }
  el.innerHTML = days.map(d => {
    const totalFoods = DIET.reduce((acc, m) => {
      const ms = d.meals[m.id];
      return acc + Object.keys(ms?.foods || {}).length + (ms?.recipes?.length || 0);
    }, 0);
    return `<div class="day-card" onclick="openDayDetail('${d.id}')">
      <div class="day-card-icon">📅</div>
      <div class="day-card-info">
        <div class="day-card-name">${escHtml(d.title)}</div>
        <div class="day-card-sub">${totalFoods} scelt${totalFoods === 1 ? 'a' : 'e'} in ${DIET.filter(m => {
          const ms = d.meals[m.id]; return (ms?.foods && Object.keys(ms.foods).length > 0) || ms?.recipes?.length > 0;
        }).length} pasti</div>
      </div>
      <div class="day-card-arrow">›</div>
    </div>`;
  }).join('');
}

/* ══════════════════════════════════════
   DETTAGLIO GIORNATA
══════════════════════════════════════ */
/* ══════════════════════════════════════
   TOTALI NUTRIZIONALI DI UNA GIORNATA
   Somma gli alimenti scelti in ogni pasto + gli ingredienti delle ricette selezionate
══════════════════════════════════════ */
function computeDayTotals(day) {
  let total = { kcal: 0, protein: 0, fat: 0, carbs: 0 };
  const recipes = loadRecipes();
  for (const meal of DIET) {
    const ms = day.meals[meal.id];
    if (!ms) continue;
    for (const food of Object.values(ms.foods || {})) {
      total = addMacros(total, foodMacros(food.name, food.qty));
    }
    for (const rid of ms.recipes || []) {
      const rec = recipes.find(r => r.id === rid);
      if (!rec) continue;
      for (const ing of rec.ingredients) {
        total = addMacros(total, foodMacros(ing.name, ing.qty));
      }
    }
  }
  return total;
}

function renderDayTotalsHTML(day) {
  const t = computeDayTotals(day);
  const kcal = Math.round(t.kcal);
  const fatPct     = t.kcal > 0 ? Math.round((t.fat * 9 / t.kcal) * 100) : 0;
  const proteinPct = t.kcal > 0 ? Math.round((t.protein * 4 / t.kcal) * 100) : 0;
  const carbsPct   = t.kcal > 0 ? Math.round((t.carbs * 4 / t.kcal) * 100) : 0;
  return `
    <div class="day-totals">
      <div class="day-totals-kcal">
        <span class="day-totals-kcal-value">${kcal}</span>
        <span class="day-totals-kcal-unit">kcal totali</span>
      </div>
      <div class="day-totals-macros">
        <div class="day-totals-macro">
          <div class="day-totals-macro-label">Grassi</div>
          <div class="day-totals-macro-value">${Math.round(t.fat)} g</div>
          <div class="day-totals-macro-pct">${fatPct}%</div>
        </div>
        <div class="day-totals-macro">
          <div class="day-totals-macro-label">Proteine</div>
          <div class="day-totals-macro-value">${Math.round(t.protein)} g</div>
          <div class="day-totals-macro-pct">${proteinPct}%</div>
        </div>
        <div class="day-totals-macro">
          <div class="day-totals-macro-label">Carboidrati</div>
          <div class="day-totals-macro-value">${Math.round(t.carbs)} g</div>
          <div class="day-totals-macro-pct">${carbsPct}%</div>
        </div>
      </div>
    </div>`;
}

function openDayDetail(id) {
  const day = loadDays().find(d => d.id === id);
  if (!day) return;
  document.getElementById('day-detail-title').textContent = day.title;

  let html = '';
  for (const mealDef of DIET) {
    const ms = day.meals[mealDef.id];
    const foods   = Object.values(ms?.foods || {});
    const recipes = (ms?.recipes || []).map(rid => loadRecipes().find(r => r.id === rid)).filter(Boolean);
    if (!foods.length && !recipes.length) continue;
    const plateName = mealDef.plates.length > 1 ? mealDef.plates[clampPlateIndex(mealDef, ms)].name : null;
    html += `<div class="day-detail-meal">
      <div class="day-detail-meal-header">
        <span>${mealDef.icon}</span>
        <span class="day-detail-meal-title">${mealDef.meal}</span>
        ${plateName ? `<span class="day-detail-plate-tag">${escHtml(plateName)}</span>` : ''}
      </div>`;
    for (const f of foods) {
      html += `<div class="day-detail-item">
        <span class="day-detail-qty">${escHtml(f.qty)}</span>
        <span class="day-detail-name">${escHtml(f.name)}</span>
      </div>`;
    }
    for (const rec of recipes) {
      html += `<div class="day-detail-item">
        <span class="day-detail-recipe-badge">Ricetta</span>
        <span class="day-detail-name">${escHtml(rec.name)}</span>
      </div>`;
    }
    html += `</div>`;
  }
  html += renderDayTotalsHTML(day);
  document.getElementById('day-detail-body').innerHTML = html;
  document.getElementById('day-detail-footer').innerHTML = `
    <button class="btn-secondary" onclick="closeModal('day-detail-modal');openDayEditor('${id}')">Modifica giornata</button>
    <button class="btn-danger" onclick="deleteDay('${id}')">Elimina giornata</button>`;
  openModal('day-detail-modal');
}

function deleteDay(id) {
  if (!confirm('Eliminare questa giornata?')) return;
  persistDays(loadDays().filter(d => d.id !== id));
  closeModal('day-detail-modal');
  renderDays();
}

function escAttr(s) {
  return String(s).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/* ══════════════════════════════════════
   SELEZIONE PIANO ALIMENTARE
   (definizione · normocalorica sett. 1-2/3-4/5-6/7-8)
══════════════════════════════════════ */
const PLAN_STORAGE_KEY = 'dieta-selected-plan';

function chooseGroup(group) {
  if (group === 'definizione') { selectPlan('definizione'); return; }
  document.getElementById('selector-main').style.display = 'none';
  document.getElementById('selector-weeks').style.display = 'flex';
}

function backToGroups() {
  document.getElementById('selector-weeks').style.display = 'none';
  document.getElementById('selector-main').style.display = 'flex';
}

function selectPlan(planId) {
  if (!DIET_PLANS[planId]) return;
  localStorage.setItem(PLAN_STORAGE_KEY, planId);
  activatePlan(planId);
}

function activatePlan(planId) {
  const plan = DIET_PLANS[planId];
  if (!plan) return;
  DIET = plan.meals;
  document.getElementById('diet-subtitle').textContent = plan.period;
  document.getElementById('page-selector').classList.remove('active');
  document.getElementById('app-shell').classList.add('active');
  renderApp();
  switchTab('diet');
}

function changePlan() {
  localStorage.removeItem(PLAN_STORAGE_KEY);
  document.getElementById('app-shell').classList.remove('active');
  document.getElementById('selector-weeks').style.display = 'none';
  document.getElementById('selector-main').style.display = 'flex';
  document.getElementById('page-selector').classList.add('active');
}

(function initPlanSelector() {
  const saved = localStorage.getItem(PLAN_STORAGE_KEY);
  if (saved && DIET_PLANS[saved]) activatePlan(saved);
})();
