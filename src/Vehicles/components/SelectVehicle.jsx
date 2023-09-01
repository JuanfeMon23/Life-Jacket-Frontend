import React, { useEffect, useState } from 'react'
import Data from '../../../vehicles.json'
import {Select, SelectItem} from "@nextui-org/react";

const vehicles = [{
  "vehicleType": [
    {
      "type": "Automovil",
      "brand": [
        {
          "name": "Alfa Romeo",
          "line" : [
            "159",
            "Mito"
          ]
        },
        {
          "name": "Ample",
          "line" : [
            "Ava"
          ]
        },
        {
          "name": "Asia",
          "line" : [
            "Rocsta"
          ]
        },
        {
          "name": "AUDI",
          "line" : [
            "A1",
            "A1 1.4 T",
            "A3",
            "A4",
            "A5",
            "A6",
            "A7",
            "Allroad",
            "Q2",
            "Q3",
            "Q5",
            "Q7",
            "R8",
            "RSQ3",
            "S3",
            "TT"
          ]
        },
        {
          "name": "BAIC",
          "line" : [
            "Kenbo",
            "MZ45",
            "X35"
          ]
        },
        {
          "name": "Beijing",
          "line" : [
            "BJ2032S"
          ]
        },
        {
          "name": "BMW",
          "line" : [
            "2002",
            "118i",
            "218i",
            "320i",
            "330i",
            "M",
            "M2",
            "M235",
            "M3",
            "M5",
            "Serie 1",
            "Serie 2",
            "Serie 3",
            "Serie 4",
            "Serie 5",
            "Serie 6",
            "Serie 7",
            "X1",
            "X2",
            "X3",
            "X4",
            "X5",
            "X6",
            "Z4",
            "i"
          ]
        },
        {
          "name": "Brilliance",
          "line" : [
            "H220",
            "V3",
            "V5"
          ]
        },
        {
          "name": "Buick",
          "line" : [
            "Special"
          ]
        },
        {
          "name": "BYD",
          "line" : [
            "E1",
            "E3",
            "F-Zero",
            "F0",
            "Song"
          ]
        },
        {
          "name": "Chana",
          "line" : [
            "Benni",
            "Star Truck",
            "Star Van"
          ]
        },
        {
          "name": "Changan",
          "line" : [
            "Benni",
            "CS15",
            "CS35",
            "CS55",
            "E Star",
            "MiniTruck",
            "MiniVan",
            "S50",
            "Van Plus"
          ]
        },
        {
          "name": "Changhe",
          "line" : [
            "970",
            "Freedom",
            "Freedom Van",
            "Q35"
          ]
        },
        {
          "name": "Chery",
          "line" : [
            "Cowin",
            "Fulwin",
            "Grand Tiggo",
            "Nice",
            "Q",
            "QQ",
            "Tiggo",
            "Vancargo",
            "Vanpass",
            "Xcross",
            "Y380",
            "Yoki",
            "Yoya",
            "Yoyo"
          ]
        },
        {
          "name": "Chevrolet",
          "line" : [
            "39",
            "3100",
            "Alto",
            "Apache",
            "Astra",
            "Aveo",
            "Beat",
            "Bel Air",
            "Blazer",
            "Blazer 4x4",
            "C10",
            "Camaro",
            "Captiva",
            "Carry",
            "Chevy",
            "Cheyenne",
            "Cobalt",
            "Colorado",
            "Corsa",
            "Corvette",
            "Cruze",
            "Dmax",
            "Epica",
            "Equinox",
            "Esteem",
            "Grand Blazer",
            "Grand Vitara",
            "HHR",
            "Jimmy",
            "Joy",
            "Luv",
            "Luv 1.6",
            "Luv 2.2",
            "Luv 2.3",
            "Luv D-max",
            "Malibu",
            "Monza",
            "N200",
            "N300",
            "Onix",
            "Optra",
            "Orlando",
            "Rodeo",
            "Sail",
            "Samurai",
            "Silverado",
            "Sonic",
            "Spark",
            "Sprint",
            "Super Carry",
            "Swift",
            "Tahoe",
            "Tracker",
            "Trail Blazer",
            "Traverse",
            "Trooper",
            "Vitara",
            "Vivant",
            "Wagon R+",
            "Zafira"
          ]
        },
        {
          "name": "Chrysler",
          "line" : [
            "Town"
          ]
        },
        {
          "name": "Citroen",
          "line" : [
            "AX",
            "Aircross",
            "C-Elysee",
            "C2",
            "C3",
            "C4",
            "C4 Picasso",
            "C5",
            "DS3",
            "DS4",
            "Saxo",
            "Xantia",
            "Xantia II",
            "Xsara",
            "Xsara Picasso",
            "ZX"
          ]
        },
        {
          "name": "CUPRA",
          "line" : [
            "Formentor"
          ]
        },
        {
          "name": "Daewoo",
          "line" : [
            "Cielo",
            "Damas",
            "Espero",
            "Lanos",
            "Leganza",
            "Matiz",
            "Nubira",
            "Racer",
            "Tico"
          ]
        },
        {
          "name": "Daihatsu",
          "line" : [
            "Charade",
            "F20",
            "Feroza",
            "Rocky",
            "Sirion",
            "Terios"
          ]
        },
        {
          "name": "DFSK",
          "line" : [
            "1.3",
            "C37",
            "Chasis",
            "Glory",
            "Pick Up",
            "Seres",
            "V21",
            "V22",
            "Van"
          ]
        },
        {
          "name": "Dodge",
          "line" : [
            "Alpine",
            "Caliber",
            "D100",
            "Dart",
            "Demon",
            "Durango",
            "Fargo",
            "Journey",
            "Kingsway",
            "PASAJEROS",
            "Ram",
            "Stealth"
          ]
        },
        {
          "name": "Dongfeng",
          "line" : [
            "Joyear",
            "Mini Van",
            "Rich"
          ]
        },
        {
          "name": "DS",
          "line" : [
            "3",
            "7"
          ]
        },
        {
          "name": "FAW",
          "line" : [
            "Minivan",
            "R7"
          ]
        },
        {
          "name": "Fiat",
          "line" : [
            "131",
            "147",
            "500",
            "500 X",
            "Argo",
            "Bertone",
            "Bravo",
            "Cronos",
            "Fiorino",
            "Idea",
            "Linea",
            "Mobi",
            "Nuevo Uno",
            "Palio",
            "Palio Adventure",
            "Premio",
            "Pulse",
            "Punto",
            "Siena",
            "Strada",
            "Tempra",
            "Tipo",
            "Topolino",
            "Uno"
          ]
        },
        {
          "name": "Ford",
          "line" : [
            "Bronco",
            "Courier",
            "Ecosport",
            "Edge",
            "Escape",
            "Escort",
            "Expedition",
            "Explorer",
            "F100",
            "F150",
            "F250",
            "Falcon",
            "Festiva",
            "Fiesta",
            "Focus",
            "Fusion",
            "Laser",
            "Llanero",
            "Mustang",
            "Nueva Ranger",
            "Panel",
            "Ranger"
          ]
        },
        {
          "name": "Foton",
          "line" : [
            "Mini Truck",
            "Mini Van",
            "Tunland"
          ]
        },
        {
          "name": "GAZ",
          "line" : [
            "Campero"
          ]
        },
        {
          "name": "Geely",
          "line" : [
            "EC7",
            "LC 1.3",
            "MK 1.5"
          ]
        },
        {
          "name": "GMC",
          "line" : [
            "Panel",
            "Yucon"
          ]
        },
        {
          "name": "Gonow",
          "line" : [
            "CUV"
          ]
        },
        {
          "name": "Great Wall",
          "line" : [
            "Florid",
            "H3",
            "Haval",
            "Hover Cuv",
            "M4",
            "Voleex",
            "Wingle",
            "Wingle 5",
            "Wingle 7",
            "Wingle Sport"
          ]
        },
        {
          "name": "Hafei",
          "line" : [
            "Luzun",
            "Minyi",
            "Ruiyi",
            "Zhongyi"
          ]
        },
        {
          "name": "Haval",
          "line" : [
            "H6 All New"
          ]
        },
        {
          "name": "Honda",
          "line" : [
            "Accord",
            "CR-V",
            "CRX",
            "City",
            "Civic",
            "Fit",
            "Hr-v",
            "Integra",
            "Odyssey",
            "Pilot"
          ]
        },
        {
          "name": "Hummer",
          "line" : [
            "H3"
          ]
        },
        {
          "name": "Hyundai",
          "line" : [
            "Accent",
            "Atos",
            "Azera",
            "Creta",
            "EON",
            "Elantra",
            "Elantra Supreme",
            "Excel",
            "Genesis",
            "Genesis Coupe",
            "Getz",
            "Grand I10",
            "Grand i10 Illusion",
            "Graviti",
            "H1",
            "HB20",
            "HB20s",
            "Ioniq",
            "Kona",
            "New Elantra",
            "Pony",
            "Santafe",
            "Santro",
            "Scoupe",
            "Sonata",
            "Terracan",
            "Tucson",
            "Veloster",
            "Venue",
            "Veracruz",
            "i10",
            "i20",
            "i25",
            "i25 Accent",
            "i30",
            "i35"
          ]
        },
        {
          "name": "International",
          "line" : [
            "Harvester"
          ]
        },
        {
          "name": "JAC",
          "line" : [
            "B Class",
            "B-Cross",
            "Cross",
            "Hfc 6451",
            "IEV7S",
            "J3",
            "JS2",
            "Rein",
            "S2",
            "S3",
            "S5",
            "Smile",
            "T6",
            "T8",
            "Veloce"
          ]
        },
        {
          "name": "Jaguar",
          "line" : [
            "E-Pace",
            "F-Pace",
            "X-TYPE",
            "XE",
            "XF"
          ]
        },
        {
          "name": "JEEP",
          "line" : [
            "CJ3",
            "CJ5",
            "CJ7",
            "Cherokee",
            "Comando",
            "Commander",
            "Compass",
            "Gladiator",
            "Grand Cherokee",
            "Liberty",
            "Renegade",
            "Willys",
            "Wrangler"
          ]
        },
        {
          "name": "JETOUR",
          "line" : [
            "X70"
          ]
        },
        {
          "name": "JMC",
          "line" : [
            "Doble Cabina",
            "Landwind",
            "Tiger 7",
            "Vigus"
          ]
        },
        {
          "name": "Karry",
          "line" : [
            "Yoki",
            "Yoyo"
          ]
        },
        {
          "name": "KIA",
          "line" : [
            "Cadenza",
            "Carens",
            "Carens Rondo",
            "Carens-Rondo",
            "Carnival",
            "Cerato",
            "Cerato Forte",
            "Cerato Koup",
            "Cerato Pro",
            "Cerato Vivro",
            "Grand Sportage",
            "Magentis",
            "Master",
            "Mohave",
            "New Rio",
            "Niro",
            "Opirus",
            "Optima",
            "Picanto",
            "Picanto iON",
            "Pregio",
            "Pride",
            "Rio",
            "Rio Spice",
            "Rio Stylus",
            "Rio Xcite",
            "Sedona",
            "Seltos",
            "Sephia",
            "Soluto",
            "Sonet",
            "Sorento",
            "Sorento Radical",
            "Soul",
            "Sportage",
            "Sportage FQ",
            "Sportage II",
            "Sportage Revolution",
            "Stonic",
            "Tonic",
            "X-LINE"
          ]
        },
        {
          "name": "Lada",
          "line" : [
            "Niva"
          ]
        },
        {
          "name": "Land Rover",
          "line" : [
            "Discovery",
            "Discovery 1",
            "Discovery 4",
            "Discovery Sport",
            "Freelander",
            "Freelander 2",
            "Range Rover",
            "Range Rover Evoque",
            "Range Rover Sport",
            "Santana",
            "Velar"
          ]
        },
        {
          "name": "Lexus",
          "line" : [
            "GX 460",
            "GX 470",
            "LX 570"
          ]
        },
        {
          "name": "Lifan",
          "line" : [
            "520",
            "Cabina Sencilla",
            "X60"
          ]
        },
        {
          "name": "Mahindra",
          "line" : [
            "Kuv",
            "PIK UP",
            "Scorpio",
            "Xuv 500"
          ]
        },
        {
          "name": "Mazda",
          "line" : [
            "2",
            "3",
            "5",
            "6",
            "121",
            "323",
            "626",
            "3 All New",
            "Allegro",
            "B1600",
            "B2000",
            "B2200",
            "B2600",
            "BT-50",
            "CX-3",
            "CX-30",
            "CX-5",
            "CX-50",
            "CX-7",
            "CX-9",
            "Demio",
            "MPV",
            "MX3",
            "Matsuri 626",
            "Speed 3"
          ]
        },
        {
          "name": "Mercedes Benz",
          "line" : [
            "Amg",
            "Clase A",
            "Clase B",
            "Clase C",
            "Clase CLA",
            "Clase CLC",
            "Clase E",
            "Clase GL",
            "Clase GLA",
            "Clase GLB",
            "Clase GLC",
            "Clase GLE",
            "Clase GLK",
            "Clase GLS",
            "Clase GTS",
            "Clase M",
            "Clase S",
            "Clase SLC",
            "Clase SLK",
            "Sprinter"
          ]
        },
        {
          "name": "Mercury",
          "line" : [
            "Sable GS"
          ]
        },
        {
          "name": "MG",
          "line" : [
            "3",
            "6",
            "350",
            "550",
            "1.3",
            "GT",
            "ZS"
          ]
        },
        {
          "name": "Mini",
          "line" : [
            "1.6 S Turbo",
            "Clubman",
            "Cooper",
            "Countryman",
            "JCW"
          ]
        },
        {
          "name": "Mitsubishi",
          "line" : [
            "ASX",
            "Eclipse",
            "Endeavor",
            "Galant",
            "Grandis",
            "L200",
            "L300",
            "LO42",
            "Lancer",
            "Mirage",
            "Montero",
            "Nativa",
            "New Lancer",
            "New Montero",
            "New Nativa",
            "New Outlander",
            "Outlander",
            "Pajero",
            "Sportero",
            "WAGON",
            "Xpander"
          ]
        },
        {
          "name": "Nissan",
          "line" : [
            "AD Wagon",
            "Almera",
            "Bluebird",
            "Chasis Frontier",
            "D21",
            "D22",
            "D22 Frontier",
            "Frontier",
            "Frontier NP300",
            "Juke",
            "Junior",
            "Kicks",
            "Leaf",
            "March",
            "Micra",
            "Murano",
            "NP 300",
            "Navara",
            "New March",
            "New Murano",
            "New Pathfinder",
            "New Qashqai",
            "New Sentra",
            "New Urvan",
            "New Versa",
            "Note",
            "Nuevo Almera",
            "Nuevo Patrol",
            "Nuevo Primera",
            "Pathfinder",
            "Patrol",
            "Primera",
            "Qashqai",
            "Qashqai 2",
            "Quest",
            "Sentra",
            "Teana",
            "Terrano II",
            "Tiida",
            "Tl720",
            "Urvan",
            "Versa",
            "X-Trail",
            "X-trail Classic",
            "X-trail I"
          ]
        },
        {
          "name": "OldLandwind",
          "line" : [
            "X6 2.4"
          ]
        },
        {
          "name": "OPEL",
          "line" : [
            "Crossland",
            "Grandland",
            "Grandland X",
            "Rekord"
          ]
        },
        {
          "name": "Peugeot",
          "line" : [
            "107",
            "206",
            "207",
            "208",
            "301",
            "306",
            "307",
            "308",
            "405",
            "406",
            "407",
            "408",
            "508",
            "2008",
            "3008",
            "5008"
          ]
        },
        {
          "name": "Pontiac",
          "line" : [
            "Grand Am"
          ]
        },
        {
          "name": "Porsche",
          "line" : [
            "Boxster",
            "Cayenne",
            "Macan",
            "Panamera"
          ]
        },
        {
          "name": "RAM",
          "line" : [
            "700",
            "1500",
            "2500",
            "SLT"
          ]
        },
        {
          "name": "Renault",
          "line" : [
            "Alaskan",
            "Buggy",
            "Captur",
            "Clio",
            "Duster",
            "Duster Oroch",
            "Etoile",
            "Fluence",
            "Intens MT",
            "Kangoo",
            "Koleos",
            "Kwid",
            "Laguna",
            "Logan",
            "Megane",
            "Megane II",
            "Megane III",
            "Nueva Koleos",
            "Nuevo Twingo",
            "Oroch",
            "Sandero",
            "Scala",
            "Scenic",
            "Stepway",
            "Symbol",
            "Symbol II",
            "Trafic",
            "Twingo",
            "Twizy",
            "Zen",
            "Zoe",
            "r12",
            "r18",
            "r19",
            "r21",
            "r4",
            "r6",
            "r9"
          ]
        },
        {
          "name": "Saic Wuling",
          "line" : [
            "Minivan Basica",
            "Supervan Basica"
          ]
        },
        {
          "name": "SEAT",
          "line" : [
            "Altea",
            "Arona",
            "Ateca",
            "Cordoba",
            "Ibiza",
            "Leon",
            "Tarraco",
            "Toledo"
          ]
        },
        {
          "name": "Shineray",
          "line" : [
            "Van"
          ]
        },
        {
          "name": "Simca",
          "line" : [
            "1.300 GLS"
          ]
        },
        {
          "name": "Skoda",
          "line" : [
            "Fabia",
            "Felicia",
            "Forman",
            "Octavia"
          ]
        },
        {
          "name": "Soueast",
          "line" : [
            "Dx3"
          ]
        },
        {
          "name": "Ssangyong",
          "line" : [
            "Actyon",
            "Actyon Sports",
            "Korando",
            "Korando C",
            "Kyron",
            "Musso",
            "New Actyon",
            "New Actyon Sports",
            "New Korando C",
            "Rexton",
            "Rexton G4",
            "Rexton II",
            "Rexton Sports",
            "Rexton W",
            "Rodius",
            "Tivoli"
          ]
        },
        {
          "name": "Studebaker",
          "line" : [
            "Champion"
          ]
        },
        {
          "name": "Subaru",
          "line" : [
            "Forester",
            "Impreza",
            "Legacy",
            "Leone",
            "Outback"
          ]
        },
        {
          "name": "Suzuki",
          "line" : [
            "Alto",
            "Alto K10",
            "Baleno",
            "CJ410",
            "Celerio",
            "Ciaz",
            "Ertiga",
            "Geo",
            "Grand Vitara",
            "Grand Vitara Sz",
            "Jimny",
            "Kizashi",
            "Lj 80",
            "Nuevo Alto 800",
            "S-Cross",
            "SJ410",
            "SX4",
            "Spresso",
            "Swift",
            "Vitara",
            "XL7"
          ]
        },
        {
          "name": "Toyota",
          "line" : [
            "4Runner",
            "Avalon",
            "Burbuja",
            "Camry",
            "Celica",
            "Corolla",
            "Corolla Cross",
            "Corona",
            "Cross",
            "Delta",
            "FJ",
            "FJ Cruiser",
            "FJ40",
            "FJ43",
            "FJ70",
            "Fortuner",
            "Highlander",
            "Hilux",
            "Land Cruiser",
            "Land Cruiser 200",
            "New Corolla",
            "New Hilux",
            "Prado",
            "Previa",
            "Rav 4",
            "Rav4",
            "Rush",
            "Sienna",
            "Sumo",
            "Tacoma",
            "Tercel",
            "Tundra",
            "Yaris"
          ]
        },
        {
          "name": "Volkswagen",
          "line" : [
            "Gol Trendline",
            "Amarok",
            "Beetle",
            "Bora",
            "Comfortline",
            "Crafter 35",
            "Cross Up",
            "Crossfox",
            "Derby",
            "Escarabajo",
            "Fox",
            "Gol",
            "Gol Comfortline",
            "Golf",
            "Jetta",
            "Jetta Sportline Beats",
            "New Beetle",
            "Nivus",
            "Nuevo Jetta",
            "Parati",
            "Passat",
            "Polo",
            "Saveiro",
            "Space Fox",
            "T-Cross",
            "T-Cross Highline",
            "T5 Multivans",
            "Taos",
            "Teramont",
            "Tiguan",
            "Tiguan Allspace Highline",
            "Touareg",
            "Transporter",
            "Vento",
            "Virtus",
            "Voyage",
            "Voyage Comfortline",
            "Voyage Trendline"
          ]
        },
        {
          "name": "Volvo",
          "line" : [
            "940",
            "C30",
            "C40",
            "NEW S60",
            "S40",
            "S60",
            "S80",
            "V40",
            "V40 Cross Country",
            "V90",
            "XC 40",
            "XC 60",
            "XC 90"
          ]
        },
        {
          "name": "Willys",
          "line" : [
            "Aero"
          ]
        },
        {
          "name": "ZNA",
          "line" : [
            "Yumsun"
          ]
        },
        {
          "name": "Zotye",
          "line" : [
            "Duna",
            "Nomada"
          ]
        }
      ]
    },
    {
      "type": "Motos",
      "brand": [
        {
          "name": "Yamaha",
          "line" : [
            "Bws", 
            "Crypton", 
            "DT", 
            "FINO", 
            "FZ", 
            "Fazer", 
            "Grizzly", 
            "Libero", 
            "MT", 
            "Mt03",
            "NMax", 
            "R600", 
            "Raptor YFM", 
            "SZ-R", 
            "Tracer", 
            "Virago", 
            "XL", 
            "XT", 
            "XTZ",
            "Xmax", 
            "Xv", 
            "YBRZ", 
            "YCZ", 
            "YZ", 
            "Ybr", 
            "Yzf"
          ]
        },
        {
          "name": "Honda",
          "line" : [
            "C-100", 
            "CB", 
            "CBF", 
            "CBR", 
            "CBX", 
            "CBZ", 
            "CRF", 
            "Click", 
            "Dio", 
            "Dream Neo",
            "Eco", 
            "Elite", 
            "Hero", 
            "Muv", 
            "NX", 
            "Navi", 
            "Night How", 
            "Odyssey", 
            "PCX",
            "Step", 
            "Tornado", 
            "Transalp", 
            "Turismo", 
            "VFR", 
            "Wave", 
            "XBlade", 
            "XL", 
            "XR", 
            "XRE"
          ]
        },
        {
          "name": "AKT",
          "line" : [
            "100", 
            "110", 
            "125 Sport", 
            "AK", 
            "Adventure", 
            "CR4", 
            "CR5", 
            "City", 
            "Dynamic",
            "Evo", 
            "Flex", 
            "Jet 4", 
            "Jet 5", 
            "RTX", 
            "Special", 
            "TT", 
            "TTR", 
            "TVS", 
            "Urbana"
          ]
        },
        {
          "name": "ACE",
          "line" : [
            "Chopper Sport"
          ]
        },
        {
          "name": "AG",
          "line" : [
            "Elegance"
          ]
        },
        {
          "name": "AIMA",
          "line" : [
            "Power 3"
          ]
        },
        {
          "name": "AMC",
          "line" : [
            "MT"
          ]
        },
        {
          "name": "Aprilia",
          "line" : [
            "SXR", 
            "Sr", 
            "Tuono"
          ]
        },
        {
          "name": "Aupaco",
          "line" : [
            "OB"
          ]
        },
        {
          "name": "Auteco",
          "line" : [
            "Bravo", 
            "Combat", 
            "KTZ", 
            "Legend", 
            "Summa"
          ]
        },
        {
          "name": "AYCO",
          "line" : [
            "Cyclone"
          ]
        },
        {
          "name": "Bajaj",
          "line" : [
            "302", 
            "Adventure", 
            "Avenger", 
            "Boxer", 
            "Discover", 
            "Dominar", 
            "Maxima Cargo",
            "Motocarro", 
            "Naked Shiver", 
            "Plus", 
            "Pulsar", 
            "RS", 
            "Xtreet"
          ]
        },
        {
          "name": "BENELLY",
          "line" : [
            "180", 
            "302", 
            "502", 
            "752", 
            "Imperiale", 
            "Leoncino", 
            "TNT", 
            "TRK"
          ]
        },
        {
          "name": "BMW",
          "line" : [
            "C400", 
            "C650", 
            "F 650", 
            "F 700", 
            "F 800", 
            "F650 GS Dakar", 
            "F750", 
            "F900",
            "G 310", 
            "G 650", 
            "GS", 
            "GS 1200", 
            "K 1200", 
            "R 1100", 
            "R 1200", 
            "R 850",
            "R Nine", 
            "R Nine T", 
            "R1250", 
            "S 1000"
          ]
        },
        {
          "name": "CAN-AM",
          "line" : [
            "Commander", 
            "Maverick", 
            "Outlander", 
            "Ryker"
          ]
        },
        {
          "name": "CERONTE",
          "line" : [
            "Tricargo"
          ]
        },
        {
          "name": "Ciclomoto",
          "line" : [
            "Playera"
          ]
        },
        {
          "name": "Ducati",
          "line" : [
            "Hypermotard", 
            "Monster", 
            "Multistrada", 
            "Scrambler", 
            "Streetfighter"
          ]
        },
        {
          "name": "Ecobike",
          "line" : [
            "City"
          ]
        },
        {
          "name": "ELECTRIBIKE",
          "line" : [
            "JY 1500"
          ]
        },
        {
          "name": "Gomotor",
          "line" : [
            "Prince"
          ]
        },
        {
          "name": "Harley Davidson",
          "line" : [
            "Iron", 
            "Softail", 
            "Sportster", 
            "Street Glide", 
            "Touring"
          ]
        },
        {
          "name": "Hero",
          "line" : [
            "Dash", 
            "Eco", 
            "Hunk", 
            "Ignitor", 
            "Splendor", 
            "Thriller", 
            "Xpulse"
          ]
        },
        {
          "name": "Husqvarna",
          "line" : [
            "Svartpilen"
          ]
        },
        {
          "name": "Jialing",
          "line" : [
            "125", 
            "Enduro", 
            "Motocarro"
          ]
        },
        {
          "name": "Jincheng",
          "line" : [
            "JI"
          ]
        },
        {
          "name": "Kart",
          "line" : [
            "Epoch CRG"
          ]
        },
        {
          "name": "Kawasaki",
          "line" : [
            "Er-6n", 
            "KLX", 
            "KLX Enduro", 
            "KLZ", 
            "KX", 
            "Klr", 
            "Ninja", 
            "Versys", 
            "Vulcan", 
            "Z"
          ]
        },
        {
          "name": "Keeway",
          "line" : [
            "Super Light"
          ]
        },
        {
          "name": "KTM",
          "line" : [
            "250", 
            "300", 
            "Adventure", 
            "Duke", 
            "Lc", 
            "Niños", 
            "Pavimento", 
            "RC"
          ]
        },
        {
          "name": "Kymco",
          "line" : [
            "Agility", 
            "Downtown", 
            "Fly", 
            "Spike", 
            "Twist", 
            "Urban", 
            "Xtown"
          ]
        },
        {
          "name": "Lifan",
          "line" : [
            "Sport"
          ]
        },
        {
          "name": "LML",
          "line" : [
            "Star"
          ]
        },
        {
          "name": "MACBOR",
          "line" : [
            "Rockster"
          ]
        },
        {
          "name": "Muravei",
          "line" : [
            "Mototriciclo"
          ]
        },
        {
          "name": "Piaggio",
          "line" : [
            "APE 501", "Motocarro"
          ]
        },
        {
          "name": "Polaris",
          "line" : [
            "Sportsman"
          ]
        },
        {
          "name": "Royal Enfield",
          "line" : [
            "Bullet", 
            "Bullet Classic", 
            "Classic", 
            "Continental", 
            "HIMALAYAN", 
            "Rumbler"
          ]
        },
        {
          "name": "Sigma",
          "line" : [
            "SG"
          ]
        },
        {
          "name": "STARKER",
          "line" : [
            "Avanti X", 
            "Reactor", 
            "Skuty One"
          ]
        },
        {
          "name": "Suzuki",
          "line" : [
            "AX", 
            "Access", 
            "Address", 
            "BEST", 
            "Burgman", 
            "DL650", 
            "DR", 
            "DRZ", 
            "GIXXER", 
            "GN",
            "GSX", 
            "GZ", 
            "Gs", 
            "Gsr", 
            "Lets", 
            "SV", 
            "Sport Naked", 
            "Turismo", 
            "Vstrom"
          ]
        },
        {
          "name": "SYM",
          "line" : [
            "Crox"
          ]
        },
        {
          "name": "Titania",
          "line" : [
            "Tuono"
          ]
        },
        {
          "name": "TRIUMPH",
          "line" : [
            "Scrambler"
          ]
        },
        {
          "name": "TVS",
          "line" : [
            "Apache", 
            "Dazz", 
            "Max", 
            "NTORQ", 
            "Neo", 
            "Raider", 
            "Sport"
          ]
        },
        {
          "name": "UM",
          "line" : [
            "Fast Wind", 
            "Renegade", 
            "V2s", 
            "Xtreet"
          ]
        },
        {
          "name": "Vespa",
          "line" : [
            "PX", 
            "SXL", 
            "VXL"
          ]
        },
        {
          "name": "VICTORY",
          "line" : [
            "Advance", 
            "Black", 
            "Bold", 
            "Bomber", 
            "Flow", 
            "Hunter", 
            "Life", 
            "MRX", 
            "Nitro",
            "One", 
            "Swith", 
            "Venom", 
            "Zontes"
          ]
        },
        {
          "name": "Wan Xin",
          "line" : [
            "WIX"
          ]
        },
        {
          "name": "Xinling",
          "line" : [
            "JLF", 
            "Motocargo"
          ]
        }
        
      ]  
    },
    {
      "type": "Transporte público y camiones",
      "brand": [
        {
          "name": "Agrale",
          "line" : [
            "MA"
          ]
        },
        {
          "name": "Angler",
          "line" : [
            "204"
          ]
        },
        {
          "name": "Autocar",
          "line" : [
            "ACL Tractomula"
          ]
        },
        {
          "name": "BAIC",
          "line" : [
            "Kenbo", 
            "MZ40", 
            "Minivan", 
            "Van"
          ]
        },
        {
          "name": "BYD",
          "line" : [
            "Movil 3"
          ]
        },
        {
          "name": "Case",
          "line" : [
            "Retroexcavadora"
          ]
        },
        {
          "name": "Champion",
          "line" : [
            "710"
          ]
        },
        {
          "name": "Chana",
          "line" : [
            "Star Leopard"
          ]
        },
        {
          "name": "Changan",
          "line" : [
            "MiniVan"
          ]
        },
        {
          "name": "Changhe",
          "line" : [
            "Freedom", 
            "MiniVan"
          ]
        },
        {
          "name": "Chevrolet",
          "line" : [
            "7:24",
            "B7R 260",
            "Brigadier",
            "C10",
            "C30",
            "C70",
            "CHR",
            "Carry",
            "Chevytaxi",
            "Cheyenne",
            "DMAX",
            "Elite",
            "FRR",
            "FSR",
            "FTR",
            "FVR",
            "FVZ",
            "Kodiak",
            "LV",
            "Luv",
            "Luv D-max",
            "N300",
            "N400",
            "NHR",
            "NKR",
            "NNR",
            "NPR",
            "NQR",
            "Spark",
            "Super Brigadier"
          ]
        },
        {
          "name": "Chery",
          "line" : [
            "Chery Taxi",
            "Grand City Taxi",
            "Van Cargo",
            "Van Cargo2",
            "Van Pass2",
            "Y380"
          ]
        },
        {
          "name": "Citroen",
          "line" : [
            "Jumper"
          ]
        },
        {
          "name": "Daihatsu",
          "line" : [
            "Delta", 
            "FG1J", 
            "V126"
          ]
        },
        {
          "name": "Delta",
          "line" : [
            "V126", 
            "V128"
          ]
        },
        {
          "name": "DFA",
          "line" : [
            "Minitruck 1020"
          ]
        },
        {
          "name": "DFAC",
          "line" : [
            "L 4700"
          ]
        },
        {
          "name": "DFSK",
          "line" : [
            "C31", 
            "C35", 
            "K01S", 
            "K05S", 
            "V25", 
            "V27", 
            "Van Cargo"
          ]
        },
        {
          "name": "Dite",
          "line" : [
            "Trailer Tanque"
          ]
        },
        {
          "name": "Dodge",
          "line" : [
            "300", 
            "500", 
            "600", 
            "6500", 
            "Ram"
          ]
        },
        {
          "name": "Dongfeng",
          "line" : [
            "Camión", 
            "Duolika", 
            "Jinba", 
            "Star"
          ]
        },
        {
          "name": "FAW",
          "line" : [
            "Minivan", 
            "Taxi"
          ]
        },
        {
          "name": "Fiat",
          "line" : [
            "673", 
            "Fiorino", 
            "Fiorino Furgon"
          ]
        },
        {
          "name": "Ford",
          "line" : [
            "Cargo 1721",
            "Cargo 815",
            "Cargo 816",
            "Econoline",
            "F 350 [7]",
            "F 350 [9]",
            "F 600",
            "F-150",
            "F350",
            "F5000",
            "F600",
            "F7000",
            "F8000",
            "F900",
            "Piragua"
          ]
        },
        {
          "name": "Foton",
          "line" : [
            "5129",
            "Auman",
            "Aumark",
            "BJ1039",
            "BJ1041",
            "BJ1043",
            "BJ1061",
            "BJ1065",
            "BJ1129",
            "BJ3122",
            "Cabina Sencilla",
            "Cabina y Media",
            "Camion Cummins",
            "Cummins 1129",
            "Cummins 1133",
            "Doble Cabina",
            "FHR",
            "FKR",
            "FPR",
            "FQR",
            "FRR",
            "FRR-S",
            "Forland",
            "Microbus",
            "Mini Truck",
            "Mini Van",
            "Olin"
          ]
        },
        {
          "name": "Freightliner",
          "line" : [
            "CL", 
            "Columbia", 
            "M2", 
            "M2 106", 
            "M2 112"
          ]
        },
        {
          "name": "Fuso",
          "line" : [
            "Canter"
          ]
        },
        {
          "name": "Hafei",
          "line" : [
            "Junyi", 
            "Luzun", 
            "Minyi", 
            "Ruiyi", 
            "Xinyi", 
            "Zhongyi"
          ]
        },
        {
          "name": "Hino",
          "line" : [
            "Dutro",
            "FC",
            "FC114",
            "FC9J",
            "FG1J",
            "FG8J",
            "GB",
            "GD1J",
            "GH8J",
            "SG1A"
          ]
        },
        {
          "name": "Hyundai",
          "line" : [
            "Accent",
            "Atos",
            "EX100",
            "GraceSuper",
            "Grand City Taxi",
            "Grand I10",
            "Grand Metro Taxi",
            "Grand Pony Taxi",
            "Grand Starex",
            "H1",
            "H100",
            "HD 120",
            "HD 270",
            "HD 65",
            "HD65",
            "HD72",
            "HD78",
            "I10",
            "Starex",
            "Vision"
          ]
        },
        {
          "name": "International",
          "line" : [
            "1700", 
            "2674", 
            "4300", 
            "4700", 
            "4900", 
            "7300", 
            "7600", 
            "9400i", 
            "9900i", 
            "DT466", "Eagle", 
            "Pro Star"
          ]
        },
        {
          "name": "Iveco",
          "line" : [
            "65C14G", 
            "Camion"
          ]
        },
        {
          "name": "JAC",
          "line" : [
            "1035",
            "1042",
            "1048",
            "1083",
            "1061KN",
            "1120KN",
            "Arana",
            "B-Cross",
            "Buseta",
            "Camion",
            "Furgon",
            "Grua",
            "J3",
            "JHR",
            "JKR",
            "JPR",
            "JQR",
            "JRR",
            "Star"
          ]
        },
        {
          "name": "Jinbei",
          "line" : [
            "Microbus"
          ]
        },
        {
          "name": "JMC",
          "line" : [
            "Carrying",
            "JX 1020 T3",
            "JX 1043 DL2",
            "JX 1043 DSL2",
            "JX 1053 DC",
            "JX1041",
            "JX1050",
            "Touring"
          ]
        },
        {
          "name": "Joylong",
          "line" : [
            "H3"
          ]
        },
        {
          "name": "Kenworth",
          "line" : [
            "T370", 
            "T460", 
            "T600A", 
            "T800"
          ]
        },
        {
          "name": "KIA",
          "line" : [
            "Besta",
            "Carnival",
            "Ceres",
            "Eko",
            "Ekotaxi",
            "Grand Ekotaxi",
            "Grand Sephia",
            "K 2700",
            "K 3000S",
            "K 3600S",
            "Picanto",
            "Pregio",
            "Rio",
            "Sephia",
            "Super Eko",
            "Taxi 5-5"
          ]
        },
        {
          "name": "Lifan",
          "line" : [
            "Foison"
          ]
        },
        {
          "name": "Mack",
          "line" : [
            "CH 613", 
            "CV 713", 
            "DM 690S", 
            "GU 813", 
            "Granite Gold"
          ]
        },
        {
          "name": "Mazda",
          "line" : [
            "T 45", 
            "T45"
          ]
        },
        {
          "name": "Mercedes Benz",
          "line" : [
            "413", 
            "1720", 
            "Actros", 
            "Atego", 
            "Bus", 
            "O500 RS", 
            "Sprinter", 
            "Vito"
          ]
        },
        {
          "name": "Mitsubishi",
          "line" : [
            "Canter", 
            "Fuso", 
            "L200", 
            "L300"
          ]
        },
        {
          "name": "Naveco",
          "line" : [
            "X100-33"
          ]
        },
        {
          "name": "Nissan",
          "line" : [
            "Cabstar", 
            "Nuevo Urvan", 
            "PKC", 
            "TK55", 
            "U41", 
            "Urvan"
          ]
        },
        {
          "name": "Oshkosh",
          "line" : [
            "1070f"
          ]
        },
        {
          "name": "Pegaso",
          "line" : [
            "3080"
          ]
        },
        {
          "name": "Peugeot",
          "line" : [
            "Boxer", 
            "Partner"
          ]
        },
        {
          "name": "RAM",
          "line" : [
            "V700"
          ]
        },
        {
          "name": "Renault",
          "line" : [
            "Kangoo", 
            "Logan", 
            "Master", 
            "Nueva Master", 
            "R9", 
            "Trafic"
          ]
        },
        {
          "name": "Saic Wuling",
          "line" : [
            "Minivan"
          ]
        },
        {
          "name": "Scania",
          "line" : [
            "K 124IB", 
            "K360B"
          ]
        },
        {
          "name": "Shineray",
          "line" : [
            "Mini Truck"
          ]
        },
        {
          "name": "Sinotruk",
          "line" : [
            "Semi Trailer"
          ]
        },
        {
          "name": "Tecnipesados",
          "line" : [
            "Cama Baja"
          ]
        },
        {
          "name": "Valtra",
          "line" : [
            "Tractor"
          ]
        },
        {
          "name": "Volco",
          "line" : [
            "Hidraulico"
          ]
        },
        {
          "name": "Volkswagen",
          "line" : [
            "13-180",
            "15-180",
            "17-210",
            "31-310",
            "8-120",
            "9-150",
            "Caddy",
            "Constellation",
            "Crafter 50",
            "Delivery",
            "Transporter"
          ]
        },
        {
          "name": "Volvo",
          "line" : [
            "NH12"
          ]
        },
        {
          "name": "Yamaha",
          "line" : [
            "WaveRunner"
          ]
        },
        {
          "name": "Yutong",
          "line" : [
            "Bus"
          ]
        }
      ]
    }
  ],
  "model": [
    1990, 
    1991, 
    1992, 
    1993, 
    1994, 
    1995, 
    1996, 
    1997, 
    1998, 
    1999,
    2000, 
    2001, 
    2002, 
    2003, 
    2004, 
    2005, 
    2006, 
    2007, 
    2008, 
    2009,
    2010, 
    2011, 
    2012, 
    2013, 
    2014, 
    2015, 
    2016, 
    2017, 
    2018, 
    2019,
    2020, 
    2021, 
    2022, 
    2023
  ],
  "fuel" : [
    "Gasolina",
    "Gasolina Corriente",
    "Gasolina Extra",
    "Diésel",
    "Gas Natural Vehicular",
    "Gas Propano",
    "Energía electrica",
    "Hibrido"
  ],
  "color": [
    "Rojo",
    "Azul",
    "Blanco",
    "Negro",
    "Gris",
    "Verde",
    "Amarillo",
    "Plateado",
    "Dorado",
    "Morado",
    "Naranja",
    "Café",
    "Rosado",
    "Turquesa",
    "Cobre",
    "Bronce",
    "Platino",
    "Marfil",
    "Granate",
    "Ámbar",
    "Aqua",
    "Beige",
    "Burdeos",
    "Celeste",
    "Champán",
    "Cian",
    "Coral",
    "Escarlata",
    "Esmeralda",
    "Gris Claro",
    "Gris Oscuro",
    "Índigo",
    "Lavanda",
    "Lila",
    "Lima",
    "Magenta",
    "Mostaza",
    "Óxido",
    "Púrpura",
    "Salmón",
    "Teal",
    "Terracota",
    "Topacio",
    "Violeta"
  ],
  "service" : [
    "Público",
    "Privado"
  ]
}]

export function SelectVehicle() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/vehicleType')
    .then(response => response.json())
    .then(data => setData(data.vehicleType));
  }, [])
  return (
    <div className='className="flex w-full flex-wrap md:flex-nowrap gap-4"'>
        <Select label='Seleccione un tipo' variant='underlined'>
          
        {/* {
            Array.isArray(data[0].brand) && data.map( ( item, index) => {
              console.log(item)
            }
                // (
                //         <SelectItem key={index} value={item.type}>
                //             {item.type}
                //         </SelectItem>
                // )
            )
        }, */}
        </Select>
        {
            vehicles.map((item) => {
              item.vehicleType.map((subitem) => {
                subitem['brand'].map((brand) => {
                  console.log(brand['name'])
                  return (
                    <p>{brand['name']}</p>
                  )
                })
              })
            })
          }
    </div>

  )
}
