"use client"

import { motion } from "framer-motion"
import { ArrowRight, Users2, Globe2, BookOpen, Target, MapPin, Calendar } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useLanguage } from "@/context/LanguageContext"
import { Modal } from "@/components/Modal"

const coreComponents = [
  {
    icon: BookOpen,
    titleKey: "capacity_building",
    descriptionKey: "capacity_building_description"
  },
  {
    icon: Users2,
    titleKey: "mentorship_faculty",
    descriptionKey: "mentorship_faculty_description"
  },
  {
    icon: Globe2,
    titleKey: "global_representation",
    descriptionKey: "global_representation_description"
  },
  {
    icon: Target,
    titleKey: "community_project",
    descriptionKey: "community_project_description"
  }
]

interface Fellow {
  name: string
  age: number
  country: string
  location: string
  image: string
  shortBio: string
  fullBio: string
}

const fellows: Fellow[] = [
  // Chad Fellows
  {
    name: "Zara Yasmine Hassan Ahmat Djefil",
    age: 24,
    country: "Chad",
    location: "Massakory, Hadjer-Lamis",
    image: "/images/fellows/chad/zara-yasmine.jpeg",
    shortBio: "Water resources engineer and climate justice advocate. Vice President of GEDAAF/HL, Editorial Lead at ISEC CHAD.",
    fullBio: "Zara Yasmine Hassan Ahmat Djefil is a dynamic water resources engineer and climate justice advocate from Massakory, in Chad's Hadjer-Lamis region, one of the communities at the heart of the Lake Chad crisis. With lived experience of the region's escalating climate challenges, Zara is passionate about advancing water justice, gender equity, and community resilience.\n\nShe serves as Vice President of GEDAAF/HL, where she leads grassroots efforts to empower women in climate-affected areas. As Editorial Lead at ISEC CHAD, she amplifies youth voices through media and advocacy, and recently coordinated LCOY Chad 2024, bringing together over 200 young people to shape national climate policy.\n\nZara holds a degree in hydraulic engineering, with academic research focused on optimizing irrigation systems to improve agricultural productivity and reduce water loss in the Lake Chad Basin. She is an active contributor to regional and global youth platforms including YOUNGO and the Pan-African Climate and Gender networks and has represented Sahelian youth at high-level dialogues across Africa.\n\nThrough the Lake Chad Climate Justice Fellowship, Zara seeks to deepen her impact by co-creating inclusive, youth-led solutions that address the interlinked challenges of climate change, water scarcity, and gender-based vulnerability in the Lake Chad region."
  },
  {
    name: "Idriss Adoum Idriss",
    age: 33,
    country: "Chad",
    location: "Mao, Kanem",
    image: "/images/fellows/chad/IDRISS.jpg",
    shortBio: "Climate justice advocate and youth mobilizer. Country Coordinator for PACJA, Communication Officer for ACSEA.",
    fullBio: "Idriss Adoum Idriss is a climate justice advocate and youth mobilizer from Mao, in Chad's Kanem region, an area on the frontlines of climate-induced migration, drought, and rising tensions between pastoralists and farmers. With firsthand experience of the socio-environmental pressures caused by the shrinking Lake Chad, Idriss is committed to building peaceful, climate-resilient communities.\n\nAs Country Coordinator for the Pan African Climate Justice Alliance (PACJA) in Chad and Communication Officer for the African Coalition for Sustainable Energy and Access (ACSEA), Idriss plays a critical role in shaping national discourse on climate justice, adaptation, and sustainable energy access. Through REJECA, the youth climate network he coordinates, he led innovative initiatives such as PASTOR HELP a digital conflict-prevention project using livestock GPS tracking and GreenSahel TreeTech, which deploys recycled water-retention technology to sustain tree planting in arid zones.\n\nIdriss brings extensive experience from global climate diplomacy spaces, having participated in COP26, COP27, and COP28, and is preparing for COP29 in Baku. He has also contributed to regional forums including Africa Climate Week, AMCEN, and the Youth Biodiversity Summit. His advocacy work bridges grassroots realities with global climate governance, particularly in the context of adaptation finance and youth engagement.\n\nA fellow of the Nairobi Summer School on Climate Justice, and a leading voice at the Youth Forum on Adaptation Finance in Africa, Idriss is also engaged with initiatives promoting the green economy and biodiversity across Africa and beyond.\n\nThrough the Lake Chad Climate Justice Fellowship, he aims to deepen cross-border collaboration, amplify the voices of climate-affected communities, and co-develop innovative solutions that promote peace, sustainability, and youth-led climate resilience in the Lake Chad Basin."
  },
  {
    name: "Ahmat Mahamoud Hissein",
    age: 30,
    country: "Chad", 
    location: "Bol",
    image: "/images/fellows/chad/ahmat.jpg",
    shortBio: "Community development practitioner. Partnership Manager at AJAPE, graduate of Nairobi Summer School on Climate Justice.",
    fullBio: "Ahmat Mahamoud Hissein is a dedicated climate advocate and community development practitioner from Bol, a Lake Chad community deeply affected by environmental degradation, displacement, and rising insecurity. Witnessing firsthand the collapse of traditional livelihoods like fishing, farming, and pastoralism, Ahmat has devoted his career to advancing resilience and economic empowerment in vulnerable communities.\n\nHe currently serves as Partnership and Public Relations Manager for AJAPE (Youth Association for the Evaluation and Protection of the Environment), where he leads initiatives that support displaced women and youth in developing income-generating activities to reduce pressure on natural resources. His previous work with ANADER and the Chadian Ministry of Environment involved mobilizing rural communities around reforestation, land restoration, and sustainable agriculture practices.\n\nAhmat is a graduate of the Nairobi Summer School on Climate Justice, organized by the Pan African Climate Justice Alliance (PACJA), where he deepened his expertise in climate adaptation, loss and damage, and climate finance. He has represented Chadian youth at major policy spaces, including the African Ministerial Conference on the Environment (AMCEN) in Dakar and PACJA's continental congress in Addis Ababa.\n\nRooted in local realities and equipped with regional experience, Ahmat joins the Lake Chad Climate Justice Fellowship to co-create sustainable, youth-led solutions that address climate injustice, restore lost livelihoods, and foster community resilience across the Lake Chad Basin."
  },
  {
    name: "Fanne Zara Ahmat Saleh",
    age: 22,
    country: "Chad",
    location: "N'Djamena",
    image: "/images/fellows/chad/fanne-zara.jpg",
    shortBio: "Environmental advocate and youth leader. Member of Action Girls Chad, winner of Women's Empowerment Program.",
    fullBio: "Fanne Zara Ahmat Saleh is a rising environmental advocate and youth leader from N'Djamena, Chad, deeply committed to advancing climate justice and gender equity in the Lake Chad region. As a member of Action Girls Chad, she is actively engaged in mobilizing young women for environmental protection, climate education, and community-based resilience initiatives.\n\nDriven by a passion for advocacy and innovation, Fanne organizes and participates in tree-planting campaigns and grassroots environmental actions. Her work focuses on amplifying the voices of girls and young women affected by the intersecting impacts of climate change and gender-based violence. In 2024, she was selected as a winner of the Women's Empowerment Program, where she spent three months in the United States gaining hands-on leadership experience and cross-cultural exposure.\n\nFanne recently participated in the Lake Chad Basin Regional Conference in N'Djamena, where she contributed to youth dialogues on transboundary environmental cooperation. Through her work, she continues to raise awareness and foster collective responsibility for protecting the fragile Lake Chad ecosystem.\n\nFanne seeks to strengthen her leadership, expand her advocacy toolkit, and contribute meaningfully to restoring the Lake Chad Basin while empowering girls and women as agents of change through her participation in the Lake Chad Climate Justice Fellowship."
  },
  {
    name: "Mariam Moussa Ali Abba",
    age: 25,
    country: "Chad",
    location: "N'Djamena",
    image: "/images/fellows/chad/mariam.jpg",
    shortBio: "Health science graduate passionate about climate justice. Executive member of Youth Volunteers Chad Act4SDG.",
    fullBio: "Mariam Moussa Ali Abba is a 25-year-old graduate of the Higher Institute of Health Science and Technology at King Faisal University in Chad (Class of 2022). She is deeply passionate about climate justice and has spent over three years actively involved in environmental awareness and advocacy.\n\nAs a member of the executive office of the Association of Youth Volunteers Chad Act4SDG, Mariam has contributed significantly to sustainable development initiatives across Chad. In this role, she has participated in numerous awareness campaigns, training workshops, and educational programs focused on climate change and environmental sustainability.\n\nShe has also taken part in the first and second editions of the 'Environmental Café' program, including an insightful visit to Zakouma National Park, which enhanced her understanding of biodiversity and ecological balance.\n\nMariam's core interests include combating desertification, protecting Lake Chad, and empowering communities to tackle climate challenges. Through this fellowship, she aspires to gain practical skills and contribute meaningfully to climate resilience and sustainable development in the Lake Chad region."
  },
  {
    name: "Chiguer Bachir Ali",
    age: 0,
    country: "Chad",
    location: "N'Djamena",
    image: "/images/fellows/chad/chiguer.JPG",
    shortBio: "Mechanical engineer and Programs Manager at Youth Volunteers Chad Act4SDG. Organized Environmental Café at Zakouma National Park.",
    fullBio: "Chiguer Bachir Ali is a young Chadian climate advocate with a background in mechanical engineering and a strong commitment to climate justice in the Lake Chad region. He holds a professional Bachelor's degree in Mechanical Engineering from the Polytechnic University of Mongo, following his secondary education at Lycée Intelligence Sarhoise in Sarh.\n\nSince 2022, Chiguer has served as Programs and Projects Manager at Youth Volunteers Chad Act4SDG, where he leads environmental awareness campaigns and community-based initiatives. He chaired the organizing committee of the second edition of the 'Café Environment' event held at Zakouma National Park, and played a key role in the Regional Dialogue on Lake Chad at the Ministry of Foreign Affairs of Chad. He has also coordinated numerous awareness and tree-planting campaigns in schools and universities.\n\nHis key interests include sustainable resource management, water access, climate-resilient agriculture, and environmental education. Chiguer envisions a generation of empowered youth leading efforts to strengthen climate resilience throughout the Lake Chad Basin."
  },
  // Cameroon Fellows
  {
    name: "Bansi Emmanuel Neba",
    age: 30,
    country: "Cameroon",
    location: "Yagoua, Far North",
    image: "/images/fellows/cameroon/bansi.jpg",
    shortBio: "Environmental engineer and advocate. Volunteer with Ozone Friendly People, trained over 200 farmers in sustainable practices.",
    fullBio: "Bansi Emmanuel Neba is a passionate climate advocate and community development practitioner from Yagoua, in Cameroon's Far North Region—a climate-vulnerable area where shrinking water levels in the Logone River, linked to the Lake Chad crisis, have disrupted agriculture, fishing, and food security. With over half a million internally displaced people and refugees hosted in the region, Bansi's work focuses on climate resilience and resource sustainability for both host and displaced populations.\n\nAs a volunteer with Ozone Friendly People, Bansi has trained over 200 farmers in sustainable agricultural practices, including water conservation and the cultivation of drought-resistant crops. His work has not only improved yields but also empowered community members to become local changemakers. Through La Liberté Arts Group, he also leads innovative climate storytelling and environmental education campaigns, using spoken word and music to promote biodiversity conservation especially among children and women.\n\nBansi has supported wildlife protection efforts such as pangolin conservation in the Campo Ma'an Forest, and raised awareness among artisanal miners in Eastern Cameroon about environmental risks. He has also participated in regional workshops focused on zero-waste initiatives and green accountability.\n\nWith a lived understanding of the climate crisis and its impact on agriculture and displacement, Bansi joins the Lake Chad Climate Justice Fellowship to deepen his leadership, connect with a pan-African network of changemakers, and co-create inclusive, community-driven solutions that strengthen climate resilience across the Lake Chad Basin."
  },
  {
    name: "Munang Othniel Bungo",
    age: 28,
    country: "Cameroon",
    location: "Nkwen-Bamenda, North West",
    image: "/images/fellows/cameroon/munang.jpg",
    shortBio: "Youth climate advocate and policy influencer. Organized LCOY Cameroon 2023 & 2024, contributed to national climate policy.",
    fullBio: "Munang Othniel Bungo is a youth climate advocate and policy influencer from Nkwen-Bamenda in Cameroon's North West Region. Raised in the Okombere community, where the advancing Sahara and disappearing forests have devastated water sources, agriculture, and livelihoods, Othniel's commitment to climate justice is rooted in personal experience. As local youth migrate in search of opportunity, he has chosen to stay and lead.\n\nOthniel has played key roles in shaping youth climate participation in Cameroon. He was instrumental in organizing LCOY Cameroon 2023 and 2024, where he championed inclusive youth engagement in national climate policy. In 2023, he contributed to advocacy for dedicated budget allocations for youth participation in international climate spaces, and in 2024, he led the drafting of the Cameroon Youth Climate Policy Statement, advocating for youth inclusion in NDCs and National Adaptation Plans.\n\nHe is actively involved with the Reconciliation and Development Association (RADA) and has participated in key regional forums such as the Youth Forum on Adaptation Finance, the Cameroon Climate Policy Dialogue, and safety training programs for environmental activists. He is also set to take part in COP29, where he will contribute to global climate negotiations as a youth representative.\n\nOthniel joins the Lake Chad Climate Justice Fellowship with a clear mission: to restore degraded forests, safeguard water sources, and mobilize his community toward ecological regeneration. For him, the Lake Chad crisis is not just a policy issue, it is a deeply personal fight for survival, dignity, and the right to a livable future."
  },
  {
    name: "Fanne Yaya",
    age: 23,
    country: "Cameroon",
    location: "Kousséri, Far North",
    image: "/images/fellows/cameroon/fanne-yaya.png",
    shortBio: "Climate and gender justice advocate. Coordinator of ADECOPA-CAM, multilingual community mobilizer.",
    fullBio: "Fanne Yaya is a climate and gender justice advocate from Kousséri, in Cameroon's Far North Region, an area profoundly impacted by the Lake Chad crisis. Her community faces a daily reality of environmental degradation, food insecurity, and displacement driven by both conflict and climate change. As water resources dwindle and arable land shrinks, the most vulnerable, particularly women, youth, and children—bear the brunt of the cascading challenges.\n\nFanne serves as the Coordinator of ADECOPA-CAM (Action pour le Développement et la Cohabitation Pacifique au Cameroun), where she leads community engagement initiatives that address gender-based violence (GBV) linked to climate-induced displacement. Her work includes intergenerational dialogues, women's empowerment training, and advocacy for sustainable livelihoods in flood-affected and resource-scarce areas.\n\nFluent in both French and English, Fanne also speaks a range of local Lake Chad languages including Arabic, Kanuri, Mousgoum, Fulfulde, and Kotoko. This multilingual capacity has been crucial in mobilizing diverse communities, amplifying local voices, and fostering inclusive, culturally sensitive interventions.\n\nIn 2023, she participated in the UNFPA Regional Youth Leadership Workshop in Accra, deepening her understanding of the intersections between GBV, human rights, and climate crisis. This experience enriched her capacity to connect grassroots realities with regional and global advocacy efforts.\n\nFanne joins the Lake Chad Climate Justice Fellowship with a clear vision: to co-create lasting, inclusive solutions to the Lake Chad crisis that center youth leadership, gender equity, and community resilience. She is determined to elevate the voices of those too often excluded from decision-making and drive transformative climate action from the ground up."
  },
  {
    name: "Mitin Sandrine Yaah",
    age: 26,
    country: "Cameroon",
    location: "Bamenda, North-West",
    image: "/images/fellows/cameroon/mitin.jpg",
    shortBio: "Climate justice advocate. Focal Person for LCOY Cameroon 2024, Co-founder of Green Space Academy.",
    fullBio: "Mitin Sandrine Yaah is a climate justice and gender equity advocate from Bamenda in Cameroon's conflict-affected North-West Region. Her work is deeply rooted in the lived experiences of communities in the Logone-et-Chari, Mayo-Sava, and Mayo-Tsanaga divisions, where the shrinking Lake Chad has triggered widespread water scarcity, food insecurity, and displacement especially among farmers, fishers, and pastoralists whose livelihoods depend on the lake's fragile ecosystem.\n\nSandrine currently serves as the Focal Person for the Local Conference of Youth (LCOY) Cameroon 2024, where she led a coalition of 12 youth-led organizations to convene over 100 young people from all ten regions of Cameroon. Together, they crafted the Cameroon Youth Statement on Climate Change 2024, following extensive consultations with more than 1,000 youth. Through multi-stakeholder dialogues, she has helped elevate youth perspectives in shaping national and global climate policies especially around justice, resilience, and adaptation.\n\nShe is also the Co-founder and Program Manager at Green Space Academy, Country Focal Point for the African Youth Initiative on Climate Change, and 2025 CEO's Youth Advisor at the Global Center on Adaptation. Her affiliations include YOUNGO, the Cameroon Youth Climate Council, and the Aspire Leaders Program 2024.\n\nIn 2023, Sandrine was a panelist at the Youth Forum on Adaptation Finance in Africa, where she advocated for the removal of rigid thematic restrictions and the promotion of locally led adaptation solutions tailored to the distinct needs of different communities. Her leadership journey also includes the Moremi Initiative for Women's Leadership in Africa, Climate Chance 2023, UPG Sustainability Leadership, and the ongoing AWF-Wall Youth Policy Fellowship by the African Wildlife Foundation and UNEP.\n\nSandrine joins the Lake Chad Climate Justice Fellowship with a powerful mission: to bridge technical expertise with grassroots realities, amplify unheard voices, and advocate for people-centered policies that reflect the true needs of Lake Chad's most vulnerable communities. For her, climate justice is not just policy it is personal, urgent, and an opportunity to transform pain into progress."
  },
  {
    name: "Awat Bertrand Abanyi",
    age: 30,
    country: "Cameroon",
    location: "Kousséri, Logone-et-Chari",
    image: "/images/fellows/cameroon/nkada.jpeg",
    shortBio: "Climate activist and Founder of Green Globe Organisation. Planted over 10,000 trees, trained 3,700 youth Climate Rescuers.",
    fullBio: "Awat Bertrand Abanyi is a climate activist and community resilience advocate from Kousséri, Logone-et-Chari Division in Cameroon's Far North Region—one of the most climate-affected and insecure parts of the Lake Chad Basin. In a region grappling with shrinking water resources, dwindling fish stocks, and displacement driven by both ecological collapse and armed conflict, Bertrand works at the intersection of climate change and insecurity to champion inclusive, sustainable solutions for the most vulnerable, particularly youth and women.\n\nHe is the Founder of Green Globe Organisation, a youth-led initiative promoting environmental sustainability, climate education, and eco-entrepreneurship. Under his leadership, the organization has planted over 10,000 trees, established 12 school-based environmental clubs, and trained 3,700 youth as Climate Rescuers—fostering a new generation of climate-conscious leaders.\n\nBertrand is also the Focal Point of the Cameroon Climate Justice Movement (CCJM) and an active member of NESTCAM (Network of Environmental Stakeholders in Cameroon). His work has earned him recognition at major youth platforms, including the New Generation Leaders Summit in Dubai, where he was sponsored after winning the SDG Innovate Cameroon Award, and the Hult Prize National Competition, which will take him to London for advanced social impact training.\n\nIn the Congo Basin Forest Conclave, he co-developed a regional action plan for climate justice, and his innovative Consultative Intricacies Preference (CIP) model has received accolades within Cameroon's civil society space for its potential to guide grassroots climate adaptation strategies.\n\nAs a Lake Chad Climate Justice Fellow, Bertrand seeks to amplify local action and contribute his experience and tools toward co-creating resilient ecosystems and empowered communities across the Basin. His mission is clear: from Kousséri to the world, climate justice must be youth-led and locally driven."
  },
  // Niger Fellows
  {
    name: "Ahmed Baida Saley Harouna",
    age: 32,
    country: "Niger",
    location: "Diffa",
    image: "/images/fellows/niger/Ahmed.jpg",
    shortBio: "Youth climate advocate and peacebuilder. Co-founded CSDAC, trains youth in solar-powered irrigation systems.",
    fullBio: "Ahmed Baida Saley Harouna is a youth climate advocate and peacebuilder from Diffa, southeastern Niger, a region deeply impacted by the Boko Haram insurgency, mass displacement, and escalating climate stress. Situated at the crossroads of Nigeria and Chad, Diffa hosts thousands of refugees and returnees, creating immense pressure on already scarce food, water, and energy resources. The intersection of armed conflict and climate variability in this region continues to fuel community tensions and fragility.\n\nIn response, Ahmed leads grassroots action focused on climate resilience, youth empowerment, and peacebuilding. He co-founded the Climate and Sustainable Development Action Club (CSDAC), which promotes the SDGs through digital advocacy and multilingual campaigns in French and local languages (Kanuri, Fulani, and Hausa). His project was selected among 14 grantees for its innovative approach to SDG localization.\n\nAhmed also participated in the Youth Challenge Fund 2020 with support from Plan International West and Central Africa, training 30 youth particularly girls in solar-powered irrigation systems to tackle unemployment and climate vulnerability. He actively contributes to the Youth Association for Peace and Social Cohesion in the Lake Chad Basin (AJE-PAC) and participated in the International Symposium on Peace and Sustainable Development in Diffa.\n\nFluent in both French and English, Ahmed aspires to deepen collaboration with youth across the region to co-create climate adaptation strategies and nurture a culture of peace and ecological justice in the Lake Chad Basin."
  },
  {
    name: "Garba Ide Moumouni",
    age: 26,
    country: "Niger",
    location: "Mokko, Dosso",
    image: "/images/fellows/niger/Momo.jpg",
    shortBio: "Climate researcher and Director of Programs at Initiative pour l'Arbre. Focuses on biochar and agroecological solutions.",
    fullBio: "Garba Ide Moumouni, a young climate advocate from Mokko, Dosso Region, Niger, coordinates the Tree Initiative, leading resilience-building projects in communities indirectly affected by the Lake Chad crisis. Although his hometown is not on the lake's shores, it faces internal migration and food insecurity linked to the broader crisis.\n\nWith a strong academic background in climate resilience, his thesis focuses on transforming organic waste into biochar to support degraded areas like Diffa. Garba has led several agroecological initiatives, including composting, school gardens, tree planting, and awareness campaigns on climate change and clean cooking.\n\nHe has received a McKnight Foundation research grant, trained with Climate Life Movement, and participated in Oxfam's climate finance workshops. He represented Niger at the World Bank Global Youth Summit and is active in developing Niger's national agroecology strategy.\n\nGarba seeks to join the Lake Chad Climate Justice Youth Fellowship to deepen his understanding of the region's challenges and collaborate with fellow youth in driving just and inclusive climate solutions."
  },
  {
    name: "Nana Firdaoussi Adamou",
    age: 24,
    country: "Niger",
    location: "Koura, Diffa",
    image: "/images/fellows/niger/nana.PNG",
    shortBio: "Climate advocate and gender champion. Gender Emissary with Femmes, Actions et Développement.",
    fullBio: "Nana Firdaoussi Adamou is a passionate climate advocate and gender champion raised in Koura, Diffa region of Niger who is deeply connected to the Lake Chad crisis. Growing up amid environmental degradation, displacement, and insecurity, she has committed her work to protecting vulnerable groups especially women and youth affected by these compounded challenges.\n\nFluent in French, English, and Hausa, Nana actively leads community awareness initiatives on gender equity and resilience as a Gender Emissary with Femmes, Actions et Développement. She authored a policy brief on gender and internal displacement in the Sahel with the Gorée Institute and is currently completing a Master's thesis on the rights of displaced children in Niger.\n\nNana has participated in key regional initiatives, including the 2024 Climathon in Niamey and the Young People's Parliamentary Session on Water Governance in Burkina Faso. Her work blends advocacy, academic research, and community engagement to address the climate-security-gender nexus.\n\nThrough the Lake Chad Climate Justice Youth Fellowship, she aims to co-create locally informed solutions, deepen her expertise, and design a climate resilience project that empowers displaced and marginalized groups across the Lake Chad Basin."
  },
  {
    name: "Sakina Mamane Bawa",
    age: 28,
    country: "Niger",
    location: "Niamey",
    image: "/images/fellows/niger/mamane.jpg",
    shortBio: "Climate and peace advocate. Chair of Environment Committee at Niger's National Youth Council, Vice President of COACPS.",
    fullBio: "Sakina Mamane Bawa is a passionate climate and peace advocate from Niger's Niamey Region, actively working to address the intertwined challenges of climate change, insecurity, and conflict in the Lake Chad Basin particularly in the Diffa region. The area faces severe climate impacts, compounded by inter-ethnic tensions and the ongoing threat of Boko Haram, which disrupts access to vital resources and community livelihoods.\n\nAs Chair of the Environment and Natural Resources Committee within Niger's National Youth Council, Sakina led a UNICEF-funded initiative to build the adaptive capacity of rural youth. The project involved conducting community-based assessments and developing tailored action plans to address climate-related challenges.\n\nSakina brings robust international experience, having represented Niger at major global forums including the UN Water Conference in New York, COP27 in Egypt, COP28 in Dubai, and the 7th Academy of Young Experts on Climate, Peace, and Security in Kenya. She currently serves as Vice President of the Coalition of African Organizations on Climate, Peace, and Security (COACPS), advancing regional dialogue and collaboration.\n\nShe views the Lake Chad Climate Justice Youth Fellowship as a strategic opportunity to deepen her expertise in climate-resilient project management and engage with fellow young leaders and experts tackling the nexus of climate, peace, and development. Through this fellowship, Sakina hopes to amplify her coalition's work while contributing to youth-led climate action in the Lake Chad region."
  },
  {
    name: "Ali Oumarou Abdoulaye",
    age: 25,
    country: "Niger",
    location: "Diffa",
    image: "/images/fellows/niger/Ali.jpg",
    shortBio: "Youth leader and environmental restoration advocate. Green Soldiers alumnus, Great Green Wall Agency ambassador.",
    fullBio: "Ali Oumarou Abdoulaye, a dedicated youth leader from Diffa, Niger, is deeply engaged in climate justice and environmental restoration in the Sahel region. Growing up in a region plagued by insecurity and displacement due to ongoing conflict, Ali has witnessed firsthand how these challenges hinder youth engagement in cultural, sports, and climate-related activities.\n\nAs an alumnus of the Green Soldiers initiative and ambassador of the Great Green Wall Agency, Ali has led impactful projects such as the reforestation of a former gold mining site demonstrating his commitment to ecological restoration and sustainable development. He is also an active member of the Niger Scouts Association.\n\nFluent in French and several local languages, Ali has participated in numerous climate forums and trainings focused on environmental advocacy and resilience-building.\n\nHis participation in the Lake Chad Climate Justice Youth Fellowship is driven by a desire to strengthen his advocacy, project management, and communication skills. He aims to empower local communities especially youth and women through nature-based solutions and contribute meaningfully to regional and global efforts for climate justice in the Lake Chad Basin."
  },
  // Nigeria Fellows
  {
    name: "Mangong Bongbunri Berinyuy",
    age: 34,
    country: "Nigeria",
    location: "Borno State",
    image: "/images/fellows/nigeria/bongbunri.jpeg",
    shortBio: "Peacebuilder and health equity advocate. Founder of African Women Initiative for Empowerment and Peacebuilding.",
    fullBio: "Mangong Bongbunri Berinyuy is a dynamic peacebuilder and climate justice advocate working at the intersection of environmental sustainability, health equity, and conflict transformation in the Lake Chad Basin. With roots in both Nigeria and Cameroon, she brings a unique cross-border perspective to addressing the multi-layered crises facing Borno State one of the regions most affected by climate-induced displacement, armed conflict, and humanitarian fragility.\n\nIn communities like Bama, Monguno, and Kukawa, where shrinking water bodies have devastated livelihoods and fueled insurgency, Berinyuy has led impactful initiatives bridging policy and grassroots action. Her work includes peace education, economic reintegration training, and healthcare outreach tailored for internally displaced populations. She has championed breast and cervical cancer awareness among women, promoted access to clean water through WASH campaigns, and led hygiene sensitization programs to curb disease outbreaks in vulnerable settlements.\n\nFluent in English and French, Berinyuy has a robust portfolio of training in Disarmament, Demobilization, and Reintegration (DDR), Security Sector Reform, International Humanitarian Law, mental health in conflict zones, and gender perspectives in peacekeeping—acquired through institutions such as KAIPTC Ghana, POTI, UNESCO, and the U.S. Department of State's YALI Network.\n\nAs the founder of the African Women Initiative for Empowerment and Peacebuilding, she continues to amplify youth and women's voices in climate discourse, promoting integrated responses to insecurity, environmental degradation, and socio-economic exclusion.\n\nBerinyuy's motivation for joining the Lake Chad Climate Justice Youth Fellowship stems from her deep commitment to driving youth-led solutions that are conflict-sensitive, health-inclusive, and environmentally just. She envisions a future where displaced communities are not just recipients of aid but co-creators of sustainable change."
  },
  {
    name: "Msen Nabo",
    age: 33,
    country: "Nigeria",
    location: "Nigeria",
    image: "/images/fellows/nigeria/msen.jpg",
    shortBio: "Climate communicator at Connected Development. Lost family to climate-related conflict, 12,000+ LinkedIn followers.",
    fullBio: "Msen Nabo is a passionate climate communicator and Digital Media Associate at Connected Development (CODE), Nigeria.\n\nWith a strong background in climate-focused digital advocacy, Msen has led campaigns like the Interfaith Dialogue for Climate Change, which engages religious leaders to spread climate education through sermons reaching deep into rural and underserved communities. She has also trained community-based organizations and media practitioners in Cross River State under the Community Media Collaboration for Climate Justice Project supported by Oxfam, equipping them with tools to amplify local climate issues through radio and social media.\n\nHer motivation is deeply personal having lost six family members in a farmer-herder clash rooted in climate-related migration pressures. Joining the Lake Chad Climate Justice Youth Fellowship presents an opportunity for her to deepen her understanding of climate-insecurity links, learn from other advocates across the region, and share her impactful work.\n\nWith a growing LinkedIn audience of over 12,000 followers, Msen is poised to further amplify the fellowship's goals and inspire more voices to join the climate justice movement."
  },
  {
    name: "Iliya Muhammad Makinta",
    age: 29,
    country: "Nigeria",
    location: "Damaturu, Yobe State",
    image: "/images/fellows/nigeria/illya.jpg",
    shortBio: "Youth leader from conflict-affected area. Climate Accountability Intern at Yankari Game Reserve, serves with CACPE.",
    fullBio: "Iliya Muhammad Makinta is a youth leader and climate justice advocate from Damaturu, Yobe State, an area deeply affected by the Boko Haram insurgency and the environmental crisis of Lake Chad. As displaced communities fled to Lake Chad's shores in search of safety, the lake's already fragile ecosystem became overwhelmed, contributing to dwindling water resources and growing insecurity across the Timbuktu Triangle.\n\nWith experience as a Climate Accountability Intern at Yankari Game Reserve, Iliya played a pivotal role in bridging trust between local communities and conservation authorities. Through campaigns and a 'Catch Them Young' initiative, he educated youth on the value of ecotourism and inclusive environmental management. He has also received capacity-building training from the FAO and the Wildlife Conservation Society.\n\nIliya participated in the GLF Africa 2022 Digital Conference and currently serves with the Civil Alliance for Climate Protection and Education (CACPE).\n\nHis motivation for joining the Lake Chad Climate Justice Youth Fellowship stems from a commitment to turning lived experience into leadership. He hopes to strengthen his advocacy skills, co-create climate solutions, and champion a resilient and just future for the Lake Chad basin through collaboration and community-driven action."
  },
  {
    name: "Shola Rafiat Sule",
    age: 32,
    country: "Nigeria",
    location: "Biu, Borno State",
    image: "/images/fellows/nigeria/sule.jpg",
    shortBio: "Climate justice advocate from refugee-hosting area. Founder of SAFE Foundation, SDG Cohort 6 Advocacy Program participant.",
    fullBio: "Shola Rafiat Sule is a climate justice advocate from Biu, Borno State an area transformed into a refuge for displaced persons fleeing conflict from Baga, Chibok, and Maiduguri. This influx has stretched local resources, driven up living costs, and intensified insecurity. Climate change has worsened food insecurity in the region, with erratic rainfall and flooding such as the 2024 disaster in Maiduguri displacing thousands and straining infrastructure across northeastern Nigeria.\n\nFluent in English and French, Shola has volunteered with Christian Aid as a data collector, assessing food security among vulnerable households, and with the Initiative for Education and Development (IDEE) as a communications officer and SDG advocate, raising awareness on education, clean water, and sanitation.\n\nA participant in the SDG Cohort 6 Advocacy Program, she is committed to grassroots climate action.\n\nThrough the Lake Chad Climate Justice Youth Fellowship, Shola seeks to amplify community voices, promote resilience, and collaborate with peers to co-create sustainable, locally relevant solutions for the Lake Chad region."
  }
]

export default function Fellowship() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [selectedFellow, setSelectedFellow] = useState<Fellow | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string>("All");

  useEffect(() => {
    setMounted(true);
  }, []);

  const openFellowModal = (fellow: Fellow) => {
    setSelectedFellow(fellow);
    setIsModalOpen(true);
  };

  const closeFellowModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedFellow(null), 300);
  };

  const countries = ["All", "Chad", "Cameroon", "Niger", "Nigeria"];
  const filteredFellows = selectedCountry === "All" 
    ? fellows 
    : fellows.filter(fellow => fellow.country === selectedCountry);

  return (
    <main className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/LakeChadPhotos/lake1.png"
            alt="Lake Chad Region"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-white">
                {mounted ? t('lake_chad_fellowship_title') : 'Lake Chad Climate Justice Youth Fellowship'}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 leading-relaxed">
                {mounted ? t('lake_chad_fellowship_description') : 'A transformative 24-month fellowship empowering young African leaders to address climate justice and environmental challenges in the Lake Chad region.'}
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {[
                  { labelKey: "duration", valueKey: "months_24" },
                  { labelKey: "fellows", valueKey: "youth_leaders_20" },
                  { labelKey: "focus", valueKey: "lake_chad_basin" },
                  { labelKey: "countries", valueKey: "four_nations" }
                ].map((stat) => (
                  <div key={stat.labelKey} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/20">
                    <div className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2">
                      {mounted ? t(stat.valueKey) : stat.valueKey}
                    </div>
                    <div className="text-xs md:text-sm text-white/70">
                      {mounted ? t(stat.labelKey) : stat.labelKey}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Background Section with Image Grid */}
      <section className="py-12 md:py-24 relative bg-gradient-to-b from-green-50/50 to-white dark:from-green-950/30 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4 md:space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-400">
                {mounted ? t('background') : 'Background'}
              </h2>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {mounted ? t('lake_chad_background_p1') : 'The Lake Chad region faces severe challenges stemming from climate change, including a 90% reduction in the lake\'s size, leading to desertification, resource scarcity, and the collapse of traditional livelihoods such as agriculture and fishing. These environmental impacts have heightened social tensions, fueled insecurity, and displaced communities, leaving women and girls particularly vulnerable.'}
              </p>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {mounted ? t('lake_chad_background_p2') : 'Youth in the region, though disproportionately affected, are underrepresented in climate action due to barriers like limited resources, inadequate skills, and lack of access to advocacy platforms.'}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 md:gap-4"
            >
              {[
                '/images/LakeChadPhotos/lake2.png',
                '/images/ClimateConvofold/ClimateConvo1.jpeg',
                '/images/LakeChadPhotos/lake3.png',
                '/images/ClimateConvofold/ClimateConvo8.jpeg'
              ].map((src, index) => (
                <div 
                  key={src} 
                  className={`relative h-32 md:h-48 ${
                    index === 1 ? 'mt-6 md:mt-12' : ''
                  } ${
                    index === 2 ? '-mt-6 md:-mt-12' : ''
                  }`}
                >
                  <Image
                    src={src}
                    alt="Lake Chad Region"
                    fill
                    className="object-cover rounded-lg shadow-xl"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Components with Visual Enhancement */}
      <section id="components" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ClimateConvofold/ClimateConvo1.jpeg"
            alt="Background"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              {mounted ? t('core_components') : 'Core Components'}
            </h2>
            <p className="text-xl text-foreground/80">
              {mounted ? t('core_components_description') : 'Our comprehensive program is designed to equip fellows with the skills, networks, and resources needed for impact.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreComponents.map((component, index) => (
              <motion.div
                key={component.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                  <component.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {mounted ? t(component.titleKey) : component.titleKey}
                </h3>
                <p className="text-foreground/70">
                  {mounted ? t(component.descriptionKey) : component.descriptionKey}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fellows Section */}
      <section id="fellows" className="py-24 bg-gradient-to-br from-green-50 to-white dark:from-green-950/30 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              2025 Fellowship Cohort
            </h2>
            <p className="text-xl text-foreground/80 mb-8">
              Meet the 20 exceptional youth leaders from Chad, Cameroon, Niger, and Nigeria who are driving climate justice and resilience in the Lake Chad Basin.
            </p>
            
            {/* Country Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {countries.map((country) => (
                <button
                  key={country}
                  onClick={() => setSelectedCountry(country)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    selectedCountry === country
                      ? 'bg-green-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-foreground/70 hover:bg-green-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {country} {country !== "All" && `(${fellows.filter(f => f.country === country).length})`}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Fellows Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFellows.map((fellow, index) => (
              <motion.div
                key={fellow.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => openFellowModal(fellow)}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="relative h-64 bg-gradient-to-b from-green-100 to-green-50 dark:from-green-900/30 dark:to-green-800/20">
                  <Image
                    src={fellow.image}
                    alt={fellow.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2 text-white/90 text-sm mb-1">
                      <MapPin className="w-3 h-3" />
                      <span>{fellow.location}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 line-clamp-1">{fellow.name}</h3>
                  {fellow.age > 0 && (
                    <p className="text-sm text-foreground/60 mb-2">Age: {fellow.age}</p>
                  )}
                  <p className="text-sm text-foreground/70 line-clamp-3">{fellow.shortBio}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-full">
                      {fellow.country}
                    </span>
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                      Read more →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fellow Modal */}
        <Modal isOpen={isModalOpen} onClose={closeFellowModal} className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {selectedFellow && (
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                    <Image
                      src={selectedFellow.image}
                      alt={selectedFellow.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-foreground/70">
                      <MapPin className="w-4 h-4" />
                      <span>{selectedFellow.location}</span>
                    </div>
                    {selectedFellow.age > 0 && (
                      <div className="flex items-center gap-2 text-foreground/70">
                        <Calendar className="w-4 h-4" />
                        <span>Age: {selectedFellow.age}</span>
                      </div>
                    )}
                    <div className="pt-2">
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm">
                        {selectedFellow.country}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{selectedFellow.name}</h2>
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    {selectedFellow.fullBio.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 text-foreground/80 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <button
                onClick={closeFellowModal}
                className="mt-6 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </Modal>
      </section>

      {/* Application Process with Timeline Visual */}
      <section id="apply" className="py-24 bg-gradient-to-br from-green-50 to-white dark:from-green-950/30 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              {mounted ? t('application_process') : 'Application Process'}
            </h2>
            <p className="text-xl text-foreground/80">
              {mounted ? t('application_process_description') : 'Join our inaugural cohort of climate leaders through our comprehensive selection process.'}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Eligibility Criteria */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-12"
            >
              <h3 className="text-2xl font-bold mb-6 text-green-600 dark:text-green-400">Eligibility Criteria</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-1 mr-3">
                    <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                  </div>
                  <div>
                    <strong className="block mb-1">Age:</strong>
                    <p className="text-foreground/70">Must be between 18 and 35 years old at the time of application.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-1 mr-3">
                    <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                  </div>
                  <div>
                    <strong className="block mb-1">Location:</strong>
                    <p className="text-foreground/70">Open to candidates from the Lake Chad region (Chad, Nigeria, Cameroon, Niger).</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-1 mr-3">
                    <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                  </div>
                  <div>
                    <strong className="block mb-1">Commitment to Climate Action:</strong>
                    <p className="text-foreground/70">Demonstrated passion or experience in climate justice, advocacy, or environmental sustainability.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-1 mr-3">
                    <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                  </div>
                  <div>
                    <strong className="block mb-1">Availability:</strong>
                    <p className="text-foreground/70">Must commit to the full 24-month fellowship duration and all program activities.</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Selection Process Steps */}
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Application Submission",
                  description: "Complete the online application including personal information, statement of purpose (300-500 words), and CV highlighting relevant experience."
                },
                {
                  step: "2",
                  title: "Initial Screening",
                  description: "Applications are evaluated based on eligibility criteria, relevance of experience, and innovation of proposed solutions."
                },
                {
                  step: "3",
                  title: "Interview Round",
                  description: "Selected candidates participate in virtual interviews to assess communication skills and commitment to climate justice."
                },
                {
                  step: "4",
                  title: "Final Selection",
                  description: "20 fellows are chosen ensuring diversity in gender, experience, and geographic representation."
                }
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 items-start bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                >
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-green-600 dark:text-green-400">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-foreground/70">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScIXcYhmgtj-35tquKbSERPWgFuBts5-0akuuqcpYXKEIGszw/viewform"
                className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Challenges with Image Overlay */}
      <section id="challenges" className="py-24 relative">
        <div className="absolute inset-0">
          <Image
            src="/images/LakeChadPhotos/lake4.png"
            alt="Lake Chad Challenges"
            fill
            className="object-cover brightness-50 blur-sm"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Key Challenges Addressed
            </h2>
            <p className="text-xl text-white">
              Our fellowship focuses on addressing critical environmental and social challenges in the Lake Chad region.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Environmental Degradation",
                description: "Addressing desertification and the 90% reduction in Lake Chad's size through innovative conservation approaches."
              },
              {
                title: "Resource Scarcity",
                description: "Developing sustainable solutions for water access and agricultural resilience in affected communities."
              },
              {
                title: "Social Impact",
                description: "Tackling displacement, gender-based vulnerabilities, and community resilience through climate justice initiatives."
              }
            ].map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">{challenge.title}</h3>
                <p className="text-foreground/70">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 md:py-24 bg-green-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ClimateConvofold/ClimateConvo6.jpeg"
            alt="Call to Action Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">Join the Movement</h2>
            <p className="text-base md:text-xl text-white/80 mb-6 md:mb-8">
              Be part of the solution. Apply now to become a Climate Justice Youth Fellow.
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScIXcYhmgtj-35tquKbSERPWgFuBts5-0akuuqcpYXKEIGszw/viewform"
              className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium text-green-900 bg-white hover:bg-green-50 rounded-lg transition-colors shadow-lg"
            >
              Apply Now
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 