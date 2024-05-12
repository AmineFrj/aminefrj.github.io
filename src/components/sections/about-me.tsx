import Image from 'next/image';

import Amine1 from '/public/images/Amine.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';



const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="Academic path" />
      </div>




      {/* <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
         Image 
         <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={Amine1}
              alt="Fullpose of Sagar"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div> 

        Content 
        <div className="flex max-w-xl flex-col gap-6">
           <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography> 
          <Typography>
          Passionate about machine learning, 
          my academic career began with a master's degree in machine learning, 
          supplemented by a second one in MIAGE, 
          and two years practical experience as a data scientist and software developer. 
          I decided to explore the depths of the field further by starting a PhD with SogetiLabs and the Borelli Center. 
          My research focuses on NLP, in particular the inference of causal relationships from unstructured textual data.
          </Typography>
          <Typography>
          This exciting career journey has led to numerous publications, 
          both national and international, as well as the development of two NLP software applications. 
          I also share my knowledge by teaching master's students at the Université Paris Cité. 
          Using the CIFRE (Convention Industrielle de Formation par la Recherche), 
          I actively bridge the gap between theoretical exploration and practical application, 
          contributing to real-life, industrial projects within SogetiLabs.
          </Typography> 

          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                B.E. in Computer Engineering
              </Typography>
              <Typography component="li">Full time freelancer</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Avid learner</Typography>
              <Typography component="li">Aspiring indie hacker</Typography>
            </ul>
          </div> 

        </div>
      </div> */}
    </Container>
  );
};

export default AboutMeSection;
