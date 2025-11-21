export const quizData = {
  title: 'Which Biobank Are You?',
  questions: [
    {
      question: 'Your ideal weekend involves:',
      answers: [
        {
          text: 'Meeting friends for dinner at a nice restaurant that you made a reservation for two weeks prior',
          biobank: 'ukb',
        },
        {
          text: 'Networking at a virtual happy hour for early-career researchers, making connections and pitching collaboration ideas',
          biobank: 'allofus',
        },
        { text: 'Sleeping at a reasonable hour', biobank: 'gnomad' },
        { text: 'Reading a novel while drinking Finnish vodka', biobank: 'finngen' },
        { text: 'Attending a celebration in a community you work with', biobank: 'geneshealth' },
        {
          text: 'Meal prepping with labeled containings, laying out outfits, and reviewing your calendar',
          biobank: 'bbj',
        },
      ],
    },
    {
      question: "When someone's GWAS doesn't replicate, you:",
      answers: [
        { text: "Say 'well the sample size might have been...'", biobank: 'ukb' },
        { text: "Ask 'did you check other ancestries?'", biobank: 'allofus' },
        { text: 'Mumble something about allele frequencies', biobank: 'gnomad' },
        { text: 'Smile knowingly about founder effects', biobank: 'finngen' },
        { text: 'Check if they included South Asians', biobank: 'geneshealth' },
        { text: 'Wonder if they had proper annual follow-up data', biobank: 'bbj' },
      ],
    },
    {
      question: 'Your greatest fear is:',
      answers: [
        { text: 'Running out of statistical power', biobank: 'ukb' },
        { text: 'Perpetuating health disparities', biobank: 'allofus' },
        { text: 'Someone misinterpreting a benign variant as pathogenic', biobank: 'gnomad' },
        { text: 'Your favorite variant existing in non-Finnish populations', biobank: 'finngen' },
        { text: 'Your community losing trust in researchers', biobank: 'geneshealth' },
        { text: 'Unorganized data', biobank: 'bbj' },
      ],
    },
    {
      question: 'How do you prefer to collaborate?',
      answers: [
        { text: 'In person at scheduled meetings with clear agendas', biobank: 'ukb' },
        { text: 'Async on Slack, quick video calls when needed', biobank: 'allofus' },
        { text: 'Solo mostly, but happy to share results when you are done', biobank: 'gnomad' },
        { text: 'With a tight-knit team you have known for years', biobank: 'finngen' },
        { text: 'Through community partnerships and co-creation', biobank: 'geneshealth' },
        { text: 'Systematically, with detailed protocols everyone follows', biobank: 'bbj' },
      ],
    },
    {
      question: 'What is your approach to new projects?',
      answers: [
        { text: 'Go big or go home', biobank: 'ukb' },
        { text: 'Move fast, scale quickly, make an impact', biobank: 'allofus' },
        { text: 'Start simple, use what is already available', biobank: 'gnomad' },
        { text: 'Build it carefully with people I trust', biobank: 'finngen' },
        { text: 'Make sure the community is involved from day one', biobank: 'geneshealth' },
        { text: 'Plan every step meticulously before starting', biobank: 'bbj' },
      ],
    },
    {
      question: 'What are you more likely to binge?',
      answers: [
        { text: 'Whatever is trending on streaming platforms', biobank: 'ukb' },
        { text: 'Documentaries about success and innovation', biobank: 'allofus' },
        { text: 'Sitcoms', biobank: 'gnomad' },
        { text: 'Historical dramas or Nordic noir', biobank: 'finngen' },
        { text: 'Bollywood or South Asian cinema', biobank: 'geneshealth' },
        { text: 'Medical dramas or detective shows', biobank: 'bbj' },
      ],
    },
  ],
  results: {
    ukb: {
      name: 'UK Biobank',
      emoji: '📊',
      color: 'border-blue-500',
      url: 'https://www.ukbiobank.ac.uk/',
      image: '/blog_images/alen-karso-acF_r6v_8Ec-unsplash.jpg',
      imageCaption:
        'Big Ben clock tower by <a href="https://unsplash.com/@alen_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alen Karso</a> on <a href="https://unsplash.com/photos/a-large-clock-tower-towering-over-a-city-acF_r6v_8Ec?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
      description:
        "You're a data maximalist. <a href='https://doi.org/10.1038/s41586-018-0579-z' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>Half a million participants?</a> That's your baseline. <a href='https://www.ukbiobank.ac.uk/about-our-data/' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>Whole genome sequencing, imaging data, longitudinal phenotypes, linked health records, wearables data, AND proteomics?</a> Now we're talking.You don't understand why anyone would use a smaller biobank when UK Biobank exists with MORE of everything. You've memorized your application number and casually drop 'on the <a href='https://www.ukbiobank.ac.uk/use-our-data/research-analysis-platform/' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>RAP</a>' into conversations. Your work setup has three monitors and you thrive in color-coded spreadsheets. You believe in one simple truth: bigger sample size, better science. When someone mentions a biobank with 50K participants you physically wince, but you are also secretly worried your findings won't replicate in other ancestries and hope no one asks",
    },
    allofus: {
      name: 'All of Us',
      emoji: '🌈',
      color: 'border-purple-500',
      url: 'https://allofus.nih.gov/',
      image: '/blog_images/duy-pham-Cecb0_8Hx-o-unsplash.jpg',
      imageCaption:
        'People holding shoulders sitting on a wall by <a href="https://unsplash.com/@miinyuii?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Duy Pham</a> on <a href="https://unsplash.com/photos/people-holding-shoulders-sitting-on-wall-Cecb0_8Hx-o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
      description:
        "From your home office with a fresh cup of coffee in hand, you're all about the biggest, <a href='https://nihrecord.nih.gov/2024/03/15/all-us-data-identifies-275-million-new-genetic-variants' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>most diverse biobank<a> in the world and not shy about it. Your pronouns are in your email signature, right after your impressive title. You attend virtual webinars about community engagement because you know that scale and representation are your competitive advantages. You have strong convictions about including underrepresented populations in research because it makes your data better and your science unbeatable. You're constantly hustling to outpace everyone else, believing that whoever reaches the most people wins. You're hungry for impact, driven by metrics, and you don't just want a seat at the table, you want to be placed at the head of it. Your ideal collaborator is someone who matches your intensity, shares your vision for personalized genomic medicine for everyone, and is ready to work twice as hard to make it happen first. You're results-driven, relentlessly ambitious, and you play to win.",
    },
    gnomad: {
      name: 'gnomAD',
      emoji: '🧬',
      color: 'border-green-500',
      url: 'https://gnomad.broadinstitute.org/',
      image: '/blog_images/annie-spratt-CYYb6IHdeW8-unsplash.jpg',
      imageCaption:
        'Woman resting stick on her shoulder by <a href="https://unsplash.com/@anniespratt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Annie Spratt</a> on <a href="https://unsplash.com/photos/standing-woman-wearing-white-denim-shorts-holding-stick-CYYb6IHdeW8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
      description:
        "You love a 'no strings attached' relationship in genomics. No applications, no committees, no problem. Pure, beautiful aggregate data available 24/7 brings you great joy. You might be: a grad student with $0 in your research account, between institutional affiliations, or simply wise enough to appreciate that the best things in genomics are free. Why apply to a biobank and wait 6 months when the allele frequency is RIGHT THERE? Your desktop has 47 browser tabs open and you're not ashamed. You're low-maintenance in life and in science because why make things complicated when they don't need to be? Efficiency is your love language.",
    },
    finngen: {
      name: 'FinnGen',
      emoji: '🇫🇮',
      color: 'border-cyan-500',
      url: 'https://www.finngen.fi/en',
      image: '/blog_images/robert-tjalondo-OJ2S6di8xDo-unsplash.jpg',
      imageCaption:
        'Barking huskies in Finnish Lapland by <a href="https://unsplash.com/@tjalondo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Robert Tjalondo</a> on <a href="https://unsplash.com/photos/people-riding-on-sled-on-snow-covered-ground-during-daytime-OJ2S6di8xDo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
      description:
        "You LIVE for the fact that variants drift to higher frequencies in isolated populations, turning ultra-rare variants that would need millions of samples to detect into actually-analyzable 5% Minor Allele Frequency goldmines. You've given the lecture about how Finland's settlement bottleneck ~4000 years ago, plus subsequent regional bottlenecks, <a href='https://www.finngen.fi/en/population-genetic-history' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>enriched specific functional variants that would be invisible in cosmopolitan populations</a>. You geek out over how reduced haplotype diversity makes fine-mapping actually possible.  You can explain why the same GWAS that needs 500K Europeans only needs 200K Finns for equivalent power on Finnish-enriched variants. You are smug when your results don't replicate in other populations because they CAN'T—your variants literally don't exist elsewhere at detectable frequencies. You're finding novel biology through population history and honestly? It's brilliant. You might be learning Finnish.",
    },
    geneshealth: {
      name: 'Genes & Health',
      emoji: '🤝',
      color: 'border-orange-500',
      url: 'https://www.genesandhealth.org/',
      image: '/blog_images/tahmeed-ahmad-CkNQiMFKNqM-unsplash.jpg',
      imageCaption:
        'First mosque in London, 1926 by <a href="https://unsplash.com/@tahmeeda97?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tahmeed Ahmad</a> on <a href="https://unsplash.com/photos/a-large-white-building-with-a-green-dome-CkNQiMFKNqM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
      description:
        "You believe representation in genomics is both scientifically essential and morally necessary. You know that British Bangladeshi and British Pakistani people have the highest rates of <a href='https://www.diabetes.org.uk/about-us/news-and-views/type-2-diabetes-test-may-be-inaccurate-thousands-south-asian-people' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>diabetes in the UK</a> and you've made it your mission to do something about it. You geek out over South Asian-specific variants, understand the nuances of autozygosity in your analyses, and probably follow the recall-by-genotype studies closely. You value genuine community partnerships and research on health equity over high-impact publications.",
    },
    bbj: {
      name: 'BioBank Japan',
      emoji: '🗾',
      color: 'border-red-500',
      url: 'https://biobankjp.org/english/index.html',
      image: '/blog_images/nla.obj-190803963-1.jpg',
      imageCaption:
        'Kunikazu Odake, Skeleton, c.1880 – 1920, woodblock print, courtesy of <a href="https://nla.gov.au/nla.obj-190803963/view" target="_blank" rel="noopener noreferrer">National Library of Australia</a>',
      description:
        "A type A personality, you don't mess around. You probably color-code your lab notebook and give off Marie Kondo energy. Everything has a label, processes for processes. You're all about datasets with <a href='https://doi.org/10.1016/j.je.2016.12.005' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:text-blue-800 underline'>enriched sets of patients</a> because studying healthy people feels like reading the introduction when you want the climax. You crave the resolution that comes from deep-diving into disease architecture, understanding exactly what's broken and why. You probably binge medical dramas and whodunit mysteries, always trying to solve the puzzle before the reveal. You value clear communication, thorough documentation, and a structured approach to research.",
    },
    multianalyst: {
      name: 'The Multi-Biobank Meta-Analyst',
      emoji: '🔬',
      color: 'border-purple-500',
      image: '/blog_images/nadin-mario-lenAl8NXOr4-unsplash.jpg',
      imageCaption:
        'Stack of stones on brown sand by <a href="https://unsplash.com/@nadinmario?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nadin Mario</a> on <a href="https://unsplash.com/photos/stack-of-stones-on-brown-sand-lenAl8NXOr4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
      description:
        "You can't be confined to just one biobank because you see the value in all of them. You're either: (1) A meta-analyst who harmonizes data across cohorts like a conductor leading an orchestra, (2) A methods developer who needs diverse populations to prove your tool works everywhere, or (3) Someone who genuinely believes that the best science comes from integrating multiple data sources. You have browser tabs open to UK Biobank, All of Us, gnomAD, FinnGen, Genes & Health, AND BioBank Japan simultaneously. Your References folder is organized by cohort. You can explain why a variant looks pathogenic in one population but benign in another, and you think that's fascinating rather than frustrating. You dream in forest plots and genuinely enjoy reading supplementary methods sections about cohort recruitment strategies. You're either the most thorough scientist in the room or you just can't make decisions—and honestly, it's probably both. Your superpower is seeing the bigger picture, but your kryptonite is deciding where to start.",
    },
  },
};
