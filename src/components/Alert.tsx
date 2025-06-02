import { AlertTriangle } from "lucide-react";

interface AlertProps {
  title: string;
  description: string;
}

const Alert = ({ title, description }: AlertProps) => {
  return (
    <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3">
      <div className="flex items-center gap-2">
        <AlertTriangle className="h-4 w-4 text-red-600" />
        <p className="text-sm font-medium text-red-800">{title}</p>
      </div>
      <p className="mt-1 text-sm text-red-700">
        {description}
      </p>
    </div>
  );
};

export default Alert;
