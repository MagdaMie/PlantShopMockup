import React from 'react';

const Child = ({ name, onClick, style }) => (
  <div style={style} onClick={onClick}>{name}</div>
);

const Cousin = ({name, onClick, style}) => (
    <div style={style} onClick={onClick}>{name}</div>
)

const Parent = ({ children }) => {
  const handleClick = (name) => {
    alert(`You clicked on ${name}`);
  };

  return (
    <div>
      {React.Children.map(children, (child, index) => {

          return React.cloneElement(child, {
            key: child.props.name,
            onClick: () => handleClick(child.props.name),
            style: { color: index % 2 === 0 ? 'blue' : 'green' }
          });
       
      })}
    </div>
  );
};

const Example = () => {
  return (
    <Parent>
      <Child name="Alice" />
      <Child name="Bob" />
      <Child name="Charlie" />
      <Cousin name="Magda" />
    </Parent>
  );
};

export default Example;