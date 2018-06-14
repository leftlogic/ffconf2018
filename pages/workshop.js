import Workshop from '../src/components/workshops/workshop';

const PageWorkshop = ({ slug }) => {
  return (
    <div id="root">
      <Workshop selectedSlug={slug} />
    </div>
  );
};

PageWorkshop.getInitialProps = ({ query }) => {
  const { slug } = query;

  return {
    slug
  };
};

export default PageWorkshop;
