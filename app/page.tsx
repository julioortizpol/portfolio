import Header from './components/Header'
const techs = ['React', 'Node', 'JavaScript', 'React-Native', 'Redux']
const stacks = [
  {name:'Front End', techs: ['React', 'Node', 'JavaScript', 'React-Native', 'Redux']},
  {name: 'Back end', techs: ['Node', 'Nest', 'GO', 'Python']}
]

const techSnipets = (tech: string) => 
<div className="sm:mb-8 sm:flex sm:justify-center ">
  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
    <a href="#" className="font-semibold text-indigo-600">
      <span className="absolute inset-0" aria-hidden="true" />
      {tech}
    </a>
  </div>
</div>

const StacksColums = (): JSX.Element => (
  <div className="bg-white py-6 sm:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-2">
          {stacks.map((stack, index) => (
            <div key={index} className="mx-auto flex max-w-xs flex-col gap-y-1">
              <dt className="text-base leading-7 text-gray-600">{stack.name}</dt>
              <dd className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              <div className='flex gap-x-4 justify-center mt-8 flex-wrap'>
              {stack.techs.map(tech => techSnipets(tech))}
            </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
)

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <div className="relative isolate px-6 pt-14 lg:px-8 w-full">
        <div className="mx-auto py-32 ">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Julio Antonio Ortiz Pol
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
            Software Ing with more than 5 years of experience
            </p>
            <StacksColums />
          </div>
        </div>
      </div>
    </div>
  )
}



