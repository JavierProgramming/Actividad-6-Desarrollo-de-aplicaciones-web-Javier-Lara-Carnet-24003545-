import React from 'react';

const List = ({ items = [], toggle, remove }) => {
  if (!items.length) {
    return <p>No items to display.</p>;
  }

  return (
    <ul>
      {items.map(({ id, name, complete }) => (
        <li key={id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            onClick={() => toggle && toggle(id)}
            style={{ cursor: toggle ? 'pointer' : 'default', textDecoration: complete ? 'line-through' : 'none' }}
            role={toggle ? 'button' : undefined}
            tabIndex={toggle ? 0 : undefined}
            onKeyPress={e => {
              if (toggle && (e.key === 'Enter' || e.key === ' ')) toggle(id);
            }}
          >
            {name}
          </span>
          {remove && (
            <button
              onClick={() => remove(id)}
              aria-label={`Remove ${name}`}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: 'red',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              ×
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
