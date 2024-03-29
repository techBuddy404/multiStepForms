export const bathroomsProps = {
  title: "Bathrooms",
  itemsArray: [...Array.from({ length: 10 }, (_, i) => i + 1), "+10"],
  paramNameToSet: "bathrooms",
  paramsToCheck: [],
};
export const bedroomsProps = {
  title: "Bedrooms",
  itemsArray: ["studio", ...Array.from({ length: 10 }, (_, i) => i + 1), "+10"],
  paramNameToSet: "bedrooms",
  paramsToCheck: [],
};
export const floorProps = {
  title: "Floor",
  itemsArray: [
    "Basement",
    "Ground Floor",
    "Ground Floor",
    "Top Floor with Roof",
    "Top Floor with Roof",
    ...Array.from({ length: 10 }, (_, i) => i + 1),
    "+10",
  ],
  paramNameToSet: "floorsNum",
  paramsToCheck: [],
};
export const floorsNumProps = {
  title: "Number of Floors",
  itemsArray: [
    "Basement",
    ...Array.from({ length: 10 }, (_, i) => i + 1),
    "+10",
  ],
  paramNameToSet: "floorsNum",
  paramsToCheck: [],
};
export const interfaceProps = {
  title: "Interface",
  itemsArray: [
    "North",
    "South",
    "East",
    "West",
    "Northeast",
    "Northwest",
    "Southeast",
    "Southwest",
  ],
  paramNameToSet: "interface",
  paramsToCheck: [],
};
export const buildingAge = {
  title: "Building Age",
  itemsArray: [
    "Under Construction", // عمر البناء
    "Under Construction", // قيد الإنشاء
    "0 - 11 months", // 0 - 11 شهر
    "1 - 5 years", // 1 - 5 سنوات
    "6 - 9 years", // 6 - 9 سنوات
    "10 - 19 years", // 10 - 19 سنوات
    "20+ years", // 20+ سنة
  ],
  paramNameToSet: "buildingAge",
  paramsToCheck: [],
};
export const amenitiesArray = [
  "maidsRoom",
  "study",
  "centralACHeating",
  "conciergeService",
  "balcony",
  "privateGarden",
  "privatePool",
  "privateGym",
  "privateJacuzzi",
  "sharedPool",
  "sharedSpa",
  "sharedGym",
  "security",
  "maidService",
  "coveredParking",
  "builtInWardrobes",
  "walkInCloset",
  "builtInKitchenAppliances",
  "viewOfWater",
  "viewOfLandmark",
  "petsAllowed",
  "doubleGlazedWindows",
  "dayCareCenter",
  "electricityBackup",
  "firstAidMedicalCenter",
  "serviceElevators",
  "prayerRoom",
  "laundryRoom",
  "broadbandInternet",
  "satelliteCableTV",
  "businessCenter",
  "intercom",
  "atmFacility",
  "kidsPlayArea",
  "receptionWaitingRoom",
  "maintenanceStaff",
  "cctvSecurity",
  "cafeteriaOrCanteen",
  "sharedKitchen",
  "facilitiesForDisabled",
  "storageAreas",
  "cleaningServices",
  "barbequeArea",
  "lobbyInBuilding",
  "wasteDisposal",
];
export const propertyTypes = {
  title: "Property Types",
  itemsArray: [
    "Office", // مكتب
    "Clinic", // عيادة
    "Shop", // محل
    "Showroom", // معرض
    "Warehouse", // مخزن
    "Complex", // مجمع
    "Restaurant and Café", // مطعم وكوفي شوب
    "Villa", // فيلا
    "Hotel", // فندق
    "Factory", // مصنع
    "Full Floor", // طابق كامل
    "Staff Accommodation", // سكن موظفين
    "Supermarket", // سوبر ماركت
  ],
  paramNameToSet: "propertyType",
  paramsToCheck: [],
};

let amenities = [
  "Central AC", // تكييف مركزي
  "Air Conditioning", // مكيف
  "Heating", // تدفئة
  "Balcony / Terrace", // شرفة / بلكونة
  "Maid's Room", // غرفة خادمة
  "Laundry Room", // غرفة غسيل
  "Built-in Wardrobes", // خزائن حائط
  "Private Pool", // مسبح خاص
  "Solar Water Heater", // سخان شمسي
  "Double Glazed Windows", // زجاج شبابيك مزدوج
  "Jacuzzi", // جاكوزي
  "Fully Equipped Kitchen", // مطبخ جاهز
  "Electric Shutters", // اباجورت كهرباء
  "Underfloor Heating", // تدفئة تحت البلاط
  "Washing Machine", // غسالة
  "Dishwasher", // جلاية صحون
  "Microwave", // مايكرويف
  "Oven", // فرن
  "Refrigerator", // ثلاجة
];
let facilities = [
  "Elevator", // مصعد
  "Garden", // حديقة
  "Parking", // موقف سيارات
  "Guard / Security", // حارس / أمن وحماية
  "Stairs", // درج
  "Storage", // مخزن
  "BBQ Area", // منطقة شواء
  "Emergency Backup Power System", // نظام كهرباء احتياطي للطوارئ
  "Swimming Pool", // بركة سباحة
  "Intercom", // انتركم
  "Internet", // انترنت
  "Facilities for People with Disabilities", // تسهيلات لأصحاب الهمم
  "Facilities for People with Disabilities", // تسهيلات لأصحاب الهمم
];
