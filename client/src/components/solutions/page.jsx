import React from 'react';

const posts = [
    {
      id: 1,
      title: 'Search Doctor',
      description: 'Registration for a cehck at the clinic needed for treatment',
      imageUrl: 'https://solcaquito.org.ec/wp-content/uploads/2020/08/doctor_Mesa-de-trabajo-1-297x300.png',      },
    {
      id: 2,
      title: 'Request a Consultation',
      description: 'Registration for a cehck at the clinic needed for treatment',
      imageUrl: 'https://test.exo.vision/wp-content/uploads/2022/02/consultation.svg',
    },
    {
      id: 3,
      title: 'Make Appoinment',
      description: 'Registration for a cehck at the clinic needed for treatment',
      imageUrl: 'https://www.pucesa.edu.ec/wp-content/uploads/2024/04/vector-calendario.jpg',      },
  ];
  

  function Page() {
    return (
        <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          <div className="mx-auto max-w-2xl  ">
            <h2 className="text-3xl  font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Easy steps for your solution</h2>
          </div>
  
          <div className="mx-auto mt-10  grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
            {posts.map((post) => (
               <article key={post.id} className="group flex flex-col justify-between bg-white border border-gray-300 rounded-lg hover:border-blue-500 transition-transform transform hover:scale-105 duration-500">

                  <a href="">
                
                <div className="relative mt-8 flex items-center justify-center">
                  <img src={post.imageUrl} alt="" className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gray-50" />
                </div>
  
                <div className="mx-auto">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-center text-gray-900 group-hover:text-gray-600">
                      {post.title}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-center text-gray-400 group-hover:text-gray-500">
                    {post.description}
                </p>    
                </div>

            </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
export default Page;
