type SideItem = { content: string; link: string };

type SideBarInterface = {
  Categories: SideItem[];
  Metas: SideItem[];
};

const SideBarMeta: SideBarInterface = {
  Categories: [
    {
      content: "가전디지털",
      link: "/categories/digital",
    },
    {
      content: "패션의류",
      link: "/categories/clothing",
    },
    {
      content: "문구/오피스",
      link: "/categories/stationery",
    },
  ],
  Metas: [
    { content: "내 정보", link: "/profile" },
    { content: "알람", link: "/notifications" },
  ],
};

export default SideBarMeta;
