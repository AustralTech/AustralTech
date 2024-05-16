import postData from "../../../public/data/posts.json"

export default function Solutions() {
  return (
    <div className="py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl mb-16 lg:mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">La solución a su alcance</h2>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {postData.map((item) => (
            <article
              key={item.id}
              className="card h-64 flex flex-col justify-center items-center bg-white border border-gray-300 rounded-lg hover:border-blue transition-transform transform hover:scale-105 duration-500"
            >
              <div className="relative flex items-center justify-center">
                <img src={item.imageUrl} alt="" className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gray-50" />
              </div>
              <div className="mx-auto">
                <h3 className="text-lg font-semibold leading-6 text-center text-gray-900 group-hover:text-gray-600">
                  {item.title}
                </h3>
                <p className=" mt-4 text-sm leading-6 text-center text-gray-400 group-hover:text-gray-500">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
