import { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  if (explorer.isFolder) {
    return (
      <div>
        <span style={{ color: "red" }} onClick={handleExpand}>
          {explorer.name}
          <br />
        </span>
        <div
          style={{
            display: expand ? "block" : "none",
            paddingLeft: 15,
            color: "green"
          }}
        >
          {explorer.items.map((item) => {
            return <Folder explorer={item} key={item.name} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <span>
        {" "}
        {explorer.name} <br />{" "}
      </span>
    );
  }
};

export default Folder;
