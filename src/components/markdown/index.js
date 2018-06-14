import marked from 'marked';

marked.setOptions({ headerIds: false });

const Markdown = ({ children, className }) => {
  const formatted = marked(children);

  return (
    <div
      className={className ? className : false}
      dangerouslySetInnerHTML={{ __html: formatted }}
    />
  );
};

export default Markdown;
