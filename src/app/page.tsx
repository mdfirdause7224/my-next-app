import AboutSection from '@/components/AboutSection';
import { ParticleNetwork } from '../components/ParticleNetwork';
import Dashboard from './dashboard/page';

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <ParticleNetwork />
      <div className="relative">
        <Dashboard />
        <AboutSection />
      </div>
    </div>
  );
}
