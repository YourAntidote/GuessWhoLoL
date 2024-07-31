let listOfChampions = {
  "Aatrox": {
    Name: "Aatrox",
    Gender : "Male",
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
    Position: "Middle, Top",
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
    Position: "Middle, Top",
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
    Region: "Runeterra",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_alistar.jpg",
  },
  "Amumu": {
    Name: "Amumu",
    Gender: "Male",
    Position: "Jungle, Support",
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
    Position: "Middle, Support",
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
    Position: "Bottom, Support",
    Species : "Human, Iceborn",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Freljord",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_ashe.jpg",
  },
  "AurelionSol": {
    Name: "Aurelion Sol",
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
    Position: "Top, Middle",
    Species: "Vastayan, Magicborn",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Freljord, Ionia",
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
    Position: "Middle",
    Species : "Human, Magically Altered",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Noxus, Shurima",
    Released: 2010,
    img: "./champions/RiotX_ChampionList_cassiopeia.jpg",
  },
  "ChoGath": {
    Name: "Cho'Gath",
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
    Position: "Middle",
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
    Name: "Dr. Mundo",
    Gender: "Male",
    Position: "Top",
    Species : "Chemically Altered, Human",
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
    Position: "Jungle",
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
    Position: "Middle, Support",
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
    Species : "Human",
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
    Position: "Top",
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
    Position: "Middle, Support",
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
    Position: "Mid, Support",
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
    Position: "Middle, Top",
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
    Species : "Chemically Altered, Human",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Zaun",
    Released: 2013,
    img: "./champions/RiotX_ChampionList_jinx.jpg",
  },
  "KSante": {
    Name: "K'Sante",
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
    Position: "Top",
    Species : "Yordle",
    Resource: "Energy",
    RangeType: "Ranged",
    Region: "Ionia",
    Released: 2010,
    img: "./champions/RiotX_ChampionList_kennen.jpg",
  },
  "KhaZix": {
    Name: "Kha'Zix",
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
    Gender: "Other genders",
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
    img: "./champions/RiotX_ChampionList_leblanc.jpg",
  },
  "LeeSin": {
    Name: "Lee Sin",
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
    Position: "Jungle, Support",
    Species : "Spirit ",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Shadow Isles",
    Released: 2011,
    img: "./champions/RiotX_ChampionList_maokai.jpg",
  },
  "MasterYi": {
    Name: "Master Yi",
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
  "MissFortune": {
    Name: "Miss Fortune",
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
    Position: "Support",
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
    Position: "Middle",
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
    Position: "Middle, Support",
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
    Position: "Jungle, Top",
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
    Position: "Jungle, Top",
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
    Position: "Middle",
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
    Species : "God-Warrior",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Shurima",
    Released: 2009,
    img: "./champions/RiotX_ChampionList_rammus.jpg",
  },
  "RekSai": {
    Name: "Rek'Sai",
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
    Species : "Human, Magically Altered, Magicborn",
    Resource: "Mana ",
    RangeType: "Melee",
    Region: "Noxus",
    Released: 2020,
    img: "./champions/RiotX_ChampionList_Rell.jpg",
  },
  "RenataGlasc": {
    Name: "Renata Glasc",
    Gender: "Female",
    Position: "Support",
    Species : "Chemically Altered, Human",
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
    Position: "Middle, Top",
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
    Position: "Middle, Top",
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
    Position: "Jungle",
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
    Position: "Top",
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
    Species : "Chemically Altered, Human",
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
    Position: "Mid, Bottom",
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
    Position: "Middle, Support",
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
    Position: "Middle",
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
    Name: "Tahm Kench",
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
    Position: "Jungle, Middle",
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
    Position: "Jungle, Top",
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
    Species : "Chemically Altered, Cyborg, Human",
    Resource: "Mana ",
    RangeType: "Ranged",
    Region: "Noxus, Zaun",
    Released: 2010,
    img: "./champions/urgot.jpg",
  },
  "Varus": {
    Name: "Varus",
    Gender: "Male",
    Position: "Bottom, Middle",
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
    Position: "Middle",
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
    Species : "Chemically Altered, Cyborg, Human",
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
    Position: "Middle",
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
    Species : "Unknown",
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
let checkBoxArr = document.querySelectorAll('.checkbox');
let orderOfCards = Object.keys(listOfChampions);
let lastDelete;
let deletedCardArr = [];
let LiArr = document.querySelectorAll('li');

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
  h1_name.style.textShadow = "0px 0px 6px rgba(0, 0, 0, 1)";
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
  genderColor.style.color = '#f0e6d2';
  positionColor.style.color = '#f0e6d2';
  positionColor2.style.color = '#f0e6d2';
  speciesColor.style.color = '#f0e6d2';
  resourceColor.style.color = '#f0e6d2';
  rangeColor.style.color = '#f0e6d2';
  regionColor.style.color = '#f0e6d2';
  regionColor2.style.color = '#f0e6d2';
  releasedColor.style.color = '#f0e6d2';
  genderColor.textContent = "Gender : ";
  positionColor.textContent = "Position : ";
  positionColor2.textContent = "Positions : ";
  speciesColor.textContent = "Species : ";
  resourceColor.textContent = "Resource : ";
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
  flip_card.className = "flip-card " + champion;
  flip_card_inner.className = "flip-card-inner";
  flip_card_front.className = "flip-card-front";
  img.alt = listOfChampions[champion]["Name"];
  img.src = listOfChampions[champion]["img"];
  flip_card_back.className = "flip-card-back";
  h1_name.textContent = listOfChampions[champion]["Name"].toUpperCase();


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
    listOfChampions[champion]["Species"] = listOfChampions[champion]["Species"].replace('Other species', '');
    p_species.innerHTML += listOfChampions[champion]["Species"];
  } else {
    p_species.innerHTML += listOfChampions[champion]["Species"];
  }
  if (listOfChampions[champion]["Resource"].includes("Other resources")){
    listOfChampions[champion]["Resource"] = listOfChampions[champion]["Resource"].replace(', Other resources', '');
    p_resource.innerHTML += listOfChampions[champion]["Resource"];
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
      }, 2000); // 2 secondes
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
});
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  UNDO ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//

//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv RESET  vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv//
let cartesArr = document.querySelectorAll('.flip-card');

reset.addEventListener('click', function(){
  cartesArr.forEach(function(cartesnone){
    if (cartesnone.classList.contains('none')){
      cartesnone.classList.remove('none');
      cartesPresent();
    } 
  })
  checkBoxArr.forEach(function (checkbox){
    checkbox.checked = true;
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
});



//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ RESET  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//


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



checkBoxArr.forEach(function(boite) {
  //boite.addEventListener('mousedown', handleMouseDown);
  //boite.addEventListener('mouseup', handleMouseUp);
  //boite.addEventListener('mouseleave', handleMouseUp);
  boite.addEventListener('change', function(){
    if (boite.checked == false){
      currentBoxValue = boite.value;
      //console.log(currentBoxValue);
      //console.log(boite);
      for (const cartes in listOfChampions) {
        championElement = listOfChampions[cartes];
        //console.log("cartes: " + cartes);
        //console.log(listOfChampions[cartes]);
        //console.log(listOfChampions[cartes]['Gender'].includes(currentBoxValue));
        //console.log(listOfChampions[cartes]['Position'].includes(currentBoxValue));
        //console.log(listOfChampions[cartes]['Species'].includes(currentBoxValue));
        //console.log(listOfChampions[cartes]['Resource'].includes(currentBoxValue));
        //console.log(listOfChampions[cartes]['RangeType'].includes(currentBoxValue));
        //console.log(listOfChampions[cartes]['Region'].includes(currentBoxValue));

        if (championElement['Gender'].includes(currentBoxValue) ||
          championElement['Position'].includes(currentBoxValue) ||
          championElement['Species'].includes(currentBoxValue) ||
          championElement['Resource'].includes(currentBoxValue) ||
          championElement['RangeType'].includes(currentBoxValue) ||
          championElement['Region'].includes(currentBoxValue) ||
          championElement['Released'].toString().includes(currentBoxValue)
        ) {
          //console.log("cartes: " + cartes);
          //console.log(listOfChampions[cartes]);
          //console.log(listOfChampions[cartes]['Gender'].includes(currentBoxValue));
          //console.log("cartes: " + cartes);
          championASupprime = document.querySelector("." + cartes);
          //console.log("championASupprime: " + championASupprime);
          championASupprime.classList.add('none');
          cartesPresent();
        } else {
          cartesPresent();
        }
      }
    }
    else if (boite.checked == true){
      currentBoxValue = boite.value;
      //console.log(currentBoxValue);
      //console.log(boite);
      for (const cartes in listOfChampions) {
        championElement = listOfChampions[cartes];
        //console.log("cartes: " + cartes);
        //console.log(listOfChampions[cartes]);
        //console.log(listOfChampions[cartes]['Gender'].includes(currentBoxValue));
        //console.log(listOfChampions[cartes]['Position'].includes(currentBoxValue));
        //console.log(listOfChampions[cartes]['Species'].includes(currentBoxValue));
        //console.log(listOfChampions[cartes]['Resource'].includes(currentBoxValue));
        //console.log(listOfChampions[cartes]['RangeType'].includes(currentBoxValue));
        //console.log(listOfChampions[cartes]['Region'].includes(currentBoxValue));

        if (championElement['Gender'].includes(currentBoxValue) ||
          championElement['Position'].includes(currentBoxValue) ||
          championElement['Species'].includes(currentBoxValue) ||
          championElement['Resource'].includes(currentBoxValue) ||
          championElement['RangeType'].includes(currentBoxValue) ||
          championElement['Region'].includes(currentBoxValue) ||
          championElement['Released'].toString().includes(currentBoxValue)
        ) {
          //console.log("cartes: " + cartes);
          championASupprime = document.querySelector("." + cartes);
          //console.log("championASupprime: " + championASupprime);
          championASupprime.classList.remove('none');
          cartesPresent();
        } else {
          cartesPresent();
        }
      }
    }
  });
});

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

checkBoxArr.forEach(checkbox => {
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
let remain = document.getElementById('remain');
let carteNone;
//let cartesRestantes = Object.keys(listOfChampions).length

function cartesPresent() {

  carteNone = document.querySelectorAll('.none').length;

  let cartesRestantes = cartesArr.length - carteNone;

  remain.textContent = cartesRestantes + " left";
}

cartesPresent();