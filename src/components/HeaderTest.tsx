import * as React from "react";

type Props = {
  statement?: string;
};

const HeaderTest: React.FC<Props> = ({ statement }) => (
  <div>
    <h2>TESTING</h2>
    {statement ? <p>{statement}</p> : <p>A test statement</p>}
  </div>
);

export default HeaderTest;
