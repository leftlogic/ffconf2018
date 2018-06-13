import marked from 'marked';

marked.setOptions({ headerIds: false });

const Marked = ({ children }) => {
  const formatted = marked(children);
  return <div dangerouslySetInnerHTML={{ __html: formatted }} />;
};

export default Marked;
