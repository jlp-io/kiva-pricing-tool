import React, { Component } from 'react'
import { Forms, Dropdowns, Grid, Navbar, Jumbotron } from 'react-bootstrap'
import Bootstrap from 'react-bootstrap'
import './styles/app.css'
import TextField from './Components/TextField'
import NewLoan from './Components/NewLoan'
import Button from './Components/Button'

class App extends Component {
  render() {
	var partner_names = 
	["Fresno Community Development Financial Institution",
	"Sanergy",
	"Pana Pana",
	"Valley Economic Development Center (VEDC)",
	"African Leadership Academy",
	"EarthSpark International",
	"Barefoot Power",
	"RISE Tanzania",
	"ASI Federal Credit Union",
	"El Buen Socio",
	"VisionSpring",
	"Yayasan Sosial Bina Sejahtera",
	"Rekan Usaha Mikro Anda (Ruma)",
	"Working Solutions",
	"Opportunity Fund",
	"Accion East",
	"Grameen America",
	"Fundación León 2000",
	"Vision Fund Mexico",
	"Turame Community Finance",
	"Vitas - Palestine",
	"Kopernik",
	"iSmart Kenya",
	"Fledge",
	"Habitat for Humanity Mexico",
	"People's Forum",
	"Building Markets",
	"HOPE Congo",
	"Lumni Chile",
	"SunFarmer",
	"Micrograam",
	"Nuru International",
	"MicroEnergy Credits",
	"Belghoria Janakalyan Samity",
	"Accion San Diego",
	"Zoona - Malawi",
	"LiftFund",
	"Mozambikes",
	"Youth Business St. Vincent and the Grenadines",
	"Intersect Fund",
	"Grameen Ghana",
	"VisionFund AzerCredit",
	"Kaaba Microfinance Institution",
	"Aqroinvest Credit Union",
	"Soro Yiriwaso",
	"SEDA",
	"Mahashakti Foundation",
	"WSDS-Initiate",
	"Microcred Zimbabwe",
	"Fundación Mujer",
	"Izdiharona for Economic Development",
	"Siza Capital",
	"SEVA Microfinance Institute",
	"Microhub Financial Services (Pvt) Ltd",
	"iSchool Zambia",
	"TECNOSOL",
	"AFODENIC",
	"UIMCEC",
	"Salone Microfinance Trust (SMT)",
	"Koperasi Mitra Usaha Kecil (MUK)",
	"ACEP Cameroun",
	"Micro Start/AFD",
	"Uberis Capital",
	"Maharishi Education for Invincibility Trust",
	"Takamoto Biogas",
	"Kingsbridge Microfinance",
	"Kamworks",
	"Yayasan Rumah Energi",
	"UpEnergy",
	"Junior Achievement Kenya",
	"ACAD for Financing and Development",
	"Ghana Women Fund",
	"Proximity Designs",
	"Cooperativa de Ahorro y Crédito Microfinanzas Prisma (COOPAC MFP)",
	"South Pacific Business Development (SPBD) - Tonga",
	"Microfund for Women",
	"iDE Ghana",
	"Fundación Sartawi",
	"Agora Partnerships",
	"Strathmore University",
	"Lewa Widlife Conservancy",
	"Cooperativa de Ahorro y Crédito Mujeres Unidas (CACMU)",
	"Rent-to-Own",
	"Untu Microfinance",
	"Hand in Hand Eastern Africa",
	"Agence Communautaire pour le Financement de la Micro Entreprise (ACFIME)",
	"Thrive Microfinance",
	"Milaap",
	"Crédit Epargne Formation (CEFOR)",
	"Advans Ghana",
	"Mountain Lion Agriculture",
	"Kepler",
	"Digital Divide Data (DDD)",
	"M7 Microfinance Institution",
	"NESsT",
	"PowerGen Renewable Energy",
	"Camfed Zimbabwe",
	"Nuru Energy",
	"Al-Amal Microfinance Bank",
	"Quang Binh Women Development Fund",
	"Burn Manufacturing",
	"Elephant Energy",
	"Together Association for Development and Environment (TADE)",
	"Novica",
	"Asante Kenya Foundation",
	"Soluz Honduras",
	"Zoona",
	"Chamroeun Microfinance Limited",
	"Jibu",
	"Impact Hub",
	"Hilltribe Organics Limited",
	"Al Ibdaa Microfinance",
	"Maya",
	"National Microfinance Bank",
	"ADICLA",
	"D and E Green Enterprises",
	"Siam Organic",
	"Entrepreneurs du Monde - Sont Oo Tehtwin",
	"Asociación Chajulense de Mujeres (ACMUV)",
	"Moringa School",
	"Maya Mountain Cacao",
	"Cooperativa de Ahorro y Crédito Norandino",
	"PAC",
	"iDE Cambodia",
	"Investisseurs & Partenaires",
	"Vahatra",
	"Yunus Social Business (YSB)",
	"Emerging Cooking Solutions Zambia",
	"Gata Daku Multi-purpose Cooperative (GDMPC)",
	"CCT Credit Cooperative",
	"Negros Women for Tomorrow Foundation (NWTF)",
	"Association for Rural Development (ARD)",
	"One Acre Fund",
	"Babban Gona Farmers Organization",
	"Ecoblock International",
	"Camfed Tanzania",
	"American University of Central Asia",
	"Yellow Leaf Hammocks",
	"Fundación CREHO",
	"Jerusalem Interest-Free Microfinance Fund",
	"Kenya ECLOF",
	"ID Ghana",
	"Wedu",
	"Viogaz",
	"Kubo.financiero",
	"CAURIE Microfinance",
	"IMON International",
	"Urwego Bank",
	"Fundación ESPOIR",
	"Juhudi Kilimo",
	"SMEP Microfinance Bank",
	"UGAFODE Microfinance",
	"VisionFund Kenya",
	"Hluvuku-Adsema",
	"Patan Business and Professional Women",
	"EDAPROSPO",
	"IMPRO",
	"Apoyo Integral",
	"Hope Ukraine",
	"Paglaum Multi-Purpose Cooperative (PMPC)",
	"Alalay sa Kaunlaran (ASKI)",
	"CIDRE",
	"MAXIMA Microfinance",
	"Asociación Alternativa Para el Desarrollo Integral de las Mujeres (ADIM)",
	"Nor Horizon",
	"Yehu Microfinance Trust",
	"Hattha Kaksekar Limited (HKL)",
	"Community Economic Ventures, Inc. (CEVI)",
	"Edpyme Alternativa",
	"EDESA",
	"FAPE",
	"Asociación Arariwa",
	"Kashf Foundation",
	"Prisma Honduras",
	"Palestine for Credit & Development (FATEN)",
	"VisionFund Rwanda",
	"South Pacific Business Development (SPBD) - Samoa",
	"Hekima",
	"Tanaoba Lais Manekat Foundation (TLM)",
	"SEF International",
	"Fundación Pro Mujer",
	"Humo",
	"Al Majmoua",
	"Koret Israel Economic Development Funds (KIEDF)",
	"HOFOKAM",
	"KREDIT Microfinance Institution",
	"BRAC Uganda",
	"Esperanza International Dominican Republic",
	"Friendship Bridge",
	"Thanh Hoa Microfinance Institution",
	"Tujijenge Tanzania",
	"BRAC Pakistan",
	"Fundación Paraguaya",
	"Grounded and Holistic Approach for People's Empowerment (GHAPE)",
	"Vitas - Lebanon",
	"Priminvestnord",
	"Credo",
	"Instituto Peruano de Fomento Educativo",
	"PADECOMSM",
	"KOMAZA",
	"Kaebauk Investimentu no Finansas",
	"Impact Carbon",
	"Entrepreneurs du Monde - Energy Microfranchises",
	"Cooperativa San Jose",
	"KosInvest",
	"Fundación Mario Santo Domingo (FMSD)",
	"FUDECOSUR",
	"Fairtrasa Peru S.A.",
	"VisionFund Cambodia",
	"Interactuar",
	"Aldea Global",
	"MCE Social Capital",
	"Uncharted",
	"Sistema Biobolsa",
	"Bai Tushum Bank",
	"VisionFund Ecuador",
	"ASA Initiative",
	"MiCredito",
	"Inyenyeri",
	"EthicCapital Credit Union",
	"Fondesurco",
	"FUNDAPEC",
	"Adobe Capital - Mexico",
	"Agro & Social Fund",
	"Organizacion de Desarrollo Empresarial Femenino (ODEF)",
	"Nke-Anyi Farmers Multipurpose Cooperative Society",
	"African Entrepreneur Collective (AEC)",
	"African Solar Rise",
	"Assilassimé Solidarité",
	"Pomona Impact",
	"Camfed Zambia",
	"MicroLoan Foundation (MLF) Malawi",
	"South Pacific Business Development (SPBD) - Solomon Islands",
	"Entrepreneurs du Monde - Palmis Mikwofinans Sosyal",
	"Federación Campesina del Cauca (FCC)",
	"Fonkoze - Zafèn",
	"SEED Center Philippines",
	"CrediCampo",
	"Fundación Namaste Guatemaya",
	"Ibdaa Microfinance",
	"Socios en Salud Perú (Partners in Health)",
	"KSPPS Benteng Mikro Indonesia",
	"Solar and Energy Loan Fund (SELF)",
	"Local Alike",
	"JWS Pakistan",
	"Alivio Capital",
	"The Alliance for Artisan Enterprise at The Aspen Institute",
	"Agro Capital Management",
	"Nazava Water Filters",
	"Réseau de Micro-institutions de Croissance de Revenus (RMCR)",
	"TerraClear Development",
	"Programme d'Appui aux Initiatives de Développement Economique au Kivu (PAIDEK)",
	"MEC APROVAG",
	"Nexus For Development",
	"ERES Energía Renovable",
	"Ejido Verde Reserves",
	"Entrepreneurs du Monde - Anh Chi Em",
	"iDE Mozambique",
	"Cooperativa Agraria de Productores de Tara del Norte (CAPTN)",
	"Banco do Povo Crédito Solidario",
	"Vasham",
	"Specific Union for Farmer Women in Jordan",
	"Dr. Bronner's / Serendipalm",
	"BRAC Sierra Leone",
	"BRAC Liberia",
	"Arvand",
	"African Clean Energy (ACE)",
	"Asociación ONG Avansar",
	"Camfed Ghana",
	"SGS Soluciones Patrimoniales",
	"Smart Credit",
	"COCAFCAL"]
	var loan_themes = 
	["Agricultural Equipment",
	"Agricultural Infrastructure",
	"Agricultural Labor",
	"Agriculture",
	"Agriculture (Women)",
	"Agroforestry: Plantation Establishment",
	"Agroforesty: Plantation Maintenance",
	"Apani: General",
	"Artisan",
	"Artisan 1",
	"Asset Finance",
	"At-Risk Youth",
	"Bee Hive",
	"Bicycle",
	"Biodigester",
	"Biogas",
	"BJS: Underserved",
	"BodAfya",
	"Bridge/Income Smoothing",
	"Business Development Services",
	"Business in a Box",
	"Cacao Field Renewal",
	"Cacao Production",
	"CAMEO Partnership",
	"Chanura: General",
	"Clean Cookstove",
	"Clean Cookstove and Safe Water System for Institution",
	"Clean Cookstove for Institution",
	"Clean Energy",
	"Clean Water Delivery",
	"Clean Water Franchise",
	"Cleaner production",
	"Clients below the poverty line",
	"Cluster Enterprise Development",
	"Coffee Production",
	"Communities affected by War",
	"Community Impact Loan",
	"Conflict Zone",
	"Conflict Zone (Gaza Businesses)",
	"Conflict Zone (Gaza)",
	"Conflict Zone (Women)",
	"Control Group - Research Study",
	"Cooperative loans",
	"CPO - LKM",
	"CPO - YLPMD",
	"Detroit",
	"Diminishing Musharaka",
	"Disabled borrowers",
	"Disabled Entrepreneurs",
	"Disaster Recovery",
	"Displaced Populations",
	"Displaced Populations2",
	"Distributor Finance",
	"Distributor Finance - India",
	"Driptech",
	"Education",
	"Education - Cambodia",
	"Education - Kenya",
	"Education - Laos",
	"Education Technology",
	"End Consumer Finance",
	"Equipment Purchase",
	"Extreme Poverty",
	"Female headed households",
	"Field Renewal",
	"Finance to Cooperative",
	"First/Second Chance",
	"Fishing",
	"Flexible loan conditions",
	"Flexible loan with reduced interest",
	"Franchise Package",
	"Franchisee Finance",
	"Full Tuition",
	"FUSAI",
	"FUSAI Green",
	"FUSAI Water and Sanitation",
	"Future Greens Samsthe",
	"Future Micro-grid",
	"General",
	"General (Women)",
	"Graduating Agriculture Loan",
	"Gram Utthan: Sanitation",
	"Gramalaya Microfin Foundation",
	"Green",
	"Green Murabaha",
	"Guardian: Water and Sanitation",
	"Hai Duong Women's Union",
	"Haiti",
	"Health",
	"High Education",
	"Higher Education",
	"Higher Education (Women)",
	"Higher Education for Vulnerable Groups",
	"Higher Education Murabaha",
	"HIV/AIDS",
	"Home Energy Conservation",
	"Honey Buying Agent",
	"Housing Improvement",
	"Human Capital Contracts",
	"Hydrologic",
	"ICT",
	"Ijarah",
	"Imagen Dental",
	"In-Kind TA Support",
	"India",
	"Indigenous Communities",
	"Intercropping",
	"Inventory",
	"Irrigation Equipment",
	"Islamic Product",
	"Joala",
	"Kiva City D.C.",
	"Kiva City DC",
	"Kiva City LA",
	"Kiva City Little Rock",
	"Kiva City Newark",
	"Kubo Experiment - No credit history",
	"Lao Cai Women's Union",
	"Laptop",
	"Laptop (Refugee)",
	"Livestock and Fishing",
	"Low income students",
	"Mahashakti: Education",
	"Mahashakti: Underserved",
	"MASS",
	"MESP",
	"Micro-enterprise",
	"Micro-grid",
	"Microenterprise (Group)",
	"Microforestry",
	"Microfranchise",
	"Mobile Transactions",
	"Mobile transactions - capital growth loan.",
	"Mobile transactions - electronic float advance",
	"Mortgage",
	"Motorbike",
	"Mudaraba",
	"Murabaha",
	"Murabaha Youth",
	"Musawama",
	"Musharaka",
	"Nageshwara Trust",
	"New Orleans",
	"Ninh Binh Women's Union",
	"Organic Agriculture",
	"Organic Conversion",
	"Organic Fertilizer",
	"Panama",
	"Partial Tuition",
	"Passion Fruit Production",
	"PAT",
	"Prayas: General",
	"Prayas: Water and Sanitation",
	"Primary/Secondary Education",
	"Primary/Secondary Education (Large)",
	"Profit-linked debt",
	"Promesa",
	"Property Rights",
	"Qard Hassan",
	"Recycled material activities",
	"Redemption",
	"Reduced Interest Rate",
	"Retailer Finance",
	"Rural Conflict Zone",
	"Rural Inclusion",
	"Sabuj Sangha",
	"Safe Water System for Institution",
	"Safe Water Vendor",
	"Sahaja Samrudha",
	"Salam",
	"Salaried Workers",
	"Sanitation",
	"School",
	"School Finance",
	"Seasonal Worker",
	"Senior Citizens",
	"Shikhar: General",
	"Shikhar: Green",
	"Silvopasture",
	"Single mothers",
	"Single mothers entrepreneurs",
	"Small Business Investment Loan",
	"Small Enterprise",
	"SME",
	"SME (Tanzania)",
	"SME Clean Energy Conversion",
	"SMGBK: General",
	"SMGBK: Green",
	"Solar electric fence",
	"Solar Home Systems",
	"Solar Lamps",
	"Solar refrigerator",
	"Solar water pump",
	"Solidarity Group",
	"Startup",
	"Startup (Women)",
	"Startup (Youth)",
	"Startup Murabaha",
	"Subsistence Agriculture",
	"Subsistence Agriculture and Solar Lanterns",
	"Subsistence Agriculture and Solar Lanterns-Tanzania",
	"Sustainable farming activities",
	"Sustainable Solar Service Package",
	"Swayamshree: General",
	"Swayamshree: Green",
	"Tool Box Loan",
	"Transformative Finance",
	"UBER Drivers",
	"Unbanked",
	"Underserved",
	"Underserved (large)",
	"Underserved (non-Lebanese)",
	"Underserved (Women)",
	"Value Chain",
	"Veterans",
	"Vidya Poshak",
	"Village Bank",
	"Vocational High School",
	"Vocational Training",
	"Vulnerable Populations",
	"Vulnerable Populations (Iraqi)",
	"Vulnerable Populations (Palestinian)",
	"Vulnerable Populations (Physical Disabilities)",
	"Vulnerable Populations (Refugees)",
	"Vulnerable Populations (Refugees)2",
	"Vulnerable Populations (Refugees)3",
	"Vulnerable Populations (Syrian)",
	"Vulnerable Populations (Syrian)2",
	"Vulnerable Populations (Syrian)3",
	"Vulnerable Populations2",
	"Vulnerable Populations3",
	"Vulnerable Women",
	"Water",
	"Water and Sanitation",
	"Water Enterprise",
	"Weighing Scale",
	"Wheelchairs",
	"WLIFT",
	"WLIFT-Conflict Zone",
	"WLIFT-Youth",
	"Women Entrepreneurs",
	"Women in agriculture",
	"Women micro-business",
	"Women Without Poverty",
	"Women's Union",
	"Youth",
	"Youth (Women)",
	"Youth Agriculture",
	"Youth Entrepreneurship",
	"Youth Volunteer's Union",
	"Zafèn"]	
   return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Hi</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron className="banner">
          <Grid>
		<div class = "col-lg-9">
		<NewLoan label = "mfi" list = {partner_names} hint = "Select MFI Partner" />
		<NewLoan label = "loan" list = {loan_themes} hint = "Select Loan Type" />
            	<TextField text = "fname" hint="Loan Product" typeVal="String" limit={100} />
		<Button name = "Continue" url = "form1" disable="false" />
		</div>
          </Grid>
        </Jumbotron>
      </div>
    )
  }
}

export default App
