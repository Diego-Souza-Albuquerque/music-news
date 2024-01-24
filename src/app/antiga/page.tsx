"use client";
import { useData } from "@/contexts/dataContext";

export default function NewsPage() {
  const { news, page } = useData();
  console.log(news);

  return (
    <>
      {page !== undefined && (
        <div className="bg-white px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {news[page].attributes.titulo}
            </h1>
            <p className="mt-3">{news[page].attributes.subtitulo}</p>

            <figure className="mt-5">
              <img
                className="aspect-video rounded-xl bg-gray-50 object-cover"
                src={`${process.env.STRAPI_URL}${news[page].attributes.thumbnail.data.attributes.url}`}
                alt=""
              />
              <figcaption className="mt-4 flex gap-x-2 text-xs px-1 leading-6 text-gray-500">
                {news[page].attributes.legedaFoto}
              </figcaption>
            </figure>

            <div className="mt-10 max-w-3xl">
              <p className="mt-6 text-xl leading-8">
                {news[page].attributes.texto1}
              </p>
              {/*  <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Data types.
                    </strong>{" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Loops.
                    </strong>{" "}
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Events.
                    </strong>{" "}
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                  </span>
                </li>
              </ul> */}
              <p className="mt-10 text-xl leading-8">
                {news[page].attributes.texto2}
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                From beginner to expert in 3 hours
              </h2>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
                vitae interdum mauris enim, consequat vulputate nibh. Maecenas
                pellentesque id sed tellus mauris, ultrices mauris. Tincidunt
                enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p>
              <figure className="mt-10 border-l border-indigo-600 pl-9">
                <blockquote className="font-semibold text-gray-900">
                  <p>
                    “Vel ultricies morbi odio facilisi ultrices accumsan donec
                    lacus purus. Lectus nibh ullamcorper ac dictum justo in
                    euismod. Risus aenean ut elit massa. In amet aliquet eget
                    cras. Sem volutpat enim tristique.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex gap-x-4">
                  <img
                    className="h-6 w-6 flex-none rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="text-sm leading-6">
                    <strong className="font-semibold text-gray-900">
                      Maria Hill
                    </strong>{" "}
                    – Marketing Manager
                  </div>
                </figcaption>
              </figure>
              <p className="mt-10">
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit.
              </p>
            </div>
            <figure className="mt-16">
              <img
                className="aspect-video rounded-xl bg-gray-50 object-cover"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                alt=""
              />
              <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                Faucibus commodo massa rhoncus, volutpat.
              </figcaption>
            </figure>
            <div className="mt-16 max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Everything you need to get up and running
              </h2>
              <p className="mt-6">
                Purus morbi dignissim senectus mattis adipiscing. Amet, massa
                quam varius orci dapibus volutpat cras. In amet eu ridiculus leo
                sodales cursus tristique. Tincidunt sed tempus ut viverra
                ridiculus non molestie. Gravida quis fringilla amet eget dui
                tempor dignissim. Facilisis auctor venenatis varius nunc, congue
                erat ac. Cras fermentum convallis quam.
              </p>
              <p className="mt-8">
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit.
              </p>
            </div>
          </div>
        </div>
      )}

      {page === undefined && (
        <div className="relative isolate h-screen">
          <img
            src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
            <p className="text-base font-semibold leading-8 text-white">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Página não encontrada
            </h1>
            <p className="mt-4 text-base text-white/70 sm:mt-6">
              Desculpe, não encontramos a página solicitada
            </p>
            <div className="mt-10 flex justify-center">
              <a
                href="#"
                className="text-sm font-semibold leading-7 text-white"
              >
                <span aria-hidden="true">&larr;</span> Voltar para a página
                inicial
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
