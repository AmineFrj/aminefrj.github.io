import { Github, Linkedin, GraduationCap } from 'lucide-react';

import LogoTF from '/public/images/logos/logo-tf.svg';
import LogoSK from '/public/images/logos/icon-sk.png';
import LogoFastAPI from '/public/images/logos/logo-fastapi.svg';
import LogoFlask from '/public/images/logos/logo-flask.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoElastic from '/public/images/logos/logo-elastic.svg';
import LogoDocker from '/public/images/logos/logo-docker.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import LogoDjango from '/public/images/logos/icon-django.svg';

import LogoSogeti from '/public/images/logos/logo-sogeti.png';
import LogoOrange from '/public/images/logos/logo-orange.png';
import LogoSaynova from '/public/images/logos/logo-saynova.png';
import LogoNumendo from '/public/images/logos/logo-numendo.png';
import LogoEnovacom from '/public/images/logos/logo-enovacom.png';

import PaperSfc from '/public/images/paper-sfc.png';
import PaperWG from '/public/images/paper-wg.png';
import PaperCorpex from '/public/images/paper-corpex.png';
import PaperWSDM from '/public/images/paper-wsdm.png';

import ConfEgc23 from '/public/images/conf-egc23.png';
import ConfEgc24 from '/public/images/conf-egc24.png';
import ConfIpol from '/public/images/conf-ipol.png';
import ConfAIDSCY from '/public/images/conf-aidscy.png';
import ConfWsdm24 from '/public/images/conf-wsdm.png';
import ConfSFC24 from '/public/images/conf-sfc.png';


import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/shahsagarm',
  GITHUB_REPO: 'https://github.com/shahsagarm/sagarshah.dev',
  Linkedin: 'https://twitter.com/shahsagarm',
  FIGMA: 'https://www.figma.com/@shahsagarm',
  FIGMA_FILE:
    'https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Talks',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    url: 'https://fr.linkedin.com/in/aminefrj',
  },
  {
    icon: GraduationCap,
    url: 'https://scholar.google.com/citations?user=LPkLWiAAAAAJ&hl=en&oi=ao',
  },
  {
    icon: Github,
    url: 'https://github.com/aminefrj',
  },
  // {
  //   icon: Figma,
  //   url: '',
  // },
];

export const TECHNOLOGIES: TechDetails[] = [

  {
    label: 'TensorFlow',
    logo: LogoTF,
    // darkModeLogo: LogoExpressLight,
    url: 'https://www.tensorflow.org/',
  },
  {
    label: 'Django',
    logo: LogoDjango,
    url: 'https://www.djangoproject.com/',
  },
  {
    label: 'FastAPI',
    logo: LogoFastAPI,
    url: 'https://fastapi.tiangolo.com/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'PostgreSQL',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
  {
    label: 'Docker',
    logo: LogoDocker,
    url: 'https://www.docker.com/',
  },
  // {
  //   label: 'Pytorch',
  //   logo: '',
  //   url: '',
  // },
  // {
  //   label: 'Flask',
  //   logo: LogoFlask,
  //   url: 'https://flask.palletsprojects.com/en/3.0.x/',
  // },
  {
    label: 'Elastic',
    logo: LogoElastic,
    url: 'https://www.elastic.co/',
  },

  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  },

];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoSogeti,
    logoAlt: 'Sogeti logo',
    position: 'Research projects leader - Capgemini',
    startDate: new Date(2022, 7),
    currentlyWorkHere: true,
    summary: [
      'Responsible for internal projects at SogetiLabs.',
      'Operational management and monitoring of development teams.',
      'Development of clustering and recommendation models using NLP techniques.',
      'Definition of requirements and discussions with customers to produce mockups.',
      'Company tutor for work-study students and interns.'
    ],
  },
  {
    logo: LogoEnovacom,
    // darkModeLogo: LogoGreenApexLight,
    logoAlt: 'Orange logo',
    position: 'Data Scientist, Orange - Enovacom',
    startDate: new Date(2021, 3),
    endDate: new Date(2021, 9),
    summary: [
      'Development of a search and visualization platform for unstructured data in a healthcare data warehouse.',
      'Collecting, preprocessing and classifying Harvard Medical School\'s health data n2c2.'
    ],
  },
  {
    logo: LogoNumendo,
    // darkModeLogo: LogoGreenApexLight,
    logoAlt: 'Orange logo',
    position: 'Data Scientist - Full Stack developer, Numendo',
    startDate: new Date(2020, 9),
    endDate: new Date(2020, 12),
    summary: [
      'Maintenance and retraining of text classification models.',
      'Development of an rtsp video streaming platform (React and Flask).'
    ],
  },
  {
    logo: LogoOrange,
    // darkModeLogo: LogoGreenApexLight,
    logoAlt: 'Orange logo',
    position: 'Data Scientist - Full Stack developer, Orange',
    startDate: new Date(2019, 8),
    endDate: new Date(2020, 9),
    summary: [
      'Creation of incident ticket classification models for Orange Cloud for Business.',
      'Realization of a model and a platform (Front and Backend) for detecting the wearing of masks in real time.',
      'Designed and managed a project to re-train and update models in real time.',
      'Creation of a data labeling platform for training AI models.',
      'Deployment and production launch of models in Docker on the Orange Flexible Engine Cloud.',
      'Developed the AI Marketplace api in php-Graphql.'
    ],
  },
  {
    logo: LogoSaynova,
    logoAlt: 'Saynova logo',
    position: 'Data Engineer',
    startDate: new Date(2019, 2),
    endDate: new Date(2019, 5),
    summary: [
      'Data analysis and visualization with Elasticsearch and Kibana.',
      'Log file collection and transformation with Logstash and Beats'
  ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Une variante pondérée de K-means adaptée aux données textuelles',
    description:
      'A. Ferdjaoui, S. Affeldt, M. Nadif',
    url: '',
    previewImage: PaperSfc,
    technologies: [
      'SFC 2024',
      'Marseille, France',
    ],
  },
  {
    name: 'WordGraph: a python package for reconstructing interactive causal graphical models from text data',
    description:
      'A. Ferdjaoui, S. Affeldt, M. Nadif',
    url: 'https://dl.acm.org/doi/10.1145/3616855.3635698',
    previewImage: PaperWSDM,
    technologies: [
      'WSDM 2024',
      'Merida, Mexico',
    ],
  },
  {
    name: 'Modèles graphiques causaux interactifs pour les données textuelles',
    description:
    'A. Ferdjaoui, S. Affeldt, M. Nadif',
      // 'Nous proposons de reconstruire des modèles graphiques causaux à partir de données textuelles via un nouveau package Python appelé WordGraph. Ce package facilite l\'exploration de grands corpus de documents par des visualisations interactives sous forme de modèles graphiques de mots. Le pipeline WordGraph exploite à la fois les widgets jupyter et le notebook jupyter pour aider les utilisateurs sans expérience en Python à prendre rapidement en main le pipeline WordGraph, qui est entièrement personnalisable. WordGraph est disponible via un dépôt GitHub, qui fournit également une courte vidéo présentant l\'utilisation de notre système.',
    url: 'https://editions-rnti.fr/?inprocid=1002965',
    previewImage: PaperWG,
    technologies: [
      'EGC 2024',
      'Dijon, France'
    ],
  },
  {
    name: 'CORPEX : Analyse exploratoire d\'un corpus biomédical à l\'aide de la classification croisée',
    description:
    'A. Ferdjaoui, A. Tlati, S. Affeldt, M. Nadif',
      // 'Nous proposons une interface d\'aide à l\'analyse de corpus via la visualisation interactive de coclusters afin d\'accompagner l\'exploration des thématiques pour un ensemble de textes. Les saisies de l\'utilisateur permettent la création ou le chargement d\'un corpus de documents, son nettoyage et l\'étude interactive et simultanée des termes et des documents. Cet article détaille les fonctionnalités en lien avec la génération dynamique de corpus, notamment dans un cadre biomédical, et également le chargement de matrices documents-termes pour des corpus déjà prétraités. L\'analyse du corpus par la classification croisée (co-clustering) et la visualisation conjointe des termes et des documents, suivant le co-partitionnement obtenu sur les deux ensembles, sont des outils efficaces pour une compréhension rapide des sujets abordés dans un corpus. La sauvegarde automatique des résultats permet de relancer facilement différentes analyses par un co-clustering approprié et d\'obtenir des vues croisées des thématiques à différents niveaux de granularité.',
    url: 'https://editions-rnti.fr/?inprocid=1002867',
    previewImage: PaperCorpex,
    technologies: [
      'EGC 2023',
      'Lyon, France'
    ],
  }
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'SFC 2024',
    personAvatar: ConfSFC24,
    title: 'International Mathematical Meeting Centre, Marseille, France',
    testimonial:
      'Presentation of a new explainable clustering algorithm applied on large textual data at meetings of French Classification Society.',
  },
  {
    personName: 'WSDM 2024',
    personAvatar: ConfWsdm24,
    title: 'Mérida, Mexico',
    testimonial:
      'Demonstration and presentation of the article "WordGraph: a python package for reconstructing interactive causal graphical models from text data".',
  },
  {
    personName: 'EGC 2024',
    personAvatar: ConfEgc24,
    title: 'Dijon, France',
    testimonial:
      'Presentation and demonstration of the article "Modèles graphiques causaux interactifs pour les données textuelles" and the web application WordGraph.',
  },
  {
    personName: 'AI-DSCY 2023',
    personAvatar: ConfAIDSCY,
    title: 'Paris, France',
    testimonial:
      'Presentation of our recent work on exploration of causal graphical models applied on textual data using Multivariate Information-based Inductive Causation and co-clustering.',
  },
  {
    personName: 'EGC 2023',
    personAvatar: ConfEgc23,
    title: 'Lyon, France',
    testimonial:
      'Presentation and demonstration of CORPEX: an exploratory web application of large textual data using robust co-clustering.',
  },
  {
    personName: 'Ipol 2023',
    personAvatar: ConfIpol,
    title: 'Paris, France',
    testimonial:
      'Presentation and demonstration of a new deep auto encoder consensus approach for clustering called "CAEclust: A Consensus of Autoencoders Representations for Clustering” (2022). In: Paris, France: Image Processing On Line, pp. 590–603.',
  }
];
