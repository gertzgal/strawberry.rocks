import { html } from "satori-html";
import { promises as fs } from "fs";
import matter from "gray-matter";
import { fetchDocPage } from "../../utils/fetch-doc-page";

export const getDocsCard = async (path: string) => {
  const content = await fetchDocPage({ filename: path });
  const { data } = matter(content);

  const title = data.title;

  const bgPath = process.cwd() + "/src/social-cards/background.png";

  const bgImage = await fs.readFile(bgPath, {
    encoding: "base64",
  });

  return html`<div tw="flex w-full h-full">
    <img
      src="data:image/png;base64,${bgImage}"
      tw="inset-0 absolute object-cover"
    />
    <div tw="flex flex-col w-full h-full p-[45px] pb-[60px]">
      <div tw="flex flex-col items-start mt-auto font-bold">
        <h1
          tw="text-[90px] text-white mb-[-20px] ml-[-5px]"
          style="font-family: Ranade"
        >
          ${title}
        </h1>
        <h1 tw="text-[40px] text-white">Strawberry GraphQL</h1>
      </div>
    </div>
  </div>`;
};
