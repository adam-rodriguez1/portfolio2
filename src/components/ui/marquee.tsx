export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className="relative flex w-full overflow-x-hidden border-b-2 border-t-2 border-border bg-white text-text">
      <div className="animate-marquee whitespace-nowrap py-12">
        {items.map((item, index) => {
          return (
            <span
              key={`${item}-${index}`}
              className={`mx-4 text-4xl ${index % 2 === 0 ? 'bg-white-500' : 'bg-red-500'}`}
              style={{
                padding: '46px',
                borderRadius: '8px',
                visibility: index % 2 === 0 ? 'hidden' : 'visible', // Cache le texte des items pairs
              }}
            >
              {item}
            </span>
          );
        })}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-12">
        {items.map((item, index) => {
          return (
            <span
              key={`${item}-${index}-duplicate`}
              className={`mx-4 text-4xl ${index % 2 === 0 ? 'bg-white-500' : 'bg-red-500'}`}
              style={{
                padding: '46px',
                borderRadius: '8px',
                visibility: index % 2 === 0 ? 'hidden' : 'visible', // Cache le texte des items pairs
              }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
