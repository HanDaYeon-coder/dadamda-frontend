interface IconProps {
    size: string,
    fill: string,
}

export function ShortcutIcon({ size, fill }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 25" fill="none">
            <path d="M19.005 19.5C19.002 19.5 19 19.502 19 19.502L19.005 19.5ZM5 19.506C5 19.502 4.998 19.5 4.995 19.5H5V19.506ZM19 19.5V13.5H21V19.502C21.0003 19.7642 20.9489 20.0238 20.8487 20.2662C20.7486 20.5085 20.6017 20.7287 20.4164 20.9143C20.2312 21.0998 20.0112 21.2471 19.769 21.3475C19.5268 21.448 19.2672 21.4998 19.005 21.5H4.995C4.46615 21.4997 3.95902 21.2896 3.58497 20.9157C3.21092 20.5418 3.00053 20.0348 3 19.506V5.49396C3 4.39296 3.896 3.49996 4.997 3.49996H11V5.49996H5V19.5H19ZM5 19.506C5 19.502 4.998 19.5 4.995 19.5H5V19.506ZM11 5.49996H5V19.5H19V13.5H21V19.502C21.0003 19.7642 20.9489 20.0238 20.8487 20.2662C20.7486 20.5085 20.6017 20.7287 20.4164 20.9143C20.2312 21.0998 20.0112 21.2471 19.769 21.3475C19.5268 21.448 19.2672 21.4998 19.005 21.5H4.995C4.46615 21.4997 3.95902 21.2896 3.58497 20.9157C3.21092 20.5418 3.00053 20.0348 3 19.506V5.49396C3 4.39296 3.896 3.49996 4.997 3.49996H11V5.49996ZM19 5.49996V8.49996C19 8.76518 19.1054 9.01953 19.2929 9.20707C19.4804 9.3946 19.7348 9.49996 20 9.49996C20.2652 9.49996 20.5196 9.3946 20.7071 9.20707C20.8946 9.01953 21 8.76518 21 8.49996V4.49996C21 4.23474 20.8946 3.98039 20.7071 3.79285C20.5196 3.60532 20.2652 3.49996 20 3.49996H16C15.7348 3.49996 15.4804 3.60532 15.2929 3.79285C15.1054 3.98039 15 4.23474 15 4.49996C15 4.76518 15.1054 5.01953 15.2929 5.20707C15.4804 5.3946 15.7348 5.49996 16 5.49996H19Z" fill={fill} />
            <path d="M12.707 13.207L20.707 5.20696C20.8025 5.11471 20.8787 5.00437 20.9311 4.88236C20.9835 4.76036 21.0111 4.62914 21.0123 4.49636C21.0134 4.36358 20.9881 4.2319 20.9378 4.10901C20.8875 3.98611 20.8133 3.87446 20.7194 3.78056C20.6255 3.68667 20.5138 3.61242 20.391 3.56214C20.2681 3.51186 20.1364 3.48655 20.0036 3.48771C19.8708 3.48886 19.7396 3.51645 19.6176 3.56886C19.4956 3.62127 19.3852 3.69745 19.293 3.79296L11.293 11.793C11.1108 11.9816 11.01 12.2342 11.0123 12.4964C11.0146 12.7586 11.1198 13.0094 11.3052 13.1948C11.4906 13.3802 11.7414 13.4854 12.0036 13.4876C12.2658 13.4899 12.5184 13.3891 12.707 13.207Z" fill={fill} />
        </svg>
    );
}

export function MoreIcon({ size, fill }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 25" fill="none">
            <path d="M12 21.5C13.1046 21.5 14 20.6046 14 19.5C14 18.3954 13.1046 17.5 12 17.5C10.8954 17.5 10 18.3954 10 19.5C10 20.6046 10.8954 21.5 12 21.5Z" fill={fill} />
            <path d="M12 14.5C13.1046 14.5 14 13.6046 14 12.5C14 11.3954 13.1046 10.5 12 10.5C10.8954 10.5 10 11.3954 10 12.5C10 13.6046 10.8954 14.5 12 14.5Z" fill={fill} />
            <path d="M12 7.5C13.1046 7.5 14 6.60457 14 5.5C14 4.39543 13.1046 3.5 12 3.5C10.8954 3.5 10 4.39543 10 5.5C10 6.60457 10.8954 7.5 12 7.5Z" fill={fill} />
        </svg>
    );
}

export function RightArrowIcon({ size, fill }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9949 10.995C15.1824 11.1825 15.2877 11.4368 15.2877 11.702C15.2877 11.9672 15.1824 12.2215 14.9949 12.409L10.4019 17.002C10.2156 17.1846 9.96482 17.2862 9.70399 17.2849C9.44317 17.2836 9.19339 17.1794 9.00896 16.995C8.82452 16.8105 8.72032 16.5608 8.71901 16.2999C8.71769 16.0391 8.81936 15.7883 9.00192 15.602L12.9019 11.702L9.00192 7.80201C8.81936 7.61572 8.71769 7.36491 8.71901 7.10408C8.72032 6.84325 8.82452 6.59348 9.00896 6.40904C9.19339 6.22461 9.44317 6.12041 9.70399 6.11909C9.96482 6.11777 10.2156 6.21944 10.4019 6.40201L14.9949 10.995Z" fill={fill} />
        </svg>
    )
}

export function LeftArrowIcon({ size, fill }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00494 10.995L13.5979 6.40199C13.6895 6.30854 13.7987 6.23416 13.9192 6.18318C14.0397 6.13219 14.1692 6.10559 14.3 6.10493C14.4309 6.10427 14.5605 6.12956 14.6816 6.17932C14.8026 6.22909 14.9125 6.30236 15.0051 6.39488C15.0976 6.48741 15.1708 6.59736 15.2206 6.71837C15.2704 6.83939 15.2957 6.96907 15.295 7.09992C15.2943 7.23077 15.2677 7.36019 15.2168 7.48069C15.1658 7.6012 15.0914 7.7104 14.9979 7.80199L11.0979 11.702L14.9979 15.602C15.1805 15.7883 15.2822 16.0391 15.2809 16.2999C15.2795 16.5607 15.1753 16.8105 14.9909 16.995C14.8065 17.1794 14.5567 17.2836 14.2959 17.2849C14.035 17.2862 13.7842 17.1846 13.5979 17.002L9.00494 12.41C8.81747 12.2225 8.71216 11.9682 8.71216 11.703C8.71216 11.4378 8.81747 11.1835 9.00494 10.996V10.995Z" fill={fill} />
        </svg>
    )
}