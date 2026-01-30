import React from 'react';

const labelMap: Record<string, string> = {
  'top campus': 'Top del campus',
};

const TagChips = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {tags.map((tag) => (
      <span
        key={tag}
        className="rounded-full bg-[#f2ecdf] px-3 py-1 text-xs font-semibold text-[#6d5435]"
      >
        {labelMap[tag] ?? tag}
      </span>
    ))}
  </div>
);

export default TagChips;
