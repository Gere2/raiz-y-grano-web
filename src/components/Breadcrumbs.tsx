import React from 'react';
import { Link } from 'react-router-dom';

type Crumb = {
  label: string;
  to?: string;
};

const Breadcrumbs = ({ items }: { items: Crumb[] }) => (
  <div className="text-sm text-[#6d5435] mb-4">
    {items.map((item, index) => (
      <span key={`${item.label}-${index}`}>
        {item.to ? (
          <Link to={item.to} className="hover:underline">
            {item.label}
          </Link>
        ) : (
          <span className="font-semibold">{item.label}</span>
        )}
        {index < items.length - 1 ? ' / ' : null}
      </span>
    ))}
  </div>
);

export default Breadcrumbs;
