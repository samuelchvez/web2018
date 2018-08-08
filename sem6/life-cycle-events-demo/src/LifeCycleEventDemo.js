import React from 'react';


const LifeCycleEventDemo = ({ items = [] }) => (
  <ul>
    {
      items.length ? (
        items.map(
          item => (
            <li key={item.id}>
              { item.title }
            </li>
          ),
        )
      ) : <li>{ 'No hay elementos...' }</li>
    }
  </ul>
);

export default LifeCycleEventDemo;
