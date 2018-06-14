import marked from 'marked';
import classnames from 'classnames';

marked.setOptions({ headerIds: false });

const Markdown = ({ children, className }) => {
  const formatted = marked(children);
  const wrapperClasses = classnames({
    [className]: !!className
  });

  return (
    <div
      className={wrapperClasses}
      dangerouslySetInnerHTML={{ __html: formatted }}
    />
  );
};

export default Markdown;
