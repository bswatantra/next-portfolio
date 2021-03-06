import Head from 'next/head';

function Link(props) {
    return null;
}

export default function Blog() {
    return (
        <>
            <Head>
                <title>Blog</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <section className="text-gray-600 body-font">
                <div className="container px-2 py-20 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {[1, 2, 3,4].map((blog, index) => (
                            <div className="p-4 md:w-1/3">
                                <div
                                    className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center"
                                         src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=206&q=60"
                                         alt="blog"/>
                                    <div className="p-6">
                                        <div className="flex justify-between">
                                            <h2 className="tracking-widest font-medium mb-1 px-2 inline-flex text-xs leading-7 font-semibold rounded-full bg-green-100 text-gray-600">CATEGORY</h2>
                                            <h3 className="font-medium mb-1 px-2 inline-flex">Date</h3>
                                        </div>

                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Title</h1>
                                        <p className="leading-relaxed mb-3">Content</p>
                                        <div className="flex items-center flex-wrap ">
                                            <Link href=''
                                                  className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">Learn
                                                More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor"
                                                     strokeWidth="2" fill="none" strokeLinecap="round"
                                                     strokeLinejoin="round">
                                                    <path d="M5 12h14"/>
                                                    <path d="M12 5l7 7-7 7"/>
                                                </svg>
                                            </Link>
                                            <span
                                                className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2"
                                                     fill="none" strokeLinecap="round"
                                                     strokeLinejoin="round" viewBox="0 0 24 24">
                                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                                  <circle cx="12" cy="12" r="3"/>
                                                </svg>1.2K
                                        </span>
                                            <span
                                                className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2"
                                                     fill="none" strokeLinecap="round"
                                                     strokeLinejoin="round" viewBox="0 0 24 24">
                                                  <path
                                                      d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                                                </svg>6
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
