import { ArrowPathIcon } from '@heroicons/react/24/outline';

export default function Loader() {
  return (
    <div className="w-full flex justify-center">
      <ArrowPathIcon className="w-10 h-10 animate-spin" />
    </div>
  );
}
