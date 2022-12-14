import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Command,
  CreditCard,
  File,
  FileText,
  Github,
  Hand,
  HandMetal,
  HelpCircle,
  Image,
  Loader2,
  Menu,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  Trash,
  Twitter,
  User,
  X,
} from "lucide-react";
import type { Icon as LucideIcon } from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  logo: Command,
  menu: Menu,
  hand: Hand,
  handMetal: HandMetal,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  gitHub: Github,
  twitter: Twitter,
  check: Check,
};

type CustomLogo = {
  width?: number;
  className?: string;
};

export function UCFLogo({ width = 18, className = "" }: CustomLogo) {
  return (
    <svg
      id='UCF_Logo'
      data-name='UCF Logo'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1921.41 2048'
      width={width}
      className={className}
    >
      <path
        d='M1418.37,1735.91c0-55-12.9-108.71-38.22-159.87-47.44-95.65-199.17-165.32-345.89-232.51-71.51-32.8-143.28-65.84-200.15-100.22C561.32,1077.94,471.45,875.75,444,735.1a610.45,610.45,0,0,1-11.29-116.49c0-120.44,35.64-234.56,100.4-321.23C790.46-47.36,1226.87-7.55,1354.47,12.82c-126.28,5.57-436.4,61.34-585.23,356.86-29.22,58.05-44,117.5-44,176.79,0,241.38,246.22,449.84,444,617.29,68.35,57.82,132.94,112.54,181.5,163.23,87.72,91.75,132.3,189.42,132.3,290.53,0,118.08-61.42,212.37-98,258.15,23.54-43.64,33.34-91.43,33.34-139.76'
        transform='translate(-63.3 0)'
        fill='#ffc907'
      />
      <path
        d='M209.22,1595.37c59.73,50.54,185.19,133.8,419,199.25,119.45,33.53,230.69,36.17,320,38.22,80.53,2,144.2,3.56,183.78,25.71,32.76,18.28,52.44,47.36,52.44,77.61l-2.25,17.31c-11.46,44.85-72.5,93.18-209.26,94.49-409,3.84-664.37-304.35-763.7-452.59'
        transform='translate(-63.3 0)'
        fill='#ffc907'
      />
      <path
        d='M947.46,886.72S1117.35,601.92,1292.82,556c213-55.72,330,35.48,330,35.48l58.48-116.61,90.58,446.05s15.91,40.51-58.67,91.28c-74.36,50.57-79.7,40.51-79.7,40.51s-48-182.45-143.76-202.7S1394,956.46,1399.28,996.89s86.75,206.64,223.53,136.82c149.06-76,218.22-172.29,218.22-172.29s21.3-50.62,42.64-35.48,101,101.39,101,101.39l-31.94,532.18s0,66-90.43,91.24-90.46,20.25-90.46,20.25l47.82-162.26h58.56l-15.92-375s-50.46,244.75-143.71,405.62C1606.93,1731.8,1425.85,1889,1425.85,1889s114.47-136.43,96.27-302.8c-11.93-110.21-59.95-237.58-298.27-434.24-134.69-111.18-276.39-265.19-276.39-265.19'
        transform='translate(-63.3 0)'
        fill='#ffc907'
      />
      <path
        d='M1225.32,1923.23c0-17-3.68-32.65-11-46.59-26.72-51.12-99.53-79.08-216.36-83.11-212.65-7.28-722.58-60.41-865.5-397.87C86.65,1287.22,63.3,1169.22,63.3,1044.72c0-142.17,30.34-258.19,50.77-320.81-2.5,17.15-3.82,49-3.82,49,0,133.18,31.93,382.92,246.07,560.14,135.85,112.57,339.38,201.37,604.83,264,179.9,42.41,282.6,106.77,305.3,191l4.61,35.78c0,41.71-18.63,85.86-52.9,131,3.52-10.89,7.16-31.56,7.16-31.56'
        transform='translate(-63.3 0)'
        fill='#ffc907'
      />
      <path
        d='M1319.58,1828.39a194.61,194.61,0,0,0-15.64-76.92c-38.89-91.24-147.32-156.76-322.38-194.87-459.22-100.11-719.39-283.67-795.29-561.26-18.72-68.62-27.05-132.75-27.05-192.58,0-380.65,334.89-585.2,448.71-643.64C547,216.4,417.26,356.78,393,534.93a706.92,706.92,0,0,0-6.63,95c0,226.24,116.74,424.94,354.76,604.95,75.3,56.88,176.47,102.62,274.22,146.77,140.69,63.62,273.52,123.65,325.68,211.29,26,43.72,35.79,86.28,35.79,125.36,0,81.55-42,148.28-70.44,184.45a222.59,222.59,0,0,0,13.24-74.35'
        transform='translate(-63.3 0)'
        fill='#ffc907'
      />
      <path
        d='M1306.26,266.55c-74.35,0-143.44-68.93-143.44-143.4,0,74.47-69,143.4-143.41,143.4,74.36,0,143.41,69.13,143.41,143.48,0-74.35,69.09-143.48,143.44-143.48'
        transform='translate(-63.3 0)'
        fill='#ffc907'
      />
    </svg>
  );
}
