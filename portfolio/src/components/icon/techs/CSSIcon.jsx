const CSSIcon = ({ width = 24, height = 24, className = "rounded" }) => {
    return (
        <svg viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
         className={className}
         width={width}
         height={height}
        >
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="m12 23-7.85-2.15L2.5 2h19l-1.65 18.85Zm-6-3.7 6 1.65 6-1.65L19.3 4H4.7Z"/>
            <path d="M7 6.5h10l-.9 10.65-4.15 1.35-4.2-1.05-.45-3.6h2.25v1.8l2.4.45 2.2-.45v-2.7H7.3l-.15-2.25a1.15 1.15 0 0 1 .75-.3c3.45 0 6.25.3 6.25.3V8.9H7.3Z"/>
        </svg>
      
    )
}

export default CSSIcon;