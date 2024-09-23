import Image from 'next/image';
import { TestimonialDetails as TestimonialDetailsProps } from '@/lib/types';
import Typography from '@/components/general/typography';
import Card from '@/components/layout/card';
import DefaultAvatar from '/public/images/Amine.jpeg';
import { MapPin  } from 'lucide-react';


const TestimonialDetails = ({
  personName,
  personAvatar,
  testimonial,
  title
}: TestimonialDetailsProps) => {
  return (
    <Card className="flex-shrink-0 mx-4 flex flex-col items-center gap-6 p-8 max-w-xs md:max-w-sm">
      <Image
        src={personAvatar || DefaultAvatar} 
        alt={`${personName} avatar`}
        // width={80}
        // height={80}
      />
      <div className="flex w-full flex-col gap-1">
        <Typography
          variant="subtitle"
          className="w-full text-center font-semibold text-gray-900"
        >
          {personName}
        </Typography>
        <Typography variant="body3" className="w-full text-center">
          {title}
        </Typography>
        
          {/* <div className="flex items-center justify-center gap-2 text-gray-500">
            <MapPin size={16} /> 
            <Typography variant="body3" className="text-sm">
              {title}
            </Typography>
          </div> */}

      </div>
      <Typography className="text-center break-words">
        {testimonial}
      </Typography>
    </Card>
  );
};

export default TestimonialDetails;
