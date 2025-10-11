const ENFlag = ({ className = "w-5 h-5" }) => {
    return (
        <svg 
            className={className}
            viewBox="0 0 24 18" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* UK Flag simplified */}
            <rect width="24" height="18" fill="#012169"/>
            <path d="M0 0L24 18M24 0L0 18" stroke="white" strokeWidth="2"/>
            <path d="M0 0L24 18M24 0L0 18" stroke="#C8102E" strokeWidth="1"/>
            <path d="M12 0V18M0 9H24" stroke="white" strokeWidth="3"/>
            <path d="M12 0V18M0 9H24" stroke="#C8102E" strokeWidth="1.5"/>
        </svg>
    )
}

export default ENFlag;