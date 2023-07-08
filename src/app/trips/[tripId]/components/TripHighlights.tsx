import Image from 'next/image';

interface Props {
  highlights: string[];
}

export default function TripHighlights({ highlights }: Props) {
  return (
    <div className="flex flex-col p-5">
      <h2 className="font-semibold text-primaryDarker mb-2">Highlights</h2>
      <div className="flex flex-wrap gap-y-3">
        {highlights.map((highlight) => (
          <div key={highlight} className="flex items-center gap-2 w-1/2">
            <Image
              src="/check-icon.png"
              width={15}
              height={15}
              alt={highlight}
            />
            <p className="text-grayPrimary text-xs">{highlight}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
