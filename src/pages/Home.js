import {
  useFirstPrismicDocument,
  PrismicRichText,
  useAllPrismicDocumentsByType,
} from "@prismicio/react";

const Home = () => {
  //get the first post
  const [document] = useFirstPrismicDocument();
  // const [article] = useAllPrismicDocumentsByType("article");

  console.log(document);
  // console.log(article);
  return (
    <div>
      {/* {document && (
        <>
          {document.map((document) => {
            return <PrismicRichText field={document.data.titre} />;
          })}
        </>
      )} */}

      {document && (
        <>
          <PrismicRichText field={document.data.titre} />
          <PrismicRichText field={document.data.content} />
        </>
      )}
    </div>
  );
};

export default Home;
