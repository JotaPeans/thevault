import { AlertTriangle } from "lucide-react";

interface AlertProps {
  title: string;
  description: string;
}

const Alert = ({ title, description }: AlertProps) => {
  return (
    <div className="rounded-lg border bg-destructive/10 border-destructive/40 p-3">
      <div className="flex items-center gap-2">
        <AlertTriangle className="h-4 w-4 text-destructive" />
        <p className="text-sm font-medium text-destructive">{title}</p>
      </div>
      <p className="mt-1 text-sm text-red-700">
        {description}
      </p>
    </div>
  );
};

export default Alert;
