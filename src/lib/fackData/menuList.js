import home_1_screenshrot from "../../../public/images/home-showcase/home-showcase-1.jpg"
import home_2_screenshrot from "../../../public/images/home-showcase/home-showcase-2.jpg"
import home_3_screenshrot from "../../../public/images/home-showcase/home-showcase-3.jpg"
import home_4_screenshrot from "../../../public/images/home-showcase/home-showcase-4.jpg"
import home_5_screenshrot from "../../../public/images/home-showcase/home-showcase-5.jpg"
import home_6_screenshrot from "../../../public/images/home-showcase/up-coming-showcase.png"
export const menuList = [
    // {
    //     id: 1,
    //     path: "/",
    //     lable: "Home",
    //     megaMenu: 
    //     [
    //         {
    //             id: 1,
    //             path: "/",
    //             singlePath:"/home-single-1",
    //             lable: "Default",
    //             tag: "",
    //             src: home_1_screenshrot
    //         },
    //         {
    //             id: 2,
    //             path: "/home-2",
    //             singlePath:"/home-single-2",
    //             lable: "Home v2",
    //             tag: "Popular",
    //             src: home_2_screenshrot
    //         },
    //         {
    //             id: 3,
    //             path: "/home-3",
    //             singlePath:"/home-single-3",
    //             lable: "Home v3",
    //             tag: "",
    //             src: home_3_screenshrot
    //         },
    //         {
    //             id: 4,
    //             path: "/home-4",
    //             singlePath:"/home-single-4",
    //             lable: "Home v4",
    //             tag: "",
    //             src: home_4_screenshrot
    //         },
    //         {
    //             id: 5,
    //             path: "/home-5",
    //             singlePath:"/home-single-5",
    //             lable: "Home v5",
    //             tag: "New",
    //             src: home_5_screenshrot
    //         },
    //         {
    //             id: 6,
    //             path: "/",
    //             singlePath:"/",
    //             lable: "Coming soon",
    //             tag: "",
    //             src: home_6_screenshrot
    //         },

    //     ],
    //     dropDown: false
    // },
    {
        id: 2,
        path: "#",
        lable: "대학소개",
        dropDown: [
            {
                id: 1,
                path: "/about-us1",
                lable: "재단이사장 인사말",
                tag: ""
            },
            {
                id: 2,
                path: "/about-us2",
                lable: "대표원장 인사말",
                tag: "",
            },
            {
                id: 3,
                path: "/introduction",
                lable: "UND 항공대학교 소개",
                tag: "",
            },
            {
                id: 4,
                path: "/academy",
                lable: "글로벌 패스웨이",
                tag: "",
                // subDropdonwn: [
                //     {
                //         id: 1,
                //         path: "/career",
                //         lable: "Career",
                //         tag: "",
                //     },
                //     {
                //         id: 2,
                //         path: "/career-details",
                //         lable: "Career Details",
                //         tag: "",
                //     },

                // ]
            },
            {
                id: 5,
                path: "/way",
                lable: "오시는길",
                tag: ""
            },
            

        ],
        megaMenu: false
    },
    {
        id: 3,
        path: "#",
        lable: "학사과정",
        dropDown: [
            {
                id: 1,
                path: "/process",
                lable: "교육과정 개요",
                tag: ""
            },
            {
                id: 2,
                path: "/prestudy",
                lable: "UND항공대학교 입학/편입전 선행교육",
                tag: "",
            },
            {
              id: 3,
              path: "/curriculum",
              lable: "항공운항학과 커리큘럼",
              tag: "",
          },
        //   {
        //     id: 4,
        //     path: "/scholarship",
        //     lable: "UND 장학금 안내",
        //     tag: "",
        // },

        ],
        megaMenu: false
    },
    {
        id: 4,
        path: "#",
        lable: "졸업 후 진로",
        dropDown: [
            {
                id: 1,
                path: "/companyjob1",
                lable: "졸업 후 국내 항공사 취업",
                tag: ""
            },
            {
                id: 2,
                path: "/companyjob2",
                lable: "비행교관 경력 후 취업",
                tag: "",
            },

        ],
        megaMenu: false
    },
    {
        id: 5,
        path: "#",
        lable: "항공 준사관 진출",
        dropDown: [
            {
                id: 1,
                path: "/militaryintro",
                lable: "육군 항공 준사관 소개",
                tag: ""
            },
            {
                id: 2,
                path: "/militarycurriculum",
                lable: "헬기 자가용 면장 취득과정",
                tag: "",
            },
            {
                id: 3,
                path: "/militaryad",
                lable: "준사관 준비반 장점",
                tag: "",
            },
            

        ],
        megaMenu: false
    },
    {
      id: 6,
      path: "#",
      lable: "입학안내",
      dropDown: [
          {
              id: 1,
              path: "/meeting",
              lable: "입학설명회",
              tag: ""
          },
          {
              id: 2,
              path: "/requestmeeting",
              lable: "설명회 예약",
              tag: "",
          }
      ],
      megaMenu: false
  },
  {
    id: 7,
    path: "#",
    lable: "커뮤니티",
    dropDown: [
        {
            id: 1,
            path: "/notification",
            lable: "공지사항",
            tag: ""
        },
        {
            id: 2,
            path: "/news",
            lable: "항공NEWS",
            tag: "",
        },
        {
            id: 3,
            path: "/requestconsulting",
            lable: "방문상담신청",
            tag: "",
        },
        {
            id: 4,
            path: "/faq",
            lable: "FAQ",
            tag: "",
        }

    ],
    megaMenu: false
},
]