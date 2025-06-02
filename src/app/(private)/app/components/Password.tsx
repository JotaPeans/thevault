"use client";

import { Password as PasswordType } from "@/app/api/domain/models/Password";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PasswordCategories } from "@prisma/client";
import { Copy, Eye, Mail, Star } from "lucide-react";

interface PasswordProps {
  password: PasswordType;
}

const getStrengthColor = (strength: string) => {
  switch (strength) {
    case "Too weak":
      return "bg-red-500";
    case "Weak":
      return "bg-yellow-500";
    case "Medium":
      return "bg-green-400";
    case "Strong":
      return "bg-green-600";
    default:
      return "bg-gray-500";
  }
};

const getIcon = (category: PasswordCategories) => {
  switch (category) {
    case "EMAIL":
      return "📧";
    case "ENTERTAINMENT":
      return "🎬";
    case "FINANCIAL":
      return "🏦";
    case "PERSONAL":
      return "🙅🏽";
    case "SOCIALMEDIA":
      return "💬";
    case "WORK":
      return "💼";
    case "OTHER":
      return "🌐";
    default:
      return "🌐";
  }
};

const Password = ({ password }: PasswordProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-100 dark:bg-input rounded-lg flex items-center justify-center text-lg">
              {getIcon(password.category)}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-primary truncate">
                {password.title}
              </h3>
              <p className="text-xs font-medium text-gray-500 truncate">
                {password.username}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="icon">
              {password.favorite ? (
                <Star className="size-4 text-yellow-500 fill-current" />
              ) : (
                <Star className="size-4 text-gray-400 dark:text-gray-600" />
              )}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <div
              className={cn(
                "w-2 h-2 rounded-full",
                getStrengthColor(password.strength)
              )}
            />
            <span className="text-gray-500 capitalize">
              {password.strength}
            </span>
          </div>
        </div>
        <div className="mt-3 flex space-x-2">
          <Button variant="outline" size="sm" className="flex-1">
            <Copy className="w-3 h-3 mr-1" />
            Copy
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            <Eye className="w-3 h-3 mr-1" />
            View
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Password;
