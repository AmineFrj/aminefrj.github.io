import Image from 'next/image';
import { TestimonialDetails as TestimonialDetailsProps } from '@/lib/types';
import Typography from '@/components/general/typography';
import Card from '@/components/layout/card';
import DefaultAvatar from '/public/images/Amine.jpeg';

const TestimonialDetails = ({
  personName,
  personAvatar,
  testimonial,
  title,
}: TestimonialDetailsProps) => {
  return (
    <Card className="flex-shrink-0 mx-4 flex flex-col items-center gap-6 p-8 max-w-sm md:max-w-md lg:max-w-lg">
      <Image
        src={personAvatar || DefaultAvatar} 
        alt={`${personName} avatar`}
        width={100}
        height={100}
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
      </div>
      <Typography className="text-center break-words">
        &quot;{testimonial}&quot;
      </Typography>
    </Card>
  );
};

export default TestimonialDetails;
