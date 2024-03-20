// Landing Page Component
export default function LandingPagev1() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-6">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 font-semibold text-indigo-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Reach out for help and support{' '}
              <span aria-hidden="true">&rarr;</span>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Expert Guidance for Your Journey
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              &quot; Access a pool of experienced IT professionals
              ready to guide you through your career journey. Discover
              clear and personalized roadmaps to navigate your career
              in the ever-evolving IT landscape. Join a supportive
              community where members share knowledge, experiences,
              and advice.&quot;
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Ask Your Query
              </a>
            </div>
          </div>
        </div>
      </div>{' '}
    </div>
  );
}
