import React from 'react';

type QrCodeProps = {
  value: string;
  size?: number;
  className?: string;
};

const QrCode = ({ value, size = 140, className }: QrCodeProps) => {
  const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(value)}`;
  return <img src={url} alt="QR code" width={size} height={size} className={className} />;
};

export default QrCode;
