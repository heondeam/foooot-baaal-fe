import H1 from '../components/typography/h1'
import P from '../components/typography/p'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-around px-4">
      <div className="flex flex-col gap-4 items-center justify-center">
        <H1>Fooool Baal</H1>
        <P className="text-center">
          Keep track of your favorite team schedule and game results
        </P>
      </div>
      <Link href={'/explore'}>
        <Button className="w-full">Explore</Button>
      </Link>
    </div>
  )
}
