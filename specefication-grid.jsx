import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useTranslation } from "@/app/i18n";
export default async function Grid({ item, lng }) {
  const { t } = await useTranslation(lng, "tranlsation");
  return (
    <Card>
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 p-4 sm:p-6">
        <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
          {t("propertyDetails")}
        </div>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          {item.category && (
            <div className="flex items-center gap-2">
              <BuildingIcon className="h-6 w-6 text-gray-500" />
              <Label className="text-sm font-medium" htmlFor="category">
                {t(item.category)}
              </Label>
            </div>
          )}
          {item.type && (
            <div className="flex items-center gap-2">
              <HomeIcon className="h-6 w-6 text-gray-500" />
              <Label className="text-sm font-medium" htmlFor="type">
                {t(`${item.type}`)}
              </Label>
            </div>
          )}
          {item.propertyType && (
            <div className="flex items-center gap-2">
              <HomeIcon className="h-6 w-6 text-gray-500" />
              <Label className="text-sm font-medium" htmlFor="propertyType">
                {t(`${item.propertyType}`)}
              </Label>
            </div>
          )}
          {item.payment && (
            <div className="flex items-center gap-2">
              <CreditCardIcon className="h-6 w-6 text-gray-500" />
              <Label className="text-sm font-medium" htmlFor="payment">
                {t(`${item.payment}`)}
              </Label>
            </div>
          )}
          {item.bedrooms && (
            <div className="flex items-center gap-2">
              <BedIcon className="h-6 w-6 text-gray-500" />
              <Label className="text-sm font-medium" htmlFor="bedrooms">
                {t("bedrooms")} {item.bedrooms}
              </Label>
            </div>
          )}
          {item.bathrooms && (
            <div className="flex items-center gap-2">
              <BathIcon className="h-6 w-6 text-gray-500" />
              <Label className="text-sm font-medium" htmlFor="bathrooms">
                {t("bathrooms")} {item.bathrooms}
              </Label>
            </div>
          )}
          {item.size && (
            <div className="flex items-center gap-2">
              <ScaleIcon className="h-6 w-6 text-gray-500" />
              <Label className="text-sm font-medium" htmlFor="size">
                {item.size} m2
              </Label>
            </div>
          )}
          {item.isOwner && (
            <div className="flex items-center gap-2">
              <UserIcon className="h-6 w-6 text-gray-500" />
              <Label className="text-sm font-medium" htmlFor="isOwner">
                {item.isOwner === "Owner"
                  ? t("iAmTheOwner")
                  : t("iAmJustAnAdvertiser")}
              </Label>
            </div>
          )}
          {item.buildingAge && (
            <div className="flex items-center gap-2">
              <BuildingIcon className="h-6 w-6 text-gray-500" />
              <Label className="text-sm font-medium" htmlFor="buildingAge">
                {t("buildingAge")}: {item.buildingAge}
              </Label>
            </div>
          )}
          {item.designedFor && (
            <div className="flex items-center gap-2">
              <UserIcon className="h-6 w-6 text-gray-500" />
              <Label className="text-sm font-medium" htmlFor="designedFor">
                {t("designedFor")}: {item.designedFor}
              </Label>
            </div>
          )}
          {item.floorsNum && (
            <div className="flex items-center gap-2">
              <LampFloorIcon className="h-6 w-6 text-gray-500" />
              <Label className="text-sm font-medium" htmlFor="floorsNum">
                {t("floorsNum")}: {item.floorsNum}
              </Label>
            </div>
          )}
          {item.buildingSize && (
            <div className="flex items-center gap-2">
              <BuildingIcon className="h-6 w-6 text-gray-500" />
              <Label className="text-sm font-medium" htmlFor="buildingSize">
                {t("buildingSize")}: {item.buildingSize}
              </Label>
            </div>
          )}
          {item.landSize && (
            <div className="flex items-center gap-2">
              <MapIcon className="h-6 w-6 text-gray-500" />
              <Label className="text-sm font-medium" htmlFor="landSize">
                {t("landSize")}: {item.landSize}
              </Label>
            </div>
          )}
          {item.BuildingInterface && (
            <div className="flex items-center gap-2">
              <BuildingIcon className="h-6 w-6 text-gray-500" />
              <Label
                className="text-sm font-medium"
                htmlFor="BuildingInterface"
              >
                {t("buildingInterface")}: {item.BuildingInterface}
              </Label>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function BathIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
      <line x1="10" x2="8" y1="5" y2="7" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="7" x2="7" y1="19" y2="21" />
      <line x1="17" x2="17" y1="19" y2="21" />
    </svg>
  );
}

function BedIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </svg>
  );
}

function BuildingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function LampFloorIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 2h6l3 7H6l3-7Z" />
      <path d="M12 9v13" />
      <path d="M9 22h6" />
    </svg>
  );
}

function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function MapIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" x2="9" y1="3" y2="18" />
      <line x1="15" x2="15" y1="6" y2="21" />
    </svg>
  );
}

function ScaleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  );
}

function TagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
      <path d="M7 7h.01" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
