export interface Article {
  title: string;
  date: string;
  tags: string[];
  language: "en" | "de";
  externalUrl: string;
  publication?: string;
  isBook?: boolean;
}

export const articles: Article[] = [
  {
    title:
      "Rich Messages, Richer Experiences: Monetizing Chatbots on RCS and WhatsApp",
    date: "2026-02-12",
    externalUrl:
      "https://www.twilio.com/en-us/blog/developers/monetizing-chatbots-rcs-whatsapp-stripe",
    tags: ["RCS", "WhatsApp", "Chatbots", "Monetization", "Stripe"],
    publication: "Twilio Blog",
    language: "en",
  },
  {
    title:
      "OpenAI Realtime API bietet günstigeres Mini-Modell für Echtzeitkommunikation",
    date: "2026-02-10",
    externalUrl:
      "https://www.heise.de/hintergrund/OpenAI-Realtime-API-Was-sich-im-Jahr-seit-der-Beta-getan-hat-11162400.html",
    tags: ["OpenAI", "AI", "Realtime API", "Communication"],
    publication: "heise",
    language: "de",
  },
  {
    title: "SAP UI5 and SAP Fiori: Frameworks for Enterprise Developers",
    date: "2023-07-01",
    tags: ["SAP", "UI5", "Fiori", "Enterprise", "Book"],
    externalUrl:
      "https://www.amazon.de/-/en/SAP-Frameworks-Enterprise-Developers-Practical/dp/148429534X",
    publication: "Apress",
    language: "en",
    isBook: true,
  },
  {
    title: "SMS war gestern: Wie RCS das Messaging revolutioniert",
    date: "2025-07-29",
    tags: ["RCS", "Messaging", "Messaging"],
    externalUrl:
      "https://www.heise.de/hintergrund/SMS-war-gestern-Wie-RCS-das-Messaging-revolutioniert-10502013.html",
    publication: "heise",
    language: "de",
  },
  {
    title: "OpenAI Realtime API: Echtzeit-Unterhaltungen mit Sprachmodellen",
    date: "2025-01-28",
    tags: ["OpenAI", "AI", "Realtime API", "Voice"],
    externalUrl:
      "https://www.heise.de/hintergrund/OpenAI-Realtime-API-Echtzeit-Unterhaltungen-mit-Sprachmodellen-10252457.html",
    publication: "heise",
    language: "de",
  },
  {
    title: "How Next.js Empowers Developers Through Its Island Architecture",
    date: "2024-07-09",
    tags: ["Next.js", "React", "Architecture", "Web Development"],
    externalUrl:
      "https://www.heise.de/hintergrund/How-Next-js-Empowers-Developers-Through-Its-Island-Architecture-9787650.html",
    publication: "heise",
    language: "en",
  },
  {
    title: "Getting Started with Fundamental Library Styles in 2023",
    date: "2023-07-14",
    tags: ["SAP", "UI5", "Fundamental Library", "CSS"],
    externalUrl:
      "https://community.sap.com/t5/application-development-and-automation-blog-posts/getting-started-with-fundamental-library-styles-in-2023/ba-p/13553264",
    publication: "SAP Community",
    language: "en",
  },
  {
    title:
      "How to Send and Receive SMS with the SAP Cloud Application Programming Model",
    date: "2022-02-16",
    tags: ["SAP", "SMS", "Cloud", "Messaging"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-members/how-to-send-and-receive-sms-with-the-sap-cloud-application-programming/ba-p/13530254",
    publication: "SAP Community",
    language: "en",
  },
  {
    title:
      "During the Chess Break: Background Information About the Frontend Part",
    date: "2021-12-13",
    tags: ["Frontend", "Architecture", "Web Development"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/during-the-chess-break-background-information-about-the-frontend-part-of/ba-p/13528029",
    publication: "SAP Community",
    language: "en",
  },
  {
    title:
      "Unleashing the Power of OpenAI Whisper API for Audio Transcription with Node.js",
    date: "2024-02-07",
    tags: ["OpenAI", "Whisper", "Node.js", "Audio"],
    externalUrl:
      "https://medium.com/@marius.obert/unleashing-the-power-of-openai-whisper-api-for-audio-transcription-with-node-js-aeba6df03299",
    publication: "Medium",
    language: "en",
  },
  {
    title: "Getting Started with Fundamental Library Styles in 2023",
    date: "2023-07-14",
    tags: ["SAP", "UI5", "Fundamental Library", "CSS"],
    externalUrl:
      "https://medium.com/@marius.obert/getting-started-with-fundamental-library-styles-in-2023-a4faa28575da",
    publication: "Medium",
    language: "en",
  },
  {
    title: "How to Teach Blockchain Development",
    date: "2019-07-28",
    tags: ["Blockchain", "Education", "Web3"],
    externalUrl:
      "https://medium.com/@marius.obert/how-to-teach-blockchain-development-cff7414483af",
    publication: "Medium",
    language: "en",
  },
  {
    title: "This Is Why Your Read-Eval-Print Loop Is So Amazing",
    date: "2019-01-16",
    tags: ["Programming", "REPL", "Developer Experience"],
    externalUrl:
      "https://medium.com/free-code-camp/this-is-why-your-read-eval-print-loop-is-so-amazing-cf0362003983",
    publication: "freeCodeCamp",
    language: "en",
  },
  {
    title: "Send and Receive Emails with SAP CAP",
    date: "2023-12-11",
    tags: ["SAP", "CAP", "Email"],
    externalUrl:
      "https://www.twilio.com/de-de/blog/sap-cap-emails-senden-empfangen",
    publication: "Twilio Blog",
    language: "de",
  },
  {
    title: "Looking Back at WeAreDevelopers World Congress 2023",
    date: "2023-08-13",
    tags: ["Events", "WeAreDevelopers", "Community"],
    externalUrl:
      "https://www.twilio.com/de-de/blog/rueckblick-auf-den-wearedevelopers-world-congress-2023",
    publication: "Twilio Blog",
    language: "de",
  },
  {
    title: "Register a Phone Number and Send SMS Using the CLI",
    date: "2023-06-12",
    tags: ["SMS", "CLI", "Twilio"],
    externalUrl:
      "https://www.twilio.com/de-de/blog/registriere-telefonnummer-sende-sms-cli",
    publication: "Twilio Blog",
    language: "de",
  },
  {
    title: "Comparing Gatsby, Next.js, NestJS and Nuxt",
    date: "2023-03-07",
    tags: ["JavaScript", "Frameworks", "Comparison"],
    externalUrl:
      "https://www.twilio.com/de-de/blog/vergleich-gatsby-next-nest-nuxt",
    publication: "Twilio Blog",
    language: "de",
  },
  {
    title: "Build a Photo Guestbook with WhatsApp, Node.js and Twilio",
    date: "2023-04-23",
    tags: ["WhatsApp", "Node.js", "Twilio"],
    externalUrl:
      "https://www.twilio.com/de-de/blog/foto-gaestebuch-mit-whatsapp-node-twilio",
    publication: "Twilio Blog",
    language: "de",
  },
  {
    title: "Send SMS Without a Phone Number Using Node.js",
    date: "2023-03-06",
    tags: ["SMS", "Node.js", "Twilio"],
    externalUrl:
      "https://www.twilio.com/de-de/blog/sms-ohne-telefonnummer-node-js",
    publication: "Twilio Blog",
    language: "de",
  },
  {
    title: "Making Phone Calls with Python",
    date: "2023-06-12",
    tags: ["Voice", "Python", "Twilio"],
    externalUrl: "https://www.twilio.com/de-de/blog/anrufe-mit-python",
    publication: "Twilio Blog",
    language: "de",
  },
  {
    title: "How to Buy a Twilio Phone Number Using Regulatory Bundles",
    date: "2022-03-15",
    tags: ["Twilio", "Phone Numbers", "Compliance"],
    externalUrl:
      "https://www.twilio.com/de-de/blog/wie-kaufe-ich-eine-twilio-rufnummer-mit-regulatory-bundles",
    publication: "Twilio Blog",
    language: "de",
  },
  {
    title: "Send and Receive SMS with Twilio and SAP CAP",
    date: "2022-02-23",
    tags: ["SAP", "CAP", "SMS", "Twilio"],
    externalUrl:
      "https://www.twilio.com/de-de/blog/sende-und-empfange-sms-mit-twilio-und-dem-sap-cloud-application-programming-model",
    publication: "Twilio Blog",
    language: "de",
  },
  {
    title: "Developer Evangelist DACH Marius Obert stellt sich vor",
    date: "2022-02-03",
    tags: ["Career", "Developer Evangelism", "Twilio"],
    externalUrl:
      "https://www.twilio.com/de-de/blog/developer-evangelist-dach-marius-obert-stellt-sich-vor",
    publication: "Twilio Blog",
    language: "de",
  },
  {
    title: "Live Transcribing Phone Calls",
    date: "2019-09-12",
    tags: ["Voice", "Transcription", "AI"],
    externalUrl: "https://www.twilio.com/de-de/blog/anrufe-live-transkribieren",
    publication: "Twilio Blog",
    language: "de",
  },
  {
    title: "Scheduling an SMS Using Twilio Studio",
    date: "2023-06-12",
    tags: ["SMS", "Twilio Studio", "Automation"],
    externalUrl:
      "https://www.twilio.com/de-de/blog/planen-einer-sms-twilio-studio",
    publication: "Twilio Blog",
    language: "de",
  },
  {
    title: "LLM and Rich Content Messages: Best Practices and Tips",
    date: "2025-02-25",
    tags: ["LLM", "AI", "Messaging"],
    externalUrl:
      "https://www.twilio.com/en-us/blog/developers/best-practices/llm-rich-content-messages-tips",
    publication: "Twilio Blog",
    language: "en",
  },
  {
    title: "Add SMS Capabilities to an AI Agent",
    date: "2025-01-13",
    tags: ["AI", "SMS", "Twilio"],
    externalUrl:
      "https://www.twilio.com/en-us/blog/developers/tutorials/integrations/add-sms-capabilities-ai-agent",
    publication: "Twilio Blog",
    language: "en",
  },
  {
    title: "What Developers Need to Know About RCS Messaging",
    date: "2024-11-27",
    tags: ["RCS", "Messaging", "Mobile"],
    externalUrl:
      "https://www.twilio.com/en-us/blog/developers/tutorials/building-blocks/what-developers-need-to-know-about-rcs-messaging",
    publication: "Twilio Blog",
    language: "en",
  },
  {
    title: "Getting Started with RCS Using Node.js",
    date: "2024-11-27",
    tags: ["RCS", "Node.js", "Messaging"],
    externalUrl:
      "https://www.twilio.com/en-us/blog/developers/tutorials/product/getting-started-with-rcs-node",
    publication: "Twilio Blog",
    language: "en",
  },
  {
    title: "Introducing the TwiML i18n NPM Package",
    date: "2024-02-22",
    tags: ["TwiML", "i18n", "Node.js"],
    externalUrl:
      "https://www.twilio.com/en-us/blog/products/launches/introducing-twiml-i18n-npm-package",
    publication: "Twilio Blog",
    language: "en",
  },
  {
    title: "Send SMS with Node.js on Google Cloud Functions",
    date: "2024-02-21",
    tags: ["SMS", "Node.js", "Google Cloud"],
    externalUrl:
      "https://www.twilio.com/en-us/blog/send-sms-nodejs-google-cloud-functions",
    publication: "Twilio Blog",
    language: "en",
  },
  {
    title: "Respond to Incoming SMS with Node.js on Google Cloud Functions",
    date: "2024-02-21",
    tags: ["SMS", "Node.js", "Google Cloud"],
    externalUrl:
      "https://www.twilio.com/en-us/blog/developers/tutorials/integrations/respond-incoming-sms-nodejs-google-cloud-functions",
    publication: "Twilio Blog",
    language: "en",
  },
  {
    title: "Send and Receive Email with SAP CAP",
    date: "2023-12-06",
    tags: ["SAP", "CAP", "Email"],
    externalUrl:
      "https://www.twilio.com/en-us/blog/developers/tutorials/product/send-and-receive-email-with-sap-cap",
    publication: "Twilio Blog",
    language: "en",
  },
  {
    title: "Introducing Developer Evangelist DACH: Marius Obert",
    date: "2022-01-28",
    tags: ["Career", "Developer Evangelism", "Twilio"],
    externalUrl:
      "https://www.twilio.com/en-us/blog/company/spotlights/introducing-developer-evangelist-dach-marius-obert",
    publication: "Twilio Blog",
    language: "en",
  },
  {
    title: "Devtoberfest 2021: Looking Back on Week 5 and Forward to Week 6",
    date: "2021-11-04",
    tags: ["SAP", "Community", "Devtoberfest"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/devtoberfest-2021-looking-back-on-week-5-and-forward-to-week-6/ba-p/13518617",
    publication: "SAP Community",
    language: "en",
  },
  {
    title: "Introducing the Artifact of the Month",
    date: "2021-08-24",
    tags: ["SAP", "Community", "Open Source"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/introducing-the-artifact-of-the-month/ba-p/13503662",
    publication: "SAP Community",
    language: "en",
  },
  {
    title:
      "SAP Tech Bytes: Using GitHub Actions to Deploy Continuously to Kyma",
    date: "2021-08-02",
    tags: ["SAP", "Kyma", "GitHub Actions", "CI/CD"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/sap-tech-bytes-using-github-actions-to-deploy-continuously-to-kyma/ba-p/13510492",
    publication: "SAP Community",
    language: "en",
  },
  {
    title:
      "Sending Notifications from SAP BTP Applications to the SAP Fiori Launchpad",
    date: "2021-07-06",
    tags: ["SAP", "BTP", "Fiori", "Notifications"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/sending-notifications-from-sap-btp-applications-to-the-sap-fiori-launchpad/ba-p/13517316",
    publication: "SAP Community",
    language: "en",
  },
  {
    title: "SAP Tech Bytes FAQ: Managed Approuter vs Standalone Approuter",
    date: "2021-05-17",
    tags: ["SAP", "Approuter", "Architecture"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/sap-tech-bytes-faq-managed-approuter-vs-standalone-approuter/ba-p/13496019",
    publication: "SAP Community",
    language: "en",
  },
  {
    title: "Cloud Native Lab 4: Multi-Tenant Web Apps in SAP BTP",
    date: "2021-04-22",
    tags: ["SAP", "BTP", "Cloud Native", "Multitenancy"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/cloud-native-lab-4-multi-tenant-web-apps-in-sap-btp/ba-p/13501022",
    publication: "SAP Community",
    language: "en",
  },
  {
    title: "Easy UI5 3.0: From Community Contributions to Community Plugins",
    date: "2021-04-09",
    tags: ["SAP", "UI5", "Open Source"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/easy-ui5-3-0-from-community-contributions-to-community-plugins/ba-p/13517425",
    publication: "SAP Community",
    language: "en",
  },
  {
    title: "Deploy Serverless SAP Fiori Apps from the Kyma Runtime",
    date: "2021-03-01",
    tags: ["SAP", "Fiori", "Kyma", "Serverless"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/deploy-serverless-sap-fiori-apps-from-the-kyma-runtime/ba-p/13492570",
    publication: "SAP Community",
    language: "en",
  },
  {
    title: "Cloud Native Lab 3: Comparing Cloud Foundry and Kyma Clients",
    date: "2021-01-27",
    tags: ["SAP", "Cloud Foundry", "Kyma", "Cloud Native"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/cloud-native-lab-3-comparing-cloud-foundry-and-kyma-clients/ba-p/13467242",
    publication: "SAP Community",
    language: "en",
  },
  {
    title:
      "Beyond SAPUI5 and SAP Fiori Elements – Appendix to TechEd Session IIS114",
    date: "2020-12-02",
    tags: ["SAP", "UI5", "Fiori", "TechEd"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/beyond-sapui5-and-sap-fiori-elements-appendix-to-teched-session-iis114/ba-p/13466184",
    publication: "SAP Community",
    language: "en",
  },
  {
    title: "SAP TechEd 2020: A Guide for UI Folks",
    date: "2020-11-17",
    tags: ["SAP", "TechEd", "UI", "Frontend"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/marius-sap-teched-2020-guide-for-ui-folks/ba-p/13491281",
    publication: "SAP Community",
    language: "en",
  },
  {
    title: "Cloud Native Lab 2: Comparing Cloud Foundry and Kyma Manifests",
    date: "2020-10-21",
    tags: ["SAP", "Cloud Foundry", "Kyma", "Cloud Native"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/cloud-native-lab-2-comparing-cloud-foundry-and-kyma-manifests/ba-p/13477991",
    publication: "SAP Community",
    language: "en",
  },
  {
    title: "Serverless SAP Fiori Apps on SAP BTP, Cloud Foundry Environment",
    date: "2020-10-02",
    tags: ["SAP", "Fiori", "Serverless", "Cloud Foundry"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/serverless-sap-fiori-apps-on-sap-btp-cloud-foundry-environment/ba-p/13484938",
    publication: "SAP Community",
    language: "en",
  },
  {
    title: "Cloud Native Lab 1: 7 Ways to Define Environment Variables",
    date: "2020-07-23",
    tags: ["SAP", "Cloud Native", "Configuration"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/cloud-native-lab-1-7-ways-to-define-environment-variables/ba-p/13484628",
    publication: "SAP Community",
    language: "en",
  },
  {
    title:
      "Understanding the Nuts and Bolts of SAP Fiori Development in the Cloud",
    date: "2020-06-22",
    tags: ["SAP", "Fiori", "Cloud"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/understanding-the-nuts-and-bolts-of-sap-fiori-development-in-the-cloud/ba-p/13458698",
    publication: "SAP Community",
    language: "en",
  },
  {
    title: "CloudFoundryFun 12: Create a Tiny CAP Project",
    date: "2020-03-28",
    tags: ["SAP", "CAP", "Cloud Foundry"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/cloudfoundryfun-12-create-a-tiny-cap-project/ba-p/13427690",
    publication: "SAP Community",
    language: "en",
  },
  {
    title: "SAP4Kids: Improving People's Lives with SAP Cloud Platform",
    date: "2020-05-01",
    tags: ["SAP", "Community", "Education"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/sap4kids-improving-people-s-lives-with-sap-cloud-platform/ba-p/13457179",
    publication: "SAP Community",
    language: "en",
  },
  {
    title: "Using Postman for API Testing with XSUAA",
    date: "2020-03-02",
    tags: ["SAP", "Postman", "Security", "APIs"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/using-postman-for-api-testing-with-xsuaa/ba-p/13442516",
    publication: "SAP Community",
    language: "en",
  },
  {
    title: "CloudFoundryFun 11: Integrate a React App in the Fiori Launchpad",
    date: "2020-02-03",
    tags: ["SAP", "React", "Fiori"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/cloudfoundryfun-11-integrate-a-react-app-in-the-fiori-launchpad/ba-p/13428333",
    publication: "SAP Community",
    language: "en",
  },
  {
    title: "My Learning Bucket List for Cloud Development in 2020",
    date: "2020-01-01",
    tags: ["SAP", "Cloud", "Learning"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/my-learning-bucket-list-for-cloud-development-in-2020/ba-p/13458250",
    publication: "SAP Community",
    language: "en",
  },
  {
    title: "CloudFoundryFun 10: Partial Deployments to Cloud Foundry",
    date: "2019-12-02",
    tags: ["SAP", "Cloud Foundry", "Deployment"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/cloudfoundryfun-10-partial-deployments-to-cloud-foundry/ba-p/13457283",
    publication: "SAP Community",
    language: "en",
  },
  {
    title:
      "CloudFoundryFun 9: Develop with the SAP Business Application Studio",
    date: "2019-10-30",
    tags: ["SAP", "Business Application Studio", "Cloud Foundry"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/cloudfoundryfun-9-develop-with-the-sap-business-application-studio/ba-p/13419097",
    publication: "SAP Community",
    language: "en",
  },
  {
    title: "CloudFoundryFun 8: Local CAP Development with Azure Services",
    date: "2019-09-10",
    tags: ["SAP", "CAP", "Azure"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/cloudfoundryfun-8-local-cap-development-with-azure-services/ba-p/13411170",
    publication: "SAP Community",
    language: "en",
  },
  {
    title: "CloudFoundryFun 7: Connect VS Code to Deployed Cloud Applications",
    date: "2019-08-02",
    tags: ["SAP", "VS Code", "Cloud Foundry"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/cloudfoundryfun-7-connect-vs-code-to-deployed-cloud-applications/ba-p/13423151",
    publication: "SAP Community",
    language: "en",
  },
  {
    title: "CloudFoundryFun 6: Run TypeScript Apps on Cloud Foundry",
    date: "2019-07-01",
    tags: ["SAP", "TypeScript", "Cloud Foundry"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/cloudfoundryfun-6-run-typescript-apps-on-cloud-foundry/ba-p/13413291",
    publication: "SAP Community",
    language: "en",
  },
  {
    title: "CloudFoundryFun 5: Secure React Applications on SAP Cloud Platform",
    date: "2019-06-03",
    tags: ["SAP", "React", "Security"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/cloudfoundryfun-5-secure-react-applications-on-sap-cloud-platform/ba-p/13422304",
    publication: "SAP Community",
    language: "en",
  },
  {
    title: "Annotated Links: Episode 24 of Hands-on SAP Dev",
    date: "2019-05-29",
    tags: ["SAP", "Community", "Video"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/annotated-links-episode-24-of-hands-on-sap-dev-with-qmacro-and-iobert/ba-p/13388641",
    publication: "SAP Community",
    language: "en",
  },
  {
    title: "CloudFoundryFun 4: How to Use Cloud Foundry Tasks",
    date: "2019-05-01",
    tags: ["SAP", "Cloud Foundry", "Automation"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/cloudfoundryfun-4-how-to-use-cloud-foundry-tasks/ba-p/13390953",
    publication: "SAP Community",
    language: "en",
  },
  {
    title: "CloudFoundryFun 3: Embrace Azure Cloud Services in Cloud Foundry",
    date: "2019-04-05",
    tags: ["SAP", "Azure", "Cloud Foundry"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/cloudfoundryfun-3-embrace-azure-cloud-services-in-cloud-foundry/ba-p/13404891",
    publication: "SAP Community",
    language: "en",
  },
  {
    title: "Export as Spreadsheet to Microsoft OneDrive",
    date: "2019-03-18",
    tags: ["SAP", "Microsoft", "Integration"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/export-as-spreadsheet-to-microsoft-onedrive/ba-p/13417604",
    publication: "SAP Community",
    language: "en",
  },
  {
    title: "CloudFoundryFun 2: Deploy a Docker Image to SAP Cloud Platform",
    date: "2019-03-01",
    tags: ["SAP", "Docker", "Cloud Foundry"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/cloudfoundryfun-2-deploy-a-docker-image-to-sap-cloud-platform/ba-p/13397620",
    publication: "SAP Community",
    language: "en",
  },
  {
    title: "Introducing the Easy UI5 Generator",
    date: "2019-02-05",
    tags: ["SAP", "UI5", "Tooling"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/introducing-the-easy-ui5-generator/ba-p/13405808",
    publication: "SAP Community",
    language: "en",
  },
  {
    title: "CloudFoundryFun 1: Upgrade Cloud Foundry with a New REPL Feature",
    date: "2019-02-04",
    tags: ["SAP", "Cloud Foundry", "REPL"],
    externalUrl:
      "https://community.sap.com/t5/technology-blog-posts-by-sap/cloudfoundryfun-1-upgrade-cloud-foundry-with-a-new-repl-feature/ba-p/13405350",
    publication: "SAP Community",
    language: "en",
  },
  {
    "title":
      "Using the Destination Service in SAP BTP Cloud Foundry Environment",
    "date": "2018-10-08",
    "tags": ["SAP BTP", "Cloud Foundry", "Connectivity"],
    "externalUrl":
      "https://community.sap.com/t5/technology-blog-posts-by-sap/using-the-destination-service-in-sap-btp-cloud-foundry-environment/ba-p/13362266",
    "publication": "SAP Community",
    "language": "en",
  },
  {
    "title":
      "Comparing Different Application Runtimes on SAP Cloud Platform Cloud Foundry",
    "date": "2018-07-27",
    "tags": ["SAP Cloud Platform", "Cloud Foundry", "Runtimes"],
    "externalUrl":
      "https://community.sap.com/t5/technology-blog-posts-by-sap/comparing-different-application-runtimes-on-sap-cloud-platform-cloud/ba-p/13366458",
    "publication": "SAP Community",
    "language": "en",
  },
  {
    title:
      "A course design framework for distributed ledger technologies — Ein Framework zum Entwurf von Distributed Ledger Technologie Kursen",
    date: "2019-10-01",
    tags: ["Blockchain", "Distributed Ledger", "Education", "Thesis", "Master"],
    externalUrl:
      "https://www.researchgate.net/publication/340828203_A_course_design_framework_for_distributed_ledger_technologies_A_course_design_framework_for_distributed_ledger_technologies_Ein_Framework_zum_Entwurf_von_Distributed_Ledger_Technologie_Kursen",
    publication: "Technical University of Munich (TUM)",
    language: "en",
  },
];
