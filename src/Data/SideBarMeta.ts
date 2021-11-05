type SideItem = { content: string; link: string; name: string };

type SideBarInterface = {
  Categories: SideItem[];
  Metas: SideItem[];
};

const SideBarMeta: SideBarInterface = {
  Categories: [
    {
      content: "가전디지털",
      link: "/categories/digital",
      name: "digital",
    },
    {
      content: "패션의류",
      link: "/categories/clothing",
      name: "clothing",
    },
    {
      content: "문구/오피스",
      link: "/categories/stationery",
      name: "stationery",
    },
  ],
  Metas: [
    { content: "내 정보", link: "/profile", name: "profile" },
    { content: "알람", link: "/notifications", name: "notifications" },
  ],
};

export default SideBarMeta;
