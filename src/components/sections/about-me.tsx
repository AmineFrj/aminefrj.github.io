import Image from 'next/image';

import Amine from '/public/images/Amine.jpeg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';



const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>


       <div className="flex w-full flex-col justify-between gap-12 md:flex-row">

         <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={Amine}
              alt="Fullpose of Amine"
              className="absolute z-20 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-4 md:top-4 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'contain' }}//cover
            ></Image>
            {/* <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div> */}
          </div>
        </div> 

         
        <div className="flex max-w-xl flex-col gap-6">
           <Typography variant="h3">
            My journey:
          </Typography> 
          <Typography>
          Passionate about machine learning, 
          my academic career began with a {`master's`} degree in <b>machine learning</b>, 
          supplemented by a second one in <b>MIAGE</b> for project managment, 
          and two years practical experience as a <b>data scientist</b> and <b>full stack developer</b>. 
          I decided to explore the depths of the field further by starting a PhD with SogetiLabs and the Borelli Center. 
          My research focuses on <b>NLP</b>, in particular the inference of causal relationships from unstructured textual data.
          </Typography>
          <Typography>
          This exciting career journey has led to numerous <b>publications</b>, 
          both national and international, as well as the development of two NLP software applications. 
          I also share my knowledge by <b>teaching</b> {`master's`} students at the Université Paris Cité. 
          Using the CIFRE (Convention Industrielle de Formation par la Recherche), 
          I actively bridge the gap between theoretical exploration and practical application, 
          contributing to real-life, <b>industrial</b> projects within SogetiLabs.
          </Typography> 

          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                Double {`master's`} degree : machine learning and project managment
              </Typography>
              <Typography component="li">Project leader</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">5 years+ experiment in innovation and web development</Typography>
              <Typography component="li">University teacher</Typography>
            </ul>
          </div> 

        </div>
      </div> 
    </Container>
  );
};

export default AboutMeSection;
