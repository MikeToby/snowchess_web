import Image from 'next/image';
import type { TeamProfile } from '@/lib/team';

interface TeamDetailSectionProps {
  member: TeamProfile;
}

export default function TeamDetailSection({ member }: TeamDetailSectionProps) {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-3xl overflow-hidden bg-deep-black shadow-xl max-w-md mx-auto lg:mx-0">
        <div className="relative aspect-[3/4]">
          <Image src={member.image} alt={member.name} fill className="object-cover" />
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <span className="inline-flex w-fit items-center rounded-full bg-gold/10 px-4 py-2 text-sm font-medium text-gold">
          {member.title}
        </span>
        <h1 className="mt-6 text-4xl md:text-5xl font-bold text-deep-black">{member.name}</h1>
        <p className="mt-3 text-lg text-medium-gray">{member.motto}</p>
        <p className="mt-6 text-soft-black leading-8">{member.longBio}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {member.skills.map((skill) => (
            <span key={skill} className="rounded-full bg-snow-cream px-4 py-2 text-sm text-soft-black">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
