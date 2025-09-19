const ZaloIcon = ({ className = "" }) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 48 48" 
            width="48" 
            height="48"
            className={className}
        >
            <text 
                x="50%" 
                y="50%" 
                textAnchor="middle" 
                dy=".35em"
                fontFamily="Arial, sans-serif" 
                fontSize="14" 
                fontWeight="bold"
                fill="currentColor"
            >
                Zalo
            </text>
        </svg>
    )
}

export default ZaloIcon;