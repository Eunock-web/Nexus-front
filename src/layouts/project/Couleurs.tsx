interface ColorInterface {
    color: string
    className?: string
    isSelected?: boolean
    onClick?: () => void
}

function Couleurs({ color, className, isSelected, onClick }: ColorInterface) {
    return (
        <div
            onClick={onClick}
            className={`p-2 cursor-pointer group ${className || ''}`}
        >
            <div
                className={`
                    w-10 h-10 rounded-lg transition-all duration-200
                    ${isSelected
                        ? 'ring-2 ring-white ring-offset-2 ring-offset-[#16163b] scale-110'
                        : 'hover:scale-105'
                    }
                `}
                style={{ backgroundColor: color }}
            />
        </div>
    )
}

export default Couleurs