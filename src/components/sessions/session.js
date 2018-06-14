const Session = ({ date1, date2, slug, children }) => {
  return (
    <li
      className="sessions__item"
      id={slug}
      data-date1={date1}
      data-date2={date2}
    >
      {children}
    </li>
  );
};

export default Session;
