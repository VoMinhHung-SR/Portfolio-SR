const CSSIcon = ({ width = 24, height = 24, className = "w-6 h-6" }) => {
    return (
        <svg viewBox="0 0 48 48"
         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
         className={className}
         width={width}
         height={height}
        >
        <g strokeWidth="0"/>
        <g strokeLinecap="round" strokeLinejoin="round"/>
        <g>
          <title>css</title>
          <g>
            <g>
              <rect width="48" height="48" fill="none"/>
            </g>
            <g>
              <path d="M24,46,8.3,41.7,5,4H43L39.7,41.7ZM12,38.6l12,3.3,12-3.3L38.6,8H9.4Z"/>
              <path d="M14,13H34L32.2,34.3,23.9,37l-8.4-2.1-.9-7.2h4.5v3.6l4.8.9,4.4-.9V25.9H14.6l-.3-4.5a2.3,2.3,0,0,1,1.5-.6c6.9,0,12.5.6,12.5.6V17.8H14.6Z"/>
            </g>
          </g>
        </g>
      </svg>
      
    )
}

export default CSSIcon;