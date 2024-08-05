import Location from "../../../public/icons/location";
import TimeSquare from "../../../public/icons/timeSquare";
import Work from "../../../public/icons/work";

export const jobsData = [
    {
        id: 1,
        position: {
            icon: <Work width={25} height={26} />,
            position_name: "Business Manager"
        },
        job_nature: {
            icon: <TimeSquare />,
            nature: "Full Time"
        },
        location: {
            icon: <Location />,
            location: "고정익 비행시간 총 1,000시간 이상인 자 (후방석 비행시간 제외), 국내 자격증명 (CPL, MEL, IR, 항공업 4등급 이상) 소지자"
        },
    },
    {
        id: 2,
        position: {
            icon: <Work />,
            position_name: "Support Ninja"
        },
        job_nature: {
            icon: <TimeSquare />,
            nature: "Full Time"
        },
        location: {
            icon: <Location />,
            location: "Anywhere"
        },
    },
    {
        id: 1,
        position: {
            icon: <Work />,
            position_name: "Digital Assistant"
        },
        job_nature: {
            icon: <TimeSquare />,
            nature: "Full Time"
        },
        location: {
            icon: <Location />,
            location: "California"
        },
    },

]