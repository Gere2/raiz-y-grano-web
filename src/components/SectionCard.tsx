import React from 'react';

const SectionCard = ({ title, icon, children }: { title: string; icon?: React.ReactNode; children: React.ReactNode }) => (
  <div className="bg-white rounded-2xl border border-[#efeadf] p-6 shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h3 className="text-2xl font-cormorant text-[#795a32]">{title}</h3>
    </div>
    {children}
  </div>
);

export default SectionCard;
