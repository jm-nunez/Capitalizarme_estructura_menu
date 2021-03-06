import React from "react"
import { Link } from "react-router-dom"
import { HOME } from "../../../constants/routes"

const Logo = () => (
    <Link to={HOME.link} className="font-bold  text-2xl ">
        <span className="flex flex-col ml-3 mr-3 bg-transparent bg-brand h-10 rounded-full justify-center items-center text-center cursor-pointer
        ">
            <div className="Logo_escritorio"> 
            <svg width="162" height="35" viewBox="0 0 162 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.2009 30.9156C25.033 30.9156 22.393 28.5592 21.9271 25.4488V30.9156H15.2807C6.83282 30.9156 0 24.0036 0 15.4578C0 6.91203 6.83282 0 15.2807 0H21.9271V23.5323C22.393 20.4533 25.033 18.0655 28.2009 18.0655C31.7105 18.0655 34.5368 20.9246 34.5368 24.4749C34.5368 28.0251 31.7105 30.9156 28.2009 30.9156Z" fill="#0069CB"/>
<path d="M41.7734 30.4443C38.7607 30.4443 36.3071 27.9623 36.3071 24.9147C36.3071 21.93 38.7607 19.5108 41.7734 19.5108C43.9475 19.5108 45.9041 20.8932 46.7117 22.9039H46.0284C45.2209 21.1759 43.6058 20.1077 41.8044 20.1077C39.1334 20.1077 36.9594 22.2756 36.9594 24.9147C36.9594 27.6167 39.1334 29.816 41.8044 29.816C43.6369 29.816 45.2209 28.7478 46.0284 27.0197H46.7117C45.9041 29.0619 43.9164 30.4443 41.7734 30.4443Z" fill="#0069CB"/>
<path d="M41.7734 19.5108C38.7607 19.5108 36.3071 21.93 36.3071 24.9147C36.3071 27.9623 38.7607 30.4444 41.7734 30.4444C43.9475 30.4444 45.9042 29.0619 46.7117 27.0198H46.0284C45.2209 28.7478 43.6058 29.816 41.8045 29.816C39.1334 29.816 36.9594 27.6167 36.9594 24.9147C36.9594 22.2756 39.1334 20.1077 41.8045 20.1077C43.6369 20.1077 45.2519 21.176 46.0284 22.904H46.7117C45.9042 20.8932 43.9164 19.5108 41.7734 19.5108ZM41.7734 30.947C38.4812 30.947 35.8102 28.2451 35.8102 24.9147C35.8102 21.6472 38.4812 18.9767 41.7734 18.9767C44.2891 18.9767 46.5564 20.6733 47.3018 23.061L47.395 23.4067H45.6557L45.5936 23.2496C44.9103 21.6158 43.4195 20.6104 41.7423 20.6104C39.3509 20.6104 37.3942 22.5269 37.3942 24.8833C37.3942 27.3025 39.3509 29.2819 41.7423 29.2819C43.4195 29.2819 44.8792 28.2765 45.5936 26.6427L45.6557 26.4856H47.395L47.3018 26.8312C46.5253 29.2505 44.2581 30.947 41.7734 30.947Z" fill="#0069CB"/>
<path d="M51.5878 24.2235C50.0659 24.2235 48.8857 25.4488 48.8857 27.0512C48.8857 28.6221 50.0659 29.8474 51.5878 29.8474C53.1407 29.8474 54.3209 28.6221 54.3209 27.0826C54.352 25.4802 53.1407 24.2235 51.5878 24.2235ZM54.9421 30.4443H54.352V28.6849L53.8861 29.3133C53.3271 30.0673 52.5506 30.4443 51.5878 30.4443C49.7554 30.4443 48.2956 28.9363 48.2956 27.0512C48.2956 25.1346 49.7554 23.658 51.5878 23.658C52.5506 23.658 53.3271 24.035 53.8861 24.789L54.352 25.4174V23.658H54.9421V30.4443Z" fill="#0069CB"/>
<path d="M51.5878 24.7576C50.3455 24.7576 49.3827 25.763 49.3827 27.0512C49.3827 28.3393 50.3455 29.3447 51.5878 29.3447C52.8301 29.3447 53.824 28.3393 53.824 27.0826C53.824 25.763 52.8612 24.7576 51.5878 24.7576ZM51.5878 29.8474C50.066 29.8474 48.8857 28.6221 48.8857 27.0512C48.8857 25.4802 50.066 24.2235 51.5878 24.2235C53.1407 24.2235 54.3209 25.4802 54.3209 27.0512C54.352 28.6221 53.1407 29.8474 51.5878 29.8474ZM54.352 28.6849V30.4443H54.9421V23.658H54.352V25.4174L53.8861 24.789C53.3271 24.035 52.5506 23.658 51.5878 23.658C49.7243 23.658 48.2956 25.1661 48.2956 27.0512C48.2956 28.9048 49.7864 30.4443 51.5878 30.4443C52.5506 30.4443 53.3271 30.0673 53.8861 29.3133L54.352 28.6849ZM55.439 30.947H53.824V30.1302C53.2339 30.6643 52.4574 30.947 51.5878 30.947C49.4758 30.947 47.7676 29.1876 47.7676 27.0512C47.7676 24.8833 49.4758 23.1239 51.5878 23.1239C52.4574 23.1239 53.2339 23.4066 53.824 23.9407V23.1239H55.439V30.947Z" fill="#0069CB"/>
<path d="M60.9674 24.2235C59.4456 24.2235 58.2343 25.4488 58.2343 27.0197C58.2343 28.5907 59.4456 29.8474 60.9674 29.8474C62.4893 29.8474 63.7006 28.6221 63.7006 27.0197C63.7006 25.4803 62.4893 24.2235 60.9674 24.2235ZM58.2653 34.4973H57.6752V23.658H58.2653V25.4174L58.7312 24.789C59.2592 24.0664 60.0667 23.658 60.9985 23.658C62.8309 23.658 64.3217 25.1661 64.3217 27.0512C64.3217 28.9363 62.8309 30.4443 60.9985 30.4443C60.0667 30.4443 59.2592 30.0359 58.7312 29.3447L58.2653 28.7478V34.4973Z" fill="#0069CB"/>
<path d="M60.9674 24.7576C59.8804 24.7576 58.7623 25.6059 58.7623 27.0512C58.7623 28.5278 59.9114 29.3447 60.9674 29.3447C62.2097 29.3447 63.1726 28.3393 63.1726 27.0512C63.2036 25.763 62.2408 24.7576 60.9674 24.7576ZM60.9674 29.8474C59.4456 29.8474 58.2343 28.6221 58.2343 27.0197C58.2343 25.4488 59.4456 24.2235 60.9674 24.2235C62.4582 24.2235 63.7005 25.4802 63.7005 27.0197C63.7005 28.6221 62.5203 29.8474 60.9674 29.8474ZM57.6752 23.658V34.4973H58.2653V28.7163L58.7312 29.3133C59.2592 30.0359 60.0667 30.4129 60.9985 30.4129C62.8309 30.4129 64.3217 28.8734 64.3217 27.0197C64.3217 25.1661 62.8309 23.6266 60.9985 23.6266C60.0667 23.6266 59.2592 24.035 58.7312 24.7576L58.2653 25.386V23.6266H57.6752V23.658ZM58.7623 35H57.1472V23.1239H58.7623V23.9407C59.3524 23.4066 60.1288 23.1239 60.9674 23.1239C63.0794 23.1239 64.7876 24.8833 64.7876 27.0197C64.7876 29.1876 63.0794 30.947 60.9674 30.947C60.1288 30.947 59.3524 30.6643 58.7623 30.1302V35Z" fill="#0069CB"/>
<path d="M66.8374 21.6158C66.4958 21.6158 66.2473 21.3645 66.2473 21.0189C66.2473 20.7047 66.4958 20.4219 66.8374 20.4219C67.148 20.4219 67.4275 20.7047 67.4275 21.0189C67.4275 21.3645 67.1791 21.6158 66.8374 21.6158ZM67.2101 30.4443H66.62V24.2235H65.9367V23.6266H67.2101V30.4443Z" fill="#0069CB"/>
<path d="M66.8374 20.4533C66.5269 20.4533 66.2473 20.7047 66.2473 21.0503C66.2473 21.3959 66.4958 21.6472 66.8374 21.6472C67.148 21.6472 67.4275 21.3959 67.4275 21.0503C67.4275 20.7361 67.148 20.4533 66.8374 20.4533ZM66.8374 22.1499C66.2163 22.1499 65.7504 21.6786 65.7504 21.0503C65.7504 20.4533 66.2473 19.9506 66.8374 19.9506C67.4275 19.9506 67.9245 20.4533 67.9245 21.0503C67.9555 21.6472 67.4586 22.1499 66.8374 22.1499ZM65.9368 23.658V24.2549H66.62V30.4443H67.2101V23.658H65.9368ZM67.7381 30.947H66.1231V24.7576H65.4398V23.1239H67.7381V30.947Z" fill="#0069CB"/>
<path d="M72.8317 30.4443H72.1794C71.3098 30.4443 70.5334 29.6903 70.5334 28.842V24.2235H69.0115V23.6266H70.1607C71.0303 23.6266 71.5583 22.9982 71.5583 21.93V21.1759H72.1484V21.93C72.1484 22.4641 72.0552 22.8097 71.7757 23.2181L71.4651 23.6266H72.8006V24.2235H71.1235V28.6849C71.1235 29.3447 71.5583 29.816 72.1794 29.816H72.8317V30.4443Z" fill="#0069CB"/>
<path d="M69.0115 23.658V24.2549H70.5334V28.8734C70.5334 29.7217 71.3098 30.4758 72.1794 30.4758H72.8317V29.8474H72.1794C71.5583 29.8474 71.1235 29.3761 71.1235 28.7163V24.2235H72.8317V23.6266H71.4962L71.8067 23.2181C72.0863 22.8411 72.1794 22.4955 72.1794 21.93V21.1759H71.5893V21.93C71.5893 22.9982 71.0613 23.6266 70.1917 23.6266H69.0115V23.658ZM73.3286 30.947H72.1794C71.0303 30.947 70.0364 29.9731 70.0364 28.842V24.7576H68.5146V23.1239H70.1917C70.9371 23.1239 71.0924 22.4955 71.0924 21.9614V20.6732H72.7074V21.9614C72.7074 22.4327 72.6453 22.7783 72.459 23.1239H73.3597V24.7576H71.6515V28.7163C71.6515 29.0305 71.8067 29.3447 72.2105 29.3447H73.3597V30.947" fill="#0069CB"/>
<path d="M77.5525 24.2235C76.0307 24.2235 74.8505 25.4488 74.8505 27.0512C74.8505 28.6221 76.0307 29.8474 77.5525 29.8474C79.1055 29.8474 80.2857 28.6221 80.2857 27.0826C80.2857 25.4802 79.0744 24.2235 77.5525 24.2235ZM80.8758 30.4443H80.2857V28.6849L79.8198 29.3133C79.2607 30.0673 78.4843 30.4443 77.5215 30.4443C75.689 30.4443 74.2293 28.9363 74.2293 27.0512C74.2293 25.1346 75.689 23.658 77.5215 23.658C78.4843 23.658 79.2607 24.035 79.8198 24.789L80.2857 25.4174V23.658H80.8758V30.4443Z" fill="#0069CB"/>
<path d="M77.5525 24.7576C76.3102 24.7576 75.3474 25.763 75.3474 27.0512C75.3474 28.3393 76.3102 29.3447 77.5525 29.3447C78.7949 29.3447 79.7887 28.3393 79.7887 27.0826C79.7887 25.763 78.8259 24.7576 77.5525 24.7576ZM77.5525 29.8474C76.0307 29.8474 74.8504 28.6221 74.8504 27.0512C74.8504 25.4802 76.0307 24.2235 77.5525 24.2235C79.1054 24.2235 80.2856 25.4802 80.2856 27.0512C80.2856 28.6221 79.0744 29.8474 77.5525 29.8474ZM80.2856 28.6849V30.4443H80.8758V23.658H80.2856V25.4174L79.8198 24.789C79.2607 24.035 78.4843 23.658 77.5215 23.658C75.658 23.658 74.2293 25.1661 74.2293 27.0512C74.2293 28.9048 75.7201 30.4443 77.5215 30.4443C78.4843 30.4443 79.2607 30.0673 79.8198 29.3133L80.2856 28.6849ZM81.3727 30.947H79.7577V30.1302C79.1675 30.6643 78.3911 30.947 77.5215 30.947C75.4095 30.947 73.7013 29.1876 73.7013 27.0512C73.7013 24.8833 75.4095 23.1239 77.5215 23.1239C78.3911 23.1239 79.1675 23.4066 79.7577 23.9407V23.1239H81.3727V30.947Z" fill="#0069CB"/>
<path d="M84.199 19.5108H83.6089V30.4443H84.199V19.5108Z" fill="#0069CB"/>
<path d="M83.6089 30.4444H84.199V19.5108H83.6089V30.4444ZM84.6959 30.947H83.0809V18.9767H84.6959V30.947Z" fill="#0069CB"/>
<path d="M87.3048 21.6158C86.9632 21.6158 86.7147 21.3645 86.7147 21.0189C86.7147 20.7047 86.9632 20.4219 87.3048 20.4219C87.6154 20.4219 87.8949 20.7047 87.8949 21.0189C87.8949 21.3645 87.6465 21.6158 87.3048 21.6158ZM87.6775 30.4443H87.0874V24.2235H86.4041V23.6266H87.6775V30.4443Z" fill="#0069CB"/>
<path d="M87.3049 20.4533C86.9943 20.4533 86.7147 20.7047 86.7147 21.0503C86.7147 21.3959 86.9632 21.6472 87.3049 21.6472C87.6154 21.6472 87.895 21.3959 87.895 21.0503C87.895 20.7361 87.6154 20.4533 87.3049 20.4533ZM87.3049 22.1499C86.6837 22.1499 86.2178 21.6786 86.2178 21.0503C86.2178 20.4533 86.7147 19.9506 87.3049 19.9506C87.895 19.9506 88.3919 20.4533 88.3919 21.0503C88.3919 21.6472 87.926 22.1499 87.3049 22.1499ZM86.4042 23.658V24.2549H87.0874V30.4443H87.6775V23.658H86.4042ZM88.2055 30.947H86.5905V24.7576H85.9072V23.1239H88.2055V30.947Z" fill="#0069CB"/>
<path d="M95.2868 30.4443H89.8516V29.6903L94.6657 24.2235H89.8516V23.658H95.2868V24.412L90.4728 29.8474H95.2868V30.4443Z" fill="#0069CB"/>
<path d="M89.8516 23.658V24.2549H94.6656L89.8516 29.6903V30.4443H95.2558V29.8474H90.4417L95.2558 24.412V23.658H89.8516ZM95.7837 30.947H89.3547V29.4704L93.5475 24.7262H89.3547V23.0925H95.7837V24.5691L91.6219 29.3447H95.8148V30.947" fill="#0069CB"/>
<path d="M100.07 24.2235C98.5479 24.2235 97.3677 25.4488 97.3677 27.0512C97.3677 28.6221 98.5479 29.8474 100.07 29.8474C101.623 29.8474 102.803 28.6221 102.803 27.0826C102.803 25.4802 101.592 24.2235 100.07 24.2235ZM103.393 30.4443H102.803V28.6849L102.337 29.3133C101.778 30.0673 101.002 30.4443 100.039 30.4443C98.2063 30.4443 96.7466 28.9363 96.7466 27.0512C96.7466 25.1346 98.2063 23.658 100.039 23.658C101.002 23.658 101.778 24.035 102.337 24.789L102.803 25.4174V23.658H103.393V30.4443Z" fill="#0069CB"/>
<path d="M100.07 24.7576C98.8275 24.7576 97.8647 25.763 97.8647 27.0512C97.8647 28.3393 98.8275 29.3447 100.07 29.3447C101.312 29.3447 102.306 28.3393 102.306 27.0826C102.306 25.763 101.343 24.7576 100.07 24.7576ZM100.07 29.8474C98.5479 29.8474 97.3677 28.6221 97.3677 27.0512C97.3677 25.4802 98.5479 24.2235 100.07 24.2235C101.623 24.2235 102.803 25.4802 102.803 27.0512C102.803 28.6221 101.592 29.8474 100.07 29.8474ZM102.803 28.6849V30.4443H103.393V23.658H102.803V25.4174L102.337 24.789C101.778 24.035 101.002 23.658 100.039 23.658C98.1752 23.658 96.7466 25.1661 96.7466 27.0512C96.7466 28.9048 98.2374 30.4443 100.039 30.4443C101.002 30.4443 101.778 30.0673 102.337 29.3133L102.803 28.6849ZM103.89 30.947H102.275V30.1302C101.685 30.6643 100.908 30.947 100.039 30.947C97.9268 30.947 96.2186 29.1876 96.2186 27.0512C96.2186 24.8833 97.9268 23.1239 100.039 23.1239C100.908 23.1239 101.685 23.4066 102.275 23.9407V23.1239H103.89V30.947Z" fill="#0069CB"/>
<path d="M106.716 30.4443H106.126V23.8779H106.716V25.8259L107.182 25.0404C107.431 24.632 108.145 23.658 109.449 23.658H110.039V24.2549H109.449C107.99 24.2549 106.716 25.5431 106.716 27.0197V30.4443Z" fill="#0069CB"/>
<path d="M106.126 23.8779V30.4129H106.716V27.0197C106.716 25.5431 107.99 24.2549 109.449 24.2549H110.039V23.658H109.449C108.145 23.658 107.431 24.632 107.182 25.0404L106.716 25.8258V23.8779H106.126ZM107.213 30.947H105.598V23.3752H107.213V24.1293C107.679 23.6266 108.393 23.1239 109.418 23.1239H110.505V24.7576H109.418C108.238 24.7576 107.213 25.8258 107.213 27.0197V30.947Z" fill="#0069CB"/>
<path d="M121.686 30.4443H121.096V26.2657C121.096 25.1661 120.196 24.2549 119.077 24.2549C117.959 24.2549 117.059 25.1661 117.059 26.2657V30.4443H116.469V26.2657C116.469 25.1661 115.568 24.2549 114.45 24.2549C113.363 24.2549 112.462 25.1347 112.462 26.2029V30.4443H111.872V23.658H112.462V24.8205L112.897 24.3178C113.176 24.0036 113.829 23.658 114.481 23.658C115.35 23.658 116.065 24.035 116.531 24.6948L116.748 24.9776L116.965 24.6948C117.462 24.035 118.239 23.6266 119.077 23.6266C120.506 23.6266 121.686 24.7891 121.686 26.2029V30.4443Z" fill="#0069CB"/>
<path d="M119.077 24.2235C120.196 24.2235 121.096 25.1346 121.096 26.2343V30.4129H121.686V26.2029C121.686 24.789 120.506 23.6266 119.077 23.6266C118.239 23.6266 117.462 24.0036 116.965 24.6948L116.748 24.9776L116.531 24.6948C116.065 24.0036 115.35 23.658 114.481 23.658C113.829 23.658 113.176 24.0036 112.897 24.3178L112.462 24.8205V23.658H111.872V30.4443H112.462V26.1714C112.462 25.1032 113.363 24.2235 114.45 24.2235C115.568 24.2235 116.469 25.1346 116.469 26.2343V30.4129H117.059V26.2657C117.059 25.1346 117.959 24.2235 119.077 24.2235ZM122.183 30.947H120.568V26.2343C120.568 25.4174 119.885 24.7262 119.077 24.7262C118.27 24.7262 117.587 25.4174 117.587 26.2343V30.947H115.972V26.2343C115.972 25.4174 115.288 24.7262 114.481 24.7262C113.673 24.7262 112.99 25.386 112.99 26.1714V30.947H111.375V23.1239H112.99V23.5951C113.394 23.3438 113.953 23.1239 114.512 23.1239C115.444 23.1239 116.22 23.4695 116.779 24.1293C117.369 23.4695 118.177 23.1239 119.077 23.1239C120.786 23.1239 122.183 24.5063 122.183 26.2029V30.947Z" fill="#0069CB"/>
<path d="M129.513 26.3285L129.358 25.9829C128.923 24.9147 127.991 24.2549 126.904 24.2549C125.848 24.2549 124.885 24.9461 124.451 25.9829L124.295 26.3285H129.513ZM126.904 30.4443C125.165 30.4443 123.736 28.9363 123.736 27.0826C123.736 25.1975 125.165 23.6266 126.904 23.6266C128.581 23.6266 129.948 25.0404 130.072 26.7998H124.264V27.0512C124.264 28.5592 125.444 29.816 126.904 29.816C127.805 29.816 128.674 29.3447 129.14 28.5907H129.73C129.171 29.7217 128.084 30.4443 126.904 30.4443Z" fill="#0069CB"/>
<path d="M126.904 24.7576C126.159 24.7576 125.507 25.1661 125.103 25.8258H128.706C128.302 25.1346 127.65 24.7576 126.904 24.7576ZM129.513 26.3285H124.326L124.482 25.9829C124.916 24.9461 125.848 24.2549 126.935 24.2549C128.022 24.2549 128.954 24.9147 129.389 25.9829L129.513 26.3285ZM126.904 23.658C125.165 23.658 123.736 25.1975 123.736 27.114C123.736 28.9677 125.165 30.4758 126.904 30.4758C128.084 30.4758 129.171 29.7846 129.73 28.6535H129.14C128.643 29.4075 127.774 29.8788 126.904 29.8788C125.444 29.8788 124.264 28.6535 124.264 27.114V26.8627H130.072C129.948 25.0404 128.581 23.658 126.904 23.658ZM126.904 30.947C124.885 30.947 123.208 29.219 123.208 27.0826C123.208 24.9147 124.854 23.1239 126.904 23.1239C128.923 23.1239 130.6 24.9147 130.6 27.0826V27.3339H124.792C124.916 28.465 125.817 29.3133 126.904 29.3133C127.681 29.3133 128.395 28.8734 128.799 28.2136L128.861 28.088H130.507L130.383 28.4336C129.793 29.9731 128.426 30.947 126.904 30.947Z" fill="#0069CB"/>
<path d="M132.37 30.4443C131.998 30.4443 131.656 30.1302 131.656 29.7217C131.656 29.3447 131.967 28.9991 132.37 28.9991C132.743 28.9991 133.085 29.3133 133.085 29.7217C133.054 30.0987 132.743 30.4443 132.37 30.4443Z" fill="#0069CB"/>
<path d="M132.37 29.0305C131.998 29.0305 131.656 29.3447 131.656 29.7531C131.656 30.1302 131.967 30.4758 132.37 30.4758C132.743 30.4758 133.085 30.1616 133.085 29.7531C133.054 29.3447 132.743 29.0305 132.37 29.0305ZM132.37 30.947C131.687 30.947 131.159 30.3815 131.159 29.7217C131.159 29.0305 131.718 28.4964 132.37 28.4964C133.054 28.4964 133.582 29.0619 133.582 29.7217C133.582 30.4129 133.023 30.947 132.37 30.947Z" fill="#0069CB"/>
<path d="M138.116 30.4443C136.346 30.4443 134.824 28.9048 134.824 27.0512C134.824 25.1661 136.284 23.658 138.116 23.658C139.514 23.658 140.663 24.5063 141.191 25.9201H140.601C140.135 24.8833 139.203 24.2549 138.116 24.2549C136.625 24.2549 135.414 25.5117 135.414 27.0826C135.414 28.5907 136.656 29.8788 138.116 29.8788C139.203 29.8788 140.135 29.2504 140.601 28.2136H141.191C140.663 29.596 139.545 30.4443 138.116 30.4443Z" fill="#0069CB"/>
<path d="M138.116 23.658C136.315 23.658 134.824 25.1975 134.824 27.0512C134.824 28.8734 136.315 30.4443 138.116 30.4443C139.545 30.4443 140.663 29.596 141.191 28.1822H140.601C140.135 29.219 139.203 29.8474 138.116 29.8474C136.656 29.8474 135.414 28.5592 135.414 27.0512C135.414 25.5117 136.625 24.2235 138.116 24.2235C139.203 24.2235 140.135 24.8519 140.601 25.8887H141.191C140.663 24.5063 139.514 23.658 138.116 23.658ZM138.116 30.947C136.066 30.947 134.327 29.1562 134.327 27.0512C134.327 24.8833 136.035 23.1239 138.116 23.1239C139.855 23.1239 141.253 24.2549 141.781 26.0772L141.874 26.4228H140.259L140.197 26.2657C139.824 25.3232 139.079 24.7576 138.116 24.7576C136.936 24.7576 135.942 25.7944 135.942 27.0512C135.942 28.2765 136.936 29.3447 138.116 29.3447C139.079 29.3447 139.824 28.8106 140.197 27.8366L140.259 27.6795H141.874L141.781 28.0251C141.253 29.8474 139.887 30.947 138.116 30.947Z" fill="#0069CB"/>
<path d="M146.191 24.2235C144.638 24.2235 143.458 25.4488 143.458 27.0198C143.458 28.5907 144.669 29.8474 146.191 29.8474C147.744 29.8474 148.924 28.6221 148.924 27.0198C148.924 25.4803 147.713 24.2235 146.191 24.2235ZM146.191 30.4443C144.359 30.4443 142.868 28.9049 142.868 27.0198C142.868 25.1661 144.359 23.6266 146.191 23.6266C148.024 23.6266 149.515 25.1347 149.515 27.0198C149.515 28.9049 148.024 30.4443 146.191 30.4443Z" fill="#0069CB"/>
<path d="M146.191 24.7576C144.949 24.7576 143.955 25.763 143.955 27.0512C143.955 28.3393 144.949 29.3447 146.191 29.3447C147.434 29.3447 148.428 28.3393 148.428 27.0512C148.428 25.763 147.434 24.7576 146.191 24.7576ZM146.191 29.8474C144.638 29.8474 143.458 28.6221 143.458 27.0197C143.458 25.4488 144.669 24.2235 146.191 24.2235C147.744 24.2235 148.924 25.4488 148.924 27.0197C148.924 28.6221 147.713 29.8474 146.191 29.8474ZM146.191 23.658C144.359 23.658 142.868 25.1661 142.868 27.0512C142.868 28.9363 144.359 30.4443 146.191 30.4443C148.024 30.4443 149.515 28.9048 149.515 27.0512C149.515 25.1661 148.024 23.658 146.191 23.658ZM146.191 30.947C144.079 30.947 142.34 29.1876 142.34 27.0197C142.34 24.8519 144.079 23.1239 146.191 23.1239C148.303 23.1239 150.043 24.8833 150.043 27.0197C150.043 29.1876 148.303 30.947 146.191 30.947Z" fill="#0069CB"/>
<path d="M161.503 30.4443H160.913V26.2657C160.913 25.1661 160.012 24.2549 158.894 24.2549C157.776 24.2549 156.875 25.1661 156.875 26.2657V30.4443H156.285V26.2657C156.285 25.1661 155.385 24.2549 154.266 24.2549C153.179 24.2549 152.279 25.1347 152.279 26.2029V30.4443H151.689V23.658H152.279V24.8205L152.714 24.3178C152.993 24.0036 153.645 23.658 154.298 23.658C155.167 23.658 155.882 24.035 156.347 24.6948L156.565 24.9776L156.782 24.6948C157.279 24.035 158.056 23.6266 158.894 23.6266C160.323 23.6266 161.503 24.7891 161.503 26.2029V30.4443Z" fill="#0069CB"/>
<path d="M158.894 24.2235C160.012 24.2235 160.913 25.1346 160.913 26.2343V30.4129H161.503V26.2029C161.503 24.789 160.323 23.6266 158.894 23.6266C158.056 23.6266 157.279 24.0036 156.782 24.6948L156.565 24.9776L156.347 24.6948C155.882 24.0036 155.167 23.658 154.298 23.658C153.645 23.658 152.993 24.0036 152.714 24.3178L152.279 24.8205V23.658H151.689V30.4443H152.279V26.1714C152.279 25.1032 153.179 24.2235 154.267 24.2235C155.385 24.2235 156.285 25.1346 156.285 26.2343V30.4129H156.875V26.2657C156.875 25.1346 157.776 24.2235 158.894 24.2235ZM162 30.947H160.385V26.2343C160.385 25.4174 159.702 24.7262 158.894 24.7262C158.087 24.7262 157.403 25.4174 157.403 26.2343V30.947H155.788V26.2343C155.788 25.4174 155.105 24.7262 154.298 24.7262C153.49 24.7262 152.807 25.386 152.807 26.1714V30.947H151.192V23.1239H152.807V23.5951C153.211 23.3438 153.77 23.1239 154.329 23.1239C155.26 23.1239 156.037 23.4695 156.596 24.1293C157.186 23.4695 157.993 23.1239 158.894 23.1239C160.602 23.1239 162 24.5063 162 26.2029V30.947Z" fill="#0069CB"/>
</svg>
            </div>
            <div className="Logo_movile">
            <svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.9 21.8384C28.4375 21.8384 25.575 24.3911 25.075 27.7071V2.3551H17.8375C8.64995 2.3551 1.19995 9.81305 1.19995 19.0103C1.19995 28.2076 8.64995 35.6656 17.8375 35.6656H25.075V29.7968C25.575 33.1254 28.4375 35.6656 31.9 35.6656C35.7124 35.6656 38.7999 32.5748 38.7999 28.7582C38.7999 24.9417 35.7124 21.8384 31.9 21.8384Z" fill="#0069CB"/>
            </svg>
            </div>
        </span>
    </Link>)

export default Logo