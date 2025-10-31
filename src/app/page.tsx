import { ParticleNetwork } from '../components/ParticleNetwork';
import Dashboard from './dashboard/page';

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <ParticleNetwork />
      <div className="p-8 relative z-10">
        <Dashboard />
      </div>
    </div>
  );
}
