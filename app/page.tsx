import Header from '../components/Header'

const techs = [
  'React',
  'Node',
  'JavaScript',
  'React-Native',
  'Redux',
]

export default function Home() {

  const techSnipets = (tech: string) => 
    <div className="hidden sm:mb-8 sm:flex sm:justify-center ">
      <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        <a href="#" className="font-semibold text-indigo-600">
          <span className="absolute inset-0" aria-hidden="true" />
          {tech}
        </a>
      </div>
    </div>

  return (
    <div className="bg-white">
      <Header />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 ">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Julio Antonio Ortiz Pol
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
             Full Stack developer
            </p>
            <div className='flex gap-4 justify-center mt-8'>
            {techs.map(tech => techSnipets(tech))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

