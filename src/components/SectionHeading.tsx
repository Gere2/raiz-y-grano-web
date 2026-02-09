import React from 'react';

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  align?: 'left' | 'center';
};

const SectionHeading = ({ title, subtitle, icon, align = 'center' }: SectionHeadingProps) => {
  const alignment = align === 'center' ? 'text-center' : 'text-left';
  const justify = align === 'center' ? 'justify-center' : 'justify-start';

  return (
    <div className={`mb-12 ${alignment}`}>
      <div className={`flex items-center ${justify} mb-4 gap-3`}>
        {icon}
        <h2 className="text-4xl font-cormorant text-[#795a32]">{title}</h2>
      </div>
      {subtitle ? <p className="text-[#7d6a50] italic text-lg">{subtitle}</p> : null}
    </div>
  );
};

export default SectionHeading;
