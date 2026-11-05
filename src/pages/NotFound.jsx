import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Common/Button';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FBF5EF] text-[#242424] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-5">
        <span className="font-mono text-xs uppercase tracking-widest text-[#E65639]">
          404 Error
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#242424]">
          Page Not Found
        </h1>
        <p className="text-sm text-[#6E6A66] leading-relaxed">
          The route you are trying to reach does not exist, or has been moved.
        </p>
        <div className="pt-2">
          <Button onClick={() => navigate('/')} variant="primary">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
