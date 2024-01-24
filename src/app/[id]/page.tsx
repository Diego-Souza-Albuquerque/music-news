import { Fragment } from "react";

export default async function NewsPageTwo({
  params,
}: {
  params: { id: string };
}) {
  const response = await fetch(
    `${process.env.STRAPI_URL}/api/news/${params.id}?populate=*`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
      },
    }
  );
  const data = await response.json();
  const dataNew = data?.data?.attributes || {};
  console.log(dataNew);

  return (
    <>
      <div className="bg-white px-6 py-24 lg:px-8 mb-20">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {dataNew?.titulo}
          </h1>
          <p className="mt-3">{dataNew?.subtitulo}</p>

          <figure className="mt-5">
            <img
              className="aspect-video rounded-xl bg-gray-50 object-cover"
              src={`${process.env.STRAPI_URL}${dataNew?.thumbnail?.data?.attributes.url}`}
              alt=""
            />
            <figcaption className="mt-4 flex gap-x-2 text-xs px-1 leading-6 text-gray-500">
              {dataNew?.legedaFoto}
            </figcaption>
          </figure>

          <div className="mt-10 max-w-3xl">
            {/* Paragrafo1 */}
            <div>
              {dataNew?.titleP1 ? (
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  {dataNew?.titleP1}
                </h2>
              ) : (
                ""
              )}
              <p className="mt-6 text-xl leading-8">{`${dataNew?.p1}`}</p>
              {dataNew?.citacao1 ? (
                <figure className="mt-10 border-l border-indigo-600 pl-9">
                  <blockquote className="font-semibold text-gray-900">
                    <p>{dataNew?.citacao1}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex gap-x-4">
                    <div className="text-sm leading-6">
                      <strong className="font-semibold text-gray-900">
                        {dataNew?.referenceCitacao1}
                      </strong>
                    </div>
                  </figcaption>
                </figure>
              ) : (
                ""
              )}
            </div>

            {/* Paragrafo2 */}
            <div>
              {dataNew?.titleP2 ? (
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  {dataNew?.titleP2}
                </h2>
              ) : (
                ""
              )}
              {dataNew?.p2 ? (
                <p className="mt-6 text-xl leading-8">
                  {dataNew?.p2
                    .split("\n")
                    .map((paragraph: string, index: number) => (
                      <Fragment key={index}>
                        {paragraph}
                        <br />
                      </Fragment>
                    ))}
                </p>
              ) : (
                ""
              )}
              {dataNew?.citacao2 ? (
                <figure className="mt-10 border-l border-indigo-600 pl-9">
                  <blockquote className="font-semibold text-gray-900">
                    <p>{dataNew?.citacao2}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex gap-x-4">
                    <div className="text-sm leading-6">
                      <strong className="font-semibold text-gray-900">
                        {dataNew?.referenceCitacao2}
                      </strong>
                    </div>
                  </figcaption>
                </figure>
              ) : (
                ""
              )}
            </div>

            {/* Paragrafo3 */}
            <div>
              {dataNew?.titleP3 ? (
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  {dataNew?.titleP3}
                </h2>
              ) : (
                ""
              )}
              {dataNew?.p3 ? (
                <p className="mt-6 text-xl leading-8">{`${dataNew?.p3}`}</p>
              ) : (
                ""
              )}
              {dataNew?.citacao3 ? (
                <figure className="mt-10 border-l border-indigo-600 pl-9">
                  <blockquote className="font-semibold text-gray-900">
                    <p>{dataNew?.citacao3}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex gap-x-4">
                    <div className="text-sm leading-6">
                      <strong className="font-semibold text-gray-900">
                        {dataNew?.referenceCitacao3}
                      </strong>
                    </div>
                  </figcaption>
                </figure>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
