import Marquee from '@/components/ui/marquee'

const textItems = ['A venir ', 'A venir', 'A venir', 'A venir', 'A venir', 'A venir'];


export default function Experience() {
  return (
    <div >
      
      <br />
      <Marquee items={textItems} />
      <br />
     
    </div>
  );
}
