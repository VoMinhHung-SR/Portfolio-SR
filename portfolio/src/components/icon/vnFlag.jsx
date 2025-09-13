const VNFlag = ({ className = "w-5 h-5" }) => {
    return (
        <svg 
            className={className}
            viewBox="0 0 24 18" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Vietnam Flag */}
            <rect width="24" height="18" fill="#DA020E"/>
            <polygon 
                points="12,3 13.5,7.5 18,7.5 14.5,10.5 16,15 12,12 8,15 9.5,10.5 6,7.5 10.5,7.5" 
                fill="#FFFF00"
            />
        </svg>
    )
}

export default VNFlag;