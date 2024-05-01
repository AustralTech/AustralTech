import React from 'react';
import image from "./imgdoctor.jpg"
const posts = [
    {
      id: 1,
      title: 'post title',
      href: '#',
      description: 'post description',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl: 'https://as2.ftcdn.net/v2/jpg/03/08/73/55/1000_F_308735580_GtnBwk3extfEJiSlIYnV0s91GGPk1SK8.jpg',      },
    },
    {
      id: 2,
      title: 'Second post title',
      href: '#',
      description: 'Second post description',
      date: 'Mar 17, 2020',
      datetime: '2020-03-17',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'John Doe',
        role: 'Writer',
        href: '#',
        imageUrl: 'https://as2.ftcdn.net/v2/jpg/03/08/73/55/1000_F_308735580_GtnBwk3extfEJiSlIYnV0s91GGPk1SK8.jpg',
      },
    },
    {
      id: 3,
      title: 'Third post title',
      href: '#',
      description: 'Third post description',
      date: 'Mar 18, 2020',
      datetime: '2020-03-18',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Jane Smith',
        role: 'Editor',
        href: '#',
        imageUrl: 'https://as2.ftcdn.net/v2/jpg/03/08/73/55/1000_F_308735580_GtnBwk3extfEJiSlIYnV0s91GGPk1SK8.jpg',      },
    },
  ];
  

function Page() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

      <div className="mx-auto max-w-2xl lg:mx-0 ">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Easy steps for your solution</h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
                <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
