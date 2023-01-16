import  "./Section.scss";

function Section({ children, classes }) {
  return (
    <div className={classes}>
      {children}
    </div>
  );
}

export default Section;
