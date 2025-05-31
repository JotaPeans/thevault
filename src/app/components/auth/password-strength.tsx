import tailwindColor from "tailwindcss/colors";
import { convert } from "colorizr";

const strengthMap: { [key: string]: number } = {
  "": 0,
  "Too weak": 1,
  Weak: 2,
  Medium: 3,
  Strong: 4,
};

interface PasswordStrengthProps {
  strength: string | null;
}

const PasswordStrength = ({ strength }: PasswordStrengthProps) => {
  return (
    <div className="flex flex-col w-full gap-1">
      <div className="flex items-center h-1.5 gap-2">
        <div
          data-strength={strengthMap[strength || ""]}
          style={{
            backgroundColor:
              strengthMap[strength || ""] >= 1
                ? strengthMap[strength || ""] === 1
                  ? convert(tailwindColor.red[500], "rgb")
                  : strengthMap[strength || ""] === 2
                  ? convert(tailwindColor.orange[400], "rgb")
                  : strengthMap[strength || ""] >= 3
                  ? convert(tailwindColor.emerald[500], "rgb")
                  : convert(tailwindColor.zinc[300], "rgb")
                : convert(tailwindColor.zinc[300], "rgb"),
          }}
          className="flex-1 rounded-full h-1.5"
        ></div>
        <div
          data-strength={strengthMap[strength || ""]}
          style={{
            backgroundColor:
            strengthMap[strength || ""] >= 2
            ? strengthMap[strength || ""] === 2
              ? convert(tailwindColor.orange[400], "rgb")
              : strengthMap[strength || ""] >= 3
              ? convert(tailwindColor.emerald[500], "rgb")
              : convert(tailwindColor.zinc[300], "rgb")
            : convert(tailwindColor.zinc[300], "rgb"),
          }}
          className="flex-1 rounded-full h-1.5"
        ></div>
        <div
          data-strength={strengthMap[strength || ""]}
          style={{
            backgroundColor:
              strengthMap[strength || ""] >= 3
                ? convert(tailwindColor.emerald[500], "rgb")
                : convert(tailwindColor.zinc[300], "rgb"),
          }}
          className="flex-1 rounded-full h-1.5"
        ></div>
        <div
          data-strength={strengthMap[strength || ""]}
          style={{
            backgroundColor:
              strengthMap[strength || ""] >= 4
                ? convert(tailwindColor.emerald[500], "rgb")
                : convert(tailwindColor.zinc[300], "rgb"),
          }}
          className="flex-1 rounded-full h-1.5"
        ></div>
      </div>
      <span
        data-strength={strengthMap[strength || ""]}
        className="ml-auto text-xs font-medium data-[strength=1]:text-red-500 data-[strength=2]:text-orange-400 data-[strength=3]:text-emerald-500 data-[strength=4]:text-emerald-500"
      >
        {strength}
      </span>
    </div>
  );
};

export default PasswordStrength;
