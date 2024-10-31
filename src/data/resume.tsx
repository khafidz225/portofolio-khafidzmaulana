import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Khafidz Maulana",
  initials: "FID",
  url: "https://dillion.io",
  portfolioUrl: "https://egagofur.me",
  location: "Tangerang, Banten, Indonesia",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Passionate about creating user-friendly Mobile Developer experiences, I'm driven by continuous learning in this dynamic field.",
  summary:
    "I am a dedicated mobile developer with a strong passion for exploring new technologies, particularly in the Flutter ecosystem. I thrive on learning and adapting to the latest trends in mobile development to create dynamic and user-friendly applications. I enjoy working collaboratively within a team, as I believe that teamwork not only enhances the quality of the final product but also fosters a more efficient and enjoyable workflow. Working alongside others allows us to combine our unique strengths, solve challenges together, and deliver high-quality solutions more effectively and swiftly.",
  avatarUrl: "/me.jpg",
  skills: [
    "Flutter",
    "Dart",
    "Next.js",
    "React Js",
    "Typescript",
    "Bootstrap",
    "Tailwind CSS",
    "Golang",
    "PostgreSQL",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    {
      href: "/#projects",
      icon: CodeIcon,
      label: "Projects",
    },
  ],
  contact: {
    email: "m.khafidzmaulana@gmail.com",
    tel: "+6289525548561",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/khafidz225",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/khafidz-maulana/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:m.khafidzmaulana14@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "PT Teknologi Inovasi Labs (TILABS)",
      href: "https://tilabs.my/",
      badges: ["Fulltime", "WFO"],
      location: "Cakung, Jakarta Timur, Indonesia",
      title: "Mobile Developer",
      logoUrl: "/tilabs.svg",
      start: "July 2024",
      end: "Present",
      description:
        "Currently focusing on the development of a Human Resource application named SUDO HR, building custom modules and integrating features such as attendance, leave, reimbursement, payroll, announcements, and overtime. Actively contributing to various projects at PT Teknologi Inovasi Labs using Flutter with BLoC for state management, and implementing notification features with FCM (Firebase Cloud Messaging).",
    },
    {
      company: "PT Voltras Internasional",
      href: "https://voltras.co.id/",
      badges: ["Fulltime", "WFO"],
      location: "Alam Sutera, Tangerang Selatan, Indonesia",
      title: "Flutter Developer",
      logoUrl: "/logo-voltras.jpg",
      start: "February 2023",
      end: "July 2024",
      description:
        "Currently working as a Software Engineer at PT Voltras Internasional, focusing on developing the PPOB and Waterway modules to enhance service offerings. I maintain and improve core modules like Hotel and Payment, leveraging Flutter for mobile app development and using GetIt for dependency injection. Additionally, I implement Provider for state management to ensure efficient data handling and collaborate with cross-functional teams to refine requirements and features",
    },
    {
      company: "Mitra Grab & Shopee Food",
      href: "#",
      badges: ["Part Time"],
      location: "",
      title: "Mitra Driver",
      logoUrl: "/logo-driver.jpg",
      start: "March 2023",
      end: "March 2022",
      description:
        "Delivered food, goods, and transported passengers to designated locations efficiently, as indicated in the application. Ensured timely and safe deliveries by following optimized routes while maintaining excellent customer service. Utilized the application to track orders and delivery points, enhancing accuracy and customer satisfaction.",
    },
    {
      company: "PT Prima Food Internasional",
      href: "https://primafreshmart.com/",
      badges: ["Fulltime", "WFO"],
      location: "Tangerang",
      title: "Food Advisor",
      logoUrl: "/logo-prima.jpg",
      start: "March 2023",
      end: "August 2023",
      description:
        "Operated as a cashier, efficiently handling transactions and assisting customers with their purchases. Maintained store cleanliness and organized product displays to create an inviting shopping environment. Conducted canvassing to promote products and attract potential customers in nearby areas. Provided excellent customer service by addressing inquiries and ensuring a positive shopping experience. Performed delivery orders as needed, ensuring timely and accurate deliveries to customer locations.",
    },
    {
      company: "PT Lionel Jaya Logistik",
      href: "https://lionelgroup.id/",
      badges: ["Fulltime", "WFO"],
      location: "Tangerang",
      title: "Data Entry",
      logoUrl: "/logo-lionel.png",
      start: "December 2020",
      end: "June 2021",
      description:
        "Entered data for incoming and outgoing goods, generating receipts for newly arrived items. Conducted checklists for goods received and dispatched, and prepared delivery orders for shipments. Managed petty cash for drivers to ensure efficient operations.",
    },
  ],
  education: [
    {
      school: "Bootcamp Dumbways",
      href: "hhttps://dumbways.id/",
      degree: "Full Stack Developer",
      logoUrl: "/logo-dw.png",
      start: "November 2022",
      end: "January 2023",
    },
    {
      school: "SMAN 8 Kabupaten Tangerang ",
      href: "https://sman8kabtangerang.sch.id/",
      degree: "System Information, Networking and Application",
      logoUrl: "/logo-sma.jpg",
      start: "2017",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "SUDO HR (Mobile)",
      href: "https://e-database.kemendagri.go.id/",
      dates: "July 2024 - Present",
      active: true,
      description:
        "Developed the SUDO HR mobile application, a comprehensive platform providing key HR functionalities such as Attendance, Leave, Reimbursement, Payroll, Announcements, and Overtime.",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "Dio",
        "BLOC",
        "GetIt",
        "Go Router",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://e-database.kemendagri.go.id/",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      image: "/banner-sudohr.png",
      video: "",
    },
    {
      title: "Waterway (Mobile & Web)",
      href: "https://www.travelagent.co.id/",
      dates: "February 2023 - July 2024",
      active: false,
      description:
        "Developed the Waterway module for TravelAgent, creating both mobile and web versions to enhance accessibility and functionality for users across platforms.",
      technologies: ["Flutter", "GetIt", "http", "Firebase", "Payment"],
      links: [
        {
          type: "Website",
          href: "https://www.travelagent.co.id/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Play Store",
          href: "https://play.google.com/store/apps/details?id=io.van.mobile&pcampaignid=web_share",
          icon: <Icons.playStoreIcon className="size-3" />,
        },
        {
          type: "App Store",
          href: "https://apps.apple.com/id/app/van-mobile/id6505094914",
          icon: <Icons.appStoreIcon className="size-3" />,
        },
      ],
      image: "/banner-waterway.png",
      video: "",
    },
    {
      title: "PPOB (Mobile & Web)",
      href: "https://www.travelagent.co.id/",
      dates: "February 2023 - July 2024",
      active: false,
      description:
        "Developed a PPOB (Payment Point Online Bank) system to facilitate seamless online transactions, providing users with convenient access to various payment services.",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "Dio",
        "BLOC",
        "GetIt",
        "Go Router",
        "Payment",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.travelagent.co.id/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Play Store",
          href: "https://play.google.com/store/apps/details?id=io.van.mobile&pcampaignid=web_share",
          icon: <Icons.playStoreIcon className="size-3" />,
        },
        {
          type: "App Store",
          href: "https://apps.apple.com/id/app/van-mobile/id6505094914",
          icon: <Icons.appStoreIcon className="size-3" />,
        },
      ],
      image: "/banner-ppob.jpg",
      video: "",
    },
    {
      title: "Hallo Corona (Web)",
      href: "https://jocular-griffin-e7af5f.netlify.app/",
      dates: "December 2022 - Janury 2023",
      active: false,
      description:
        "Developed the Hallo Corona website during my bootcamp at Dumbways, featuring user registration, login, message replies, and the ability to select specialized doctors, providing a comprehensive platform for users to access healthcare support easily.",
      technologies: [
        "React Js",
        "React Context",
        "Javascript",
        "Golang",
        "PostgreSQL",
        "Gorila Mux",
      ],
      links: [
        {
          type: "Website",
          href: "https://jocular-griffin-e7af5f.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/khafidz225/HelloCoronaFE",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/banner-hallocorona.jpg",
      video: "",
    },
    {
      title: "Dewe Tour (Web)",
      href: "https://dewetour14.netlify.app/",
      dates: "November 2022 - December 2023",
      active: false,
      description:
        "Developed the Dwew Tour website while attending the Dumbways Bootcamp, creating a platform that allows users to explore tour packages, make bookings, and access travel information easily.",
      technologies: [
        "React Js",
        "React Context",
        "Javascript",
        "Golang",
        "PostgreSQL",
        "Gorila Mux",
      ],
      links: [
        {
          type: "Website",
          href: "https://dewetour14.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/khafidz225/DeweTourFE",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/banner-dewetour.jpg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
