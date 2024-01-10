const companies = [
    {
        id: 1,
        name: 'Qik',
        href: '#',
        description: `Maintaining and improving back office web app to handle core operations for the company.
        Creating new features for mobile app to end users of qik, giving the user the best bank client experience `,
        date: 'Jul 26, 2023 - Still working',
        category: { title: 'Mobile and web dev', href: '#' }
    },
    {
        id: 2,
        name: 'BairesDev',
        href: '#',
        description: `In my role at the company, I was primarily responsible for React Native 
      app development and migrating a web app from VueJS to NextJS. Additionally, I played a crucial role in 
      enhancing our development processes by conducting code reviews and identifying areas for improvement.`,
        date: 'Sep 10, 2021 - Still working',
        category: { title: 'Full Stack', href: '#' }
    },
    {
        id: 3,
        name: 'NEXUS GROUP',
        href: '#',
        description: `For this role I was deeply involved in enhancing software scalability by refactoring and redesigning components. 
        I also focused on mobile development, particularly for financial software tailored to banks, where I engaged in comprehensive 
        analysis, development, and ongoing maintenance. `,
        date: 'Sep 10, 2018 - Sep 10, 2021',
        category: { title: 'Javascript dev', href: '#' }
    },
    // More posts...
]

export default function Experience() {
    return (
        <div className="bg-white py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Experience</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Places that i worked as contracted software engenier
                    </p>
                </div>
                <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {companies.map((company) => (
                        <article key={company.id} className="flex max-w-xl flex-col ">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time className="text-gray-500">
                                    {company.date}
                                </time>
                                <a
                                    href={company.category.href}
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    {company.category.title}
                                </a>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href={company.href}>
                                        <span className="absolute inset-0" />
                                        {company.name}
                                    </a>
                                </h3>
                                <p className="mt-5  text-sm leading-6 text-gray-600">
                                    {company.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
