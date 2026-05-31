let listOfChampions = {
  "Aatrox": {
    Name: "Aatrox",
    Gender: "Male",
    Position: "Top",
    Species : "Darkin",
    Resource: "Manaless",
    RangeType: "Melee",
    Region: "Runeterra, Shurima",
    Released: 2013,
    img: "./champions/aatrox.jpg",
  },
  "Ahri": {
    Name: "Ahri",
    Gender: "Female",
    Position: "Middle",
    Species : "Vastayan",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Ionia",
    Released: 2011,
    img: "./champions/ahri.jpg",
  },
  "Akali": {
    Name: "Akali",
    Gender: "Female",
    Position: "Middle",
    Species : "Human",
    Resource: "Energy",
    RangeType: "Melee",
    Region: "Ionia",
    Released: 2010,
    img: "./champions/akali.jpg",
  },
  "Akshan": {
    Name: "Akshan",
    Gender: "Male",
    Position: "Middle",
    Species : "Human",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Shurima",
    Released: 2021,
    img: "./champions/RiotX_ChampionList_akshan.jpg",
  },
  "Alistar": {
    Name: "Alistar",
    Gender: "Male",
    Position: "Support",
    Species : "Minotaur, Other species",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Noxus, Runeterra",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_alistar.jpg",
  },
  "Ambessa": {
    Name: "Ambessa",
    Gender: "Female",
    Position: "Top",
    Species : "Human",
    Resource: "Energy",
    RangeType: "Melee",
    Region: "Noxus, Piltover",
    Released: 2024,
    img: "./champions/ambessa.png",
  },
  "Amumu": {
    Name: "Amumu",
    Gender: "Male",
    Position: "Jungle",
    Species : "Undead, Yordle",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Shurima",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_amumu.jpg",
  },
  "Anivia": {
    Name: "Anivia",
    Gender: "Female",
    Position: "Middle",
    Species : "God, Spirit ",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Freljord",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_anivia.jpg",
  },
  "Annie": {
    Name: "Annie",
    Gender: "Female",
    Position: "Middle",
    Species : "Human, Magicborn",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Noxus, Runeterra",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_annie.jpg",
  },
  "Aphelios": {
    Name: "Aphelios",
    Gender: "Male",
    Position: "Bottom",
    Species : "Human, Spiritualist",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Targon",
    Released: 2019,
    img: "./champions/RiotX_ChampionList_aphelios.jpg",
  },
  "Ashe": {
    Name: "Ashe",
    Gender: "Female",
    Position: "Bottom",
    Species : "Human, Iceborn",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Freljord",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_ashe.jpg",
  },
  "AurelionSol": {
    Name: "Aurelion Sol",
    Undername: "AurelionSol",
    Gender: "Male",
    Position: "Middle",
    Species : "Celestial, Dragon",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Runeterra, Targon",
    Released: 2016,
    img: "./champions/RiotX_ChampionList_aurelionsol.jpg",
  },
  "Aurora": {
    Name: "Aurora",
    Gender: "Female",
    Position: "Middle",
    Species: "Vastayan",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Freljord",
    Released: 2024,
    img: "./champions/aurora.jpg",
  },
  "Azir": {
    Name: "Azir",
    Gender: "Male",
    Position: "Middle",
    Species : "God-Warrior",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Shurima",
    Released: 2014,
    img: "./champions/RiotX_ChampionList_azir.jpg",
  },
  "Bard": {
    Name: "Bard",
    Gender: "Male",
    Position: "Support",
    Species : "Celestial",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Runeterra",
    Released: 2015,
    img: "./champions/RiotX_ChampionList_bard.jpg",
  },
  "BelVeth": {
    Name: "Bel'Veth",
    Undername: "BelVeth",
    Gender: "Female",
    Position: "Jungle",
    Species : "Void-Being",
    Resource: "Manaless",
    RangeType: "Melee",
    Region: "Void ",
    Released: 2022,
    img: "./champions/RiotX_ChampionList_belveth.jpg",
  },
  "Blitzcrank": {
    Name: "Blitzcrank",
    Gender: "Other gender",
    Position: "Support",
    Species : "Golem",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Zaun",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_blitzcrank.jpg",
  },
  "Brand": {
    Name: "Brand",
    Gender: "Male",
    Position: "Support",
    Species : "Human, Magically Altered",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Freljord, Runeterra",
    Released: 2011,
    img: "./champions/RiotX_ChampionList_brand.jpg",
  },
  "Braum": {
    Name: "Braum",
    Gender: "Male",
    Position: "Support",
    Species : "Human, Iceborn",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Freljord",
    Released: 2014,
    img: "./champions/RiotX_ChampionList_braum.jpg",
  },
  "Briar": {
    Name: "Briar",
    Gender: "Female",
    Position: "Jungle",
    Species : "Golem",
    Resource: "Health costs",
    RangeType: "Melee",
    Region: "Noxus",
    Released: 2023,
    img: "./champions/RiotX_ChampionList_briar.jpg",
  },
  "Caitlyn": {
    Name: "Caitlyn",
    Gender: "Female",
    Position: "Bottom",
    Species : "Human",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Piltover",
    Released: 2011,
    img: "./champions/RiotX_ChampionList_caitlyn.jpg",
  },
  "Camille": {
    Name: "Camille",
    Gender: "Female",
    Position: "Top",
    Species : "Cyborg, Human",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Piltover",
    Released: 2016,
    img: "./champions/RiotX_ChampionList_camille.jpg",
  },
  "Cassiopeia": {
    Name: "Cassiopeia",
    Gender: "Female",
    Position: "Middle, Top",
    Species : "Human, Magically Altered",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Noxus, Shurima",
    Released: 2010,
    img: "./champions/RiotX_ChampionList_cassiopeia.jpg",
  },
  "ChoGath": {
    Name: "Cho'Gath",
    Undername: "ChoGath",
    Gender: "Male",
    Position: "Top",
    Species : "Void-Being",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Void ",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_chogath.jpg",
  },
  "Corki": {
    Name: "Corki",
    Gender: "Male",
    Position: "Bottom",
    Species : "Yordle",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Bandle City, Piltover",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_corki.jpg",
  },
  "Darius": {
    Name: "Darius",
    Gender: "Male",
    Position: "Top",
    Species : "Human",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Noxus",
    Released: 2012,
    img: "./champions/RiotX_ChampionList_darius.jpg",
  },
  "Diana": {
    Name: "Diana",
    Gender: "Female",
    Position: "Jungle, Middle",
    Species : "Aspect, Human",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Targon",
    Released: 2012,
    img: "./champions/RiotX_ChampionList_diana.jpg",
  },
  "DrMundo": {
    Name: "Dr. Mundo",
    Undername: "DrMundo",
    Gender: "Male",
    Position: "Top, Jungle",
    Species : "Human, Chemically Altered",
    Resource: "Health costs",
    RangeType: "Melee",
    Region: "Zaun",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_dramundo.jpg",
  },
  "Draven": {
    Name: "Draven",
    Gender: "Male",
    Position: "Bottom",
    Species : "Human",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Noxus",
    Released: 2012,
    img: "./champions/RiotX_ChampionList_draven.jpg",
  },
  "Ekko": {
    Name: "Ekko",
    Gender: "Male",
    Position: "Jungle, Middle",
    Species : "Human",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Zaun",
    Released: 2015,
    img: "./champions/RiotX_ChampionList_ekko.jpg",
  },
  "Elise": {
    Name: "Elise",
    Gender: "Female",
    Position: "Jungle, Support",
    Species : "Human, Magically Altered",
    Resource: "Mana ",
    RangeType: "Mixed",
    Region: "Noxus, Shadow Isles",
    Released: 2012,
    img: "./champions/RiotX_ChampionList_elise.jpg",
  },
  "Evelynn": {
    Name: "Evelynn",
    Gender: "Female",
    Position: "Jungle",
    Species : "Demon, Spirit ",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Runeterra",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_evelynn.jpg",
  },
  "Ezreal": {
    Name: "Ezreal",
    Gender: "Male",
    Position: "Bottom",
    Species : "Human, Magicborn",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Piltover",
    Released: 2010,
    img: "./champions/RiotX_ChampionList_ezreal.jpg",
  },
  "Fiddlesticks": {
    Name: "Fiddlesticks",
    Gender: "Other gender",
    Position: "Jungle",
    Species : "Demon, Spirit ",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Runeterra",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_fiddlesticks.jpg",
  },
  "Fiora": {
    Name: "Fiora",
    Gender: "Female",
    Position: "Top",
    Species : "Human",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Demacia",
    Released: 2012,
    img: "./champions/RiotX_ChampionList_fiora.jpg",
  },  
  "Fizz": {
    Name: "Fizz",
    Gender: "Male",
    Position: "Middle",
    Species : "Yordle",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Bilgewater",
    Released: 2011,
    img: "./champions/RiotX_ChampionList_fizz.jpg",
  },
  "Galio": {
    Name: "Galio",
    Gender: "Male",
    Position: "Middle",
    Species : "Golem",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Demacia",
    Released: 2010,
    img: "./champions/RiotX_ChampionList_galio.jpg",
  },
  "Gangplank": {
    Name: "Gangplank",
    Gender: "Male",
    Position: "Top",
    Species : "Human",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Bilgewater",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_gangplank.jpg",
  },
  "Garen": {
    Name: "Garen",
    Gender: "Male",
    Position: "Top",
    Species : "Human",
    Resource: "Manaless",
    RangeType: "Melee",
    Region: "Demacia",
    Released: 2010,
    img: "./champions/RiotX_ChampionList_garen.jpg",
  },
  "Gnar": {
    Name: "Gnar",
    Gender: "Male",
    Position: "Top",
    Species : "Yordle",
    Resource: "Rage",
    RangeType: "Mixed",
    Region: "Freljord",
    Released: 2014,
    img: "./champions/RiotX_ChampionList_gnar.jpg",
  },
  "Gragas": {
    Name: "Gragas",
    Gender: "Male",
    Position: "Jungle, Top",
    Species : "Human, Iceborn",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Freljord",
    Released: 2010,
    img: "./champions/RiotX_ChampionList_gragas.jpg",
  },
  "Graves": {
    Name: "Graves",
    Gender: "Male",
    Position: "Jungle",
    Species : "Human",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Bilgewater",
    Released: 2011,
    img: "./champions/RiotX_ChampionList_graves.jpg",
  },
  "Gwen": {
    Name: "Gwen",
    Gender: "Female",
    Position: "Top, Jungle",
    Species : "Human, Magically Altered",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Camavor, Shadow Isles",
    Released: 2021,
    img: "./champions/RiotX_ChampionList_gwen.jpg",
  },
  "Hecarim": {
    Name: "Hecarim",
    Gender: "Male",
    Position: "Jungle",
    Species : "Undead",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Camavor, Shadow Isles",
    Released: 2012,
    img: "./champions/RiotX_ChampionList_hecarim.jpg",
  },
  "Heimerdinger": {
    Name: "Heimerdinger",
    Gender: "Male",
    Position: "Middle, Top",
    Species : "Yordle",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Piltover",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_heimerdinger.jpg",
  },
  "Hwei": {
    Name: "Hwei",
    Gender: "Male",
    Position: "Middle",
    Species : "Human, Magicborn",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Ionia",
    Released: 2023,
    img: "./champions/RiotX_ChampionList_hwei.jpg",
  },
  "Illaoi": {
    Name: "Illaoi",
    Gender: "Female",
    Position: "Top",
    Species : "Human, Spiritualist",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Bilgewater",
    Released: 2015,
    img: "./champions/RiotX_ChampionList_illaoi.jpg",
  },
  "Irelia": {
    Name: "Irelia",
    Gender: "Female",
    Position: "Middle, Top",
    Species : "Human, Spiritualist",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Ionia",
    Released: 2010,
    img: "./champions/RiotX_ChampionList_irelia.jpg",
  },
  "Ivern": {
    Name: "Ivern",
    Gender: "Male",
    Position: "Jungle",
    Species : "Human, Magically Altered",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Freljord, Ionia",
    Released: 2016,
    img: "./champions/RiotX_ChampionList_ivern.jpg",
  },
  "Janna": {
    Name: "Janna",
    Gender: "Female",
    Position: "Support",
    Species : "God, Spirit ",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Shurima, Zaun",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_janna.jpg",
  },
  "Jarvan": {
    Name: "Jarvan IV",
    Undername: "Jarvan",
    Gender: "Male",
    Position: "Jungle",
    Species : "Human",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Demacia",
    Released: 2011,
    img: "./champions/RiotX_ChampionList_jarvaniv.jpg",
  },
  "Jax": {
    Name: "Jax",
    Gender: "Male",
    Position: "Jungle, Top",
    Species : "Unknown",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Icathia, Runeterra, Shurima",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_jax.jpg",
  },
  "Jayce": {
    Name: "Jayce",
    Gender: "Male",
    Position: "Jungle, Top",
    Species : "Human",
    Resource: "Mana ",
    RangeType: "Mixed",
    Region: "Piltover",
    Released: 2012,
    img: "./champions/RiotX_ChampionList_jayce.jpg",
  },
  "Jhin": {
    Name: "Jhin",
    Gender: "Male",
    Position: "Bottom",
    Species : "Human, Spiritualist",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Ionia",
    Released: 2016,
    img: "./champions/RiotX_ChampionList_jhin.jpg",
  },
  "Jinx": {
    Name: "Jinx",
    Gender: "Female",
    Position: "Bottom",
    Species : "Human, Chemically Altered",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Zaun",
    Released: 2013,
    img: "./champions/RiotX_ChampionList_jinx.jpg",
  },
  "KSante": {
    Name: "K'Sante",
    Undername: "KSante",
    Gender: "Male",
    Position: "Top",
    Species : "Human",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Shurima",
    Released: 2022,
    img: "./champions/RiotX_ChampionList_ksante.jpg",
  },
  "KaiSa": {
    Name: "Kai'Sa",
    Undername: "KaiSa",
    Gender: "Female",
    Position: "Bottom",
    Species : "Human, Void-Being",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Shurima, Void ",
    Released: 2018,
    img: "./champions/RiotX_ChampionList_kaisa.jpg",
  },
  "Kalista": {
    Name: "Kalista",
    Gender: "Female",
    Position: "Bottom",
    Species : "Undead",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Camavor, Shadow Isles",
    Released: 2014,
    img: "./champions/RiotX_ChampionList_kalista.jpg",
  },
  "Karma": {
    Name: "Karma",
    Gender: "Female",
    Position: "Support",
    Species : "Human, Spiritualist",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Ionia",
    Released: 2011,
    img: "./champions/RiotX_ChampionList_karma.jpg",
  },
  "Karthus": {
    Name: "Karthus",
    Gender: "Male",
    Position: "Jungle",
    Species : "Undead",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Noxus, Shadow Isles",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_karthus.jpg",
  },
  "Kassadin": {
    Name: "Kassadin",
    Gender: "Male",
    Position: "Middle",
    Species : "Human, Void-Being",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Shurima, Void ",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_kassadin.jpg",
  },
  "Katarina": {
    Name: "Katarina",
    Gender: "Female",
    Position: "Middle",
    Species : "Human",
    Resource: "Manaless",
    RangeType: "Melee",
    Region: "Noxus",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_katarina.jpg",
  },
  "Kayle": {
    Name: "Kayle",
    Gender: "Female",
    Position: "Top",
    Species : "Aspect, Human, Magically Altered",
    Resource: "Mana ",
    RangeType: "Mixed",
    Region: "Demacia, Targon",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_kayle.jpg",
  },
  "Kayn": {
    Name: "Kayn",
    Gender: "Male",
    Position: "Jungle",
    Species : "Darkin, Human, Magically Altered",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Ionia, Noxus, Shurima, Runeterra",
    Released: 2017,
    img: "./champions/RiotX_ChampionList_kayn.jpg",
  },
  "Kennen": {
    Name: "Kennen",
    Gender: "Male",
    Position: "Middle, Top",
    Species : "Yordle",
    Resource: "Energy",
    RangeType: "Ranged",
    Region: "Ionia",
    Released: 2010,
    img: "./champions/RiotX_ChampionList_kennen.jpg",
  },
  "KhaZix": {
    Name: "Kha'Zix",
    Undername: "KhaZix",
    Gender: "Male",
    Position: "Jungle",
    Species : "Void-Being",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Void ",
    Released: 2012,
    img: "./champions/RiotX_ChampionList_khazix.jpg",
  },
  "Kindred": {
    Name: "Kindred",
    Gender: "Other gender",
    Position: "Jungle",
    Species : "God, Spirit ",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Runeterra",
    Released: 2015,
    img: "./champions/RiotX_ChampionList_kindred.jpg",
  },
  "Kled": {
    Name: "Kled",
    Gender: "Male",
    Position: "Top",
    Species : "Yordle",
    Resource: "Courage, Other resources",
    RangeType: "Melee",
    Region: "Noxus",
    Released: 2016,
    img: "./champions/RiotX_ChampionList_kled.jpg",
  },
  "KogMaw": {
    Name: "Kog'Maw",
    Undername: "KogMaw",
    Gender: "Male",
    Position: "Bottom",
    Species : "Void-Being",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Void ",
    Released: 2010,
    img: "./champions/RiotX_ChampionList_kogmaw.jpg",
  },
  "LeBlanc": {
    Name: "LeBlanc",
    Gender: "Female",
    Position: "Middle",
    Species : "Human, Magically Altered",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Noxus",
    Released: 2010,
    img: "./champions/leblanc.png",
  },
  "LeeSin": {
    Name: "Lee Sin",
    Undername: "LeeSin",
    Gender: "Male",
    Position: "Jungle",
    Species : "Human, Spiritualist",
    Resource: "Energy",
    RangeType: "Melee",
    Region: "Ionia",
    Released: 2011,
    img: "./champions/RiotX_ChampionList_leesin.jpg",
  },
  "Leona": {
    Name: "Leona",
    Gender: "Female",
    Position: "Support",
    Species : "Aspect, Human",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Targon",
    Released: 2011,
    img: "./champions/RiotX_ChampionList_leona.jpg",
  },
  "Lillia": {
    Name: "Lillia",
    Gender: "Female",
    Position: "Jungle",
    Species : "Spirit ",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Ionia",
    Released: 2020,
    img: "./champions/RiotX_ChampionList_lillia.jpg",
  },
  "Lissandra": {
    Name: "Lissandra",
    Gender: "Female",
    Position: "Middle",
    Species : "Human, Iceborn",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Freljord",
    Released: 2013,
    img: "./champions/RiotX_ChampionList_lissandra.jpg",
  },
  "Lucian": {
    Name: "Lucian",
    Gender: "Male",
    Position: "Bottom",
    Species : "Human",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Demacia, Shadow Isles",
    Released: 2013,
    img: "./champions/RiotX_ChampionList_lucian.jpg",
  },
  "Lulu": {
    Name: "Lulu",
    Gender: "Female",
    Position: "Support",
    Species : "Yordle",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Bandle City",
    Released: 2012,
    img: "./champions/RiotX_ChampionList_lulu.jpg",
  },
  "Lux": {
    Name: "Lux",
    Gender: "Female",
    Position: "Middle, Support",
    Species : "Human, Magicborn",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Demacia",
    Released: 2010,
    img: "./champions/RiotX_ChampionList_lux.jpg",
  },
  "Malphite": {
    Name: "Malphite",
    Gender: "Male",
    Position: "Top",
    Species : "Golem",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Ixtal, Shurima",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_malphite.jpg",
  },
  "Malzahar": {
    Name: "Malzahar",
    Gender: "Male",
    Position: "Middle",
    Species : "Human, Void-Being",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Shurima, Void ",
    Released: 2010,
    img: "./champions/RiotX_ChampionList_malzahar.jpg",
  },
  "Maokai": {
    Name: "Maokai",
    Gender: "Male",
    Position: "Support",
    Species : "Spirit ",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Shadow Isles",
    Released: 2011,
    img: "./champions/RiotX_ChampionList_maokai.jpg",
  },
  "MasterYi": {
    Name: "Master Yi",
    Undername: "MasterYi",
    Gender: "Male",
    Position: "Jungle",
    Species : "Human, Spiritualist",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Ionia",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_masteryi.jpg",
  },
  "Milio": {
    Name: "Milio",
    Gender: "Male",
    Position: "Support",
    Species : "Human, Magicborn",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Ixtal",
    Released: 2023,
    img: "./champions/RiotX_ChampionList_milio.jpg",
  },
  "Mel": {
    Name: "Mel",
    Gender: "Female",
    Position: "Middle, Support",
    Species: "Human, Magicborn",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Noxus, Piltover",
    Released: 2025,
    img: "./champions/mel.png",
  },
  "MissFortune": {
    Name: "Miss Fortune",
    Undername: "MissFortune",
    Gender: "Female",
    Position: "Bottom",
    Species : "Human",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Bilgewater",
    Released: 2010,
    img: "./champions/RiotX_ChampionList_missfortune.jpg",
  },
  "Mordekaiser": {
    Name: "Mordekaiser",
    Gender: "Male",
    Position: "Top",
    Species : "Revenant",
    Resource: "Shield, Other resources",
    RangeType: "Melee",
    Region: "Noxus, Shadow Isles",
    Released: 2010,
    img: "./champions/RiotX_ChampionList_mordekaiser.jpg",
  },
  "Morgana": {
    Name: "Morgana",
    Gender: "Female",
    Position: "Middle, Support",
    Species : "Aspect, Human, Magically Altered",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Demacia, Targon",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_morgana.jpg",
  },
  "Naafiri": {
    Name: "Naafiri",
    Gender: "Female",
    Position: "Jungle, Middle",
    Species : "Darkin, Dog",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Shurima",
    Released: 2023,
    img: "./champions/RiotX_ChampionList_naafiri.jpg",
  },
  "Nami": {
    Name: "Nami",
    Gender: "Female",
    Position: "Support",
    Species : "Vastayan",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Bilgewater, Runeterra",
    Released: 2012,
    img: "./champions/RiotX_ChampionList_nami.jpg",
  },
  "Nasus": {
    Name: "Nasus",
    Gender: "Male",
    Position: "Top",
    Species : "God-Warrior",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Shurima",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_nasus.jpg",
  },
  "Nautilus": {
    Name: "Nautilus",
    Gender: "Male",
    Position: "Support",
    Species : "Revenant",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Bilgewater",
    Released: 2012,
    img: "./champions/RiotX_ChampionList_nautilus.jpg",
  },
  "Neeko": {
    Name: "Neeko",
    Gender: "Female",
    Position: "Support",
    Species : "Vastayan",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Ixtal",
    Released: 2018,
    img: "./champions/RiotX_ChampionList_neeko.jpg",
  },
  "Nidalee": {
    Name: "Nidalee",
    Gender: "Female",
    Position: "Jungle",
    Species : "Human, Spiritualist",
    Resource: "Mana ",
    RangeType: "Mixed",
    Region: "Ixtal",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_nidalee.jpg",
  },
  "Nilah": {
    Name: "Nilah",
    Gender: "Female",
    Position: "Bottom",
    Species : "Human, Magically Altered",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Bilgewater",
    Released: 2022,
    img: "./champions/RiotX_ChampionList_nilah.jpg",
  },
  "Nocturne": {
    Name: "Nocturne",
    Gender: "Male",
    Position: "Jungle",
    Species : "Demon, Spirit ",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Runeterra",
    Released: 2011,
    img: "./champions/RiotX_ChampionList_nocturne.jpg",
  },
  "Nunu": {
    Name: "Nunu & Willump",
    Undername: "Nunu",
    Gender: "Male",
    Position: "Jungle",
    Species : "Human, Yeti, Other species",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Freljord",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_nunu.jpg",
  },
  "Olaf": {
    Name: "Olaf",
    Gender: "Male",
    Position: "Top",
    Species : "Human, Iceborn",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Freljord",
    Released: 2010,
    img: "./champions/RiotX_ChampionList_olaf.jpg",
  },
  "Orianna": {
    Name: "Orianna",
    Gender: "Female",
    Position: "Middle",
    Species : "Golem",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Piltover",
    Released: 2011,
    img: "./champions/RiotX_ChampionList_orianna.jpg",
  },
  "Ornn": {
    Name: "Ornn",
    Gender: "Male",
    Position: "Top",
    Species : "God, Spirit ",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Freljord",
    Released: 2017,
    img: "./champions/RiotX_ChampionList_ornn.jpg",
  },
  "Pantheon": {
    Name: "Pantheon",
    Gender: "Male",
    Position: "Middle, Support, Top",
    Species : "Aspect, Human",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Targon",
    Released: 2010,
    img: "./champions/RiotX_ChampionList_pantheon.jpg",
  },
  "Poppy": {
    Name: "Poppy",
    Gender: "Female",
    Position: "Support, Top",
    Species : "Yordle",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Demacia",
    Released: 2010,
    img: "./champions/RiotX_ChampionList_poppy.jpg",
  },
  "Pyke": {
    Name: "Pyke",
    Gender: "Male",
    Position: "Support",
    Species : "Revenant",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Bilgewater",
    Released: 2018,
    img: "./champions/RiotX_ChampionList_pyke.jpg",
  },
  "Qiyana": {
    Name: "Qiyana",
    Gender: "Female",
    Position: "Jungle, Middle",
    Species : "Human, Magicborn",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Ixtal",
    Released: 2019,
    img: "./champions/RiotX_ChampionList_qiyana.jpg",
  },
  "Quinn": {
    Name: "Quinn",
    Gender: "Female",
    Position: "Top",
    Species : "Human",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Demacia",
    Released: 2013,
    img: "./champions/RiotX_ChampionList_quinn.jpg",
  },
  "Rakan": {
    Name: "Rakan",
    Gender: "Male",
    Position: "Support",
    Species : "Vastayan",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Ionia",
    Released: 2017,
    img: "./champions/RiotX_ChampionList_rakan.jpg",
  },
  "Rammus": {
    Name: "Rammus",
    Gender: "Male",
    Position: "Jungle",
    Species : "Unknown",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Shurima",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_rammus.jpg",
  },
  "RekSai": {
    Name: "Rek'Sai",
    Undername: "RekSai",
    Gender: "Female",
    Position: "Jungle",
    Species : "Void-Being",
    Resource: "Rage",
    RangeType: "Melee",
    Region: "Shurima, Void ",
    Released: 2014,
    img: "./champions/RiotX_ChampionList_reksai.jpg",
  },
  "Rell": {
    Name: "Rell",
    Gender: "Female",
    Position: "Support",
    Species : "Human, Magicborn, Magically Altered",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Noxus",
    Released: 2020,
    img: "./champions/RiotX_ChampionList_Rell.jpg",
  },
  "RenataGlasc": {
    Name: "Renata Glasc",
    Undername: "RenataGlasc",
    Gender: "Female",
    Position: "Support",
    Species : "Human, Chemically Altered",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Zaun",
    Released: 2022,
    img: "./champions/RiotX_ChampionList_renata.jpg",
  },
  "Renekton": {
    Name: "Renekton",
    Gender: "Male",
    Position: "Top",
    Species : "God-Warrior",
    Resource: "Fury",
    RangeType: "Melee",
    Region: "Shurima",
    Released: 2011,
    img: "./champions/RiotX_ChampionList_renekton.jpg",
  },
  "Rengar": {
    Name: "Rengar",
    Gender: "Male",
    Position: "Jungle, Top",
    Species : "Vastayan",
    Resource: "Ferocity, Other resources",
    RangeType: "Melee",
    Region: "Ixtal, Shurima",
    Released: 2012,
    img: "./champions/RiotX_ChampionList_rengar.jpg",
  },
  "Riven": {
    Name: "Riven",
    Gender: "Female",
    Position: "Top",
    Species : "Human",
    Resource: "Manaless",
    RangeType: "Melee",
    Region: "Ionia, Noxus",
    Released: 2011,
    img: "./champions/RiotX_ChampionList_riven.jpg",
  },
  "Rumble": {
    Name: "Rumble",
    Gender: "Male",
    Position: "Top",
    Species : "Yordle",
    Resource: "Heat, Other resources",
    RangeType: "Melee",
    Region: "Bandle City",
    Released: 2011,
    img: "./champions/RiotX_ChampionList_rumble.jpg",
  },
  "Ryze": {
    Name: "Ryze",
    Gender: "Male",
    Position: "Middle",
    Species : "Human, Magically Altered",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Runeterra",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_ryze.jpg",
  },
  "Samira": {
    Name: "Samira",
    Gender: "Female",
    Position: "Bottom",
    Species : "Human",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Noxus, Shurima",
    Released: 2020,
    img: "./champions/RiotX_ChampionList_samira.jpg",
  },
  "Sejuani": {
    Name: "Sejuani",
    Gender: "Female",
    Position: "Jungle",
    Species : "Human, Iceborn",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Freljord",
    Released: 2012,
    img: "./champions/RiotX_ChampionList_sejuani.jpg",
  },
  "Senna": {
    Name: "Senna",
    Gender: "Female",
    Position: "Support",
    Species : "Human, Undead",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Shadow Isles",
    Released: 2019,
    img: "./champions/RiotX_ChampionList_senna.jpg",
  },
  "Seraphine": {
    Name: "Seraphine",
    Gender: "Female",
    Position: "Support",
    Species : "Human, Magicborn",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Piltover, Zaun",
    Released: 2020,
    img: "./champions/RiotX_ChampionList_seraphine.jpg",
  },
  "Sett": {
    Name: "Sett",
    Gender: "Male",
    Position: "Top",
    Species : "Human, Vastayan",
    Resource: "Grit, Other resources",
    RangeType: "Melee",
    Region: "Ionia",
    Released: 2020,
    img: "./champions/RiotX_ChampionList_sett.jpg",
  },
  "Shaco": {
    Name: "Shaco",
    Gender: "Male",
    Position: "Jungle, Support",
    Species : "Spirit ",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Runeterra",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_shaco.jpg",
  },
  "Shen": {
    Name: "Shen",
    Gender: "Male",
    Position: "Top, Support",
    Species : "Human, Spiritualist",
    Resource: "Energy",
    RangeType: "Melee",
    Region: "Ionia",
    Released: 2010,
    img: "./champions/RiotX_ChampionList_shen.jpg",
  },
  "Shyvana": {
    Name: "Shyvana",
    Gender: "Female",
    Position: "Jungle",
    Species : "Dragon, Magically Altered",
    Resource: "Fury",
    RangeType: "Melee",
    Region: "Demacia",
    Released: 2011,
    img: "./champions/RiotX_ChampionList_shyvana.jpg",
  },
  "Singed": {
    Name: "Singed",
    Gender: "Male",
    Position: "Top",
    Species : "Human, Chemically Altered",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Piltover, Zaun",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_singed.jpg",
  },
  "Sion": {
    Name: "Sion",
    Gender: "Male",
    Position: "Top",
    Species : "Revenant",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Noxus",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_sion.jpg",
  },
  "Sivir": {
    Name: "Sivir",
    Gender: "Female",
    Position: "Bottom",
    Species : "Human",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Shurima",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_sivir.jpg",
  },
  "Skarner": {
    Name: "Skarner",
    Gender: "Male",
    Position: "Jungle",
    Species : "Brackern, Other species",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Ixtal",
    Released: 2011,
    img: "./champions/RiotX_ChampionList_skarner.jpg",
  },
  "Smolder": {
    Name: "Smolder",
    Gender: "Male",
    Position: "Bottom",
    Species : "Dragon",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Noxus, Camavor",
    Released: 2024,
    img: "./champions/RiotX_ChampionList_smolder_v2.jpg",
  },
  "Sona": {
    Name: "Sona",
    Gender: "Female",
    Position: "Support",
    Species : "Human, Magicborn",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Demacia, Ionia",
    Released: 2010,
    img: "./champions/RiotX_ChampionList_sona.jpg",
  },
  "Soraka": {
    Name: "Soraka",
    Gender: "Female",
    Position: "Support",
    Species : "Celestial",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Ionia, Targon",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_soraka.jpg",
  },
  "Swain": {
    Name: "Swain",
    Gender: "Male",
    Position: "Support",
    Species : "Human, Magically Altered",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Noxus",
    Released: 2010,
    img: "./champions/RiotX_ChampionList_swain.jpg",
  },
  "Sylas": {
    Name: "Sylas",
    Gender: "Male",
    Position: "Jungle, Middle",
    Species : "Human, Magicborn",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Demacia, Freljord",
    Released: 2019,
    img: "./champions/RiotX_ChampionList_sylas.jpg",
  },
  "Syndra": {
    Name: "Syndra",
    Gender: "Female",
    Position: "Middle",
    Species : "Human, Magicborn",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Ionia",
    Released: 2012,
    img: "./champions/RiotX_ChampionList_syndra.jpg",
  },
  "TahmKench": {
    Name: "Tahm Kench",
    Undername: "TahmKench",
    Gender: "Male",
    Position: "Support, Top",
    Species : "Demon, Spirit ",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Bilgewater, Runeterra",
    Released: 2015,
    img: "./champions/RiotX_ChampionList_tahmkench.jpg",
  },
  "Taliyah": {
    Name: "Taliyah",
    Gender: "Female",
    Position: "Middle",
    Species : "Human, Magicborn",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Shurima",
    Released: 2016,
    img: "./champions/RiotX_ChampionList_taliyah.jpg",
  },
  "Talon": {
    Name: "Talon",
    Gender: "Male",
    Position: "Jungle, Middle",
    Species : "Human",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Noxus",
    Released: 2011,
    img: "./champions/RiotX_ChampionList_talon.jpg",
  },
  "Taric": {
    Name: "Taric",
    Gender: "Male",
    Position: "Support",
    Species : "Aspect, Human",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Demacia, Targon",
    Released: 2009,
    img: "./champions/taric.jpg",
  },
  "Teemo": {
    Name: "Teemo",
    Gender: "Male",
    Position: "Top",
    Species : "Yordle",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Bandle City",
    Released: 2009,
    img: "./champions/teemo.jpg",
  },
  "Thresh": {
    Name: "Thresh",
    Gender: "Male",
    Position: "Support",
    Species : "Undead",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Shadow Isles",
    Released: 2013,
    img: "./champions/thresh.jpg",
  },
  "Tristana": {
    Name: "Tristana",
    Gender: "Female",
    Position: "Bottom",
    Species : "Yordle",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Bandle City",
    Released: 2009,
    img: "./champions/tristana.jpg",
  },
  "Trundle": {
    Name: "Trundle",
    Gender: "Male",
    Position: "Jungle, Top",
    Species : "Iceborn, Troll, Other species",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Freljord",
    Released: 2010,
    img: "./champions/trundle.jpg",
  },
  "Tryndramere": {
    Name: "Tryndramere",
    Gender: "Male",
    Position: "Top",
    Species : "Human, Magically Altered",
    Resource: "Fury",
    RangeType: "Melee",
    Region: "Freljord",
    Released: 2009,
    img: "./champions/tryndamere.jpg",
  },
  "TwistedFate": {
    Name: "Twisted Fate",
    Undername: "TwistedFate",
    Gender: "Male",
    Position: "Middle",
    Species : "Human, Magicborn",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Bilgewater",
    Released: 2009,
    img: "./champions/twf.jpg",
  },
  "Twitch": {
    Name: "Twitch",
    Gender: "Male",
    Position: "Bottom",
    Species : "Chemically Altered, Rat, Other species",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Zaun",
    Released: 2009,
    img: "./champions/twitch.jpg",
  },
  "Udyr": {
    Name: "Udyr",
    Gender: "Male",
    Position: "Jungle",
    Species : "Human, Spiritualist",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Freljord, Ionia",
    Released: 2009,
    img: "./champions/udyr.jpg",
  },
  "Urgot": {
    Name: "Urgot",
    Gender: "Male",
    Position: "Top",
    Species : "Cyborg, Human, Chemically Altered",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Noxus, Zaun",
    Released: 2010,
    img: "./champions/urgot.jpg",
  },
  "Varus": {
    Name: "Varus",
    Gender: "Male",
    Position: "Bottom",
    Species : "Darkin, Human",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Ionia, Shurima, Runeterra",
    Released: 2012,
    img: "./champions/varus.jpg",
  },
  "Vayne": {
    Name: "Vayne",
    Gender: "Female",
    Position: "Bottom, Top",
    Species : "Human",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Demacia",
    Released: 2011,
    img: "./champions/vayne.jpg",
  },
  "Veigar": {
    Name: "Veigar",
    Gender: "Male",
    Position: "Middle",
    Species : "Yordle",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Bandle City, Shadow Isles, Runeterra",
    Released: 2009,
    img: "./champions/veigar.jpg",
  },
  "VelKoz": {
    Name: "Vel'Koz",
    Undername: "VelKoz",
    Gender: "Male",
    Position: "Middle, Support",
    Species : "Void-Being",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Void ",
    Released: 2014,
    img: "./champions/velkoz.jpg",
  },
  "Vex": {
    Name: "Vex",
    Gender: "Female",
    Position: "Middle",
    Species : "Yordle",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Bandle City, Shadow Isles",
    Released: 2021,
    img: "./champions/vex.jpg",
  },
  "Vi": {
    Name: "Vi",
    Gender: "Female",
    Position: "Jungle",
    Species : "Human",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Piltover, Zaun",
    Released: 2012,
    img: "./champions/vi.jpg",
  },
  "Viego": {
    Name: "Viego",
    Gender: "Male",
    Position: "Jungle",
    Species : "Undead",
    Resource: "Manaless",
    RangeType: "Melee",
    Region: "Camavor, Shadow Isles",
    Released: 2021,
    img: "./champions/viego.jpg",
  },
  "Viktor": {
    Name: "Viktor",
    Gender: "Male",
    Position: "Middle",
    Species : "Cyborg, Human",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Piltover, Zaun",
    Released: 2011,
    img: "./champions/viktor.jpg",
  },
  "Vladimir": {
    Name: "Vladimir",
    Gender: "Male",
    Position: "Top, Middle",
    Species : "Human, Magically Altered",
    Resource: "Bloodthirst, Other resources",
    RangeType: "Ranged",
    Region: "Camavor, Noxus, Shadow Isles",
    Released: 2010,
    img: "./champions/vladimir.jpg",
  },
  "Volibear": {
    Name: "Volibear",
    Gender: "Male",
    Position: "Jungle, Top",
    Species : "God, Spirit ",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Freljord",
    Released: 2011,
    img: "./champions/Volibear.jpg",
  },
  "Warwick": {
    Name: "Warwick",
    Gender: "Male",
    Position: "Jungle, Top",
    Species : "Cyborg, Human, Chemically Altered",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Zaun",
    Released: 2009,
    img: "./champions/warwick.jpg",
  },
  "Wukong": {
    Name: "Wukong",
    Gender: "Male",
    Position: "Jungle, Top",
    Species : "Vastayan",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Ionia",
    Released: 2011,
    img: "./champions/wukong.jpg",
  },
  "Xayah": {
    Name: "Xayah",
    Gender: "Female",
    Position: "Bottom",
    Species : "Vastayan",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Ionia",
    Released: 2017,
    img: "./champions/xayah.jpg",
  },
  "Xerath": {
    Name: "Xerath",
    Gender: "Male",
    Position: "Middle, Support",
    Species : "God-Warrior",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Shurima",
    Released: 2011,
    img: "./champions/xerath.jpg",
  },
  "XinZhao": {
    Name: "Xin Zhao",
    Undername: "XinZhao",
    Gender: "Male",
    Position: "Jungle",
    Species : "Human",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Demacia, Ionia, Noxus",
    Released: 2010,
    img: "./champions/xinzhao.jpg",
  },
  "Yasuo": {
    Name: "Yasuo",
    Gender: "Male",
    Position: "Middle",
    Species : "Human, Magicborn",
    Resource: "Flow, Other resources",
    RangeType: "Melee",
    Region: "Ionia",
    Released: 2013,
    img: "./champions/yasuo.jpg",
  },
  "Yone": {
    Name: "Yone",
    Gender: "Male",
    Position: "Middle, Top",
    Species : "Human, Magically Altered",
    Resource: "Manaless",
    RangeType: "Melee",
    Region: "Ionia",
    Released: 2020,
    img: "./champions/Yone.jpg",
  },
  "Yorick": {
    Name: "Yorick",
    Gender: "Male",
    Position: "Top",
    Species : "Human, Magically Altered",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Shadow Isles",
    Released: 2011,
    img: "./champions/yorick.jpg",
  },
  "Yunara": {
    Name: "Yunara",
    Gender: "Female",
    Position: "Bottom",
    Species : "Human, Spiritualist",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Ionia",
    Released: 2025,
    img: "./champions/yunara.png",
  },
  "Yuumi": {
    Name: "Yuumi",
    Gender: "Female",
    Position: "Support",
    Species : "Cat, Magically Altered, Other species",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Bandle City",
    Released: 2019,
    img: "./champions/yuumi.jpg",
  },
  "Zaahen": {
    Name: "Zaahen",
    Gender: "Male",
    Position: "Top",
    Species : "Darkin, Human",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Ionia, Shurima",
    Released: 2025,
    img: "./champions/zaahen.png",
  },
  "Zac": {
    Name: "Zac",
    Gender: "Male",
    Position: "Jungle",
    Species : "Golem",
    Resource: "Health costs",
    RangeType: "Melee",
    Region: "Zaun",
    Released: 2013,
    img: "./champions/zac.jpg",
  },
  "Zed": {
    Name: "Zed",
    Gender: "Male",
    Position: "Jungle, Middle",
    Species : "Human, Magically Altered",
    Resource: "Energy",
    RangeType: "Melee",
    Region: "Ionia",
    Released: 2012,
    img: "./champions/zed.jpg",
  },
  "Zeri": {
    Name: "Zeri",
    Gender: "Female",
    Position: "Bottom",
    Species : "Human, Magicborn",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Zaun",
    Released: 2022,
    img: "./champions/zeri.jpg",
  },
  "Ziggs": {
    Name: "Ziggs",
    Gender: "Male",
    Position: "Bottom, Middle",
    Species : "Yordle",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Zaun",
    Released: 2012,
    img: "./champions/ziggs.jpg",
  },
  "Zilean": {
    Name: "Zilean",
    Gender: "Male",
    Position: "Support",
    Species : "Human, Magicborn",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Icathia, Shurima, Runeterra",
    Released: 2009,
    img: "./champions/zilean.jpg",
  },
  "Zoe": {
    Name: "Zoe",
    Gender: "Female",
    Position: "Middle",
    Species : "Aspect, Human",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Targon",
    Released: 2017,
    img: "./champions/zoe.jpg",
  },
  "Zyra": {
    Name: "Zyra",
    Gender: "Female",
    Position: "Support",
    Species : "Human, Plant, Other species",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Ixtal",
    Released: 2012,
    img: "./champions/zyra.jpg",
  },/*
  "": {
    Name: "",
    Gender: "",
    Position: "",
    Species : "",
    Resource: "",
    RangeType: "",
    Region: "",
    Released: ,
  }*/
}


var pictureUrls = [
  "./champions/aatrox.jpg",
  "./champions/ahri.jpg",
  "./champions/akali.jpg",
  "./champions/RiotX_ChampionList_akshan.jpg",
  "./champions/RiotX_ChampionList_alistar.jpg",
  "./champions/ambessa.png",
  "./champions/RiotX_ChampionList_amumu.jpg",
  "./champions/RiotX_ChampionList_anivia.jpg",
  "./champions/RiotX_ChampionList_annie.jpg",
  "./champions/RiotX_ChampionList_aphelios.jpg",
  "./champions/RiotX_ChampionList_ashe.jpg",
  "./champions/RiotX_ChampionList_aurelionsol.jpg",
  "./champions/RiotX_ChampionList_azir.jpg",
  "./champions/RiotX_ChampionList_bard.jpg",
  "./champions/RiotX_ChampionList_belveth.jpg",
  "./champions/RiotX_ChampionList_blitzcrank.jpg",
  "./champions/RiotX_ChampionList_brand.jpg",
  "./champions/RiotX_ChampionList_braum.jpg",
  "./champions/RiotX_ChampionList_briar.jpg",
  "./champions/RiotX_ChampionList_caitlyn.jpg",
  "./champions/RiotX_ChampionList_camille.jpg",
  "./champions/RiotX_ChampionList_cassiopeia.jpg",
  "./champions/RiotX_ChampionList_chogath.jpg",
  "./champions/RiotX_ChampionList_corki.jpg",
  "./champions/RiotX_ChampionList_darius.jpg",
  "./champions/RiotX_ChampionList_diana.jpg",
  "./champions/RiotX_ChampionList_dramundo.jpg",
  "./champions/RiotX_ChampionList_draven.jpg",
  "./champions/RiotX_ChampionList_ekko.jpg",
  "./champions/RiotX_ChampionList_elise.jpg",
  "./champions/RiotX_ChampionList_evelynn.jpg",
  "./champions/RiotX_ChampionList_ezreal.jpg",
  "./champions/RiotX_ChampionList_fiddlesticks.jpg",
  "./champions/RiotX_ChampionList_fiora.jpg",
  "./champions/RiotX_ChampionList_fizz.jpg",
  "./champions/RiotX_ChampionList_galio.jpg",
  "./champions/RiotX_ChampionList_gangplank.jpg",
  "./champions/RiotX_ChampionList_garen.jpg",
  "./champions/RiotX_ChampionList_gnar.jpg",
  "./champions/RiotX_ChampionList_gragas.jpg",
  "./champions/RiotX_ChampionList_graves.jpg",
  "./champions/RiotX_ChampionList_gwen.jpg",
  "./champions/RiotX_ChampionList_hecarim.jpg",
  "./champions/RiotX_ChampionList_heimerdinger.jpg",
  "./champions/RiotX_ChampionList_hwei.jpg",
  "./champions/RiotX_ChampionList_illaoi.jpg",
  "./champions/RiotX_ChampionList_irelia.jpg",
  "./champions/RiotX_ChampionList_ivern.jpg",
  "./champions/RiotX_ChampionList_janna.jpg",
  "./champions/RiotX_ChampionList_jarvaniv.jpg",
  "./champions/RiotX_ChampionList_jax.jpg",
  "./champions/RiotX_ChampionList_jayce.jpg",
  "./champions/RiotX_ChampionList_jhin.jpg",
  "./champions/RiotX_ChampionList_jinx.jpg",
  "./champions/RiotX_ChampionList_ksante.jpg",
  "./champions/RiotX_ChampionList_kaisa.jpg",
  "./champions/RiotX_ChampionList_kalista.jpg",
  "./champions/RiotX_ChampionList_karma.jpg",
  "./champions/RiotX_ChampionList_karthus.jpg",
  "./champions/RiotX_ChampionList_kassadin.jpg",
  "./champions/RiotX_ChampionList_katarina.jpg",
  "./champions/RiotX_ChampionList_kayle.jpg",
  "./champions/RiotX_ChampionList_kayn.jpg",
  "./champions/RiotX_ChampionList_kennen.jpg",
  "./champions/RiotX_ChampionList_khazix.jpg",
  "./champions/RiotX_ChampionList_kindred.jpg",
  "./champions/RiotX_ChampionList_kled.jpg",
  "./champions/RiotX_ChampionList_kogmaw.jpg",
  "./champions/RiotX_ChampionList_leblanc.jpg",
  "./champions/RiotX_ChampionList_leesin.jpg",
  "./champions/RiotX_ChampionList_leona.jpg",
  "./champions/RiotX_ChampionList_lillia.jpg",
  "./champions/RiotX_ChampionList_lissandra.jpg",
  "./champions/RiotX_ChampionList_lucian.jpg",
  "./champions/RiotX_ChampionList_lulu.jpg",
  "./champions/RiotX_ChampionList_lux.jpg",
  "./champions/RiotX_ChampionList_malphite.jpg",
  "./champions/RiotX_ChampionList_malzahar.jpg",
  "./champions/RiotX_ChampionList_maokai.jpg",
  "./champions/RiotX_ChampionList_masteryi.jpg",
  "./champions/RiotX_ChampionList_milio.jpg",
  "./champions/RiotX_ChampionList_missfortune.jpg",
  "./champions/RiotX_ChampionList_mordekaiser.jpg",
  "./champions/RiotX_ChampionList_morgana.jpg",
  "./champions/RiotX_ChampionList_naafiri.jpg",
  "./champions/RiotX_ChampionList_nami.jpg",
  "./champions/RiotX_ChampionList_nasus.jpg",
  "./champions/RiotX_ChampionList_nautilus.jpg",
  "./champions/RiotX_ChampionList_neeko.jpg",
  "./champions/RiotX_ChampionList_nidalee.jpg",
  "./champions/RiotX_ChampionList_nilah.jpg",
  "./champions/RiotX_ChampionList_nocturne.jpg",
  "./champions/RiotX_ChampionList_nunu.jpg",
  "./champions/RiotX_ChampionList_olaf.jpg",
  "./champions/RiotX_ChampionList_orianna.jpg",
  "./champions/RiotX_ChampionList_ornn.jpg",
  "./champions/RiotX_ChampionList_pantheon.jpg",
  "./champions/RiotX_ChampionList_poppy.jpg",
  "./champions/RiotX_ChampionList_pyke.jpg",
  "./champions/RiotX_ChampionList_qiyana.jpg",
  "./champions/RiotX_ChampionList_quinn.jpg",
  "./champions/RiotX_ChampionList_rakan.jpg",
  "./champions/RiotX_ChampionList_rammus.jpg",
  "./champions/RiotX_ChampionList_reksai.jpg",
  "./champions/RiotX_ChampionList_rell.jpg",
  "./champions/RiotX_ChampionList_renata.jpg",
  "./champions/RiotX_ChampionList_renekton.jpg",
  "./champions/RiotX_ChampionList_rengar.jpg",
  "./champions/RiotX_ChampionList_riven.jpg",
  "./champions/RiotX_ChampionList_rumble.jpg",
  "./champions/RiotX_ChampionList_ryze.jpg",
  "./champions/RiotX_ChampionList_samira.jpg",
  "./champions/RiotX_ChampionList_sejuani.jpg",
  "./champions/RiotX_ChampionList_senna.jpg",
  "./champions/RiotX_ChampionList_seraphine.jpg",
  "./champions/RiotX_ChampionList_sett.jpg",
  "./champions/RiotX_ChampionList_shaco.jpg",
  "./champions/RiotX_ChampionList_shen.jpg",
  "./champions/RiotX_ChampionList_shyvana.jpg",
  "./champions/RiotX_ChampionList_singed.jpg",
  "./champions/RiotX_ChampionList_sion.jpg",
  "./champions/RiotX_ChampionList_sivir.jpg",
  "./champions/RiotX_ChampionList_skarner.jpg",
  "./champions/RiotX_ChampionList_sona.jpg",
  "./champions/RiotX_ChampionList_soraka.jpg",
  "./champions/RiotX_ChampionList_swain.jpg",
  "./champions/RiotX_ChampionList_sylas.jpg",
  "./champions/RiotX_ChampionList_syndra.jpg",
  "./champions/RiotX_ChampionList_tahmkench.jpg",
  "./champions/RiotX_ChampionList_taliyah.jpg",
  "./champions/RiotX_ChampionList_talon.jpg",
  "./champions/taric.jpg",
  "./champions/teemo.jpg",
  "./champions/thresh.jpg",
  "./champions/tristana.jpg",
  "./champions/trundle.jpg",
  "./champions/tryndamere.jpg",
  "./champions/twf.jpg",
  "./champions/twitch.jpg",
  "./champions/udyr.jpg",
  "./champions/urgot.jpg",
  "./champions/varus.jpg",
  "./champions/vayne.jpg",
  "./champions/veigar.jpg",
  "./champions/velkoz.jpg",
  "./champions/vex.jpg",
  "./champions/vi.jpg",
  "./champions/viego.jpg",
  "./champions/viktor.jpg",
  "./champions/vladimir.jpg",
  "./champions/Volibear.jpg",
  "./champions/warwick.jpg",
  "./champions/wukong.jpg",
  "./champions/xayah.jpg",
  "./champions/xerath.jpg",
  "./champions/xinzhao.jpg",
  "./champions/yasuo.jpg",
  "./champions/Yone.jpg",
  "./champions/yorick.jpg",
  "./champions/yuumi.jpg",
  "./champions/zac.jpg",
  "./champions/zed.jpg",
  "./champions/zeri.jpg",
  "./champions/ziggs.jpg",
  "./champions/zilean.jpg",
  "./champions/zoe.jpg",
  "./champions/zyra.jpg"
];


//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv VARIABLES vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv//

var carteContainer = document.getElementById("carteContainer");
let btn = document.querySelector("#btn");
let undo = document.querySelector("#undo");
let reset = document.querySelector("#btn");
let checkBoxLeftArr = document.querySelectorAll('.checkboxLeft');
let checkBoxRightArr = document.querySelectorAll('.checkboxRight');
let allCheckboxArr = document.querySelectorAll("input");
let orderOfCards = Object.keys(listOfChampions);
let lastDelete;
let deletedCardArr = [];
let LiArr = document.querySelectorAll('li');
let isChampionSelected = false;
let selectGone = document.querySelector('.pick');
let remain = document.getElementById('remain');
let carteNone;
let dark = '#525044';
let light = '#F0E6D2';

let keywordState = {
  "Male": null,
  "Female": null,
  "Other gender": null,
  "Top": null,
  "Jungle": null,
  "Middle": null,
  "Bottom": null,
  "Support": null,
  "Aspect": null,
  "Celestial": null,
  "Chemically Altered": null,
  "Cyborg": null,
  "Darkin": null,
  "Demon": null,
  "Dragon": null,
  "God,": null,
  "God-Warrior": null,
  "Golem": null,
  "Human": null,
  "Iceborn": null,
  "Magically Altered": null,
  "Magicborn": null,
  "Revenant": null,
  "Spirit ": null,
  "Spiritualist": null,
  "Undead": null,
  "Unknown": null,
  "Vastayan": null,
  "Void-Being": null,
  "Yordle": null,
  "Other species": null,
  "Mana ": null,
  "Manaless": null,
  "Energy": null,
  "Health costs": null,
  "Fury": null,
  "Rage": null,
  "Other resources": null,
  "Melee": null,
  "Range": null,
  "Mixed": null,
  "Bandle City": null,
  "Bilgewater": null,
  "Camavor": null,
  "Demacia": null,
  "Freljord": null,
  "Icathia": null,
  "Ionia": null,
  "Ixtal": null,
  "Noxus": null,
  "Piltover": null,
  "Shadow Isles": null,
  "Shurima": null,
  "Targon": null,
  "Void ": null,
  "Zaun": null,
  "Runeterra": null,
  "2009": null,
  "2010": null,
  "2011": null,
  "2012": null,
  "2013": null,
  "2014": null,
  "2015": null,
  "2016": null,
  "2017": null,
  "2018": null,
  "2019": null,
  "2020": null,
  "2021": null,
  "2022": null,
  "2023": null,
  "2024": null,
  "2025": null,
  "2025": null
};


//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  VARIABLES ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv CARTES vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv//
for (const champion in listOfChampions) {
  //console.log(listOfChampions[champion]['Species']);
  var flip_card = document.createElement("div");
  var flip_card_inner = document.createElement("div");
  var flip_card_front = document.createElement("div");
  var img = document.createElement("img");
  var flip_card_back = document.createElement("div");
  var h1_name = document.createElement("h1");
  var h2_name_back = document.createElement("h2");
  var hr_back = document.createElement("hr");
  h2_name_back.style.textShadow = "0px 0px 6px rgba(0, 0, 0, 1)";
  h1_name.style.textShadow = "0px 0px 6px rgba(0, 0, 0, 1)";
  var div_hr = document.createElement("div");
  hr_back.style.textShadow = "0px 0px 6px rgba(0, 0, 0, 1)";
  var p_gender = document.createElement("p");
  var p_position = document.createElement("p");
  var p_species = document.createElement("p");
  var p_resource = document.createElement("p");
  var p_range = document.createElement("p");
  var p_region = document.createElement("p");
  var p_released = document.createElement("p");
  var genderColor = document.createElement("span");
  var positionColor = document.createElement("span");
  var positionColor2 = document.createElement("span");
  var speciesColor = document.createElement("span");
  var resourceColor = document.createElement("span");
  var resourceColor2 = document.createElement("span");
  var rangeColor = document.createElement("span");
  var regionColor = document.createElement("span");
  var regionColor2 = document.createElement("span");
  var releasedColor = document.createElement("span");
  genderColor.style.color = light;
  positionColor.style.color = light;
  positionColor2.style.color = light;
  speciesColor.style.color = light;
  resourceColor.style.color = light;
  rangeColor.style.color = light;
  regionColor.style.color = light;
  regionColor2.style.color = light;
  releasedColor.style.color = light;
  genderColor.textContent = "Gender : ";
  positionColor.textContent = "Position : ";
  positionColor2.textContent = "Positions : ";
  speciesColor.textContent = "Species : ";
  resourceColor.textContent = "Resource : ";
  resourceColor2.textContent = "Resource : ";
  rangeColor.textContent = "Range type : ";
  regionColor.textContent = "Region : ";
  regionColor2.textContent = "Regions : ";
  releasedColor.textContent = "Released : ";
  p_gender.appendChild(genderColor);
  p_species.appendChild(speciesColor);
  p_resource.appendChild(resourceColor);
  p_range.appendChild(rangeColor);
  p_released.appendChild(releasedColor);
  h1_name.className = "nom";
  h2_name_back.className = "nom_back";
  div_hr.className = "div_hr";
  flip_card.className = "flip-card " + champion;
  flip_card_inner.className = "flip-card-inner";
  flip_card_front.className = "flip-card-front";
  img.alt = listOfChampions[champion]["Name"];
  img.src = listOfChampions[champion]["img"];
  flip_card_back.className = "flip-card-back";
  h1_name.textContent = listOfChampions[champion]["Name"].toUpperCase();
  h2_name_back.textContent = listOfChampions[champion]["Name"].toUpperCase();


  if (listOfChampions[champion]["Gender"].includes("Other gender")){
    listOfChampions[champion]["Gender"] = listOfChampions[champion]["Gender"].replace('Other gender', 'Other gender');
    p_gender.innerHTML += listOfChampions[champion]["Gender"];
  } else {
    p_gender.innerHTML += listOfChampions[champion]["Gender"];
  }
  if (listOfChampions[champion]["Position"].includes(",")){
    p_position.appendChild(positionColor2);
    p_position.innerHTML += listOfChampions[champion]["Position"];
  } else {
    p_position.appendChild(positionColor);
    p_position.innerHTML += listOfChampions[champion]["Position"];
  }
  if (listOfChampions[champion]["Species"].includes("Other species")){
    if (listOfChampions[champion]["Name"] == "Alistar"){
      p_species.innerHTML += "Minotaur";
    } else if (listOfChampions[champion]["Name"] == "Nunu & Willump"){
      p_species.innerHTML += "Human, Yeti";
    } else if (listOfChampions[champion]["Name"] == "Skarner"){
      p_species.innerHTML += "Brackern";
    } else if (listOfChampions[champion]["Name"] == "Trundle"){
      p_species.innerHTML += "Iceborn, Troll";
    } else if (listOfChampions[champion]["Name"] == "Twitch"){
      p_species.innerHTML += "Rat, Chemically Altered";
    } else if (listOfChampions[champion]["Name"] == "Yuumi"){
      p_species.innerHTML += "Cat, Magically Altered";
    } else if (listOfChampions[champion]["Name"] == "Zyra"){
      p_species.innerHTML += "Human, Plant";
    }
  } else {
    p_species.innerHTML += listOfChampions[champion]["Species"];
  }
  if (listOfChampions[champion]["Resource"].includes("Other resources")){
    if (listOfChampions[champion]["Name"] == "Kled"){
      p_resource.innerHTML += "Courage";
    } else if (listOfChampions[champion]["Name"] == "Mordekaiser"){
      p_resource.innerHTML += "Shield";
    } else if (listOfChampions[champion]["Name"] == "Rengar"){
      p_resource.innerHTML += "Ferocity";
    } else if (listOfChampions[champion]["Name"] == "Rumble"){
      p_resource.innerHTML += "Heat";
    } else if (listOfChampions[champion]["Name"] == "Sett"){
      p_resource.innerHTML += "Grit";
    } else if (listOfChampions[champion]["Name"] == "Vladimir"){
      p_resource.innerHTML += "Bloodthirst";
    } else if (listOfChampions[champion]["Name"] == "Yasuo"){
      p_resource.innerHTML += "Flow";
    }
    //listOfChampions[champion]["Resource"] = listOfChampions[champion]["Resource"].replace(', Other resources', '');
  } else {
    p_resource.innerHTML += listOfChampions[champion]["Resource"];
  }
  p_range.innerHTML += listOfChampions[champion]["RangeType"];
  if (listOfChampions[champion]["Region"].includes(",")){
    p_region.appendChild(regionColor2);
    p_region.innerHTML += listOfChampions[champion]["Region"];
  } else {
    p_region.appendChild(regionColor);
    p_region.innerHTML += listOfChampions[champion]["Region"];
  }
  p_released.innerHTML += listOfChampions[champion]["Released"];

        flip_card_front.appendChild(img);
        flip_card_front.appendChild(h1_name);
      flip_card_inner.appendChild(flip_card_front);

        div_hr.appendChild(h2_name_back);
        div_hr.appendChild(hr_back);
        flip_card_back.appendChild(div_hr);
        flip_card_back.appendChild(p_gender);
        flip_card_back.appendChild(p_position);
        flip_card_back.appendChild(p_species);
        flip_card_back.appendChild(p_resource);
        flip_card_back.appendChild(p_range);
        flip_card_back.appendChild(p_region);
        flip_card_back.appendChild(p_released);
      flip_card_inner.appendChild(flip_card_back);
    flip_card.appendChild(flip_card_inner);

    

    flip_card_inner.addEventListener('click', function () {
      if(deletedCardArr.includes(champion) == false){
      //console.log(champion + " a été effacé");
      lastDelete = document.querySelector("." + champion);
      deletedCardArr.push(champion);
      //console.log(deletedCardArr);
      lastDelete.classList.add('none');
      undo.classList.remove('false');
      //console.log("disponible");
      cartesPresent();
      updateCards();
    }
    });
    flip_card.addEventListener('click', function () {
      if(deletedCardArr.includes(champion) == false){
      //console.log(champion + " a été effacé");
      lastDelete = document.querySelector("." + champion);
      deletedCardArr.push(champion);
      //console.log(deletedCardArr);
      lastDelete.classList.add('none');
      undo.classList.remove('false');
      //console.log("disponible");
      cartesPresent();
      updateCards();
      }
    });
    flip_card_back.addEventListener('click', function () {
      if(deletedCardArr.includes(champion) == false){
      //console.log(champion + " a été effacé");
      lastDelete = document.querySelector("." + champion);
      deletedCardArr.push(champion);
      //console.log(deletedCardArr);
      lastDelete.classList.add('none');
      undo.classList.remove('false');
      //console.log("disponible");
      cartesPresent();
      updateCards();
      }
    });
  carteContainer.appendChild(flip_card);


};
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  CARTES ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvTEST OKAY ???vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv//
document.addEventListener('DOMContentLoaded', function() {
  let timer;
  let clickedCheckbox = null;

  // Fonction pour déclencher l'événement 'change' programmatique
  function triggerChangeEvent(element) {
    const event = new Event('change', { bubbles: true });
    element.dispatchEvent(event);
  }

  // Ajoute des écouteurs d'événements à toutes les checkboxes dans les groupes
  document.querySelectorAll('.checkbox-group .checkbox').forEach(checkbox => {
    checkbox.addEventListener('mousedown', function(event) {
      // Empêche les autres actions de s'exécuter pendant le clic prolongé
      event.preventDefault();
      
      clickedCheckbox = this;
      timer = setTimeout(() => {
        // Décocher toutes les autres checkboxes dans la même liste
        if (clickedCheckbox) {
          const group = clickedCheckbox.closest('.checkbox-group');
          group.querySelectorAll('.checkbox').forEach(cb => {
            if (cb !== clickedCheckbox) {
              if (cb.checked) {
                cb.checked = false;
                triggerChangeEvent(cb); // Déclenche l'événement 'change'
              }
            }
          });
        }
      }, 250); // 2 secondes
    });

    checkbox.addEventListener('mouseup', function() {
      // Annule le timer si le clic est relâché avant 2 secondes
      clearTimeout(timer);
      clickedCheckbox = null;
    });

    checkbox.addEventListener('mouseleave', function() {
      // Annule le timer si la souris quitte la zone de la checkbox
      clearTimeout(timer);
      clickedCheckbox = null;
    });
  });
});

let select = document.querySelector(".selection");


function selection(champion) {
  var flip_card = document.createElement("div");
  var flip_card_inner = document.createElement("div");
  var flip_card_front = document.createElement("div");
  var img = document.createElement("img");
  var flip_card_back = document.createElement("div");
  var h1_name = document.createElement("h1");
  var h2_name_back = document.createElement("h2");
  var hr_back = document.createElement("hr");
  h1_name.style.textShadow = "0px 0px 6px rgba(0, 0, 0, 1)";
  h2_name_back.style.textShadow = "0px 0px 6px rgba(0, 0, 0, 1)";
  var div_hr = document.createElement("div");
  hr_back.style.textShadow = "0px 0px 6px rgba(0, 0, 0, 1)";
  var p_gender = document.createElement("p");
  var p_position = document.createElement("p");
  var p_species = document.createElement("p");
  var p_resource = document.createElement("p");
  var p_range = document.createElement("p");
  var p_region = document.createElement("p");
  var p_released = document.createElement("p");
  var genderColor = document.createElement("span");
  var positionColor = document.createElement("span");
  var positionColor2 = document.createElement("span");
  var speciesColor = document.createElement("span");
  var resourceColor = document.createElement("span");
  var rangeColor = document.createElement("span");
  var regionColor = document.createElement("span");
  var regionColor2 = document.createElement("span");
  var releasedColor = document.createElement("span");
  // Set styles
  genderColor.style.color = light;
  positionColor.style.color = light;
  positionColor2.style.color = light;
  speciesColor.style.color = light;
  resourceColor.style.color = light;
  rangeColor.style.color = light;
  regionColor.style.color = light;
  regionColor2.style.color = light;
  releasedColor.style.color = light;
  // Set text content
  genderColor.textContent = "Gender : ";
  positionColor.textContent = "Position : ";
  positionColor2.textContent = "Positions : ";
  speciesColor.textContent = "Species : ";
  resourceColor.textContent = "Resource : ";
  rangeColor.textContent = "Range type : ";
  regionColor.textContent = "Region : ";
  regionColor2.textContent = "Regions : ";
  releasedColor.textContent = "Released : ";
  // Append colored spans to their respective <p> elements
  p_gender.appendChild(genderColor);
  p_species.appendChild(speciesColor);
  p_resource.appendChild(resourceColor);
  p_range.appendChild(rangeColor);
  p_released.appendChild(releasedColor);
  // Set class names and attributes
  h1_name.className = "nom";
  h2_name_back.className = "nom_back";
  div_hr.className = "div_hr";
  flip_card.className = "flip-card " + champion;
  flip_card_inner.className = "flip-card-inner";
  flip_card_front.className = "flip-card-front";
  img.alt = listOfChampions[champion]["Name"];
  img.src = listOfChampions[champion]["img"];
  flip_card_back.className = "flip-card-back";
  h1_name.textContent = listOfChampions[champion]["Name"].toUpperCase();
  h2_name_back.textContent = listOfChampions[champion]["Name"].toUpperCase();
  // Add text content based on conditions
  p_gender.innerHTML += listOfChampions[champion]["Gender"];
  if (listOfChampions[champion]["Position"].includes(",")) {
      p_position.appendChild(positionColor2);
  } else {
      p_position.appendChild(positionColor);
  }
  p_position.innerHTML += listOfChampions[champion]["Position"];
  p_species.innerHTML += listOfChampions[champion]["Species"];
  p_resource.innerHTML += listOfChampions[champion]["Resource"];
  p_range.innerHTML += listOfChampions[champion]["RangeType"];
  if (listOfChampions[champion]["Region"].includes(",")) {
      p_region.appendChild(regionColor2);
  } else {
      p_region.appendChild(regionColor);
  }
  p_region.innerHTML += listOfChampions[champion]["Region"];
  p_released.innerHTML += listOfChampions[champion]["Released"];
  // Build the flip card structure
  flip_card_front.appendChild(img);
  flip_card_front.appendChild(h1_name);
  flip_card_inner.appendChild(flip_card_front);
  div_hr.appendChild(h2_name_back);
  div_hr.appendChild(hr_back);
  flip_card_back.appendChild(div_hr);
  flip_card_back.appendChild(p_gender);
  flip_card_back.appendChild(p_position);
  flip_card_back.appendChild(p_species);
  flip_card_back.appendChild(p_resource);
  flip_card_back.appendChild(p_range);
  flip_card_back.appendChild(p_region);
  flip_card_back.appendChild(p_released);
  flip_card_inner.appendChild(flip_card_back);
  flip_card.appendChild(flip_card_inner);
  // Append the flip card to an existing element in the DOM
  select.appendChild(flip_card);
  flip_card.classList.add("pick");
  isChampionSelected = true;

}

  // Call the function with a champion (e.g., 'Ahri')
/*

document.querySelectorAll('.flip-card').forEach(card => {
  let pressTimer;
  card.addEventListener('mousedown', () => {
    pressTimer = setTimeout(() => {
      storeCardValue(card);
    }, 1000);
  });
  card.addEventListener('mouseup', () => {
    clearTimeout(pressTimer);
  });
  card.addEventListener('mouseleave', () => {
    clearTimeout(pressTimer);
  });
});
*/
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('contextmenu', function(ev) {
    if (!isChampionSelected) {
      ev.preventDefault();
      alert('Champion selected with success!')
      storeCardValue(card);
      selection2.classList.remove('none');
      return false;
    } else {
      ev.preventDefault();
      alert('You have already selected a champion. You must Reset first.')
      return false;
    }
  }, false);
})

function storeCardValue(cardElement) {
  // Extract the champion name from the card
  const cardHTML = cardElement.outerHTML;
  const cardNameMatch = cardHTML.match(/<h1 class="nom"[^>]*>([^<]+)<\/h1>/);
  let cardName = cardNameMatch ? cardNameMatch[1] : null;
  if (cardName) {
    // Capitalize only the first letter
    cardName = cardName.charAt(0).toUpperCase() + cardName.slice(1).toLowerCase();
    if (listOfChampions[cardName]) {
      const championDetails = listOfChampions[cardName];

      if(!isChampionSelected) {
        selection(cardName);
        selectGone = document.querySelector('.pick');
      } 
      // You can now use championDetails to perform actions or store them as needed
    }
  } 
}


let arrow = document.querySelector(".arrow-button");
let selection2 = document.querySelector('.selection');

arrow.addEventListener('click', function(){

  if (selection2.style.transform === 'translate(0px, -50%)') {
    selection2.style.transform = 'translate(-272px, -50%)';
    arrow.classList.add('out');
    arrow.classList.remove('in');
  } else {
    selection2.style.transform = 'translate(0px, -50%)';
    arrow.classList.add('in');
    arrow.classList.remove('out');
  }
});


//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ TEST OKAY ???^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//

 //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv UNDO vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv//

undo.addEventListener('mouseenter', function () {
    if (deletedCardArr.length > 0){
      switch (deletedCardArr[deletedCardArr.length - 1]){
        case "AurelionSol":
          undo.textContent = "Aurelion Sol".toUpperCase();
          break;
        case "BelVeth":
          undo.textContent = "Bel'Veth".toUpperCase();
          break;
        case 'ChoGath':
          undo.textContent = "Cho'Gath".toUpperCase();
          break;
        case 'DrMundo':
          undo.textContent = "Dr. Mundo".toUpperCase();
          break;
        case "Jarvan":
          undo.textContent = "Jarvan IV".toUpperCase();
          break;
        case 'KSante':
          undo.textContent = "K'Sante".toUpperCase();
          break;
        case 'KaiSa':
          undo.textContent = "Kai'Sa".toUpperCase();
          break;
        case 'KogMaw':
          undo.textContent = "Kog'Maw".toUpperCase();
          break;
        case 'KhaZix':
          undo.textContent = "Kha'Zix".toUpperCase();
          break;
        case 'LeeSin':
          undo.textContent = "Lee Sin".toUpperCase();
          break;
        case 'MasterYi':
          undo.textContent = "Master Yi".toUpperCase();
          break;
        case 'MissFortune':
          undo.textContent = "Miss Fortune".toUpperCase();
          break; 
        case 'RekSai':
          undo.textContent = "Rek'Sai".toUpperCase();
          break;
        case 'RenataGlasc':
          undo.textContent = "Renata Glasc".toUpperCase();
          break;
        case 'TahmKench':
          undo.textContent = "Tahm Kench".toUpperCase();
          break;
        case 'TwistedFate':
          undo.textContent = "Twisted Fate".toUpperCase();
          break;
        case 'VelKoz':
          undo.textContent = "Vel'Koz".toUpperCase();
          break;
        case 'XinZhao':
          undo.textContent = "Xin Zhao".toUpperCase();
          break;
        default:
          undo.textContent = deletedCardArr[deletedCardArr.length - 1].toUpperCase();
      }
    }
    else {
      undo.textContent = 'UNDO';
    }
});

undo.addEventListener('mouseleave', function () {
  undo.textContent = 'UNDO';
});

undo.addEventListener('click', function(){
  if (deletedCardArr.length > 0){
    lastDelete = deletedCardArr[deletedCardArr.length -1];
    let putain = document.querySelector("." + lastDelete);
    deletedCardArr.pop();
    putain.classList.remove('none');
    //console.log(putain);
    //console.log(deletedCardArr);
    cartesPresent();
    if (deletedCardArr.length === 0){
      undo.classList.add('false');
      //console.log("indisponible");
      undo.textContent = 'UNDO';
      cartesPresent();
    } else if (deletedCardArr.length > 0){
      undo.classList.remove('false');
      cartesPresent();
      //console.log("disponible");
      switch (deletedCardArr[deletedCardArr.length - 1]){
        case "AurelionSol":
          undo.textContent = "Aurelion Sol".toUpperCase();
          break;
        case "BelVeth":
          undo.textContent = "Bel'Veth".toUpperCase();
          break;
        case 'ChoGath':
          undo.textContent = "Cho'Gath".toUpperCase();
          break;
        case 'DrMundo':
          undo.textContent = "Dr. Mundo".toUpperCase();
          break;
        case "Jarvan":
          undo.textContent = "Jarvan IV".toUpperCase();
          break;
        case 'KSante':
          undo.textContent = "K'Sante".toUpperCase();
          break;
        case 'KaiSa':
          undo.textContent = "Kai'Sa".toUpperCase();
          break;
        case 'KogMaw':
          undo.textContent = "Kog'Maw".toUpperCase();
          break;
        case 'KhaZix':
          undo.textContent = "Kha'Zix".toUpperCase();
          break;
        case 'LeeSin':
          undo.textContent = "Lee Sin".toUpperCase();
          break;
        case 'MasterYi':
          undo.textContent = "Master Yi".toUpperCase();
          break; 
        case 'MissFortune':
          undo.textContent = "Miss Fortune".toUpperCase();
          break; 
        case 'RekSai':
          undo.textContent = "Rek'Sai".toUpperCase();
          break;
        case 'RenataGlasc':
          undo.textContent = "Renata Glasc".toUpperCase();
          break;
        case 'TahmKench':
          undo.textContent = "Tahm Kench".toUpperCase();
          break;
        case 'TwistedFate':
          undo.textContent = "Twisted Fate".toUpperCase();
          break;
        case 'VelKoz':
          undo.textContent = "Vel'Koz".toUpperCase();
          break;
        case 'XinZhao':
          undo.textContent = "Xin Zhao".toUpperCase();
          break;
        default:
          undo.textContent = deletedCardArr[deletedCardArr.length - 1].toUpperCase();
      }
    }
  }
  updateCards();
});
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  UNDO ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//
let cartesArr = document.querySelectorAll('.flip-card');

cartesArr.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
          checkboxes.forEach((otherCheckbox) => {
              if (otherCheckbox !== checkbox) {
                  otherCheckbox.checked = false;
              }
          });
      }
  });
});
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv RESET  vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv//


reset.addEventListener('click', function(){
  cartesArr.forEach(function(cartesnone){
    if (cartesnone.classList.contains('none')){
      cartesnone.classList.remove('none');
      cartesPresent();
    } 
  })
  checkBoxLeftArr.forEach(function (checkbox){
    checkbox.checked = false;
    cartesPresent();
  })
  checkBoxRightArr.forEach(function (checkbox){
    checkbox.checked = false;
    cartesPresent();
  })
  LiArr.forEach(function(list){
    if (list.classList.contains('checkboxIsNotChecked')){
      list.classList.remove("checkboxIsNotChecked");
      list.classList.add("checkboxIsChecked");
    }
  })
  undo.classList.add('false');
  deletedCardArr.splice(0, deletedCardArr.length);
  cartesPresent();

  selection2.style.transform = 'translate(-272px, -50%)';
  

  selection2.addEventListener('transitionend', function handleTransitionEnd() {
    // Ensure the transformation is complete before removing
    if (selectGone) {
      selectGone.parentNode.removeChild(selectGone);
    }
    // Reset or update other states as needed
    isChampionSelected = false;
    // Remove the event listener to avoid potential memory leaks
    selection2.removeEventListener('transitionend', handleTransitionEnd);
  });

  keywordState = {
  "Male": null,
  "Female": null,
  "Other gender": null,
  "Top": null,
  "Jungle": null,
  "Middle": null,
  "Bottom": null,
  "Support": null,
  "Aspect": null,
  "Celestial": null,
  "Chemically Altered": null,
  "Cyborg": null,
  "Darkin": null,
  "Demon": null,
  "Dragon": null,
  "God,": null,
  "God-Warrior": null,
  "Golem": null,
  "Human": null,
  "Iceborn": null,
  "Magically Altered": null,
  "Magicborn": null,
  "Revenant": null,
  "Spirit ": null,
  "Spiritualist": null,
  "Undead": null,
  "Unknown": null,
  "Vastayan": null,
  "Void-Being": null,
  "Yordle": null,
  "Other species": null,
  "Mana ": null,
  "Manaless": null,
  "Energy": null,
  "Health costs": null,
  "Fury": null,
  "Rage": null,
  "Other resources": null,
  "Melee": null,
  "Range": null,
  "Mixed": null,
  "Bandle City": null,
  "Bilgewater": null,
  "Camavor": null,
  "Demacia": null,
  "Freljord": null,
  "Icathia": null,
  "Ionia": null,
  "Ixtal": null,
  "Noxus": null,
  "Piltover": null,
  "Shadow Isles": null,
  "Shurima": null,
  "Targon": null,
  "Void ": null,
  "Zaun": null,
  "Runeterra": null,
  "2009": null,
  "2010": null,
  "2011": null,
  "2012": null,
  "2013": null,
  "2014": null,
  "2015": null,
  "2016": null,
  "2017": null,
  "2018": null,
  "2019": null,
  "2020": null,
  "2021": null,
  "2022": null,
  "2023": null,
  "2024": null,
  "2025": null,
  "2025": null
  };
  updateCards();

});
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ RESET  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv Radio On Cards vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv//
/*
const cards = document.querySelectorAll(".flip-card-back");

cards.forEach((card, index) => {
  // Create a radio input element
  const radio = document.createElement('input');
  radio.type = 'radio';
  radio.name = 'cardRadio'; // All radios should have the same name for mutual exclusivity
  radio.value = `card${index + 1}`; // Optional: set a value for each radio

  // Append the radio input to the card
  card.appendChild(radio);
});
*/

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  Radio On Cards ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv NAV DROPDOWN vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv//
function toggleVisibility(elementId) {



  let mouseClickOut = false;


  var checkList = document.getElementById(elementId);
  if (checkList) {
    var clickableElement = checkList.getElementsByClassName(elementId)[0];
    var fond_invisible = document.querySelector('.fond-invisible');
    fond_invisible.addEventListener('click', function (){
      mouseClickOut = true;            
      if (mouseClickOut == true){
        checkList.classList.remove('visible');
        fond_invisible.classList.add('displayNone');
        mouseClickOut = false;
        checkList.classList.remove("in-front");
      }
    })



    if (clickableElement) {
      clickableElement.onclick = function (evt) {
        if (checkList.classList.contains('visible')) {/*--- Si déjà afficher, enlève-le ---*/
          checkList.classList.remove('visible');
          fond_invisible.classList.add('displayNone');
          checkList.classList.remove("in-front");
        }   else { /*--- Si pas afficher, affiche-le ---*/
          checkList.classList.add('visible');
          fond_invisible.classList.remove('displayNone');
          checkList.classList.add("in-front");
        }
      };
    } else {
      console.error('Clickable element not found for ' + elementId);
    }
  } else {
    console.error('Element not found with ID: ' + elementId);
  }
}

// Usage
toggleVisibility('gender');
toggleVisibility('position');
toggleVisibility('species');
toggleVisibility('resource');
toggleVisibility('rangeType');
toggleVisibility('region');
toggleVisibility('released');

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ NAV DROPDOWN ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//
 


//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvVvvvvvvvvvvvvvvvv GAME BRAIN SYSTEM vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv//
let currentBoxValue;
let championElement;
let championASupprime;
let rightCurrentBoxValue;
let leftCurrentBoxValue;
let championElementRight;

checkBoxRightArr.forEach(function(checkbox) {


  checkbox.addEventListener('change', function(){
    if (checkbox.checked == true){
      rightCurrentBoxValue = checkbox.value;
      //console.log(rightCurrentBoxValue);
      
      if (keywordState[rightCurrentBoxValue] == null) {
        keywordState[rightCurrentBoxValue] = true;
        //console.log(keywordState[rightCurrentBoxValue]);
        updateCards();
      }
    } else if (checkbox.checked == false){
      rightCurrentBoxValue = checkbox.value;
      //console.log(rightCurrentBoxValue);
      
      if (keywordState[rightCurrentBoxValue] == true) {
        keywordState[rightCurrentBoxValue] = null;
        //console.log(keywordState[rightCurrentBoxValue]);
        updateCards();
      }
    }
  });
});

checkBoxLeftArr.forEach(function(checkbox) {


  checkbox.addEventListener('change', function(){
    if (checkbox.checked == true){
      leftCurrentBoxValue = checkbox.value;
      //console.log(leftCurrentBoxValue);
      
      if (keywordState[leftCurrentBoxValue] == null) {
        keywordState[leftCurrentBoxValue] = false;
        //console.log(keywordState[leftCurrentBoxValue]);
        updateCards();
      }
    } else if (checkbox.checked == false){
      leftCurrentBoxValue = checkbox.value;
      //console.log(leftCurrentBoxValue);
      
      if (keywordState[leftCurrentBoxValue] == false) {
        keywordState[leftCurrentBoxValue] = null;
        //console.log(keywordState[leftCurrentBoxValue]);
        updateCards();
      }
    }
  });
});

let flipArr = document.querySelectorAll(".flip-card");
let male = document.getElementById("gender_male");
let female = document.getElementById("gender_female");
let otherg = document.getElementById("gender_other");
let countgMale = 0;
let countgFemale = 0;
let countgOther = 0;
let topP = document.getElementById("position_top");
let jgP = document.getElementById("position_jungle");
let midP = document.getElementById("position_mid");
let adcP = document.getElementById("position_adc");
let suppP = document.getElementById("position_supp");
let countpTop = 0;
let countpJungle = 0;
let countpMid = 0;
let countpADC = 0;
let countpSupp = 0;
let species_aspect = document.getElementById("species_aspect");
let species_celestial = document.getElementById("species_celestial");
let species_chemically = document.getElementById("species_chemically");
let species_cyborg = document.getElementById("species_cyborg");
let species_darkin = document.getElementById("species_darkin");
let species_demon = document.getElementById("species_demon");
let species_dragon = document.getElementById("species_dragon");
let species_god = document.getElementById("species_god");
let species_Warrior = document.getElementById("species_god-Warrior");
let species_golem = document.getElementById("species_golem");
let species_human = document.getElementById("species_human");
let species_iceborn = document.getElementById("species_iceborn");
let species_magically = document.getElementById("species_magically");
let species_magicborn = document.getElementById("species_magicborn");
let species_revenant = document.getElementById("species_revenant");
let species_spirit = document.getElementById("species_spirit");
let species_spiritualist = document.getElementById("species_spiritualist");
let species_undead = document.getElementById("species_undead");
let species_unknown = document.getElementById("species_unknown");
let species_vastayan = document.getElementById("species_vastayan");
let species_void = document.getElementById("species_void");
let species_yordle = document.getElementById("species_yordle");
let species_otherSpecies = document.getElementById("species_otherSpecies");
let countsAspect = 0;
let countsCelestial = 0;
let countsChemically = 0;
let countsCyborg = 0;
let countsDarkin = 0;
let countsDemon = 0;
let countsDragon = 0;
let countsGod = 0;
let countsWarrior = 0;
let countsGolem = 0;
let countsHuman = 0;
let countsIceborn = 0;
let countsMagically = 0;
let countsMagicborn = 0;
let countsRevenant = 0;
let countsSpirit = 0;
let countsSpiritualist = 0;
let countsUndead = 0;
let countsUnknown = 0;
let countsVastayan = 0;
let countsVoid = 0;
let countsYordle = 0;
let countsOther = 0;
let resource_mana = document.getElementById("resource_mana");
let resource_manaless = document.getElementById("resource_manaless");
let resource_energy = document.getElementById("resource_energy");
let resource_health = document.getElementById("resource_health");
let resource_fury = document.getElementById("resource_fury");
let resource_rage = document.getElementById("resource_rage");
let resource_otherResource = document.getElementById("resource_otherResource");
let countrMana = 0;
let countrManaless = 0;
let countrEnergy = 0;
let countrHealth = 0;
let countrFury = 0;
let countrRage = 0;
let countrOther = 0;
let type_melee = document.getElementById("type_melee");
let type_range = document.getElementById("type_range");
let type_mixed = document.getElementById("type_mixed");
let counttMelee = 0;
let counttRange = 0;
let counttMixed = 0;
let region_bandle = document.getElementById("region_bandle");
let region_bilgewater = document.getElementById("region_bilgewater");
let region_camavor = document.getElementById("region_camavor");
let region_demacia = document.getElementById("region_demacia");
let region_freljord = document.getElementById("region_freljord");
let region_icathia = document.getElementById("region_icathia");
let region_ionia = document.getElementById("region_ionia");
let region_ixtal = document.getElementById("region_ixtal");
let region_noxus = document.getElementById("region_noxus");
let region_piltover = document.getElementById("region_piltover");
let region_shadow = document.getElementById("region_shadow");
let region_shurima = document.getElementById("region_shurima");
let region_targon = document.getElementById("region_targon");
let region_nean = document.getElementById("region_nean");
let region_zaun = document.getElementById("region_zaun");
let region_runeterra = document.getElementById("region_runeterra");
let countrrBandle = 0;
let countrrBilgewater = 0;
let countrrCamavor = 0;
let countrrFreljord = 0;
let countrrDemacia = 0;
let countrrIcathia = 0;
let countrrIonia = 0;
let countrrIxtal = 0;
let countrrNoxus = 0;
let countrrPiltover = 0;
let countrrShadow = 0;
let countrrShurima = 0;
let countrrTargon = 0;
let countrrVoid = 0;
let countrrZaun = 0;
let countrrRuneterra = 0;
let released_2009 = document.getElementById("released_2009");
let released_2010 = document.getElementById("released_2010");
let released_2011 = document.getElementById("released_2011");
let released_2012 = document.getElementById("released_2012");
let released_2013 = document.getElementById("released_2013");
let released_2014 = document.getElementById("released_2014");
let released_2015 = document.getElementById("released_2015");
let released_2016 = document.getElementById("released_2016");
let released_2017 = document.getElementById("released_2017");
let released_2018 = document.getElementById("released_2018");
let released_2019 = document.getElementById("released_2019");
let released_2020 = document.getElementById("released_2020");
let released_2021 = document.getElementById("released_2021");
let released_2022 = document.getElementById("released_2022");
let released_2023 = document.getElementById("released_2023");
let released_2024 = document.getElementById("released_2024");
let released_2025 = document.getElementById("released_2025");
let released_2026 = document.getElementById("released_2026");
let count2009 = 0;
let count2010 = 0;
let count2011 = 0;
let count2012 = 0;
let count2013 = 0;
let count2014 = 0;
let count2015 = 0;
let count2016 = 0;
let count2017 = 0;
let count2018 = 0;
let count2019 = 0;
let count2020 = 0;
let count2021 = 0;
let count2022 = 0;
let count2023 = 0;
let count2024 = 0;
let count2025 = 0;
let count2026 = 0;

const genderList = [
  { el: male,   name: "Male",   count: () => countgMale },
  { el: female, name: "Female", count: () => countgFemale },
  { el: otherg, name: "Other",  count: () => countgOther }
]

const positionList = [
  { el: topP,  name: "Top",     count: () => countpTop },
  { el: jgP,   name: "Jungle",  count: () => countpJungle },
  { el: midP,  name: "Middle",  count: () => countpMid },
  { el: adcP,  name: "Bottom",  count: () => countpADC },
  { el: suppP, name: "Support", count: () => countpSupp }
];


const speciesList = [
  { el: species_aspect,        name: "Aspect",           count: () => countsAspect },
  { el: species_celestial,     name: "Celestial",        count: () => countsCelestial },
  { el: species_chemically,    name: "Chemically Alt.",  count: () => countsChemically },
  { el: species_cyborg,        name: "Cyborg",           count: () => countsCyborg },
  { el: species_darkin,        name: "Darkin",           count: () => countsDarkin },
  { el: species_demon,         name: "Demon",            count: () => countsDemon },
  { el: species_dragon,        name: "Dragon",           count: () => countsDragon },
  { el: species_god,           name: "God",              count: () => countsGod },
  { el: species_Warrior,       name: "God-Warrior",      count: () => countsWarrior },
  { el: species_golem,         name: "Golem",            count: () => countsGolem },
  { el: species_human,         name: "Human",            count: () => countsHuman },
  { el: species_iceborn,       name: "Iceborn",          count: () => countsIceborn },
  { el: species_magically,     name: "Magically Alt.",   count: () => countsMagically },
  { el: species_magicborn,     name: "Magicborn",        count: () => countsMagicborn },
  { el: species_revenant,      name: "Revenant",         count: () => countsRevenant },
  { el: species_spirit,        name: "Spirit",           count: () => countsSpirit },
  { el: species_spiritualist,  name: "Spiritualist",     count: () => countsSpiritualist },
  { el: species_undead,        name: "Undead",           count: () => countsUndead },
  { el: species_unknown,       name: "Unknown",          count: () => countsUnknown },
  { el: species_vastayan,      name: "Vastayan",         count: () => countsVastayan },
  { el: species_void,          name: "Void-Being",       count: () => countsVoid  },
  { el: species_yordle,        name: "Yordle",           count: () => countsYordle },
  { el: species_otherSpecies,  name: "Other",            count: () => countsOther  }
];

const resourceList = [
  { el: resource_mana, name: "Mana", count: () => countrMana },
  { el: resource_manaless, name: "Manaless", count: () => countrManaless },
  { el: resource_energy, name: "Energy", count: () => countrEnergy },
  { el: resource_health, name: "Health costs", count: () => countrHealth },
  { el: resource_fury, name: "Fury", count: () => countrFury },
  { el: resource_rage, name: "Rage", count: () => countrRage },
  { el: resource_otherResource, name: "Other", count: () => countrOther }
];

const typeList = [
  { el: type_melee, name: "Melee",  count: () => counttMelee },
  { el: type_range, name: "Ranged",  count: () => counttRange },
  { el: type_mixed, name: "Mixed",  count: () => counttMixed }
]

const regions = [
  { el: region_bandle,   name: "Bandle City", count: () => countrrBandle },
  { el: region_bilgewater, name: "Bilgewater", count: () => countrrBilgewater },
  { el: region_camavor,  name: "Camavor", count: () => countrrCamavor },
  { el: region_demacia,  name: "Demacia", count: () => countrrDemacia },
  { el: region_freljord, name: "Freljord", count: () => countrrFreljord },
  { el: region_icathia,  name: "Icathia", count: () => countrrIcathia },
  { el: region_ionia,    name: "Ionia", count: () => countrrIonia },
  { el: region_ixtal,    name: "Ixtal", count: () => countrrIxtal },
  { el: region_noxus,    name: "Noxus", count: () => countrrNoxus },
  { el: region_piltover, name: "Piltover", count: () => countrrPiltover },
  { el: region_shadow,  name: "Shadow Isles", count: () => countrrShadow },
  { el: region_shurima, name: "Shurima", count: () => countrrShurima },
  { el: region_targon,  name: "Targon", count: () => countrrTargon },
  { el: region_nean,    name: "Void", count: () => countrrVoid },
  { el: region_zaun,    name: "Zaun", count: () => countrrZaun },
  { el: region_runeterra, name: "Runeterra", count: () => countrrRuneterra }
];

const releasedYears = [
  { el: released_2009, count: () => count2009, year: 2009 },
  { el: released_2010, count: () => count2010, year: 2010 },
  { el: released_2011, count: () => count2011, year: 2011 },
  { el: released_2012, count: () => count2012, year: 2012 },
  { el: released_2013, count: () => count2013, year: 2013 },
  { el: released_2014, count: () => count2014, year: 2014 },
  { el: released_2015, count: () => count2015, year: 2015 },
  { el: released_2016, count: () => count2016, year: 2016 },
  { el: released_2017, count: () => count2017, year: 2017 },
  { el: released_2018, count: () => count2018, year: 2018 },
  { el: released_2019, count: () => count2019, year: 2019 },
  { el: released_2020, count: () => count2020, year: 2020 },
  { el: released_2021, count: () => count2021, year: 2021 },
  { el: released_2022, count: () => count2022, year: 2022 },
  { el: released_2023, count: () => count2023, year: 2023 },
  { el: released_2024, count: () => count2024, year: 2024 },
  { el: released_2025, count: () => count2025, year: 2025 },
  { el: released_2026, count: () => count2026, year: 2026 }
];




function updateCards(){
  clear();
  countgMale = 0;
  countgFemale = 0;
  countgOther = 0;

  countpTop = 0;
  countpJungle = 0;
  countpMid = 0;
  countpADC = 0;
  countpSupp = 0;

  countsAspect = 0;
  countsCelestial = 0;
  countsChemically = 0;
  countsCyborg = 0;
  countsDarkin = 0;
  countsDemon = 0;
  countsDragon = 0;
  countsGod = 0;
  countsWarrior = 0;
  countsGolem = 0;
  countsHuman = 0;
  countsIceborn = 0;
  countsMagically = 0;
  countsMagicborn = 0;
  countsRevenant = 0;
  countsSpirit = 0;
  countsSpiritualist = 0;
  countsUndead = 0;
  countsUnknown = 0;
  countsVastayan = 0;
  countsVoid = 0;
  countsYordle = 0;
  countsOther = 0;

  countrMana = 0;
  countrManaless = 0;
  countrEnergy = 0;
  countrHealth = 0;
  countrFury = 0;
  countrRage = 0;
  countrOther = 0;

  counttMelee = 0;
  counttRange = 0;
  counttMixed = 0;

  countrrBandle = 0;
  countrrBilgewater = 0;
  countrrCamavor = 0;
  countrrFreljord = 0;
  countrrDemacia = 0;
  countrrIcathia = 0;
  countrrIonia = 0;
  countrrIxtal = 0;
  countrrNoxus = 0;
  countrrPiltover = 0;
  countrrShadow = 0;
  countrrShurima = 0;
  countrrTargon = 0;
  countrrVoid = 0;
  countrrZaun = 0;
  countrrRuneterra = 0;

  count2009 = 0;
  count2010 = 0;
  count2011 = 0;
  count2012 = 0;
  count2013 = 0;
  count2014 = 0;
  count2015 = 0;
  count2016 = 0;
  count2017 = 0;
  count2018 = 0;
  count2019 = 0;
  count2020 = 0;
  count2021 = 0;
  count2022 = 0;
  count2023 = 0;
  count2024 = 0;
  count2025 = 0;
  count2026 = 0;

  const trueKeywords = Object.keys(keywordState).filter(key => keywordState[key] === true);
  const falseKeywords = Object.keys(keywordState).filter(key => keywordState[key] === false);
  let trueWord;
  let falseWord;

  for (const key in trueKeywords){
    trueWord = trueKeywords[key];

    for (const cartes in listOfChampions){
    championElement = listOfChampions[cartes];

      if (championElement['Gender'].includes(trueWord) ||
        championElement['Position'].includes(trueWord) ||
        championElement['Species'].includes(trueWord) ||
        championElement['Resource'].includes(trueWord) ||
        championElement['RangeType'].includes(trueWord) ||
        championElement['Region'].includes(trueWord) ||
        championElement['Released'].toString().includes(trueWord))
        { 
          //console.log(championElement);
      } else {
        championASupprime = document.querySelector("." + cartes);
        championASupprime.classList.add('none');
      }
    }
  }

  for (const key in falseKeywords){
    falseWord = falseKeywords[key];

    for (const cartes in listOfChampions){
      championElement = listOfChampions[cartes];
      if (championElement['Gender'].includes(falseWord) ||
        championElement['Position'].includes(falseWord) ||
        championElement['Species'].includes(falseWord) ||
        championElement['Resource'].includes(falseWord) ||
        championElement['RangeType'].includes(falseWord) ||
        championElement['Region'].includes(falseWord) ||
        championElement['Released'].toString().includes(falseWord))
        { 
          championASupprime = document.querySelector("." + cartes);
          championASupprime.classList.add('none');
      } 
    }
  }

  for (const supprimer in deletedCardArr){
    
    if (deletedCardArr.length != 0){
      let balise = document.querySelector("." + deletedCardArr[supprimer]);
      balise.classList.add("none");
    }
  }

    flipArr.forEach(function(yes) {
    if(!yes.classList.contains("none")){
      for (const champion in listOfChampions) {
        if (yes.classList.contains(listOfChampions[champion]["Name"]) || yes.classList.contains(listOfChampions[champion]["Undername"])){
          //console.log(listOfChampions[champion]["Name"]);
          //console.log(listOfChampions[champion]["Gender"]);
          if (listOfChampions[champion]["Gender"] == "Male"){
            countgMale += 1;
          } else if (listOfChampions[champion]["Gender"] == "Female"){
            countgFemale += 1;
          } else if (listOfChampions[champion]["Gender"] == "Other gender"){
            countgOther += 1;
          }

          ////////////////POSITION
          if (listOfChampions[champion]["Position"].includes("Top")){
            countpTop += 1;
          }
          if (listOfChampions[champion]["Position"].includes("Jungle")){
            countpJungle += 1;
          }
          if (listOfChampions[champion]["Position"].includes("Middle")){
            countpMid += 1;
          }
          if (listOfChampions[champion]["Position"].includes("Bottom")){
            countpADC += 1;
          }
          if (listOfChampions[champion]["Position"].includes("Support")){
            countpSupp += 1;
          }

          ////////////////SPECIES
          if (listOfChampions[champion]["Species"].includes("Aspect")){
            countsAspect += 1;
          }
          if (listOfChampions[champion]["Species"].includes("Celestial")){
            countsCelestial += 1;
          }
          if (listOfChampions[champion]["Species"].includes("Chemically Altered")){
            countsChemically += 1;
          }
          if (listOfChampions[champion]["Species"].includes("Cyborg")){
            countsCyborg += 1;
          }
          if (listOfChampions[champion]["Species"].includes("Darkin")){
            countsDarkin += 1;
          }
          if (listOfChampions[champion]["Species"].includes("Demon")){
            countsDemon += 1;
          }
          if (listOfChampions[champion]["Species"].includes("Dragon")){
            countsDragon += 1;
          }
          if (listOfChampions[champion]["Species"].includes("God,")){
            countsGod += 1;
          }
          if (listOfChampions[champion]["Species"].includes("God-Warrior")){
            countsWarrior += 1;
          }
          if (listOfChampions[champion]["Species"].includes("Golem")){
            countsGolem+= 1;
          }
          if (listOfChampions[champion]["Species"].includes("Human")){
            countsHuman += 1;
          }
          if (listOfChampions[champion]["Species"].includes("Iceborn")){
            countsIceborn += 1;
          }
          if (listOfChampions[champion]["Species"].includes("Magically Altered")){
            countsMagically += 1;
          }
          if (listOfChampions[champion]["Species"].includes("Magicborn")){
            countsMagicborn += 1;
          }
          if (listOfChampions[champion]["Species"].includes("Revenant")){
            countsRevenant += 1;
          }
          if (listOfChampions[champion]["Species"].includes("Spirit ")){
            countsSpirit += 1;
          }
          if (listOfChampions[champion]["Species"].includes("Spiritualist")){
            countsSpiritualist += 1;
          }
          if (listOfChampions[champion]["Species"].includes("Undead")){
            countsUndead += 1;
          }
          if (listOfChampions[champion]["Species"].includes("Unknown")){
            countsUnknown += 1;
          }
          if (listOfChampions[champion]["Species"].includes("Vastayan")){
            countsVastayan += 1;
          }
          if (listOfChampions[champion]["Species"].includes("Void-Being")){
            countsVoid += 1;
          }
          if (listOfChampions[champion]["Species"].includes("Yordle")){
            countsYordle += 1;
          }
          if (listOfChampions[champion]["Species"].includes("Other species")){
            countsOther += 1;
          }

          ////////////////RESOURCE
          if (listOfChampions[champion]["Resource"].includes("Mana ")){
            countrMana += 1;
          } else if (listOfChampions[champion]["Resource"].includes("Manaless")){
            countrManaless += 1;
          } else if (listOfChampions[champion]["Resource"].includes("Energy")){
            countrEnergy += 1;
          } else if (listOfChampions[champion]["Resource"].includes("Health costs")){
            countrHealth += 1;
          } else if (listOfChampions[champion]["Resource"].includes("Fury")){
            countrFury += 1;
          } else if (listOfChampions[champion]["Resource"].includes("Rage")){
            countrRage += 1;
          } else if (listOfChampions[champion]["Resource"].includes("Other resources")){
            countrOther += 1;
          }

          ////////////////TYPE
          if (listOfChampions[champion]["RangeType"].includes("Melee")){
            counttMelee += 1;
          } else if (listOfChampions[champion]["RangeType"].includes("Range")){
            counttRange += 1;
          } else if (listOfChampions[champion]["RangeType"].includes("Mixed")){
            counttMixed += 1;
          } 

          ////////////////REGION
          if (listOfChampions[champion]["Region"].includes("Bandle City")){
            countrrBandle += 1;
          }
          if (listOfChampions[champion]["Region"].includes("Bilgewater")){
            countrrBilgewater += 1;
          }
          if (listOfChampions[champion]["Region"].includes("Camavor")){
            countrrCamavor += 1;
          }
          if (listOfChampions[champion]["Region"].includes("Demacia")){
            countrrDemacia += 1;
          }
          if (listOfChampions[champion]["Region"].includes("Freljord")){
            countrrFreljord += 1;
          }
          if (listOfChampions[champion]["Region"].includes("Icathia")){
            countrrIcathia += 1;
          }
          if (listOfChampions[champion]["Region"].includes("Ionia")){
            countrrIonia += 1;
          }
          if (listOfChampions[champion]["Region"].includes("Ixtal")){
            countrrIxtal += 1;
          }
          if (listOfChampions[champion]["Region"].includes("Noxus")){
            countrrNoxus += 1;
          }
          if (listOfChampions[champion]["Region"].includes("Piltover")){
            countrrPiltover += 1;
          }
          if (listOfChampions[champion]["Region"].includes("Shadow Isles")){
            countrrShadow += 1;
          }
          if (listOfChampions[champion]["Region"].includes("Shurima")){
            countrrShurima += 1;
          }
          if (listOfChampions[champion]["Region"].includes("Targon")){
            countrrTargon += 1;
          }
          if (listOfChampions[champion]["Region"].includes("Void ")){
            countrrVoid += 1;
          }
          if (listOfChampions[champion]["Region"].includes("Zaun")){
            countrrZaun += 1;
          }
          if (listOfChampions[champion]["Region"].includes("Runeterra")){
            countrrRuneterra += 1;
          }


          ////////////////RELEASED
          if (listOfChampions[champion]["Released"] == 2009){
            count2009 += 1;
          } else if (listOfChampions[champion]["Released"] == 2010){
            count2010 += 1;
          } else if (listOfChampions[champion]["Released"] == 2011){
            count2011 += 1;
          } else if (listOfChampions[champion]["Released"] == 2012){
            count2012 += 1;
          } else if (listOfChampions[champion]["Released"] == 2013){
            count2013 += 1;
          } else if (listOfChampions[champion]["Released"] == 2014){
            count2014 += 1;
          } else if (listOfChampions[champion]["Released"] == 2015){
            count2015 += 1;
          } else if (listOfChampions[champion]["Released"] == 2016){
            count2016 += 1;
          } else if (listOfChampions[champion]["Released"] == 2017){
            count2017 += 1;
          } else if (listOfChampions[champion]["Released"] == 2018){
            count2018 += 1;
          } else if (listOfChampions[champion]["Released"] == 2019){
            count2019 += 1;
          } else if (listOfChampions[champion]["Released"] == 2020){
            count2020 += 1;
          } else if (listOfChampions[champion]["Released"] == 2021){
            count2021 += 1;
          } else if (listOfChampions[champion]["Released"] == 2022){
            count2022 += 1;
          } else if (listOfChampions[champion]["Released"] == 2023){
            count2023 += 1;
          } else if (listOfChampions[champion]["Released"] == 2024){
            count2024 += 1;
          } else if (listOfChampions[champion]["Released"] == 2025){
            count2025 += 1;
          } else if (listOfChampions[champion]["Released"] == 2026){
            count2026 += 1;
          }
         
        } else {
          //Ellooo
        }
      }
    }
  });
  updateGender();
  updatePositions();
  updateSpecies();
  updateResource();
  updateTypes();
  updateRegions();
  updateReleasedYears();
  cartesPresent();
}

function updateGender() {
  genderList.forEach(item => {
    const value = item.count();
    item.el.textContent = `${item.name} (${value})`;
    item.el.style.color = value === 0 ? dark : light;
  });
}

function updatePositions() {
  positionList.forEach(item => {
    const value = item.count();
    item.el.textContent = `${item.name} (${value})`;
    item.el.style.color = value === 0 ? dark : light;
  });
}

function updateSpecies() {
  speciesList.forEach(s => {
    const value = s.count();

    s.el.textContent = `${s.name} (${value})`;
    s.el.style.color = value === 0 ? dark : light;
  });
}

function updateResource() {
  resourceList.forEach(item => {
    const value = item.count();
    item.el.textContent = `${item.name} (${value})`;
    item.el.style.color = value === 0 ? dark : light;
  });
}

function updateTypes() {
  typeList.forEach(t => {
    const value = t.count();

    t.el.textContent = `${t.name} (${value})`;
    t.el.style.color = value === 0 ? dark : light;
  });
}

function updateRegions() {
  regions.forEach(r => {
    const value = r.count();

    r.el.textContent = `${r.name} (${value})`;

    if (value === 0) {
      r.el.style.color = dark;
    } else {
      r.el.style.color = light;
    }
  });
}

function updateReleasedYears() {
  releasedYears.forEach(r => {
    const value = r.count();

    r.el.textContent = `${r.year} (${value})`;
    r.el.style.color = value === 0 ? dark : light;
  });
}


//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvVvvvvvvvvvvvvvvvvvvvvvvvvVvvvvvvvvvvvvvvvvvvvvvvvvVvvvvvvvvvvvvvvvv 
function toggleHighlight(event) {
  let checkbox = event.target;
  let li = checkbox.closest('li');
  
  if (checkbox.checked) {
      li.classList.add('checkboxIsChecked');
      li.classList.remove('checkboxIsNotChecked');
  } else {
    li.classList.add('checkboxIsNotChecked');
    li.classList.remove('checkboxIsChecked');
  }
}

checkBoxLeftArr.forEach(checkbox => {
  // Initialize the li class based on the checkbox state
  let li = checkbox.closest('li');
  if (checkbox.checked) {
    li.classList.add('checkboxIsChecked');
    li.classList.remove('checkboxIsNotChecked');
  } else {
    li.classList.add('checkboxIsNotChecked');
    li.classList.remove('checkboxIsChecked');
  }

  // Add event listener
  checkbox.addEventListener('change', toggleHighlight);
});

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ GAME BRAIN SYSTEM ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//

//let cartesRestantes = Object.keys(listOfChampions).length



function cartesPresent() {

  carteNone = document.querySelectorAll('.none').length;

  let cartesRestantes = cartesArr.length - carteNone;

  remain.textContent = cartesRestantes + " left";
}



function clear() {
  document.querySelectorAll(".none").forEach(function(cartes){
    cartes.classList.remove('none');
  })
}


updateCards();